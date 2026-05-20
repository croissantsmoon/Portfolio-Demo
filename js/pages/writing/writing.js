// Writing page — list of articles + dispatch to reader / editor views.
// Three view states live inside #page-writing:
//   'list'    – public/admin index
//   'reader'  – view a single published article
//   'editor'  – admin only; new or edit existing
//
// Data lives in the `articles` table on Supabase. RLS exposes only published
// articles to anonymous visitors; admins see drafts too. See SETUP.md.

(function () {
  var pageEl;                 // #page-writing
  var state = {
    view: 'list',             // 'list' | 'reader' | 'editor'
    articles: [],
    filter: 'all',
    readerSlug: null,
    editorId: null,           // null = new article
    loading: false,
    error: null
  };

  // ------------------------------------------------------------------------
  // Bootstrapping
  // ------------------------------------------------------------------------
  function initPage() {
    pageEl = document.getElementById('page-writing');
    if (!pageEl) return;
    renderShell();
    refresh();

    // Re-render when admin status changes so admin-only controls appear.
    if (window.AdminAuth) {
      window.AdminAuth.onAdminChange(function () { refresh(); });
    }
  }

  function refresh() {
    if (!pageEl) return;
    state.loading = true;
    state.error = null;
    paint();

    fetchArticles()
      .then(function (rows) {
        state.articles = rows;
        state.loading = false;
        paint();
      })
      .catch(function (err) {
        console.error('[writing] fetch failed', err);
        state.articles = [];
        state.loading = false;
        state.error = err.message || 'Failed to load articles.';
        paint();
      });
  }

  async function fetchArticles() {
    if (!window.sb) return [];
    var isAdmin = !!window.IS_ADMIN;
    var q = window.sb.from('articles').select('*');
    if (isAdmin) {
      q = q.order('updated_at', { ascending: false });
    } else {
      q = q.eq('published', true).order('published_at', { ascending: false, nullsFirst: false });
    }
    var res = await q;
    if (res.error) throw res.error;
    return res.data || [];
  }

  // ------------------------------------------------------------------------
  // Rendering
  // ------------------------------------------------------------------------
  function renderShell() {
    pageEl.innerHTML =
      '<div id="writing-root" class="writing-root"></div>';
  }

  function paint() {
    var root = document.getElementById('writing-root');
    if (!root) return;
    if (state.view === 'reader') {
      window.WritingArticleView.render(root, state.readerSlug, {
        onBack: function () { goList(); }
      });
      return;
    }
    if (state.view === 'editor') {
      window.WritingArticleEditor.render(root, state.editorId, {
        onCancel: function () { goList(); },
        onSaved:  function (saved, opts) {
          if (window.showToast) window.showToast(opts && opts.published ? 'Published' : 'Saved');
          refresh();
          if (opts && opts.exit) goList();
        },
        onDeleted: function () {
          if (window.showToast) window.showToast('Deleted');
          refresh();
          goList();
        }
      });
      return;
    }
    renderList(root);
  }

  function renderList(root) {
    var isAdmin = !!window.IS_ADMIN;
    var filter = state.filter;
    var visibleArticles = state.articles.filter(function (a) {
      if (filter === 'all') return true;
      if (filter === 'drafts') return !a.published;
      if (filter === 'published') return !!a.published;
      return true;
    });

    root.innerHTML =
      '<div style="padding:64px 24px 48px;border-bottom:1px solid rgba(28,28,30,0.07)">' +
        '<div class="max-w-5xl mx-auto">' +
          '<a href="#/home" class="inline-flex items-center gap-2 mb-10 text-sm" style="color:#767676;text-decoration:none">' +
            '<i data-lucide="arrow-left" style="width:16px;height:16px"></i> Back' +
          '</a>' +
          '<div class="flex items-center gap-3 mb-6"><span class="accent-line"></span><span class="label-small">Writing</span></div>' +
          '<div class="flex items-start justify-between flex-wrap gap-4">' +
            '<div>' +
              '<h1 class="font-heading font-bold text-5xl mb-4" style="color:#1C1C1E;line-height:1.05" data-edit-key="writing_hero_title">Ideas, Reflections<br><em style="color:#8B7355">&amp; Perspectives</em></h1>' +
              '<p class="text-base leading-relaxed max-w-2xl" style="color:#5C5C5C" data-edit-key="writing_hero_tagline">A digital journal — essays, reflections, and insights on international education, leadership, systems thinking, digital craft, and the intersections between them.</p>' +
            '</div>' +
            (isAdmin
              ? '<button id="writing-new-btn" class="admin-btn admin-btn-primary admin-only" style="display:inline-flex;align-items:center;gap:6px">+ New article</button>'
              : ''
            ) +
          '</div>' +
        '</div>' +
      '</div>' +
      (isAdmin
        ? '<div style="padding:18px 24px;background:#F2ECE4;border-bottom:1px solid rgba(28,28,30,0.07)">' +
            '<div class="max-w-5xl mx-auto flex flex-wrap gap-2 admin-only">' +
              filterBtnHTML('all',       'All',       filter) +
              filterBtnHTML('published', 'Published', filter) +
              filterBtnHTML('drafts',    'Drafts',    filter) +
            '</div>' +
          '</div>'
        : ''
      ) +
      '<div style="padding:48px 24px 64px">' +
        '<div class="max-w-5xl mx-auto" id="writing-grid-host">' +
          renderGrid(visibleArticles) +
        '</div>' +
      '</div>';

    if (window.lucide) lucide.createIcons();

    // Bind events
    var newBtn = document.getElementById('writing-new-btn');
    if (newBtn) newBtn.addEventListener('click', function () { goEditor(null); });

    root.querySelectorAll('[data-writing-filter]').forEach(function (b) {
      b.addEventListener('click', function () {
        state.filter = b.dataset.writingFilter;
        paint();
      });
    });

    root.querySelectorAll('[data-article-open]').forEach(function (card) {
      card.addEventListener('click', function (e) {
        if (e.target.closest('[data-card-action]')) return;
        goReader(card.dataset.articleOpen);
      });
    });

    root.querySelectorAll('[data-card-action]').forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.stopPropagation();
        var id = b.dataset.articleId;
        var action = b.dataset.cardAction;
        var art = state.articles.find(function (x) { return x.id === id; });
        if (!art) return;
        if (action === 'edit') goEditor(art.id);
        else if (action === 'delete') deleteArticle(art);
        else if (action === 'toggle-publish') togglePublish(art);
      });
    });
  }

  function filterBtnHTML(value, label, current) {
    var active = value === current ? 'selected' : '';
    return '<button class="writing-filter skill-tag ' + active + '" data-writing-filter="' + value + '">' + label + '</button>';
  }

  function renderGrid(rows) {
    if (state.loading) {
      return '<p style="color:#5C5C5C;font-size:.92rem">Loading articles…</p>';
    }
    if (state.error) {
      return '<p class="admin-error" style="max-width:520px">' + escapeHtml(state.error) + '</p>';
    }
    if (!rows.length) {
      if (window.IS_ADMIN) {
        return '<p style="color:#5C5C5C;font-size:.92rem">No articles yet — click <strong>+ New article</strong> to write the first one.</p>';
      }
      return '<p style="color:#5C5C5C;font-size:.92rem">No published articles yet. Check back soon.</p>';
    }
    return '<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">' +
      rows.map(articleCardHTML).join('') +
    '</div>';
  }

  function articleCardHTML(a) {
    var isAdmin = !!window.IS_ADMIN;
    var dateLabel = a.published_at
      ? formatDate(a.published_at)
      : (a.updated_at ? 'Updated ' + formatDate(a.updated_at) : '');
    var draftBadge = !a.published
      ? '<span style="font-size:.62rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:3px 8px;border-radius:999px;background:rgba(139,115,85,0.1);color:#6B4F32">Draft</span>'
      : '<span style="font-size:.62rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:3px 8px;border-radius:999px;background:rgba(46,139,87,0.12);color:#1F6A3C">Published</span>';

    var cover = a.cover_image_url
      ? '<div class="article-card-cover" style="height:160px;border-radius:10px;background-image:url(\'' + escapeAttr(a.cover_image_url) + '\');background-size:cover;background-position:center;margin-bottom:14px"></div>'
      : '';

    return '<div class="article-card card p-7 rounded-xl text-left" data-article-open="' + escapeAttr(a.slug) + '" ' +
      'style="background:#fff;border:1px solid rgba(28,28,30,0.08);cursor:pointer;display:flex;flex-direction:column;gap:6px;position:relative">' +
      cover +
      '<div class="flex items-center justify-between mb-2">' +
        '<div class="label-small" style="color:#5C5C5C">Article</div>' + draftBadge +
      '</div>' +
      '<h3 class="font-heading font-semibold text-lg mb-2 leading-snug" style="color:#1C1C1E">' + escapeHtml(a.title || 'Untitled') + '</h3>' +
      (a.excerpt
        ? '<p class="text-sm leading-relaxed mb-3" style="color:#5C5C5C">' + escapeHtml(a.excerpt) + '</p>'
        : ''
      ) +
      '<div class="flex items-center justify-between mt-auto">' +
        '<span class="label-small">' + escapeHtml(dateLabel) + '</span>' +
        (isAdmin
          ? '<div class="flex items-center gap-1" onclick="event.stopPropagation()">' +
              '<button class="admin-btn admin-btn-ghost" style="padding:4px 10px;font-size:.72rem" data-card-action="edit" data-article-id="' + a.id + '">Edit</button>' +
              '<button class="admin-btn admin-btn-ghost" style="padding:4px 10px;font-size:.72rem" data-card-action="toggle-publish" data-article-id="' + a.id + '">' + (a.published ? 'Unpublish' : 'Publish') + '</button>' +
              '<button class="admin-btn admin-btn-ghost" style="padding:4px 10px;font-size:.72rem;color:#9A3A20" data-card-action="delete" data-article-id="' + a.id + '">Delete</button>' +
            '</div>'
          : ''
        ) +
      '</div>' +
    '</div>';
  }

  // ------------------------------------------------------------------------
  // Card actions
  // ------------------------------------------------------------------------
  async function deleteArticle(article) {
    if (!window.IS_ADMIN || !window.sb) return;
    if (!window.confirm('Delete "' + (article.title || 'Untitled') + '"? This cannot be undone.')) return;
    var res = await window.sb.from('articles').delete().eq('id', article.id);
    if (res.error) {
      window.showToast && window.showToast(res.error.message || 'Delete failed', 'error');
      return;
    }
    window.showToast && window.showToast('Deleted');
    refresh();
  }

  async function togglePublish(article) {
    if (!window.IS_ADMIN || !window.sb) return;
    var nowPublished = !article.published;
    var patch = {
      published: nowPublished,
      published_at: nowPublished ? new Date().toISOString() : null
    };
    var res = await window.sb.from('articles').update(patch).eq('id', article.id).select().single();
    if (res.error) {
      window.showToast && window.showToast(res.error.message || 'Update failed', 'error');
      return;
    }
    // Mirror article-published calendar event on publish; remove on unpublish.
    if (nowPublished) {
      await ensureArticlePublishedEvent(res.data);
    } else {
      await window.sb.from('calendar_events')
        .delete()
        .eq('linked_article_id', article.id)
        .eq('event_type', 'article_published');
    }
    window.showToast && window.showToast(nowPublished ? 'Published' : 'Unpublished');
    refresh();
  }

  async function ensureArticlePublishedEvent(article) {
    if (!window.sb || !article) return;
    var existing = await window.sb.from('calendar_events')
      .select('id')
      .eq('linked_article_id', article.id)
      .eq('event_type', 'article_published')
      .limit(1);
    if (existing.error) { console.warn(existing.error); return; }
    if (existing.data && existing.data.length) return;
    var dateStr = (article.published_at || new Date().toISOString()).slice(0, 10);
    var ins = await window.sb.from('calendar_events').insert({
      title: 'Published: ' + (article.title || 'Untitled'),
      event_date: dateStr,
      event_type: 'article_published',
      linked_article_id: article.id,
      visible_on: ['home']
    });
    if (ins.error) console.warn('[writing] failed to insert calendar event', ins.error);
  }

  // ------------------------------------------------------------------------
  // View transitions
  // ------------------------------------------------------------------------
  function goList() {
    state.view = 'list';
    state.readerSlug = null;
    state.editorId = null;
    paint();
  }
  function goReader(slug) {
    state.view = 'reader';
    state.readerSlug = slug;
    paint();
  }
  function goEditor(id) {
    if (!window.IS_ADMIN) return;
    state.view = 'editor';
    state.editorId = id;
    paint();
  }

  // ------------------------------------------------------------------------
  // Helpers
  // ------------------------------------------------------------------------
  function formatDate(iso) {
    try {
      var d = new Date(iso);
      return d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    } catch (e) { return ''; }
  }

  function escapeHtml(s) {
    if (s == null) return '';
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function escapeAttr(s) { return escapeHtml(s); }

  // Override the legacy `openArticle` global from main.js so existing card
  // markup still works during transition.
  window.openArticle = function (slug) { goReader(slug); };

  // Public hooks for inter-module communication.
  window.WritingPage = {
    refresh: refresh,
    goList: goList,
    goReader: goReader,
    goEditor: goEditor,
    getArticles: function () { return state.articles.slice(); }
  };

  document.addEventListener('DOMContentLoaded', initPage);
})();
