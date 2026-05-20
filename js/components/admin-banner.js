// Sticky admin banner at the top of the page when signed in as admin.
// Includes a "Dismiss for session" button (sessionStorage-scoped).
(function () {
  var SESSION_DISMISS_KEY = 'zkn-admin-banner-dismissed';
  var bannerEl = null;

  function dismissedThisSession() {
    try { return sessionStorage.getItem(SESSION_DISMISS_KEY) === '1'; }
    catch (e) { return false; }
  }
  function setDismissed() {
    try { sessionStorage.setItem(SESSION_DISMISS_KEY, '1'); } catch (e) {}
  }

  function buildBanner(user) {
    var el = document.createElement('div');
    el.id = 'admin-banner';
    el.className = 'admin-banner';
    el.setAttribute('role', 'region');
    el.setAttribute('aria-label', 'Admin mode banner');
    el.innerHTML =
      '<span class="admin-banner-dot" aria-hidden="true"></span>' +
      '<span class="admin-banner-label">Admin mode — <strong>' + (user && user.email ? user.email : '') + '</strong></span>' +
      '<span class="admin-banner-spacer"></span>' +
      '<button type="button" class="admin-banner-btn" data-action="signout">Sign out</button>' +
      '<button type="button" class="admin-banner-btn admin-banner-btn-ghost" data-action="dismiss" aria-label="Hide admin banner for this session">×</button>';

    el.addEventListener('click', function (e) {
      var t = e.target;
      if (!t || !t.dataset) return;
      if (t.dataset.action === 'signout') {
        if (window.AdminAuth) window.AdminAuth.signOut();
      } else if (t.dataset.action === 'dismiss') {
        setDismissed();
        hide();
      }
    });
    return el;
  }

  function show(user) {
    if (dismissedThisSession()) return;
    if (bannerEl) bannerEl.remove();
    bannerEl = buildBanner(user);
    document.body.insertBefore(bannerEl, document.body.firstChild);
    document.body.classList.add('has-admin-banner');
  }

  function hide() {
    if (bannerEl) { bannerEl.remove(); bannerEl = null; }
    document.body.classList.remove('has-admin-banner');
  }

  function update(isAdmin, user) {
    if (isAdmin) show(user); else hide();
  }

  window.AdminBanner = { show: show, hide: hide, update: update };
})();
