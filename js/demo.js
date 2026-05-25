(function() {
  function injectDemoBanner() {
    if (document.getElementById('demo-banner')) return;

    var style = document.createElement('style');
    style.textContent = `
      #demo-banner {
        position: fixed;
        top: 0; left: 0; right: 0;
        z-index: 9999;
        background: linear-gradient(90deg, #0A84FF 0%, #5AC8FA 100%);
        color: #fff;
        text-align: center;
        font-family: 'DM Sans', 'Outfit', sans-serif;
        font-size: .72rem;
        font-weight: 600;
        letter-spacing: .08em;
        padding: 7px 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        box-shadow: 0 2px 12px rgba(10,132,255,0.35);
      }
      #demo-banner a {
        color: #fff;
        text-decoration: underline;
        text-underline-offset: 2px;
        opacity: .85;
      }
      #demo-banner a:hover { opacity: 1; }
      body { padding-top: 34px; }
      #ios-top-bar { top: 34px !important; }
    `;
    document.head.appendChild(style);

    var banner = document.createElement('div');
    banner.id = 'demo-banner';
    banner.innerHTML =
      '<span>&#9432; DEMO MODE — All content is fictional. Backends not configured.</span>' +
      '<span style="opacity:.5">·</span>' +
      '<a href="./DEMO-SETUP.md" target="_blank">Setup guide</a>';
    document.body.insertBefore(banner, document.body.firstChild);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectDemoBanner);
  } else {
    injectDemoBanner();
  }
})();
