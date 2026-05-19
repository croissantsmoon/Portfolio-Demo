function mouDetailInitPage() {
  var el = document.getElementById('page-mou-detail');
  if (!el) return;
  el.innerHTML = `
     <div class="max-w-6xl mx-auto px-6"><button onclick="goToPage('partnerships')" class="flex items-center gap-2 mb-8" style="color:#1E3A5F"><i data-lucide="arrow-left" style="width:16px;height:16px"></i> Back to Partnerships</button>
      <div class="mb-12">
       <div class="flex items-center gap-3 mb-4"><span class="accent-line"></span> <span class="text-sm font-semibold" style="color:#4A6B8A">Agreement Management</span>
       </div>
       <h1 class="font-heading font-bold text-4xl mb-3" style="color:#1C1C1E">MoU / MoA Coordination</h1>
       <p class="text-lg max-w-3xl" style="color:#5C5C5C">Reviewing 25+ partnership agreements per month at PCU — ensuring compliance, institutional alignment, and timely processing across a diverse global network</p>
      </div>
      <div class="grid md:grid-cols-3 gap-6 mb-12">
       <div class="card p-6 text-center">
        <p class="font-heading font-bold text-4xl mb-2" style="color:#4A6B8A">25+</p>
        <p class="text-sm font-medium" style="color:#1C1C1E">Agreements Reviewed Monthly</p>
       </div>
       <div class="card p-6 text-center">
        <p class="font-heading font-bold text-4xl mb-2" style="color:#4A6B8A">30+</p>
        <p class="text-sm font-medium" style="color:#1C1C1E">Institutional Partners Managed</p>
       </div>
       <div class="card p-6 text-center">
        <p class="font-heading font-bold text-4xl mb-2" style="color:#8B7355">24h</p>
        <p class="text-sm font-medium" style="color:#1C1C1E">Meeting Minutes Turnaround</p>
       </div>
      </div>
      <div class="card p-8 mb-8">
       <h2 class="font-heading font-semibold text-2xl mb-6" style="color:#1C1C1E">Coordination Framework</h2>
       <div class="space-y-4">
        <div class="flex gap-4 pb-4 border-b" style="border-color:rgba(28,28,30,0.1)">
         <div class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(74,107,138,0.08)"><i data-lucide="file-check" style="width:24px;height:24px;color:#4A6B8A"></i>
         </div>
         <div>
          <h3 class="font-semibold mb-1" style="color:#1C1C1E">Drafting &amp; Negotiation</h3>
          <p style="color:#5C5C5C">Collaboratively developing MoU/MoA documents that clearly define partnership scope, objectives, and mutual commitments</p>
         </div>
        </div>
        <div class="flex gap-4 pb-4 border-b" style="border-color:rgba(28,28,30,0.1)">
         <div class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(74,107,138,0.08)"><i data-lucide="check-square" style="width:24px;height:24px;color:#4A6B8A"></i>
         </div>
         <div>
          <h3 class="font-semibold mb-1" style="color:#1C1C1E">Compliance &amp; Approval</h3>
          <p style="color:#5C5C5C">Ensuring all agreements comply with institutional policies and securing necessary approvals from relevant authorities</p>
         </div>
        </div>
        <div class="flex gap-4 pb-4 border-b" style="border-color:rgba(28,28,30,0.1)">
         <div class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(74,107,138,0.08)"><i data-lucide="refresh-cw" style="width:24px;height:24px;color:#4A6B8A"></i>
         </div>
         <div>
          <h3 class="font-semibold mb-1" style="color:#1C1C1E">Renewal &amp; Updates</h3>
          <p style="color:#5C5C5C">Managing agreement lifecycle including renewals, amendments, and updates to reflect evolving partnership priorities</p>
         </div>
        </div>
        <div class="flex gap-4">
         <div class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(74,107,138,0.08)"><i data-lucide="bar-chart-2" style="width:24px;height:24px;color:#4A6B8A"></i>
         </div>
         <div>
          <h3 class="font-semibold mb-1" style="color:#1C1C1E">Monitoring &amp; Activation</h3>
          <p style="color:#5C5C5C">Tracking implementation progress and ensuring both parties meet agreed commitments and leverage opportunities</p>
         </div>
        </div>
       </div>
      </div>
     </div>
    `;
  if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', function() {
  mouDetailInitPage();
});
