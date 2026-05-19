// About Me — Expertise page
// Add any dynamic behaviour for this page here.

function expertiseInitPage() {
  var el = document.getElementById('page-expertise');
  if (!el) return;
  el.innerHTML = `
     <div class="max-w-6xl mx-auto px-6">
      <button onclick="goToPage('about-overview')" class="flex items-center gap-2 mb-6" style="color:#1E3A5F"><i data-lucide="arrow-left" style="width:16px;height:16px"></i> Back</button>
      <h1 class="font-heading font-bold text-4xl mb-2" style="color:#1C1C1E">Areas of Expertise</h1>
      <p class="text-lg mb-12" style="color:#5C5C5C">Core competencies built through hands-on experience in international higher education</p>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
       <div class="card p-6">
        <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background:rgba(30,58,95,0.08)"><i data-lucide="handshake" style="width:24px;height:24px;color:#1E3A5F"></i>
        </div>
        <h3 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">Strategic Partnerships</h3>
        <p class="text-sm" style="color:#5C5C5C">Managing 30+ institutional partners, facilitating 15+ strategic meetings per month, and driving joint academic initiatives at PCU.</p>
       </div>
       <div class="card p-6">
        <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background:rgba(30,58,95,0.08)"><i data-lucide="file-text" style="width:24px;height:24px;color:#1E3A5F"></i>
        </div>
        <h3 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">MoU / MoA Coordination</h3>
        <p class="text-sm" style="color:#5C5C5C">Reviewing 25+ partnership agreements monthly — ensuring compliance, alignment with institutional goals, and timely processing.</p>
       </div>
       <div class="card p-6">
        <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background:rgba(30,58,95,0.08)"><i data-lucide="plane" style="width:24px;height:24px;color:#1E3A5F"></i>
        </div>
        <h3 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">Student Mobility Programs</h3>
        <p class="text-sm" style="color:#5C5C5C">End-to-end management of 5 international exchange programs, including KNB &amp; TIAS government scholarships, for 120+ students per semester.</p>
       </div>
       <div class="card p-6">
        <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background:rgba(30,58,95,0.08)"><i data-lucide="heart" style="width:24px;height:24px;color:#1E3A5F"></i>
        </div>
        <h3 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">International Student Welfare</h3>
        <p class="text-sm" style="color:#5C5C5C">Comprehensive non-academic support for 100+ students per semester — accommodation, healthcare, insurance, banking, and immigration coordination.</p>
       </div>
       <div class="card p-6">
        <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background:rgba(30,58,95,0.08)"><i data-lucide="bar-chart-2" style="width:24px;height:24px;color:#1E3A5F"></i>
        </div>
        <h3 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">Program &amp; Budget Management</h3>
        <p class="text-sm" style="color:#5C5C5C">Led IDR 50–100M per-program budgets, coordinating logistics, events, and vendor management across 50+ stakeholders.</p>
       </div>
       <div class="card p-6">
        <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background:rgba(30,58,95,0.08)"><i data-lucide="languages" style="width:24px;height:24px;color:#1E3A5F"></i>
        </div>
        <h3 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">Cross-Cultural Communication</h3>
        <p class="text-sm" style="color:#5C5C5C">English–Indonesian interpretation at conferences and company visits; bridging local and international stakeholders with cultural sensitivity.</p>
       </div>
      </div>
     </div>
    `;
  if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', function() {
  expertiseInitPage();
});
