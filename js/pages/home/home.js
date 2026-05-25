function homeInitPage() {
  var el = document.getElementById('page-home');
  if (!el) return;
  el.innerHTML = `

     <!-- ═══ iOS LOCK SCREEN HERO ═══ -->
     <div class="hero-editorial px-5" style="min-height:min(88vh,720px);padding-top:clamp(2.5rem,7vh,5rem);padding-bottom:clamp(2rem,5vh,4rem)">
      <!-- Slideshow background — decorative, hidden from assistive tech -->
      <div class="hero-slide" aria-hidden="true" style="background-image:url('./assets/images/aci/aci-4.JPEG')"></div>
      <div class="hero-slide" aria-hidden="true" style="background-image:url('./assets/images/aero/aero-1.jpg')"></div>
      <div class="hero-slide" aria-hidden="true" style="background-image:url('./assets/images/student-services/tailor-made/griffith-unair-3.JPEG')"></div>
      <div class="hero-slide" aria-hidden="true" style="background-image:url('./assets/images/student-services/tailor-made/ljmu-unair-2.JPEG')"></div>
      <div class="hero-slide" aria-hidden="true" style="background-image:url('./assets/images/self-portrait/profile-15.JPG')"></div>
      <div class="hero-slide-overlay" aria-hidden="true"></div>
      <!-- Background gradients — decorative, hidden from assistive tech -->
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true" style="background:radial-gradient(ellipse at 70% 30%,rgba(139,115,85,0.09),transparent 55%),radial-gradient(ellipse at 10% 85%,rgba(74,107,138,0.05),transparent 50%)"></div>
      <!-- Giant watermark letter — decorative -->
      <div class="absolute right-0 top-0 h-full hidden lg:flex items-center pointer-events-none" aria-hidden="true" style="width:42%;overflow:hidden;max-width:min(42%,560px)">
       <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:clamp(16rem,22vw,30rem);font-weight:800;font-style:italic;color:rgba(28,28,30,0.028);line-height:1;user-select:none;transform:translateY(-4%);display:block;overflow:hidden">Z</span>
      </div>
      <!-- Geometric ring accents — decorative -->
      <div class="absolute hidden lg:block pointer-events-none" aria-hidden="true" style="right:15%;top:15%;width:220px;height:220px;border-radius:50%;border:1px solid rgba(139,115,85,0.11)"></div>
      <div class="absolute hidden lg:block pointer-events-none" aria-hidden="true" style="right:18%;top:22%;width:110px;height:110px;border-radius:50%;border:1px solid rgba(139,115,85,0.07)"></div>

      <div class="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-16">

       <!-- iOS circular avatar with ring accent -->
       <div class="flex-shrink-0" style="animation:springIn .6s cubic-bezier(0.34,1.56,0.64,1) both">
        <div class="relative mx-auto md:mx-0" style="width:148px;height:148px">
         <!-- Accent ring -->
         <div style="position:absolute;inset:-4px;border-radius:50%;background:linear-gradient(135deg,#0A84FF,#5AC8FA,#34C759);padding:3px;z-index:0">
          <div style="width:100%;height:100%;border-radius:50%;background:var(--color-bg,#F2F2F7)"></div>
         </div>
         <!-- Photo -->
         <div style="position:absolute;inset:0;border-radius:50%;overflow:hidden;box-shadow:0 16px 48px rgba(10,132,255,0.22)">
          <img src="./assets/images/self-portrait/profile-14.JPEG" alt="Zefanya Kharisma Nugroho" style="width:100%;height:100%;object-fit:cover;object-position:center 15%">
         </div>
         <!-- Online indicator -->
         <div style="position:absolute;bottom:4px;right:4px;width:14px;height:14px;border-radius:50%;background:#34C759;border:2.5px solid var(--color-bg,#F2F2F7);z-index:2"></div>
        </div>
       </div>

       <!-- Text content -->
       <div>
        <!-- Status pill -->
        <div class="flex flex-wrap items-center gap-3 mb-10" style="animation:fadeUp .5s ease both">
         <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full" style="background:rgba(255,255,255,0.72);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.3);box-shadow:0 2px 12px rgba(0,0,0,0.06)">
          <span style="width:6px;height:6px;border-radius:50%;background:#34C759;display:inline-block;box-shadow:0 0 0 3px rgba(52,199,89,0.2)"></span>
          <span class="label-small" data-edit-key="home_hero_status">International Partnerships · Creative Technologist</span>
         </div>
         <span class="label-small" data-edit-key="home_hero_location">· Surabaya, Indonesia</span>
        </div>

        <!-- Name headline -->
        <h1 class="hero-large-text mb-6" style="animation:springIn .6s cubic-bezier(0.34,1.56,0.64,1) .08s both">
         Zefanya<br>
         <em style="color:#0A84FF;font-style:normal;background:linear-gradient(135deg,#0A84FF,#5AC8FA);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">Kharisma</em><br>
         Nugroho
        </h1>

        <!-- Accent line -->
        <div style="width:40px;height:3px;background:#0A84FF;border-radius:3px;margin-bottom:28px;animation:fadeUp .55s ease .14s both"></div>

        <!-- Supporting statement -->
        <div class="max-w-md mb-10" style="animation:fadeUp .55s ease .18s both">
         <p class="font-heading text-xl mb-2" style="color:#1C1C1E;line-height:1.4;font-weight:600" data-edit-key="home_hero_tagline_1">Bridging global engagement &amp; digital creativity.</p>
         <p class="text-sm leading-relaxed" style="color:#8E8E93;font-family:'DM Sans',sans-serif" data-edit-key="home_hero_tagline_2">International Education · Creative Technologist · Surabaya</p>
        </div>

        <!-- CTAs -->
        <div style="animation:springIn .6s cubic-bezier(0.34,1.56,0.64,1) .22s both">
         <div class="flex flex-wrap items-center gap-3">
          <a href="/projects-overview" class="btn-primary font-medium text-sm px-7 py-3.5 rounded-full inline-flex items-center gap-2" style="text-decoration:none">View Projects <i data-lucide="arrow-right" style="width:15px;height:15px"></i></a>
          <a href="/about-overview" class="btn-outline font-medium text-sm px-7 py-3.5 rounded-full inline-flex items-center gap-2" style="text-decoration:none">About Me</a>
         </div>
         <div class="mt-4 flex items-center gap-2">
          <span class="label-small">Also:</span>
          <a href="/croissantsmoon" class="inline-flex items-center gap-1.5 text-xs font-medium" style="font-family:'Plus Jakarta Sans',sans-serif;font-style:italic;color:#0A84FF;text-decoration:none">CroissantsMoon <i data-lucide="moon" style="width:12px;height:12px"></i></a>
         </div>
        </div>
       </div>
      </div>

      <!-- UX FIX: scroll cue now visible on mobile too — desktop keeps vertical text, mobile shows a centered chevron -->
      <button class="hero-scroll-cue absolute bottom-6 left-1/2 md:left-6 md:translate-x-0 flex flex-col items-center gap-2" aria-label="Scroll to next section" id="hero-scroll-btn" style="background:none;border:none;cursor:pointer;padding:0;transform:translateX(-50%)">
       <div class="hidden md:block" style="width:1px;height:40px;background:rgba(255,255,255,0.6)"></div>
       <span class="label-small hidden md:inline" style="writing-mode:vertical-rl;letter-spacing:.14em;color:rgba(255,255,255,0.7)">Scroll</span>
       <i data-lucide="chevron-down" class="md:hidden" style="width:22px;height:22px;color:rgba(255,255,255,0.75);animation:cmScrollBounce 2.2s ease-in-out infinite"></i>
      </button>
     </div>

     <!-- ═══ STATS BAND ═══ -->
     <div id="home-stats-band" style="background:linear-gradient(135deg,#1C1C1E 0%,#2C2C2E 100%);padding:36px 20px;margin:0">
      <div class="max-w-6xl mx-auto">
       <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div class="text-center">
         <p class="font-heading font-bold" style="font-size:2.6rem;color:#fff;letter-spacing:-.02em;line-height:1" data-edit-key="home_stats_number_1">480+</p>
         <p class="label-small mt-2" style="color:rgba(255,255,255,0.55)" data-edit-key="home_stats_label_1">Students Supported</p>
        </div>
        <div class="text-center">
         <p class="font-heading font-bold" style="font-size:2.6rem;color:#0A84FF;letter-spacing:-.02em;line-height:1" data-edit-key="home_stats_number_2">505+</p>
         <p class="label-small mt-2" style="color:rgba(255,255,255,0.55)" data-edit-key="home_stats_label_2">Global Partners</p>
        </div>
        <div class="text-center">
         <p class="font-heading font-bold" style="font-size:2.6rem;color:#fff;letter-spacing:-.02em;line-height:1" data-edit-key="home_stats_number_3">3+</p>
         <p class="label-small mt-2" style="color:rgba(255,255,255,0.55)" data-edit-key="home_stats_label_3">Years Experience</p>
        </div>
        <div class="text-center">
         <p class="font-heading font-bold" style="font-size:2.6rem;color:#fff;letter-spacing:-.02em;line-height:1" data-edit-key="home_stats_number_4">5</p>
         <p class="label-small mt-2" style="color:rgba(255,255,255,0.55)" data-edit-key="home_stats_label_4">Programs Led</p>
        </div>
       </div>
      </div>
     </div>

     <!-- ═══ MARQUEE STRIP ═══ -->
     <!-- UX FIX: aria-hidden on outer wrapper (decorative); .cm-marquee-track class enables hover-pause -->
     <div aria-hidden="true" style="background:#F2ECE4;border-bottom:1px solid rgba(28,28,30,0.07);padding:13px 0;overflow:hidden">
      <div class="cm-marquee-track" style="animation:cmMarquee 32s linear infinite;width:max-content">
       <div style="display:flex;align-items:center;white-space:nowrap">
        <span style="padding:0 28px;color:#767676;font-size:.67rem;font-weight:600;letter-spacing:.11em;text-transform:uppercase">International Partnership</span>
        <span style="color:rgba(28,28,30,0.18);font-size:.8rem">·</span>
        <span style="padding:0 28px;color:#767676;font-size:.67rem;font-weight:600;letter-spacing:.11em;text-transform:uppercase">Student Mobility</span>
        <span style="color:rgba(28,28,30,0.18);font-size:.8rem">·</span>
        <span style="padding:0 28px;color:#0A84FF;font-size:.67rem;font-weight:600;letter-spacing:.06em;font-style:italic;font-family:'Plus Jakarta Sans',sans-serif">CroissantsMoon</span>
        <span style="color:rgba(28,28,30,0.18);font-size:.8rem">·</span>
        <span style="padding:0 28px;color:#767676;font-size:.67rem;font-weight:600;letter-spacing:.11em;text-transform:uppercase">Creative Direction</span>
        <span style="color:rgba(28,28,30,0.18);font-size:.8rem">·</span>
        <span style="padding:0 28px;color:#767676;font-size:.67rem;font-weight:600;letter-spacing:.11em;text-transform:uppercase">Digital Strategy</span>
        <span style="color:rgba(28,28,30,0.18);font-size:.8rem">·</span>
        <span style="padding:0 28px;color:#767676;font-size:.67rem;font-weight:600;letter-spacing:.11em;text-transform:uppercase">Web Development</span>
        <span style="color:rgba(28,28,30,0.18);font-size:.8rem">·</span>
        <span style="padding:0 28px;color:#767676;font-size:.67rem;font-weight:600;letter-spacing:.11em;text-transform:uppercase">MoU / MoA</span>
        <span style="color:rgba(28,28,30,0.18);font-size:.8rem">·</span>
        <span style="padding:0 28px;color:#767676;font-size:.67rem;font-weight:600;letter-spacing:.11em;text-transform:uppercase">Surabaya, Indonesia</span>
        <span style="color:rgba(28,28,30,0.18);font-size:.8rem">·</span>
       </div>
       <div style="display:flex;align-items:center;white-space:nowrap" aria-hidden="true">
        <span style="padding:0 28px;color:#767676;font-size:.67rem;font-weight:600;letter-spacing:.11em;text-transform:uppercase">International Partnership</span>
        <span style="color:rgba(28,28,30,0.18);font-size:.8rem">·</span>
        <span style="padding:0 28px;color:#767676;font-size:.67rem;font-weight:600;letter-spacing:.11em;text-transform:uppercase">Student Mobility</span>
        <span style="color:rgba(28,28,30,0.18);font-size:.8rem">·</span>
        <span style="padding:0 28px;color:#0A84FF;font-size:.67rem;font-weight:600;letter-spacing:.06em;font-style:italic;font-family:'Plus Jakarta Sans',sans-serif">CroissantsMoon</span>
        <span style="color:rgba(28,28,30,0.18);font-size:.8rem">·</span>
        <span style="padding:0 28px;color:#767676;font-size:.67rem;font-weight:600;letter-spacing:.11em;text-transform:uppercase">Creative Direction</span>
        <span style="color:rgba(28,28,30,0.18);font-size:.8rem">·</span>
        <span style="padding:0 28px;color:#767676;font-size:.67rem;font-weight:600;letter-spacing:.11em;text-transform:uppercase">Digital Strategy</span>
        <span style="color:rgba(28,28,30,0.18);font-size:.8rem">·</span>
        <span style="padding:0 28px;color:#767676;font-size:.67rem;font-weight:600;letter-spacing:.11em;text-transform:uppercase">Web Development</span>
        <span style="color:rgba(28,28,30,0.18);font-size:.8rem">·</span>
        <span style="padding:0 28px;color:#767676;font-size:.67rem;font-weight:600;letter-spacing:.11em;text-transform:uppercase">MoU / MoA</span>
        <span style="color:rgba(28,28,30,0.18);font-size:.8rem">·</span>
        <span style="padding:0 28px;color:#767676;font-size:.67rem;font-weight:600;letter-spacing:.11em;text-transform:uppercase">Surabaya, Indonesia</span>
        <span style="color:rgba(28,28,30,0.18);font-size:.8rem">·</span>
       </div>
      </div>
     </div>

     <!-- ═══ SELECTED WORK ═══ -->
     <div style="background:var(--color-bg,#F2F2F7);padding:72px 20px">
      <div class="max-w-6xl mx-auto">
       <div class="flex items-end justify-between gap-4 flex-wrap mb-10">
        <div>
         <div class="flex items-center gap-3 mb-3"><span class="accent-line"></span><span class="label-small">Selected Work</span></div>
         <h2 class="font-heading font-bold" style="font-size:clamp(1.7rem,5vw,2.4rem);color:#1C1C1E;letter-spacing:-.02em;line-height:1.1">Where I Make an Impact</h2>
        </div>
        <button onclick="goToPage('projects-overview')" class="text-sm font-medium inline-flex items-center gap-2 transition-all hover:gap-3" style="color:#0A84FF;background:none;border:none;cursor:pointer;font-family:'DM Sans',sans-serif">All Projects <i data-lucide="arrow-right" style="width:14px;height:14px"></i></button>
       </div>
       <!-- Top row: large + small -->
       <div class="grid lg:grid-cols-3 gap-4 mb-4">
        <a href="/amerta" class="home-work-card lg:col-span-2 group relative overflow-hidden rounded-2xl block" style="padding:44px;min-height:260px;text-decoration:none;color:inherit">
         <img src="assets/images/student-services/tailor-made/griffith-unair-2.JPEG" alt="AMERTA exchange students at Griffith University" loading="lazy" class="absolute inset-0 w-full h-full object-cover">
         <div class="absolute inset-0" style="background:linear-gradient(135deg,rgba(30,58,95,0.88),rgba(74,107,138,0.72))"></div>
         <div class="absolute inset-0 pointer-events-none" style="background:radial-gradient(ellipse at 90% 10%,rgba(139,115,85,0.18),transparent 50%)"></div>
         <div class="relative z-10 h-full flex flex-col justify-between">
          <div class="flex items-center justify-between">
           <span style="font-size:.67rem;font-weight:600;letter-spacing:.11em;text-transform:uppercase;color:rgba(255,255,255,0.7)">Exchange Program</span>
           <span class="home-work-arrow" style="width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;transition:background .2s"><i data-lucide="arrow-up-right" style="width:16px;height:16px;color:#fff"></i></span>
          </div>
          <div>
           <h3 class="font-heading font-bold text-2xl mb-2" style="color:#fff;letter-spacing:-.01em;line-height:1.2">AMERTA Exchange<br>Program</h3>
           <p class="text-sm" style="color:rgba(255,255,255,0.75)">120+ students · IDR 50–100M per cohort · Universitas Airlangga</p>
          </div>
         </div>
        </a>
        <a href="/web-pcu-global-intl" class="home-work-card group relative overflow-hidden rounded-2xl block" style="background:var(--color-surface,rgba(255,255,255,0.72));backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.28);min-height:260px;text-decoration:none;color:inherit">
         <div style="position:relative;overflow:hidden;height:160px;background:#0a0a14;flex-shrink:0">
          <iframe src="https://international-office-website.vercel.app/" style="position:absolute;top:0;left:0;width:300%;height:480px;transform:scale(0.333);transform-origin:top left;border:none;pointer-events:none" loading="lazy" sandbox="allow-scripts allow-same-origin" aria-hidden="true" title="PCU Global International Office Website preview"></iframe>
          <div style="position:absolute;top:0;left:0;right:0;z-index:2;background:rgba(0,0,0,0.58);padding:9px 14px;display:flex;align-items:center;gap:8px">
           <div style="display:flex;gap:5px;flex-shrink:0">
            <span style="width:10px;height:10px;border-radius:50%;background:#FF5F57;display:inline-block"></span>
            <span style="width:10px;height:10px;border-radius:50%;background:#FFBD2E;display:inline-block"></span>
            <span style="width:10px;height:10px;border-radius:50%;background:#28CA41;display:inline-block"></span>
           </div>
           <div style="flex:1;background:rgba(255,255,255,0.07);border-radius:6px;padding:3px 10px;font-size:.6rem;color:rgba(255,255,255,0.42);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">international-office-website.vercel.app</div>
          </div>
         </div>
         <div style="padding:24px 28px" class="flex flex-col justify-between">
          <div class="flex items-center justify-between mb-4">
           <span style="font-size:.67rem;font-weight:600;letter-spacing:.11em;text-transform:uppercase;color:#767676">Web Project</span>
           <span class="home-work-arrow" style="width:38px;height:38px;border-radius:50%;background:rgba(28,28,30,0.06);display:flex;align-items:center;justify-content:center;transition:background .2s"><i data-lucide="arrow-up-right" style="width:16px;height:16px;color:#5C5C5C"></i></span>
          </div>
          <div>
           <div style="width:36px;height:3px;background:#003087;border-radius:2px;margin-bottom:16px"></div>
           <h3 class="font-heading font-bold text-xl mb-2" style="color:#1C1C1E;letter-spacing:-.01em;line-height:1.2">PCU Global<br>Website</h3>
           <p class="text-sm" style="color:#767676">Full-stack · CMS · Mobile-first</p>
          </div>
         </div>
        </a>
       </div>
       <!-- Bottom row: three equal -->
       <div class="grid sm:grid-cols-3 gap-4">
        <a href="/aci" class="home-work-card group relative overflow-hidden rounded-2xl block" style="min-height:160px;text-decoration:none;color:inherit">
         <img src="assets/images/aci/aci-4.JPEG" alt="ACI cultural immersion program" loading="lazy" class="absolute inset-0 w-full h-full object-cover">
         <div class="absolute inset-0" style="background:linear-gradient(to top,rgba(74,82,53,0.92) 0%,rgba(74,82,53,0.45) 100%)"></div>
         <div class="relative z-10 h-full flex flex-col justify-between p-7">
          <span style="font-size:.67rem;font-weight:600;letter-spacing:.11em;text-transform:uppercase;color:rgba(255,255,255,0.7)">Cultural Program</span>
          <div>
           <h3 class="font-heading font-semibold text-base leading-snug mb-2" style="color:#fff">ACI — Airlangga<br>Cultural Immersion</h3>
           <div class="flex items-center gap-2 text-xs font-medium" style="color:rgba(255,255,255,0.85)">View <i data-lucide="arrow-right" style="width:12px;height:12px"></i></div>
          </div>
         </div>
        </a>
        <a href="/aero" class="home-work-card group relative overflow-hidden rounded-2xl block" style="min-height:160px;text-decoration:none;color:inherit">
         <img src="assets/images/aero/aero-header-1.JPEG" alt="AERO exhibition at Universitas Airlangga" loading="lazy" class="absolute inset-0 w-full h-full object-cover" style="object-position:center 30%">
         <div class="absolute inset-0" style="background:linear-gradient(to top,rgba(28,28,30,0.92) 0%,rgba(28,28,30,0.45) 100%)"></div>
         <div class="relative z-10 h-full flex flex-col justify-between p-7">
          <span style="font-size:.67rem;font-weight:600;letter-spacing:.11em;text-transform:uppercase;color:rgba(255,255,255,0.7)">Exhibition</span>
          <div>
           <h3 class="font-heading font-semibold text-base leading-snug mb-2" style="color:#fff">AERO Exhibition</h3>
           <div class="flex items-center gap-2 text-xs font-medium" style="color:rgba(255,255,255,0.85)">View <i data-lucide="arrow-right" style="width:12px;height:12px"></i></div>
          </div>
         </div>
        </a>
        <a href="/croissantsmoon" class="home-work-card group relative overflow-hidden rounded-2xl block" style="background:linear-gradient(135deg,#1C1C1E 0%,#2C2C2E 100%);padding:28px;text-decoration:none;color:inherit;min-height:160px">
         <div style="width:28px;height:3px;background:#FF6B47;border-radius:2px;margin-bottom:18px"></div>
         <span style="font-size:.67rem;font-weight:600;letter-spacing:.11em;text-transform:uppercase;color:rgba(255,255,255,0.55);display:block;margin-bottom:10px">Creative Studio</span>
         <h3 class="font-heading font-semibold text-base leading-snug" style="color:#fff;font-style:italic">CroissantsMoon</h3>
         <div class="mt-4 flex items-center gap-2 text-xs font-medium" style="color:#FF6B47">Explore <i data-lucide="arrow-right" style="width:12px;height:12px"></i></div>
        </a>
       </div>
      </div>
     </div>

     <!-- ═══ INTERACTIVE SKILL DISCOVERY ═══ -->
     <div style="background:rgba(242,242,247,0.8);padding:72px 20px">
      <div class="max-w-6xl mx-auto">
       <div class="grid lg:grid-cols-5 gap-12 items-start">
        <!-- Sticky heading column -->
        <div class="lg:col-span-2" style="position:sticky;top:80px">
         <div class="flex items-center gap-3 mb-5"><span class="accent-line"></span><span class="label-small">Skill Discovery</span></div>
         <h2 class="font-heading font-bold mb-4" style="font-size:clamp(1.8rem,5vw,2.5rem);color:#1C1C1E;letter-spacing:-.02em;line-height:1.1">Explore My<br><em style="font-style:normal;color:#0A84FF">Ecosystem</em></h2>
         <p class="text-sm leading-relaxed mb-4" style="color:#5C5C5C;max-width:300px">Click a skill tag below to add it to your search, or type a keyword to find any page.</p>
         <ol class="mb-6" style="max-width:300px;list-style:none;padding:0;font-size:.75rem;color:#767676;line-height:1.7">
          <li style="display:flex;gap:8px;align-items:flex-start"><span style="display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;background:#0A84FF;color:#fff;font-size:.6rem;font-weight:700;flex-shrink:0;margin-top:2px">1</span><span>Pick a skill or type</span></li>
          <li style="display:flex;gap:8px;align-items:flex-start"><span style="display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;background:#0A84FF;color:#fff;font-size:.6rem;font-weight:700;flex-shrink:0;margin-top:2px">2</span><span>Hit search to see matching work</span></li>
         </ol>
         <!-- Ecosystem Search Bar -->
         <div style="position:relative;margin-top:4px">
          <div id="ecosystem-search-box" style="display:flex;flex-wrap:wrap;align-items:center;gap:5px;background:#fff;border:1.5px solid rgba(28,28,30,0.12);border-radius:14px;padding:8px 8px 8px 14px;min-height:52px;cursor:text" onclick="document.getElementById('ecosystem-search-input').focus()">
           <input id="ecosystem-search-input" type="text" placeholder="Search pages, projects…"
            style="border:none;outline:none;background:transparent;font-size:.83rem;color:#1C1C1E;flex:1 1 80px;min-width:80px;padding:3px 0;font-family:'Inter',sans-serif;line-height:1.4"
            oninput="onEcosystemSearchInput(this.value)"
            onkeydown="if(event.key==='Enter')executeEcosystemSearch()"
            onfocus="document.getElementById('ecosystem-search-box').style.borderColor='#0A84FF';document.getElementById('ecosystem-search-box').style.boxShadow='0 0 0 3px rgba(10,132,255,0.12)'"
            onblur="setTimeout(function(){var b=document.getElementById('ecosystem-search-box');if(b){b.style.borderColor='rgba(28,28,30,0.12)';b.style.boxShadow='none';}hideSearchDropdown()},180)"
           />
           <button id="search-exec-btn" onclick="executeEcosystemSearch()"
            style="background:#1C1C1E;color:#fff;border:none;cursor:pointer;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .2s;margin-left:2px"
            onmouseover="this.style.background='#0A84FF'" onmouseout="this.style.background='#1C1C1E'"
           ><i data-lucide="search" style="width:15px;height:15px"></i></button>
          </div>
          <div id="search-dropdown" style="display:none;position:absolute;left:0;right:0;top:calc(100% + 6px);z-index:200;background:#fff;border:1px solid rgba(28,28,30,0.1);border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,0.1);overflow:hidden"></div>
         </div>
         <button id="clear-skills-btn" onclick="clearSkills()" class="text-sm mt-3 inline-block" style="color:#767676;display:none">Clear all</button>
        </div>
        <!-- Tag cloud column -->
        <div class="lg:col-span-3">
         <!-- Legend -->
         <div class="flex flex-wrap gap-4 mb-6">
          <div class="flex items-center gap-2"><span style="width:8px;height:8px;border-radius:50%;background:#2B4F6E;display:inline-block"></span><span class="label-small">Intl. Education</span></div>
          <div class="flex items-center gap-2"><span style="width:8px;height:8px;border-radius:50%;background:#1E3A5F;display:inline-block"></span><span class="label-small">Leadership</span></div>
          <div class="flex items-center gap-2"><span style="width:8px;height:8px;border-radius:50%;background:#6B4F32;display:inline-block"></span><span class="label-small">Creative &amp; Digital</span></div>
          <div class="flex items-center gap-2"><span style="width:8px;height:8px;border-radius:50%;background:#4A5235;display:inline-block"></span><span class="label-small">Technology</span></div>
         </div>
         <!-- Skill tags -->
         <div id="skill-tags-container" class="flex flex-wrap gap-2.5">
          <button class="skill-tag cat-education" data-skill="International Partnership" onclick="toggleSkill(this)">International Partnership</button>
          <button class="skill-tag cat-education" data-skill="Student Mobility" onclick="toggleSkill(this)">Student Mobility</button>
          <button class="skill-tag cat-education" data-skill="Internationalization" onclick="toggleSkill(this)">Internationalization</button>
          <button class="skill-tag cat-education" data-skill="Student Support" onclick="toggleSkill(this)">Student Support</button>
          <button class="skill-tag cat-education" data-skill="Cross-Cultural Communication" onclick="toggleSkill(this)">Cross-Cultural Communication</button>
          <button class="skill-tag cat-leadership" data-skill="Project Management" onclick="toggleSkill(this)">Project Management</button>
          <button class="skill-tag cat-leadership" data-skill="Leadership" onclick="toggleSkill(this)">Leadership</button>
          <button class="skill-tag cat-leadership" data-skill="Systems Thinking" onclick="toggleSkill(this)">Systems Thinking</button>
          <button class="skill-tag cat-creative" data-skill="UI/UX Design" onclick="toggleSkill(this)">UI/UX Design</button>
          <button class="skill-tag cat-creative" data-skill="Branding" onclick="toggleSkill(this)">Branding</button>
          <button class="skill-tag cat-creative" data-skill="Creative Direction" onclick="toggleSkill(this)">Creative Direction</button>
          <button class="skill-tag cat-creative" data-skill="Digital Strategy" onclick="toggleSkill(this)">Digital Strategy</button>
          <button class="skill-tag cat-creative" data-skill="Writing" onclick="toggleSkill(this)">Writing</button>
          <button class="skill-tag cat-tech" data-skill="Full-Stack Development" onclick="toggleSkill(this)">Full-Stack Development</button>
          <button class="skill-tag cat-tech" data-skill="Front-End Development" onclick="toggleSkill(this)">Front-End Development</button>
          <button class="skill-tag cat-tech" data-skill="Web Experience" onclick="toggleSkill(this)">Web Experience</button>
         </div>
        </div>
       </div>
      </div>
     </div>

     <!-- ═══ CORE COMPETENCY LIST ═══ -->
     <div style="background:#FAFAF8;padding:80px 24px">
      <div class="max-w-6xl mx-auto">
       <div class="flex items-center gap-3 mb-12"><span class="accent-line"></span><span class="label-small">Core Competencies</span></div>
       <div>
        <a href="/partnerships" class="competency-row w-full flex items-start gap-6 py-7" style="border-top:1px solid rgba(28,28,30,0.1);text-decoration:none;color:inherit">
         <span class="font-heading font-bold flex-shrink-0" style="font-size:.9rem;color:#0A84FF;min-width:32px;margin-top:3px">01</span>
         <div class="flex-1 min-w-0">
          <span class="label-small block mb-1.5" style="color:#767676">Global Partnerships</span>
          <h3 class="font-heading font-semibold text-lg leading-snug" style="color:#1C1C1E">International Partnership Management</h3>
         </div>
         <p class="hidden md:block text-sm leading-relaxed flex-1" style="color:#5C5C5C;max-width:340px;margin-top:20px">Managing 30+ institutional partners and reviewing 25+ MoU/MoA agreements monthly</p>
         <span class="competency-cta flex items-center gap-2 text-sm font-medium flex-shrink-0" style="color:#0A84FF;margin-top:22px">View <i data-lucide="arrow-right" style="width:14px;height:14px"></i></span>
        </a>
        <a href="/onboarding" class="competency-row w-full flex items-start gap-6 py-7" style="border-top:1px solid rgba(28,28,30,0.1);text-decoration:none;color:inherit">
         <span class="font-heading font-bold flex-shrink-0" style="font-size:.9rem;color:#4A6B8A;min-width:32px;margin-top:3px">02</span>
         <div class="flex-1 min-w-0">
          <span class="label-small block mb-1.5" style="color:#767676">Student Services</span>
          <h3 class="font-heading font-semibold text-lg leading-snug" style="color:#1C1C1E">International Student Support</h3>
         </div>
         <p class="hidden md:block text-sm leading-relaxed flex-1" style="color:#5C5C5C;max-width:340px;margin-top:20px">End-to-end welfare, mobility, and onboarding for 200+ international students across Surabaya</p>
         <span class="competency-cta flex items-center gap-2 text-sm font-medium flex-shrink-0" style="color:#4A6B8A;margin-top:22px">View <i data-lucide="arrow-right" style="width:14px;height:14px"></i></span>
        </a>
        <a href="/projects-overview" class="competency-row w-full flex items-start gap-6 py-7" style="border-top:1px solid rgba(28,28,30,0.1);text-decoration:none;color:inherit">
         <span class="font-heading font-bold flex-shrink-0" style="font-size:.9rem;color:#6B4F32;min-width:32px;margin-top:3px">03</span>
         <div class="flex-1 min-w-0">
          <span class="label-small block mb-1.5" style="color:#767676">Program Management</span>
          <h3 class="font-heading font-semibold text-lg leading-snug" style="color:#1C1C1E">Exchange Program Management</h3>
         </div>
         <p class="hidden md:block text-sm leading-relaxed flex-1" style="color:#5C5C5C;max-width:340px;margin-top:20px">5 end-to-end exchange programs — AMERTA, ACI, AERO — with IDR 50–90M per-program budgets</p>
         <span class="competency-cta flex items-center gap-2 text-sm font-medium flex-shrink-0" style="color:#6B4F32;margin-top:22px">View <i data-lucide="arrow-right" style="width:14px;height:14px"></i></span>
        </a>
        <a href="/croissantsmoon" class="competency-row w-full flex items-start gap-6 py-7" style="border-top:1px solid rgba(28,28,30,0.1);border-bottom:1px solid rgba(28,28,30,0.1);text-decoration:none;color:inherit">
         <span class="font-heading font-bold flex-shrink-0" style="font-size:.9rem;color:#1C1C1E;min-width:32px;margin-top:3px;font-style:italic">CM</span>
         <div class="flex-1 min-w-0">
          <span class="label-small block mb-1.5" style="color:#767676">Creative Identity</span>
          <h3 class="font-heading font-semibold text-lg leading-snug" style="color:#1C1C1E;font-style:italic;font-family:'Plus Jakarta Sans',sans-serif">CroissantsMoon</h3>
         </div>
         <p class="hidden md:block text-sm leading-relaxed flex-1" style="color:#5C5C5C;max-width:340px;margin-top:20px">Creative digital experiences &amp; a future studio identity in development</p>
         <span class="competency-cta flex items-center gap-2 text-sm font-medium flex-shrink-0" style="color:#0A84FF;margin-top:22px">Explore <i data-lucide="arrow-right" style="width:14px;height:14px"></i></span>
        </a>
       </div>
      </div>
     </div>

     <!-- ═══ CTA SECTION ═══ -->
     <div style="background:#1C1C1E;padding:100px 24px;position:relative;overflow:hidden">
      <div class="absolute inset-0 pointer-events-none" style="background:radial-gradient(ellipse at 85% 50%,rgba(139,115,85,0.11),transparent 50%),radial-gradient(ellipse at 15% 50%,rgba(74,107,138,0.06),transparent 45%)"></div>
      <!-- Background typographic watermark -->
      <div class="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden" style="opacity:.025">
       <span style="font-family:'Plus Jakarta Sans',sans-serif;font-size:clamp(10rem,18vw,22rem);font-weight:800;font-style:italic;color:#fff;user-select:none;white-space:nowrap;line-height:1">Let's talk</span>
      </div>
      <div class="max-w-3xl mx-auto text-center relative z-10">
       <p class="font-editorial text-base mb-5" style="color:#0A84FF" data-edit-key="home_contact_eyebrow">Let's build something meaningful</p>
       <h2 class="font-heading font-bold mb-4" style="font-size:clamp(2.4rem,5vw,3.8rem);color:#fff;letter-spacing:-.02em;line-height:1.05" data-edit-key="home_contact_title">Open to<br><em style="font-style:italic;color:#0A84FF">Conversations</em></h2>
       <p class="text-sm mb-11" style="color:rgba(255,255,255,0.38);max-width:380px;margin-left:auto;margin-right:auto;line-height:1.7" data-edit-key="home_contact_body">Partnerships, collaborations, education projects, or creative work — I'm always open to a good conversation.</p>
       <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a id="home-cv-download" href="./assets/data/profile.pdf" download class="btn-cv-download font-medium text-sm px-8 py-4 rounded-full inline-flex items-center justify-center gap-2"><i data-lucide="download" style="width:15px;height:15px"></i> <span class="cv-btn-label">Download CV</span><span class="sr-only" aria-live="polite" id="cv-download-status"></span></a>
        <a href="/contact" class="btn-contact-outline font-medium text-sm px-8 py-4 rounded-full inline-flex items-center gap-2"><i data-lucide="mail" style="width:15px;height:15px"></i> Contact Me</a>
       </div>
      </div>
     </div>
    `;
  if (window.lucide) lucide.createIcons();

  // ── Calendar: "What's happening" — inserted after the stats band ───────
  var statsBand = el.querySelector('#home-stats-band');
  if (statsBand && window.PortfolioCalendar) {
    var section = document.createElement('section');
    section.id = 'home-calendar-section';
    section.style.cssText = 'padding:64px 24px;background:#FAFAF8';
    section.innerHTML =
      '<div class="max-w-5xl mx-auto">' +
        '<div class="flex items-center gap-3 mb-4"><span class="accent-line"></span><span class="label-small">Calendar</span></div>' +
        '<h2 class="font-heading font-bold text-3xl mb-2" style="color:#1C1C1E;letter-spacing:-.01em">What\'s happening</h2>' +
        '<p class="text-sm mb-8" style="color:#5C5C5C;max-width:540px">Meetings, milestones, and recent publications — a live snapshot of what is on the calendar.</p>' +
        '<div id="home-calendar-mount"></div>' +
      '</div>';
    statsBand.insertAdjacentElement('afterend', section);
    window.PortfolioCalendar.mount(document.getElementById('home-calendar-mount'), 'home');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  homeInitPage();
});
