// Global Partnerships — MoU / MoA Coordination page

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
       <div class="label-small mb-3" style="color:rgba(255,255,255,0.35);letter-spacing:.12em" data-edit-key="mou_hero_eyebrow">Agreement Management</div>
       <h1 class="font-heading font-bold mb-4" style="font-size:clamp(2rem,5vw,3.5rem);line-height:1.05;color:#fff;letter-spacing:-.02em" data-edit-key="mou_hero_title">MoU / MoA<br><em style="font-style:italic;color:#8B7355">Coordination</em></h1>
       <p class="max-w-2xl mb-8" style="color:rgba(255,255,255,0.6);font-size:1rem;line-height:1.7" data-edit-key="mou_hero_tagline">Reviewing 25+ partnership agreements per month at NGU — ensuring compliance, institutional alignment, and timely processing across a diverse global network.</p>
       <div class="flex flex-wrap gap-8 pb-8">
        <div><p class="font-heading font-bold text-2xl" style="color:#8B7355">25+</p><p class="label-small" style="color:rgba(255,255,255,0.35)">Monthly Reviews</p></div>
        <div><p class="font-heading font-bold text-2xl" style="color:#8B7355">30+</p><p class="label-small" style="color:rgba(255,255,255,0.35)">Partners</p></div>
        <div><p class="font-heading font-bold text-2xl" style="color:#8B7355">40+</p><p class="label-small" style="color:rgba(255,255,255,0.35)">Total Agreements</p></div>
        <div><p class="font-heading font-bold text-2xl" style="color:#8B7355">24h</p><p class="label-small" style="color:rgba(255,255,255,0.35)">Meeting Minutes</p></div>
       </div>
       <!-- Tab Nav — MoU / MoA is active -->
       <div class="flex gap-0 border-t" style="border-color:rgba(255,255,255,0.08)">
        <button onclick="goToPage('engagement')" style="color:rgba(255,255,255,0.45);font-size:.75rem;font-weight:500;padding:12px 20px;border-bottom:2px solid transparent;background:transparent;cursor:pointer;transition:all .2s" onmouseover="this.style.color='#fff';this.style.borderBottomColor='#8B7355'" onmouseout="this.style.color='rgba(255,255,255,0.45)';this.style.borderBottomColor='transparent'">Overview</button>
        <button onclick="goToPage('partnerships')" style="color:rgba(255,255,255,0.45);font-size:.75rem;font-weight:500;padding:12px 20px;border-bottom:2px solid transparent;background:transparent;cursor:pointer;transition:all .2s" onmouseover="this.style.color='#fff';this.style.borderBottomColor='#8B7355'" onmouseout="this.style.color='rgba(255,255,255,0.45)';this.style.borderBottomColor='transparent'">Partnership Dev</button>
        <button style="color:#fff;font-size:.75rem;font-weight:600;padding:12px 20px;border-bottom:2px solid #8B7355;background:transparent;cursor:default">MoU / MoA</button>
       </div>
      </div>
     </div>
     <!-- Coordination Framework -->
     <div style="padding:72px 24px 64px;background:#FAFAF8">
      <div class="max-w-6xl mx-auto">
       <div class="flex items-center gap-3 mb-10"><span class="accent-line"></span><span class="label-small">Coordination Framework</span></div>
       <h2 class="font-heading font-bold text-3xl mb-4" style="color:#1C1C1E">How Agreements Are Managed</h2>
       <p class="text-base max-w-3xl mb-10" style="color:#5C5C5C">A rigorous end-to-end process ensures every MoU and MoA is handled with precision — from initial drafting through to activation and ongoing monitoring.</p>
       <div class="card rounded-2xl overflow-hidden" style="border:1px solid rgba(28,28,30,0.08)">
        <div class="flex gap-4 p-6 border-b" style="border-color:rgba(28,28,30,0.1)">
         <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(30,58,95,0.08)"><i data-lucide="file-check" style="width:24px;height:24px;color:#1E3A5F"></i></div>
         <div>
          <div class="flex items-center gap-2 mb-1"><span class="text-xs font-bold" style="color:#1E3A5F;letter-spacing:.06em">01</span><h3 class="font-heading font-semibold" style="color:#1C1C1E">Drafting &amp; Negotiation</h3></div>
          <p class="text-sm leading-relaxed" style="color:#5C5C5C">Collaboratively developing MoU/MoA documents that clearly define partnership scope, objectives, and mutual commitments</p>
         </div>
        </div>
        <div class="flex gap-4 p-6 border-b" style="border-color:rgba(28,28,30,0.1)">
         <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(74,107,138,0.08)"><i data-lucide="check-square" style="width:24px;height:24px;color:#4A6B8A"></i></div>
         <div>
          <div class="flex items-center gap-2 mb-1"><span class="text-xs font-bold" style="color:#4A6B8A;letter-spacing:.06em">02</span><h3 class="font-heading font-semibold" style="color:#1C1C1E">Compliance &amp; Approval</h3></div>
          <p class="text-sm leading-relaxed" style="color:#5C5C5C">Ensuring all agreements comply with institutional policies and securing necessary approvals from relevant authorities</p>
         </div>
        </div>
        <div class="flex gap-4 p-6 border-b" style="border-color:rgba(28,28,30,0.1)">
         <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(139,115,85,0.08)"><i data-lucide="refresh-cw" style="width:24px;height:24px;color:#8B7355"></i></div>
         <div>
          <div class="flex items-center gap-2 mb-1"><span class="text-xs font-bold" style="color:#8B7355;letter-spacing:.06em">03</span><h3 class="font-heading font-semibold" style="color:#1C1C1E">Renewal &amp; Updates</h3></div>
          <p class="text-sm leading-relaxed" style="color:#5C5C5C">Managing agreement lifecycle including renewals, amendments, and updates to reflect evolving partnership priorities</p>
         </div>
        </div>
        <div class="flex gap-4 p-6">
         <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(5,150,105,0.08)"><i data-lucide="bar-chart-2" style="width:24px;height:24px;color:#059669"></i></div>
         <div>
          <div class="flex items-center gap-2 mb-1"><span class="text-xs font-bold" style="color:#059669;letter-spacing:.06em">04</span><h3 class="font-heading font-semibold" style="color:#1C1C1E">Monitoring &amp; Activation</h3></div>
          <p class="text-sm leading-relaxed" style="color:#5C5C5C">Tracking implementation progress and ensuring both parties meet agreed commitments and leverage opportunities</p>
         </div>
        </div>
       </div>
      </div>
     </div>
     <!-- Partnership Dashboard Integration -->
     <div style="padding:64px 24px;background:#fff;border-top:1px solid rgba(28,28,30,0.07)">
      <div class="max-w-6xl mx-auto">
       <div class="flex items-center gap-3 mb-10"><span class="accent-line"></span><span class="label-small">System Integration</span></div>
       <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
         <h2 class="font-heading font-bold text-3xl mb-4" style="color:#1C1C1E">Managed Through the Partnership Dashboard</h2>
         <p class="text-base mb-6" style="color:#5C5C5C;line-height:1.75">Every agreement — from first draft to final signature — is tracked and executed through an integrated, self-built Partnership Dashboard. Rather than managing documents across disconnected spreadsheets and email threads, the entire lifecycle is centralised in one system I designed and built specifically for NGU's international office workflow.</p>
         <p class="text-base mb-8" style="color:#5C5C5C;line-height:1.75">The dashboard covers the full 8-stage agreement workflow: <strong style="color:#1C1C1E">Drafting → Internal Review → Legal Review → Partner Review → Waiting Signature → Signed → Completed → Archived</strong>. Each stage is tracked with progress indicators and status history, so nothing slips through the cracks — and every stakeholder knows exactly where an agreement stands at any moment.</p>
         <div class="flex flex-wrap gap-3 mb-8">
          <span class="tag">Drafting Tracking</span>
          <span class="tag">8-Stage Workflow</span>
          <span class="tag">Expiry Alerts</span>
          <span class="tag">Public Archive</span>
          <span class="tag">Role-Based Access</span>
          <span class="tag">Executive Analytics</span>
         </div>
         <button onclick="goToPage('web-dashboard-partnership')" class="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all" style="background:#1E3A5F;color:#fff;border:none;cursor:pointer" onmouseover="this.style.background='#2C4A72'" onmouseout="this.style.background='#1E3A5F'">
          <i data-lucide="layout-dashboard" style="width:15px;height:15px"></i>
          View Partnership Dashboard
         </button>
        </div>
        <div class="grid gap-4">
         <div class="card p-5 rounded-2xl" style="border:1px solid rgba(28,28,30,0.08)">
          <div class="flex items-start gap-4">
           <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(30,58,95,0.08)"><i data-lucide="workflow" style="width:18px;height:18px;color:#1E3A5F"></i></div>
           <div>
            <h4 class="font-heading font-semibold mb-1" style="color:#1C1C1E">End-to-End Document Pipeline</h4>
            <p class="text-sm leading-relaxed" style="color:#5C5C5C">From first draft to archived signed copy — every document stage is logged, timestamped, and visible to authorised staff across all four admin roles.</p>
           </div>
          </div>
         </div>
         <div class="card p-5 rounded-2xl" style="border:1px solid rgba(28,28,30,0.08)">
          <div class="flex items-start gap-4">
           <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(5,150,105,0.08)"><i data-lucide="archive" style="width:18px;height:18px;color:#059669"></i></div>
           <div>
            <h4 class="font-heading font-semibold mb-1" style="color:#1C1C1E">Public Agreement Archive</h4>
            <p class="text-sm leading-relaxed" style="color:#5C5C5C">Signed and active agreements are auto-archived into a searchable public library — with advanced filter and CSV export, no sign-in required for read access.</p>
           </div>
          </div>
         </div>
         <div class="card p-5 rounded-2xl" style="border:1px solid rgba(28,28,30,0.08)">
          <div class="flex items-start gap-4">
           <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(139,115,85,0.08)"><i data-lucide="bell" style="width:18px;height:18px;color:#8B7355"></i></div>
           <div>
            <h4 class="font-heading font-semibold mb-1" style="color:#1C1C1E">Expiry &amp; Renewal Tracking</h4>
            <p class="text-sm leading-relaxed" style="color:#5C5C5C">Colour-coded status badges surface agreements nearing expiry before they lapse — ensuring renewals are initiated on time, every time.</p>
           </div>
          </div>
         </div>
         <div class="card p-5 rounded-2xl" style="border:1px solid rgba(28,28,30,0.08)">
          <div class="flex items-start gap-4">
           <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(124,58,237,0.08)"><i data-lucide="pie-chart" style="width:18px;height:18px;color:#7C3AED"></i></div>
           <div>
            <h4 class="font-heading font-semibold mb-1" style="color:#1C1C1E">Executive Analytics</h4>
            <p class="text-sm leading-relaxed" style="color:#5C5C5C">Status distribution, agreements by department, monthly activity trends, and expiration timelines — all rendered live and filterable for leadership reporting.</p>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    `;
  if (window.lucide) lucide.createIcons();

  // ── Calendar: "Upcoming meetings & coordination" — inserted after the hero
  if (window.PortfolioCalendar) {
    var heroBlock = el.firstElementChild; // dark hero
    var section = document.createElement('section');
    section.id = 'mou-calendar-section';
    section.style.cssText = 'padding:48px 24px;background:#FAFAF8;border-bottom:1px solid rgba(28,28,30,0.07)';
    section.innerHTML =
      '<div class="max-w-6xl mx-auto">' +
        '<div class="flex items-center gap-3 mb-4"><span class="accent-line"></span><span class="label-small">Coordination Calendar</span></div>' +
        '<h2 class="font-heading font-bold text-2xl mb-2" style="color:#1C1C1E;letter-spacing:-.01em">Upcoming meetings &amp; coordination</h2>' +
        '<p class="text-sm mb-6" style="color:#5C5C5C;max-width:560px">Scheduled meetings, agreement reviews, and partnership milestones. Click any date to see the details.</p>' +
        '<div id="mou-calendar-mount"></div>' +
      '</div>';
    if (heroBlock && heroBlock.insertAdjacentElement) {
      heroBlock.insertAdjacentElement('afterend', section);
    } else {
      el.appendChild(section);
    }
    window.PortfolioCalendar.mount(document.getElementById('mou-calendar-mount'), 'mou');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  mouInitPage();
});
