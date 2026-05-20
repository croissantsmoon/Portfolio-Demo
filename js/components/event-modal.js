// Event editor modal — shared by the calendar for add + edit.
// API: window.EventModal.open({ event, defaultDate, defaultPage, articles, onSaved, onDeleted })
//   - event:        existing row to edit, or null/undefined for "new"
//   - defaultDate:  ISO date string used when creating a new event
//   - defaultPage:  'home' | 'mou' — pre-checks the corresponding visible_on
//   - articles:     [{id,title}, ...] for the "linked article" dropdown
//   - onSaved:      function(savedEvent) — called after a successful save
//   - onDeleted:    function(id)         — called after a successful delete
(function () {
  var modalEl = null;
  var state = null;

  var TYPES = [
    { value: 'meeting',            label: 'Meeting' },
    { value: 'note',               label: 'Note' },
    { value: 'article_published',  label: 'Article published' },
    { value: 'other',              label: 'Other' }
  ];

  function open(opts) {
    if (!window.IS_ADMIN || !window.sb) return;
    state = {
      event: opts.event || null,
      defaultDate: opts.defaultDate || todayISO(),
      defaultPage: opts.defaultPage || 'home',
      articles: opts.articles || [],
      onSaved: opts.onSaved,
      onDeleted: opts.onDeleted,
      isSaving: false
    };
    if (!modalEl) modalEl = build();
    fillModal();
    modalEl.classList.remove('hidden');
    document.body.classList.add('admin-modal-open');
    document.addEventListener('keydown', onKey);
    setTimeout(function () {
      var t = modalEl.querySelector('#ev-title');
      if (t) t.focus();
    }, 30);
  }

  function close() {
    if (!modalEl) return;
    modalEl.classList.add('hidden');
    document.body.classList.remove('admin-modal-open');
    document.removeEventListener('keydown', onKey);
    state = null;
  }

  function onKey(e) {
    if (e.key === 'Escape') close();
  }

  function build() {
    var wrap = document.createElement('div');
    wrap.id = 'event-modal';
    wrap.className = 'admin-modal hidden';
    wrap.setAttribute('role', 'dialog');
    wrap.setAttribute('aria-modal', 'true');
    wrap.setAttribute('aria-labelledby', 'event-modal-title');
    wrap.innerHTML =
      '<div class="admin-modal-backdrop" data-ev-dismiss="1"></div>' +
      '<div class="admin-modal-panel" role="document" style="max-width:560px">' +
        '<button type="button" class="admin-modal-close" aria-label="Close event editor" data-ev-dismiss="1">×</button>' +
        '<h2 id="event-modal-title" class="font-heading" style="font-size:1.4rem;margin:0 0 16px;color:#1C1C1E">New event</h2>' +
        '<form id="event-form" novalidate>' +
          '<label class="admin-field-label" for="ev-title">Title</label>' +
          '<input id="ev-title" class="admin-input" required />' +

          '<div class="grid md:grid-cols-2 gap-3 mt-3">' +
            '<div>' +
              '<label class="admin-field-label" for="ev-date">Date</label>' +
              '<input id="ev-date" type="date" class="admin-input" required />' +
            '</div>' +
            '<div>' +
              '<label class="admin-field-label" for="ev-time">Time (optional)</label>' +
              '<input id="ev-time" type="time" class="admin-input" />' +
            '</div>' +
          '</div>' +

          '<div class="grid md:grid-cols-2 gap-3 mt-3">' +
            '<div>' +
              '<label class="admin-field-label" for="ev-type">Type</label>' +
              '<select id="ev-type" class="admin-select">' +
                TYPES.map(function (t) { return '<option value="' + t.value + '">' + t.label + '</option>'; }).join('') +
              '</select>' +
            '</div>' +
            '<div>' +
              '<label class="admin-field-label" for="ev-location">Location</label>' +
              '<input id="ev-location" class="admin-input" placeholder="(optional)" />' +
            '</div>' +
          '</div>' +

          '<label class="admin-field-label" for="ev-description" style="margin-top:12px">Description</label>' +
          '<input id="ev-description" class="admin-input" placeholder="One-line summary (optional)" />' +

          '<label class="admin-field-label" for="ev-notes" style="margin-top:12px">Notes (Markdown allowed)</label>' +
          '<textarea id="ev-notes" class="admin-textarea" rows="5" placeholder="Meeting notes, links, follow-ups…"></textarea>' +

          '<div class="grid md:grid-cols-2 gap-3 mt-3">' +
            '<div>' +
              '<span class="admin-field-label">Visible on</span>' +
              '<label class="admin-checkbox-row"><input type="checkbox" id="ev-visible-home"> Home</label>' +
              '<label class="admin-checkbox-row"><input type="checkbox" id="ev-visible-mou">  MoU / MoA</label>' +
            '</div>' +
            '<div>' +
              '<label class="admin-field-label" for="ev-article">Linked article</label>' +
              '<select id="ev-article" class="admin-select"><option value="">— none —</option></select>' +
            '</div>' +
          '</div>' +

          '<div id="ev-error" class="admin-error" role="alert" hidden></div>' +

          '<div style="display:flex;gap:8px;justify-content:space-between;margin-top:18px;flex-wrap:wrap">' +
            '<button type="button" class="admin-btn admin-btn-ghost" id="ev-delete" style="color:#9A3A20;display:none">Delete</button>' +
            '<div style="display:flex;gap:8px;margin-left:auto">' +
              '<button type="button" class="admin-btn admin-btn-ghost"   data-ev-dismiss="1">Cancel</button>' +
              '<button type="submit" class="admin-btn admin-btn-primary" id="ev-save">Save</button>' +
            '</div>' +
          '</div>' +
        '</form>' +
      '</div>';

    document.body.appendChild(wrap);

    wrap.addEventListener('click', function (e) {
      var t = e.target;
      if (t && t.dataset && t.dataset.evDismiss === '1') close();
    });
    wrap.querySelector('#event-form').addEventListener('submit', onSubmit);
    wrap.querySelector('#ev-delete').addEventListener('click', onDelete);

    return wrap;
  }

  function fillModal() {
    var ev = state.event;
    var titleH = modalEl.querySelector('#event-modal-title');
    titleH.textContent = ev ? 'Edit event' : 'New event';

    modalEl.querySelector('#ev-title').value       = ev ? (ev.title || '') : '';
    modalEl.querySelector('#ev-date').value        = ev ? (ev.event_date || '') : state.defaultDate;
    modalEl.querySelector('#ev-time').value        = ev && ev.event_time ? ev.event_time.slice(0, 5) : '';
    modalEl.querySelector('#ev-type').value        = ev ? (ev.event_type || 'meeting') : 'meeting';
    modalEl.querySelector('#ev-location').value    = ev ? (ev.location || '') : '';
    modalEl.querySelector('#ev-description').value = ev ? (ev.description || '') : '';
    modalEl.querySelector('#ev-notes').value       = ev ? (ev.notes || '') : '';

    var visible = ev ? (ev.visible_on || []) : [state.defaultPage];
    modalEl.querySelector('#ev-visible-home').checked = visible.indexOf('home') !== -1;
    modalEl.querySelector('#ev-visible-mou').checked  = visible.indexOf('mou')  !== -1;

    var artSel = modalEl.querySelector('#ev-article');
    artSel.innerHTML = '<option value="">— none —</option>' +
      state.articles.map(function (a) {
        var sel = ev && ev.linked_article_id === a.id ? ' selected' : '';
        return '<option value="' + a.id + '"' + sel + '>' + escapeHtml(a.title || '(untitled)') + '</option>';
      }).join('');

    modalEl.querySelector('#ev-delete').style.display = ev ? '' : 'none';

    var err = modalEl.querySelector('#ev-error');
    err.hidden = true; err.textContent = '';
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (state.isSaving) return;
    var err = modalEl.querySelector('#ev-error');
    err.hidden = true; err.textContent = '';

    var visible = [];
    if (modalEl.querySelector('#ev-visible-home').checked) visible.push('home');
    if (modalEl.querySelector('#ev-visible-mou').checked)  visible.push('mou');

    var title = modalEl.querySelector('#ev-title').value.trim();
    var date  = modalEl.querySelector('#ev-date').value;
    if (!title) { showErr('Title is required.'); return; }
    if (!date)  { showErr('Date is required.');  return; }

    var payload = {
      title: title,
      event_date: date,
      event_time: modalEl.querySelector('#ev-time').value || null,
      event_type: modalEl.querySelector('#ev-type').value,
      location: modalEl.querySelector('#ev-location').value.trim() || null,
      description: modalEl.querySelector('#ev-description').value.trim() || null,
      notes: modalEl.querySelector('#ev-notes').value || null,
      visible_on: visible,
      linked_article_id: modalEl.querySelector('#ev-article').value || null
    };

    state.isSaving = true;
    setSavingUI(true);
    try {
      var saved;
      if (state.event && state.event.id) {
        var upd = await window.sb.from('calendar_events').update(payload).eq('id', state.event.id).select().single();
        if (upd.error) throw upd.error;
        saved = upd.data;
      } else {
        var ins = await window.sb.from('calendar_events').insert(payload).select().single();
        if (ins.error) throw ins.error;
        saved = ins.data;
      }
      close();
      if (window.showToast) window.showToast('Event saved');
      if (state && typeof state.onSaved === 'function') state.onSaved(saved);
    } catch (ex) {
      console.error('[event-modal] save failed', ex);
      showErr(ex.message || 'Save failed.');
    } finally {
      state && (state.isSaving = false);
      setSavingUI(false);
    }
  }

  async function onDelete() {
    if (!state || !state.event || !state.event.id) return;
    if (!window.confirm('Delete this event?')) return;
    var id = state.event.id;
    var res = await window.sb.from('calendar_events').delete().eq('id', id);
    if (res.error) {
      showErr(res.error.message || 'Delete failed.');
      return;
    }
    close();
    if (window.showToast) window.showToast('Event deleted');
    if (state && typeof state.onDeleted === 'function') state.onDeleted(id);
  }

  function showErr(msg) {
    var err = modalEl.querySelector('#ev-error');
    err.textContent = msg;
    err.hidden = false;
  }
  function setSavingUI(saving) {
    var save = modalEl.querySelector('#ev-save');
    var del  = modalEl.querySelector('#ev-delete');
    if (save) { save.disabled = saving; save.textContent = saving ? 'Saving…' : 'Save'; }
    if (del)  del.disabled = saving;
  }

  function todayISO() {
    var d = new Date();
    var mm = String(d.getMonth() + 1).padStart(2, '0');
    var dd = String(d.getDate()).padStart(2, '0');
    return d.getFullYear() + '-' + mm + '-' + dd;
  }
  function escapeHtml(s) {
    if (s == null) return '';
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  window.EventModal = { open: open, close: close };
})();
