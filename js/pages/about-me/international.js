function internationalInitPage() {
  var el = document.getElementById('page-international');
  if (!el) return;
  el.innerHTML = `
    <!-- Dark hero -->
    <div style="background:linear-gradient(160deg,#1C1C1E 0%,#1E3A5F 55%,#2C4A72 100%);padding:clamp(48px,8vh,72px) 24px 48px;position:relative;overflow:hidden">
      <div class="absolute inset-0 pointer-events-none" style="background:radial-gradient(ellipse at 85% 20%,rgba(139,115,85,0.18),transparent 55%)"></div>
      <div class="absolute -right-16 -top-16 w-80 h-80 rounded-full pointer-events-none" style="border:1px solid rgba(255,255,255,0.04)"></div>
      <div class="max-w-6xl mx-auto relative z-10">
        <button onclick="goToPage('about-overview')" class="flex items-center gap-2 mb-8" style="color:rgba(255,255,255,0.45);font-size:.8rem;font-weight:500"><i data-lucide="arrow-left" style="width:15px;height:15px"></i> Back</button>
        <div class="label-small mb-3" style="color:rgba(255,255,255,0.35);letter-spacing:.12em" data-edit-key="international_hero_eyebrow">Global Experience</div>
        <h1 class="font-heading font-bold mb-4" style="font-size:clamp(2rem,5vw,3.5rem);line-height:1.05;color:#fff;letter-spacing:-.02em" data-edit-key="international_hero_title">International<br><em style="font-style:italic;color:#8B7355">Exposure</em></h1>
        <p class="max-w-2xl mb-8" style="color:rgba(255,255,255,0.6);font-size:1rem;line-height:1.7" data-edit-key="international_hero_tagline">Real-world experience bridging institutions, students, and cultures across Southeast Asia and beyond.</p>
        <div class="flex flex-wrap gap-8">
          <div><p class="font-heading font-bold text-2xl" style="color:#8B7355">200+</p><p class="label-small" style="color:rgba(255,255,255,0.35)">Intl. Students Supported</p></div>
          <div><p class="font-heading font-bold text-2xl" style="color:#8B7355">30+</p><p class="label-small" style="color:rgba(255,255,255,0.35)">Partner Institutions (PCU)</p></div>
          <div><p class="font-heading font-bold text-2xl" style="color:#8B7355">25+</p><p class="label-small" style="color:rgba(255,255,255,0.35)">MoU/MoA Reviews/Month</p></div>
          <div><p class="font-heading font-bold text-2xl" style="color:#8B7355">10+</p><p class="label-small" style="color:rgba(255,255,255,0.35)">Stakeholder Types</p></div>
        </div>
      </div>
    </div>
    <!-- Regional Experience -->
    <div style="padding:72px 24px 48px;background:#FAFAF8">
      <div class="max-w-6xl mx-auto">
        <div class="flex items-center gap-3 mb-6"><span class="accent-line"></span><span class="label-small">Regional Coverage</span></div>
        <h2 class="font-heading font-bold text-3xl mb-3" style="color:#1C1C1E">Geographic Experience</h2>
        <p class="text-base max-w-3xl mb-10" style="color:#5C5C5C">Core regions where I have coordinated institutional partnerships, student support, and engagement activities.</p>
        <div class="space-y-4">
          <div class="card rounded-2xl p-6" style="border:1px solid rgba(30,58,95,0.1);border-left:4px solid #1E3A5F">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(30,58,95,0.08)">
                <i data-lucide="map-pin" style="width:18px;height:18px;color:#1E3A5F"></i>
              </div>
              <div>
                <p class="font-semibold mb-2" style="color:#1C1C1E">Southeast Asia</p>
                <p style="color:#5C5C5C">Core focus region across both PCU and Airlangga Global Engagement — coordinating with universities, immigration authorities, and government bodies across Indonesia and ASEAN partner nations.</p>
              </div>
            </div>
          </div>
          <div class="card rounded-2xl p-6" style="border:1px solid rgba(74,107,138,0.1);border-left:4px solid #4A6B8A">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(74,107,138,0.08)">
                <i data-lucide="map-pin" style="width:18px;height:18px;color:#4A6B8A"></i>
              </div>
              <div>
                <p class="font-semibold mb-2" style="color:#1C1C1E">East Asia & Pacific</p>
                <p style="color:#5C5C5C">Exchange programs and MoU coordination with partner institutions in Australia, Japan, South Korea, and other Indo-Pacific nations.</p>
              </div>
            </div>
          </div>
          <div class="card rounded-2xl p-6" style="border:1px solid rgba(5,150,105,0.1);border-left:4px solid #059669">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(5,150,105,0.08)">
                <i data-lucide="map-pin" style="width:18px;height:18px;color:#059669"></i>
              </div>
              <div>
                <p class="font-semibold mb-2" style="color:#1C1C1E">Europe & Americas</p>
                <p style="color:#5C5C5C">Institutional partnerships facilitated through PCU's global network and Airlangga's exchange programs, spanning European and North American universities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Multi-Stakeholder Coordination — separate section -->
    <div style="padding:0 24px 72px;background:#FAFAF8">
      <div class="max-w-6xl mx-auto">
        <div class="flex items-center gap-3 mb-6"><span class="accent-line"></span><span class="label-small">Stakeholder Network</span></div>
        <h2 class="font-heading font-bold text-3xl mb-3" style="color:#1C1C1E">Multi-Stakeholder Coordination</h2>
        <p class="text-base max-w-3xl mb-8" style="color:#5C5C5C">International education requires navigating 10+ distinct institutional players — each with different protocols, priorities, and communication norms.</p>
        <div class="card rounded-2xl p-6" style="border:1px solid rgba(28,28,30,0.08)">
          <div class="grid sm:grid-cols-2 gap-3">
            <div class="flex items-center gap-3 p-3 rounded-xl" style="background:rgba(30,58,95,0.04)">
              <i data-lucide="building-2" style="width:16px;height:16px;color:#1E3A5F;flex-shrink:0"></i>
              <span class="text-sm font-medium" style="color:#1C1C1E">Faculties & Academic Units</span>
            </div>
            <div class="flex items-center gap-3 p-3 rounded-xl" style="background:rgba(30,58,95,0.04)">
              <i data-lucide="landmark" style="width:16px;height:16px;color:#1E3A5F;flex-shrink:0"></i>
              <span class="text-sm font-medium" style="color:#1C1C1E">Immigration Authorities</span>
            </div>
            <div class="flex items-center gap-3 p-3 rounded-xl" style="background:rgba(30,58,95,0.04)">
              <i data-lucide="heart-pulse" style="width:16px;height:16px;color:#1E3A5F;flex-shrink:0"></i>
              <span class="text-sm font-medium" style="color:#1C1C1E">Hospitals & Healthcare</span>
            </div>
            <div class="flex items-center gap-3 p-3 rounded-xl" style="background:rgba(30,58,95,0.04)">
              <i data-lucide="banknote" style="width:16px;height:16px;color:#1E3A5F;flex-shrink:0"></i>
              <span class="text-sm font-medium" style="color:#1C1C1E">Banking Institutions</span>
            </div>
            <div class="flex items-center gap-3 p-3 rounded-xl" style="background:rgba(30,58,95,0.04)">
              <i data-lucide="award" style="width:16px;height:16px;color:#1E3A5F;flex-shrink:0"></i>
              <span class="text-sm font-medium" style="color:#1C1C1E">Scholarship Bodies (KNB & TIAS)</span>
            </div>
            <div class="flex items-center gap-3 p-3 rounded-xl" style="background:rgba(30,58,95,0.04)">
              <i data-lucide="package" style="width:16px;height:16px;color:#1E3A5F;flex-shrink:0"></i>
              <span class="text-sm font-medium" style="color:#1C1C1E">Vendor & Service Networks</span>
            </div>
            <div class="flex items-center gap-3 p-3 rounded-xl" style="background:rgba(30,58,95,0.04)">
              <i data-lucide="globe-2" style="width:16px;height:16px;color:#1E3A5F;flex-shrink:0"></i>
              <span class="text-sm font-medium" style="color:#1C1C1E">Partner Universities</span>
            </div>
            <div class="flex items-center gap-3 p-3 rounded-xl" style="background:rgba(30,58,95,0.04)">
              <i data-lucide="flag" style="width:16px;height:16px;color:#1E3A5F;flex-shrink:0"></i>
              <span class="text-sm font-medium" style="color:#1C1C1E">Government Bodies</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', function() {
  internationalInitPage();
});
