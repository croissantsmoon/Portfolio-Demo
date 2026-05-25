function toggleAboutTimeline(btn) {
  const body = btn.nextElementSibling;
  const chevron = btn.querySelector('.timeline-chevron');
  const isOpen = body.style.display !== 'none';
  body.style.display = isOpen ? 'none' : 'block';
  if (chevron) chevron.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
  if (!isOpen) lucide.createIcons();
}

// ── About Skill Map ──────────────────────────────────────────────────────────
let _aboutSelectedSkills = [];

function aboutToggleSkill(btn) {
  const skill = btn.dataset.skill;
  if (_aboutSelectedSkills.includes(skill)) {
    _aboutSelectedSkills = _aboutSelectedSkills.filter(s => s !== skill);
    btn.classList.remove('selected');
    const chip = document.querySelector('[data-about-chip="' + skill + '"]');
    if (chip) chip.remove();
  } else {
    _aboutSelectedSkills.push(skill);
    btn.classList.add('selected');
    const searchBox = document.getElementById('about-search-box');
    const input = document.getElementById('about-search-input');
    if (searchBox && input) {
      const chip = document.createElement('span');
      chip.setAttribute('data-about-chip', skill);
      chip.style.cssText = 'display:inline-flex;align-items:center;gap:4px;background:rgba(30,58,95,0.1);color:#1E3A5F;padding:3px 8px 3px 10px;border-radius:999px;font-size:.72rem;font-weight:500;white-space:nowrap;cursor:default;flex-shrink:0';
      chip.innerHTML = skill + '<button onclick="aboutRemoveChip(this)" data-skill-name="' + skill.replace(/"/g, '&quot;') + '" style="background:none;border:none;cursor:pointer;padding:0 0 0 3px;display:flex;align-items:center;color:inherit;opacity:.6" aria-label="Remove ' + skill + '"><i data-lucide="x" style="width:10px;height:10px"></i></button>';
      searchBox.insertBefore(chip, input);
      if (window.lucide) lucide.createIcons();
    }
  }
  _aboutUpdateClearBtn();
  aboutRunSearch();
}

function aboutRemoveChip(removeBtn) {
  const skill = removeBtn.dataset.skillName;
  _aboutSelectedSkills = _aboutSelectedSkills.filter(s => s !== skill);
  const chip = removeBtn.closest('[data-about-chip]');
  if (chip) chip.remove();
  const tag = document.querySelector('#about-skill-tags [data-skill="' + skill + '"]');
  if (tag) tag.classList.remove('selected');
  _aboutUpdateClearBtn();
  aboutRunSearch();
}

function _aboutUpdateClearBtn() {
  const btn = document.getElementById('about-clear-btn');
  if (!btn) return;
  const hasInput = (document.getElementById('about-search-input')?.value || '').trim().length > 0;
  btn.style.display = (_aboutSelectedSkills.length > 0 || hasInput) ? 'inline-block' : 'none';
}

function aboutClearSearch() {
  _aboutSelectedSkills = [];
  document.querySelectorAll('#about-skill-tags .skill-tag').forEach(t => t.classList.remove('selected'));
  document.querySelectorAll('[data-about-chip]').forEach(c => c.remove());
  const input = document.getElementById('about-search-input');
  if (input) input.value = '';
  const results = document.getElementById('about-skill-results');
  if (results) results.style.display = 'none';
  const clearBtn = document.getElementById('about-clear-btn');
  if (clearBtn) clearBtn.style.display = 'none';
}

function aboutRunSearch() {
  const q = (document.getElementById('about-search-input')?.value || '').trim().toLowerCase();
  const skills = _aboutSelectedSkills;
  _aboutUpdateClearBtn();
  const results = document.getElementById('about-skill-results');
  if (!skills.length && !q) {
    if (results) results.style.display = 'none';
    return;
  }
  const items = (typeof discoveryItems !== 'undefined') ? discoveryItems : [];
  const matches = items.filter(function(item) {
    const skillMatch = !skills.length || item.skills.some(function(s) { return skills.includes(s); });
    const textMatch = !q || item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q) || item.category.toLowerCase().includes(q) || item.skills.some(function(s) { return s.toLowerCase().includes(q); });
    return skillMatch && textMatch;
  }).sort(function(a, b) {
    const aScore = skills.length ? a.skills.filter(function(s) { return skills.includes(s); }).length : 0;
    const bScore = skills.length ? b.skills.filter(function(s) { return skills.includes(s); }).length : 0;
    return bScore - aScore;
  });
  const grid = document.getElementById('about-results-grid');
  const noResults = document.getElementById('about-no-results');
  if (!results || !grid) return;
  results.style.display = 'block';
  if (!matches.length) {
    grid.innerHTML = '';
    if (noResults) noResults.style.display = 'block';
    return;
  }
  if (noResults) noResults.style.display = 'none';
  grid.innerHTML = matches.slice(0, 9).map(function(item) {
    return '<button onclick="goToPage(\'' + item.page + '\')" class="card text-left about-card-lift p-5" style="background:#fff">' +
      '<div class="label-small mb-2" style="color:' + item.accent + '">' + item.category + '</div>' +
      '<h3 class="font-heading font-semibold text-sm mb-2" style="color:#1C1C1E">' + item.title + '</h3>' +
      '<p class="text-xs leading-relaxed mb-3" style="color:#5C5C5C">' + item.description + '</p>' +
      '<div class="flex flex-wrap gap-1">' + item.skills.slice(0, 3).map(function(s) { return '<span class="tag">' + s + '</span>'; }).join('') + '</div>' +
      '</button>';
  }).join('');
  if (window.lucide) lucide.createIcons();
}

function aboutOverviewInitPage() {
  var el = document.getElementById('page-about-overview');
  if (!el) return;
  el.innerHTML = `
     <style>
       @keyframes about-pulse-ring{0%{transform:scale(1);opacity:.65}70%,100%{transform:scale(1.22);opacity:0}}
       @keyframes about-live-dot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.25;transform:scale(.6)}}
       @keyframes about-tl-pulse{0%{box-shadow:0 0 0 0 rgba(30,58,95,.55),0 0 0 3px #FAFAF8,0 0 0 5px #1E3A5F}70%{box-shadow:0 0 0 12px rgba(30,58,95,0),0 0 0 3px #FAFAF8,0 0 0 5px #1E3A5F}100%{box-shadow:0 0 0 0 rgba(30,58,95,0),0 0 0 3px #FAFAF8,0 0 0 5px #1E3A5F}}
       .about-card-lift{transition:transform .22s ease,box-shadow .22s ease}
       .about-card-lift:hover{transform:translateY(-4px);box-shadow:0 20px 56px rgba(0,0,0,0.14)!important}
       @keyframes about-twinkle{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.15;transform:scale(.5)}}
       @keyframes about-float{0%,100%{transform:translate(-50%,-50%)}50%{transform:translate(-50%,calc(-50% - 8px))}}
     </style>

     <!-- ═══ 1. HERO PROFILE HEADER ═══ -->
     <div style="background:linear-gradient(160deg,#1C1C1E 0%,#1E3A5F 55%,#2C4A72 100%);padding:64px 24px 0;position:relative;overflow:hidden">
      <div class="absolute inset-0 pointer-events-none" style="background:radial-gradient(ellipse at 85% 20%,rgba(139,115,85,0.2),transparent 50%)"></div>
      <div class="absolute -right-24 -top-24 w-96 h-96 rounded-full pointer-events-none" style="border:1px solid rgba(255,255,255,0.05)"></div>
      <div class="absolute right-32 bottom-0 w-56 h-56 rounded-full pointer-events-none" style="border:1px solid rgba(255,255,255,0.05)"></div>
      <div class="max-w-6xl mx-auto relative z-10">
       <div class="flex flex-col lg:flex-row gap-10 pb-10">
        <div class="flex-shrink-0 flex flex-col items-center lg:items-start">
         <div style="position:relative;width:120px;height:120px;margin-bottom:16px">
          <div style="position:absolute;inset:-8px;border-radius:50%;border:2px solid rgba(139,115,85,0.35);animation:about-pulse-ring 2.8s ease-out infinite;pointer-events:none"></div>
          <div style="position:absolute;inset:-3px;border-radius:50%;border:1px solid rgba(255,255,255,0.06);pointer-events:none"></div>
          <div style="width:120px;height:120px;border-radius:50%;background:linear-gradient(135deg,#8B7355 0%,#4A6B8A 100%);border:3px solid rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center;box-shadow:0 8px 32px rgba(0,0,0,0.35),0 0 0 1px rgba(139,115,85,0.2)">
           <span style="font-family:'Playfair Display',serif;font-size:2.5rem;color:#fff;font-weight:700;font-style:italic">Z</span>
          </div>
         </div>
         <div class="flex gap-2">
          <a href="mailto:zefanya.kharisma@gmail.com" class="flex items-center justify-center" style="width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.12)" title="Email"><i data-lucide="mail" style="width:15px;height:15px;color:rgba(255,255,255,0.7)"></i></a>
          <a href="https://www.linkedin.com/in/zefanyakharisma" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center" style="width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.12)" title="LinkedIn"><i data-lucide="linkedin" style="width:15px;height:15px;color:rgba(255,255,255,0.7)"></i></a>
         </div>
        </div>
        <div class="flex-1">
         <div class="label-small mb-3" style="color:rgba(255,255,255,0.35);letter-spacing:.12em" data-edit-key="about_hero_eyebrow">International Education Professional</div>
         <h1 class="font-heading font-bold mb-2" style="font-size:clamp(2.2rem,5vw,3.8rem);line-height:1.0;color:#fff;letter-spacing:-.02em" data-edit-key="about_hero_title">Zefanya Kharisma<br><em style="font-style:italic;color:#8B7355">Nugroho</em></h1>
         <p class="mb-1" style="color:rgba(255,255,255,0.6);font-size:.95rem;font-family:'Playfair Display',serif;font-style:italic" data-edit-key="about_hero_subtitle">International Education Professional &amp; Creative Technologist</p>
         <p class="mb-6 flex items-center gap-2" style="color:rgba(255,255,255,0.4);font-size:.8rem"><i data-lucide="map-pin" style="width:13px;height:13px"></i> Surabaya, Indonesia</p>
         <div class="flex flex-wrap gap-8 mb-8 pt-5" style="border-top:1px solid rgba(255,255,255,0.08)">
          <div><p class="font-heading font-bold" style="font-size:2.2rem;line-height:1;letter-spacing:-.04em;color:#8B7355">3+</p><p class="label-small mt-1.5" style="color:rgba(255,255,255,0.35)">Years Experience</p></div>
          <div><p class="font-heading font-bold" style="font-size:2.2rem;line-height:1;letter-spacing:-.04em;color:#fff">200+</p><p class="label-small mt-1.5" style="color:rgba(255,255,255,0.35)">Students Supported</p></div>
          <div><p class="font-heading font-bold" style="font-size:2.2rem;line-height:1;letter-spacing:-.04em;color:#fff">30+</p><p class="label-small mt-1.5" style="color:rgba(255,255,255,0.35)">Global Partners</p></div>
          <div><p class="font-heading font-bold" style="font-size:2.2rem;line-height:1;letter-spacing:-.04em;color:#fff">5</p><p class="label-small mt-1.5" style="color:rgba(255,255,255,0.35)">Programs Led</p></div>
         </div>
         <div class="flex flex-wrap gap-2">
          <span style="background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.65);padding:5px 14px;border-radius:999px;font-size:.72rem;border:1px solid rgba(255,255,255,0.1);font-weight:500">International Partnership</span>
          <span style="background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.65);padding:5px 14px;border-radius:999px;font-size:.72rem;border:1px solid rgba(255,255,255,0.1);font-weight:500">Student Mobility</span>
          <span style="background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.65);padding:5px 14px;border-radius:999px;font-size:.72rem;border:1px solid rgba(255,255,255,0.1);font-weight:500">Project Management</span>
          <span style="background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.65);padding:5px 14px;border-radius:999px;font-size:.72rem;border:1px solid rgba(255,255,255,0.1);font-weight:500">Full-Stack Development</span>
          <span style="background:rgba(139,115,85,0.2);color:#C4A875;padding:5px 14px;border-radius:999px;font-size:.72rem;border:1px solid rgba(139,115,85,0.25);font-weight:500">Creative Direction</span>
         </div>
        </div>
       </div>
      </div>
     </div>

     <!-- ═══ 2. PROFESSIONAL SUMMARY ═══ -->
     <div style="padding:72px 24px;background:#FAFAF8">
      <div class="max-w-6xl mx-auto">
       <div class="flex items-center gap-3 mb-10"><span class="accent-line"></span><span class="label-small">Professional Summary</span></div>
       <div class="grid lg:grid-cols-5 gap-12 items-start">
        <div class="lg:col-span-3">
         <blockquote class="font-heading leading-snug mb-8" style="color:#1C1C1E;font-size:clamp(1.6rem,3vw,2.4rem);letter-spacing:-.02em" data-edit-key="about_summary_quote">"Bridging global engagement, student mobility, and digital creativity through intentional systems and thoughtful leadership."</blockquote>
         <div style="width:48px;height:2px;background:#8B7355;border-radius:2px;margin-bottom:24px"></div>
         <p class="text-base leading-relaxed" style="color:#5C5C5C">Over 3+ years, I've built a practice at the intersection of international education, institutional leadership, and digital creativity. At <strong style="color:#1C1C1E">Petra Christian University</strong>, I manage relationships with 30+ global partners and facilitate 15+ strategic meetings monthly. Previously at <strong style="color:#1C1C1E">Airlangga Global Engagement</strong>, I led end-to-end management of 5 international exchange programs serving 120+ students per semester with IDR 50–100M per-program budgets.</p>
        </div>
        <div class="lg:col-span-2 space-y-4">
         <div class="card p-6" style="border-left:3px solid #1E3A5F">
          <div class="flex items-center gap-2 mb-2">
           <span style="width:7px;height:7px;border-radius:50%;background:#22c55e;display:inline-block;flex-shrink:0;animation:about-live-dot 2s ease-in-out infinite"></span>
           <p class="label-small" style="color:#1E3A5F">Currently</p>
          </div>
          <p class="font-semibold text-sm" style="color:#1C1C1E">International Partnership Specialist</p>
          <p class="text-xs mt-1" style="color:#767676">Petra Christian University · Surabaya</p>
         </div>
         <div class="card p-6" style="border-left:3px solid #8B7355">
          <p class="label-small mb-2" style="color:#8B7355">Also Building</p>
          <p class="font-semibold text-sm font-editorial" style="color:#1C1C1E">CroissantsMoon</p>
          <p class="text-xs mt-1" style="color:#767676">Creative digital studio identity in development</p>
         </div>
         <div class="card p-6" style="border-left:3px solid #4A6B8A">
          <p class="label-small mb-2" style="color:#4A6B8A">Open To</p>
          <div class="flex flex-wrap gap-1.5 mt-2">
           <span class="tag">International Partnerships</span>
           <span class="tag">Education Consulting</span>
           <span class="tag">Digital Projects</span>
           <span class="tag">Speaking</span>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>

     <!-- ═══ 3. CURRENT FOCUS ═══ -->
     <div style="padding:72px 24px;background:#F2ECE4">
      <div class="max-w-6xl mx-auto">
       <div class="flex items-center gap-3 mb-4"><span class="accent-line"></span><span class="label-small">Current Focus</span></div>
       <h2 class="font-heading font-bold text-3xl mb-2" style="color:#1C1C1E" data-edit-key="about_focus_title">What I'm Building &amp; Exploring</h2>
       <p class="text-sm mb-10" style="color:#5C5C5C;max-width:480px" data-edit-key="about_focus_tagline">The domains I'm actively investing in right now — professionally, creatively, and intellectually.</p>
       <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div class="card p-7 about-card-lift" style="background:#fff">
         <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-5" style="background:rgba(30,58,95,0.08)"><i data-lucide="globe-2" style="width:20px;height:20px;color:#1E3A5F"></i></div>
         <h3 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">International Education Leadership</h3>
         <p class="text-sm leading-relaxed" style="color:#5C5C5C">Deepening institutional partnership strategies and driving internationalization frameworks at Petra Christian University.</p>
         <div class="mt-4 flex items-center gap-2" style="color:#1E3A5F"><span style="width:18px;height:2px;background:currentColor;border-radius:2px;display:inline-block"></span><span class="text-xs font-medium">Active</span></div>
        </div>
        <div class="card p-7 about-card-lift" style="background:#fff">
         <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-5" style="background:rgba(139,115,85,0.08)"><i data-lucide="layout-dashboard" style="width:20px;height:20px;color:#8B7355"></i></div>
         <h3 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">Digital Systems &amp; Experience Design</h3>
         <p class="text-sm leading-relaxed" style="color:#5C5C5C">Designing and building digital platforms that support international programs, from UI architecture to user journeys.</p>
         <div class="mt-4 flex items-center gap-2" style="color:#8B7355"><span style="width:18px;height:2px;background:currentColor;border-radius:2px;display:inline-block"></span><span class="text-xs font-medium">In Progress</span></div>
        </div>
        <div class="card p-7 about-card-lift" style="background:#fff">
         <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-5" style="background:rgba(74,107,138,0.08)"><i data-lucide="code-2" style="width:20px;height:20px;color:#4A6B8A"></i></div>
         <h3 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">Web Development</h3>
         <p class="text-sm leading-relaxed" style="color:#5C5C5C">Building purpose-driven websites for institutional communications, including the PCU Global International Office platform.</p>
         <div class="mt-4 flex items-center gap-2" style="color:#4A6B8A"><span style="width:18px;height:2px;background:currentColor;border-radius:2px;display:inline-block"></span><span class="text-xs font-medium">Active</span></div>
        </div>
        <div class="card p-7 about-card-lift" style="background:#fff">
         <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-5" style="background:rgba(107,79,50,0.08)"><i data-lucide="moon" style="width:20px;height:20px;color:#6B4F32"></i></div>
         <h3 class="font-heading font-semibold text-base mb-2 font-editorial" style="color:#1C1C1E">CroissantsMoon</h3>
         <p class="text-sm leading-relaxed" style="color:#5C5C5C">Developing a creative boutique studio identity — editorial design, brand systems, and curated digital experiences.</p>
         <div class="mt-4 flex items-center gap-2" style="color:#6B4F32"><span style="width:18px;height:2px;background:currentColor;border-radius:2px;display:inline-block"></span><span class="text-xs font-medium">Developing</span></div>
        </div>
        <div class="card p-7 about-card-lift" style="background:#fff">
         <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-5" style="background:rgba(75,85,65,0.08)"><i data-lucide="pen-line" style="width:20px;height:20px;color:#4A5235"></i></div>
         <h3 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">Writing &amp; Reflection</h3>
         <p class="text-sm leading-relaxed" style="color:#5C5C5C">Exploring ideas at the intersection of international education, leadership, and creative practice through essays and notes.</p>
         <div class="mt-4 flex items-center gap-2" style="color:#4A5235"><span style="width:18px;height:2px;background:currentColor;border-radius:2px;display:inline-block"></span><span class="text-xs font-medium">Ongoing</span></div>
        </div>
        <div class="card p-7 about-card-lift" style="background:#fff">
         <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-5" style="background:rgba(28,28,30,0.06)"><i data-lucide="network" style="width:20px;height:20px;color:#1C1C1E"></i></div>
         <h3 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">Interdisciplinary Problem Solving</h3>
         <p class="text-sm leading-relaxed" style="color:#5C5C5C">Connecting international education, systems thinking, digital design, and creative strategy into integrated solutions.</p>
         <div class="mt-4 flex items-center gap-2" style="color:#1C1C1E"><span style="width:18px;height:2px;background:currentColor;border-radius:2px;display:inline-block"></span><span class="text-xs font-medium">Always</span></div>
        </div>
       </div>
      </div>
     </div>

     <!-- ═══ 4. EXPERIENCE TIMELINE ═══ -->
     <div style="padding:72px 24px;background:#FAFAF8">
      <div class="max-w-6xl mx-auto">
       <div class="mb-4">
        <div class="flex items-center gap-3 mb-4"><span class="accent-line"></span><span class="label-small">Career Timeline</span></div>
        <h2 class="font-heading font-bold text-3xl" style="color:#1C1C1E">Professional Experience</h2>
       </div>
       <p class="text-sm mb-12" style="color:#5C5C5C;max-width:520px">3+ years in international higher education — building partnerships, leading mobility programs, and supporting global students across Surabaya.</p>
       <div class="relative">
        <div class="absolute left-5 top-2 bottom-2 w-px hidden md:block" style="background:linear-gradient(to bottom,#1E3A5F,#4A6B8A,#8B7355,rgba(28,28,30,0.06))"></div>
        <div class="space-y-4">

         <div class="md:pl-16 relative">
          <div class="hidden md:flex absolute left-0 top-6 w-10 h-10 rounded-full items-center justify-center z-10" style="background:#1E3A5F;box-shadow:0 0 0 3px #FAFAF8,0 0 0 5px #1E3A5F;animation:about-tl-pulse 2.5s ease-in-out infinite"><i data-lucide="briefcase" style="width:16px;height:16px;color:#fff"></i></div>
          <div class="card overflow-hidden">
           <button class="w-full text-left p-6" onclick="toggleAboutTimeline(this)">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
             <div>
              <div class="flex items-center gap-2 mb-1.5"><span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold" style="background:rgba(30,58,95,0.1);color:#1E3A5F">Current</span></div>
              <h3 class="font-heading font-semibold text-lg" style="color:#1C1C1E">International Partnership</h3>
              <p class="text-sm font-medium mt-0.5" style="color:#1E3A5F">Petra Christian University · Surabaya</p>
              <ul class="mt-2 space-y-1">
               <li class="flex gap-1.5 text-xs" style="color:#5C5C5C"><i data-lucide="check" style="width:11px;height:11px;color:#1E3A5F;flex-shrink:0;margin-top:1px"></i>Manage 30+ institutional partners & review 25+ MoU/MoA monthly</li>
               <li class="flex gap-1.5 text-xs" style="color:#5C5C5C"><i data-lucide="check" style="width:11px;height:11px;color:#1E3A5F;flex-shrink:0;margin-top:1px"></i>Facilitate 15+ strategic meetings per month</li>
               <li class="flex gap-1.5 text-xs" style="color:#5C5C5C"><i data-lucide="check" style="width:11px;height:11px;color:#1E3A5F;flex-shrink:0;margin-top:1px"></i>Initiate collaborations for international grants & global presence</li>
              </ul>
             </div>
             <div class="flex items-center gap-3 flex-shrink-0">
              <span class="label-small" style="color:#767676">Mar 2026 – Present</span>
              <i data-lucide="chevron-down" class="timeline-chevron" style="width:16px;height:16px;color:#767676;transition:transform .25s;flex-shrink:0"></i>
             </div>
            </div>
           </button>
           <div class="timeline-body" style="display:none;border-top:1px solid rgba(28,28,30,0.06)">
            <div class="p-6 pt-5">
             <p class="text-sm leading-relaxed mb-4" style="color:#5C5C5C">Building and strengthening institutional partnerships to expand PCU's global presence and international grant access.</p>
             <ul class="space-y-2 mb-5">
              <li class="flex gap-2 text-sm" style="color:#5C5C5C"><i data-lucide="check" style="width:14px;height:14px;color:#1E3A5F;flex-shrink:0;margin-top:2px"></i>Manage communication with 30+ institutional partners monthly</li>
              <li class="flex gap-2 text-sm" style="color:#5C5C5C"><i data-lucide="check" style="width:14px;height:14px;color:#1E3A5F;flex-shrink:0;margin-top:2px"></i>Review 25+ partnership agreements (MoU/MoA) per month for compliance</li>
              <li class="flex gap-2 text-sm" style="color:#5C5C5C"><i data-lucide="check" style="width:14px;height:14px;color:#1E3A5F;flex-shrink:0;margin-top:2px"></i>Facilitate 15+ strategic partnership meetings per month with minutes within 24hrs</li>
              <li class="flex gap-2 text-sm" style="color:#5C5C5C"><i data-lucide="check" style="width:14px;height:14px;color:#1E3A5F;flex-shrink:0;margin-top:2px"></i>Initiate collaborations to expand international grant access</li>
             </ul>
             <div class="flex flex-wrap gap-2"><span class="tag">International Partnership</span><span class="tag">MoU/MoA</span><span class="tag">Stakeholder Management</span><span class="tag">Strategic Communications</span></div>
            </div>
           </div>
          </div>
         </div>

         <div class="md:pl-16 relative">
          <div class="hidden md:flex absolute left-0 top-6 w-10 h-10 rounded-full items-center justify-center z-10" style="background:#4A6B8A;box-shadow:0 0 0 3px #FAFAF8,0 0 0 5px #4A6B8A"><i data-lucide="plane" style="width:16px;height:16px;color:#fff"></i></div>
          <div class="card overflow-hidden">
           <button class="w-full text-left p-6" onclick="toggleAboutTimeline(this)">
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
             <div class="flex-1">
              <p class="text-sm font-semibold mb-2" style="color:#4A6B8A">Airlangga Global Engagement · Surabaya</p>
              <div class="mb-3">
               <h3 class="font-heading font-semibold text-base" style="color:#1C1C1E">International Mobility &amp; Global Reputation</h3>
               <p class="text-xs mb-1.5" style="color:#767676">Sep 2025 – Mar 2026</p>
               <ul class="space-y-1">
                <li class="flex gap-1.5 text-xs" style="color:#5C5C5C"><i data-lucide="check" style="width:11px;height:11px;color:#4A6B8A;flex-shrink:0;margin-top:1px"></i>Managed 5 exchange programs end-to-end with IDR 50–100M budgets</li>
                <li class="flex gap-1.5 text-xs" style="color:#5C5C5C"><i data-lucide="check" style="width:11px;height:11px;color:#4A6B8A;flex-shrink:0;margin-top:1px"></i>Delivered quality experiences for 120+ international students per semester</li>
               </ul>
              </div>
              <div style="border-top:1px solid rgba(28,28,30,0.06);margin-bottom:12px"></div>
              <div>
               <h3 class="font-heading font-semibold text-base" style="color:#1C1C1E">International Student &amp; Mobility</h3>
               <p class="text-xs mb-1.5" style="color:#767676">Jan 2024 – Sep 2025</p>
               <ul class="space-y-1">
                <li class="flex gap-1.5 text-xs" style="color:#5C5C5C"><i data-lucide="check" style="width:11px;height:11px;color:#4A6B8A;flex-shrink:0;margin-top:1px"></i>Welfare support for 100+ students — accommodation, healthcare, immigration</li>
                <li class="flex gap-1.5 text-xs" style="color:#5C5C5C"><i data-lucide="check" style="width:11px;height:11px;color:#4A6B8A;flex-shrink:0;margin-top:1px"></i>Coordinated across 10+ stakeholders including hospitals, banks & immigration</li>
               </ul>
              </div>
             </div>
             <div class="flex items-center gap-3 flex-shrink-0">
              <span class="label-small" style="color:#767676">Jan 2024 – Mar 2026</span>
              <i data-lucide="chevron-down" class="timeline-chevron" style="width:16px;height:16px;color:#767676;transition:transform .25s;flex-shrink:0"></i>
             </div>
            </div>
           </button>
           <div class="timeline-body" style="display:none;border-top:1px solid rgba(28,28,30,0.06)">
            <div class="p-6 pt-5">
             <div class="mb-5">
              <h4 class="font-heading font-semibold text-sm mb-1" style="color:#1C1C1E">International Mobility &amp; Global Reputation</h4>
              <p class="text-xs mb-3" style="color:#767676">Sep 2025 – Mar 2026</p>
              <ul class="space-y-2 mb-3">
               <li class="flex gap-2 text-sm" style="color:#5C5C5C"><i data-lucide="check" style="width:14px;height:14px;color:#4A6B8A;flex-shrink:0;margin-top:2px"></i>Managed 5 end-to-end exchange programs — promotion, pre-departure, arrival, study period, post-program</li>
               <li class="flex gap-2 text-sm" style="color:#5C5C5C"><i data-lucide="check" style="width:14px;height:14px;color:#4A6B8A;flex-shrink:0;margin-top:2px"></i>Budget management of IDR 50–100M per program across 50+ stakeholders</li>
               <li class="flex gap-2 text-sm" style="color:#5C5C5C"><i data-lucide="check" style="width:14px;height:14px;color:#4A6B8A;flex-shrink:0;margin-top:2px"></i>High-quality exchange experiences for 120+ international students per semester</li>
              </ul>
              <div class="flex flex-wrap gap-2"><span class="tag">Exchange Programs</span><span class="tag">Budget Management</span><span class="tag">Project Management</span><span class="tag">Leadership</span></div>
             </div>
             <div style="border-top:1px solid rgba(28,28,30,0.06);margin-bottom:20px"></div>
             <div>
              <h4 class="font-heading font-semibold text-sm mb-1" style="color:#1C1C1E">International Student &amp; Mobility</h4>
              <p class="text-xs mb-3" style="color:#767676">Jan 2024 – Sep 2025</p>
              <ul class="space-y-2 mb-3">
               <li class="flex gap-2 text-sm" style="color:#5C5C5C"><i data-lucide="check" style="width:14px;height:14px;color:#4A6B8A;flex-shrink:0;margin-top:2px"></i>End-to-end welfare support — accommodation, healthcare, insurance, banking, immigration</li>
               <li class="flex gap-2 text-sm" style="color:#5C5C5C"><i data-lucide="check" style="width:14px;height:14px;color:#4A6B8A;flex-shrink:0;margin-top:2px"></i>Coordinated across 10+ stakeholders including faculties, hospitals, banks, immigration</li>
               <li class="flex gap-2 text-sm" style="color:#5C5C5C"><i data-lucide="check" style="width:14px;height:14px;color:#4A6B8A;flex-shrink:0;margin-top:2px"></i>Managed KNB &amp; TIAS government scholarship processing and student welfare cases</li>
              </ul>
              <div class="flex flex-wrap gap-2"><span class="tag">Student Support</span><span class="tag">Welfare Coordination</span><span class="tag">Immigration</span><span class="tag">Stakeholder Management</span></div>
             </div>
            </div>
           </div>
          </div>
         </div>

         <div class="md:pl-16 relative">
          <div class="hidden md:flex absolute left-0 top-6 w-10 h-10 rounded-full items-center justify-center z-10" style="background:#8B7355;box-shadow:0 0 0 3px #FAFAF8,0 0 0 5px #8B7355"><i data-lucide="book-open" style="width:16px;height:16px;color:#fff"></i></div>
          <div class="card overflow-hidden">
           <button class="w-full text-left p-6" onclick="toggleAboutTimeline(this)">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
             <div>
              <h3 class="font-heading font-semibold text-lg" style="color:#1C1C1E">Assistant Lecturer — Foreign Policy Analysis</h3>
              <p class="text-sm font-medium mt-0.5" style="color:#8B7355">Universitas Airlangga</p>
              <ul class="mt-2 space-y-1">
               <li class="flex gap-1.5 text-xs" style="color:#5C5C5C"><i data-lucide="check" style="width:11px;height:11px;color:#8B7355;flex-shrink:0;margin-top:1px"></i>Co-facilitated Foreign Policy Analysis for undergraduate IR students</li>
               <li class="flex gap-1.5 text-xs" style="color:#5C5C5C"><i data-lucide="check" style="width:11px;height:11px;color:#8B7355;flex-shrink:0;margin-top:1px"></i>Moderated debates & managed grading, scheduling, and coordination</li>
              </ul>
             </div>
             <div class="flex items-center gap-3 flex-shrink-0">
              <span class="label-small" style="color:#767676">Sep 2023 – Jan 2024</span>
              <i data-lucide="chevron-down" class="timeline-chevron" style="width:16px;height:16px;color:#767676;transition:transform .25s;flex-shrink:0"></i>
             </div>
            </div>
           </button>
           <div class="timeline-body" style="display:none;border-top:1px solid rgba(28,28,30,0.06)">
            <div class="p-6 pt-5">
             <ul class="space-y-2 mb-5">
              <li class="flex gap-2 text-sm" style="color:#5C5C5C"><i data-lucide="check" style="width:14px;height:14px;color:#8B7355;flex-shrink:0;margin-top:2px"></i>Co-facilitated Foreign Policy Analysis discussions for undergraduate IR students</li>
              <li class="flex gap-2 text-sm" style="color:#5C5C5C"><i data-lucide="check" style="width:14px;height:14px;color:#8B7355;flex-shrink:0;margin-top:2px"></i>Moderated debates and facilitated critical analysis sessions</li>
              <li class="flex gap-2 text-sm" style="color:#5C5C5C"><i data-lucide="check" style="width:14px;height:14px;color:#8B7355;flex-shrink:0;margin-top:2px"></i>Managed grading, scheduling, and administrative coordination</li>
             </ul>
             <div class="flex flex-wrap gap-2"><span class="tag">Teaching</span><span class="tag">Foreign Policy</span><span class="tag">Academic Leadership</span></div>
            </div>
           </div>
          </div>
         </div>

         <div class="md:pl-16 relative">
          <div class="hidden md:flex absolute left-0 top-6 w-10 h-10 rounded-full items-center justify-center z-10" style="background:#8B7355;box-shadow:0 0 0 3px #FAFAF8,0 0 0 5px #8B7355"><i data-lucide="mic-2" style="width:16px;height:16px;color:#fff"></i></div>
          <div class="card overflow-hidden">
           <button class="w-full text-left p-6" onclick="toggleAboutTimeline(this)">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
             <div>
              <h3 class="font-heading font-semibold text-lg" style="color:#1C1C1E">Intl. Program &amp; Inbound Coordinator</h3>
              <p class="text-sm font-medium mt-0.5" style="color:#8B7355">Koordinasi Informasi dan Kehumasan FISIP Unair</p>
              <ul class="mt-2 space-y-1">
               <li class="flex gap-1.5 text-xs" style="color:#5C5C5C"><i data-lucide="check" style="width:11px;height:11px;color:#8B7355;flex-shrink:0;margin-top:1px"></i>Coordinated logistics for foreign lecturers and visiting students</li>
               <li class="flex gap-1.5 text-xs" style="color:#5C5C5C"><i data-lucide="check" style="width:11px;height:11px;color:#8B7355;flex-shrink:0;margin-top:1px"></i>English–Indonesian interpretation at conferences and guest lectures</li>
              </ul>
             </div>
             <div class="flex items-center gap-3 flex-shrink-0">
              <span class="label-small" style="color:#767676">Jun 2023 – Jan 2024</span>
              <i data-lucide="chevron-down" class="timeline-chevron" style="width:16px;height:16px;color:#767676;transition:transform .25s;flex-shrink:0"></i>
             </div>
            </div>
           </button>
           <div class="timeline-body" style="display:none;border-top:1px solid rgba(28,28,30,0.06)">
            <div class="p-6 pt-5">
             <ul class="space-y-2 mb-5">
              <li class="flex gap-2 text-sm" style="color:#5C5C5C"><i data-lucide="check" style="width:14px;height:14px;color:#8B7355;flex-shrink:0;margin-top:2px"></i>Coordinated logistics and program delivery for foreign lecturers and visiting students</li>
              <li class="flex gap-2 text-sm" style="color:#5C5C5C"><i data-lucide="check" style="width:14px;height:14px;color:#8B7355;flex-shrink:0;margin-top:2px"></i>English–Indonesian interpretation at conferences, guest lectures, and company visits</li>
              <li class="flex gap-2 text-sm" style="color:#5C5C5C"><i data-lucide="check" style="width:14px;height:14px;color:#8B7355;flex-shrink:0;margin-top:2px"></i>Primary point of contact for all inbound international guests</li>
             </ul>
             <div class="flex flex-wrap gap-2"><span class="tag">International Coordination</span><span class="tag">Interpretation</span><span class="tag">Event Management</span></div>
            </div>
           </div>
          </div>
         </div>

         <div class="md:pl-16 relative">
          <div class="hidden md:flex absolute left-0 top-6 w-10 h-10 rounded-full items-center justify-center z-10" style="background:rgba(28,28,30,0.18);box-shadow:0 0 0 3px #FAFAF8"><i data-lucide="search" style="width:16px;height:16px;color:#5C5C5C"></i></div>
          <div class="card overflow-hidden">
           <button class="w-full text-left p-6" onclick="toggleAboutTimeline(this)">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
             <div>
              <h3 class="font-heading font-semibold text-lg" style="color:#1C1C1E">Research Assistant</h3>
              <p class="text-sm font-medium mt-0.5" style="color:#5C5C5C">Universitas Airlangga</p>
              <ul class="mt-2 space-y-1">
               <li class="flex gap-1.5 text-xs" style="color:#5C5C5C"><i data-lucide="check" style="width:11px;height:11px;color:#5C5C5C;flex-shrink:0;margin-top:1px"></i>Researched U.S.–ASEAN economic cooperation across Biden &amp; Trump administrations</li>
               <li class="flex gap-1.5 text-xs" style="color:#5C5C5C"><i data-lucide="check" style="width:11px;height:11px;color:#5C5C5C;flex-shrink:0;margin-top:1px"></i>Contributed to paper presented at the 9th ICoCSPA 2023</li>
              </ul>
             </div>
             <div class="flex items-center gap-3 flex-shrink-0">
              <span class="label-small" style="color:#767676">May 2023 – Jan 2024</span>
              <i data-lucide="chevron-down" class="timeline-chevron" style="width:16px;height:16px;color:#767676;transition:transform .25s;flex-shrink:0"></i>
             </div>
            </div>
           </button>
           <div class="timeline-body" style="display:none;border-top:1px solid rgba(28,28,30,0.06)">
            <div class="p-6 pt-5">
             <ul class="space-y-2 mb-5">
              <li class="flex gap-2 text-sm" style="color:#5C5C5C"><i data-lucide="check" style="width:14px;height:14px;color:#5C5C5C;flex-shrink:0;margin-top:2px"></i>Researched U.S.–ASEAN economic cooperation across Biden &amp; Trump administrations</li>
              <li class="flex gap-2 text-sm" style="color:#5C5C5C"><i data-lucide="check" style="width:14px;height:14px;color:#5C5C5C;flex-shrink:0;margin-top:2px"></i>Contributed to paper presented at the 9th ICoCSPA 2023</li>
              <li class="flex gap-2 text-sm" style="color:#5C5C5C"><i data-lucide="check" style="width:14px;height:14px;color:#5C5C5C;flex-shrink:0;margin-top:2px"></i>Synthesized U.S.–China economic dynamics into structured research briefs</li>
             </ul>
             <div class="flex flex-wrap gap-2"><span class="tag">Academic Research</span><span class="tag">International Relations</span><span class="tag">Policy Analysis</span></div>
            </div>
           </div>
          </div>
         </div>

        </div>
       </div>
      </div>
     </div>

     <!-- ═══ 5. CORE EXPERTISE ═══ -->
     <div style="padding:72px 24px;background:#F2ECE4">
      <div class="max-w-6xl mx-auto">
       <div class="flex items-center gap-3 mb-4"><span class="accent-line"></span><span class="label-small">Areas of Expertise</span></div>
       <h2 class="font-heading font-bold text-3xl mb-2" style="color:#1C1C1E">Core Expertise</h2>
       <p class="text-sm mb-10" style="color:#5C5C5C;max-width:480px">Competencies built through 3+ years of hands-on international education and creative digital work.</p>
       <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div class="card p-6 about-card-lift" style="background:#fff">
         <div class="flex items-start gap-4"><div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(30,58,95,0.08)"><i data-lucide="handshake" style="width:18px;height:18px;color:#1E3A5F"></i></div><div><h3 class="font-heading font-semibold text-sm mb-1" style="color:#1C1C1E">Strategic Partnerships</h3><p class="text-xs leading-relaxed" style="color:#5C5C5C">Managing 30+ institutional partners &amp; 15+ strategic meetings per month</p></div></div>
        </div>
        <div class="card p-6 about-card-lift" style="background:#fff">
         <div class="flex items-start gap-4"><div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(30,58,95,0.08)"><i data-lucide="file-check" style="width:18px;height:18px;color:#1E3A5F"></i></div><div><h3 class="font-heading font-semibold text-sm mb-1" style="color:#1C1C1E">MoU / MoA Coordination</h3><p class="text-xs leading-relaxed" style="color:#5C5C5C">Reviewing 25+ partnership agreements monthly for compliance &amp; alignment</p></div></div>
        </div>
        <div class="card p-6 about-card-lift" style="background:#fff">
         <div class="flex items-start gap-4"><div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(74,107,138,0.08)"><i data-lucide="plane" style="width:18px;height:18px;color:#4A6B8A"></i></div><div><h3 class="font-heading font-semibold text-sm mb-1" style="color:#1C1C1E">Student Mobility</h3><p class="text-xs leading-relaxed" style="color:#5C5C5C">End-to-end management of 5 exchange programs, 120+ students per semester</p></div></div>
        </div>
        <div class="card p-6 about-card-lift" style="background:#fff">
         <div class="flex items-start gap-4"><div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(74,107,138,0.08)"><i data-lucide="heart" style="width:18px;height:18px;color:#4A6B8A"></i></div><div><h3 class="font-heading font-semibold text-sm mb-1" style="color:#1C1C1E">Student Welfare &amp; Support</h3><p class="text-xs leading-relaxed" style="color:#5C5C5C">Comprehensive non-academic support for 100+ international students per semester</p></div></div>
        </div>
        <div class="card p-6 about-card-lift" style="background:#fff">
         <div class="flex items-start gap-4"><div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(139,115,85,0.08)"><i data-lucide="bar-chart-2" style="width:18px;height:18px;color:#8B7355"></i></div><div><h3 class="font-heading font-semibold text-sm mb-1" style="color:#1C1C1E">Program &amp; Budget Management</h3><p class="text-xs leading-relaxed" style="color:#5C5C5C">IDR 50–100M per-program budgets, 50+ stakeholders, end-to-end delivery</p></div></div>
        </div>
        <div class="card p-6 about-card-lift" style="background:#fff">
         <div class="flex items-start gap-4"><div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(74,107,138,0.08)"><i data-lucide="languages" style="width:18px;height:18px;color:#4A6B8A"></i></div><div><h3 class="font-heading font-semibold text-sm mb-1" style="color:#1C1C1E">Cross-Cultural Communication</h3><p class="text-xs leading-relaxed" style="color:#5C5C5C">English–Indonesian interpretation at international conferences &amp; company visits</p></div></div>
        </div>
        <div class="card p-6 about-card-lift" style="background:#fff">
         <div class="flex items-start gap-4"><div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(139,115,85,0.08)"><i data-lucide="layout-dashboard" style="width:18px;height:18px;color:#8B7355"></i></div><div><h3 class="font-heading font-semibold text-sm mb-1" style="color:#1C1C1E">UI/UX Design</h3><p class="text-xs leading-relaxed" style="color:#5C5C5C">User-centered design for institutional platforms and international program portals</p></div></div>
        </div>
        <div class="card p-6 about-card-lift" style="background:#fff">
         <div class="flex items-start gap-4"><div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(139,115,85,0.08)"><i data-lucide="code-2" style="width:18px;height:18px;color:#8B7355"></i></div><div><h3 class="font-heading font-semibold text-sm mb-1" style="color:#1C1C1E">Full-Stack Development</h3><p class="text-xs leading-relaxed" style="color:#5C5C5C">Building responsive, purpose-driven websites for institutional communications</p></div></div>
        </div>
        <div class="card p-6 about-card-lift" style="background:#fff">
         <div class="flex items-start gap-4"><div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(28,28,30,0.06)"><i data-lucide="network" style="width:18px;height:18px;color:#1C1C1E"></i></div><div><h3 class="font-heading font-semibold text-sm mb-1" style="color:#1C1C1E">Systems Thinking</h3><p class="text-xs leading-relaxed" style="color:#5C5C5C">Connecting education, digital design, and creative strategy into integrated frameworks</p></div></div>
        </div>
       </div>
      </div>
     </div>

     <!-- ═══ 6. EDUCATION ═══ -->
     <div style="padding:72px 24px;background:#FAFAF8">
      <div class="max-w-6xl mx-auto">
       <div class="flex items-center gap-3 mb-4"><span class="accent-line"></span><span class="label-small">Academic Background</span></div>
       <h2 class="font-heading font-bold text-3xl mb-10" style="color:#1C1C1E">Education</h2>
       <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="card p-8" style="border-left:4px solid #1E3A5F">
         <div class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(30,58,95,0.08)"><i data-lucide="graduation-cap" style="width:22px;height:22px;color:#1E3A5F"></i></div>
          <div>
           <h3 class="font-heading font-bold text-lg mb-1" style="color:#1C1C1E">Bachelor's in International Relations</h3>
           <p class="text-sm font-medium mb-1" style="color:#1E3A5F">Universitas Airlangga</p>
           <p class="label-small mb-3" style="color:#767676">July 2020 – March 2024</p>
           <p class="text-sm leading-relaxed" style="color:#5C5C5C">International relations theory, foreign policy analysis, and cross-cultural dynamics. Published academic research on U.S.–ASEAN cooperation and Middle East diplomacy. Presented at 9th ICoCSPA 2023.</p>
          </div>
         </div>
        </div>
        <div class="card p-8" style="border-left:4px solid #8B7355">
         <div class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(139,115,85,0.08)"><i data-lucide="award" style="width:22px;height:22px;color:#8B7355"></i></div>
          <div>
           <h3 class="font-heading font-bold text-lg mb-1" style="color:#1C1C1E">Academic Honors &amp; Publications</h3>
           <p class="text-sm font-medium mb-1" style="color:#8B7355">Research &amp; Recognition</p>
           <p class="label-small mb-3" style="color:#767676">2022 – 2024</p>
           <p class="text-sm leading-relaxed" style="color:#5C5C5C">Gold Medalist — World Youth Invention &amp; Innovation Award 2022. Published peer-reviewed papers on U.S. foreign policy, Korea–China THAAD dynamics, and the Abraham Accords.</p>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>

     <!-- ═══ 7. SELECTED PROJECTS ═══ -->
     <div style="padding:72px 24px;background:#F2ECE4">
      <div class="max-w-6xl mx-auto">
       <div class="flex items-center gap-3 mb-4"><span class="accent-line"></span><span class="label-small">Featured Work</span></div>
       <h2 class="font-heading font-bold text-3xl mb-2" style="color:#1C1C1E">Selected Projects</h2>
       <p class="text-sm mb-10" style="color:#5C5C5C;max-width:480px">International education programs, digital platforms, and creative initiatives that define my practice.</p>

       <!-- 2×2 grid: AMERTA · ACI · International Office Website · Partnership Dashboard -->
       <div class="grid md:grid-cols-2 gap-6 mb-6">

        <!-- AMERTA -->
        <button onclick="goToPage('amerta')" class="card text-left group overflow-hidden about-card-lift" style="background:#fff">
         <div class="h-40 relative overflow-hidden">
          <img loading="lazy" src="assets/images/student-services/tailor-made/griffith-unair-2.JPEG" alt="AMERTA" class="w-full h-full object-cover">
         </div>
         <div class="p-6">
          <div class="label-small mb-2" style="color:#4A6B8A">Exchange Program · Airlangga</div>
          <h3 class="font-heading font-bold text-lg mb-2" style="color:#1C1C1E">AMERTA</h3>
          <p class="text-sm leading-relaxed mb-4" style="color:#5C5C5C">End-to-end semester exchange — 120+ students, IDR 50–100M budget, 5 program phases.</p>
          <div class="flex flex-wrap gap-1.5 mb-4"><span class="tag">Student Mobility</span><span class="tag">Project Management</span><span class="tag">Leadership</span></div>
          <div class="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all" style="color:#1E3A5F">View case study <i data-lucide="arrow-right" style="width:14px;height:14px"></i></div>
         </div>
        </button>

        <!-- ACI -->
        <button onclick="goToPage('aci')" class="card text-left group overflow-hidden about-card-lift" style="background:#fff">
         <div class="h-40 relative overflow-hidden">
          <img loading="lazy" src="assets/images/aci/aci-4.JPEG" alt="ACI Cultural Immersion" class="w-full h-full object-cover" style="object-position:center 30%">
         </div>
         <div class="p-6">
          <div class="label-small mb-2" style="color:#6B4F32">Cultural Immersion · Airlangga</div>
          <h3 class="font-heading font-bold text-lg mb-2" style="color:#1C1C1E">ACI</h3>
          <p class="text-sm leading-relaxed mb-4" style="color:#5C5C5C">Structured engagement program connecting international and local students through cultural experience.</p>
          <div class="flex flex-wrap gap-1.5 mb-4"><span class="tag">Student Support</span><span class="tag">Project Management</span><span class="tag">Cross-Cultural</span></div>
          <div class="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all" style="color:#6B4F32">View case study <i data-lucide="arrow-right" style="width:14px;height:14px"></i></div>
         </div>
        </button>

        <!-- International Office Website -->
        <button onclick="goToPage('web-pcu-global-intl')" class="card text-left group overflow-hidden about-card-lift" style="background:#fff">
         <div class="h-40 relative overflow-hidden" style="background:#f0f4f8">
          <iframe src="https://international-office-website.vercel.app/" style="position:absolute;top:0;left:0;width:300%;height:420px;transform:scale(0.333);transform-origin:top left;border:none;pointer-events:none" loading="lazy" sandbox="allow-scripts allow-same-origin" aria-hidden="true" title="PCU International Office Website preview"></iframe>
          <div class="absolute inset-0" style="background:linear-gradient(to bottom,transparent 55%,rgba(255,255,255,0.92))"></div>
         </div>
         <div class="p-6">
          <div class="label-small mb-2" style="color:#003087">Web Platform · PCU</div>
          <h3 class="font-heading font-bold text-lg mb-2" style="color:#1C1C1E">International Office Website</h3>
          <p class="text-sm leading-relaxed mb-4" style="color:#5C5C5C">Rebuilding PCU's International Office digital presence — for inbound students, outbound programs, and partners.</p>
          <div class="flex flex-wrap gap-1.5 mb-4"><span class="tag">Web Development</span><span class="tag">UI/UX Design</span><span class="tag">Digital Strategy</span></div>
          <div class="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all" style="color:#003087">View case study <i data-lucide="arrow-right" style="width:14px;height:14px"></i></div>
         </div>
        </button>

        <!-- Partnership Dashboard -->
        <button onclick="goToPage('web-dashboard-partnership')" class="card text-left group overflow-hidden about-card-lift" style="background:#fff">
         <div class="h-40 relative overflow-hidden" style="background:linear-gradient(135deg,#1E3A5F 0%,#2C4A72 100%)">
          <div class="absolute inset-0 flex flex-col justify-center px-6 gap-2.5">
           <div style="height:5px;background:rgba(255,255,255,0.45);border-radius:3px;width:78%"></div>
           <div style="height:5px;background:rgba(255,255,255,0.25);border-radius:3px;width:55%"></div>
           <div style="height:5px;background:rgba(255,255,255,0.35);border-radius:3px;width:88%"></div>
           <div style="height:5px;background:rgba(139,115,85,0.65);border-radius:3px;width:43%"></div>
           <div style="height:5px;background:rgba(255,255,255,0.2);border-radius:3px;width:66%"></div>
          </div>
          <i data-lucide="bar-chart-2" style="position:absolute;right:20px;bottom:16px;width:40px;height:40px;color:rgba(255,255,255,0.18)"></i>
          <div class="absolute inset-0" style="background:linear-gradient(to bottom,transparent 60%,rgba(30,58,95,0.5))"></div>
         </div>
         <div class="p-6">
          <div class="label-small mb-2" style="color:#1E3A5F">Dashboard · PCU</div>
          <h3 class="font-heading font-bold text-lg mb-2" style="color:#1C1C1E">Partnership Dashboard</h3>
          <p class="text-sm leading-relaxed mb-4" style="color:#5C5C5C">A data dashboard for visualising and managing PCU's international partnership network and grants pipeline.</p>
          <div class="flex flex-wrap gap-1.5 mb-4"><span class="tag">Data Visualization</span><span class="tag">UI/UX Design</span><span class="tag">Digital Strategy</span></div>
          <div class="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all" style="color:#1E3A5F">View case study <i data-lucide="arrow-right" style="width:14px;height:14px"></i></div>
         </div>
        </button>

       </div>

       <!-- Big CroissantsMoon card — celestial theme -->
       <button onclick="goToPage('croissantsmoon')" class="card w-full text-left group overflow-hidden about-card-lift" style="background:#071126;border-color:rgba(111,168,255,0.14)">
        <div class="flex flex-col md:flex-row">
         <!-- Celestial visual panel -->
         <div class="h-56 md:h-auto md:w-72 lg:w-80 relative overflow-hidden flex-shrink-0" style="background:linear-gradient(145deg,#071126 0%,#0B1E3A 55%,#183B6B 100%)">
          <!-- Stars -->
          <div style="position:absolute;width:3px;height:3px;border-radius:50%;background:#D9E6FF;top:18%;left:22%;animation:about-twinkle 2.2s ease-in-out infinite"></div>
          <div style="position:absolute;width:2px;height:2px;border-radius:50%;background:#8FA8D6;top:35%;left:68%;animation:about-twinkle 3.5s ease-in-out infinite .6s"></div>
          <div style="position:absolute;width:2px;height:2px;border-radius:50%;background:#D9E6FF;top:62%;left:38%;animation:about-twinkle 2.7s ease-in-out infinite 1.1s"></div>
          <div style="position:absolute;width:1px;height:1px;border-radius:50%;background:#6FA8FF;top:72%;left:78%;animation:about-twinkle 1.9s ease-in-out infinite .4s"></div>
          <div style="position:absolute;width:2px;height:2px;border-radius:50%;background:#D4B15A;top:22%;left:58%;animation:about-twinkle 3.1s ease-in-out infinite .9s"></div>
          <div style="position:absolute;width:1px;height:1px;border-radius:50%;background:#D9E6FF;top:50%;left:15%;animation:about-twinkle 2.5s ease-in-out infinite 1.5s"></div>
          <div style="position:absolute;width:2px;height:2px;border-radius:50%;background:#8FA8D6;top:82%;left:52%;animation:about-twinkle 3.8s ease-in-out infinite .2s"></div>
          <!-- Moon -->
          <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:76px;height:76px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#D9E6FF 0%,#8FA8D6 50%,#4A6B8A 100%);box-shadow:0 0 40px rgba(217,230,255,0.2),0 0 80px rgba(111,168,255,0.1);animation:about-float 4.5s ease-in-out infinite"></div>
          <!-- Shadow that makes crescent -->
          <div style="position:absolute;top:50%;left:50%;transform:translate(-32%,-50%);width:76px;height:76px;border-radius:50%;background:#071126;box-shadow:inset -2px -2px 0 rgba(212,177,90,0.2)"></div>
          <!-- Radial glow -->
          <div style="position:absolute;inset:0;background:radial-gradient(circle at 50% 50%,rgba(212,177,90,0.06),transparent 65%)"></div>
         </div>
         <!-- Content -->
         <div class="p-8 flex flex-col justify-center">
          <div class="label-small mb-3" style="color:rgba(212,177,90,0.65);letter-spacing:.12em">Creative Identity · In Development</div>
          <h3 class="font-heading font-bold mb-3 font-editorial" style="color:#D9E6FF;font-style:italic;font-size:clamp(1.5rem,3vw,2.2rem);letter-spacing:-.01em;line-height:1.1">CroissantsMoon</h3>
          <p class="text-sm leading-relaxed mb-6" style="color:#8FA8D6;max-width:420px">A boutique creative studio — editorial design, brand systems, and curated digital experiences. Where craft meets the cosmos.</p>
          <div class="flex flex-wrap gap-1.5 mb-6">
           <span class="tag" style="color:rgba(217,230,255,0.45);border-color:rgba(111,168,255,0.15)">Branding</span>
           <span class="tag" style="color:rgba(217,230,255,0.45);border-color:rgba(111,168,255,0.15)">Creative Direction</span>
           <span class="tag" style="color:rgba(217,230,255,0.45);border-color:rgba(111,168,255,0.15)">UI/UX</span>
           <span class="tag" style="color:rgba(217,230,255,0.45);border-color:rgba(111,168,255,0.15)">Web Development</span>
          </div>
          <div class="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all" style="color:#D4B15A">Explore the studio <i data-lucide="arrow-right" style="width:14px;height:14px"></i></div>
         </div>
        </div>
       </button>

       <div class="mt-8 text-center">
        <button onclick="goToPage('projects-overview')" class="btn-outline text-sm px-6 py-2.5 rounded-full inline-flex items-center gap-2">All Projects <i data-lucide="arrow-right" style="width:14px;height:14px"></i></button>
       </div>
      </div>
     </div>

     <!-- ═══ 8. SKILL ECOSYSTEM ═══ -->
     <div style="padding:72px 24px;background:#FAFAF8">
      <div class="max-w-6xl mx-auto">
       <div class="grid lg:grid-cols-5 gap-12 items-start">

        <!-- Sticky heading + search -->
        <div class="lg:col-span-2" style="position:sticky;top:80px">
         <div class="flex items-center gap-3 mb-5"><span class="accent-line"></span><span class="label-small">Skill Ecosystem</span></div>
         <h2 class="font-heading font-bold text-3xl mb-2" style="color:#1C1C1E">Professional Skill Map</h2>
         <p class="text-sm leading-relaxed mb-4" style="color:#5C5C5C;max-width:300px">Click a skill tag to explore related work, or type a keyword to find any project.</p>
         <ol class="mb-6" style="max-width:300px;list-style:none;padding:0;font-size:.75rem;color:#767676;line-height:1.7">
          <li style="display:flex;gap:8px;align-items:flex-start"><span style="display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;background:#1E3A5F;color:#fff;font-size:.6rem;font-weight:700;flex-shrink:0;margin-top:2px">1</span><span>Pick a skill or type a keyword</span></li>
          <li style="display:flex;gap:8px;align-items:flex-start"><span style="display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;background:#1E3A5F;color:#fff;font-size:.6rem;font-weight:700;flex-shrink:0;margin-top:2px">2</span><span>See matching work below</span></li>
         </ol>
         <!-- Search bar -->
         <div style="position:relative;margin-top:4px">
          <div id="about-search-box" style="display:flex;flex-wrap:wrap;align-items:center;gap:5px;background:#fff;border:1.5px solid rgba(28,28,30,0.12);border-radius:14px;padding:8px 8px 8px 14px;min-height:52px;cursor:text" onclick="document.getElementById('about-search-input').focus()">
           <input id="about-search-input" type="text" placeholder="Search projects, skills…"
            style="border:none;outline:none;background:transparent;font-size:.83rem;color:#1C1C1E;flex:1 1 80px;min-width:80px;padding:3px 0;font-family:'DM Sans',sans-serif;line-height:1.4"
            oninput="aboutRunSearch()"
            onkeydown="if(event.key==='Escape')aboutClearSearch()"
            onfocus="document.getElementById('about-search-box').style.borderColor='#1E3A5F';document.getElementById('about-search-box').style.boxShadow='0 0 0 3px rgba(30,58,95,0.1)'"
            onblur="document.getElementById('about-search-box').style.borderColor='rgba(28,28,30,0.12)';document.getElementById('about-search-box').style.boxShadow='none'"
           />
           <button onclick="aboutRunSearch()" style="background:#1C1C1E;color:#fff;border:none;cursor:pointer;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .2s;margin-left:2px" onmouseover="this.style.background='#1E3A5F'" onmouseout="this.style.background='#1C1C1E'"><i data-lucide="search" style="width:15px;height:15px"></i></button>
          </div>
         </div>
         <button id="about-clear-btn" onclick="aboutClearSearch()" class="text-sm mt-3 inline-block" style="color:#767676;display:none">Clear all</button>
        </div>

        <!-- Tag cloud -->
        <div class="lg:col-span-3">
         <!-- Legend -->
         <div class="flex flex-wrap gap-4 mb-6">
          <div class="flex items-center gap-2"><span style="width:8px;height:8px;border-radius:50%;background:#1E3A5F;display:inline-block"></span><span class="label-small" style="color:#1E3A5F">Intl. Education</span></div>
          <div class="flex items-center gap-2"><span style="width:8px;height:8px;border-radius:50%;background:#1C1C1E;display:inline-block"></span><span class="label-small">Leadership</span></div>
          <div class="flex items-center gap-2"><span style="width:8px;height:8px;border-radius:50%;background:#6B4F32;display:inline-block"></span><span class="label-small" style="color:#6B4F32">Creative &amp; Digital</span></div>
          <div class="flex items-center gap-2"><span style="width:8px;height:8px;border-radius:50%;background:#4A5235;display:inline-block"></span><span class="label-small" style="color:#4A5235">Technology</span></div>
         </div>
         <!-- Skill tags -->
         <div id="about-skill-tags" class="flex flex-wrap gap-2.5 mb-8">
          <button class="skill-tag cat-education" data-skill="International Partnership" onclick="aboutToggleSkill(this)">International Partnership</button>
          <button class="skill-tag cat-education" data-skill="Student Mobility" onclick="aboutToggleSkill(this)">Student Mobility</button>
          <button class="skill-tag cat-education" data-skill="MoU/MoA Coordination" onclick="aboutToggleSkill(this)">MoU/MoA Coordination</button>
          <button class="skill-tag cat-education" data-skill="Internationalization" onclick="aboutToggleSkill(this)">Internationalization</button>
          <button class="skill-tag cat-education" data-skill="Student Support" onclick="aboutToggleSkill(this)">Student Support</button>
          <button class="skill-tag cat-education" data-skill="Cross-Cultural Communication" onclick="aboutToggleSkill(this)">Cross-Cultural Communication</button>
          <button class="skill-tag cat-leadership" data-skill="Project Management" onclick="aboutToggleSkill(this)">Project Management</button>
          <button class="skill-tag cat-leadership" data-skill="Strategic Planning" onclick="aboutToggleSkill(this)">Strategic Planning</button>
          <button class="skill-tag cat-leadership" data-skill="Leadership" onclick="aboutToggleSkill(this)">Leadership</button>
          <button class="skill-tag cat-leadership" data-skill="Systems Thinking" onclick="aboutToggleSkill(this)">Systems Thinking</button>
          <button class="skill-tag cat-leadership" data-skill="Stakeholder Management" onclick="aboutToggleSkill(this)">Stakeholder Management</button>
          <button class="skill-tag cat-creative" data-skill="UI/UX Design" onclick="aboutToggleSkill(this)">UI/UX Design</button>
          <button class="skill-tag cat-creative" data-skill="Branding" onclick="aboutToggleSkill(this)">Branding</button>
          <button class="skill-tag cat-creative" data-skill="Creative Direction" onclick="aboutToggleSkill(this)">Creative Direction</button>
          <button class="skill-tag cat-creative" data-skill="Digital Strategy" onclick="aboutToggleSkill(this)">Digital Strategy</button>
          <button class="skill-tag cat-creative" data-skill="Writing" onclick="aboutToggleSkill(this)">Writing</button>
          <button class="skill-tag cat-tech" data-skill="Full-Stack Development" onclick="aboutToggleSkill(this)">Full-Stack Development</button>
          <button class="skill-tag cat-tech" data-skill="Front-End Development" onclick="aboutToggleSkill(this)">Front-End Development</button>
          <button class="skill-tag cat-tech" data-skill="Web Experience" onclick="aboutToggleSkill(this)">Web Experience</button>
          <button class="skill-tag cat-tech" data-skill="Responsive Design" onclick="aboutToggleSkill(this)">Responsive Design</button>
         </div>

         <!-- Results area (shown when skill or text is active) -->
         <div id="about-skill-results" style="display:none">
          <div class="flex items-center gap-3 mb-5"><span style="width:20px;height:1px;background:rgba(28,28,30,0.15);display:inline-block"></span><span class="label-small">Related Work</span></div>
          <div id="about-results-grid" class="grid sm:grid-cols-2 gap-4"></div>
          <p id="about-no-results" class="text-sm py-8" style="color:#767676;display:none">No matching items found. Try a different keyword or skill.</p>
         </div>
        </div>

       </div>
      </div>
     </div>

     <!-- ═══ 9. LEADERSHIP & PHILOSOPHY ═══ -->
     <div style="padding:72px 24px;background:#1C1C1E">
      <div class="max-w-6xl mx-auto">
       <div class="flex items-center gap-3 mb-10"><span style="width:32px;height:2px;background:#8B7355;border-radius:2px;display:inline-block;flex-shrink:0"></span><span class="label-small" style="color:rgba(255,255,255,0.35)">Leadership &amp; Philosophy</span></div>
       <div class="grid lg:grid-cols-2 gap-16 items-start">
        <div>
         <blockquote class="font-heading leading-snug mb-6" style="color:#fff;font-size:clamp(1.5rem,3vw,2.2rem);letter-spacing:-.01em">"International education is not just about moving students across borders — it's about building the bridges they'll walk back across."</blockquote>
         <p class="text-sm leading-relaxed mb-8" style="color:rgba(255,255,255,0.45)">My approach is grounded in systems thinking and human-centered practice. Whether managing partnerships, designing programs, or building digital tools, I believe great work comes from understanding the whole — not just the parts.</p>
         <div style="width:40px;height:2px;background:#8B7355;border-radius:2px"></div>
        </div>
        <div class="space-y-6">
         <div style="border-left:2px solid #8B7355;padding-left:20px;padding:16px 20px;background:rgba(139,115,85,0.07);border-radius:0 8px 8px 0">
          <h3 class="font-heading font-semibold text-base mb-2" style="color:#fff">Systems Over Silos</h3>
          <p class="text-sm leading-relaxed" style="color:rgba(255,255,255,0.55)">Complex problems in international education require connecting systems, not just solving individual tasks.</p>
         </div>
         <div style="border-left:2px solid rgba(255,255,255,0.1);padding-left:20px">
          <h3 class="font-heading font-semibold text-base mb-2" style="color:#fff">Global Orientation, Local Action</h3>
          <p class="text-sm leading-relaxed" style="color:rgba(255,255,255,0.45)">Every partnership agreement and student support initiative ultimately plays out at the human, local level. I keep both in view.</p>
         </div>
         <div style="border-left:2px solid rgba(255,255,255,0.1);padding-left:20px">
          <h3 class="font-heading font-semibold text-base mb-2" style="color:#fff">Creativity as Strategy</h3>
          <p class="text-sm leading-relaxed" style="color:rgba(255,255,255,0.45)">Digital design, branding, and systems thinking aren't separate from international education — they're force multipliers for institutional impact.</p>
         </div>
        </div>
       </div>
      </div>
     </div>

     <!-- ═══ 10. CERTIFICATIONS / ACHIEVEMENTS ═══ -->
     <div style="padding:72px 24px;background:#FAFAF8">
      <div class="max-w-6xl mx-auto">
       <div class="flex items-center gap-3 mb-4"><span class="accent-line"></span><span class="label-small">Achievements</span></div>
       <h2 class="font-heading font-bold text-3xl mb-10" style="color:#1C1C1E">Certifications &amp; Milestones</h2>
       <div class="grid md:grid-cols-3 gap-5">
        <div class="card p-6 about-card-lift" style="border-top:3px solid #8B7355">
         <div class="label-small mb-3" style="color:#8B7355">2022 · Gold Medal</div>
         <h3 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">World Youth Invention &amp; Innovation Award</h3>
         <p class="text-xs" style="color:#5C5C5C">International recognition for innovation and creative problem-solving.</p>
        </div>
        <div class="card p-6 about-card-lift" style="border-top:3px solid #8B7355">
         <div class="label-small mb-3" style="color:#8B7355">2022 · Bronze Medal</div>
         <h3 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">Your-K, Your-ASEAN Short Video Contest</h3>
         <p class="text-xs" style="color:#5C5C5C">Recognition for visual storytelling and creative communication in ASEAN context.</p>
        </div>
        <div class="card p-6 about-card-lift" style="border-top:3px solid #1E3A5F">
         <div class="label-small mb-3" style="color:#1E3A5F">2023 · Conference</div>
         <h3 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">9th ICoCSPA 2023 — Research Presenter</h3>
         <p class="text-xs" style="color:#5C5C5C">Presented research on U.S.–ASEAN economic cooperation at international conference.</p>
        </div>
        <div class="card p-6 about-card-lift" style="border-top:3px solid #4A6B8A">
         <div class="label-small mb-3" style="color:#4A6B8A">2023–2024 · Publications</div>
         <h3 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">Academic Publications in IR</h3>
         <p class="text-xs" style="color:#5C5C5C">Peer-reviewed papers on U.S. foreign policy, Korea–China THAAD, and Abraham Accords.</p>
        </div>
        <div class="card p-6 about-card-lift" style="border-top:3px solid #4A6B8A">
         <div class="label-small mb-3" style="color:#4A6B8A">2024–2025 · Program Leadership</div>
         <h3 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">5 Exchange Programs Led</h3>
         <p class="text-xs" style="color:#5C5C5C">End-to-end delivery of AMERTA, ACI, AERO, and government scholarship programs (KNB &amp; TIAS).</p>
        </div>
        <div class="card p-6 about-card-lift" style="border-top:3px solid #1E3A5F">
         <div class="label-small mb-3" style="color:#1E3A5F">2026 · Platform Launch</div>
         <h3 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">PCU Global Digital Platform</h3>
         <p class="text-xs" style="color:#5C5C5C">Designed and built PCU International Office's flagship digital presence from ground up.</p>
        </div>
       </div>
      </div>
     </div>

     <!-- ═══ 12. INTERESTS & CREATIVE IDENTITY ═══ -->
     <div style="padding:72px 24px;background:#1C1C1E">
      <div class="max-w-6xl mx-auto">
       <div class="flex items-center gap-3 mb-4"><span style="width:32px;height:2px;background:#8B7355;border-radius:2px;display:inline-block;flex-shrink:0"></span><span class="label-small" style="color:rgba(255,255,255,0.35)">Beyond the Resume</span></div>
       <h2 class="font-heading font-bold text-3xl mb-2" style="color:#fff">Interests &amp; Creative Identity</h2>
       <p class="text-sm mb-10" style="color:rgba(255,255,255,0.4);max-width:480px">The curiosities, creative pursuits, and dimensions that make the professional work more interesting.</p>
       <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div style="padding:28px;border:1px solid rgba(255,255,255,0.07);border-radius:12px;background:rgba(255,255,255,0.04)">
         <p class="font-editorial text-xl mb-3" style="color:#8B7355">CroissantsMoon</p>
         <p class="text-sm leading-relaxed" style="color:rgba(255,255,255,0.45)">A creative identity in development — where editorial aesthetics, brand philosophy, and digital craft converge into something singular.</p>
        </div>
        <div style="padding:28px;border:1px solid rgba(255,255,255,0.07);border-radius:12px;background:rgba(255,255,255,0.04)">
         <p class="font-heading font-semibold text-base mb-3" style="color:#fff">Writing &amp; Reflection</p>
         <p class="text-sm leading-relaxed" style="color:rgba(255,255,255,0.45)">Essays and notes on education, systems, and creative practice — approaching complex ideas through careful language.</p>
        </div>
        <div style="padding:28px;border:1px solid rgba(255,255,255,0.07);border-radius:12px;background:rgba(255,255,255,0.04)">
         <p class="font-heading font-semibold text-base mb-3" style="color:#fff">Visual Storytelling</p>
         <p class="text-sm leading-relaxed" style="color:rgba(255,255,255,0.45)">Award-winning short video work and graphic design for institutional communications and personal creative projects.</p>
        </div>
        <div style="padding:28px;border:1px solid rgba(255,255,255,0.07);border-radius:12px;background:rgba(255,255,255,0.04)">
         <p class="font-heading font-semibold text-base mb-3" style="color:#fff">International Culture</p>
         <p class="text-sm leading-relaxed" style="color:rgba(255,255,255,0.45)">Deep curiosity for cross-cultural dynamics, language, and the nuanced ways global contexts shape educational experience.</p>
        </div>
        <div style="padding:28px;border:1px solid rgba(255,255,255,0.07);border-radius:12px;background:rgba(255,255,255,0.04)">
         <p class="font-heading font-semibold text-base mb-3" style="color:#fff">Design Systems</p>
         <p class="text-sm leading-relaxed" style="color:rgba(255,255,255,0.45)">Fascinated by how great design systems create coherence — from institutional brand guidelines to digital component libraries.</p>
        </div>
        <div style="padding:28px;border:1px solid rgba(255,255,255,0.07);border-radius:12px;background:rgba(255,255,255,0.04)">
         <p class="font-heading font-semibold text-base mb-3" style="color:#fff">Interdisciplinary Thinking</p>
         <p class="text-sm leading-relaxed" style="color:rgba(255,255,255,0.45)">The most interesting problems live at the edge of disciplines — international education, technology, and creative practice together.</p>
        </div>
       </div>
      </div>
     </div>

     <!-- ═══ 13. CONTACT / CONNECT ═══ -->
     <div style="padding:80px 24px;background:#FAFAF8">
      <div class="max-w-xl mx-auto text-center">
       <div class="flex justify-center mb-6"><span class="accent-line" style="width:40px"></span></div>
       <p class="font-editorial text-xl mb-3" style="color:#8B7355">Open to meaningful conversations</p>
       <h2 class="font-heading font-bold text-3xl md:text-4xl mb-4" style="color:#1C1C1E">Let's Connect</h2>
       <p class="text-sm leading-relaxed mb-10" style="color:#5C5C5C;max-width:400px;margin-left:auto;margin-right:auto">Whether you're exploring international partnerships, building something in education, or want to exchange perspectives — I'm open to it.</p>
       <div class="flex flex-col sm:flex-row gap-3 justify-center mb-8">
        <button onclick="goToPage('contact')" class="btn-primary font-medium text-sm px-8 py-3.5 rounded-full inline-flex items-center justify-center gap-2"><i data-lucide="mail" style="width:15px;height:15px"></i> Get in Touch</button>
        <a href="./assets/data/profile.pdf" download class="btn-outline font-medium text-sm px-8 py-3.5 rounded-full inline-flex items-center justify-center gap-2"><i data-lucide="download" style="width:15px;height:15px"></i> Download CV</a>
       </div>
       <div class="flex justify-center gap-4">
        <a href="mailto:zefanya.kharisma@gmail.com" class="flex items-center gap-2 text-sm" style="color:#5C5C5C;text-decoration:none"><i data-lucide="mail" style="width:14px;height:14px"></i> zefanya.kharisma@gmail.com</a>
       </div>
      </div>
     </div>

    `;
  if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', function() {
  aboutOverviewInitPage();
});
