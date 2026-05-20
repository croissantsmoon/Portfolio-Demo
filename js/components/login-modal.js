// Login modal — opened from the footer "Admin" link or Ctrl/Cmd+Shift+A.
// Mounts itself once into <body>. Exposes window.LoginModal { open, close }.
(function () {
  var modalEl = null;
  var lastFocused = null;
  var keydownHandler = null;

  function buildModal() {
    var wrap = document.createElement('div');
    wrap.id = 'login-modal';
    wrap.className = 'admin-modal hidden';
    wrap.setAttribute('role', 'dialog');
    wrap.setAttribute('aria-modal', 'true');
    wrap.setAttribute('aria-labelledby', 'login-modal-title');
    wrap.innerHTML =
      '<div class="admin-modal-backdrop" data-login-dismiss="1"></div>' +
      '<div class="admin-modal-panel" role="document">' +
        '<button type="button" class="admin-modal-close" aria-label="Close login dialog" data-login-dismiss="1">×</button>' +
        '<h2 id="login-modal-title" class="font-heading" style="font-size:1.5rem;margin:0 0 6px;color:#1C1C1E">Admin sign-in</h2>' +
        '<p style="margin:0 0 18px;font-size:.85rem;color:#5C5C5C">Only the site owner can sign in. Visitors don\'t need an account.</p>' +
        '<form id="login-form" novalidate>' +
          '<label class="admin-field-label" for="login-email">Email</label>' +
          '<input id="login-email" name="email" type="email" required autocomplete="username" class="admin-input"/>' +
          '<label class="admin-field-label" for="login-password" style="margin-top:12px">Password</label>' +
          '<input id="login-password" name="password" type="password" required autocomplete="current-password" class="admin-input"/>' +
          '<div id="login-error" class="admin-error" role="alert" aria-live="polite" hidden></div>' +
          '<div style="display:flex;gap:8px;justify-content:flex-end;margin-top:18px">' +
            '<button type="button" class="admin-btn admin-btn-ghost" data-login-dismiss="1">Cancel</button>' +
            '<button type="submit" class="admin-btn admin-btn-primary" id="login-submit">Sign in</button>' +
          '</div>' +
        '</form>' +
      '</div>';
    document.body.appendChild(wrap);

    wrap.addEventListener('click', function (e) {
      var t = e.target;
      if (t && t.getAttribute && t.getAttribute('data-login-dismiss') === '1') close();
    });

    wrap.querySelector('#login-form').addEventListener('submit', onSubmit);
    return wrap;
  }

  function trapFocus(e) {
    if (!modalEl || modalEl.classList.contains('hidden')) return;
    if (e.key === 'Escape') { close(); return; }
    if (e.key !== 'Tab') return;
    var focusable = modalEl.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable.length) return;
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  function open() {
    if (!modalEl) modalEl = buildModal();
    lastFocused = document.activeElement;
    modalEl.classList.remove('hidden');
    document.body.classList.add('admin-modal-open');
    var email = modalEl.querySelector('#login-email');
    if (email) setTimeout(function () { email.focus(); }, 30);
    keydownHandler = trapFocus;
    document.addEventListener('keydown', keydownHandler);
  }

  function close() {
    if (!modalEl) return;
    modalEl.classList.add('hidden');
    document.body.classList.remove('admin-modal-open');
    document.removeEventListener('keydown', keydownHandler);
    keydownHandler = null;
    var err = modalEl.querySelector('#login-error');
    if (err) { err.hidden = true; err.textContent = ''; }
    var form = modalEl.querySelector('#login-form');
    if (form) form.reset();
    if (lastFocused && typeof lastFocused.focus === 'function') {
      try { lastFocused.focus(); } catch (e) {}
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    var email = modalEl.querySelector('#login-email').value.trim();
    var password = modalEl.querySelector('#login-password').value;
    var btn = modalEl.querySelector('#login-submit');
    var err = modalEl.querySelector('#login-error');
    err.hidden = true; err.textContent = '';
    if (!email || !password) {
      err.textContent = 'Email and password are required.';
      err.hidden = false;
      return;
    }
    btn.disabled = true;
    var origLabel = btn.textContent;
    btn.textContent = 'Signing in…';
    try {
      var res = await window.AdminAuth.signIn(email, password);
      if (res && res.error) {
        err.textContent = res.error.message || 'Sign-in failed.';
        err.hidden = false;
      } else {
        // onAuthStateChange will toggle admin mode; just close.
        close();
        if (window.showToast) window.showToast('Signed in', 'success');
      }
    } catch (ex) {
      err.textContent = (ex && ex.message) || 'Sign-in failed.';
      err.hidden = false;
    } finally {
      btn.disabled = false;
      btn.textContent = origLabel;
    }
  }

  window.LoginModal = { open: open, close: close };
})();
