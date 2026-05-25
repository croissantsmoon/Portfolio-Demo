function internationalInitPage() {
  const el = document.getElementById('page-international');
  if (!el) return;

  // Content merged into NGU Global project page — redirect on every activation.
  const redirect = function() {
    if (el.classList.contains('active') && typeof goToPage === 'function') {
      goToPage('pcu-global');
    }
  };

  new MutationObserver(redirect).observe(el, { attributes: true, attributeFilter: ['class'] });
  redirect(); // handle initial load if already active
}

document.addEventListener('DOMContentLoaded', function() {
  internationalInitPage();
});
