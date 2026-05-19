// About Me — Skillset page
// Add any dynamic behaviour for this page here.

function skillsetInitPage() {
  var el = document.getElementById('page-skillset');
  if (!el) return;
  el.innerHTML = `
     <div class="max-w-6xl mx-auto px-6">
      <button onclick="goToPage('about-overview')" class="flex items-center gap-2 mb-6" style="color:#1E3A5F"><i data-lucide="arrow-left" style="width:16px;height:16px"></i> Back</button>
      <h1 class="font-heading font-bold text-4xl mb-2" style="color:#1C1C1E">Skillset</h1>
      <p class="text-lg mb-12" style="color:#5C5C5C">Core competencies and professional capabilities</p>
      <div class="grid md:grid-cols-2 gap-6">
       <div class="card p-6">
        <h3 class="font-heading font-semibold text-lg mb-4" style="color:#1C1C1E">Partnership &amp; Institutional Relations</h3>
        <div class="flex flex-wrap gap-2">
         <span class="tag">Strategic Partnerships</span> <span class="tag">MoU/MoA Coordination</span> <span class="tag">Stakeholder Management</span> <span class="tag">Partnership Development</span>
        </div>
       </div>
       <div class="card p-6">
        <h3 class="font-heading font-semibold text-lg mb-4" style="color:#1C1C1E">Mobility &amp; Program Management</h3>
        <div class="flex flex-wrap gap-2">
         <span class="tag">Exchange Program Management</span> <span class="tag">KNB &amp; TIAS Scholarships</span> <span class="tag">Budget Management</span> <span class="tag">Vendor Coordination</span>
        </div>
       </div>
       <div class="card p-6">
        <h3 class="font-heading font-semibold text-lg mb-4" style="color:#1C1C1E">Student Support &amp; Welfare</h3>
        <div class="flex flex-wrap gap-2">
         <span class="tag">International Student Services</span> <span class="tag">Immigration Coordination</span> <span class="tag">Onboarding</span> <span class="tag">Case Management</span>
        </div>
       </div>
       <div class="card p-6">
        <h3 class="font-heading font-semibold text-lg mb-4" style="color:#1C1C1E">Communication &amp; Research</h3>
        <div class="flex flex-wrap gap-2">
         <span class="tag">Strategic Communications</span> <span class="tag">English–Indonesian Interpretation</span> <span class="tag">Academic Research</span> <span class="tag">Cross-Cultural Communication</span>
        </div>
       </div>
      </div>
     </div>
    `;
  if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', function() {
  skillsetInitPage();
});
