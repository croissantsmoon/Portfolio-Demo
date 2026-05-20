// Read-only article view, rendered inside #page-writing when the writing
// page is in 'reader' state. Fetches by slug and renders content_html in a
// generous editorial layout.
(function () {
  function render(root, slug, opts) {
    opts = opts || {};
    root.innerHTML =
      '<div style="padding:48px 24px 64px;background:#FAFAF8">' +
        '<div class="max-w-3xl mx-auto">' +
          '<button type="button" id="article-back" class="inline-flex items-center gap-2 mb-8 text-sm" style="background:none;border:none;cursor:pointer;color:#767676;padding:0">' +
            '<i data-lucide="arrow-left" style="width:16px;height:16px"></i> Back to Writing' +
          '</button>' +
          '<div id="article-host"><p style="color:#5C5C5C;font-size:.92rem">Loading article…</p></div>' +
        '</div>' +
      '</div>';

    if (window.lucide) lucide.createIcons();
    var backBtn = document.getElementById('article-back');
    if (backBtn) backBtn.addEventListener('click', function () {
      if (typeof opts.onBack === 'function') opts.onBack();
    });

    fetchArticle(slug)
      .then(function (article) {
        var host = document.getElementById('article-host');
        if (!host) return;
        if (!article) {
          host.innerHTML = '<p style="color:#5C5C5C">Article not found. <button type="button" class="admin-btn admin-btn-ghost" id="article-back-empty" style="margin-left:8px">Back to list</button></p>';
          var b = document.getElementById('article-back-empty');
          if (b) b.addEventListener('click', function () { if (typeof opts.onBack === 'function') opts.onBack(); });
          return;
        }
        host.innerHTML = renderArticle(article);
        if (window.lucide) lucide.createIcons();
      })
      .catch(function (err) {
        var host = document.getElementById('article-host');
        if (host) host.innerHTML = '<p class="admin-error">' + escapeHtml(err.message || 'Failed to load article.') + '</p>';
      });
  }

  async function fetchArticle(slug) {
    if (!window.sb) return null;
    var q = window.sb.from('articles').select('*').eq('slug', slug);
    if (!window.IS_ADMIN) q = q.eq('published', true);
    var res = await q.maybeSingle();
    if (res.error) throw res.error;
    return res.data || null;
  }

  function renderArticle(a) {
    var dateLabel = a.published_at ? formatDate(a.published_at) : '';
    var cover = a.cover_image_url
      ? '<div class="article-cover" style="aspect-ratio:16/9;border-radius:14px;background-image:url(\'' + escapeAttr(a.cover_image_url) + '\');background-size:cover;background-position:center;margin:0 0 28px"></div>'
      : '';
    var draftBadge = !a.published
      ? '<span style="display:inline-block;font-size:.62rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:3px 10px;border-radius:999px;background:rgba(139,115,85,0.1);color:#6B4F32;margin-bottom:14px">Draft preview</span>'
      : '';

    var html = a.content_html || '';
    if (!html) {
      html = '<p><em>This article has no content yet.</em></p>';
    }

    return cover +
      '<article class="article-reader">' +
        draftBadge +
        '<h1 class="font-heading" style="font-size:clamp(2rem,4vw,2.75rem);line-height:1.12;font-weight:700;color:#1C1C1E;letter-spacing:-.01em;margin:0 0 12px">' + escapeHtml(a.title || 'Untitled') + '</h1>' +
        (a.excerpt
          ? '<p style="font-size:1.05rem;color:#5C5C5C;margin:0 0 18px;line-height:1.55">' + escapeHtml(a.excerpt) + '</p>'
          : ''
        ) +
        (dateLabel
          ? '<p class="label-small" style="margin:0 0 28px">' + escapeHtml(dateLabel) + '</p>'
          : ''
        ) +
        '<div class="article-body">' + html + '</div>' +
      '</article>';
  }

  function formatDate(iso) {
    try {
      return new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    } catch (e) { return ''; }
  }

  function escapeHtml(s) {
    if (s == null) return '';
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function escapeAttr(s) { return escapeHtml(s); }

  window.WritingArticleView = { render: render };
})();
