// ── CroissantsMoon — Creative Universe Page ──────────────────────────────────

function cmInjectFonts() {
  if (document.querySelector('[data-cm-fonts]')) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Caveat:wght@400;500;600;700&display=swap';
  link.setAttribute('data-cm-fonts', '1');
  document.head.appendChild(link);
}

const CM = {
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

const CM_WORKS = [
  {
    emoji: '🌐', title: 'PCU Global', cat: 'Web Experience',
    desc: "A full-stack rebuild of PCU's International Office — clean architecture, live CMS, mobile-first design.",
    bg: CM.blue, textColor: '#0369A1', page: 'pcu-global', rotate: '-1.5deg',
  },
  {
    emoji: '✦', title: 'This Portfolio', cat: 'Editorial Design',
    desc: 'Premium editorial aesthetic — typography-led, intentional. International education storytelling through design.',
    bg: CM.yellow, textColor: '#854D0E', page: 'home', rotate: '2deg',
  },
  {
    emoji: '✈', title: 'AERO Exhibition', cat: 'Creative Direction',
    desc: 'Visual identity and event design for an annual global partnership exhibition at Universitas Airlangga.',
    bg: CM.pink, textColor: '#9F1239', page: 'aero', rotate: '-0.8deg',
  },
  {
    emoji: '◈', title: 'Graphic Design', cat: 'Visual Design',
    desc: '9 communication design projects — guidebooks, presentations, and institutional materials for international education.',
    bg: CM.mint, textColor: '#065F46', page: 'designs', rotate: '1.2deg',
  },
  {
    emoji: '◉', title: 'Brand Systems', cat: 'Branding',
    desc: 'Visual language and identity design for thoughtful organizations. Currently in development.',
    bg: CM.lavender, textColor: '#5B21B6', page: 'croissantsmoon', rotate: '-2deg', soon: true,
  },
  {
    emoji: '◎', title: 'Motion Studies', cat: 'Exploration',
    desc: 'Animation concepts, transition experiments, and interactive web explorations. Slowly growing.',
    bg: CM.peach, textColor: '#9A3412', page: 'croissantsmoon', rotate: '0.8deg', soon: true,
  },
];

const CM_PROCESS = [
  { icon: '✦', label: 'Inspiration', color: CM.yellow, desc: 'Absorbing the world — architecture, film, type, travel. Ideas live everywhere.' },
  { icon: '◉', label: 'Sketching',   color: CM.pink,    desc: 'Rough ideas, no judgment. Capturing what the mind sees before it disappears.' },
  { icon: '◈', label: 'Exploration', color: CM.blue,    desc: 'Testing directions in code and design. One idea becomes five, then back to one.' },
  { icon: '⬡', label: 'Building',    color: CM.mint,    desc: 'Turning vision into systems, components, interactions. Craft over speed.' },
  { icon: '◎', label: 'Refining',    color: CM.lavender,desc: 'The details. Spacing, weight, timing. The work that happens when big work is done.' },
  { icon: '✺', label: 'Releasing',   color: CM.peach,   desc: 'Letting go of perfect. Shipping with intention and telling the story behind it.' },
];

const CM_INSPO = [
  { text: 'Information as belonging',    color: CM.blue     },
  { text: 'Wayfinding for strangers',    color: CM.mint     },
  { text: 'The anxious arrival',         color: CM.pink     },
  { text: 'Cross-cultural clarity',      color: CM.yellow   },
  { text: 'Designing for first-timers',  color: CM.lavender },
  { text: 'Every page a welcome letter', color: CM.peach    },
  { text: 'Cultural translation',        color: CM.coral    },
  { text: 'Typography that reassures',   color: CM.purple   },
  { text: 'Data told as story',          color: CM.blue     },
  { text: 'Making the unfamiliar safe',  color: CM.yellow   },
  { text: 'Editorial empathy',           color: CM.pink     },
  { text: 'Color as navigation',         color: CM.mint     },
  { text: 'Clarity over noise',          color: CM.lavender },
  { text: 'Institutional care by design',color: CM.peach    },
  { text: 'Motion & transition',         color: CM.coral    },
  { text: 'Generative art',              color: CM.purple   },
  { text: 'Japanese minimalism',         color: CM.blue     },
  { text: 'Dieter Rams',                 color: CM.yellow   },
];

const CM_STICKERS = [
  { text: '✦ ideas',  bg: CM.yellow,   rotate: '-8deg',  x: '8%',  y: '12%' },
  { text: 'design',   bg: CM.pink,     rotate: '5deg',   x: '58%', y: '7%'  },
  { text: '◎ create', bg: CM.mint,     rotate: '-3deg',  x: '28%', y: '58%' },
  { text: 'explore',  bg: CM.blue,     rotate: '10deg',  x: '72%', y: '43%' },
  { text: '✺ build',  bg: CM.lavender, rotate: '-6deg',  x: '4%',  y: '68%' },
  { text: 'play',     bg: CM.peach,    rotate: '4deg',   x: '48%', y: '72%' },
  { text: '⬡ craft',  bg: CM.coral,    rotate: '-12deg', x: '78%', y: '18%' },
  { text: 'dream',    bg: CM.purple,   rotate: '7deg',   x: '18%', y: '28%' },
];

const CM_MARQUEE_ITEMS = [
  '✦ Creative Ideas', '◈ Digital Experiences', '◉ Experiments in Progress',
  '⬡ Branding', '◎ Motion Design', '✺ Web Experience', '✦ Editorial',
];

const CM_WEB_WORKS = [
  {
    title: 'PCU Global',
    cat: 'Web Experience',
    year: '2025',
    desc: "Full-stack rebuild of PCU's International Office — clean architecture, live CMS, mobile-first design.",
    bg: CM.blue, tc: '#0369A1',
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
    desc: 'Premium editorial aesthetic — typography-led, intentional. International education storytelling.',
    bg: CM.yellow, tc: '#854D0E',
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
    bg: CM.pink, tc: '#9F1239',
    page: 'aero',
    emoji: '✈',
    url: 'aero.unair.ac.id',
    tags: ['Event Design', 'Brand Identity', 'Visual Direction'],
    pc: ['#1C1C1E', '#9F1239', '#FF6B6B', '#FDA4AF', '#FFF5F5'],
  },
];

const CM_GRAPHIC_WORKS = [
  { title: 'PCU Partnership Booklet',            cat: 'Institutional Design',  folder: 'partnership-booklet-pcu',                  imgs: 3, bg: CM.lavender, tc: '#5B21B6', link: 'https://canva.link/partnershipbookletpetra',            year: '2024–2025', inst: 'Petra Christian University'          },
  { title: 'PCU International Students Guide',   cat: 'Student Guidebook',     folder: 'international-students-guidebook-pcu',      imgs: 3, bg: CM.yellow,   tc: '#854D0E', link: 'https://canva.link/internationalstudentsguidebookpetra', year: '2024–2025', inst: 'Petra Christian University'          },
  { title: 'PCU Presentation Template',          cat: 'Presentation Design',   folder: 'general-ppt-pcu',                          imgs: 3, bg: CM.pink,     tc: '#9F1239', link: 'https://canva.link/jat6f7jcsawdmnu',                    year: '2024–2025', inst: 'Petra Christian University'          },
  { title: 'ACI 2025 Batch 2 Guidebook',         cat: 'Event Guidebook',       folder: 'booklet-aci-2025-b2-unair',                imgs: 3, bg: CM.blue,     tc: '#0369A1', link: 'https://canva.link/motmeousw72spno',                    year: '2025',      inst: 'Universitas Airlangga'               },
  { title: 'ACI 2025 Batch 1 Guidebook',         cat: 'Event Guidebook',       folder: 'guidebook-aci-2025-b1-unair',              imgs: 3, bg: CM.mint,     tc: '#065F46', link: 'https://canva.link/6bysygp89hi879s',                    year: '2025',      inst: 'Universitas Airlangga'               },
  { title: 'Staffordshire Banyuwangi Booklet',   cat: 'Partnership Booklet',   folder: 'guidebook-staffordshire-unair',            imgs: 3, bg: CM.peach,    tc: '#9A3412', link: 'https://canva.link/i1i6dbnby7ho36z',                    year: '2025',      inst: 'Staffordshire × Airlangga'           },
  { title: 'AERO 2025 Presentation',             cat: 'Presentation Design',   folder: 'aero-2025-unair',                          imgs: 3, bg: CM.coral,    tc: '#7F1D1D', link: 'https://canva.link/odx5kh4eara7iuh',                    year: '2025',      inst: 'Universitas Airlangga'               },
  { title: 'Airlangga Accommodation Guide',      cat: 'Student Guidebook',     folder: 'accommodation-guidebook-unair',            imgs: 3, bg: CM.orange,   tc: '#7C2D12', link: 'https://canva.link/l8pkkjs0x8f24sy',                    year: '2024–2025', inst: 'Universitas Airlangga'               },
  { title: 'Airlangga International Students Guide', cat: 'Student Guidebook', folder: 'international-students-guidebook-unair',  imgs: 3, bg: CM.purple,   tc: '#4C1D95', link: 'https://canva.link/xehf9jz9v781sn7',                    year: '2024–2025', inst: 'Universitas Airlangga'               },
];

// ── Section Builders ─────────────────────────────────────────────────────────

function cmBuildHero() {
  const blobs = [
    { color: CM.yellow,   size: 380, x: '-80px', y: '-60px', opacity: 0.5,  delay: '0s'  },
    { color: CM.blue,     size: 280, x: '65%',   y: '-40px', opacity: 0.4,  delay: '2s'  },
    { color: CM.pink,     size: 220, x: '38%',   y: '55%',   opacity: 0.35, delay: '4s'  },
    { color: CM.mint,     size: 200, x: '-40px', y: '50%',   opacity: 0.3,  delay: '1s'  },
  ].map(b => `
    <div class="cm-blob" style="
      position:absolute;width:${b.size}px;height:${b.size}px;
      left:${b.x};top:${b.y};background:${b.color};
      opacity:${b.opacity};filter:blur(70px);
      animation-delay:${b.delay};pointer-events:none;z-index:0
    "></div>`).join('');

  const heroTags = [
    ['UI/UX Design',       CM.blue,     '#0369A1'],
    ['Branding',           CM.pink,     '#9F1239'],
    ['Creative Direction', CM.mint,     '#065F46'],
    ['Web Experience',     CM.yellow,   '#854D0E'],
    ['Digital Strategy',   CM.lavender, '#5B21B6'],
  ].map(([tag, bg, tc]) => `
    <span style="
      background:${bg}28;color:${tc};
      padding:6px 16px;border-radius:999px;
      font-size:.72rem;font-weight:600;letter-spacing:.04em;
      border:1px solid ${bg}50
    ">${tag}</span>`).join('');

  return `
    <div id="cm-hero" class="cm-grain" style="
      position:relative;overflow:hidden;
      padding:clamp(5rem,12vh,9rem) 24px clamp(4rem,8vh,7rem);
      background:${CM.cream};min-height:90vh;
      display:flex;align-items:center
    ">
      <div id="cm-cursor-glow" class="cm-cursor-glow"></div>
      <canvas id="cm-particles-canvas"></canvas>
      ${blobs}
      <div class="cm-float"  style="position:absolute;right:8%;top:22%;font-size:3rem;opacity:0.45;pointer-events:none;z-index:1">✦</div>
      <div class="cm-float-2" style="position:absolute;right:22%;top:68%;font-size:2rem;opacity:0.38;pointer-events:none;z-index:1;color:${CM.coral}">◈</div>
      <div class="cm-float-3" style="position:absolute;left:6%;top:42%;font-size:1.5rem;opacity:0.32;pointer-events:none;z-index:1;color:${CM.purple}">◎</div>
      <div class="cm-spin-slow" style="position:absolute;right:14%;bottom:22%;width:72px;height:72px;border:2px solid ${CM.yellow}44;border-radius:50%;pointer-events:none;z-index:1"></div>
      <div class="cm-spin-slow" style="position:absolute;left:16%;top:14%;width:44px;height:44px;border:2px dashed ${CM.blue}44;border-radius:50%;pointer-events:none;z-index:1;animation-direction:reverse"></div>
      <div class="max-w-5xl mx-auto relative z-10 w-full">
        <button onclick="goToPage('home')" style="
          display:inline-flex;align-items:center;gap:8px;margin-bottom:3rem;
          font-size:.875rem;color:rgba(28,28,30,0.4);
          background:none;border:none;cursor:pointer;padding:0
        ">
          <i data-lucide="arrow-left" style="width:16px;height:16px"></i> Back
        </button>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:1.5rem">
          <span style="display:inline-block;width:28px;height:3px;background:${CM.orange};border-radius:2px"></span>
          <span style="font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${CM.orange}">Creative Universe</span>
        </div>
        <h1 class="cm-gradient-text" style="
          font-family:'Space Grotesk',Inter,sans-serif;
          font-size:clamp(3.5rem,9vw,8rem);
          font-weight:700;line-height:.95;
          letter-spacing:-.04em;
          margin-bottom:1.5rem
        ">CroissantsMoon</h1>
        <p style="
          font-family:'Space Grotesk',Inter,sans-serif;
          font-size:clamp(1.1rem,2.5vw,1.55rem);font-weight:400;
          color:rgba(28,28,30,0.52);max-width:540px;
          line-height:1.45;margin-bottom:1.25rem;min-height:2.4em
        "><span id="cm-typewriter"></span></p>
        <p style="max-width:490px;font-size:.95rem;line-height:1.7;color:rgba(28,28,30,0.45);margin-bottom:2.75rem">
          A growing creative identity exploring web experiences, visual storytelling, branding, and digital creativity. Not a finished studio — an honest, evolving beginning.
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin-bottom:2.5rem">
          <button onclick="document.getElementById('cm-works').scrollIntoView({behavior:'smooth'})" style="
            background:#1C1C1E;color:#fff;
            padding:14px 28px;border-radius:999px;
            font-size:.875rem;font-weight:600;
            border:none;cursor:pointer;
            display:inline-flex;align-items:center;gap:8px;
            transition:opacity .2s
          " onmouseover="this.style.opacity='.8'" onmouseout="this.style.opacity='1'">
            See the Work <i data-lucide="arrow-right" style="width:15px;height:15px"></i>
          </button>
          <button onclick="goToPage('contact')" style="
            border:1.5px solid rgba(28,28,30,0.2);color:#1C1C1E;
            background:transparent;padding:14px 28px;border-radius:999px;
            font-size:.875rem;font-weight:600;cursor:pointer;transition:all .2s
          " onmouseover="this.style.background='rgba(28,28,30,0.05)'"
            onmouseout="this.style.background='transparent'">
            Let's Collaborate
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

function cmBuildMarquee() {
  const doubled = [...CM_MARQUEE_ITEMS, ...CM_MARQUEE_ITEMS];
  const colors  = [CM.orange, '#1C1C1E', CM.coral, '#4A6B8A', '#8B7355'];
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

function cmBuildManifesto() {
  const pillars = [
    ['Curiosity', 'Every project starts with genuine curiosity — not a brief.', '✦'],
    ['Craft',     'Attention to the details most people skip over.',            '◈'],
    ['Courage',   'Shipping before feeling fully ready.',                       '◉'],
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
      background:${CM.yellow};position:relative;overflow:hidden
    ">
      <div style="position:absolute;right:-60px;top:-60px;width:280px;height:280px;border-radius:50%;background:rgba(255,255,255,0.15);pointer-events:none"></div>
      <div style="position:absolute;left:-30px;bottom:-40px;width:180px;height:180px;border-radius:50%;background:rgba(255,140,0,0.1);pointer-events:none"></div>
      <div class="max-w-5xl mx-auto">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:2.5rem">
          <span style="display:inline-block;width:28px;height:3px;background:rgba(28,28,30,0.35);border-radius:2px"></span>
          <span style="font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:rgba(28,28,30,0.45)">Creative Manifesto</span>
        </div>
        <p style="
          font-family:'Space Grotesk',Inter,sans-serif;
          font-size:clamp(2.5rem,6vw,5rem);
          font-weight:700;line-height:1.05;
          letter-spacing:-.03em;color:#1C1C1E;
          margin-bottom:2.5rem
        ">This is where<br><em style="font-style:italic;color:#C05C11">ideas play.</em></p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:2rem;align-items:start">
          <div>
            <p style="font-size:1.1rem;line-height:1.7;color:rgba(28,28,30,0.72);font-weight:500">
              CroissantsMoon exists because creativity is an act of exploration — not execution. It's the space where questions matter more than answers, and unfinished work is still honest work.
            </p>
          </div>
          <div style="display:flex;flex-direction:column;gap:14px">
            <div class="cm-sticky-note" style="transform:rotate(-2deg)">"Ideas don't wait for permission." ✦</div>
            <div class="cm-sticky-note" style="transform:rotate(1.5deg);background:${CM.pink};margin-top:6px;align-self:flex-end">combining tech with storytelling ◈</div>
            <div class="cm-sticky-note" style="transform:rotate(-1deg);background:#fff">embrace the experiment ◉</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px;margin-top:2.5rem">
          ${pillars}
        </div>
      </div>
    </div>`;
}

// ── Works: card helpers ───────────────────────────────────────────────────────

function cmWebCardPreview(w) {
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

function cmWebCard(w) {
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
      ${cmWebCardPreview(w)}
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

function cmGDCard(g, i) {
  return `
    <button onclick="cmOpenGDPreview(${i})" class="cm-gd-card">
      <div style="position:relative;overflow:hidden;height:175px">
        <img
          src="./assets/images/graphic-designs/${g.folder}/1.png"
          alt="${g.title}"
          style="width:100%;height:100%;object-fit:cover;transition:transform .4s ease"
          onmouseover="this.style.transform='scale(1.06)'"
          onmouseout="this.style.transform='scale(1)'"
          loading="lazy"
        />
        <div class="cm-gd-overlay">
          <span style="
            background:rgba(255,255,255,0.14);
            border:1.5px solid rgba(255,255,255,0.32);
            color:#fff;padding:7px 18px;border-radius:999px;
            font-size:.76rem;font-weight:600;
            backdrop-filter:blur(6px)
          ">◈ Preview</span>
        </div>
        <div style="position:absolute;top:10px;right:10px;background:${g.bg};color:${g.tc};padding:2px 9px;border-radius:999px;font-size:.58rem;font-weight:700">${g.year}</div>
      </div>
      <div style="padding:12px 14px 15px">
        <div style="font-size:.58rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:${g.tc};opacity:.8;margin-bottom:4px">${g.cat}</div>
        <h4 style="font-family:'Space Grotesk',Inter,sans-serif;font-weight:700;font-size:.84rem;color:#1C1C1E;line-height:1.35;margin-bottom:3px">${g.title}</h4>
        <span style="font-size:.68rem;color:rgba(28,28,30,0.4)">${g.inst}</span>
      </div>
    </button>`;
}

// ── Works: section builder ────────────────────────────────────────────────────

function cmBuildWorks() {
  const webCards = CM_WEB_WORKS.map(w => cmWebCard(w)).join('');
  const gdCards  = CM_GRAPHIC_WORKS.map((g, i) => cmGDCard(g, i)).join('');

  return `
    <div id="cm-works" class="cm-reveal" style="padding:clamp(4rem,8vh,6rem) 24px;background:${CM.cream}">
      <div class="max-w-5xl mx-auto">

        <div style="display:flex;align-items:center;gap:12px;margin-bottom:1rem">
          <span style="display:inline-block;width:28px;height:3px;background:${CM.coral};border-radius:2px"></span>
          <span style="font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${CM.coral}">Selected Works</span>
        </div>
        <h2 style="font-family:'Space Grotesk',Inter,sans-serif;font-size:clamp(2rem,4vw,3rem);font-weight:700;color:#1C1C1E;margin-bottom:.5rem;letter-spacing:-.03em">The Creative Lab</h2>
        <p style="font-size:.93rem;color:rgba(28,28,30,0.48);margin-bottom:1.75rem;max-width:460px;line-height:1.65">
          Web experiences and graphic design — ${CM_WEB_WORKS.length} websites and ${CM_GRAPHIC_WORKS.length} print & digital publications, all designed with care and intention.
        </p>

        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:2.75rem">
          <button onclick="cmFilterWorks('all')"     id="cm-fw-all"     class="cm-filter-btn cm-f-active">All Works</button>
          <button onclick="cmFilterWorks('web')"     id="cm-fw-web"     class="cm-filter-btn">✦ Web Design</button>
          <button onclick="cmFilterWorks('graphic')" id="cm-fw-graphic" class="cm-filter-btn">◈ Graphic Design</button>
        </div>

        <div id="cm-section-web">
          <div style="font-size:.65rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:${CM.blue};margin-bottom:1.2rem;display:flex;align-items:center;gap:10px">
            <span style="width:18px;height:2px;background:${CM.blue};border-radius:1px;display:inline-block"></span>
            Web Design
            <span style="font-weight:500;color:rgba(28,28,30,0.28);letter-spacing:.06em">${CM_WEB_WORKS.length} projects</span>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(274px,1fr));gap:18px;margin-bottom:3.5rem">
            ${webCards}
          </div>
        </div>

        <div id="cm-section-graphic">
          <div style="font-size:.65rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:${CM.coral};margin-bottom:1.2rem;display:flex;align-items:center;gap:10px">
            <span style="width:18px;height:2px;background:${CM.coral};border-radius:1px;display:inline-block"></span>
            Graphic Design
            <span style="font-weight:500;color:rgba(28,28,30,0.28);letter-spacing:.06em">${CM_GRAPHIC_WORKS.length} projects — click any to preview</span>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:14px">
            ${gdCards}
          </div>
        </div>

      </div>
    </div>`;
}

function cmBuildProcess() {
  const steps = CM_PROCESS.map((s, i, arr) => {
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
    <div class="cm-reveal" style="padding:clamp(4rem,8vh,6rem) 24px;background:linear-gradient(135deg,#F2ECE4 0%,${CM.cream} 100%)">
      <div class="max-w-4xl mx-auto">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:1rem">
          <span style="display:inline-block;width:28px;height:3px;background:${CM.purple};border-radius:2px"></span>
          <span style="font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${CM.purple}">Creative Process</span>
        </div>
        <h2 style="font-family:'Space Grotesk',Inter,sans-serif;font-size:clamp(2rem,4vw,3rem);font-weight:700;color:#1C1C1E;margin-bottom:.6rem;letter-spacing:-.03em">How Ideas Evolve</h2>
        <p style="font-size:.93rem;color:rgba(28,28,30,0.48);margin-bottom:2.75rem;max-width:440px;line-height:1.65">Organic, not linear. Each step flows into the next — and then it starts again.</p>
        <div style="max-width:640px">
          ${steps}
        </div>
        <div style="
          display:flex;align-items:center;gap:10px;
          padding-left:68px;margin-top:8px;opacity:.38
        ">
          <span style="font-family:'Caveat',cursive;font-size:1rem;color:${CM.orange}">↩ and then it starts over</span>
        </div>
      </div>
    </div>`;
}

function cmExptVisual(type, color) {
  if (type === 'bars') {
    const bars = [72, 100, 48, 88, 60, 78].map(w =>
      `<div style="height:3px;width:${w}%;background:${color};border-radius:2px;opacity:${0.25 + w / 250}"></div>`
    ).join('');
    return `<div style="height:52px;padding:10px 16px;display:flex;flex-direction:column;justify-content:space-between">${bars}</div>`;
  }
  if (type === 'dots') {
    const dots = Array.from({ length: 30 }, (_, i) =>
      `<span style="width:5px;height:5px;border-radius:50%;background:${color};display:inline-block;opacity:${0.15 + (i % 5) * 0.16}"></span>`
    ).join('');
    return `<div style="height:52px;padding:8px 14px;display:flex;flex-wrap:wrap;gap:4px;align-content:flex-start;overflow:hidden">${dots}</div>`;
  }
  if (type === 'layers') {
    return `<div style="height:52px;padding:8px 14px;position:relative;overflow:hidden">
      <div style="position:absolute;left:14px;top:8px;width:72%;height:14px;border-radius:4px;background:${color};opacity:.18;border:1px solid ${color}"></div>
      <div style="position:absolute;left:22px;top:18px;width:54%;height:14px;border-radius:4px;background:${color};opacity:.28;border:1px solid ${color}60"></div>
      <div style="position:absolute;left:18px;top:28px;width:62%;height:14px;border-radius:4px;background:${color};opacity:.14;border:1px solid ${color}40"></div>
    </div>`;
  }
  return `<div style="height:52px;padding:10px 14px;display:flex;align-items:center;overflow:hidden">
    <svg viewBox="0 0 130 32" width="130" height="32" fill="none" style="overflow:visible">
      <path d="M0,16 Q16,4 32,16 Q48,28 64,16 Q80,4 96,16 Q112,28 128,16" stroke="${color}" stroke-width="2" opacity=".45"/>
      <path d="M0,21 Q16,8 32,21 Q48,34 64,21 Q80,8 96,21 Q112,34 128,21" stroke="${color}" stroke-width="1.5" opacity=".25"/>
    </svg>
  </div>`;
}

function cmBuildExperiments() {
  const expts = [
    { icon: 'monitor', title: 'Frontend Experiments', desc: 'Interactive UI concepts and web animation studies — built in vanilla JS and CSS.', color: CM.blue,     tag: 'HTML + CSS + JS', status: 'ACTIVE',     statusHex: '#28C840', progress: 75, visual: 'bars'   },
    { icon: 'code-2',  title: 'Creative Coding',      desc: 'Generative visuals, canvas sketches, and algorithmic art experiments.',          color: CM.mint,     tag: 'Canvas API',      status: 'BUILDING',   statusHex: '#FEBC2E', progress: 35, visual: 'dots'   },
    { icon: 'layers',  title: 'Interface Explorations',desc: 'Prototypes and design experiments — trying ideas that might become real projects.',color: CM.lavender, tag: 'Figma + Code',    status: 'EXPLORING',  statusHex: CM.blue,   progress: 50, visual: 'layers' },
    { icon: 'zap',     title: 'Micro-Interactions',   desc: 'Hover effects, transitions, and the tiny animations that make experiences feel alive.', color: CM.peach, tag: 'CSS Animations', status: 'ACTIVE',    statusHex: '#28C840', progress: 68, visual: 'waves'  },
  ];

  const cards = expts.map(e => `
    <div style="
      background:rgba(255,255,255,0.04);
      border:1px solid rgba(255,255,255,0.09);
      border-radius:16px;overflow:hidden;
      transition:background .2s,transform .2s,box-shadow .2s
    " onmouseover="this.style.background='rgba(255,255,255,0.08)';this.style.transform='translateY(-4px)';this.style.boxShadow='0 20px 40px rgba(0,0,0,0.25)'"
       onmouseout="this.style.background='rgba(255,255,255,0.04)';this.style.transform='';this.style.boxShadow=''">
      <div style="background:rgba(255,255,255,0.03);border-bottom:1px solid rgba(255,255,255,0.07)">
        ${cmExptVisual(e.visual, e.color)}
      </div>
      <div style="padding:20px 22px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:13px">
          <span style="width:7px;height:7px;border-radius:50%;background:${e.statusHex};display:inline-block;${e.status === 'ACTIVE' ? 'animation:cmPulseDot 2s infinite' : ''}"></span>
          <span style="font-size:.6rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:${e.statusHex}">${e.status}</span>
          <span style="flex:1"></span>
          <div style="width:30px;height:30px;border-radius:8px;background:${e.color}1A;display:flex;align-items:center;justify-content:center">
            <i data-lucide="${e.icon}" style="width:14px;height:14px;color:${e.color}"></i>
          </div>
        </div>
        <h4 style="font-family:'Space Grotesk',Inter,sans-serif;font-weight:700;font-size:.95rem;color:#fff;margin-bottom:8px;line-height:1.3">${e.title}</h4>
        <p style="font-size:.79rem;line-height:1.6;color:rgba(255,255,255,0.4);margin-bottom:16px">${e.desc}</p>
        <div style="margin-bottom:14px">
          <div style="display:flex;justify-content:space-between;margin-bottom:5px">
            <span style="font-size:.6rem;color:rgba(255,255,255,0.28);font-weight:500">progress</span>
            <span style="font-size:.6rem;color:${e.color};font-weight:700">${e.progress}%</span>
          </div>
          <div style="height:3px;background:rgba(255,255,255,0.08);border-radius:2px;overflow:hidden">
            <div style="height:100%;width:${e.progress}%;background:${e.color};border-radius:2px;transition:width .4s ease"></div>
          </div>
        </div>
        <span style="background:${e.color}18;color:${e.color};padding:3px 10px;border-radius:999px;font-size:.64rem;font-weight:600;letter-spacing:.05em">${e.tag}</span>
      </div>
    </div>`).join('');

  const commits = [
    ['feat', 'add scroll-reveal + particle canvas',         CM.mint   ],
    ['feat', 'typewriter effect on hero subtitle',          CM.blue   ],
    ['refactor', 'restructure creative lab section',        CM.yellow ],
    ['experiment', 'gradient text animation on title',      CM.lavender],
  ].map(([type, msg, color]) => `
    <div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)">
      <span style="width:8px;height:8px;border-radius:50%;border:2px solid ${color};flex-shrink:0"></span>
      <span style="font-size:.64rem;color:${color};font-weight:700;font-family:'Space Mono',monospace;letter-spacing:.02em;flex-shrink:0">${type}</span>
      <span style="font-size:.7rem;color:rgba(255,255,255,0.35);font-family:'Space Mono',monospace;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${msg}</span>
    </div>`).join('');

  return `
    <div class="cm-reveal" style="padding:clamp(4rem,8vh,6rem) 24px;background:#1C1C1E;position:relative;overflow:hidden">
      <div style="position:absolute;top:-100px;right:-100px;width:420px;height:420px;border-radius:50%;background:${CM.blue};opacity:.04;pointer-events:none"></div>
      <div style="position:absolute;bottom:-80px;left:-60px;width:340px;height:340px;border-radius:50%;background:${CM.purple};opacity:.05;pointer-events:none"></div>
      <div class="max-w-5xl mx-auto relative" style="z-index:1">

        <div style="display:flex;align-items:center;gap:12px;margin-bottom:.5rem">
          <span style="display:inline-block;width:28px;height:3px;background:${CM.mint};border-radius:2px"></span>
          <span style="font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${CM.mint}">Digital Experiments</span>
        </div>
        <div style="font-family:'Space Mono',monospace;font-size:.8rem;color:${CM.mint};margin-bottom:.6rem;display:flex;align-items:center;gap:6px;opacity:.7">
          <span>$</span>
          <span>experiments.run()</span>
          <span class="cm-type-cursor" style="width:7px;height:.85em;background:${CM.mint}"></span>
        </div>
        <h2 style="font-family:'Space Grotesk',Inter,sans-serif;font-size:clamp(2rem,4vw,3rem);font-weight:700;color:#fff;margin-bottom:.6rem;letter-spacing:-.03em">The Sandbox</h2>
        <p style="font-size:.93rem;color:rgba(255,255,255,0.42);margin-bottom:2.5rem;max-width:440px;line-height:1.65">Where ideas get tested before they're real. Active experiments, works in progress, and things being figured out.</p>

        <div style="
          padding:22px 26px;
          background:rgba(255,255,255,0.04);
          border:1px solid rgba(255,255,255,0.1);
          border-left:3px solid ${CM.mint};
          border-radius:16px;
          display:flex;align-items:flex-start;gap:20px;flex-wrap:wrap;
          margin-bottom:22px
        ">
          <div style="flex:1;min-width:240px">
            <div style="display:flex;align-items:center;gap:7px;margin-bottom:10px">
              <span style="width:8px;height:8px;border-radius:50%;background:#28C840;display:inline-block;animation:cmPulseDot 2s infinite"></span>
              <span style="font-size:.64rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#28C840">Live Experiment</span>
            </div>
            <h3 style="font-family:'Space Grotesk',Inter,sans-serif;font-size:1.1rem;font-weight:700;color:#fff;margin-bottom:7px">This Portfolio</h3>
            <p style="font-size:.82rem;line-height:1.65;color:rgba(255,255,255,0.45);max-width:440px">An ongoing experiment in editorial web design — every interaction, transition, and section is being designed and refined in public. You're inside the experiment right now.</p>
          </div>
          <button onclick="goToPage('websites')" style="
            background:${CM.mint}22;color:${CM.mint};
            border:1px solid ${CM.mint}44;
            padding:10px 22px;border-radius:999px;
            font-size:.78rem;font-weight:600;cursor:pointer;
            display:inline-flex;align-items:center;gap:7px;
            transition:background .2s;white-space:nowrap;flex-shrink:0;align-self:center
          " onmouseover="this.style.background='${CM.mint}33'" onmouseout="this.style.background='${CM.mint}22'">
            Explore web work <i data-lucide="arrow-right" style="width:12px;height:12px"></i>
          </button>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(248px,1fr));gap:16px;margin-bottom:28px">
          ${cards}
        </div>

        <div style="
          padding:18px 22px;
          background:rgba(255,255,255,0.02);
          border:1px solid rgba(255,255,255,0.07);
          border-radius:12px
        ">
          <div style="font-size:.62rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,0.25);margin-bottom:10px;font-family:'Space Mono',monospace">recent commits</div>
          ${commits}
        </div>

      </div>
    </div>`;
}

function cmBuildMoodboard() {
  const rotations = ['-2deg','1deg','-1.5deg','2.5deg','0deg','-0.8deg','1.2deg','-1deg','0.5deg','-1.2deg','1.8deg','-0.5deg','2deg','-1.8deg','0.8deg'];
  const fontSizes = ['.77rem', '.9rem', '1.05rem'];
  const paddings  = ['5px 14px', '7px 18px', '9px 22px'];

  const tags = CM_INSPO.map((item, i) => {
    const sz  = i % 3;
    const rot = rotations[i % rotations.length];
    const textColor = (item.color === CM.yellow || item.color === CM.mint || item.color === CM.peach)
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
    <div class="cm-reveal" style="padding:clamp(4rem,8vh,6rem) 24px;background:${CM.cream}">
      <div class="max-w-5xl mx-auto">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:1rem">
          <span style="display:inline-block;width:28px;height:3px;background:${CM.orange};border-radius:2px"></span>
          <span style="font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${CM.orange}">Design Philosophy</span>
        </div>
        <h2 style="font-family:'Space Grotesk',Inter,sans-serif;font-size:clamp(2rem,4vw,3rem);font-weight:700;color:#1C1C1E;margin-bottom:.75rem;letter-spacing:-.03em">What Drives the Work</h2>
        <p style="font-size:.95rem;color:rgba(28,28,30,0.55);margin-bottom:2.5rem;max-width:520px;line-height:1.72">
          Design is urgency made visible. Every piece bridges a real person — someone who just landed in an unfamiliar country, holding a document they can barely read — with the information they need to belong. These are the ideas and tensions that shape everything.
        </p>
        <div style="display:flex;flex-wrap:wrap;align-items:center;padding:28px;background:#fff;border-radius:24px;border:1px solid rgba(28,28,30,0.07);box-shadow:0 4px 24px rgba(0,0,0,0.04)">
          ${tags}
        </div>
      </div>
    </div>`;
}

function cmBuildFunSection() {
  const stickers = CM_STICKERS.map(s => {
    const lightBg  = [CM.yellow, CM.mint, CM.peach, CM.blue].includes(s.bg);
    const textColor = lightBg ? '#1C1C1E' : (s.bg === CM.purple ? '#fff' : '#1C1C1E');
    return `
      <div class="cm-sticker" style="
        left:${s.x};top:${s.y};
        background:${s.bg};color:${textColor};
        padding:10px 18px;border-radius:8px;
        font-family:'Caveat',cursive;font-size:1.15rem;font-weight:600;
        transform:rotate(${s.rotate});
        box-shadow:2px 4px 14px rgba(0,0,0,0.12),0 1px 0 rgba(255,255,255,0.28) inset;
        z-index:10;white-space:nowrap;position:absolute
      ">${s.text}</div>`;
  }).join('');

  const reactions = [['✨','Inspired'],['🎨','Creative'],['🌙','Dreamy'],['🔥','Energized']]
    .map(([emoji, label]) => `
      <button onclick="cmReact(this,'${label}')" style="
        background:#fff;border:1.5px solid rgba(28,28,30,0.1);
        padding:8px 16px;border-radius:999px;
        font-size:.85rem;cursor:pointer;
        display:inline-flex;align-items:center;gap:6px;
        transition:background .18s
      " onmouseover="this.style.background='#f5f5f5'" onmouseout="this.style.background='#fff'">
        ${emoji} <span style="font-size:.74rem;font-weight:500;color:rgba(28,28,30,0.58)">${label}</span>
      </button>`).join('');

  return `
    <div class="cm-reveal" style="padding:clamp(4rem,8vh,6rem) 24px;background:linear-gradient(135deg,${CM.lavender}2A,${CM.blue}1A)">
      <div class="max-w-5xl mx-auto">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:1rem">
          <span style="display:inline-block;width:28px;height:3px;background:${CM.purple};border-radius:2px"></span>
          <span style="font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${CM.purple}">Just for Fun</span>
        </div>
        <h2 style="font-family:'Space Grotesk',Inter,sans-serif;font-size:clamp(2rem,4vw,3rem);font-weight:700;color:#1C1C1E;margin-bottom:.6rem;letter-spacing:-.03em">Drag the Stickers ✦</h2>
        <p style="font-size:.93rem;color:rgba(28,28,30,0.52);margin-bottom:2rem;max-width:420px;line-height:1.65">Every creative space needs a corkboard. This one is interactive — drag the stickers around.</p>
        <div id="cm-sticker-board" style="
          position:relative;height:420px;
          background:rgba(255,255,255,0.52);
          border:1.5px dashed rgba(28,28,30,0.12);
          border-radius:24px;overflow:hidden;
          backdrop-filter:blur(8px)
        ">
          <div style="
            position:absolute;inset:0;pointer-events:none;
            background-image:radial-gradient(circle,rgba(28,28,30,0.055) 1px,transparent 1px);
            background-size:28px 28px
          "></div>
          ${stickers}
          <div style="position:absolute;bottom:18px;right:20px;font-family:'Caveat',cursive;font-size:.95rem;color:rgba(28,28,30,0.22);pointer-events:none">← drag to rearrange</div>
        </div>
        <div style="display:flex;gap:12px;margin-top:22px;flex-wrap:wrap;align-items:center">
          <span style="font-size:.8rem;font-weight:600;color:rgba(28,28,30,0.38)">How does this page make you feel?</span>
          ${reactions}
          <span id="cm-react-msg" style="font-family:'Caveat',cursive;font-size:1.15rem;color:${CM.orange};display:none"></span>
        </div>
      </div>
    </div>`;
}

function cmBuildFutureVision() {
  const visionTags = [
    ['◉ Web Experiences', CM.blue],
    ['◈ Brand Identities', CM.mint],
    ['✦ Editorial Design', CM.yellow],
    ['⬡ Digital Strategy', CM.lavender],
  ].map(([tag, color]) => `
    <span style="
      background:rgba(255,255,255,0.18);
      border:1.5px solid rgba(255,255,255,0.35);
      color:#fff;padding:8px 20px;border-radius:999px;
      font-size:.79rem;font-weight:600
    ">${tag}</span>`).join('');

  return `
    <div class="cm-reveal" style="padding:clamp(4rem,10vh,7rem) 24px;background:${CM.orange};position:relative;overflow:hidden">
      <div style="position:absolute;top:-60px;left:-60px;width:300px;height:300px;border-radius:50%;background:rgba(255,255,255,0.1);pointer-events:none"></div>
      <div style="position:absolute;bottom:-40px;right:-40px;width:240px;height:240px;border-radius:50%;background:rgba(0,0,0,0.06);pointer-events:none"></div>
      <div class="max-w-4xl mx-auto text-center relative" style="z-index:1">
        <div style="display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:2rem">
          <span style="display:inline-block;width:28px;height:3px;background:rgba(255,255,255,0.5);border-radius:2px"></span>
          <span style="font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,0.6)">Future Vision</span>
          <span style="display:inline-block;width:28px;height:3px;background:rgba(255,255,255,0.5);border-radius:2px"></span>
        </div>
        <h2 style="
          font-family:'Space Grotesk',Inter,sans-serif;
          font-size:clamp(2rem,5vw,3.8rem);
          font-weight:700;color:#fff;
          line-height:1.1;letter-spacing:-.04em;margin-bottom:1.5rem
        ">"A creative ecosystem where education,<br>technology, and design converge."</h2>
        <p style="font-size:1rem;line-height:1.7;color:rgba(255,255,255,0.72);max-width:500px;margin:0 auto 2.5rem">
          CroissantsMoon will grow into a boutique creative practice specializing in experiences for education, culture, and institutions that value craft over noise. This is the beginning.
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center">${visionTags}</div>
      </div>
    </div>`;
}

function cmBuildContact() {
  return `
    <div class="cm-reveal" style="padding:clamp(5rem,10vh,7rem) 24px;background:${CM.cream};border-top:1px solid rgba(28,28,30,0.06)">
      <div class="max-w-4xl mx-auto text-center">
        <span style="font-size:2.5rem;display:block;margin-bottom:24px">✉</span>
        <h2 style="
          font-family:'Space Grotesk',Inter,sans-serif;
          font-size:clamp(2rem,5vw,3.8rem);
          font-weight:700;color:#1C1C1E;
          margin-bottom:1rem;letter-spacing:-.04em
        ">Got an idea?<br><span style="color:${CM.orange}">Let's make something fun.</span></h2>
        <p style="font-size:.98rem;line-height:1.7;color:rgba(28,28,30,0.48);max-width:440px;margin:0 auto 2.5rem">
          Whether it's a wild concept, a half-formed idea, or a clear brief — the conversation starts the same way. Say hello.
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
          <a href="mailto:zefanya.kharisma@gmail.com" style="
            border:1.5px solid rgba(28,28,30,0.2);
            color:#1C1C1E;background:transparent;
            padding:16px 28px;border-radius:999px;
            font-size:.86rem;font-weight:600;
            cursor:pointer;text-decoration:none;
            display:inline-flex;align-items:center;gap:8px;
            transition:background .2s
          " onmouseover="this.style.background='rgba(28,28,30,0.05)'" onmouseout="this.style.background='transparent'">
            <i data-lucide="mail" style="width:15px;height:15px"></i>
            zefanya.kharisma@gmail.com
          </a>
        </div>
        <div style="display:flex;justify-content:center;margin-top:48px">
          <button onclick="goToPage('home')" style="
            display:inline-flex;align-items:center;gap:6px;
            background:none;border:none;cursor:pointer;
            font-size:.8rem;color:rgba(28,28,30,0.32);
            padding:8px 12px;border-radius:8px;transition:color .18s
          " onmouseover="this.style.color='rgba(28,28,30,0.6)'" onmouseout="this.style.color='rgba(28,28,30,0.32)'">
            <i data-lucide="arrow-left" style="width:14px;height:14px"></i> Back to main portfolio
          </button>
        </div>
      </div>
    </div>`;
}

// ── Interactive JS ────────────────────────────────────────────────────────────

function cmInitCursorGlow() {
  const glow = document.getElementById('cm-cursor-glow');
  const hero  = document.getElementById('cm-hero');
  if (!glow || !hero) return;
  hero.addEventListener('mousemove', e => {
    const rect = hero.getBoundingClientRect();
    glow.style.left = (e.clientX - rect.left) + 'px';
    glow.style.top  = (e.clientY - rect.top)  + 'px';
  });
}

function cmInitDraggableStickers() {
  const board = document.getElementById('cm-sticker-board');
  if (!board) return;

  board.querySelectorAll('.cm-sticker').forEach(sticker => {
    let dragging = false, sx, sy, sl, st;

    const onStart = (cx, cy) => {
      dragging = true;
      sx = cx; sy = cy;
      const cs = window.getComputedStyle(sticker);
      sl = parseFloat(cs.left) || 0;
      st = parseFloat(cs.top)  || 0;
      sticker.style.zIndex     = '100';
      sticker.style.transition = 'none';
    };
    const onMove = (cx, cy) => {
      if (!dragging) return;
      sticker.style.left = (sl + cx - sx) + 'px';
      sticker.style.top  = (st + cy - sy) + 'px';
    };
    const onEnd = () => {
      dragging = false;
      sticker.style.zIndex     = '10';
      sticker.style.transition = '';
    };

    sticker.addEventListener('mousedown',  e => { onStart(e.clientX, e.clientY); e.preventDefault(); });
    document.addEventListener('mousemove', e => onMove(e.clientX, e.clientY));
    document.addEventListener('mouseup',   onEnd);

    sticker.addEventListener('touchstart', e => { const t = e.touches[0]; onStart(t.clientX, t.clientY); e.preventDefault(); }, { passive: false });
    document.addEventListener('touchmove', e => { const t = e.touches[0]; onMove(t.clientX, t.clientY); });
    document.addEventListener('touchend',  onEnd);
  });
}

function cmReact(btn, label) {
  const msgs = {
    Inspired: "That's what this is all about! ✨",
    Creative: "Yes! Let's make something together. 🎨",
    Dreamy:   "CroissantsMoon vibes. 🌙",
    Energized:"Let's channel that energy into something. 🔥",
  };
  const el = document.getElementById('cm-react-msg');
  if (!el) return;
  el.textContent = msgs[label] || '✦';
  el.style.display = 'inline';
  setTimeout(() => { el.style.display = 'none'; }, 3200);

  const rect = btn.getBoundingClientRect();
  cmFireConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
}

window.cmReact = cmReact;

// ── Page Init ─────────────────────────────────────────────────────────────────

function cmInitPage() {
  cmInjectFonts();
  const el = document.getElementById('page-croissantsmoon');
  if (!el) return;

  el.style.background = CM.cream;
  el.innerHTML = [
    cmBuildHero(),
    cmBuildMarquee(),
    cmBuildManifesto(),
    cmBuildWorks(),
    cmBuildProcess(),
    cmBuildExperiments(),
    cmBuildMoodboard(),
    cmBuildFunSection(),
    cmBuildFutureVision(),
    cmBuildContact(),
  ].join('');

  if (window.lucide) lucide.createIcons();

  setTimeout(() => {
    cmInitCursorGlow();
    cmInitDraggableStickers();
    cmInitScrollReveal();
    cmInitCustomCursor();
    cmInitParticles();
    cmInitTypewriter();
  }, 80);
}

document.addEventListener('DOMContentLoaded', cmInitPage);

// ── Scroll Reveal ─────────────────────────────────────────────────────────────

function cmInitScrollReveal() {
  const page = document.getElementById('page-croissantsmoon');
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

// ── Custom Creative Cursor ────────────────────────────────────────────────────

function cmInitCustomCursor() {
  if (window.__cmCursorInited) return;
  window.__cmCursorInited = true;

  const dot  = document.createElement('div');
  dot.id = 'cm-cursor-dot';
  dot.className = 'cm-cursor-dot';

  const ring = document.createElement('div');
  ring.id = 'cm-cursor-ring';
  ring.className = 'cm-cursor-ring';

  document.body.appendChild(dot);
  document.body.appendChild(ring);

  document.addEventListener('mousemove', e => {
    const page = document.getElementById('page-croissantsmoon');
    const isActive = page && page.classList.contains('active');

    if (!isActive) {
      dot.style.opacity = ring.style.opacity = '0';
      return;
    }

    dot.style.opacity  = '1';
    ring.style.opacity = '1';
    dot.style.left  = e.clientX + 'px';
    dot.style.top   = e.clientY + 'px';
    ring.style.left = e.clientX + 'px';
    ring.style.top  = e.clientY + 'px';
  });

  document.addEventListener('mouseleave', () => {
    dot.style.opacity = ring.style.opacity = '0';
  });
}

// ── Particle Canvas ───────────────────────────────────────────────────────────

function cmInitParticles() {
  const canvas = document.getElementById('cm-particles-canvas');
  if (!canvas) return;

  const ctx    = canvas.getContext('2d');
  const colors = [CM.yellow, CM.blue, CM.pink, CM.mint, CM.lavender, CM.peach, CM.coral];
  const syms   = ['✦', '◈', '◉', '◎', '·', '✺', '⬡', '★', '✿'];

  let W, H, particles, rafId;

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
    const page = document.getElementById('page-croissantsmoon');
    if (!page || !page.classList.contains('active')) { rafId = null; return; }

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

      if (p.x < -20)      p.x = W + 20;
      else if (p.x > W + 20) p.x = -20;
      if (p.y < -20)      p.y = H + 20;
      else if (p.y > H + 20) p.y = -20;
    });

    rafId = requestAnimationFrame(draw);
  };

  draw();
}

// ── Typewriter Effect ─────────────────────────────────────────────────────────

function cmInitTypewriter() {
  const el = document.getElementById('cm-typewriter');
  if (!el) return;

  const text = 'Creative Ideas, Digital Experiences,\nand Experiments in Progress.';
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

// ── Confetti Burst ────────────────────────────────────────────────────────────

function cmFireConfetti(x, y) {
  const colors = [CM.yellow, CM.blue, CM.pink, CM.mint, CM.lavender, CM.peach, CM.coral, CM.orange, '#fff'];
  const count  = 28;

  for (let i = 0; i < count; i++) {
    const piece  = document.createElement('div');
    piece.className = 'cm-confetti-piece';

    const size   = 5 + Math.random() * 8;
    const angle  = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.8;
    const dist   = 55 + Math.random() * 130;
    const dx     = Math.cos(angle) * dist;
    const dy     = Math.sin(angle) * dist - 30;
    const color  = colors[Math.floor(Math.random() * colors.length)];
    const round  = Math.random() > 0.45 ? '50%' : '2px';
    const delay  = (Math.random() * 0.1).toFixed(3);

    piece.style.cssText = `
      left:${x}px; top:${y}px;
      width:${size}px; height:${size}px;
      background:${color};
      border-radius:${round};
      --cm-dx:${dx}px;
      --cm-dy:${dy + 80}px;
      animation-delay:${delay}s;
    `;

    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 1500);
  }
}

window.cmFireConfetti = cmFireConfetti;

// ── Works Filter ──────────────────────────────────────────────────────────────

function cmFilterWorks(filter) {
  const webSec = document.getElementById('cm-section-web');
  const gdSec  = document.getElementById('cm-section-graphic');
  const btnAll = document.getElementById('cm-fw-all');
  const btnWeb = document.getElementById('cm-fw-web');
  const btnGfx = document.getElementById('cm-fw-graphic');
  if (!webSec || !gdSec) return;

  webSec.style.display = (filter === 'all' || filter === 'web')     ? '' : 'none';
  gdSec.style.display  = (filter === 'all' || filter === 'graphic') ? '' : 'none';

  [btnAll, btnWeb, btnGfx].forEach(b => b && b.classList.remove('cm-f-active'));
  ({ all: btnAll, web: btnWeb, graphic: btnGfx }[filter] || btnAll)?.classList.add('cm-f-active');
}
window.cmFilterWorks = cmFilterWorks;

// ── Graphic Design Lightbox ───────────────────────────────────────────────────

function cmOpenGDPreview(idx) {
  const g = CM_GRAPHIC_WORKS[idx];
  if (!g) return;

  const prev = document.getElementById('cm-gd-lightbox');
  if (prev) prev.remove();

  window.__cmGDP = { idx, imgIdx: 1 };

  const thumbs = Array.from({ length: g.imgs }, (_, i) => `
    <button onclick="cmGDJumpTo(${i + 1})" id="cm-gd-thumb-${i + 1}" style="
      width:58px;height:40px;border-radius:6px;overflow:hidden;padding:0;flex-shrink:0;cursor:pointer;
      border:2px solid ${i === 0 ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.2)'};
      transition:border-color .18s
    ">
      <img src="./assets/images/graphic-designs/${g.folder}/${i + 1}.png"
           style="width:100%;height:100%;object-fit:cover" loading="lazy">
    </button>`
  ).join('');

  const lb = document.createElement('div');
  lb.id = 'cm-gd-lightbox';
  lb.className = 'cm-gd-lightbox';
  lb.addEventListener('click', e => { if (e.target === lb) cmCloseGDPreview(); });

  lb.innerHTML = `
    <button onclick="cmCloseGDPreview()" style="
      position:absolute;top:18px;right:18px;
      background:rgba(255,255,255,0.1);border:1.5px solid rgba(255,255,255,0.18);
      color:#fff;width:40px;height:40px;border-radius:50%;
      display:flex;align-items:center;justify-content:center;
      cursor:pointer;font-size:1rem;z-index:10;flex-shrink:0
    ">✕</button>

    <div id="cm-gd-counter" style="
      position:absolute;top:22px;left:50%;transform:translateX(-50%);
      font-size:.72rem;font-weight:600;color:rgba(255,255,255,0.4);letter-spacing:.08em
    ">1 / ${g.imgs}</div>

    <img id="cm-gd-img"
      src="./assets/images/graphic-designs/${g.folder}/1.png"
      alt="${g.title}"
      class="cm-gd-lightbox-img"
    />

    <button onclick="cmNavGDPreview(-1)" class="cm-gd-nav-btn" style="left:max(16px,2.5vw)">‹</button>
    <button onclick="cmNavGDPreview(1)"  class="cm-gd-nav-btn" style="right:max(16px,2.5vw)">›</button>

    <div style="display:flex;gap:8px;margin-top:16px">${thumbs}</div>

    <div style="
      margin-top:14px;padding:14px 22px;
      background:rgba(255,255,255,0.055);
      border:1px solid rgba(255,255,255,0.09);
      border-radius:12px;
      display:flex;align-items:center;gap:18px;flex-wrap:wrap;
      max-width:min(860px,90vw);width:100%
    ">
      <div style="flex:1;min-width:180px">
        <div style="font-size:.58rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,0.38);margin-bottom:4px">${g.cat} · ${g.year}</div>
        <div style="font-family:'Space Grotesk',Inter,sans-serif;font-size:.92rem;font-weight:700;color:#fff">${g.title}</div>
        <div style="font-size:.72rem;color:rgba(255,255,255,0.4);margin-top:2px">${g.inst}</div>
      </div>
      <a href="${g.link}" target="_blank" rel="noopener noreferrer" style="
        background:${g.bg};color:${g.tc};
        padding:9px 20px;border-radius:999px;
        font-family:'Space Grotesk',Inter,sans-serif;
        font-size:.76rem;font-weight:700;
        display:inline-flex;align-items:center;gap:7px;
        text-decoration:none;white-space:nowrap;flex-shrink:0
      ">View on Canva ↗</a>
    </div>
    <p style="margin-top:10px;font-size:.65rem;color:rgba(255,255,255,0.25)">← → arrow keys to navigate · Esc to close</p>
  `;

  document.body.appendChild(lb);

  const onKey = e => {
    if (e.key === 'Escape')     { cmCloseGDPreview(); }
    if (e.key === 'ArrowLeft')  { cmNavGDPreview(-1); }
    if (e.key === 'ArrowRight') { cmNavGDPreview(1); }
  };
  document.addEventListener('keydown', onKey);
  lb._cmKey = onKey;
}
window.cmOpenGDPreview = cmOpenGDPreview;

function cmCloseGDPreview() {
  const lb = document.getElementById('cm-gd-lightbox');
  if (!lb) return;
  if (lb._cmKey) document.removeEventListener('keydown', lb._cmKey);
  lb.remove();
  window.__cmGDP = null;
}
window.cmCloseGDPreview = cmCloseGDPreview;

function cmNavGDPreview(dir) {
  if (!window.__cmGDP) return;
  const g = CM_GRAPHIC_WORKS[window.__cmGDP.idx];
  if (!g) return;
  let next = window.__cmGDP.imgIdx + dir;
  if (next < 1) next = g.imgs;
  if (next > g.imgs) next = 1;
  cmGDJumpTo(next);
}
window.cmNavGDPreview = cmNavGDPreview;

function cmGDJumpTo(i) {
  if (!window.__cmGDP) return;
  const g = CM_GRAPHIC_WORKS[window.__cmGDP.idx];
  if (!g) return;
  window.__cmGDP.imgIdx = i;

  const img = document.getElementById('cm-gd-img');
  if (img) {
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = `./assets/images/graphic-designs/${g.folder}/${i}.png`;
      img.style.opacity = '1';
    }, 160);
  }

  const counter = document.getElementById('cm-gd-counter');
  if (counter) counter.textContent = `${i} / ${g.imgs}`;

  for (let t = 1; t <= g.imgs; t++) {
    const thumb = document.getElementById(`cm-gd-thumb-${t}`);
    if (thumb) thumb.style.borderColor = t === i ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.2)';
  }
}
window.cmGDJumpTo = cmGDJumpTo;
