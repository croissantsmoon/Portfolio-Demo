function mouDetailInitPage() {
  var el = document.getElementById('page-mou-detail');
  if (!el) return;
  el.innerHTML = `
     <!-- Hero -->
     <div style="background:linear-gradient(160deg,#1C1C1E 0%,#1E3A5F 55%,#2C4A72 100%);padding:clamp(48px,8vh,72px) 24px 48px;position:relative;overflow:hidden">
      <div class="absolute inset-0 pointer-events-none" style="background:radial-gradient(ellipse at 85% 20%,rgba(139,115,85,0.18),transparent 55%)"></div>
      <div class="absolute -right-16 -top-16 w-80 h-80 rounded-full pointer-events-none" style="border:1px solid rgba(255,255,255,0.04)"></div>
      <div class="max-w-6xl mx-auto relative z-10">
       <button onclick="goToPage('mou')" class="flex items-center gap-2 mb-8" style="color:rgba(255,255,255,0.45);font-size:.8rem;font-weight:500"><i data-lucide="arrow-left" style="width:15px;height:15px"></i> Back to MoU / MoA</button>
       <div class="label-small mb-3" style="color:rgba(255,255,255,0.35);letter-spacing:.12em" data-edit-key="moudetail_hero_eyebrow">Agreement Management</div>
       <h1 class="font-heading font-bold mb-4" style="font-size:clamp(2rem,5vw,3.5rem);line-height:1.05;color:#fff;letter-spacing:-.02em" data-edit-key="moudetail_hero_title">MoU / MoA<br><em style="font-style:italic;color:#8B7355">In Depth</em></h1>
       <p class="max-w-2xl" style="color:rgba(255,255,255,0.6);font-size:1rem;line-height:1.7" data-edit-key="moudetail_hero_tagline">What MoU and MoA agreements actually cover, how they differ, and what a monthly review cycle looks like in practice.</p>
      </div>
     </div>
     <!-- Agreement Types -->
     <div style="padding:72px 24px 48px;background:#FAFAF8">
      <div class="max-w-6xl mx-auto">
       <div class="flex items-center gap-3 mb-8"><span class="accent-line"></span><span class="label-small">Agreement Types</span></div>
       <div class="grid md:grid-cols-2 gap-5">
        <div class="card rounded-2xl p-6" style="border:1px solid rgba(28,28,30,0.08);border-left:4px solid #1E3A5F">
         <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(30,58,95,0.08)"><i data-lucide="handshake" style="width:20px;height:20px;color:#1E3A5F"></i></div>
          <div>
           <h3 class="font-heading font-semibold mb-1" style="color:#1C1C1E">Memorandum of Understanding (MoU)</h3>
           <p class="text-sm leading-relaxed" style="color:#5C5C5C">A broad-scope agreement declaring intent to collaborate. Sets out goals and general areas of cooperation without binding either party to specific deliverables. Typically renewed every 3–5 years.</p>
          </div>
         </div>
        </div>
        <div class="card rounded-2xl p-6" style="border:1px solid rgba(28,28,30,0.08);border-left:4px solid #4A6B8A">
         <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(74,107,138,0.08)"><i data-lucide="file-check-2" style="width:20px;height:20px;color:#4A6B8A"></i></div>
          <div>
           <h3 class="font-heading font-semibold mb-1" style="color:#1C1C1E">Memorandum of Agreement (MoA)</h3>
           <p class="text-sm leading-relaxed" style="color:#5C5C5C">A more specific, operational document that defines concrete activities, resource commitments, timelines, and responsibilities. Usually sits beneath an MoU and governs a particular program or initiative.</p>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
     <!-- Review Checklist -->
     <div style="padding:0 24px 48px;background:#FAFAF8">
      <div class="max-w-6xl mx-auto">
       <div class="flex items-center gap-3 mb-8"><span class="accent-line"></span><span class="label-small">Monthly Review — What We Check</span></div>
       <div class="card rounded-2xl overflow-hidden" style="border:1px solid rgba(28,28,30,0.08)">
        <div class="flex gap-4 p-5 border-b" style="border-color:rgba(28,28,30,0.08)">
         <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(30,58,95,0.08)"><i data-lucide="shield-check" style="width:18px;height:18px;color:#1E3A5F"></i></div>
         <div><p class="font-semibold text-sm mb-0.5" style="color:#1C1C1E">Institutional Compliance</p><p class="text-sm" style="color:#5C5C5C">Verify each agreement aligns with PCU's accreditation standards, academic regulations, and partner-country legal requirements</p></div>
        </div>
        <div class="flex gap-4 p-5 border-b" style="border-color:rgba(28,28,30,0.08)">
         <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(74,107,138,0.08)"><i data-lucide="calendar-check" style="width:18px;height:18px;color:#4A6B8A"></i></div>
         <div><p class="font-semibold text-sm mb-0.5" style="color:#1C1C1E">Expiry & Renewal Tracking</p><p class="text-sm" style="color:#5C5C5C">Flag agreements expiring within 6 months and initiate renewal discussions before the agreement lapses</p></div>
        </div>
        <div class="flex gap-4 p-5 border-b" style="border-color:rgba(28,28,30,0.08)">
         <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(139,115,85,0.08)"><i data-lucide="activity" style="width:18px;height:18px;color:#8B7355"></i></div>
         <div><p class="font-semibold text-sm mb-0.5" style="color:#1C1C1E">Activation Status</p><p class="text-sm" style="color:#5C5C5C">Confirm active agreements have ongoing programs or activities — dormant agreements are flagged for review or termination</p></div>
        </div>
        <div class="flex gap-4 p-5">
         <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(5,150,105,0.08)"><i data-lucide="file-edit" style="width:18px;height:18px;color:#059669"></i></div>
         <div><p class="font-semibold text-sm mb-0.5" style="color:#1C1C1E">Documentation & Minutes</p><p class="text-sm" style="color:#5C5C5C">Ensure all meetings and correspondence related to each agreement are documented and distributed within 24 hours</p></div>
        </div>
       </div>
      </div>
     </div>
     <!-- Portfolio Snapshot -->
     <div style="padding:0 24px 72px;background:#FAFAF8">
      <div class="max-w-6xl mx-auto">
       <div class="flex items-center gap-3 mb-8"><span class="accent-line"></span><span class="label-small">Portfolio Snapshot</span></div>
       <div class="grid md:grid-cols-3 gap-5">
        <div class="card rounded-2xl p-6 text-center" style="border:1px solid rgba(28,28,30,0.08)">
         <p class="font-heading font-bold text-4xl mb-2" style="color:#1E3A5F">12</p>
         <p class="text-sm font-medium mb-1" style="color:#1C1C1E">Countries in MoU Portfolio</p>
         <p class="text-xs" style="color:#9CA3AF">Spanning 4 continents</p>
        </div>
        <div class="card rounded-2xl p-6 text-center" style="border:1px solid rgba(28,28,30,0.08)">
         <p class="font-heading font-bold text-4xl mb-2" style="color:#4A6B8A">8</p>
         <p class="text-sm font-medium mb-1" style="color:#1C1C1E">ASEAN Nations with Active MoUs</p>
         <p class="text-xs" style="color:#9CA3AF">Core regional priority</p>
        </div>
        <div class="card rounded-2xl p-6 text-center" style="border:1px solid rgba(28,28,30,0.08)">
         <p class="font-heading font-bold text-4xl mb-2" style="color:#8B7355">40+</p>
         <p class="text-sm font-medium mb-1" style="color:#1C1C1E">Total Active Agreements</p>
         <p class="text-xs" style="color:#9CA3AF">MoU and MoA combined</p>
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
