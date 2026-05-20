// Article editor — admin only. Renders inside #page-writing when the writing
// page is in 'editor' state. Handles create, update, publish, delete, and
// 30-second draft autosave.
(function () {
  var AUTOSAVE_MS = 30 * 1000;
  var BUCKET = 'article-images';

  function render(root, articleId, opts) {
    if (!window.IS_ADMIN) {
      root.innerHTML = '<p style="padding:48px 24px;color:#5C5C5C">Sign in as admin to edit articles.</p>';
      return;
    }
    opts = opts || {};

    var ctx = {
      articleId: articleId,        // null = new
      article: null,
      titleEl: null,
      slugEl: null,
      excerptEl: null,
      coverEl: null,
      coverPreview: null,
      editorInstance: null,
      contentJSON: null,
      contentHTML: '',
      autosaveTimer: null,
      isSaving: false,
      slugDirty: false,            // user has manually touched slug
      dirty: false
    };

    root.innerHTML = shellHTML();
    bindShell(root, ctx, opts);

    if (articleId) {
      loadArticle(articleId)
        .then(function (a) {
          if (!a) {
            window.showToast && window.showToast('Article not found', 'error');
            opts.onCancel && opts.onCancel();
            return;
          }
          ctx.article = a;
          populateFields(ctx);
          mountEditor(ctx);
        })
        .catch(function (err) {
          window.showToast && window.showToast(err.message || 'Failed to load article', 'error');
        });
    } else {
      mountEditor(ctx);
    }
  }

  function shellHTML() {
    return (
      '<div class="article-editor" style="padding:32px 24px 64px;background:#FAFAF8">' +
        '<div class="max-w-4xl mx-auto">' +
          '<div class="flex items-center justify-between flex-wrap gap-3 mb-6">' +
            '<button type="button" id="ed-cancel" class="inline-flex items-center gap-2 text-sm" style="background:none;border:none;cursor:pointer;color:#767676;padding:0">' +
              '<i data-lucide="arrow-left" style="width:16px;height:16px"></i> Cancel' +
            '</button>' +
            '<div class="flex items-center gap-2" id="ed-actions">' +
              '<span id="ed-status" class="label-small" style="color:#9A9A9A">Ready</span>' +
              '<button type="button" class="admin-btn admin-btn-ghost"   id="ed-save-draft">Save draft</button>' +
              '<button type="button" class="admin-btn admin-btn-primary" id="ed-publish">Publish</button>' +
              '<button type="button" class="admin-btn admin-btn-ghost"   id="ed-delete" style="color:#9A3A20;display:none">Delete</button>' +
            '</div>' +
          '</div>' +

          '<label class="admin-field-label" for="ed-title">Title</label>' +
          '<input id="ed-title" class="admin-input" style="font-family:\'Playfair Display\',serif;font-size:1.6rem;font-weight:700;padding:14px 16px" placeholder="Article title" />' +

          '<div class="grid md:grid-cols-2 gap-4 mt-4">' +
            '<div>' +
              '<label class="admin-field-label" for="ed-slug">Slug</label>' +
              '<input id="ed-slug" class="admin-input" placeholder="auto-generated-from-title" />' +
              '<p id="ed-slug-hint" class="label-small" style="margin-top:6px;color:#9A9A9A">Used in the URL. Letters, numbers, hyphens.</p>' +
            '</div>' +
            '<div>' +
              '<label class="admin-field-label" for="ed-cover-url">Cover image</label>' +
              '<div class="flex items-center gap-2">' +
                '<input id="ed-cover-url" class="admin-input" placeholder="https://… or upload" style="flex:1" />' +
                '<button type="button" id="ed-cover-upload" class="admin-btn admin-btn-ghost" style="white-space:nowrap">Upload</button>' +
              '</div>' +
              '<div id="ed-cover-preview" style="margin-top:8px"></div>' +
            '</div>' +
          '</div>' +

          '<label class="admin-field-label" for="ed-excerpt" style="margin-top:16px">Excerpt</label>' +
          '<textarea id="ed-excerpt" class="admin-textarea" maxlength="300" placeholder="2–3 sentence summary shown on cards and at the top of the article."></textarea>' +
          '<p id="ed-excerpt-count" class="label-small" style="text-align:right;color:#9A9A9A">0 / 300</p>' +

          '<label class="admin-field-label" style="margin-top:16px">Content</label>' +
          '<div id="ed-content-mount"></div>' +
        '</div>' +
      '</div>'
    );
  }

  function bindShell(root, ctx, opts) {
    if (window.lucide) lucide.createIcons();

    ctx.titleEl   = document.getElementById('ed-title');
    ctx.slugEl    = document.getElementById('ed-slug');
    ctx.excerptEl = document.getElementById('ed-excerpt');
    ctx.coverEl   = document.getElementById('ed-cover-url');
    ctx.coverPreview = document.getElementById('ed-cover-preview');
    ctx.statusEl  = document.getElementById('ed-status');
    var excerptCount = document.getElementById('ed-excerpt-count');

    ctx.titleEl.addEventListener('input', function () {
      ctx.dirty = true;
      if (!ctx.slugDirty) ctx.slugEl.value = slugify(ctx.titleEl.value);
      setStatus(ctx, 'Unsaved changes');
    });
    ctx.slugEl.addEventListener('input', function () {
      ctx.slugDirty = true;
      ctx.slugEl.value = slugify(ctx.slugEl.value, true);
      ctx.dirty = true;
      setStatus(ctx, 'Unsaved changes');
    });
    ctx.excerptEl.addEventListener('input', function () {
      ctx.dirty = true;
      excerptCount.textContent = ctx.excerptEl.value.length + ' / 300';
      setStatus(ctx, 'Unsaved changes');
    });
    ctx.coverEl.addEventListener('input', function () {
      ctx.dirty = true;
      updateCoverPreview(ctx);
      setStatus(ctx, 'Unsaved changes');
    });

    document.getElementById('ed-cover-upload').addEventListener('click', function () {
      pickAndUploadImage().then(function (url) {
        if (!url) return;
        ctx.coverEl.value = url;
        ctx.dirty = true;
        updateCoverPreview(ctx);
        setStatus(ctx, 'Unsaved changes');
      });
    });

    document.getElementById('ed-cancel').addEventListener('click', function () {
      if (ctx.dirty && !window.confirm('Discard unsaved changes?')) return;
      stopAutosave(ctx);
      destroyEditor(ctx);
      opts.onCancel && opts.onCancel();
    });
    document.getElementById('ed-save-draft').addEventListener('click', function () {
      save(ctx, { publish: false, exit: false }, opts);
    });
    document.getElementById('ed-publish').addEventListener('click', function () {
      save(ctx, { publish: true, exit: true }, opts);
    });
    var delBtn = document.getElementById('ed-delete');
    if (ctx.articleId) {
      delBtn.style.display = '';
      delBtn.addEventListener('click', function () {
        deleteArticle(ctx, opts);
      });
    }
  }

  function mountEditor(ctx) {
    var mount = document.getElementById('ed-content-mount');
    if (!mount) return;
    var initial = (ctx.article && ctx.article.content_html) || '<p></p>';
    ctx.editorInstance = window.RichEditor.create(mount, {
      initialHTML: initial,
      placeholder: 'Write your article…',
      onChange: function (json, html) {
        ctx.contentJSON = json;
        ctx.contentHTML = html;
        ctx.dirty = true;
        setStatus(ctx, 'Unsaved changes');
      }
    });
    // Seed with current values so the first save has data even with no edits.
    try {
      ctx.contentJSON = ctx.editorInstance.getJSON();
      ctx.contentHTML = ctx.editorInstance.getHTML();
    } catch (e) { /* fallback mode has no JSON */ }

    startAutosave(ctx);
  }

  function populateFields(ctx) {
    if (!ctx.article) return;
    ctx.titleEl.value   = ctx.article.title || '';
    ctx.slugEl.value    = ctx.article.slug  || '';
    ctx.excerptEl.value = ctx.article.excerpt || '';
    ctx.coverEl.value   = ctx.article.cover_image_url || '';
    ctx.slugDirty = !!ctx.article.slug;
    document.getElementById('ed-excerpt-count').textContent = ctx.excerptEl.value.length + ' / 300';
    updateCoverPreview(ctx);
  }

  function updateCoverPreview(ctx) {
    var url = (ctx.coverEl.value || '').trim();
    if (!url) { ctx.coverPreview.innerHTML = ''; return; }
    ctx.coverPreview.innerHTML =
      '<div style="aspect-ratio:16/9;max-width:240px;background-image:url(\'' + escapeAttr(url) + '\');background-size:cover;background-position:center;border-radius:8px;border:1px solid rgba(28,28,30,0.08)"></div>';
  }

  // --------------------------------------------------------------------------
  // Data
  // --------------------------------------------------------------------------
  async function loadArticle(id) {
    if (!window.sb) return null;
    var res = await window.sb.from('articles').select('*').eq('id', id).maybeSingle();
    if (res.error) throw res.error;
    return res.data || null;
  }

  async function save(ctx, mode, opts) {
    if (!window.sb || ctx.isSaving) return;
    var title = (ctx.titleEl.value || '').trim();
    if (!title) {
      window.showToast && window.showToast('Title is required', 'error');
      ctx.titleEl.focus();
      return;
    }
    var slug = (ctx.slugEl.value || '').trim() || slugify(title);
    // Guard: slugify can produce an empty string from titles with only special chars
    if (!slug) {
      window.showToast && window.showToast('Could not generate a URL slug from this title. Please enter one manually.', 'error');
      ctx.slugEl.focus();
      return;
    }
    ctx.slugEl.value = slug;

    var payload = {
      title: title,
      slug: slug,
      excerpt: (ctx.excerptEl.value || '').trim() || null,
      cover_image_url: (ctx.coverEl.value || '').trim() || null,
      content: ctx.contentJSON || (ctx.editorInstance ? safeGetJSON(ctx.editorInstance) : {}),
      content_html: ctx.contentHTML || (ctx.editorInstance ? ctx.editorInstance.getHTML() : '')
    };

    if (mode.publish) {
      payload.published = true;
      if (!ctx.article || !ctx.article.published_at) {
        payload.published_at = new Date().toISOString();
      }
    } else if (!ctx.article) {
      payload.published = false;
    }

    ctx.isSaving = true;
    setStatus(ctx, 'Saving…');
    setActionsDisabled(true);

    try {
      var saved;
      if (ctx.articleId) {
        var upd = await window.sb.from('articles').update(payload).eq('id', ctx.articleId).select().single();
        if (upd.error) throw upd.error;
        saved = upd.data;
      } else {
        var ins = await window.sb.from('articles').insert(payload).select().single();
        if (ins.error) throw ins.error;
        saved = ins.data;
        ctx.articleId = saved.id;
      }
      ctx.article = saved;
      ctx.dirty = false;
      setStatus(ctx, 'Saved ' + timeOfDay());

      if (mode.publish) {
        try { await ensureArticlePublishedEvent(saved); }
        catch (e) { console.warn('[editor] calendar event failed', e); }
      }
      opts.onSaved && opts.onSaved(saved, { published: !!mode.publish, exit: !!mode.exit });
    } catch (err) {
      console.error('[editor] save failed', err);
      var msg = err.message || 'Save failed.';
      if (/duplicate key/i.test(msg) || /unique/i.test(msg)) msg = 'That slug is already taken. Try another.';
      window.showToast && window.showToast(msg, 'error');
      setStatus(ctx, 'Error');
    } finally {
      ctx.isSaving = false;
      setActionsDisabled(false);
    }
  }

  function safeGetJSON(inst) {
    try { return inst.getJSON(); } catch (e) { return {}; }
  }

  async function deleteArticle(ctx, opts) {
    if (!ctx.articleId) return;
    if (!window.confirm('Delete this article? This cannot be undone.')) return;
    var res = await window.sb.from('articles').delete().eq('id', ctx.articleId);
    if (res.error) {
      window.showToast && window.showToast(res.error.message || 'Delete failed', 'error');
      return;
    }
    stopAutosave(ctx);
    destroyEditor(ctx);
    opts.onDeleted && opts.onDeleted();
  }

  async function ensureArticlePublishedEvent(article) {
    if (!window.sb || !article || !article.id) return;
    var existing = await window.sb.from('calendar_events')
      .select('id')
      .eq('linked_article_id', article.id)
      .eq('event_type', 'article_published')
      .limit(1);
    if (existing.error) throw existing.error;
    if (existing.data && existing.data.length) return;
    var dateStr = (article.published_at || new Date().toISOString()).slice(0, 10);
    var ins = await window.sb.from('calendar_events').insert({
      title: 'Published: ' + (article.title || 'Untitled'),
      event_date: dateStr,
      event_type: 'article_published',
      linked_article_id: article.id,
      visible_on: ['home']
    });
    if (ins.error) throw ins.error;
  }

  // --------------------------------------------------------------------------
  // Autosave
  // --------------------------------------------------------------------------
  function startAutosave(ctx) {
    stopAutosave(ctx);
    ctx.autosaveTimer = setInterval(function () {
      if (!ctx.dirty || ctx.isSaving) return;
      var title = (ctx.titleEl && ctx.titleEl.value || '').trim();
      if (!title) return; // can't save without a title
      // Autosave never publishes.
      save(ctx, { publish: false, exit: false }, { onSaved: function () {
        setStatus(ctx, 'Autosaved ' + timeOfDay());
      } });
    }, AUTOSAVE_MS);
  }
  function stopAutosave(ctx) {
    if (ctx.autosaveTimer) { clearInterval(ctx.autosaveTimer); ctx.autosaveTimer = null; }
  }

  function destroyEditor(ctx) {
    if (ctx.editorInstance && typeof ctx.editorInstance.destroy === 'function') {
      try { ctx.editorInstance.destroy(); } catch (e) {}
    }
    ctx.editorInstance = null;
  }

  // --------------------------------------------------------------------------
  // Helpers
  // --------------------------------------------------------------------------
  function slugify(s, allowTrailingDash) {
    var out = (s || '')
      .toString()
      .normalize('NFKD')
      .replace(/[̀-ͯ]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+/, '');
    return allowTrailingDash ? out : out.replace(/-+$/, '');
  }

  function setStatus(ctx, msg) {
    if (ctx.statusEl) ctx.statusEl.textContent = msg;
  }
  function setActionsDisabled(disabled) {
    ['ed-save-draft', 'ed-publish', 'ed-delete'].forEach(function (id) {
      var b = document.getElementById(id);
      if (b) b.disabled = disabled;
    });
  }
  function timeOfDay() {
    try { return new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' }); }
    catch (e) { return ''; }
  }

  function safeFilename(name) {
    var dot = name.lastIndexOf('.');
    var base = (dot >= 0 ? name.slice(0, dot) : name).replace(/[^a-zA-Z0-9-_]+/g, '-').slice(0, 60) || 'image';
    var ext  = dot >= 0 ? name.slice(dot + 1).toLowerCase().replace(/[^a-z0-9]/g, '') : 'png';
    return base + '-' + Date.now() + '.' + (ext || 'png');
  }

  async function pickAndUploadImage() {
    return new Promise(function (resolve) {
      var input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.style.display = 'none';
      input.addEventListener('change', async function () {
        var f = input.files && input.files[0];
        document.body.removeChild(input);
        if (!f || !window.sb) { resolve(null); return; }
        try {
          window.showToast && window.showToast('Uploading image…');
          var path = safeFilename(f.name);
          var upload = await window.sb.storage.from(BUCKET).upload(path, f, {
            cacheControl: '3600',
            upsert: false,
            contentType: f.type || undefined
          });
          if (upload.error) throw upload.error;
          var pub = window.sb.storage.from(BUCKET).getPublicUrl(upload.data.path);
          resolve(pub && pub.data && pub.data.publicUrl);
        } catch (err) {
          console.error('[editor] cover upload failed', err);
          window.showToast && window.showToast(err.message || 'Upload failed', 'error');
          resolve(null);
        }
      });
      document.body.appendChild(input);
      input.click();
    });
  }

  function escapeAttr(s) {
    if (s == null) return '';
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  window.WritingArticleEditor = { render: render };
})();
