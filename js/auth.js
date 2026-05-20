// Auth helpers + admin-mode toggling.
// Exposes: window.AdminAuth, window.IS_ADMIN, window.showToast
(function () {
  var listeners = [];

  function getAdminEmail() {
    return (window.APP_CONFIG && window.APP_CONFIG.ADMIN_EMAIL) || '';
  }

  function clientAvailable() {
    if (!window.sb) {
      console.warn('[auth] Supabase client not initialized.');
      return false;
    }
    return true;
  }

  async function signIn(email, password) {
    if (!clientAvailable()) {
      return { data: null, error: new Error('Supabase not configured.') };
    }
    var res = await window.sb.auth.signInWithPassword({ email: email, password: password });
    return res;
  }

  async function signOut() {
    if (!clientAvailable()) return;
    await window.sb.auth.signOut();
    // Preserve the current SPA route across the reload so the user stays on the
    // same page rather than bouncing to the home page.
    const currentHash = window.location.hash || '';
    window.location.replace(window.location.pathname + window.location.search + currentHash);
  }

  async function getCurrentUser() {
    if (!clientAvailable()) return null;
    var res = await window.sb.auth.getUser();
    return (res && res.data && res.data.user) || null;
  }

  function isAdmin(user) {
    if (!user) return false;
    var adminEmail = getAdminEmail();
    if (!adminEmail) return false;
    return (user.email || '').toLowerCase() === adminEmail.toLowerCase();
  }

  function applyAdminMode(user) {
    var admin = isAdmin(user);
    window.IS_ADMIN = admin;
    window.CURRENT_USER = user || null;
    document.body.classList.toggle('admin-mode', admin);
    listeners.forEach(function (fn) {
      try { fn(admin, user); } catch (e) { console.error(e); }
    });
  }

  function onAdminChange(fn) {
    listeners.push(fn);
  }

  function offAdminChange(fn) {
    var idx = listeners.indexOf(fn);
    if (idx !== -1) listeners.splice(idx, 1);
  }

  function showToast(message, kind) {
    kind = kind || 'success'; // 'success' | 'error' | 'info'
    var stack = document.getElementById('toast-stack');
    if (!stack) {
      stack = document.createElement('div');
      stack.id = 'toast-stack';
      stack.className = 'toast-stack';
      document.body.appendChild(stack);
    }
    // Prevent duplicate stacked toasts with identical text
    var existing = Array.from(stack.querySelectorAll('.toast')).find(function(el) {
      return el.textContent === message;
    });
    if (existing) return;

    var t = document.createElement('div');
    t.className = 'toast toast-' + kind;
    t.setAttribute('role', kind === 'error' ? 'alert' : 'status');
    t.textContent = message;
    stack.appendChild(t);
    requestAnimationFrame(function () { t.classList.add('toast-visible'); });
    setTimeout(function () {
      t.classList.remove('toast-visible');
      setTimeout(function () { t.remove(); }, 220);
    }, 2400);
  }

  async function initAuth() {
    if (!clientAvailable()) {
      applyAdminMode(null);
      return;
    }
    var user = await getCurrentUser();
    applyAdminMode(user);

    window.sb.auth.onAuthStateChange(function (_event, session) {
      applyAdminMode(session && session.user ? session.user : null);
    });
  }

  window.AdminAuth = {
    signIn: signIn,
    signOut: signOut,
    getCurrentUser: getCurrentUser,
    isAdmin: isAdmin,
    onAdminChange: onAdminChange,
    offAdminChange: offAdminChange,
    init: initAuth
  };
  window.showToast = showToast;
})();
