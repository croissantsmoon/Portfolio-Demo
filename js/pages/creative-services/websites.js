// ── Web Development & Design — CroissantsMoon Aesthetic ──────────────────────

function wdInjectFonts() {
  if (document.querySelector('[data-cm-fonts]')) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Caveat:wght@400;500;600;700&display=swap';
  link.setAttribute('data-cm-fonts', '1');
  document.head.appendChild(link);
}

const WD = {
  yellow:   '#F5D05E',
  blue:     '#7BC8F6',
  orange:   '#F4874B',
  coral:    '#FF6B6B',
  lavender: '#C4B5FD',
  cream:    '#FFFBF5',
  mint:     '#6EE7B7',
  peach:    '#FDBA8C',
  pink:     '#FDA4AF',
  purple:   '#A78BFA',
};

const WD_PROJECTS = [
  {
    title: 'PCU Global',
    cat: 'Web Experience',
    year: '2025',
    desc: "Full-stack rebuild of PCU's International Office — clean architecture, live CMS, mobile-first design.",
    bg: WD.blue, tc: '#0369A1',
    page: 'pcu-global',
    emoji: '🌐',
    url: 'pcuglobal.petra.ac.id',
    tags: ['HTML · CSS · JS', 'Responsive Design', 'CMS'],
    pc: ['#0C4A6E', '#0369A1', '#0EA5E9', '#7BC8F6', '#F0F9FF'],
  },
  {
    title: 'This Portfolio',
    cat: 'Editorial Design',
    year: '2025',
    desc: 'Premium editorial aesthetic — typography-led, intentional. International education storytelling through design.',
    bg: WD.yellow, tc: '#854D0E',
    page: 'home',
    emoji: '✦',
    url: 'zefanya.portfolio',
    tags: ['UI/UX Design', 'Tailwind CSS', 'Typography'],
    pc: ['#1C1C1E', '#8B7355', '#F5D05E', '#FAFAF8', '#F2ECE4'],
  },
  {
    title: 'AERO Exhibition',
    cat: 'Creative Direction',
    year: '2025',
    desc: 'Visual identity and event design for an annual global partnership exhibition at Universitas Airlangga.',
    bg: WD.pink, tc: '#9F1239',
    page: 'aero',
    emoji: '✈',
    url: 'aero.unair.ac.id',
    tags: ['Event Design', 'Brand Identity', 'Visual Direction'],
    pc: ['#1C1C1E', '#9F1239', '#FF6B6B', '#FDA4AF', '#FFF5F5'],
  },
];

const WD_MARQUEE_ITEMS = [
  '✦ HTML · CSS · JavaScript', '◈ Tailwind CSS', '◉ Responsive Design',
  '⬡ UI/UX Design', '◎ Typography', '✺ CMS Integration', '✦ Mobile-First',
  '◈ Editorial Design', '◉ Web Animation', '⬡ Accessibility',
];

const WD_PROCESS = [
  { icon: '✦', label: 'Discover',  color: WD.yellow,   desc: 'Understanding the goal, the audience, and what success looks like. Questions first. Answers second.' },
  { icon: '◈', label: 'Design',    color: WD.blue,     desc: 'Wireframes, hierarchy, visual language. Establishing structure and feeling before touching code.' },
  { icon: '◉', label: 'Build',     color: WD.mint,     desc: 'Clean HTML, semantic structure, responsive layouts. Code that reads like good writing.' },
  { icon: '◎', label: 'Refine',    color: WD.lavender, desc: 'Testing across devices, optimizing performance, sweating the details. The work that makes it feel right.' },
  { icon: '✺', label: 'Ship',      color: WD.orange,   desc: 'Launching with intention. Optimized, accessible, and ready to meet the people it was made for.' },
];

const WD_SKILLS = [
  { text: 'HTML · CSS',           color: WD.blue     },
  { text: 'JavaScript',           color: WD.yellow   },
  { text: 'Tailwind CSS',         color: WD.mint     },
  { text: 'Responsive Design',    color: WD.pink     },
  { text: 'UI/UX Design',         color: WD.lavender },
  { text: 'Typography',           color: WD.peach    },
  { text: 'CMS Integration',      color: WD.coral    },
  { text: 'Web Animation',        color: WD.purple   },
  { text: 'Mobile-First',         color: WD.blue     },
  { text: 'Editorial Design',     color: WD.yellow   },
  { text: 'Accessibility',        color: WD.mint     },
  { text: 'Performance',          color: WD.orange   },
  { text: 'Git & Version Control', color: WD.pink    },
  { text: 'Cross-Browser Testing', color: WD.lavender},
  { text: 'Design Systems',       color: WD.peach    },
  { text: 'Color Theory',         color: WD.coral    },
];

// ── Section Builders ─────────────────────────────────────────────────────────

function wdBuildHero() {
  const blobs = [
    { color: WD.blue,     size: 380, x: '-80px', y: '-60px', opacity: 0.45, delay: '0s'  },
    { color: WD.yellow,   size: 280, x: '65%',   y: '-40px', opacity: 0.4,  delay: '2s'  },
    { color: WD.mint,     size: 220, x: '38%',   y: '55%',   opacity: 0.32, delay: '4s'  },
    { color: WD.lavender, size: 200, x: '-40px', y: '50%',   opacity: 0.28, delay: '1s'  },
  ].map(b => `
    <div class="cm-blob" style="
      position:absolute;width:${b.size}px;height:${b.size}px;
      left:${b.x};top:${b.y};background:${b.color};
      opacity:${b.opacity};filter:blur(70px);
      animation-delay:${b.delay};pointer-events:none;z-index:0
    "></div>`).join('');

  const heroTags = [
    ['HTML · CSS · JS',    WD.blue,     '#0369A1'],
    ['UI/UX Design',       WD.pink,     '#9F1239'],
    ['Responsive Design',  WD.mint,     '#065F46'],
    ['Editorial Websites', WD.yellow,   '#854D0E'],
    ['CMS & Web Apps',     WD.lavender, '#5B21B6'],
  ].map(([tag, bg, tc]) => `
    <span style="
      background:${bg}28;color:${tc};
      padding:6px 16px;border-radius:999px;
      font-size:.72rem;font-weight:600;letter-spacing:.04em;
      border:1px solid ${bg}50
    ">${tag}</span>`).join('');

  return `
    <div id="wd-hero" class="cm-grain" style="
      position:relative;overflow:hidden;
      padding:clamp(5rem,12vh,9rem) 24px clamp(4rem,8vh,7rem);
      background:${WD.cream};min-height:90vh;
      display:flex;align-items:center
    ">
      <div id="wd-cursor-glow" style="
        position:absolute;pointer-events:none;z-index:1;
        width:520px;height:520px;border-radius:50%;
        transform:translate(-50%,-50%);
        background:radial-gradient(circle,rgba(123,200,246,0.16) 0%,transparent 60%);
        transition:left .1s ease,top .1s ease
      "></div>
      <canvas id="wd-particles-canvas" style="position:absolute;inset:0;pointer-events:none;z-index:0"></canvas>
      ${blobs}
      <div class="cm-float"  style="position:absolute;right:8%;top:22%;font-size:3rem;opacity:0.45;pointer-events:none;z-index:1">◈</div>
      <div class="cm-float-2" style="position:absolute;right:22%;top:68%;font-size:2rem;opacity:0.38;pointer-events:none;z-index:1;color:${WD.coral}">✦</div>
      <div class="cm-float-3" style="position:absolute;left:6%;top:42%;font-size:1.5rem;opacity:0.32;pointer-events:none;z-index:1;color:${WD.purple}">◎</div>
      <div class="cm-spin-slow" style="position:absolute;right:14%;bottom:22%;width:72px;height:72px;border:2px solid ${WD.blue}44;border-radius:50%;pointer-events:none;z-index:1"></div>
      <div class="cm-spin-slow" style="position:absolute;left:16%;top:14%;width:44px;height:44px;border:2px dashed ${WD.mint}44;border-radius:50%;pointer-events:none;z-index:1;animation-direction:reverse"></div>
      <div class="max-w-5xl mx-auto relative z-10 w-full">
        <button onclick="goToPage('home')" style="
          display:inline-flex;align-items:center;gap:8px;margin-bottom:3rem;
          font-size:.875rem;color:rgba(28,28,30,0.4);
          background:none;border:none;cursor:pointer;padding:0
        ">
          <i data-lucide="arrow-left" style="width:16px;height:16px"></i> Back
        </button>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:1.5rem">
          <span style="display:inline-block;width:28px;height:3px;background:${WD.blue};border-radius:2px"></span>
          <span style="font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${WD.blue}">Creative Services</span>
        </div>
        <h1 class="cm-gradient-text" style="
          font-family:'Space Grotesk',Inter,sans-serif;
          font-size:clamp(3rem,8vw,7rem);
          font-weight:700;line-height:.95;
          letter-spacing:-.04em;
          margin-bottom:1.5rem
        ">Web Development<br>&amp; Design</h1>
        <p style="
          font-family:'Space Grotesk',Inter,sans-serif;
          font-size:clamp(1.1rem,2.5vw,1.4rem);font-weight:400;
          color:rgba(28,28,30,0.52);max-width:540px;
          line-height:1.45;margin-bottom:1.25rem;min-height:2.4em
        "><span id="wd-typewriter"></span></p>
        <p style="max-width:490px;font-size:.95rem;line-height:1.7;color:rgba(28,28,30,0.45);margin-bottom:2.75rem">
          Purposeful digital experiences built with craft, care, and a clear sense of what they're trying to say. From institutional portals to editorial portfolios.
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin-bottom:2.5rem">
          <button onclick="document.getElementById('wd-projects').scrollIntoView({behavior:'smooth'})" style="
            background:#1C1C1E;color:#fff;
            padding:14px 28px;border-radius:999px;
            font-size:.875rem;font-weight:600;
            border:none;cursor:pointer;
            display:inline-flex;align-items:center;gap:8px;
            transition:opacity .2s
          " onmouseover="this.style.opacity='.8'" onmouseout="this.style.opacity='1'">
            View Projects <i data-lucide="arrow-right" style="width:15px;height:15px"></i>
          </button>
          <button onclick="goToPage('contact')" style="
            border:1.5px solid rgba(28,28,30,0.2);color:#1C1C1E;
            background:transparent;padding:14px 28px;border-radius:999px;
            font-size:.875rem;font-weight:600;cursor:pointer;transition:all .2s
          " onmouseover="this.style.background='rgba(28,28,30,0.05)'"
            onmouseout="this.style.background='transparent'">
            Work Together
          </button>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:10px">${heroTags}</div>
      </div>
      <div class="cm-scroll-indicator">
        <span style="font-size:.65rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:rgba(28,28,30,0.4)">Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="rgba(28,28,30,0.3)" stroke-width="1.5"/>
          <rect x="7" y="5" width="2" height="5" rx="1" fill="rgba(28,28,30,0.35)"/>
        </svg>
      </div>
    </div>`;
}

function wdBuildMarquee() {
  const doubled = [...WD_MARQUEE_ITEMS, ...WD_MARQUEE_ITEMS];
  const colors  = [WD.blue, '#1C1C1E', WD.coral, WD.mint, WD.yellow];
  const items   = doubled.map((t, i) => `
    <span style="
      display:inline-block;padding:0 32px;
      font-family:'Space Grotesk',Inter,sans-serif;
      font-size:1.05rem;font-weight:600;
      color:${colors[i % colors.length]};
      white-space:nowrap;letter-spacing:.01em
    ">${t}</span>
    <span style="color:rgba(255,255,255,0.18);font-size:1.1rem;padding:0 4px">·</span>
  `).join('');

  return `
    <div class="cm-reveal" style="background:#1C1C1E;padding:20px 0;overflow:hidden">
      <div style="display:flex;overflow:hidden">
        <div class="cm-marquee-track">${items}</div>
      </div>
    </div>`;
}

// ── Project card helpers ──────────────────────────────────────────────────────

function wdCardPreview(w) {
  const [c1, c2, c3, c4, c5] = w.pc;
  return `
    <div style="height:148px;background:${c5};position:relative;overflow:hidden">
      <div style="height:26px;background:${c1};display:flex;align-items:center;padding:0 10px;gap:8px">
        <div style="height:4px;width:30px;background:${c4}30;border-radius:2px"></div>
        <div style="height:4px;width:42px;background:${c4}30;border-radius:2px"></div>
        <div style="height:4px;width:22px;background:${c4}30;border-radius:2px"></div>
        <div style="flex:1"></div>
        <div style="height:13px;width:36px;background:${c4}40;border-radius:3px"></div>
      </div>
      <div style="padding:10px 12px">
        <div style="height:9px;width:52%;background:${c2};border-radius:4px;margin-bottom:6px;opacity:.75"></div>
        <div style="height:5px;width:80%;background:${c3};border-radius:3px;margin-bottom:4px;opacity:.45"></div>
        <div style="height:5px;width:60%;background:${c3};border-radius:3px;margin-bottom:10px;opacity:.35"></div>
        <div style="display:flex;gap:6px">
          <div style="height:20px;width:60px;background:${c2};border-radius:10px;opacity:.85"></div>
          <div style="height:20px;width:50px;background:transparent;border:1.5px solid ${c2};border-radius:10px;opacity:.55"></div>
        </div>
      </div>
      <div style="position:absolute;bottom:6px;right:12px;font-size:1.8rem;opacity:.18">${w.emoji}</div>
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,transparent 60%,${c1}22 100%);pointer-events:none"></div>
    </div>`;
}

function wdProjectCard(w) {
  const tags = w.tags.map(t =>
    `<span style="background:${w.bg}28;color:${w.tc};padding:2px 9px;border-radius:999px;font-size:.6rem;font-weight:600;border:1px solid ${w.bg}44">${t}</span>`
  ).join('');
  return `
    <button onclick="goToPage('${w.page}')" class="cm-work-card text-left" style="
      background:#fff;border-radius:18px;overflow:hidden;
      border:1px solid rgba(28,28,30,0.07);
      cursor:pointer;
      box-shadow:0 4px 20px rgba(0,0,0,0.055);
      position:relative;width:100%;display:block
    ">
      <div style="background:#F6F6F4;padding:7px 12px;border-bottom:1px solid #EBEBEB;display:flex;align-items:center;gap:7px">
        <div style="display:flex;gap:4px;flex-shrink:0">
          <span style="width:9px;height:9px;border-radius:50%;background:#FF5F57;display:block"></span>
          <span style="width:9px;height:9px;border-radius:50%;background:#FEBC2E;display:block"></span>
          <span style="width:9px;height:9px;border-radius:50%;background:#28C840;display:block"></span>
        </div>
        <span style="flex:1;background:#fff;border-radius:4px;padding:2px 9px;font-size:.58rem;color:#bbb;border:1px solid #E8E8E8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${w.url}</span>
      </div>
      ${wdCardPreview(w)}
      <div style="padding:15px 17px 18px">
        <div style="font-size:.6rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:${w.tc};opacity:.75;margin-bottom:5px">${w.cat} · ${w.year}</div>
        <h4 style="font-family:'Space Grotesk',Inter,sans-serif;font-weight:700;font-size:.95rem;color:#1C1C1E;margin-bottom:6px;line-height:1.25">${w.title}</h4>
        <p style="font-size:.76rem;line-height:1.55;color:rgba(28,28,30,0.5);margin-bottom:11px">${w.desc}</p>
        <div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:12px">${tags}</div>
        <div style="display:inline-flex;align-items:center;gap:6px;font-size:.76rem;font-weight:600;color:${w.tc}">
          View Project <i data-lucide="arrow-right" style="width:11px;height:11px"></i>
        </div>
      </div>
    </button>`;
}

function wdBuildProjects() {
  const cards = WD_PROJECTS.map(w => wdProjectCard(w)).join('');
  return `
    <div id="wd-projects" class="cm-reveal" style="padding:clamp(4rem,8vh,6rem) 24px;background:${WD.cream}">
      <div class="max-w-5xl mx-auto">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:1rem">
          <span style="display:inline-block;width:28px;height:3px;background:${WD.blue};border-radius:2px"></span>
          <span style="font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${WD.blue}">Selected Projects</span>
        </div>
        <h2 style="font-family:'Space Grotesk',Inter,sans-serif;font-size:clamp(2rem,4vw,3rem);font-weight:700;color:#1C1C1E;margin-bottom:.5rem;letter-spacing:-.03em">The Work</h2>
        <p style="font-size:.93rem;color:rgba(28,28,30,0.48);margin-bottom:2.5rem;max-width:480px;line-height:1.65">
          Three real projects — each built with a different challenge, the same level of care.
        </p>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(274px,1fr));gap:18px">
          ${cards}
        </div>
        <div style="margin-top:2rem;padding:20px 26px;background:rgba(123,200,246,0.08);border:1px solid rgba(123,200,246,0.2);border-radius:14px;display:flex;align-items:center;gap:16px;flex-wrap:wrap">
          <div style="flex:1;min-width:220px">
            <p style="font-family:'Space Grotesk',Inter,sans-serif;font-size:.84rem;font-weight:600;color:#1C1C1E;margin-bottom:3px">More in CroissantsMoon</p>
            <p style="font-size:.76rem;color:rgba(28,28,30,0.48);line-height:1.55">Graphic design, branding, and visual works live in the full creative universe.</p>
          </div>
          <button onclick="goToPage('croissantsmoon')" style="
            background:${WD.blue}22;color:#0369A1;
            border:1px solid ${WD.blue}44;
            padding:10px 22px;border-radius:999px;
            font-size:.78rem;font-weight:600;cursor:pointer;
            display:inline-flex;align-items:center;gap:7px;
            transition:background .2s;white-space:nowrap;flex-shrink:0
          " onmouseover="this.style.background='${WD.blue}33'" onmouseout="this.style.background='${WD.blue}22'">
            Explore CroissantsMoon <i data-lucide="arrow-right" style="width:12px;height:12px"></i>
          </button>
        </div>
      </div>
    </div>`;
}

function wdBuildProcess() {
  const steps = WD_PROCESS.map((s, i, arr) => {
    const isLast = i === arr.length - 1;
    const nextColor = !isLast ? arr[i + 1].color : s.color;
    return `
      <div style="display:flex;align-items:flex-start">
        <div style="display:flex;flex-direction:column;align-items:center;width:56px;flex-shrink:0">
          <div style="
            width:56px;height:56px;border-radius:50%;
            background:${s.color};
            display:flex;align-items:center;justify-content:center;
            font-size:1.35rem;flex-shrink:0;
            box-shadow:0 6px 22px ${s.color}55;
            border:3px solid #F8F4EE;
            position:relative;z-index:2
          ">${s.icon}</div>
          ${!isLast ? `<div style="
            flex:1;width:2px;min-height:20px;
            background:linear-gradient(to bottom,${s.color}88,${nextColor}88);
            border-radius:1px
          "></div>` : ''}
        </div>
        <div style="flex:1;margin-left:22px;${!isLast ? 'padding-bottom:28px' : ''}">
          <div class="cm-process-card" style="
            background:#fff;border-radius:16px;padding:22px 24px;
            border:1px solid rgba(28,28,30,0.07);
            border-left:3px solid ${s.color};
            box-shadow:0 2px 16px rgba(0,0,0,0.04)
          ">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:9px">
              <span style="font-size:.58rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgba(28,28,30,0.28)">Step ${String(i + 1).padStart(2, '0')}</span>
              <span style="height:1px;flex:1;background:rgba(28,28,30,0.07)"></span>
              <span style="font-size:.68rem;font-weight:600;color:${s.color};background:${s.color}18;padding:2px 10px;border-radius:999px">${s.label}</span>
            </div>
            <p style="font-size:.84rem;line-height:1.68;color:rgba(28,28,30,0.54)">${s.desc}</p>
          </div>
        </div>
      </div>`;
  }).join('');

  return `
    <div class="cm-reveal" style="padding:clamp(4rem,8vh,6rem) 24px;background:linear-gradient(135deg,#F2ECE4 0%,${WD.cream} 100%)">
      <div class="max-w-4xl mx-auto">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:1rem">
          <span style="display:inline-block;width:28px;height:3px;background:${WD.purple};border-radius:2px"></span>
          <span style="font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${WD.purple}">How I Build</span>
        </div>
        <h2 style="font-family:'Space Grotesk',Inter,sans-serif;font-size:clamp(2rem,4vw,3rem);font-weight:700;color:#1C1C1E;margin-bottom:.6rem;letter-spacing:-.03em">From Concept to Code</h2>
        <p style="font-size:.93rem;color:rgba(28,28,30,0.48);margin-bottom:2.75rem;max-width:440px;line-height:1.65">Not a checklist. A way of thinking — iterative, craft-led, and always grounded in purpose.</p>
        <div style="max-width:640px">
          ${steps}
        </div>
        <div style="display:flex;align-items:center;gap:10px;padding-left:68px;margin-top:8px;opacity:.38">
          <span style="font-family:'Caveat',cursive;font-size:1rem;color:${WD.orange}">↩ and every launch teaches something new</span>
        </div>
      </div>
    </div>`;
}

function wdBuildPhilosophy() {
  const pillars = [
    ['Clarity',  'Design that communicates before it impresses.',           '✦'],
    ['Craft',    'The spacing, the weight, the timing. Nothing is too small.','◈'],
    ['Purpose',  'Every element earns its place. Nothing decorative for its own sake.','◉'],
  ].map(([title, desc, icon]) => `
    <div style="
      background:rgba(255,255,255,0.45);
      border:1px solid rgba(255,255,255,0.6);
      border-radius:16px;padding:24px;
      backdrop-filter:blur(4px)
    ">
      <span style="font-size:1.4rem;display:block;margin-bottom:12px">${icon}</span>
      <h4 style="
        font-family:'Space Grotesk',Inter,sans-serif;
        font-weight:700;font-size:1.05rem;color:#1C1C1E;margin-bottom:8px
      ">${title}</h4>
      <p style="font-size:.83rem;line-height:1.6;color:rgba(28,28,30,0.65)">${desc}</p>
    </div>`).join('');

  return `
    <div class="cm-reveal" style="
      padding:clamp(4rem,10vh,7rem) 24px;
      background:${WD.yellow};position:relative;overflow:hidden
    ">
      <div style="position:absolute;right:-60px;top:-60px;width:280px;height:280px;border-radius:50%;background:rgba(255,255,255,0.15);pointer-events:none"></div>
      <div style="position:absolute;left:-30px;bottom:-40px;width:180px;height:180px;border-radius:50%;background:rgba(255,140,0,0.1);pointer-events:none"></div>
      <div class="max-w-5xl mx-auto">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:2.5rem">
          <span style="display:inline-block;width:28px;height:3px;background:rgba(28,28,30,0.35);border-radius:2px"></span>
          <span style="font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:rgba(28,28,30,0.45)">Design Philosophy</span>
        </div>
        <p style="
          font-family:'Space Grotesk',Inter,sans-serif;
          font-size:clamp(2.5rem,6vw,5rem);
          font-weight:700;line-height:1.05;
          letter-spacing:-.03em;color:#1C1C1E;
          margin-bottom:2.5rem
        ">Websites that<br><em style="font-style:italic;color:#C05C11">actually say something.</em></p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:2rem;align-items:start">
          <div>
            <p style="font-size:1.1rem;line-height:1.7;color:rgba(28,28,30,0.72);font-weight:500">
              The web is full of noise. A good website isn't just functional — it has a point of view. It knows who it's talking to, what it wants to say, and exactly how much is enough.
            </p>
          </div>
          <div style="display:flex;flex-direction:column;gap:14px">
            <div class="cm-sticky-note" style="transform:rotate(-2deg)">"Design is the space between content and reader." ✦</div>
            <div class="cm-sticky-note" style="transform:rotate(1.5deg);background:${WD.pink};margin-top:6px;align-self:flex-end">intentional > impressive ◈</div>
            <div class="cm-sticky-note" style="transform:rotate(-1deg);background:#fff">every pixel should earn its place ◉</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px;margin-top:2.5rem">
          ${pillars}
        </div>
      </div>
    </div>`;
}

function wdBuildTechStack() {
  const rotations = ['-2deg','1deg','-1.5deg','2.5deg','0deg','-0.8deg','1.2deg','-1deg','0.5deg','-1.2deg','1.8deg','-0.5deg'];
  const fontSizes = ['.77rem', '.9rem', '1.05rem'];
  const paddings  = ['5px 14px', '7px 18px', '9px 22px'];

  const tags = WD_SKILLS.map((item, i) => {
    const sz  = i % 3;
    const rot = rotations[i % rotations.length];
    const textColor = (item.color === WD.yellow || item.color === WD.mint || item.color === WD.peach)
      ? '#1C1C1E' : '#2A1A4A';
    return `
      <span style="
        display:inline-block;
        background:${item.color}28;color:${textColor};
        padding:${paddings[sz]};border-radius:999px;
        font-size:${fontSizes[sz]};font-weight:600;
        border:1.5px solid ${item.color}55;
        transform:rotate(${rot});
        transition:transform .22s cubic-bezier(0.34,1.56,0.64,1),box-shadow .22s;
        cursor:default;margin:6px
      " onmouseover="this.style.transform='scale(1.09) rotate(0deg)';this.style.boxShadow='0 8px 24px rgba(0,0,0,0.1)'"
         onmouseout="this.style.transform='rotate(${rot})';this.style.boxShadow='none'"
      >${item.text}</span>`;
  }).join('');

  return `
    <div class="cm-reveal" style="padding:clamp(4rem,8vh,6rem) 24px;background:${WD.cream}">
      <div class="max-w-5xl mx-auto">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:1rem">
          <span style="display:inline-block;width:28px;height:3px;background:${WD.coral};border-radius:2px"></span>
          <span style="font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${WD.coral}">Tech Stack</span>
        </div>
        <h2 style="font-family:'Space Grotesk',Inter,sans-serif;font-size:clamp(2rem,4vw,3rem);font-weight:700;color:#1C1C1E;margin-bottom:.75rem;letter-spacing:-.03em">Tools of the Trade</h2>
        <p style="font-size:.95rem;color:rgba(28,28,30,0.55);margin-bottom:2.5rem;max-width:480px;line-height:1.72">
          The technologies and disciplines that shape every project — chosen for clarity, not credentials.
        </p>
        <div style="display:flex;flex-wrap:wrap;align-items:center;padding:28px;background:#fff;border-radius:24px;border:1px solid rgba(28,28,30,0.07);box-shadow:0 4px 24px rgba(0,0,0,0.04)">
          ${tags}
        </div>
      </div>
    </div>`;
}

function wdBuildStats() {
  const stats = [
    { num: '3+',   label: 'Live Projects',         color: WD.blue   },
    { num: '100%', label: 'Mobile Responsive',      color: WD.mint   },
    { num: '9',    label: 'Graphic Design Works',   color: WD.yellow },
    { num: '∞',    label: 'Details Cared About',    color: WD.coral  },
  ];

  const statCards = stats.map(s => `
    <div style="
      text-align:center;padding:28px 20px;
      background:rgba(255,255,255,0.04);
      border:1px solid rgba(255,255,255,0.08);
      border-radius:18px;
      transition:background .2s,transform .2s
    " onmouseover="this.style.background='rgba(255,255,255,0.08)';this.style.transform='translateY(-4px)'"
       onmouseout="this.style.background='rgba(255,255,255,0.04)';this.style.transform=''">
      <div style="font-family:'Space Grotesk',Inter,sans-serif;font-size:clamp(2rem,5vw,3.2rem);font-weight:700;color:${s.color};line-height:1;margin-bottom:10px">${s.num}</div>
      <div style="font-size:.72rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,0.4)">${s.label}</div>
    </div>`).join('');

  return `
    <div class="cm-reveal" style="padding:clamp(4rem,8vh,6rem) 24px;background:#1C1C1E;position:relative;overflow:hidden">
      <div style="position:absolute;top:-80px;right:-80px;width:360px;height:360px;border-radius:50%;background:${WD.blue};opacity:.04;pointer-events:none"></div>
      <div style="position:absolute;bottom:-60px;left:-60px;width:280px;height:280px;border-radius:50%;background:${WD.purple};opacity:.05;pointer-events:none"></div>
      <div class="max-w-5xl mx-auto relative" style="z-index:1">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:.5rem">
          <span style="display:inline-block;width:28px;height:3px;background:${WD.mint};border-radius:2px"></span>
          <span style="font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${WD.mint}">By the Numbers</span>
        </div>
        <h2 style="font-family:'Space Grotesk',Inter,sans-serif;font-size:clamp(2rem,4vw,3rem);font-weight:700;color:#fff;margin-bottom:.6rem;letter-spacing:-.03em">Work That Ships</h2>
        <p style="font-size:.93rem;color:rgba(255,255,255,0.42);margin-bottom:2.5rem;max-width:440px;line-height:1.65">Real projects, real audiences, real constraints. Numbers as a reflection of work done, not ambition claimed.</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px">
          ${statCards}
        </div>
        <div style="
          margin-top:28px;padding:22px 26px;
          background:rgba(255,255,255,0.04);
          border:1px solid rgba(255,255,255,0.1);
          border-left:3px solid ${WD.mint};
          border-radius:16px;
          display:flex;align-items:flex-start;gap:20px;flex-wrap:wrap
        ">
          <div style="flex:1;min-width:240px">
            <div style="display:flex;align-items:center;gap:7px;margin-bottom:10px">
              <span style="width:8px;height:8px;border-radius:50%;background:#28C840;display:inline-block;animation:cmPulseDot 2s infinite"></span>
              <span style="font-size:.64rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#28C840">Currently Active</span>
            </div>
            <h3 style="font-family:'Space Grotesk',Inter,sans-serif;font-size:1.05rem;font-weight:700;color:#fff;margin-bottom:7px">This Portfolio</h3>
            <p style="font-size:.82rem;line-height:1.65;color:rgba(255,255,255,0.45);max-width:440px">An ongoing experiment in editorial web design — every interaction and section is being refined in public. You're inside the experiment right now.</p>
          </div>
          <button onclick="goToPage('pcu-global')" style="
            background:${WD.mint}22;color:${WD.mint};
            border:1px solid ${WD.mint}44;
            padding:10px 22px;border-radius:999px;
            font-size:.78rem;font-weight:600;cursor:pointer;
            display:inline-flex;align-items:center;gap:7px;
            transition:background .2s;white-space:nowrap;flex-shrink:0;align-self:center
          " onmouseover="this.style.background='${WD.mint}33'" onmouseout="this.style.background='${WD.mint}22'">
            See featured project <i data-lucide="arrow-right" style="width:12px;height:12px"></i>
          </button>
        </div>
      </div>
    </div>`;
}

function wdBuildCTA() {
  return `
    <div class="cm-reveal" style="padding:clamp(5rem,10vh,7rem) 24px;background:${WD.orange};position:relative;overflow:hidden">
      <div style="position:absolute;top:-60px;left:-60px;width:300px;height:300px;border-radius:50%;background:rgba(255,255,255,0.1);pointer-events:none"></div>
      <div style="position:absolute;bottom:-40px;right:-40px;width:240px;height:240px;border-radius:50%;background:rgba(0,0,0,0.06);pointer-events:none"></div>
      <div class="max-w-4xl mx-auto text-center relative" style="z-index:1">
        <span style="font-size:2.5rem;display:block;margin-bottom:24px">◈</span>
        <h2 style="
          font-family:'Space Grotesk',Inter,sans-serif;
          font-size:clamp(2rem,5vw,3.8rem);
          font-weight:700;color:#fff;
          line-height:1.1;letter-spacing:-.04em;margin-bottom:1.5rem
        ">Have a website in mind?<br><span style="opacity:.82">Let's build it right.</span></h2>
        <p style="font-size:1rem;line-height:1.7;color:rgba(255,255,255,0.75);max-width:480px;margin:0 auto 2.5rem">
          Whether it's a portfolio, an institutional portal, or something new — every good site starts with a clear idea and the patience to do it properly.
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:16px;justify-content:center;align-items:center">
          <button onclick="goToPage('contact')" style="
            background:#1C1C1E;color:#fff;
            padding:16px 36px;border-radius:999px;
            font-family:'Space Grotesk',Inter,sans-serif;
            font-size:.92rem;font-weight:700;
            border:none;cursor:pointer;
            display:inline-flex;align-items:center;gap:10px;
            transition:opacity .2s;
            box-shadow:0 4px 20px rgba(28,28,30,0.18)
          " onmouseover="this.style.opacity='.8'" onmouseout="this.style.opacity='1'">
            Start a Conversation <i data-lucide="arrow-right" style="width:16px;height:16px"></i>
          </button>
          <button onclick="goToPage('croissantsmoon')" style="
            background:rgba(255,255,255,0.18);border:1.5px solid rgba(255,255,255,0.4);
            color:#fff;padding:16px 28px;border-radius:999px;
            font-size:.86rem;font-weight:600;
            cursor:pointer;
            display:inline-flex;align-items:center;gap:8px;
            transition:background .2s
          " onmouseover="this.style.background='rgba(255,255,255,0.28)'" onmouseout="this.style.background='rgba(255,255,255,0.18)'">
            Explore CroissantsMoon ✦
          </button>
        </div>
        <div style="display:flex;justify-content:center;margin-top:48px">
          <button onclick="goToPage('home')" style="
            display:inline-flex;align-items:center;gap:6px;
            background:none;border:none;cursor:pointer;
            font-size:.8rem;color:rgba(255,255,255,0.45);
            padding:8px 12px;border-radius:8px;transition:color .18s
          " onmouseover="this.style.color='rgba(255,255,255,0.8)'" onmouseout="this.style.color='rgba(255,255,255,0.45)'">
            <i data-lucide="arrow-left" style="width:14px;height:14px"></i> Back to main portfolio
          </button>
        </div>
      </div>
    </div>`;
}

// ── Page Init ─────────────────────────────────────────────────────────────────

function wdInitPage() {
  wdInjectFonts();
  const el = document.getElementById('page-websites');
  if (!el) return;

  el.style.background = WD.cream;
  el.innerHTML = [
    wdBuildHero(),
    wdBuildMarquee(),
    wdBuildProjects(),
    wdBuildProcess(),
    wdBuildPhilosophy(),
    wdBuildTechStack(),
    wdBuildStats(),
    wdBuildCTA(),
  ].join('');

  if (window.lucide) lucide.createIcons();

  setTimeout(() => {
    wdInitCursorGlow();
    wdInitScrollReveal();
    wdInitParticles();
    wdInitTypewriter();
  }, 80);
}

document.addEventListener('DOMContentLoaded', wdInitPage);

// ── Scroll Reveal ─────────────────────────────────────────────────────────────

function wdInitScrollReveal() {
  const page = document.getElementById('page-websites');
  if (!page) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('cm-visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  page.querySelectorAll('.cm-reveal').forEach(el => observer.observe(el));
}

// ── Cursor Glow ───────────────────────────────────────────────────────────────

function wdInitCursorGlow() {
  const glow = document.getElementById('wd-cursor-glow');
  const hero  = document.getElementById('wd-hero');
  if (!glow || !hero) return;
  hero.addEventListener('mousemove', e => {
    const rect = hero.getBoundingClientRect();
    glow.style.left = (e.clientX - rect.left) + 'px';
    glow.style.top  = (e.clientY - rect.top)  + 'px';
  });
}

// ── Particle Canvas ───────────────────────────────────────────────────────────

function wdInitParticles() {
  const canvas = document.getElementById('wd-particles-canvas');
  if (!canvas) return;

  const ctx    = canvas.getContext('2d');
  const colors = [WD.yellow, WD.blue, WD.pink, WD.mint, WD.lavender, WD.peach, WD.coral];
  const syms   = ['✦', '◈', '◉', '◎', '·', '✺', '⬡', '★', '◈'];

  let W, H, particles;

  const resize = () => {
    const hero = canvas.parentElement;
    W = canvas.width  = hero.offsetWidth;
    H = canvas.height = hero.offsetHeight;
  };

  const makeParticle = () => ({
    x:       Math.random() * (W || 800),
    y:       Math.random() * (H || 600),
    size:    9 + Math.random() * 13,
    color:   colors[Math.floor(Math.random() * colors.length)],
    sym:     syms[Math.floor(Math.random() * syms.length)],
    vx:      (Math.random() - 0.5) * 0.32,
    vy:      (Math.random() - 0.5) * 0.22,
    opacity: 0.07 + Math.random() * 0.16,
    rot:     Math.random() * Math.PI * 2,
    rotV:    (Math.random() - 0.5) * 0.007,
  });

  resize();
  window.addEventListener('resize', resize);
  particles = Array.from({ length: 42 }, makeParticle);

  const draw = () => {
    const page = document.getElementById('page-websites');
    if (!page || !page.classList.contains('active')) return;

    ctx.clearRect(0, 0, W, H);

    particles.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = p.opacity;
      ctx.font        = `${p.size}px serif`;
      ctx.fillStyle   = p.color;
      ctx.textAlign   = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(p.sym, 0, 0);
      ctx.restore();

      p.x   += p.vx;
      p.y   += p.vy;
      p.rot += p.rotV;

      if (p.x < -20)        p.x = W + 20;
      else if (p.x > W + 20) p.x = -20;
      if (p.y < -20)        p.y = H + 20;
      else if (p.y > H + 20) p.y = -20;
    });

    requestAnimationFrame(draw);
  };

  draw();
}

// ── Typewriter Effect ─────────────────────────────────────────────────────────

function wdInitTypewriter() {
  const el = document.getElementById('wd-typewriter');
  if (!el) return;

  const text = 'Responsive websites, editorial design,\nand digital experiences built with craft.';
  let i = 0;

  const tick = () => {
    if (i <= text.length) {
      const visible = text.slice(0, i).replace('\n', '<br>');
      el.innerHTML = visible + '<span class="cm-type-cursor"></span>';
      i++;
      setTimeout(tick, i < 2 ? 300 : (i < 20 ? 52 : 36));
    } else {
      el.innerHTML = text.replace('\n', '<br>');
    }
  };

  setTimeout(tick, 700);
}
