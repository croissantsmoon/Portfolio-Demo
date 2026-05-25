// ── Projects Overview Page ────────────────────────────────────────────────────

function _livePreviewPanel(url, height, displayUrl) {
  const iframeH = Math.round(height / 0.333);
  return `
    <div style="position:relative;overflow:hidden;height:${height}px;background:#0a0a14;flex-shrink:0">
      <iframe
        src="${url}"
        style="position:absolute;top:0;left:0;width:300%;height:${iframeH}px;transform:scale(0.333);transform-origin:top left;border:none;pointer-events:none"
        loading="lazy"
        sandbox="allow-scripts allow-same-origin"
        aria-hidden="true"
        title="${displayUrl} homepage preview"
      ></iframe>
      <div style="position:absolute;top:0;left:0;right:0;z-index:2;background:rgba(0,0,0,0.58);padding:9px 14px;display:flex;align-items:center;gap:8px">
        <div style="display:flex;gap:5px;flex-shrink:0">
          <span style="width:10px;height:10px;border-radius:50%;background:#FF5F57;display:inline-block"></span>
          <span style="width:10px;height:10px;border-radius:50%;background:#FFBD2E;display:inline-block"></span>
          <span style="width:10px;height:10px;border-radius:50%;background:#28CA41;display:inline-block"></span>
        </div>
        <div style="flex:1;background:rgba(255,255,255,0.07);border-radius:6px;padding:3px 10px;font-size:.6rem;color:rgba(255,255,255,0.42);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">
          ${displayUrl}
        </div>
      </div>
      <div style="position:absolute;inset:0;background:linear-gradient(to right,transparent 72%,rgba(255,255,255,0.04) 100%);pointer-events:none;z-index:1"></div>
    </div>`;
}

function projectsOverviewInitPage() {
  const el = document.getElementById('page-projects-overview');
  if (!el) return;

  el.innerHTML = `
   <!-- ═══ PROJECTS HERO ═══ -->
   <div class="hero-editorial px-6 md:px-16 lg:px-24" style="min-height:88vh;padding-top:clamp(4rem,10vh,7rem);padding-bottom:100px">
    <div class="proj-hero-slide" style="background-image:url('https://picsum.photos/seed/connect-thumb/600/400')"></div>
    <div class="proj-hero-slide" style="background-image:url('https://picsum.photos/seed/horizon-thumb/600/400')"></div>
    <div class="proj-hero-slide" style="background-image:url('https://picsum.photos/seed/nexus-thumb/600/400')"></div>
    <div class="proj-hero-slide" style="background-image:url('https://picsum.photos/seed/ngu-web-thumb/600/400')"></div>
    <div class="proj-hero-slide" style="background-image:url('https://picsum.photos/seed/connect-3/600/400')"></div>
    <div class="proj-hero-slide" style="background-image:url('https://picsum.photos/seed/horizon-5/600/400')"></div>
    <div class="hero-slide-overlay"></div>
    <div class="absolute inset-0 pointer-events-none" style="background:radial-gradient(ellipse at 75% 25%,rgba(139,115,85,0.07),transparent 55%),radial-gradient(ellipse at 5% 90%,rgba(74,107,138,0.05),transparent 50%)"></div>

    <div class="max-w-6xl mx-auto relative z-10 h-full flex flex-col justify-center" style="min-height:calc(88vh - 200px)">
     <div class="flex items-center gap-2.5 mb-10" style="animation:fadeUp .4s ease both">
      <span style="font-size:.67rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:rgba(28,28,30,0.38)">Portfolio</span>
      <span style="color:rgba(28,28,30,0.18);font-size:.65rem">·</span>
      <span style="font-size:.67rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:rgba(28,28,30,0.38)">Projects</span>
     </div>
     <div style="animation:fadeUp .5s ease .06s both">
      <h1 class="font-heading font-bold" style="font-size:clamp(3rem,7.5vw,6rem);line-height:1.0;letter-spacing:-.03em;color:#1C1C1E;margin-bottom:0" data-edit-key="projects_hero_title_1">Projects</h1>
      <h1 class="font-heading font-bold" style="font-size:clamp(3rem,7.5vw,6rem);line-height:1.0;letter-spacing:-.03em;color:#1C1C1E;margin-bottom:0" data-edit-key="projects_hero_title_2"><em style="font-style:italic;color:#8B7355">Overview</em></h1>
     </div>
     <div style="width:48px;height:2px;background:#8B7355;border-radius:2px;margin:28px 0;animation:fadeUp .5s ease .12s both"></div>
     <p class="font-editorial" style="font-size:clamp(1rem,2vw,1.2rem);color:#1C1C1E;line-height:1.5;max-width:420px;margin-bottom:0;animation:fadeUp .5s ease .16s both" data-edit-key="projects_hero_tagline_1">Programs managed end-to-end, digital products built from scratch.</p>
     <p style="font-size:.875rem;color:#4A4A4A;margin-top:8px;max-width:420px;animation:fadeUp .5s ease .2s both" data-edit-key="projects_hero_tagline_2">International education · Institutional design · Portland, OR</p>
    </div>

    <div class="absolute bottom-0 left-0 right-0" style="background:rgba(250,250,248,0.9);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-top:1px solid rgba(28,28,30,0.07);z-index:10">
     <div class="max-w-6xl mx-auto px-6 md:px-16 lg:px-24">
      <div class="proj-stats-bar">
       <div class="proj-stats-item">
        <div class="font-heading font-bold proj-stats-number">4</div>
        <div style="font-size:.62rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#767676;margin-top:4px">Flagship Programs</div>
       </div>
       <div class="proj-stats-item">
        <div class="font-heading font-bold proj-stats-number">400+</div>
        <div style="font-size:.62rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#767676;margin-top:4px">Students Supported</div>
       </div>
       <div class="proj-stats-item">
        <div class="font-heading font-bold proj-stats-number">$45K</div>
        <div style="font-size:.62rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#767676;margin-top:4px">Budget Peak</div>
       </div>
       <div class="proj-stats-item">
        <div class="font-heading font-bold proj-stats-number">15+</div>
        <div style="font-size:.62rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#767676;margin-top:4px">Countries Reached</div>
       </div>
      </div>
     </div>
    </div>
   </div>

   <div class="max-w-6xl mx-auto px-6 py-16">

    <!-- ── Featured Programs ─────────────────────────────────────────── -->
    <div class="flex items-center gap-4 mb-10">
     <span style="font-size:.68rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:#8B7355">Featured Programs</span>
     <div style="flex:1;height:1px;background:rgba(28,28,30,0.08)"></div>
     <span style="font-size:.68rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#C0B8AE">Northgate University International Programs</span>
    </div>

    <!-- NEXUS -->
    <div class="cursor-pointer group" onclick="goToPage('amerta')" style="background:#fff;border:1px solid rgba(28,28,30,0.08);border-radius:20px;overflow:hidden;margin-bottom:20px;transition:all .3s;box-shadow:0 1px 3px rgba(28,28,30,0.04)" onmouseover="this.style.boxShadow='0 12px 48px rgba(28,28,30,0.1)';this.style.borderColor='rgba(139,115,85,0.25)'" onmouseout="this.style.boxShadow='0 1px 3px rgba(28,28,30,0.04)';this.style.borderColor='rgba(28,28,30,0.08)'">
     <div class="grid md:grid-cols-5" style="min-height:300px">
      <div class="md:col-span-2 relative overflow-hidden" style="min-height:220px">
       <img loading="lazy" src="https://picsum.photos/seed/nexus-thumb/600/400" alt="NEXUS" class="absolute inset-0 w-full h-full object-cover" style="transition:transform .6s ease" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='scale(1)'">
       <div class="absolute inset-0" style="background:linear-gradient(160deg,rgba(10,30,65,0.78) 0%,rgba(30,80,140,0.52) 100%)"></div>
       <div class="absolute top-5 left-5" style="font-family:'Playfair Display',serif;font-size:4.5rem;font-weight:700;color:rgba(255,255,255,0.08);line-height:1;letter-spacing:-.04em;user-select:none">01</div>
       <div class="relative z-10 flex flex-col justify-end h-full px-8 pb-8" style="min-height:220px">
        <div style="font-size:.65rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,0.45);margin-bottom:8px">Semester Exchange · Since 2022</div>
        <div class="font-heading font-bold" style="font-size:2.4rem;color:#fff;letter-spacing:-.025em;line-height:1">NEXUS</div>
       </div>
      </div>
      <div class="md:col-span-3 p-9 flex flex-col justify-between">
       <div>
        <div class="flex items-center gap-3 mb-5">
         <span style="font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:4px 12px;border-radius:999px;background:rgba(74,107,138,0.1);color:#4A6B8A">Student Mobility</span>
         <span style="font-size:.68rem;color:#C0B8AE;letter-spacing:.04em">Flagship program</span>
        </div>
        <h3 class="font-heading font-bold" style="font-size:1.45rem;color:#1C1C1E;letter-spacing:-.015em;line-height:1.25;margin-bottom:14px">NEXUS Exchange Program — Northgate University</h3>
        <p style="font-size:.875rem;color:#5C5C5C;line-height:1.7;margin-bottom:20px">Northgate University's flagship semester exchange — I managed end-to-end coordination: promotion, pre-departure preparation, arrival logistics, and post-program completion for 120+ inbound students per cohort across 15+ partner universities globally.</p>
        <div class="flex flex-wrap gap-1.5"><span class="tag">Student Mobility</span><span class="tag">Project Management</span><span class="tag">Leadership</span></div>
       </div>
       <div class="flex flex-wrap items-center gap-8 pt-6 mt-6" style="border-top:1px solid rgba(28,28,30,0.07)">
        <div><div class="font-heading font-bold" style="font-size:1.25rem;color:#1C1C1E;letter-spacing:-.015em">120+</div><div style="font-size:.7rem;color:#767676;margin-top:2px">Students / cohort</div></div>
        <div><div class="font-heading font-bold" style="font-size:1.25rem;color:#1C1C1E;letter-spacing:-.015em">$30K–$50K</div><div style="font-size:.7rem;color:#767676;margin-top:2px">Budget / program</div></div>
        <div><div class="font-heading font-bold" style="font-size:1.25rem;color:#1C1C1E;letter-spacing:-.015em">15+</div><div style="font-size:.7rem;color:#767676;margin-top:2px">Partner universities</div></div>
        <div class="ml-auto flex items-center gap-2 font-medium text-sm" style="color:#8B7355">View Details <i data-lucide="arrow-right" style="width:15px;height:15px"></i></div>
       </div>
      </div>
     </div>
    </div>

    <!-- CONNECT + HORIZON -->
    <div class="grid md:grid-cols-2 gap-5 mb-20">
     <div class="cursor-pointer group" onclick="goToPage('aci')" style="background:#fff;border:1px solid rgba(28,28,30,0.08);border-radius:18px;overflow:hidden;transition:all .3s;box-shadow:0 1px 3px rgba(28,28,30,0.04)" onmouseover="this.style.boxShadow='0 10px 36px rgba(28,28,30,0.09)';this.style.borderColor='rgba(139,115,85,0.25)'" onmouseout="this.style.boxShadow='0 1px 3px rgba(28,28,30,0.04)';this.style.borderColor='rgba(28,28,30,0.08)'">
      <div class="relative overflow-hidden" style="height:170px">
       <img loading="lazy" src="https://picsum.photos/seed/connect-thumb/600/400" alt="CONNECT" class="absolute inset-0 w-full h-full object-cover" style="transition:transform .5s ease" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='scale(1)'">
       <div class="absolute inset-0" style="background:linear-gradient(to top,rgba(55,62,38,0.9) 0%,rgba(55,62,38,0.25) 65%,transparent 100%)"></div>
       <div class="absolute top-4 left-5" style="font-family:'Playfair Display',serif;font-size:3.2rem;font-weight:700;color:rgba(255,255,255,0.07);line-height:1;letter-spacing:-.04em;user-select:none">02</div>
       <div class="absolute bottom-5 left-6 right-6 flex items-end justify-between">
        <div><div style="font-size:.62rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:rgba(255,255,255,0.45);margin-bottom:4px">Cultural Immersion</div><div class="font-heading font-bold text-3xl" style="color:#fff;letter-spacing:-.02em">CONNECT</div></div>
        <span style="font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:3px 10px;border-radius:999px;background:rgba(255,255,255,0.12);color:rgba(255,255,255,0.7);border:1px solid rgba(255,255,255,0.12)">Student Support</span>
       </div>
      </div>
      <div class="p-6">
       <p style="font-size:.875rem;color:#5C5C5C;line-height:1.68;margin-bottom:16px">Building cross-cultural understanding through 14-day immersive experiences in Portland, Seattle, and Vancouver — 3 batches, 156 participants from 8 countries, 95% satisfaction rate.</p>
       <div class="flex flex-wrap gap-1.5 mb-5"><span class="tag">Cross-Cultural</span><span class="tag">Project Management</span></div>
       <div class="flex items-center justify-between pt-4" style="border-top:1px solid rgba(28,28,30,0.07)">
        <div><span class="font-heading font-semibold" style="font-size:1rem;color:#1C1C1E">52</span><span style="font-size:.75rem;color:#767676;margin-left:4px">students / program</span></div>
        <span class="flex items-center gap-1.5 text-sm font-medium" style="color:#8B7355">View <i data-lucide="arrow-right" style="width:14px;height:14px"></i></span>
       </div>
      </div>
     </div>

     <div class="cursor-pointer group" onclick="goToPage('aero')" style="background:#fff;border:1px solid rgba(28,28,30,0.08);border-radius:18px;overflow:hidden;transition:all .3s;box-shadow:0 1px 3px rgba(28,28,30,0.04)" onmouseover="this.style.boxShadow='0 10px 36px rgba(28,28,30,0.09)';this.style.borderColor='rgba(139,115,85,0.25)'" onmouseout="this.style.boxShadow='0 1px 3px rgba(28,28,30,0.04)';this.style.borderColor='rgba(28,28,30,0.08)'">
      <div class="relative overflow-hidden" style="height:170px">
       <img loading="lazy" src="https://picsum.photos/seed/horizon-thumb/600/400" alt="HORIZON" class="absolute inset-0 w-full h-full object-cover" style="transition:transform .5s ease" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='scale(1)'">
       <div class="absolute inset-0" style="background:linear-gradient(to top,rgba(20,20,22,0.9) 0%,rgba(20,20,22,0.25) 65%,transparent 100%)"></div>
       <div class="absolute top-4 left-5" style="font-family:'Playfair Display',serif;font-size:3.2rem;font-weight:700;color:rgba(255,255,255,0.07);line-height:1;letter-spacing:-.04em;user-select:none">03</div>
       <div class="absolute bottom-5 left-6 right-6 flex items-end justify-between">
        <div><div style="font-size:.62rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:rgba(255,255,255,0.45);margin-bottom:4px">Annual Exhibition</div><div class="font-heading font-bold text-3xl" style="color:#fff;letter-spacing:-.02em">HORIZON</div></div>
        <span style="font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:3px 10px;border-radius:999px;background:rgba(255,255,255,0.12);color:rgba(255,255,255,0.7);border:1px solid rgba(255,255,255,0.12)">Int'l Partnership</span>
       </div>
      </div>
      <div class="p-6">
       <p style="font-size:.875rem;color:#5C5C5C;line-height:1.68;margin-bottom:16px">Annual international student showcase at Northgate University — 3 editions (2022–2024), 80–120 exhibitors from 15+ countries, 600–900 visitors per edition, 3 internship placements secured.</p>
       <div class="flex flex-wrap gap-1.5 mb-5"><span class="tag">Event Management</span><span class="tag">International Partnership</span></div>
       <div class="flex items-center justify-between pt-4" style="border-top:1px solid rgba(28,28,30,0.07)">
        <div><span class="font-heading font-semibold" style="font-size:1rem;color:#1C1C1E">800+</span><span style="font-size:.75rem;color:#767676;margin-left:4px">visitors per edition</span></div>
        <span class="flex items-center gap-1.5 text-sm font-medium" style="color:#8B7355">View <i data-lucide="arrow-right" style="width:14px;height:14px"></i></span>
       </div>
      </div>
     </div>
    </div>

    <!-- NGU Global Website — compact horizontal card -->
    <div class="cursor-pointer" onclick="goToPage('designs')" style="background:#fff;border:1px solid rgba(28,28,30,0.08);border-radius:18px;overflow:hidden;margin-bottom:20px;transition:all .3s;box-shadow:0 1px 3px rgba(28,28,30,0.04)" onmouseover="this.style.boxShadow='0 10px 36px rgba(28,28,30,0.09)';this.style.borderColor='rgba(139,115,85,0.25)'" onmouseout="this.style.boxShadow='0 1px 3px rgba(28,28,30,0.04)';this.style.borderColor='rgba(28,28,30,0.08)'">
     <div class="grid md:grid-cols-5" style="min-height:160px">
      <div class="md:col-span-3 p-7 flex flex-col justify-center">
       <div class="flex items-center gap-3 mb-3">
        <span style="font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:4px 12px;border-radius:999px;background:rgba(139,115,85,0.08);color:#8B7355">Editorial Design</span>
        <span style="font-size:.68rem;color:#C0B8AE;letter-spacing:.04em">2022–2025</span>
       </div>
       <h3 class="font-heading font-bold" style="font-size:1.2rem;color:#1C1C1E;letter-spacing:-.015em;line-height:1.25;margin-bottom:8px">Program Guidebooks, Booklets &amp; Event Collateral</h3>
       <p style="font-size:.84rem;color:#5C5C5C;line-height:1.6;margin-bottom:14px;max-width:480px">Print and digital design for Northgate University international programs — student guidebooks, orientation booklets, HORIZON exhibition collateral, and CONNECT welcome materials.</p>
       <div class="flex flex-wrap gap-1.5 mb-0"><span class="tag">Print Design</span><span class="tag">Branding</span><span class="tag">Editorial Layout</span></div>
      </div>
      <div class="md:col-span-2 relative overflow-hidden" style="min-height:160px;background:#1C1C1E">
       <div class="absolute inset-0 grid grid-cols-3" aria-hidden="true" style="gap:2px;opacity:0.84">
        <img src="https://picsum.photos/seed/ngu-web-thumb/600/400" alt="" loading="lazy" class="w-full h-full object-cover">
        <img src="https://picsum.photos/seed/horizon-thumb/600/400" alt="" loading="lazy" class="w-full h-full object-cover">
        <img src="https://picsum.photos/seed/connect-thumb/600/400" alt="" loading="lazy" class="w-full h-full object-cover">
       </div>
       <div class="absolute inset-0" style="background:linear-gradient(to right,rgba(255,255,255,0.03) 0%,transparent 40%)"></div>
       <div class="absolute bottom-4 right-5 flex items-center gap-2 font-medium text-sm" style="color:rgba(255,255,255,0.7)">Browse Design Work <i data-lucide="arrow-right" style="width:14px;height:14px"></i></div>
      </div>
     </div>
    </div>

    <!-- ── Web Development ───────────────────────────────────────────── -->
    <div style="height:1px;background:rgba(28,28,30,0.07);margin:28px 0 48px"></div>

    <div class="flex items-center gap-4 mb-10">
     <span style="font-size:.68rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:#8B7355">Web Development</span>
     <div style="flex:1;height:1px;background:rgba(28,28,30,0.08)"></div>
     <span style="font-size:.68rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#C0B8AE">CroissantsMoon Studio</span>
    </div>

    <div class="mb-10">
     <h2 class="font-heading font-bold" style="font-size:clamp(1.6rem,3.5vw,2.4rem);letter-spacing:-.02em;color:#1C1C1E;margin-bottom:10px">Web Projects</h2>
     <p style="font-size:.9375rem;color:#5C5C5C;line-height:1.65;max-width:560px">Responsive web applications and dashboards — from personal portfolio SPAs to institutional data tools.</p>
    </div>

    <div class="grid md:grid-cols-2 gap-5 mb-5">

     <!-- NGU Global International Office — iframe preview -->
     <div class="cursor-pointer group" onclick="goToPage('web-pcu-global-intl')" style="background:#fff;border:1px solid rgba(28,28,30,0.08);border-radius:20px;overflow:hidden;transition:all .3s;box-shadow:0 1px 3px rgba(28,28,30,0.04)" onmouseover="this.style.boxShadow='0 12px 48px rgba(0,48,135,0.1)';this.style.borderColor='rgba(0,48,135,0.2)'" onmouseout="this.style.boxShadow='0 1px 3px rgba(28,28,30,0.04)';this.style.borderColor='rgba(28,28,30,0.08)'">
      <div class="relative overflow-hidden" style="height:200px">
       ${_livePreviewPanel('https://international-office-website.vercel.app/', 200, 'international-office-website.vercel.app')}
      </div>
      <div class="p-7 flex flex-col justify-between" style="min-height:180px">
       <div>
        <div class="flex items-center gap-3 mb-4">
         <span style="font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:4px 12px;border-radius:999px;background:rgba(0,48,135,0.08);color:#003087">Full-Stack</span>
         <span style="font-size:.68rem;color:#C0B8AE;letter-spacing:.04em">In Progress</span>
        </div>
        <h3 class="font-heading font-bold" style="font-size:1.2rem;color:#1C1C1E;letter-spacing:-.015em;line-height:1.25;margin-bottom:10px">NGU Global — International Office Website</h3>
        <p style="font-size:.84rem;color:#5C5C5C;line-height:1.65;margin-bottom:16px">Rebuilding Northgate University's International Office website — news CMS, partnership directory, audience-first information architecture, and mobile-first design.</p>
        <div class="flex flex-wrap gap-1.5"><span class="tag">HTML / CSS</span><span class="tag">JavaScript</span><span class="tag">Flask</span><span class="tag">SQLite</span></div>
       </div>
       <div class="flex items-center justify-end pt-5 mt-5" style="border-top:1px solid rgba(28,28,30,0.07)">
        <span class="flex items-center gap-2 text-sm font-medium" style="color:#003087">View Web Case Study <i data-lucide="arrow-right" style="width:15px;height:15px"></i></span>
       </div>
      </div>
     </div>

     <!-- Website Portfolio -->
     <div class="cursor-pointer group" onclick="goToPage('web-portfolio')" style="background:#fff;border:1px solid rgba(28,28,30,0.08);border-radius:20px;overflow:hidden;transition:all .3s;box-shadow:0 1px 3px rgba(28,28,30,0.04)" onmouseover="this.style.boxShadow='0 12px 48px rgba(28,28,30,0.1)';this.style.borderColor='rgba(201,168,76,0.25)'" onmouseout="this.style.boxShadow='0 1px 3px rgba(28,28,30,0.04)';this.style.borderColor='rgba(28,28,30,0.08)'">
      <div class="relative overflow-hidden" style="height:200px">
       ${_livePreviewPanel('https://website-portfolio-liard-alpha.vercel.app/', 200, 'website-portfolio-liard-alpha.vercel.app')}
      </div>
      <div class="p-7 flex flex-col justify-between" style="min-height:180px">
       <div>
        <div class="flex items-center gap-3 mb-4">
         <span style="font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:4px 12px;border-radius:999px;background:rgba(201,168,76,0.08);color:#8B7355">Full-Stack</span>
         <span style="font-size:.68rem;color:#C0B8AE;letter-spacing:.04em">Live</span>
        </div>
        <h3 class="font-heading font-bold" style="font-size:1.2rem;color:#1C1C1E;letter-spacing:-.015em;line-height:1.25;margin-bottom:10px">This Portfolio Site</h3>
        <p style="font-size:.84rem;color:#5C5C5C;line-height:1.65;margin-bottom:16px">Dual-identity SPA with hash-based routing, iOS-style navigation shell, Supabase inline editing, and 20+ pages — no framework.</p>
        <div class="flex flex-wrap gap-1.5"><span class="tag">HTML / CSS</span><span class="tag">JavaScript</span><span class="tag">Tailwind CSS</span><span class="tag">Supabase</span></div>
       </div>
       <div class="flex items-center justify-end pt-5 mt-5" style="border-top:1px solid rgba(28,28,30,0.07)">
        <span class="flex items-center gap-2 text-sm font-medium" style="color:#8B7355">View Details <i data-lucide="arrow-right" style="width:15px;height:15px"></i></span>
       </div>
      </div>
     </div>

    </div>

    <div class="grid md:grid-cols-2 gap-5 mb-16">

     <!-- Dashboard Partnership -->
     <div class="cursor-pointer group" onclick="goToPage('web-dashboard-partnership')" style="background:#fff;border:1px solid rgba(28,28,30,0.08);border-radius:20px;overflow:hidden;transition:all .3s;box-shadow:0 1px 3px rgba(28,28,30,0.04)" onmouseover="this.style.boxShadow='0 12px 48px rgba(28,28,30,0.1)';this.style.borderColor='rgba(45,107,80,0.25)'" onmouseout="this.style.boxShadow='0 1px 3px rgba(28,28,30,0.04)';this.style.borderColor='rgba(28,28,30,0.08)'">
      <div class="relative overflow-hidden" style="height:160px">
       ${_livePreviewPanel('https://dashboard-partnership.vercel.app/', 160, 'dashboard-partnership.vercel.app')}
      </div>
      <div class="p-7 flex flex-col justify-between" style="min-height:160px">
       <div>
        <div class="flex items-center gap-3 mb-4">
         <span style="font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:4px 12px;border-radius:999px;background:rgba(45,107,80,0.08);color:#2D6B50">Data Viz</span>
         <span style="font-size:.68rem;color:#C0B8AE;letter-spacing:.04em">Live · 2025</span>
        </div>
        <h3 class="font-heading font-bold" style="font-size:1.2rem;color:#1C1C1E;letter-spacing:-.015em;line-height:1.25;margin-bottom:10px">Dashboard Partnership</h3>
        <p style="font-size:.84rem;color:#5C5C5C;line-height:1.65;margin-bottom:16px">Interactive dashboard for international partnership networks — geographic breakdown, agreement status tracking, and compound filters across 30+ partners.</p>
        <div class="flex flex-wrap gap-1.5"><span class="tag">JavaScript</span><span class="tag">Chart.js</span><span class="tag">Tailwind CSS</span></div>
       </div>
       <div class="flex items-center justify-end pt-5 mt-5" style="border-top:1px solid rgba(28,28,30,0.07)">
        <span class="flex items-center gap-2 text-sm font-medium" style="color:#2D6B50">View Details <i data-lucide="arrow-right" style="width:15px;height:15px"></i></span>
       </div>
      </div>
     </div>

     <!-- Dashboard International Grants -->
     <div class="cursor-pointer group" onclick="goToPage('web-dashboard-grants')" style="background:#fff;border:1px solid rgba(28,28,30,0.08);border-radius:20px;overflow:hidden;transition:all .3s;box-shadow:0 1px 3px rgba(28,28,30,0.04)" onmouseover="this.style.boxShadow='0 12px 48px rgba(28,28,30,0.1)';this.style.borderColor='rgba(90,60,140,0.2)'" onmouseout="this.style.boxShadow='0 1px 3px rgba(28,28,30,0.04)';this.style.borderColor='rgba(28,28,30,0.08)'">
      <div class="relative overflow-hidden" style="height:160px">
       ${_livePreviewPanel('https://dashboard-international-grants.vercel.app/', 160, 'dashboard-international-grants.vercel.app')}
      </div>
      <div class="p-7 flex flex-col justify-between" style="min-height:160px">
       <div>
        <div class="flex items-center gap-3 mb-4">
         <span style="font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:4px 12px;border-radius:999px;background:rgba(92,58,138,0.08);color:#5C3A8A">Data Viz</span>
         <span style="font-size:.68rem;color:#C0B8AE;letter-spacing:.04em">Live · 2025</span>
        </div>
        <h3 class="font-heading font-bold" style="font-size:1.2rem;color:#1C1C1E;letter-spacing:-.015em;line-height:1.25;margin-bottom:10px">Dashboard International Grants</h3>
        <p style="font-size:.84rem;color:#5C5C5C;line-height:1.65;margin-bottom:16px">Centralised grant tracking from application through to outcome — deadline timeline, stage-based pipeline view, and outcome analytics for leadership reporting.</p>
        <div class="flex flex-wrap gap-1.5"><span class="tag">JavaScript</span><span class="tag">Chart.js</span><span class="tag">Tailwind CSS</span></div>
       </div>
       <div class="flex items-center justify-end pt-5 mt-5" style="border-top:1px solid rgba(28,28,30,0.07)">
        <span class="flex items-center gap-2 text-sm font-medium" style="color:#5C3A8A">View Details <i data-lucide="arrow-right" style="width:15px;height:15px"></i></span>
       </div>
      </div>
     </div>

    </div>

   </div>
  `;

  if (window.lucide) lucide.createIcons();
  projectsOverviewInitSlideshow();
}

function projectsOverviewInitSlideshow() {
  const slides = Array.from(document.querySelectorAll('.proj-hero-slide'));
  if (!slides.length) return;
  let current = 0;
  slides[current].classList.add('active');
  setInterval(function () {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 5000);
}

document.addEventListener('DOMContentLoaded', function () {
  projectsOverviewInitPage();
});
