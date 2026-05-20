// ── Projects Overview Page ────────────────────────────────────────────────────

function projectsOverviewInitPage() {
  const el = document.getElementById('page-projects-overview');
  if (!el) return;

  el.innerHTML = `
   <!-- ═══ PROJECTS HERO ═══ -->
   <div class="hero-editorial px-6 md:px-16 lg:px-24" style="min-height:88vh;padding-top:clamp(4rem,10vh,7rem);padding-bottom:100px">
    <div class="proj-hero-slide" style="background-image:url('./assets/images/aci/aci-12.JPEG')"></div>
    <div class="proj-hero-slide" style="background-image:url('./assets/images/aero/aero-5.jpg')"></div>
    <div class="proj-hero-slide" style="background-image:url('./assets/images/aci/aci-3.jpeg')"></div>
    <div class="proj-hero-slide" style="background-image:url('./assets/images/aero/aero-10.jpg')"></div>
    <div class="proj-hero-slide" style="background-image:url('./assets/images/student-services/tailor-made/ljmu-unair-2.JPEG')"></div>
    <div class="proj-hero-slide" style="background-image:url('./assets/images/student-services/tailor-made/staffordshire-unair-2.JPEG')"></div>
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
     <p style="font-size:.875rem;color:#4A4A4A;margin-top:8px;max-width:420px;animation:fadeUp .5s ease .2s both" data-edit-key="projects_hero_tagline_2">International education · Institutional design · Surabaya</p>
    </div>

    <div class="absolute bottom-0 left-0 right-0" style="background:rgba(250,250,248,0.9);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-top:1px solid rgba(28,28,30,0.07);z-index:10">
     <div class="max-w-6xl mx-auto px-6 md:px-16 lg:px-24">
      <div class="flex flex-wrap gap-0">
       <div style="padding:18px 32px 18px 0;border-right:1px solid rgba(28,28,30,0.07);margin-right:32px">
        <div class="font-heading font-bold" style="font-size:1.75rem;letter-spacing:-.025em;color:#1C1C1E;line-height:1">3</div>
        <div style="font-size:.62rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#767676;margin-top:4px">Flagship Programs</div>
       </div>
       <div style="padding:18px 32px 18px 0;border-right:1px solid rgba(28,28,30,0.07);margin-right:32px">
        <div class="font-heading font-bold" style="font-size:1.75rem;letter-spacing:-.025em;color:#1C1C1E;line-height:1">200+</div>
        <div style="font-size:.62rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#767676;margin-top:4px">Students Supported</div>
       </div>
       <div style="padding:18px 32px 18px 0;border-right:1px solid rgba(28,28,30,0.07);margin-right:32px">
        <div class="font-heading font-bold" style="font-size:1.75rem;letter-spacing:-.025em;color:#1C1C1E;line-height:1">IDR 290M</div>
        <div style="font-size:.62rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#767676;margin-top:4px">Budget Peak</div>
       </div>
       <div style="padding:18px 0">
        <div class="font-heading font-bold" style="font-size:1.75rem;letter-spacing:-.025em;color:#1C1C1E;line-height:1">50+</div>
        <div style="font-size:.62rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#767676;margin-top:4px">Stakeholders Engaged</div>
       </div>
      </div>
     </div>
    </div>
   </div>

   <div class="max-w-6xl mx-auto px-6 py-16">

    <div class="flex items-center gap-4 mb-10">
     <span style="font-size:.68rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:#8B7355">Featured Programs</span>
     <div style="flex:1;height:1px;background:rgba(28,28,30,0.08)"></div>
     <span style="font-size:.68rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#C0B8AE">Airlangga Global Engagement</span>
    </div>

    <!-- AMERTA -->
    <div class="cursor-pointer group" onclick="goToPage('amerta')" style="background:#fff;border:1px solid rgba(28,28,30,0.08);border-radius:20px;overflow:hidden;margin-bottom:20px;transition:all .3s;box-shadow:0 1px 3px rgba(28,28,30,0.04)" onmouseover="this.style.boxShadow='0 12px 48px rgba(28,28,30,0.1)';this.style.borderColor='rgba(139,115,85,0.25)'" onmouseout="this.style.boxShadow='0 1px 3px rgba(28,28,30,0.04)';this.style.borderColor='rgba(28,28,30,0.08)'">
     <div class="grid md:grid-cols-5" style="min-height:300px">
      <div class="md:col-span-2 relative overflow-hidden" style="min-height:220px">
       <img loading="lazy" src="assets/images/student-services/tailor-made/griffith-unair-2.JPEG" alt="AMERTA" class="absolute inset-0 w-full h-full object-cover" style="transition:transform .6s ease" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='scale(1)'">
       <div class="absolute inset-0" style="background:linear-gradient(160deg,rgba(10,30,65,0.78) 0%,rgba(30,80,140,0.52) 100%)"></div>
       <div class="absolute top-5 left-5" style="font-family:'Playfair Display',serif;font-size:4.5rem;font-weight:700;color:rgba(255,255,255,0.08);line-height:1;letter-spacing:-.04em;user-select:none">01</div>
       <div class="relative z-10 flex flex-col justify-end h-full px-8 pb-8" style="min-height:220px">
        <div style="font-size:.65rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,0.45);margin-bottom:8px">Semester Exchange · Since 2024</div>
        <div class="font-heading font-bold" style="font-size:2.4rem;color:#fff;letter-spacing:-.025em;line-height:1">AMERTA</div>
       </div>
      </div>
      <div class="md:col-span-3 p-9 flex flex-col justify-between">
       <div>
        <div class="flex items-center gap-3 mb-5">
         <span style="font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:4px 12px;border-radius:999px;background:rgba(74,107,138,0.1);color:#4A6B8A">Student Mobility</span>
         <span style="font-size:.68rem;color:#C0B8AE;letter-spacing:.04em">Flagship program</span>
        </div>
        <h3 class="font-heading font-bold" style="font-size:1.45rem;color:#1C1C1E;letter-spacing:-.015em;line-height:1.25;margin-bottom:14px">Airlangga Mobility, Exchange, Research &amp; Transfer Academic</h3>
        <p style="font-size:.875rem;color:#5C5C5C;line-height:1.7;margin-bottom:20px">Universitas Airlangga's flagship semester exchange — I managed end-to-end coordination: promotion, pre-departure preparation, arrival logistics, and post-program completion for 120+ inbound students per cohort with a budget of IDR 50–100M.</p>
        <div class="flex flex-wrap gap-1.5"><span class="tag">Student Mobility</span><span class="tag">Project Management</span><span class="tag">Leadership</span></div>
       </div>
       <div class="flex flex-wrap items-center gap-8 pt-6 mt-6" style="border-top:1px solid rgba(28,28,30,0.07)">
        <div>
         <div class="font-heading font-bold" style="font-size:1.25rem;color:#1C1C1E;letter-spacing:-.015em">120+</div>
         <div style="font-size:.7rem;color:#767676;margin-top:2px">Students / cohort</div>
        </div>
        <div>
         <div class="font-heading font-bold" style="font-size:1.25rem;color:#1C1C1E;letter-spacing:-.015em">IDR 50–100M</div>
         <div style="font-size:.7rem;color:#767676;margin-top:2px">Budget / program</div>
        </div>
        <div>
         <div class="font-heading font-bold" style="font-size:1.25rem;color:#1C1C1E;letter-spacing:-.015em">10+</div>
         <div style="font-size:.7rem;color:#767676;margin-top:2px">Stakeholders</div>
        </div>
        <div class="ml-auto flex items-center gap-2 font-medium text-sm" style="color:#8B7355">View Details <i data-lucide="arrow-right" style="width:15px;height:15px"></i></div>
       </div>
      </div>
     </div>
    </div>

    <!-- ACI + AERO -->
    <div class="grid md:grid-cols-2 gap-5 mb-20">

     <div class="cursor-pointer group" onclick="goToPage('aci')" style="background:#fff;border:1px solid rgba(28,28,30,0.08);border-radius:18px;overflow:hidden;transition:all .3s;box-shadow:0 1px 3px rgba(28,28,30,0.04)" onmouseover="this.style.boxShadow='0 10px 36px rgba(28,28,30,0.09)';this.style.borderColor='rgba(139,115,85,0.25)'" onmouseout="this.style.boxShadow='0 1px 3px rgba(28,28,30,0.04)';this.style.borderColor='rgba(28,28,30,0.08)'">
      <div class="relative overflow-hidden" style="height:170px">
       <img loading="lazy" src="assets/images/aci/aci-4.JPEG" alt="ACI" class="absolute inset-0 w-full h-full object-cover" style="transition:transform .5s ease" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='scale(1)'">
       <div class="absolute inset-0" style="background:linear-gradient(to top,rgba(55,62,38,0.9) 0%,rgba(55,62,38,0.25) 65%,transparent 100%)"></div>
       <div class="absolute top-4 left-5" style="font-family:'Playfair Display',serif;font-size:3.2rem;font-weight:700;color:rgba(255,255,255,0.07);line-height:1;letter-spacing:-.04em;user-select:none">02</div>
       <div class="absolute bottom-5 left-6 right-6 flex items-end justify-between">
        <div>
         <div style="font-size:.62rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:rgba(255,255,255,0.45);margin-bottom:4px">Cultural Immersion</div>
         <div class="font-heading font-bold text-3xl" style="color:#fff;letter-spacing:-.02em">ACI</div>
        </div>
        <span style="font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:3px 10px;border-radius:999px;background:rgba(255,255,255,0.12);color:rgba(255,255,255,0.7);border:1px solid rgba(255,255,255,0.12)">Student Support</span>
       </div>
      </div>
      <div class="p-6">
       <p style="font-size:.875rem;color:#5C5C5C;line-height:1.68;margin-bottom:16px">Bringing together international and local students through collaborative activities, site visits, and structured engagement throughout the semester.</p>
       <div class="flex flex-wrap gap-1.5 mb-5"><span class="tag">Cross-Cultural</span><span class="tag">Project Management</span></div>
       <div class="flex items-center justify-between pt-4" style="border-top:1px solid rgba(28,28,30,0.07)">
        <div>
         <span class="font-heading font-semibold" style="font-size:1rem;color:#1C1C1E">100+</span>
         <span style="font-size:.75rem;color:#767676;margin-left:4px">students / program</span>
        </div>
        <span class="flex items-center gap-1.5 text-sm font-medium" style="color:#8B7355">View <i data-lucide="arrow-right" style="width:14px;height:14px"></i></span>
       </div>
      </div>
     </div>

     <div class="cursor-pointer group" onclick="goToPage('aero')" style="background:#fff;border:1px solid rgba(28,28,30,0.08);border-radius:18px;overflow:hidden;transition:all .3s;box-shadow:0 1px 3px rgba(28,28,30,0.04)" onmouseover="this.style.boxShadow='0 10px 36px rgba(28,28,30,0.09)';this.style.borderColor='rgba(139,115,85,0.25)'" onmouseout="this.style.boxShadow='0 1px 3px rgba(28,28,30,0.04)';this.style.borderColor='rgba(28,28,30,0.08)'">
      <div class="relative overflow-hidden" style="height:170px">
       <img loading="lazy" src="assets/images/aero/aero-header-1.JPEG" alt="AERO" class="absolute inset-0 w-full h-full object-cover" style="transition:transform .5s ease" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='scale(1)'">
       <div class="absolute inset-0" style="background:linear-gradient(to top,rgba(20,20,22,0.9) 0%,rgba(20,20,22,0.25) 65%,transparent 100%)"></div>
       <div class="absolute top-4 left-5" style="font-family:'Playfair Display',serif;font-size:3.2rem;font-weight:700;color:rgba(255,255,255,0.07);line-height:1;letter-spacing:-.04em;user-select:none">03</div>
       <div class="absolute bottom-5 left-6 right-6 flex items-end justify-between">
        <div>
         <div style="font-size:.62rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:rgba(255,255,255,0.45);margin-bottom:4px">Annual Exhibition</div>
         <div class="font-heading font-bold text-3xl" style="color:#fff;letter-spacing:-.02em">AERO</div>
        </div>
        <span style="font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:3px 10px;border-radius:999px;background:rgba(255,255,255,0.12);color:rgba(255,255,255,0.7);border:1px solid rgba(255,255,255,0.12)">Int'l Partnership</span>
       </div>
      </div>
      <div class="p-6">
       <p style="font-size:.875rem;color:#5C5C5C;line-height:1.68;margin-bottom:16px">Annual exhibition at Universitas Airlangga showcasing global partnerships — coordinated logistics, vendor management, and event planning across 50+ stakeholders.</p>
       <div class="flex flex-wrap gap-1.5 mb-5"><span class="tag">Branding</span><span class="tag">Creative Direction</span></div>
       <div class="flex items-center justify-between pt-4" style="border-top:1px solid rgba(28,28,30,0.07)">
        <div>
         <span class="font-heading font-semibold" style="font-size:1rem;color:#1C1C1E">50+</span>
         <span style="font-size:.75rem;color:#767676;margin-left:4px">stakeholders coordinated</span>
        </div>
        <span class="flex items-center gap-1.5 text-sm font-medium" style="color:#8B7355">View <i data-lucide="arrow-right" style="width:14px;height:14px"></i></span>
       </div>
      </div>
     </div>

    </div>

    <!-- Digital Projects -->
    <div class="flex items-center gap-4 mb-10">
     <span style="font-size:.68rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:#003087">Digital Projects</span>
     <div style="flex:1;height:1px;background:rgba(28,28,30,0.08)"></div>
     <span style="font-size:.68rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#C0B8AE">Petra Christian University</span>
    </div>

    <div class="mb-10">
     <h2 class="font-heading font-bold" style="font-size:clamp(1.6rem,3.5vw,2.4rem);letter-spacing:-.02em;color:#1C1C1E;margin-bottom:10px">Digital Transformation</h2>
     <p style="font-size:.9375rem;color:#5C5C5C;line-height:1.65;max-width:560px">Rebuilding institutional web presence for higher education — from research and diagnosis through to full-stack delivery.</p>
    </div>

    <div class="grid md:grid-cols-2 gap-5">

     <!-- PCU Global -->
     <div class="cursor-pointer group" onclick="goToPage('pcu-global')" style="background:#fff;border:1px solid rgba(28,28,30,0.08);border-radius:20px;overflow:hidden;transition:all .3s;box-shadow:0 1px 3px rgba(28,28,30,0.04)" onmouseover="this.style.boxShadow='0 12px 48px rgba(28,28,30,0.1)';this.style.borderColor='rgba(0,48,135,0.2)'" onmouseout="this.style.boxShadow='0 1px 3px rgba(28,28,30,0.04)';this.style.borderColor='rgba(28,28,30,0.08)'">
      <div class="relative flex items-center justify-center overflow-hidden" style="background:linear-gradient(145deg,#002070,#1a4fa0);height:200px">
       <div class="absolute inset-0" style="background:radial-gradient(ellipse at 25% 40%,rgba(255,255,255,0.12),transparent 55%)"></div>
       <div class="absolute inset-0 flex items-center justify-center overflow-hidden">
        <span class="font-heading font-bold select-none" style="font-size:clamp(3.5rem,8vw,6rem);color:rgba(255,255,255,0.055);letter-spacing:-.03em;white-space:nowrap">PCU Global</span>
       </div>
       <div class="relative z-10 text-center px-8">
        <div style="font-size:.62rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,0.38);margin-bottom:10px">Web Application</div>
        <div class="font-heading font-bold" style="font-size:2.2rem;color:#fff;letter-spacing:-.025em;line-height:1.05">PCU Global</div>
        <div style="width:28px;height:2px;background:rgba(255,255,255,0.25);border-radius:2px;margin:14px auto 10px"></div>
        <div style="font-size:.65rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,0.45)">International Office</div>
       </div>
      </div>
      <div class="p-7 flex flex-col justify-between" style="min-height:200px">
       <div>
        <div class="flex items-center gap-3 mb-4">
         <span style="font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:4px 12px;border-radius:999px;background:rgba(0,48,135,0.08);color:#003087">Full-Stack</span>
         <span style="font-size:.68rem;color:#C0B8AE;letter-spacing:.04em">2026 · In progress</span>
        </div>
        <h3 class="font-heading font-bold" style="font-size:1.2rem;color:#1C1C1E;letter-spacing:-.015em;line-height:1.25;margin-bottom:10px">PCU Global — International Office Website</h3>
        <p style="font-size:.84rem;color:#5C5C5C;line-height:1.65;margin-bottom:16px">Rebuilding and rebranding PCU's International Office — full-stack delivery including news CMS, partnership directory, and mobile-first design.</p>
        <div class="flex flex-wrap gap-1.5"><span class="tag">Full-Stack Development</span><span class="tag">UI/UX Design</span><span class="tag">Digital Strategy</span></div>
       </div>
       <div class="flex items-center justify-between pt-5 mt-5" style="border-top:1px solid rgba(28,28,30,0.07)">
        <div style="font-size:.7rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:#767676">Petra Christian University</div>
        <span class="flex items-center gap-2 text-sm font-medium" style="color:#003087">View Details <i data-lucide="arrow-right" style="width:15px;height:15px"></i></span>
       </div>
      </div>
     </div>

     <!-- Graphic Design -->
     <div class="cursor-pointer group" onclick="goToPage('designs')" style="background:#fff;border:1px solid rgba(28,28,30,0.08);border-radius:20px;overflow:hidden;transition:all .3s;box-shadow:0 1px 3px rgba(28,28,30,0.04)" onmouseover="this.style.boxShadow='0 12px 48px rgba(28,28,30,0.1)';this.style.borderColor='rgba(139,115,85,0.3)'" onmouseout="this.style.boxShadow='0 1px 3px rgba(28,28,30,0.04)';this.style.borderColor='rgba(28,28,30,0.08)'">
      <div class="relative overflow-hidden" style="height:200px;background:#1C1C1E">
       <div class="absolute inset-0 grid grid-cols-3" aria-hidden="true" style="gap:2px;opacity:0.82">
        <img src="assets/images/graphic-designs/aero-2025-unair/1.png" alt="" loading="lazy" class="w-full h-full object-cover" style="transition:transform .5s ease" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
        <img src="assets/images/graphic-designs/booklet-aci-2025-b2-unair/1.png" alt="" loading="lazy" class="w-full h-full object-cover" style="transition:transform .5s ease" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
        <img src="assets/images/graphic-designs/partnership-booklet-pcu/1.png" alt="" loading="lazy" class="w-full h-full object-cover" style="transition:transform .5s ease" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
       </div>
       <div class="absolute inset-0" style="background:linear-gradient(to top,rgba(28,28,30,0.88) 0%,rgba(28,28,30,0.3) 55%,rgba(28,28,30,0.1) 100%)"></div>
       <div class="absolute top-4 left-5" style="font-family:'Playfair Display',serif;font-size:3.2rem;font-weight:700;color:rgba(255,255,255,0.07);line-height:1;letter-spacing:-.04em;user-select:none">GD</div>
       <div class="absolute bottom-5 left-6 right-6 flex items-end justify-between">
        <div>
         <div style="font-size:.62rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:rgba(255,255,255,0.45);margin-bottom:4px">Print &amp; Digital</div>
         <div class="font-heading font-bold" style="font-size:1.6rem;color:#fff;letter-spacing:-.02em;line-height:1">Graphic Design</div>
        </div>
        <span style="font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:3px 10px;border-radius:999px;background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.65);border:1px solid rgba(255,255,255,0.1)">7 Projects</span>
       </div>
      </div>
      <div class="p-7 flex flex-col justify-between" style="min-height:200px">
       <div>
        <div class="flex items-center gap-3 mb-4">
         <span style="font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:4px 12px;border-radius:999px;background:rgba(139,115,85,0.08);color:#8B7355">Editorial Design</span>
         <span style="font-size:.68rem;color:#C0B8AE;letter-spacing:.04em">2024–2025</span>
        </div>
        <h3 class="font-heading font-bold" style="font-size:1.2rem;color:#1C1C1E;letter-spacing:-.015em;line-height:1.25;margin-bottom:10px">Guidebooks, Booklets &amp; Event Collateral</h3>
        <p style="font-size:.84rem;color:#5C5C5C;line-height:1.65;margin-bottom:16px">Print and digital design for institutional programs — from student guidebooks and orientation booklets to exhibition collateral and partnership materials.</p>
        <div class="flex flex-wrap gap-1.5"><span class="tag">Print Design</span><span class="tag">Branding</span><span class="tag">Editorial Layout</span></div>
       </div>
       <div class="flex items-center justify-between pt-5 mt-5" style="border-top:1px solid rgba(28,28,30,0.07)">
        <div style="font-size:.7rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:#767676">Airlangga &amp; PCU</div>
        <span class="flex items-center gap-2 text-sm font-medium" style="color:#8B7355">View Work <i data-lucide="arrow-right" style="width:15px;height:15px"></i></span>
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
