// Global Partnerships — MoU / MoA Coordination page
// Add any dynamic behaviour for this page here.

function mouInitPage() {
  var el = document.getElementById('page-mou');
  if (!el) return;
  el.innerHTML = `
     <!-- Hero -->
     <div style="background:linear-gradient(160deg,#1C1C1E 0%,#1E3A5F 55%,#2C4A72 100%);padding:clamp(48px,8vh,72px) 24px 0;position:relative;overflow:hidden">
      <div class="absolute inset-0 pointer-events-none" style="background:radial-gradient(ellipse at 85% 20%,rgba(139,115,85,0.18),transparent 55%)"></div>
      <div class="absolute -right-16 -top-16 w-80 h-80 rounded-full pointer-events-none" style="border:1px solid rgba(255,255,255,0.04)"></div>
      <div class="max-w-6xl mx-auto relative z-10">
       <button onclick="goToPage('engagement')" class="flex items-center gap-2 mb-8" style="color:rgba(255,255,255,0.45);font-size:.8rem;font-weight:500"><i data-lucide="arrow-left" style="width:15px;height:15px"></i> Back</button>
       <div class="label-small mb-3" style="color:rgba(255,255,255,0.35);letter-spacing:.12em">Agreement Management</div>
       <h1 class="font-heading font-bold mb-4" style="font-size:clamp(2rem,5vw,3.5rem);line-height:1.05;color:#fff;letter-spacing:-.02em">MoU / MoA<br><em style="font-style:italic;color:#8B7355">Coordination</em></h1>
       <p class="max-w-2xl mb-8" style="color:rgba(255,255,255,0.6);font-size:1rem;line-height:1.7">Reviewing 25+ partnership agreements per month at PCU — ensuring compliance, institutional alignment, and timely processing across a diverse global network.</p>
       <div class="flex flex-wrap gap-8 pb-8">
        <div><p class="font-heading font-bold text-2xl" style="color:#8B7355">25+</p><p class="label-small" style="color:rgba(255,255,255,0.35)">Monthly Reviews</p></div>
        <div><p class="font-heading font-bold text-2xl" style="color:#8B7355">30+</p><p class="label-small" style="color:rgba(255,255,255,0.35)">Partners</p></div>
        <div><p class="font-heading font-bold text-2xl" style="color:#8B7355">40+</p><p class="label-small" style="color:rgba(255,255,255,0.35)">Total Agreements</p></div>
        <div><p class="font-heading font-bold text-2xl" style="color:#8B7355">24h</p><p class="label-small" style="color:rgba(255,255,255,0.35)">Meeting Minutes</p></div>
       </div>
       <!-- Tab Nav -->
       <div class="flex gap-0 border-t" style="border-color:rgba(255,255,255,0.08)">
        <button onclick="goToPage('engagement')" style="color:rgba(255,255,255,0.45);font-size:.75rem;font-weight:500;padding:12px 20px;border-bottom:2px solid transparent;background:transparent;cursor:pointer;transition:all .2s" onmouseover="this.style.color='#fff';this.style.borderBottomColor='#8B7355'" onmouseout="this.style.color='rgba(255,255,255,0.45)';this.style.borderBottomColor='transparent'">Overview</button>
        <button onclick="goToPage('partnerships')" style="color:rgba(255,255,255,0.45);font-size:.75rem;font-weight:500;padding:12px 20px;border-bottom:2px solid transparent;background:transparent;cursor:pointer;transition:all .2s" onmouseover="this.style.color='#fff';this.style.borderBottomColor='#8B7355'" onmouseout="this.style.color='rgba(255,255,255,0.45)';this.style.borderBottomColor='transparent'">Partnership Dev</button>
       </div>
      </div>
     </div>
     <!-- Coordination Framework -->
     <div style="padding:72px 24px 40px;background:#FAFAF8">
      <div class="max-w-6xl mx-auto">
       <div class="flex items-center gap-3 mb-10"><span class="accent-line"></span><span class="label-small">Coordination Framework</span></div>
       <h2 class="font-heading font-bold text-3xl mb-4" style="color:#1C1C1E">How Agreements Are Managed</h2>
       <p class="text-base max-w-3xl mb-10" style="color:#5C5C5C">A rigorous end-to-end process ensures every MoU and MoA is handled with precision — from initial drafting through to activation and ongoing monitoring.</p>
       <div class="card rounded-2xl overflow-hidden" style="border:1px solid rgba(28,28,30,0.08)">
        <div class="flex gap-4 p-6 border-b" style="border-color:rgba(28,28,30,0.1)">
         <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(74,107,138,0.08)"><i data-lucide="file-check" style="width:24px;height:24px;color:#4A6B8A"></i></div>
         <div>
          <h3 class="font-heading font-semibold mb-1" style="color:#1C1C1E">Drafting &amp; Negotiation</h3>
          <p class="text-sm leading-relaxed" style="color:#5C5C5C">Collaboratively developing MoU/MoA documents that clearly define partnership scope, objectives, and mutual commitments</p>
         </div>
        </div>
        <div class="flex gap-4 p-6 border-b" style="border-color:rgba(28,28,30,0.1)">
         <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(74,107,138,0.08)"><i data-lucide="check-square" style="width:24px;height:24px;color:#4A6B8A"></i></div>
         <div>
          <h3 class="font-heading font-semibold mb-1" style="color:#1C1C1E">Compliance &amp; Approval</h3>
          <p class="text-sm leading-relaxed" style="color:#5C5C5C">Ensuring all agreements comply with institutional policies and securing necessary approvals from relevant authorities</p>
         </div>
        </div>
        <div class="flex gap-4 p-6 border-b" style="border-color:rgba(28,28,30,0.1)">
         <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(74,107,138,0.08)"><i data-lucide="refresh-cw" style="width:24px;height:24px;color:#4A6B8A"></i></div>
         <div>
          <h3 class="font-heading font-semibold mb-1" style="color:#1C1C1E">Renewal &amp; Updates</h3>
          <p class="text-sm leading-relaxed" style="color:#5C5C5C">Managing agreement lifecycle including renewals, amendments, and updates to reflect evolving partnership priorities</p>
         </div>
        </div>
        <div class="flex gap-4 p-6">
         <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(74,107,138,0.08)"><i data-lucide="bar-chart-2" style="width:24px;height:24px;color:#4A6B8A"></i></div>
         <div>
          <h3 class="font-heading font-semibold mb-1" style="color:#1C1C1E">Monitoring &amp; Activation</h3>
          <p class="text-sm leading-relaxed" style="color:#5C5C5C">Tracking implementation progress and ensuring both parties meet agreed commitments and leverage opportunities</p>
         </div>
        </div>
       </div>
      </div>
     </div>
     <!-- Agreement Portfolio Stats -->
     <div style="padding:40px 24px 40px;background:#FAFAF8">
      <div class="max-w-6xl mx-auto">
       <div class="flex items-center gap-3 mb-10"><span class="accent-line"></span><span class="label-small">Agreement Portfolio</span></div>
       <div class="grid md:grid-cols-3 gap-6">
        <div class="card p-8 rounded-2xl text-center hover:shadow-lg transition" style="border:1px solid rgba(28,28,30,0.08)">
         <p class="font-heading font-bold text-4xl mb-2" style="color:#4A6B8A">25+</p>
         <p class="text-sm font-medium mb-1" style="color:#1C1C1E">Agreements Reviewed Monthly</p>
         <p class="text-xs" style="color:#5C5C5C">Consistent monthly throughput at PCU</p>
        </div>
        <div class="card p-8 rounded-2xl text-center hover:shadow-lg transition" style="border:1px solid rgba(28,28,30,0.08)">
         <p class="font-heading font-bold text-4xl mb-2" style="color:#4A6B8A">30+</p>
         <p class="text-sm font-medium mb-1" style="color:#1C1C1E">Institutional Partners Managed</p>
         <p class="text-xs" style="color:#5C5C5C">Across multiple countries and regions</p>
        </div>
        <div class="card p-8 rounded-2xl text-center hover:shadow-lg transition" style="border:1px solid rgba(28,28,30,0.08)">
         <p class="font-heading font-bold text-4xl mb-2" style="color:#8B7355">24h</p>
         <p class="text-sm font-medium mb-1" style="color:#1C1C1E">Meeting Minutes Turnaround</p>
         <p class="text-xs" style="color:#5C5C5C">Timely documentation for all meetings</p>
        </div>
       </div>
      </div>
     </div>
     <!-- Process Overview -->
     <div style="padding:40px 24px 72px;background:#FAFAF8">
      <div class="max-w-6xl mx-auto">
       <div class="flex items-center gap-3 mb-10"><span class="accent-line"></span><span class="label-small">Process Overview</span></div>
       <div class="card p-8 rounded-2xl" style="border:1px solid rgba(28,28,30,0.08)">
        <h2 class="font-heading font-semibold text-2xl mb-4" style="color:#1C1C1E">Framework &amp; Portfolio</h2>
        <p class="text-base mb-6" style="color:#5C5C5C">Memoranda of Understanding (MoU) and Agreements (MoA) form the foundation of our international partnerships. We manage a portfolio of 40+ strategic agreements — spanning 12 countries and 8 ASEAN nations — ensuring clear expectations, mutual benefits, and timely renewal cycles for each partnership.</p>
        <p class="text-base" style="color:#5C5C5C">Each agreement is tracked through its full lifecycle: from initial scoping and drafting, through compliance review and institutional approval, to activation, monitoring, and eventual renewal or termination. This structured approach allows PCU to maintain a high-quality, active portfolio of partnerships that deliver real academic and professional value.</p>
       </div>
      </div>
     </div>
    `;
  if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', function() {
  mouInitPage();
});
