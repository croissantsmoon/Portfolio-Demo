// Resolved at runtime from js/config.js (APP_CONFIG.FORMSPREE_ENDPOINT).
// Falls back gracefully to a mailto: link when not configured.
function _getFormspreeEndpoint() {
  return (window.APP_CONFIG && window.APP_CONFIG.FORMSPREE_ENDPOINT) || '';
}

function contactInitPage() {
  var el = document.getElementById('page-contact');
  if (!el) return;
  // UX FIX: palette aligned with design system (no more terracotta-only scheme).
  // Hero banner is injected by injectHeroBanners() in main.js — don't duplicate H1/back/intro here.
  el.innerHTML = `
     <div class="max-w-2xl mx-auto px-6 py-12">
      <!-- Contact Form -->
      <div class="card p-8 md:p-12 rounded-2xl mb-12" style="background:#FFFFFF;border:1px solid rgba(28,28,30,0.08);box-shadow:0 4px 24px rgba(28,28,30,0.05)">
       <form id="contact-form" class="space-y-6" novalidate>
        <div>
         <label for="cf-name" class="text-sm font-semibold block mb-3" style="color:#1C1C1E">Full Name</label>
         <input id="cf-name" name="name" type="text" class="contact-input w-full px-4 py-3 rounded-lg text-base focus:outline-none transition" placeholder="Your name" required>
        </div>
        <div>
         <label for="cf-email" class="text-sm font-semibold block mb-3" style="color:#1C1C1E">Email Address</label>
         <input id="cf-email" name="email" type="email" class="contact-input w-full px-4 py-3 rounded-lg text-base focus:outline-none transition" placeholder="your@email.com" required>
        </div>
        <div>
         <label for="cf-subject" class="text-sm font-semibold block mb-3" style="color:#1C1C1E">Subject</label>
         <input id="cf-subject" name="subject" type="text" class="contact-input w-full px-4 py-3 rounded-lg text-base focus:outline-none transition" placeholder="What's this about?" required>
        </div>
        <div>
         <label for="cf-msg" class="text-sm font-semibold block mb-3" style="color:#1C1C1E">Message</label>
         <textarea id="cf-msg" name="message" rows="5" class="contact-input w-full px-4 py-3 rounded-lg text-base focus:outline-none resize-none transition" placeholder="Tell me more..." required></textarea>
        </div>
        <button id="cf-submit" type="submit" class="btn-primary w-full font-semibold text-base px-6 py-4 rounded-lg inline-flex items-center justify-center gap-2">
         <i data-lucide="send" style="width:18px;height:18px"></i>
         <span id="cf-submit-label">Send Message</span>
        </button>
        <p id="form-msg" role="status" aria-live="polite" class="text-sm text-center hidden font-medium" style="color:#1C1C1E"></p>
       </form>
      </div>

      <!-- Direct Contact Links -->
      <div class="text-center mb-8">
       <p class="label-small mb-6" style="color:#767676" data-edit-key="contact_direct_eyebrow">Or connect directly through</p>
       <div class="flex items-center justify-center gap-4 flex-wrap">
        <a href="mailto:zefanya.kharisma@gmail.com" class="contact-link flex flex-col items-center gap-2 p-4 rounded-xl">
         <div class="contact-link-icon w-12 h-12 rounded-full flex items-center justify-center"><i data-lucide="mail" style="width:22px;height:22px"></i></div>
         <span class="text-xs font-medium" style="color:#1C1C1E">Email</span>
        </a>
        <a href="https://www.linkedin.com/in/zefanyakharisma" target="_blank" rel="noopener noreferrer" class="contact-link flex flex-col items-center gap-2 p-4 rounded-xl">
         <div class="contact-link-icon w-12 h-12 rounded-full flex items-center justify-center"><i data-lucide="linkedin" style="width:22px;height:22px"></i></div>
         <span class="text-xs font-medium" style="color:#1C1C1E">LinkedIn</span>
        </a>
        <a href="https://wa.me/6282139619570" target="_blank" rel="noopener noreferrer" class="contact-link flex flex-col items-center gap-2 p-4 rounded-xl">
         <div class="contact-link-icon w-12 h-12 rounded-full flex items-center justify-center"><i data-lucide="message-circle" style="width:22px;height:22px"></i></div>
         <span class="text-xs font-medium" style="color:#1C1C1E">WhatsApp</span>
        </a>
        <div class="flex flex-col items-center gap-2 p-4 rounded-xl" style="background:rgba(28,28,30,0.04)">
         <div class="w-12 h-12 rounded-full flex items-center justify-center" style="background:#1C1C1E;color:#fff"><i data-lucide="map-pin" style="width:22px;height:22px"></i></div>
         <span class="text-xs font-medium text-center" style="color:#1C1C1E">Surabaya<br>East Java, Indonesia</span>
        </div>
       </div>
      </div>

      <!-- Response Time Info -->
      <div class="text-center p-5 rounded-xl" style="background:rgba(139,115,85,0.06);border:1px solid rgba(139,115,85,0.15)">
       <p class="text-sm" style="color:#5C5C5C"><i data-lucide="clock" style="width:15px;height:15px;display:inline;margin-right:8px;vertical-align:middle;color:#8B7355"></i> <span data-edit-key="contact_response_time">I typically respond within 24–48 hours.</span></p>
      </div>
     </div>
    `;
  if (window.lucide) lucide.createIcons();
  var form = document.getElementById('contact-form');
  if (!form) return;

  function setFieldError(inputId, errorId, message) {
    var input = document.getElementById(inputId);
    var errEl = document.getElementById(errorId);
    if (!input || !errEl) return;
    if (message) {
      input.setAttribute('aria-invalid', 'true');
      input.classList.add('input-error');
      errEl.textContent = message;
      errEl.classList.remove('hidden');
    } else {
      input.removeAttribute('aria-invalid');
      input.classList.remove('input-error');
      errEl.textContent = '';
      errEl.classList.add('hidden');
    }
  }

  function clearAllErrors() {
    [['cf-name','cf-name-err'],['cf-email','cf-email-err'],['cf-subject','cf-subject-err'],['cf-msg','cf-msg-err']].forEach(function(pair) {
      setFieldError(pair[0], pair[1], '');
    });
    var msg = document.getElementById('form-msg');
    if (msg) msg.classList.add('hidden');
  }

  // Inline error elements (injected after each input)
  ['cf-name','cf-email','cf-subject','cf-msg'].forEach(function(id) {
    var input = document.getElementById(id);
    if (!input) return;
    var errId = id + '-err';
    var errEl = document.createElement('p');
    errEl.id = errId;
    errEl.className = 'hidden text-xs mt-1 font-medium';
    errEl.style.color = '#C85A3A';
    errEl.setAttribute('aria-live', 'polite');
    input.setAttribute('aria-describedby', errId);
    input.parentElement.appendChild(errEl);
  });

  function setMsg(text, kind) {
    var msg = document.getElementById('form-msg');
    msg.textContent = text;
    msg.style.color = kind === 'error' ? '#C85A3A' : (kind === 'success' ? '#4A5235' : '#5C5C5C');
    msg.classList.remove('hidden');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearAllErrors();

    var nameEl    = document.getElementById('cf-name');
    var emailEl   = document.getElementById('cf-email');
    var subjectEl = document.getElementById('cf-subject');
    var msgEl     = document.getElementById('cf-msg');
    var btn       = document.getElementById('cf-submit');
    var label     = document.getElementById('cf-submit-label');

    var name    = nameEl.value.trim();
    var email   = emailEl.value.trim();
    var subject = subjectEl.value.trim();
    var message = msgEl.value.trim();

    var hasError = false;
    if (!name)    { setFieldError('cf-name',    'cf-name-err',    'Please enter your name.');           hasError = true; }
    if (!email)   { setFieldError('cf-email',   'cf-email-err',   'Please enter your email address.');  hasError = true; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                   setFieldError('cf-email',   'cf-email-err',   'Please enter a valid email address.'); hasError = true; }
    if (!subject) { setFieldError('cf-subject', 'cf-subject-err', 'Please enter a subject.');            hasError = true; }
    if (!message) { setFieldError('cf-msg',     'cf-msg-err',     'Please enter a message.');            hasError = true; }

    if (hasError) {
      // Move focus to first invalid field
      var firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    var endpoint = _getFormspreeEndpoint();

    // Fallback to mailto: when no endpoint is configured
    if (!endpoint || endpoint.indexOf('YOUR_FORM_ID') !== -1) {
      var mailto = 'mailto:zefanya.kharisma@gmail.com'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent('From: ' + name + ' <' + email + '>\n\n' + message);
      window.open(mailto);
      setMsg('Opening your email client…', 'neutral');
      return;
    }

    btn.disabled = true;
    if (label) label.textContent = 'Sending…';

    fetch(endpoint, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, email: email, subject: subject, message: message })
    })
      .then(function (res) {
        if (res.ok) {
          setMsg('Message sent — I\'ll get back to you within 24–48 hours.', 'success');
          form.reset();
          clearAllErrors();
        } else {
          throw new Error('Submission failed');
        }
      })
      .catch(function (err) {
        setMsg('Couldn\'t send right now — please email zefanya.kharisma@gmail.com directly.', 'error');
        console.error('Contact form error:', err);
      })
      .finally(function () {
        btn.disabled = false;
        if (label) label.textContent = 'Send Message';
      });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  contactInitPage();
});
