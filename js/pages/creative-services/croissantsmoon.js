// ── CroissantsMoon — Boutique Creative Studio ──────────────────────────────────

function cmInjectFonts() {
  if (document.querySelector('[data-cm-fonts]')) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Outfit:wght@300;400;500;600;700&display=swap';
  link.setAttribute('data-cm-fonts', '1');
  document.head.appendChild(link);
}

const CM = {
  cream:    '#FAF7F2',
  espresso: '#1C1410',
  gold:     '#C9A84C',
  blush:    '#F0E6D3',
  muted:    '#8C7B6B',
  border:   'rgba(28,20,16,0.1)',
};

// Maps GitHub repo names to internal detail-page routes
const CM_REPO_DETAIL_PAGE = {
  'Website-Portfolio':           'web-portfolio',
  'International-Office-Website':'web-pcu-global-intl',
  'Dashboard-Partnership':       'web-dashboard-partnership',
  'Dashboard-International-Grants': 'web-dashboard-grants',
};

const CM_GRAPHIC_WORKS = [
  { title: 'PCU Partnership Booklet',               cat: 'Brand Identity',   folder: 'partnership-booklet-pcu',               imgs: 3, link: 'https://canva.link/partnershipbookletpetra',            year: '2024–2025', inst: 'Petra Christian University'    },
  { title: 'PCU International Students Guide',      cat: 'Print & Digital',  folder: 'international-students-guidebook-pcu',  imgs: 3, link: 'https://canva.link/internationalstudentsguidebookpetra',year: '2024–2025', inst: 'Petra Christian University'    },
  { title: 'PCU Presentation Template',             cat: 'Visual Identity',  folder: 'general-ppt-pcu',                       imgs: 3, link: 'https://canva.link/jat6f7jcsawdmnu',                    year: '2024–2025', inst: 'Petra Christian University'    },
  { title: 'ACI 2025 Batch 2 Guidebook',            cat: 'Event Materials',  folder: 'booklet-aci-2025-b2-unair',             imgs: 3, link: 'https://canva.link/motmeousw72spno',                    year: '2025',      inst: 'Universitas Airlangga'         },
  { title: 'ACI 2025 Batch 1 Guidebook',            cat: 'Event Materials',  folder: 'guidebook-aci-2025-b1-unair',           imgs: 3, link: 'https://canva.link/6bysygp89hi879s',                    year: '2025',      inst: 'Universitas Airlangga'         },
  { title: 'Staffordshire Banyuwangi Booklet',      cat: 'Brand Identity',   folder: 'guidebook-staffordshire-unair',         imgs: 3, link: 'https://canva.link/i1i6dbnby7ho36z',                    year: '2025',      inst: 'Staffordshire × Airlangga'     },
  { title: 'AERO 2025 Presentation',                cat: 'Event Materials',  folder: 'aero-2025-unair',                       imgs: 3, link: 'https://canva.link/odx5kh4eara7iuh',                    year: '2025',      inst: 'Universitas Airlangga'         },
  { title: 'Airlangga Accommodation Guide',         cat: 'Print & Digital',  folder: 'accommodation-guidebook-unair',         imgs: 3, link: 'https://canva.link/l8pkkjs0x8f24sy',                    year: '2024–2025', inst: 'Universitas Airlangga'         },
  { title: 'Airlangga International Students Guide',cat: 'Social Media Kits',folder: 'international-students-guidebook-unair',imgs: 3, link: 'https://canva.link/xehf9jz9v781sn7',                    year: '2024–2025', inst: 'Universitas Airlangga'         },
];

const CM_LANG_COLORS = {
  'HTML': '#E34C26', 'CSS': '#9B4F96',
  'JavaScript': '#c9a21e', 'TypeScript': '#2B7489',
  'Python': '#3572A5', 'PHP': '#4F5D95',
};

let cmRepoFilter = 'all';

function cmLangColor(lang) { return CM_LANG_COLORS[lang] || CM.muted; }

function cmLangFilterKey(lang) {
  if (!lang) return 'other';
  if (lang === 'HTML' || lang === 'CSS') return 'html-css';
  if (lang === 'JavaScript' || lang === 'TypeScript') return 'javascript';
  return 'other';
}

function cmHumanize(name) {
  return name.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase()).trim();
}

// ── CSS ───────────────────────────────────────────────────────────────────────

function cmInjectPageCSS() {
  if (document.getElementById('cm-page-css')) return;
  const s = document.createElement('style');
  s.id = 'cm-page-css';
  s.textContent = `
    @keyframes cmPulse { 0%,100%{opacity:1} 50%{opacity:.55} }
    @keyframes cmFadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
    .cm-reveal { opacity:0; transform:translateY(16px); transition:opacity .55s ease-out, transform .55s ease-out; }
    .cm-visible { opacity:1 !important; transform:none !important; }
    .cm-card-hover { transition: transform .28s cubic-bezier(0.34,1.56,0.64,1), box-shadow .28s; }
    .cm-card-hover:hover { transform: translateY(-5px); box-shadow: 0 14px 42px rgba(28,20,16,0.11) !important; }
  `;
  document.head.appendChild(s);
}

// ── Section 1: Hero ───────────────────────────────────────────────────────────

function cmBuildHero() {
  const logoSVG = `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M40 28C40 36.28 33.28 43 25 43 16.72 43 10 36.28 10 28 10 19.72 16.72 13 25 13 22.2 16.4 20.5 20.8 20.5 25.5 20.5 33.06 25.24 39.4 32 41.6 36.4 39 40 34.1 40 28Z" fill="${CM.gold}" opacity="0.88"/>
    <path d="M14 38 Q19 31 27 32.5 Q35 34 40 27" stroke="${CM.gold}" stroke-width="1.75" stroke-linecap="round" fill="none" opacity="0.5"/>
    <circle cx="37" cy="15" r="2.2" fill="${CM.gold}" opacity="0.65"/>
    <circle cx="42" cy="20" r="1.2" fill="${CM.gold}" opacity="0.4"/>
  </svg>`;

  return `
    <div class="page-hero-banner" id="cm-hero-section" style="
      position:relative;overflow:hidden;
      background:linear-gradient(155deg,${CM.espresso} 0%,#2A1B11 50%,#3C2418 100%);
      padding:clamp(6rem,15vh,10rem) 24px clamp(5rem,12vh,9rem);
      min-height:92vh;display:flex;align-items:center;justify-content:center;
    ">
      <div style="position:absolute;inset:0;opacity:.028;pointer-events:none;z-index:0;
        background-image:url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.68%22 numOctaves=%224%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/></svg>');
        background-size:180px 180px"></div>
      <div style="position:absolute;left:-140px;top:-100px;width:560px;height:560px;border-radius:50%;
        background:radial-gradient(circle,${CM.gold}1E 0%,transparent 68%);pointer-events:none;z-index:0"></div>
      <div style="position:absolute;right:-100px;bottom:-80px;width:400px;height:400px;border-radius:50%;
        background:radial-gradient(circle,#7A4A2014 0%,transparent 70%);pointer-events:none;z-index:0"></div>
      <div style="position:absolute;right:8%;top:15%;opacity:.06;pointer-events:none;z-index:0;
        font-family:'Cormorant Garamond',serif;font-size:18rem;font-style:italic;color:${CM.gold};
        line-height:1;user-select:none">C</div>

      <div class="max-w-3xl mx-auto text-center relative" style="z-index:1;width:100%">
        <div id="cm-logotype" style="opacity:0;transform:translateY(12px);transition:opacity 600ms ease-out,transform 600ms ease-out">
          <div style="display:flex;justify-content:center;margin-bottom:1.75rem">${logoSVG}</div>
          <h1 style="
            font-family:'Cormorant Garamond',Georgia,serif;
            font-size:clamp(3rem,9vw,6.5rem);font-weight:400;font-style:italic;
            letter-spacing:.01em;line-height:.92;color:${CM.cream};margin-bottom:0
          " data-edit-key="cm_hero_title">CroissantsMoon</h1>
        </div>

        <p style="
          font-family:'Outfit',sans-serif;font-size:clamp(.75rem,1.5vw,.82rem);
          font-weight:400;letter-spacing:.18em;color:${CM.gold};
          text-transform:uppercase;margin:1.75rem 0 2.75rem;opacity:.85
        " data-edit-key="cm_hero_tagline">Digital presence, crafted with intention.</p>

        <div style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center">
          <a data-cm-scroll="cm-web-projects" href="#cm-web-projects" style="
            font-family:'Outfit',sans-serif;font-size:.85rem;font-weight:600;
            background:${CM.gold};color:${CM.espresso};padding:13px 28px;border-radius:999px;
            text-decoration:none;display:inline-flex;align-items:center;gap:8px;
            letter-spacing:.02em;transition:opacity .2s;box-shadow:0 4px 22px rgba(201,168,76,0.32)
          " onmouseover="this.style.opacity='.8'" onmouseout="this.style.opacity='1'">
            View Web Projects
            <i data-lucide="arrow-right" style="width:14px;height:14px"></i>
          </a>
          <a data-cm-scroll="cm-graphic-design" href="#cm-graphic-design" style="
            font-family:'Outfit',sans-serif;font-size:.85rem;font-weight:400;
            border:1px solid rgba(201,168,76,0.4);color:${CM.gold};
            padding:13px 28px;border-radius:999px;text-decoration:none;
            display:inline-flex;align-items:center;gap:8px;
            background:transparent;transition:background .2s
          " onmouseover="this.style.background='rgba(201,168,76,0.1)'" onmouseout="this.style.background='transparent'">
            View Design Work
            <i data-lucide="arrow-right" style="width:14px;height:14px"></i>
          </a>
        </div>

        <div style="margin-top:clamp(3.5rem,7vh,6rem);display:flex;flex-direction:column;align-items:center;gap:7px;opacity:.28">
          <span style="font-family:'Outfit',sans-serif;font-size:.58rem;letter-spacing:.16em;text-transform:uppercase;color:${CM.cream}">Scroll</span>
          <div style="width:1px;height:38px;background:linear-gradient(to bottom,${CM.cream},transparent)"></div>
        </div>
      </div>
    </div>`;
}

// ── Section 2: Services ───────────────────────────────────────────────────────

function cmBuildServices() {
  const cards = [
    {
      icon: 'monitor',
      headline: 'Websites that work as hard as you do',
      desc: 'Purposeful web builds for educational institutions and companies — clean, accessible, and built to grow.',
      tags: ['Landing Pages', 'Institution Sites', 'Web Portfolios', 'CMS Integration'],
      editKey: 'cm_service_web',
    },
    {
      icon: 'pen-tool',
      headline: 'Visual identity that earns trust',
      desc: 'Brand identities, digital assets, and visual systems that position your institution or company with clarity and confidence.',
      tags: ['Brand Identity', 'Social Media Kits', 'Event Materials', 'Print & Digital'],
      editKey: 'cm_service_design',
    },
  ].map(card => `
    <div class="cm-card-hover cm-reveal" style="
      background:#FFFFFF;border:1px solid ${CM.border};
      border-radius:22px;padding:clamp(2rem,4vw,2.75rem);
      box-shadow:0 4px 28px rgba(28,20,16,0.06)
    ">
      <div style="width:48px;height:48px;border-radius:14px;background:${CM.blush};
        display:flex;align-items:center;justify-content:center;margin-bottom:1.5rem">
        <i data-lucide="${card.icon}" style="width:22px;height:22px;color:${CM.muted}"></i>
      </div>
      <h3 style="
        font-family:'Cormorant Garamond',Georgia,serif;
        font-size:clamp(1.35rem,2.5vw,1.7rem);font-weight:500;font-style:italic;
        color:${CM.espresso};line-height:1.25;margin-bottom:1rem
      " data-edit-key="${card.editKey}_headline">${card.headline}</h3>
      <p style="
        font-family:'Outfit',sans-serif;font-size:.88rem;line-height:1.74;
        color:${CM.muted};margin-bottom:1.5rem
      " data-edit-key="${card.editKey}_desc">${card.desc}</p>
      <div style="display:flex;flex-wrap:wrap;gap:7px">
        ${card.tags.map(t => `
          <span style="
            font-family:'Outfit',sans-serif;font-size:.7rem;font-weight:400;
            background:${CM.blush};color:${CM.muted};
            padding:4px 13px;border-radius:999px;border:1px solid ${CM.border}
          ">${t}</span>`).join('')}
      </div>
    </div>`).join('');

  return `
    <div style="background:${CM.cream};padding:clamp(4.5rem,9vh,7rem) 24px">
      <div class="max-w-5xl mx-auto">
        <div class="cm-reveal" style="text-align:center;margin-bottom:3.5rem">
          <p style="font-family:'Outfit',sans-serif;font-size:.65rem;font-weight:600;
            letter-spacing:.18em;text-transform:uppercase;color:${CM.gold};margin-bottom:.85rem">What We Do</p>
          <h2 style="
            font-family:'Cormorant Garamond',Georgia,serif;
            font-size:clamp(2.2rem,5vw,3.5rem);font-weight:400;font-style:italic;
            color:${CM.espresso};line-height:1.1;letter-spacing:-.01em
          " data-edit-key="cm_services_title">Two crafts. One studio.</h2>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px">
          ${cards}
        </div>
      </div>
    </div>`;
}

// ── Section 3: Web Projects (GitHub API) ─────────────────────────────────────

function cmBuildRepoSkeletons() {
  return Array.from({ length: 6 }, () => `
    <div style="background:#FFF;border-radius:16px;overflow:hidden;border:1px solid ${CM.border};
      animation:cmPulse 1.6s ease-in-out infinite">
      <div style="height:3px;background:linear-gradient(to right,${CM.blush},${CM.border})"></div>
      <div style="background:#F8F2EC;padding:9px 12px;border-bottom:1px solid ${CM.border};display:flex;align-items:center;gap:7px">
        <div style="display:flex;gap:4px">
          <span style="width:8px;height:8px;border-radius:50%;background:#EDE0D3;display:block"></span>
          <span style="width:8px;height:8px;border-radius:50%;background:#EDE0D3;display:block"></span>
          <span style="width:8px;height:8px;border-radius:50%;background:#EDE0D3;display:block"></span>
        </div>
        <div style="flex:1;height:10px;background:#EDE0D3;border-radius:4px"></div>
      </div>
      <div style="background:#FAF5EE;padding:16px 18px;height:72px"></div>
      <div style="padding:18px 20px 22px">
        <div style="height:13px;background:#F0E8DF;border-radius:4px;width:68%;margin-bottom:10px"></div>
        <div style="height:9px;background:#F5EFE6;border-radius:3px;width:90%;margin-bottom:6px"></div>
        <div style="height:9px;background:#F5EFE6;border-radius:3px;width:75%;margin-bottom:16px"></div>
        <div style="height:22px;background:#F5EFE6;border-radius:999px;width:90px"></div>
      </div>
    </div>`).join('');
}

function cmBuildRepoCard(repo) {
  const filterKey = cmLangFilterKey(repo.language);
  const langColor = cmLangColor(repo.language);
  return `
    <div data-cm-lang-filter="${filterKey}" class="cm-card-hover" style="
      background:#FFFFFF;border-radius:16px;overflow:hidden;
      border:1px solid ${CM.border};box-shadow:0 2px 16px rgba(28,20,16,0.05)
    ">
      <div style="height:3px;background:linear-gradient(to right,${CM.gold},${CM.blush})"></div>
      <div style="background:#F8F2EC;padding:9px 12px;border-bottom:1px solid ${CM.border};display:flex;align-items:center;gap:7px">
        <div style="display:flex;gap:4px;flex-shrink:0">
          <span style="width:8px;height:8px;border-radius:50%;background:#FF5F57;display:block"></span>
          <span style="width:8px;height:8px;border-radius:50%;background:#FEBC2E;display:block"></span>
          <span style="width:8px;height:8px;border-radius:50%;background:#28C840;display:block"></span>
        </div>
        <div style="flex:1;background:#FFF;border-radius:4px;padding:3px 9px;
          font-family:'Outfit',sans-serif;font-size:.57rem;color:#C4AE98;
          border:1px solid #EDE0D3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis
        ">github.com/zefanyakharisma-cell/${repo.name}</div>
      </div>
      <div style="background:#FAF5EE;padding:14px 18px 16px;border-bottom:1px solid ${CM.border};min-height:72px;position:relative;overflow:hidden">
        <div style="height:8px;width:52%;background:${CM.gold}38;border-radius:4px;margin-bottom:8px"></div>
        <div style="height:6px;width:78%;background:${CM.blush};border-radius:3px;margin-bottom:5px"></div>
        <div style="height:6px;width:62%;background:${CM.blush};border-radius:3px;opacity:.65"></div>
        <div style="position:absolute;right:14px;bottom:10px;font-size:2rem;opacity:.07;
          font-family:'Cormorant Garamond',serif;color:${CM.espresso}">◇</div>
      </div>
      <div style="padding:18px 20px 22px">
        <h4 style="
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:1.05rem;font-weight:500;color:${CM.espresso};
          margin-bottom:6px;line-height:1.3
        ">${cmHumanize(repo.name)}</h4>
        <p style="
          font-family:'Outfit',sans-serif;font-size:.78rem;line-height:1.62;
          color:${CM.muted};margin-bottom:14px;
          display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden
        ">${repo.description}</p>
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
          ${repo.language ? `
            <span style="display:inline-flex;align-items:center;gap:5px;
              font-family:'Outfit',sans-serif;font-size:.72rem;font-weight:400;color:${CM.muted}">
              <span style="width:9px;height:9px;border-radius:50%;background:${langColor};
                flex-shrink:0;display:inline-block"></span>
              ${repo.language}
            </span>` : '<span></span>'}
          ${CM_REPO_DETAIL_PAGE[repo.name]
            ? `<button onclick="goToPage('${CM_REPO_DETAIL_PAGE[repo.name]}')" style="
                font-family:'Outfit',sans-serif;font-size:.76rem;font-weight:600;
                color:${CM.espresso};background:transparent;cursor:pointer;
                display:inline-flex;align-items:center;gap:5px;
                padding:5px 14px;border-radius:999px;
                border:1px solid ${CM.border};
                transition:background .18s,color .18s,border-color .18s
               " onmouseover="this.style.background='${CM.espresso}';this.style.color='${CM.cream}';this.style.borderColor='${CM.espresso}'"
                  onmouseout="this.style.background='transparent';this.style.color='${CM.espresso}';this.style.borderColor='${CM.border}'">
                View Project
                <i data-lucide="arrow-right" style="width:11px;height:11px"></i>
              </button>`
            : `<a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" style="
                font-family:'Outfit',sans-serif;font-size:.76rem;font-weight:600;
                color:${CM.espresso};text-decoration:none;
                display:inline-flex;align-items:center;gap:5px;
                padding:5px 14px;border-radius:999px;
                border:1px solid ${CM.border};background:transparent;
                transition:background .18s,color .18s,border-color .18s
               " onmouseover="this.style.background='${CM.espresso}';this.style.color='${CM.cream}';this.style.borderColor='${CM.espresso}'"
                  onmouseout="this.style.background='transparent';this.style.color='${CM.espresso}';this.style.borderColor='${CM.border}'">
                View Project
                <i data-lucide="arrow-right" style="width:11px;height:11px"></i>
              </a>`
          }
        </div>
      </div>
    </div>`;
}

function cmBuildFeaturedProject(project) {
  const techBadges = project.tech.map(t =>
    '<span style="font-family:\'Outfit\',sans-serif;font-size:.68rem;font-weight:400;' +
    'padding:3px 11px;border-radius:999px;background:rgba(201,168,76,0.12);color:' + CM.muted + ';' +
    'border:1px solid rgba(201,168,76,0.2)">' + t + '</span>'
  ).join('');

  return '<div class="cm-card-hover cm-reveal" style="' +
    'background:#FFFFFF;border-radius:18px;overflow:hidden;' +
    'border:1px solid ' + CM.border + ';box-shadow:0 2px 16px rgba(28,20,16,0.05)">' +
    '<div style="height:160px;background:' + project.bg + ';position:relative;overflow:hidden;' +
    'display:flex;align-items:center;justify-content:center;padding:0 20px">' +
    '<div style="position:absolute;inset:0;opacity:.06;font-family:\'Cormorant Garamond\',serif;' +
    'font-size:6rem;font-weight:600;color:#fff;display:flex;align-items:center;justify-content:center;' +
    'letter-spacing:-.04em;user-select:none;overflow:hidden">' + project.watermark + '</div>' +
    '<div style="position:relative;z-index:1;text-align:center">' +
    '<div style="font-family:\'Outfit\',sans-serif;font-size:.6rem;font-weight:600;letter-spacing:.16em;' +
    'text-transform:uppercase;color:rgba(255,255,255,0.45);margin-bottom:8px">' + project.label + '</div>' +
    '<div style="font-family:\'Cormorant Garamond\',Georgia,serif;font-size:1.55rem;font-weight:500;' +
    'color:#fff;line-height:1.15">' + project.title + '</div>' +
    '</div></div>' +
    '<div style="padding:20px 22px 22px">' +
    '<p style="font-family:\'Outfit\',sans-serif;font-size:.8rem;line-height:1.65;color:' + CM.muted + ';' +
    'margin-bottom:14px">' + project.tagline + '</p>' +
    '<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:18px">' + techBadges + '</div>' +
    '<div style="display:flex;align-items:center;justify-content:space-between;padding-top:14px;' +
    'border-top:1px solid ' + CM.border + '">' +
    '<span style="font-family:\'Outfit\',sans-serif;font-size:.68rem;font-weight:600;' +
    'letter-spacing:.08em;text-transform:uppercase;padding:3px 10px;border-radius:999px;' +
    'background:' + project.statusBg + ';color:' + project.statusColor + '">' + project.status + '</span>' +
    '<button onclick="goToPage(\'' + project.page + '\')" style="' +
    'font-family:\'Outfit\',sans-serif;font-size:.78rem;font-weight:600;' +
    'color:' + CM.espresso + ';background:transparent;cursor:pointer;' +
    'display:inline-flex;align-items:center;gap:5px;' +
    'padding:6px 16px;border-radius:999px;' +
    'border:1px solid ' + CM.border + ';' +
    'transition:background .18s,color .18s,border-color .18s" ' +
    'onmouseover="this.style.background=\'' + CM.espresso + '\';this.style.color=\'' + CM.cream + '\';this.style.borderColor=\'' + CM.espresso + '\'" ' +
    'onmouseout="this.style.background=\'transparent\';this.style.color=\'' + CM.espresso + '\';this.style.borderColor=\'' + CM.border + '\'">' +
    'Explore <i data-lucide="arrow-right" style="width:11px;height:11px"></i>' +
    '</button></div></div></div>';
}

const CM_FEATURED_PROJECTS = [
  {
    page:        'web-portfolio',
    title:       'Website Portfolio',
    label:       'SPA · Vanilla JS',
    watermark:   'Portfolio',
    tagline:     'Dual-identity single-page app with iOS-style navigation, Supabase CMS, and 20+ pages — no framework.',
    tech:        ['HTML/CSS', 'JavaScript', 'Tailwind', 'Supabase'],
    bg:          'linear-gradient(145deg,#1C1410,#3D2B1F)',
    status:      'Live',
    statusBg:    'rgba(45,122,79,0.1)',
    statusColor: '#2D7A4F',
  },
  {
    page:        'web-pcu-global-intl',
    title:       'International Office',
    label:       'Web App · PCU Global',
    watermark:   'Intl. Office',
    tagline:     'Full rebuild of PCU\'s International Office website — news CMS, partnership directory, mobile-first.',
    tech:        ['HTML/CSS', 'JavaScript', 'Tailwind', 'Supabase'],
    bg:          'linear-gradient(145deg,#002070,#1a4fa0)',
    status:      'In Progress',
    statusBg:    'rgba(201,168,76,0.12)',
    statusColor: '#8B7355',
  },
  {
    page:        'web-dashboard-partnership',
    title:       'Dashboard Partnership',
    label:       'Data Dashboard',
    watermark:   'Partnership',
    tagline:     'Interactive dashboard visualising 30+ institutional partners — geographic view, status tracking, filters.',
    tech:        ['JavaScript', 'Chart.js', 'Tailwind'],
    bg:          'linear-gradient(145deg,#1A3A2B,#2D6B4A)',
    status:      'Live',
    statusBg:    'rgba(45,122,79,0.1)',
    statusColor: '#2D7A4F',
  },
  {
    page:        'web-dashboard-grants',
    title:       'International Grants',
    label:       'Data Dashboard',
    watermark:   'Grants',
    tagline:     'Centralised grant tracking from application to outcome — deadline timeline, pipeline view, outcome analytics.',
    tech:        ['JavaScript', 'Chart.js', 'Tailwind'],
    bg:          'linear-gradient(145deg,#2A1A4A,#5C3A8A)',
    status:      'Live',
    statusBg:    'rgba(45,122,79,0.1)',
    statusColor: '#2D7A4F',
  },
];

function cmBuildWebProjects() {
  const featuredCards = CM_FEATURED_PROJECTS.map(p => cmBuildFeaturedProject(p)).join('');

  const pills = [
    { id: 'all',        label: 'All' },
    { id: 'html-css',   label: 'HTML / CSS' },
    { id: 'javascript', label: 'JavaScript' },
    { id: 'other',      label: 'Other' },
  ].map(f => `
    <button data-cm-filter="${f.id}" onclick="cmSetRepoFilter('${f.id}')" style="
      font-family:'Outfit',sans-serif;font-size:.78rem;font-weight:500;
      padding:7px 18px;border-radius:999px;cursor:pointer;letter-spacing:.02em;
      transition:background .18s,color .18s,border-color .18s;
      ${f.id === 'all'
        ? 'background:' + CM.espresso + ';color:' + CM.cream + ';border:1px solid ' + CM.espresso
        : 'background:transparent;color:' + CM.muted + ';border:1px solid ' + CM.border}
    ">${f.label}</button>`).join('');

  return `
    <div id="cm-web-projects" style="background:${CM.blush};padding:clamp(4.5rem,9vh,7rem) 24px">
      <div class="max-w-5xl mx-auto">

        <!-- Section heading -->
        <div class="cm-reveal" style="margin-bottom:2.75rem">
          <p style="font-family:'Outfit',sans-serif;font-size:.65rem;font-weight:600;
            letter-spacing:.18em;text-transform:uppercase;color:${CM.gold};margin-bottom:.85rem">Web Development</p>
          <h2 style="
            font-family:'Cormorant Garamond',Georgia,serif;
            font-size:clamp(2.2rem,5vw,3.5rem);font-weight:400;font-style:italic;
            color:${CM.espresso};line-height:1.1
          " data-edit-key="cm_web_title">Featured Projects</h2>
        </div>

        <!-- Static featured project cards — always visible -->
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:18px;margin-bottom:4rem">
          ${featuredCards}
        </div>

        <!-- Open-source section divider -->
        <div class="cm-reveal" style="display:flex;align-items:center;gap:16px;margin-bottom:2rem">
          <div style="flex:1;height:1px;background:${CM.border}"></div>
          <span style="font-family:'Outfit',sans-serif;font-size:.65rem;font-weight:600;
            letter-spacing:.16em;text-transform:uppercase;color:${CM.muted}">Open Source</span>
          <div style="flex:1;height:1px;background:${CM.border}"></div>
        </div>

        <div class="cm-reveal" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:1.5rem">
          <div style="display:flex;flex-wrap:wrap;gap:8px">
            ${pills}
          </div>
          <a href="https://github.com/zefanyakharisma-cell" target="_blank" rel="noopener noreferrer" style="
            font-family:'Outfit',sans-serif;font-size:.78rem;font-weight:400;
            color:${CM.muted};text-decoration:none;display:inline-flex;align-items:center;gap:6px;
            border:1px solid ${CM.border};padding:8px 16px;border-radius:999px;
            background:transparent;transition:border-color .18s,color .18s
          " onmouseover="this.style.borderColor='${CM.espresso}';this.style.color='${CM.espresso}'"
             onmouseout="this.style.borderColor='${CM.border}';this.style.color='${CM.muted}'">
            <i data-lucide="github" style="width:14px;height:14px"></i>
            @zefanyakharisma-cell
          </a>
        </div>

        <div id="cm-repo-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:18px">
          ${cmBuildRepoSkeletons()}
        </div>
      </div>
    </div>`;
}

function cmRenderRepos(repos) {
  const grid = document.getElementById('cm-repo-grid');
  if (!grid) return;
  if (!repos || repos.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:64px 24px">
        <p style="font-family:'Outfit',sans-serif;font-size:.9rem;color:${CM.muted};margin-bottom:14px">
          Couldn't load projects — view them directly on GitHub.
        </p>
        <a href="https://github.com/zefanyakharisma-cell" target="_blank" rel="noopener noreferrer" style="
          font-family:'Outfit',sans-serif;font-size:.84rem;font-weight:600;
          color:${CM.espresso};text-decoration:none;
          border-bottom:1px solid ${CM.gold};padding-bottom:1px
        ">@zefanyakharisma-cell ↗</a>
      </div>`;
    return;
  }
  grid.innerHTML = repos.map(r => cmBuildRepoCard(r)).join('');
  if (window.lucide) lucide.createIcons();
  cmApplyRepoFilter(cmRepoFilter);
}

function cmApplyRepoFilter(filter) {
  document.querySelectorAll('[data-cm-lang-filter]').forEach(card => {
    card.style.display = (filter === 'all' || card.getAttribute('data-cm-lang-filter') === filter) ? '' : 'none';
  });
  document.querySelectorAll('[data-cm-filter]').forEach(btn => {
    const active = btn.getAttribute('data-cm-filter') === filter;
    btn.style.background  = active ? CM.espresso : 'transparent';
    btn.style.color       = active ? CM.cream    : CM.muted;
    btn.style.borderColor = active ? CM.espresso : CM.border;
  });
}

window.cmSetRepoFilter = function(filter) {
  cmRepoFilter = filter;
  cmApplyRepoFilter(filter);
};

async function cmFetchRepos() {
  const KEY = 'cm_gh_repos_v2';
  const cached = sessionStorage.getItem(KEY);
  if (cached) {
    try { cmRenderRepos(JSON.parse(cached)); return; } catch(e) {}
  }
  try {
    const res = await fetch('https://api.github.com/users/zefanyakharisma-cell/repos?sort=updated&per_page=20');
    if (!res.ok) throw new Error('fetch failed');
    const all = await res.json();
    const filtered = all.filter(r => !r.fork && r.description && r.name !== 'zefanyakharisma-cell');
    sessionStorage.setItem(KEY, JSON.stringify(filtered));
    cmRenderRepos(filtered);
  } catch(e) {
    cmRenderRepos(null);
  }
}

// ── Section 4: Graphic Design Portfolio ──────────────────────────────────────

const CM_CAT_COLORS = {
  'Brand Identity':   CM.gold,
  'Event Materials':  '#A06848',
  'Print & Digital':  CM.muted,
  'Visual Identity':  '#7A6A5A',
  'Social Media Kits':'#B8956A',
};

function cmBuildGDCard(g, i) {
  const catColor = CM_CAT_COLORS[g.cat] || CM.muted;
  return `
    <button onclick="cmOpenGDPreview(${i})" class="cm-card-hover" style="
      background:#FFFFFF;border-radius:16px;overflow:hidden;
      border:1px solid ${CM.border};cursor:pointer;text-align:left;width:100%;
      box-shadow:0 2px 16px rgba(28,20,16,0.05)
    ">
      <div style="position:relative;overflow:hidden;height:185px">
        <img src="./assets/images/graphic-designs/${g.folder}/1.png" alt="${g.title}"
          style="width:100%;height:100%;object-fit:cover;object-position:top;
            transition:transform .4s ease"
          onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform=''"
          loading="lazy">
        <div style="position:absolute;inset:0;background:linear-gradient(to bottom,transparent 52%,rgba(28,20,16,0.14));pointer-events:none"></div>
        <span style="position:absolute;top:10px;right:10px;
          font-family:'Outfit',sans-serif;font-size:.6rem;font-weight:500;
          background:rgba(28,20,16,0.48);backdrop-filter:blur(4px);
          color:rgba(250,247,242,0.88);padding:3px 9px;border-radius:999px">${g.year}</span>
        <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:0;
          transition:opacity .25s;background:rgba(28,20,16,0.22)" class="cm-gd-expand-hint">
          <span style="font-family:'Outfit',sans-serif;font-size:.72rem;font-weight:600;
            color:${CM.cream};background:rgba(28,20,16,0.55);padding:7px 18px;
            border-radius:999px;backdrop-filter:blur(6px);
            border:1px solid rgba(250,247,242,0.22)">Preview</span>
        </div>
      </div>
      <div style="padding:16px 18px 20px">
        <p style="font-family:'Outfit',sans-serif;font-size:.64rem;font-weight:600;
          letter-spacing:.1em;text-transform:uppercase;color:${catColor};margin-bottom:6px">${g.cat}</p>
        <h4 style="font-family:'Cormorant Garamond',Georgia,serif;
          font-size:1.02rem;font-weight:500;color:${CM.espresso};
          line-height:1.3;margin-bottom:4px">${g.title}</h4>
        <p style="font-family:'Outfit',sans-serif;font-size:.72rem;color:${CM.muted}">${g.inst}</p>
      </div>
    </button>`;
}

function cmBuildGraphicDesign() {
  return `
    <div id="cm-graphic-design" style="background:${CM.cream};padding:clamp(4.5rem,9vh,7rem) 24px">
      <div class="max-w-5xl mx-auto">
        <div class="cm-reveal" style="display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:1.5rem;margin-bottom:3rem">
          <div>
            <p style="font-family:'Outfit',sans-serif;font-size:.65rem;font-weight:600;
              letter-spacing:.18em;text-transform:uppercase;color:${CM.gold};margin-bottom:.85rem">Graphic Design</p>
            <h2 style="
              font-family:'Cormorant Garamond',Georgia,serif;
              font-size:clamp(2.2rem,5vw,3.5rem);font-weight:400;font-style:italic;
              color:${CM.espresso};line-height:1.1
            " data-edit-key="cm_design_title">Visual identity work</h2>
          </div>
          <p style="font-family:'Outfit',sans-serif;font-size:.88rem;line-height:1.68;
            color:${CM.muted};max-width:300px
          " data-edit-key="cm_design_subtitle">Branding, institutional materials, and communication design — click any to preview.</p>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:18px">
          ${CM_GRAPHIC_WORKS.map((g, i) => cmBuildGDCard(g, i)).join('')}
        </div>
      </div>
    </div>`;
}

// ── Section 5: Process ────────────────────────────────────────────────────────

function cmBuildProcess() {
  const steps = [
    { num: '01', icon: 'search',      label: 'Discover',       editKey: 'cm_process_1', desc: 'We start with your goals, audience, and brand values to define what success looks like.' },
    { num: '02', icon: 'pen-tool',    label: 'Design & Build', editKey: 'cm_process_2', desc: 'From wireframes to final delivery — every pixel and line of code is intentional.' },
    { num: '03', icon: 'trending-up', label: 'Launch & Grow',  editKey: 'cm_process_3', desc: 'We hand off a product that your team can own, maintain, and scale.' },
  ];

  const stepHTML = steps.map((step, i) => `
    <div style="flex:1;min-width:200px;display:flex;flex-direction:column;align-items:center;text-align:center">
      <div style="position:relative;margin-bottom:1.5rem">
        <div style="width:58px;height:58px;border-radius:18px;background:${CM.espresso};
          display:flex;align-items:center;justify-content:center;
          box-shadow:0 6px 24px rgba(28,20,16,0.2)">
          <i data-lucide="${step.icon}" style="width:22px;height:22px;color:${CM.gold}"></i>
        </div>
        <span style="position:absolute;top:-8px;right:-8px;
          font-family:'Outfit',sans-serif;font-size:.54rem;font-weight:700;
          letter-spacing:.1em;color:${CM.gold};opacity:.65">${step.num}</span>
      </div>
      <h3 style="font-family:'Cormorant Garamond',Georgia,serif;
        font-size:1.3rem;font-weight:500;font-style:italic;
        color:${CM.espresso};margin-bottom:.75rem;line-height:1.2
      " data-edit-key="${step.editKey}_label">${step.label}</h3>
      <p style="font-family:'Outfit',sans-serif;font-size:.84rem;line-height:1.72;
        color:${CM.muted};max-width:210px
      " data-edit-key="${step.editKey}_desc">${step.desc}</p>
    </div>
    ${i < steps.length - 1 ? `
      <div style="flex-shrink:0;padding-top:28px;font-family:'Cormorant Garamond',serif;
        font-size:1.5rem;color:${CM.gold};opacity:.3;align-self:flex-start;
        display:none" class="cm-step-arrow">→</div>` : ''}`).join('');

  return `
    <div style="background:${CM.blush};padding:clamp(4.5rem,9vh,7rem) 24px">
      <style>@media(min-width:768px){.cm-step-arrow{display:block!important}}</style>
      <div class="max-w-5xl mx-auto">
        <div class="cm-reveal" style="text-align:center;margin-bottom:3.5rem">
          <p style="font-family:'Outfit',sans-serif;font-size:.65rem;font-weight:600;
            letter-spacing:.18em;text-transform:uppercase;color:${CM.gold};margin-bottom:.85rem">Process</p>
          <h2 style="
            font-family:'Cormorant Garamond',Georgia,serif;
            font-size:clamp(2.2rem,5vw,3.5rem);font-weight:400;font-style:italic;
            color:${CM.espresso};line-height:1.1
          " data-edit-key="cm_process_title">How We Work</h2>
        </div>
        <div class="cm-reveal" style="display:flex;flex-wrap:wrap;gap:clamp(1.5rem,3vw,2.5rem);
          align-items:flex-start;justify-content:center">
          ${stepHTML}
        </div>
      </div>
    </div>`;
}

// ── Section 6: Contact CTA ────────────────────────────────────────────────────

function cmBuildContact() {
  return `
    <div style="background:${CM.espresso};padding:clamp(5rem,11vh,9rem) 24px;position:relative;overflow:hidden">
      <div style="position:absolute;right:-100px;top:-100px;width:460px;height:460px;border-radius:50%;
        background:radial-gradient(circle,${CM.gold}16 0%,transparent 68%);pointer-events:none"></div>
      <div style="position:absolute;left:-60px;bottom:-80px;width:360px;height:360px;border-radius:50%;
        background:radial-gradient(circle,#6A341810 0%,transparent 70%);pointer-events:none"></div>
      <div class="max-w-3xl mx-auto text-center cm-reveal" style="position:relative;z-index:1">
        <p style="font-family:'Outfit',sans-serif;font-size:.65rem;font-weight:600;
          letter-spacing:.18em;text-transform:uppercase;color:${CM.gold};opacity:.75;margin-bottom:1.5rem">Let's Work Together</p>
        <h2 style="
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:clamp(2.5rem,7vw,5rem);font-weight:400;font-style:italic;
          color:${CM.cream};line-height:1;margin-bottom:1.5rem;letter-spacing:-.01em
        " data-edit-key="cm_contact_headline">Let's build something meaningful.</h2>
        <p style="font-family:'Outfit',sans-serif;font-size:.95rem;line-height:1.78;
          color:${CM.muted};max-width:460px;margin:0 auto 3rem
        " data-edit-key="cm_contact_body">Whether you need a website, a brand identity, or both — CroissantsMoon is open for new projects.</p>

        <button onclick="goToPage('contact')" style="
          font-family:'Outfit',sans-serif;font-size:.875rem;font-weight:600;
          background:${CM.gold};color:${CM.espresso};padding:15px 36px;border-radius:999px;
          border:none;cursor:pointer;display:inline-flex;align-items:center;gap:9px;
          letter-spacing:.02em;transition:opacity .2s;
          box-shadow:0 4px 28px rgba(201,168,76,0.32)
        " onmouseover="this.style.opacity='.8'" onmouseout="this.style.opacity='1'">
          Start a Conversation
          <i data-lucide="arrow-right" style="width:15px;height:15px"></i>
        </button>

        <div style="margin-top:3rem;padding-top:2.5rem;border-top:1px solid rgba(250,247,242,0.07)">
          <a href="https://github.com/zefanyakharisma-cell" target="_blank" rel="noopener noreferrer" style="
            font-family:'Outfit',sans-serif;font-size:.78rem;font-weight:400;
            color:rgba(250,247,242,0.28);text-decoration:none;
            display:inline-flex;align-items:center;gap:6px;transition:color .2s
          " onmouseover="this.style.color='rgba(250,247,242,0.62)'" onmouseout="this.style.color='rgba(250,247,242,0.28)'">
            <i data-lucide="github" style="width:13px;height:13px"></i>
            See all open-source work on GitHub →
          </a>
        </div>
      </div>
    </div>`;
}

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
      border:2px solid ${i === 0 ? CM.gold : 'rgba(250,247,242,0.2)'};transition:border-color .18s">
      <img src="./assets/images/graphic-designs/${g.folder}/${i + 1}.png"
        style="width:100%;height:100%;object-fit:cover" loading="lazy">
    </button>`).join('');

  const lb = document.createElement('div');
  lb.id = 'cm-gd-lightbox';
  lb.style.cssText = `position:fixed;inset:0;z-index:9999;background:rgba(28,20,16,0.94);
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    padding:20px;backdrop-filter:blur(14px)`;
  lb.addEventListener('click', e => { if (e.target === lb) cmCloseGDPreview(); });

  lb.innerHTML = `
    <button onclick="cmCloseGDPreview()" style="
      position:absolute;top:18px;right:18px;z-index:10;
      background:rgba(250,247,242,0.1);border:1px solid rgba(250,247,242,0.18);
      color:${CM.cream};width:40px;height:40px;border-radius:50%;
      display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:1.1rem
    ">✕</button>
    <div id="cm-gd-counter" style="position:absolute;top:22px;left:50%;transform:translateX(-50%);
      font-family:'Outfit',sans-serif;font-size:.72rem;font-weight:500;
      color:rgba(250,247,242,0.4);letter-spacing:.08em">1 / ${g.imgs}</div>
    <img id="cm-gd-img" src="./assets/images/graphic-designs/${g.folder}/1.png" alt="${g.title}"
      style="max-width:min(860px,90vw);max-height:68vh;object-fit:contain;border-radius:10px;
        box-shadow:0 32px 100px rgba(0,0,0,0.55);display:block;transition:opacity .16s ease"/>
    <button onclick="cmNavGDPreview(-1)" style="position:absolute;left:max(16px,2.5vw);top:50%;
      transform:translateY(-50%);z-index:10;background:rgba(250,247,242,0.1);
      border:1px solid rgba(250,247,242,0.18);color:${CM.cream};width:46px;height:46px;
      border-radius:50%;display:flex;align-items:center;justify-content:center;
      cursor:pointer;font-size:1.5rem;transition:background .15s
    " onmouseover="this.style.background='rgba(250,247,242,0.2)'" onmouseout="this.style.background='rgba(250,247,242,0.1)'">‹</button>
    <button onclick="cmNavGDPreview(1)" style="position:absolute;right:max(16px,2.5vw);top:50%;
      transform:translateY(-50%);z-index:10;background:rgba(250,247,242,0.1);
      border:1px solid rgba(250,247,242,0.18);color:${CM.cream};width:46px;height:46px;
      border-radius:50%;display:flex;align-items:center;justify-content:center;
      cursor:pointer;font-size:1.5rem;transition:background .15s
    " onmouseover="this.style.background='rgba(250,247,242,0.2)'" onmouseout="this.style.background='rgba(250,247,242,0.1)'">›</button>
    <div style="display:flex;gap:8px;margin-top:16px">${thumbs}</div>
    <div style="margin-top:13px;padding:13px 22px;background:rgba(250,247,242,0.05);
      border:1px solid rgba(250,247,242,0.09);border-radius:12px;
      display:flex;align-items:center;gap:18px;flex-wrap:wrap;
      max-width:min(860px,90vw);width:100%">
      <div style="flex:1;min-width:180px">
        <div style="font-family:'Outfit',sans-serif;font-size:.6rem;font-weight:600;
          letter-spacing:.12em;text-transform:uppercase;color:rgba(250,247,242,0.38);margin-bottom:4px">${g.cat} · ${g.year}</div>
        <div style="font-family:'Cormorant Garamond',Georgia,serif;font-size:.95rem;
          font-weight:500;color:${CM.cream}">${g.title}</div>
        <div style="font-family:'Outfit',sans-serif;font-size:.72rem;
          color:rgba(250,247,242,0.38);margin-top:2px">${g.inst}</div>
      </div>
      <a href="${g.link}" target="_blank" rel="noopener noreferrer" style="
        background:${CM.gold};color:${CM.espresso};padding:9px 20px;border-radius:999px;
        font-family:'Outfit',sans-serif;font-size:.76rem;font-weight:700;
        display:inline-flex;align-items:center;gap:7px;text-decoration:none;
        white-space:nowrap;flex-shrink:0;transition:opacity .2s
      " onmouseover="this.style.opacity='.8'" onmouseout="this.style.opacity='1'">View on Canva ↗</a>
    </div>
    <p style="margin-top:10px;font-family:'Outfit',sans-serif;font-size:.62rem;
      color:rgba(250,247,242,0.2)">← → arrow keys · Esc to close</p>`;

  document.body.appendChild(lb);
  const onKey = e => {
    if (e.key === 'Escape')     cmCloseGDPreview();
    if (e.key === 'ArrowLeft')  cmNavGDPreview(-1);
    if (e.key === 'ArrowRight') cmNavGDPreview(1);
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
    setTimeout(() => { img.src = `./assets/images/graphic-designs/${g.folder}/${i}.png`; img.style.opacity = '1'; }, 160);
  }
  const counter = document.getElementById('cm-gd-counter');
  if (counter) counter.textContent = `${i} / ${g.imgs}`;
  for (let t = 1; t <= g.imgs; t++) {
    const thumb = document.getElementById(`cm-gd-thumb-${t}`);
    if (thumb) thumb.style.borderColor = t === i ? CM.gold : 'rgba(250,247,242,0.2)';
  }
}
window.cmGDJumpTo = cmGDJumpTo;

// ── Scroll Reveal ─────────────────────────────────────────────────────────────

function cmInitScrollReveal() {
  const page = document.getElementById('page-croissantsmoon');
  if (!page) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('cm-visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.07, rootMargin: '0px 0px -32px 0px' });
  page.querySelectorAll('.cm-reveal').forEach(el => obs.observe(el));
}

// ── Smooth scroll for hero CTAs ───────────────────────────────────────────────

function cmInitScrollLinks() {
  const page = document.getElementById('page-croissantsmoon');
  if (!page) return;
  page.addEventListener('click', function(e) {
    const a = e.target.closest('[data-cm-scroll]');
    if (!a) return;
    e.preventDefault();
    const target = document.getElementById(a.getAttribute('data-cm-scroll'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
}

// ── GD card hover expand hint ─────────────────────────────────────────────────

function cmInitGDHovers() {
  document.querySelectorAll('.cm-gd-expand-hint').forEach(hint => {
    const card = hint.closest('button');
    if (!card) return;
    card.addEventListener('mouseenter', () => { hint.style.opacity = '1'; });
    card.addEventListener('mouseleave', () => { hint.style.opacity = '0'; });
  });
}

// ── Page Init ─────────────────────────────────────────────────────────────────

function cmInitPage() {
  cmInjectFonts();
  cmInjectPageCSS();

  const el = document.getElementById('page-croissantsmoon');
  if (!el) return;

  el.style.background = CM.cream;
  el.innerHTML = [
    cmBuildHero(),
    cmBuildServices(),
    cmBuildWebProjects(),
    cmBuildGraphicDesign(),
    cmBuildProcess(),
    cmBuildContact(),
  ].join('');

  if (window.lucide) lucide.createIcons();

  setTimeout(() => {
    // Animate logotype (600ms ease-out fade-in + upward drift)
    const logotype = document.getElementById('cm-logotype');
    if (logotype) {
      requestAnimationFrame(() => requestAnimationFrame(() => {
        logotype.style.opacity = '1';
        logotype.style.transform = 'translateY(0)';
      }));
    }
    cmInitScrollLinks();
    cmInitScrollReveal();
    cmInitGDHovers();
    cmFetchRepos();
  }, 80);
}

document.addEventListener('DOMContentLoaded', cmInitPage);
