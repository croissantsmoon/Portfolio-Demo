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
    // Reload so any admin-only UI state is fully reset.
    window.location.reload();
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

  function showToast(message, kind) {
    kind = kind || 'success'; // 'success' | 'error'
    var stack = document.getElementById('toast-stack');
    if (!stack) {
      stack = document.createElement('div');
      stack.id = 'toast-stack';
      stack.className = 'toast-stack';
      document.body.appendChild(stack);
    }
    var t = document.createElement('div');
    t.className = 'toast toast-' + kind;
    t.setAttribute('role', kind === 'error' ? 'alert' : 'status');
    t.textContent = message;
    stack.appendChild(t);
    // Animate in
    requestAnimationFrame(function () { t.classList.add('toast-visible'); });
    setTimeout(function () {
      t.classList.remove('toast-visible');
      setTimeout(function () { t.remove(); }, 220);
    }, 2000);
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
    init: initAuth
  };
  window.showToast = showToast;
})();
