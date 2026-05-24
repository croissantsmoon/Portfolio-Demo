function partnershipDetailInitPage() {
  var el = document.getElementById('page-partnership-detail');
  if (!el) return;
  el.innerHTML = `
     <!-- Hero -->
     <div style="background:linear-gradient(160deg,#1C1C1E 0%,#1E3A5F 55%,#2C4A72 100%);padding:clamp(48px,8vh,72px) 24px 48px;position:relative;overflow:hidden">
      <div class="absolute inset-0 pointer-events-none" style="background:radial-gradient(ellipse at 85% 20%,rgba(139,115,85,0.18),transparent 55%)"></div>
      <div class="absolute -right-16 -top-16 w-80 h-80 rounded-full pointer-events-none" style="border:1px solid rgba(255,255,255,0.04)"></div>
      <div class="max-w-6xl mx-auto relative z-10">
       <button onclick="goToPage('partnerships')" class="flex items-center gap-2 mb-8" style="color:rgba(255,255,255,0.45);font-size:.8rem;font-weight:500"><i data-lucide="arrow-left" style="width:15px;height:15px"></i> Back to Partnerships</button>
       <div class="label-small mb-3" style="color:rgba(255,255,255,0.35);letter-spacing:.12em" data-edit-key="partnershipdetail_hero_eyebrow">Strategic Collaborations</div>
       <h1 class="font-heading font-bold mb-4" style="font-size:clamp(2rem,5vw,3.5rem);line-height:1.05;color:#fff;letter-spacing:-.02em" data-edit-key="partnershipdetail_hero_title">Partnership Development<br><em style="font-style:italic;color:#8B7355">In Depth</em></h1>
       <p class="max-w-2xl" style="color:rgba(255,255,255,0.6);font-size:1rem;line-height:1.7" data-edit-key="partnershipdetail_hero_tagline">How I identify, formalise, and sustain institutional collaborations — with the specific activities and outcomes each phase produces.</p>
      </div>
     </div>
     <!-- Impact at a glance -->
     <div style="padding:72px 24px 48px;background:#FAFAF8">
      <div class="max-w-6xl mx-auto">
       <div class="flex items-center gap-3 mb-8"><span class="accent-line"></span><span class="label-small">Impact at a Glance</span></div>
       <div class="grid md:grid-cols-4 gap-4">
        <div class="card rounded-2xl p-5 text-center" style="border:1px solid rgba(28,28,30,0.08)">
         <p class="font-heading font-bold text-3xl mb-1" style="color:#1E3A5F">184</p>
         <p class="text-xs font-medium" style="color:#1C1C1E">International Institutions</p>
        </div>
        <div class="card rounded-2xl p-5 text-center" style="border:1px solid rgba(28,28,30,0.08)">
         <p class="font-heading font-bold text-3xl mb-1" style="color:#4A6B8A">32</p>
         <p class="text-xs font-medium" style="color:#1C1C1E">Countries Represented</p>
        </div>
        <div class="card rounded-2xl p-5 text-center" style="border:1px solid rgba(28,28,30,0.08)">
         <p class="font-heading font-bold text-3xl mb-1" style="color:#8B7355">321</p>
         <p class="text-xs font-medium" style="color:#1C1C1E">Domestic Partners</p>
        </div>
        <div class="card rounded-2xl p-5 text-center" style="border:1px solid rgba(28,28,30,0.08)">
         <p class="font-heading font-bold text-3xl mb-1" style="color:#059669">15+</p>
         <p class="text-xs font-medium" style="color:#1C1C1E">Meetings / Month</p>
        </div>
       </div>
      </div>
     </div>
     <!-- Four-phase approach -->
     <div style="padding:0 24px 48px;background:#FAFAF8">
      <div class="max-w-6xl mx-auto">
       <div class="flex items-center gap-3 mb-6"><span class="accent-line"></span><span class="label-small">My Approach</span></div>
       <h2 class="font-heading font-bold text-2xl mb-3" style="color:#1C1C1E">The Four-Phase Process</h2>
       <p class="text-base max-w-3xl mb-8" style="color:#5C5C5C">Each collaboration follows a structured pathway — from first contact to long-term activation — ensuring quality and mutual benefit at every stage.</p>
       <div class="grid md:grid-cols-2 gap-5">
        <div class="card rounded-2xl p-7 flex gap-5" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style="background:rgba(30,58,95,0.08)"><i data-lucide="search" style="width:20px;height:20px;color:#1E3A5F"></i></div>
         <div>
          <div class="flex items-center gap-2 mb-1.5"><span class="text-xs font-bold" style="color:#1E3A5F;letter-spacing:.06em">01</span><h3 class="font-heading font-bold text-base" style="color:#1C1C1E">Strategic Identification</h3></div>
          <p class="text-sm leading-relaxed" style="color:#5C5C5C">Identifying partner institutions aligned with PCU's mission through rigorous evaluation — assessing academic reputation, geographic priority, and potential for active collaboration</p>
         </div>
        </div>
        <div class="card rounded-2xl p-7 flex gap-5" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style="background:rgba(74,107,138,0.08)"><i data-lucide="handshake" style="width:20px;height:20px;color:#4A6B8A"></i></div>
         <div>
          <div class="flex items-center gap-2 mb-1.5"><span class="text-xs font-bold" style="color:#4A6B8A;letter-spacing:.06em">02</span><h3 class="font-heading font-bold text-base" style="color:#1C1C1E">Engagement &amp; Negotiation</h3></div>
          <p class="text-sm leading-relaxed" style="color:#5C5C5C">Building relationships through correspondence, visits, and joint meetings — negotiating MoU/MoA terms that benefit both institutions and advance shared academic goals</p>
         </div>
        </div>
        <div class="card rounded-2xl p-7 flex gap-5" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style="background:rgba(139,115,85,0.08)"><i data-lucide="file-check" style="width:20px;height:20px;color:#8B7355"></i></div>
         <div>
          <div class="flex items-center gap-2 mb-1.5"><span class="text-xs font-bold" style="color:#8B7355;letter-spacing:.06em">03</span><h3 class="font-heading font-bold text-base" style="color:#1C1C1E">Program Development</h3></div>
          <p class="text-sm leading-relaxed" style="color:#5C5C5C">Co-designing exchange programs, research collaborations, and joint initiatives — translating the signed agreement into concrete activities with clear deliverables and timelines</p>
         </div>
        </div>
        <div class="card rounded-2xl p-7 flex gap-5" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style="background:rgba(5,150,105,0.08)"><i data-lucide="trending-up" style="width:20px;height:20px;color:#059669"></i></div>
         <div>
          <div class="flex items-center gap-2 mb-1.5"><span class="text-xs font-bold" style="color:#059669;letter-spacing:.06em">04</span><h3 class="font-heading font-bold text-base" style="color:#1C1C1E">Activation &amp; Growth</h3></div>
          <p class="text-sm leading-relaxed" style="color:#5C5C5C">Implementing programs, monitoring outcomes, and continuously strengthening relationships — ensuring every partnership grows and generates lasting value for both parties</p>
         </div>
        </div>
       </div>
      </div>
     </div>
     <!-- Partnership Categories -->
     <div style="padding:0 24px 72px;background:#FAFAF8">
      <div class="max-w-6xl mx-auto">
       <div class="flex items-center gap-3 mb-6"><span class="accent-line"></span><span class="label-small">What Partnerships Enable</span></div>
       <div class="grid md:grid-cols-2 gap-5">
        <div class="card rounded-2xl p-6" style="border:1px solid rgba(28,28,30,0.08);border-left:4px solid #1E3A5F">
         <div class="flex items-start gap-3 mb-2">
          <i data-lucide="book-open" style="width:18px;height:18px;color:#1E3A5F;flex-shrink:0;margin-top:2px"></i>
          <p class="font-semibold" style="color:#1C1C1E">Student Exchange Programs</p>
         </div>
         <p class="text-sm" style="color:#5C5C5C">Semester abroad, dual-degree, and degree-level mobility opportunities — giving students international academic experience</p>
        </div>
        <div class="card rounded-2xl p-6" style="border:1px solid rgba(28,28,30,0.08);border-left:4px solid #4A6B8A">
         <div class="flex items-start gap-3 mb-2">
          <i data-lucide="microscope" style="width:18px;height:18px;color:#4A6B8A;flex-shrink:0;margin-top:2px"></i>
          <p class="font-semibold" style="color:#1C1C1E">Research Collaborations</p>
         </div>
         <p class="text-sm" style="color:#5C5C5C">Joint projects and interdisciplinary initiatives — connecting faculty across institutions to advance scholarship and publish findings</p>
        </div>
        <div class="card rounded-2xl p-6" style="border:1px solid rgba(28,28,30,0.08);border-left:4px solid #8B7355">
         <div class="flex items-start gap-3 mb-2">
          <i data-lucide="users" style="width:18px;height:18px;color:#8B7355;flex-shrink:0;margin-top:2px"></i>
          <p class="font-semibold" style="color:#1C1C1E">Faculty Development</p>
         </div>
         <p class="text-sm" style="color:#5C5C5C">Teaching capacity, research mentoring, and professional development opportunities for academic staff across partner institutions</p>
        </div>
        <div class="card rounded-2xl p-6" style="border:1px solid rgba(28,28,30,0.08);border-left:4px solid #059669">
         <div class="flex items-start gap-3 mb-2">
          <i data-lucide="layers" style="width:18px;height:18px;color:#059669;flex-shrink:0;margin-top:2px"></i>
          <p class="font-semibold" style="color:#1C1C1E">Curriculum Development</p>
         </div>
         <p class="text-sm" style="color:#5C5C5C">Joint program design and curriculum internationalisation — co-creating courses and frameworks that reflect global academic standards</p>
        </div>
       </div>
      </div>
     </div>
    `;
  if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', function() {
  partnershipDetailInitPage();
});
