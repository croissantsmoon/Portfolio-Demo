function educationInitPage() {
  var el = document.getElementById('page-education');
  if (!el) return;
  el.innerHTML = `
    <!-- Dark hero -->
    <div style="background:linear-gradient(160deg,#1C1C1E 0%,#1E3A5F 55%,#2C4A72 100%);padding:clamp(48px,8vh,72px) 24px 48px;position:relative;overflow:hidden">
      <div class="absolute inset-0 pointer-events-none" style="background:radial-gradient(ellipse at 85% 20%,rgba(139,115,85,0.18),transparent 55%)"></div>
      <div class="absolute -right-16 -top-16 w-80 h-80 rounded-full pointer-events-none" style="border:1px solid rgba(255,255,255,0.04)"></div>
      <div class="max-w-6xl mx-auto relative z-10">
        <button onclick="goToPage('about-overview')" class="flex items-center gap-2 mb-8" style="color:rgba(255,255,255,0.45);font-size:.8rem;font-weight:500"><i data-lucide="arrow-left" style="width:15px;height:15px"></i> Back</button>
        <div class="label-small mb-3" style="color:rgba(255,255,255,0.35);letter-spacing:.12em" data-edit-key="education_hero_eyebrow">Educational Background</div>
        <h1 class="font-heading font-bold mb-4" style="font-size:clamp(2rem,5vw,3.5rem);line-height:1.05;color:#fff;letter-spacing:-.02em" data-edit-key="education_hero_title">Academic<br><em style="font-style:italic;color:#8B7355">Foundation</em></h1>
        <p class="max-w-2xl" style="color:rgba(255,255,255,0.6);font-size:1rem;line-height:1.7" data-edit-key="education_hero_tagline">Education and achievements that shaped my professional expertise in international affairs and global engagement.</p>
      </div>
    </div>
    <!-- Degrees -->
    <div style="padding:72px 24px 48px;background:#FAFAF8">
      <div class="max-w-6xl mx-auto">
        <div class="flex items-center gap-3 mb-8"><span class="accent-line"></span><span class="label-small">Academic Degrees</span></div>
        <div class="space-y-6">
          <!-- Bachelor's — most prominent -->
          <div class="card rounded-2xl overflow-hidden" style="border:1px solid rgba(28,28,30,0.08)">
            <div class="p-5 pb-4" style="background:linear-gradient(135deg,#1E3A5F 0%,#2C4A72 100%)">
              <div class="flex items-center gap-2 mb-2">
                <i data-lucide="graduation-cap" style="width:17px;height:17px;color:rgba(255,255,255,0.6)"></i>
                <span style="font-size:.7rem;font-weight:600;letter-spacing:.1em;color:rgba(255,255,255,0.5);text-transform:uppercase">Bachelor's Degree</span>
              </div>
              <h3 class="font-heading font-bold text-xl" style="color:#fff">International Affairs</h3>
            </div>
            <div class="p-6">
              <p class="text-sm font-medium mb-3" style="color:#1E3A5F">Pacific Coast University &nbsp;·&nbsp; August 2018 – May 2022</p>
              <p style="color:#5C5C5C;line-height:1.7">Concentrated in global governance, trade policy, and intercultural communication. Published two undergraduate research papers on APEC economic frameworks. Served as Teaching Assistant in Global Studies and Research Intern presenting at the Annual ICIS 2022 conference.</p>
            </div>
          </div>
          <!-- High School -->
          <div class="card rounded-2xl p-6" style="border:1px solid rgba(28,28,30,0.08);border-left:4px solid #4A6B8A">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(74,107,138,0.08)">
                <i data-lucide="school" style="width:20px;height:20px;color:#4A6B8A"></i>
              </div>
              <div>
                <h3 class="font-heading font-bold text-xl mb-1" style="color:#1C1C1E">Liberal Arts &amp; Sciences</h3>
                <p class="text-sm font-medium mb-3" style="color:#4A6B8A">Cascade Ridge Academy, Seattle, WA &nbsp;·&nbsp; 2015 – 2018</p>
                <p style="color:#5C5C5C">Comprehensive liberal arts track with focus on social sciences and global issues.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Honors -->
    <div style="padding:0 24px 48px;background:#FAFAF8">
      <div class="max-w-6xl mx-auto">
        <div class="flex items-center gap-3 mb-8"><span class="accent-line"></span><span class="label-small">Honors & Awards</span></div>
        <div class="card rounded-2xl p-6" style="border:1px solid rgba(28,28,30,0.08);border-left:4px solid #8B7355">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(139,115,85,0.08)">
              <i data-lucide="trophy" style="width:20px;height:20px;color:#8B7355"></i>
            </div>
            <div class="flex-1">
              <p class="text-sm font-medium mb-4" style="color:#8B7355">Recognition for innovation and creative communication</p>
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style="background:rgba(139,115,85,0.12)">
                    <i data-lucide="medal" style="width:12px;height:12px;color:#8B7355"></i>
                  </div>
                  <p style="color:#1C1C1E"><span class="font-semibold">Excellence in International Education Award</span> <span style="color:#5C5C5C">— NAFSA Region XII, 2024</span></p>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style="background:rgba(139,115,85,0.12)">
                    <i data-lucide="medal" style="width:12px;height:12px;color:#8B7355"></i>
                  </div>
                  <p style="color:#1C1C1E"><span class="font-semibold">Young Professional Grant</span> <span style="color:#5C5C5C">— Institute of International Education, 2023</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Publications -->
    <div style="padding:0 24px 72px;background:#FAFAF8">
      <div class="max-w-6xl mx-auto">
        <div class="flex items-center gap-3 mb-8"><span class="accent-line"></span><span class="label-small">Academic Publications</span></div>
        <div class="card rounded-2xl p-6" style="border:1px solid rgba(28,28,30,0.08);border-left:4px solid #059669">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(5,150,105,0.08)">
              <i data-lucide="book-open" style="width:20px;height:20px;color:#059669"></i>
            </div>
            <div class="flex-1">
              <p class="text-sm font-medium mb-4" style="color:#059669">Peer-reviewed research in International Affairs</p>
              <div class="space-y-3">
                <div class="flex items-start gap-3 pb-3 border-b" style="border-color:rgba(28,28,30,0.08)">
                  <i data-lucide="file-text" style="width:14px;height:14px;color:#9CA3AF;flex-shrink:0;margin-top:3px"></i>
                  <p class="text-sm leading-relaxed" style="color:#1C1C1E">Rethinking Student Mobility in a Post-Pandemic Landscape (2023)</p>
                </div>
                <div class="flex items-start gap-3 pb-3 border-b" style="border-color:rgba(28,28,30,0.08)">
                  <i data-lucide="file-text" style="width:14px;height:14px;color:#9CA3AF;flex-shrink:0;margin-top:3px"></i>
                  <p class="text-sm leading-relaxed" style="color:#1C1C1E">Equity and Access in Outbound Exchange Programs (2022)</p>
                </div>
                <div class="flex items-start gap-3">
                  <i data-lucide="file-text" style="width:14px;height:14px;color:#9CA3AF;flex-shrink:0;margin-top:3px"></i>
                  <p class="text-sm leading-relaxed" style="color:#1C1C1E">Digital Tools for International Student Onboarding (2021)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', function() {
  educationInitPage();
});
