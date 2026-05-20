// Inline content editing.
//
// On every page load, fetches all rows from `page_content` and applies the
// stored content to matching `[data-edit-key="…"]` elements. If a key has no
// stored row, the original HTML in the document is used as the fallback.
//
// When IS_ADMIN is true, hovering an editable element shows a dashed outline
// + pencil icon (CSS). Clicking enters contenteditable mode. Click outside
// (blur) upserts the change to `page_content`. Esc cancels.
(function () {
  var contentMap = {};                 // page_key -> row
  var snapshots = new WeakMap();       // editable element -> innerHTML before edit
  var hintEl = null;
  var activeEl = null;
  var initialised = false;

  // ----------------------------------------------------------------------
  // Fetch + apply
  // ----------------------------------------------------------------------
  async function fetchContent() {
    if (!window.sb) return;
    var res = await window.sb.from('page_content').select('*');
    if (res.error) { console.error('[inline-edit] fetch failed', res.error); return; }
    contentMap = {};
    (res.data || []).forEach(function (r) { contentMap[r.page_key] = r; });
  }

  function applyToElement(el, row) {
    if (!el || !row) return;
    if (row.content_type === 'image_url') {
      var img = el.tagName === 'IMG' ? el : el.querySelector('img');
      if (img) img.src = row.content;
    } else {
      // 'text' and 'html' both render as innerHTML — admins editing a
      // plain-text element can still type rich HTML if they paste it; the
      // stored content_type is preserved on save.
      el.innerHTML = row.content;
    }
    el.dataset.editApplied = '1';
  }

  function applyAll() {
    document.querySelectorAll('[data-edit-key]').forEach(function (el) {
      var row = contentMap[el.dataset.editKey];
      if (row) applyToElement(el, row);
    });
  }

  // ----------------------------------------------------------------------
  // Editing — click to edit, blur to save, Esc to cancel
  // ----------------------------------------------------------------------
  function onDocClick(e) {
    if (!window.IS_ADMIN) return;
    // Ignore clicks inside an element already being edited (allow text selection)
    if (activeEl && activeEl.contains(e.target)) return;

    var el = e.target.closest('[data-edit-key]');
    if (!el) return;
    // Don't intercept clicks on nested interactive descendants (e.g. <i> in a CTA).
    e.preventDefault();
    e.stopPropagation();
    startEdit(el);
  }

  function onDocKey(e) {
    if (e.key !== 'Escape' || !activeEl) return;
    e.preventDefault();
    cancelEdit(activeEl);
  }

  function startEdit(el) {
    if (activeEl && activeEl !== el) {
      // Save in-progress edit first (treat as blur)
      saveEdit(activeEl);
    }
    snapshots.set(el, el.innerHTML);
    el.setAttribute('contenteditable', 'true');
    el.setAttribute('spellcheck', 'true');
    el.dataset.editing = '1';
    activeEl = el;
    el.addEventListener('blur', onBlur, { once: true });
    el.focus();
    selectAllText(el);
    showHint();
  }

  function onBlur(e) {
    var el = e.target;
    if (el.dataset.editing !== '1') return;
    saveEdit(el);
  }

  async function saveEdit(el) {
    var key = el.dataset.editKey;
    var newHtml = el.innerHTML;
    var prevRow = contentMap[key];
    var snapshotHtml = snapshots.get(el);
    snapshots.delete(el);

    finishEditingUI(el);
    activeEl = null;

    // No change → no write.
    if (newHtml === snapshotHtml) return;

    var payload = {
      page_key: key,
      content_type: (prevRow && prevRow.content_type) || 'text',
      content: newHtml
    };

    try {
      var res = await window.sb
        .from('page_content')
        .upsert(payload, { onConflict: 'page_key' })
        .select()
        .single();
      if (res.error) throw res.error;
      contentMap[key] = res.data;
      window.showToast && window.showToast('Saved');
    } catch (err) {
      console.error('[inline-edit] save failed', err);
      window.showToast && window.showToast(err.message || 'Failed to save', 'error');
      el.innerHTML = snapshotHtml;  // revert
    }
  }

  function cancelEdit(el) {
    var prev = snapshots.get(el);
    snapshots.delete(el);
    el.removeEventListener('blur', onBlur);
    if (prev !== undefined) el.innerHTML = prev;
    finishEditingUI(el);
    activeEl = null;
  }

  function finishEditingUI(el) {
    el.setAttribute('contenteditable', 'false');
    el.removeAttribute('contenteditable'); // clean attribute
    el.dataset.editing = '';
    hideHint();
  }

  function selectAllText(el) {
    try {
      var r = document.createRange();
      r.selectNodeContents(el);
      var s = window.getSelection();
      s.removeAllRanges();
      s.addRange(r);
    } catch (e) {}
  }

  function showHint() {
    if (hintEl) return;
    hintEl = document.createElement('div');
    hintEl.className = 'edit-hint';
    hintEl.setAttribute('role', 'status');
    hintEl.textContent = 'Press Esc to cancel  ·  Click outside to save';
    document.body.appendChild(hintEl);
    requestAnimationFrame(function () { hintEl && hintEl.classList.add('edit-hint-visible'); });
  }
  function hideHint() {
    if (!hintEl) return;
    var el = hintEl;
    hintEl = null;
    el.classList.remove('edit-hint-visible');
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 200);
  }

  // ----------------------------------------------------------------------
  // Bootstrapping
  // ----------------------------------------------------------------------
  async function init() {
    if (initialised) return;
    initialised = true;
    if (!window.sb) {
      console.warn('[inline-edit] Supabase client not initialised — inline edits disabled.');
      return;
    }
    await fetchContent();
    applyAll();
    document.addEventListener('click', onDocClick, true);
    document.addEventListener('keydown', onDocKey, true);
    // Re-apply content when the SPA renders a new page (page modules can
    // re-build their innerHTML on hashchange in the future, even though the
    // current implementation renders once).
    window.addEventListener('hashchange', function () { setTimeout(applyAll, 60); });
  }

  window.InlineEdit = {
    init: init,
    applyAll: applyAll,
    refresh: function () { return fetchContent().then(applyAll); }
  };

  // Init after page modules have rendered their DOM.
  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(init, 80);
  });
})();
