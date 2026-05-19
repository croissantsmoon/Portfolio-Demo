// ── Skill Discovery Data ────────────────────────────────────
const discoveryItems = [
  { id: 'partnerships', title: 'International Partnership Management', category: 'Experience', description: 'Managing 30+ institutional partners, reviewing 25+ MoU/MoA agreements monthly at Petra Christian University.', skills: ['International Partnership', 'Leadership', 'Systems Thinking', 'Cross-Cultural Communication'], page: 'partnerships', accent: '#4A6B8A' },
  { id: 'mou', title: 'MoU / MoA Coordination', category: 'Experience', description: 'Formalizing academic partnerships through strategic agreements — ensuring compliance and institutional alignment.', skills: ['International Partnership', 'Leadership', 'Systems Thinking'], page: 'mou', accent: '#4A6B8A' },
  { id: 'amerta', title: 'AMERTA Exchange Program', category: 'Project', description: "Universitas Airlangga's flagship semester exchange — 120+ students, IDR 50–100M budget per cohort.", skills: ['Student Mobility', 'Project Management', 'International Partnership', 'Leadership', 'Student Support'], page: 'amerta', accent: '#6B4F32' },
  { id: 'aci', title: 'ACI — Airlangga Cultural Immersion', category: 'Project', description: 'Structured engagement program connecting international and local students through cultural experience.', skills: ['Student Mobility', 'Project Management', 'Student Support', 'Cross-Cultural Communication'], page: 'aci', accent: '#6B4F32' },
  { id: 'aero', title: 'AERO Exhibition', category: 'Project', description: 'Annual exhibition at Universitas Airlangga showcasing global partnerships and international programs.', skills: ['Project Management', 'International Partnership', 'Branding', 'Creative Direction'], page: 'aero', accent: '#6B4F32' },
  { id: 'pcu-global', title: 'PCU Global — International Office Website', category: 'Project', description: "Rebuilding PCU's International Office online presence with a full-stack web app, news CMS, partnership directory, and mobile-first design.", skills: ['Full-Stack Development', 'Front-End Development', 'UI/UX Design', 'International Partnership', 'Digital Strategy', 'Web Experience', 'Branding'], page: 'pcu-global', accent: '#003087' },
  { id: 'onboarding', title: 'Student Onboarding & Orientation', category: 'Experience', description: 'End-to-end welfare support for 100+ international students per semester — housing, healthcare, immigration.', skills: ['Student Support', 'Student Mobility', 'Cross-Cultural Communication', 'Systems Thinking'], page: 'onboarding', accent: '#4A5235' },
  { id: 'engagement', title: 'Student Engagement Initiatives', category: 'Experience', description: 'Building meaningful connections and fostering personal growth for exchange students through curated programs.', skills: ['Student Support', 'Leadership', 'Cross-Cultural Communication'], page: 'engagement', accent: '#4A5235' },
  { id: 'websites', title: 'Web Development & Design', category: 'Creative', description: 'Responsive, user-centered websites for institutional communications and international engagement.', skills: ['Full-Stack Development', 'Front-End Development', 'UI/UX Design', 'Web Experience', 'Digital Strategy'], page: 'websites', accent: '#8B7355' },
  { id: 'designs', title: 'Graphic Design & Branding', category: 'Creative', description: 'Strategic visual design for institutional identity, event collateral, and international partnerships.', skills: ['Branding', 'Creative Direction', 'UI/UX Design', 'Digital Strategy'], page: 'designs', accent: '#8B7355' },
  { id: 'expertise', title: 'Areas of Expertise', category: 'About', description: 'Core competencies built through 3+ years in international higher education and creative digital work.', skills: ['International Partnership', 'Student Mobility', 'Project Management', 'Internationalization', 'Leadership'], page: 'expertise', accent: '#1E3A5F' },
  { id: 'croissantsmoon', title: 'CroissantsMoon — Creative Identity', category: 'Creative', description: 'A future-facing boutique studio identity in development — editorial design, web experiences, brand systems.', skills: ['Branding', 'Creative Direction', 'UI/UX Design', 'Digital Strategy', 'Web Experience', 'Full-Stack Development'], page: 'croissantsmoon', accent: '#8B7355' },
  { id: 'writing', title: 'Writing & Reflections', category: 'Writing', description: 'Essays and insights on international education, leadership, systems thinking, and digital craft.', skills: ['Writing', 'Leadership', 'Internationalization', 'Digital Strategy', 'Systems Thinking'], page: 'writing', accent: '#5C5C5C' },
  { id: 'skillset', title: 'Full Skillset Overview', category: 'About', description: 'A complete map of technical, professional, and creative competencies.', skills: ['International Partnership', 'Student Mobility', 'Project Management', 'Leadership', 'UI/UX Design', 'Full-Stack Development', 'Branding', 'Systems Thinking', 'Writing'], page: 'skillset', accent: '#1C1C1E' },
];

const searchIndex = (function() {
  const manual = [
    { title: 'About Me', subtitle: 'Profile Overview', page: 'about-overview', accent: '#1E3A5F', keywords: 'about profile overview background zefanya specialist' },
    { title: 'Experience', subtitle: 'Career Timeline', page: 'experience', accent: '#1E3A5F', keywords: 'experience career work history timeline professional years' },
    { title: 'Expertise', subtitle: 'Core Competencies', page: 'expertise', accent: '#1E3A5F', keywords: 'expertise skills competencies areas specialization core' },
    { title: 'Education', subtitle: 'Academic Profile', page: 'education', accent: '#1E3A5F', keywords: 'education university degree airlangga international relations academic' },
    { title: 'Skillset', subtitle: 'Full Skills List', page: 'skillset', accent: '#1E3A5F', keywords: 'skills all competencies full list technical professional creative' },
    { title: 'Contact', subtitle: 'Get in Touch', page: 'contact', accent: '#1C1C1E', keywords: 'contact email message collaborate hire reach' },
    { title: 'Projects Overview', subtitle: 'All Projects', page: 'projects-overview', accent: '#6B4F32', keywords: 'projects portfolio all overview work amerta aci aero' },
    { title: 'Writing & Reflections', subtitle: 'Articles & Essays', page: 'writing', accent: '#5C5C5C', keywords: 'writing articles essays blog reflections thoughts journal insights' },
    { title: 'CroissantsMoon', subtitle: 'Creative Studio', page: 'croissantsmoon', accent: '#8B7355', keywords: 'croissantsmoon creative studio design branding identity moon boutique' },
    { title: 'Web Development', subtitle: 'Creative Services', page: 'websites', accent: '#8B7355', keywords: 'websites web development frontend responsive html css javascript' },
    { title: 'Graphic Design', subtitle: 'Creative Services', page: 'designs', accent: '#8B7355', keywords: 'graphic design branding visual identity print digital' },
    { title: 'Partnerships', subtitle: 'Global Engagement', page: 'partnerships', accent: '#4A6B8A', keywords: 'partnerships international global institutional promotion mou moa agreements' },
    { title: 'Student Onboarding', subtitle: 'Student Services', page: 'onboarding', accent: '#4A5235', keywords: 'onboarding students support welfare orientation arrival housing immigration' },
    { title: 'Student Engagement', subtitle: 'Student Services', page: 'engagement', accent: '#4A5235', keywords: 'engagement students activities cultural support community exchange' },
  ];
  const seen = new Set(manual.map(m => m.page));
  const fromItems = discoveryItems
    .filter(item => !seen.has(item.page))
    .map(item => ({ title: item.title, subtitle: item.category, page: item.page, accent: item.accent, keywords: [...item.skills, item.description].join(' ').toLowerCase() }));
  return [...manual, ...fromItems];
})();

let selectedSkills = [];

function toggleSkill(btn) {
  const skill = btn.dataset.skill;
  if (selectedSkills.includes(skill)) {
    selectedSkills = selectedSkills.filter(s => s !== skill);
    btn.classList.remove('selected');
    btn.style.opacity = '1';
    removeChipFromSearchBar(skill);
  } else {
    selectedSkills.push(skill);
    btn.classList.add('selected');
    btn.style.opacity = '0.45';
    animateTagToSearchBar(btn);
  }
  updateClearBtn();
}

function clearSkills() {
  selectedSkills = [];
  document.querySelectorAll('#skill-tags-container .skill-tag').forEach(t => {
    t.classList.remove('selected');
    t.style.opacity = '1';
  });
  document.querySelectorAll('[data-chip-skill]').forEach(c => c.remove());
  const input = document.getElementById('ecosystem-search-input');
  if (input) input.value = '';
  hideSearchDropdown();
  const clearBtn = document.getElementById('clear-skills-btn');
  if (clearBtn) clearBtn.style.display = 'none';
}

function discoverRelatedWorks() {
  if (selectedSkills.length === 0) return;
  executeEcosystemSearch();
}

function renderDiscoveryResults(skills, textQuery) {
  textQuery = textQuery || '';
  const display = document.getElementById('selected-skills-display');
  const grid = document.getElementById('results-grid');
  const noResults = document.getElementById('no-results');
  if (!display || !grid) return;

  display.innerHTML = skills.map(s => '<span class="skill-tag selected">' + s + '</span>').join('');
  if (textQuery) {
    display.innerHTML += '<span class="skill-tag" style="background:rgba(28,28,30,0.08);color:#5C5C5C">“' + textQuery + '”</span>';
  }

  const q = textQuery.toLowerCase();
  const matches = discoveryItems.filter(function(item) {
    var skillMatch = skills.length === 0 || item.skills.some(function(s) { return skills.includes(s); });
    var textMatch = !q || item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q) || item.category.toLowerCase().includes(q) || item.skills.some(function(s) { return s.toLowerCase().includes(q); });
    return skillMatch && textMatch;
  }).sort(function(a, b) {
    var aScore = a.skills.filter(function(s) { return skills.includes(s); }).length;
    var bScore = b.skills.filter(function(s) { return skills.includes(s); }).length;
    return bScore - aScore;
  });

  if (matches.length === 0) {
    grid.innerHTML = '';
    if (noResults) noResults.classList.remove('hidden');
    return;
  }
  if (noResults) noResults.classList.add('hidden');

  grid.innerHTML = matches.map(function(item) {
    var matchedSkills = item.skills.filter(function(s) { return skills.includes(s); });
    return '<button onclick="goToPage(\'' + item.page + '\')" class="result-card p-7 text-left w-full" style="border-left:3px solid ' + item.accent + '">' +
      '<div style="font-size:.7rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:' + item.accent + ';margin-bottom:10px">' + item.category + '</div>' +
      '<h3 class="font-heading font-semibold text-base mb-3 leading-snug" style="color:#1C1C1E">' + item.title + '</h3>' +
      '<p class="text-xs leading-relaxed mb-4" style="color:#5C5C5C">' + item.description + '</p>' +
      '<div class="flex flex-wrap gap-1.5 mb-4">' + matchedSkills.map(function(s) { return '<span class="tag">' + s + '</span>'; }).join('') + '</div>' +
      '<div class="flex items-center gap-2 text-xs font-medium" style="color:' + item.accent + '">View <i data-lucide="arrow-right" style="width:12px;height:12px"></i></div>' +
      '</button>';
  }).join('');
  lucide.createIcons();
}

function animateTagToSearchBar(btn) {
  var tagRect = btn.getBoundingClientRect();
  var searchBox = document.getElementById('ecosystem-search-box');
  var catClass = btn.className.split(' ').find(function(c) { return c.startsWith('cat-'); }) || '';
  var skill = btn.dataset.skill;
  if (!searchBox) { addChipToSearchBar(skill, catClass); return; }
  var searchRect = searchBox.getBoundingClientRect();

  var clone = document.createElement('span');
  clone.textContent = btn.textContent;
  clone.className = btn.className;
  clone.style.cssText = [
    'position:fixed',
    'left:' + tagRect.left + 'px',
    'top:' + tagRect.top + 'px',
    'width:' + tagRect.width + 'px',
    'height:' + tagRect.height + 'px',
    'z-index:9999',
    'pointer-events:none',
    'margin:0',
    'box-sizing:border-box',
    'transition:left .3s cubic-bezier(0.4,0,0.2,1),top .3s cubic-bezier(0.4,0,0.2,1),opacity .3s,transform .3s'
  ].join(';');
  document.body.appendChild(clone);

  requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      clone.style.left = (searchRect.left + 12) + 'px';
      clone.style.top = (searchRect.top + Math.max(0, (searchRect.height - tagRect.height) / 2)) + 'px';
      clone.style.opacity = '0';
      clone.style.transform = 'scale(0.7)';
    });
  });

  setTimeout(function() {
    clone.remove();
    addChipToSearchBar(skill, catClass);
  }, 300);
}

function addChipToSearchBar(skill, catClass) {
  var input = document.getElementById('ecosystem-search-input');
  if (!input) return;
  if (Array.from(document.querySelectorAll('[data-chip-skill]')).some(function(el) { return el.dataset.chipSkill === skill; })) return;

  var chip = document.createElement('span');
  chip.className = 'skill-tag ' + (catClass || '') + ' selected';
  chip.dataset.chipSkill = skill;
  chip.style.cssText = 'cursor:default;display:inline-flex;align-items:center;gap:3px;padding:4px 10px;font-size:.72rem;flex-shrink:0';

  chip.appendChild(document.createTextNode(skill));

  var removeBtn = document.createElement('button');
  removeBtn.textContent = '×';
  removeBtn.style.cssText = 'border:none;background:none;cursor:pointer;color:inherit;padding:0;margin-left:2px;line-height:1;font-size:1.05em;opacity:.65;display:inline-flex;align-items:center';
  removeBtn.title = 'Remove';
  removeBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    removeChipFromSearchBar(skill);
    var tagBtn = Array.from(document.querySelectorAll('#skill-tags-container [data-skill]')).find(function(el) { return el.dataset.skill === skill; });
    if (tagBtn) { tagBtn.classList.remove('selected'); tagBtn.style.opacity = '1'; }
    selectedSkills = selectedSkills.filter(function(s) { return s !== skill; });
    updateClearBtn();
  });

  chip.appendChild(removeBtn);
  input.parentElement.insertBefore(chip, input);
  updateClearBtn();
}

function removeChipFromSearchBar(skill) {
  var chips = Array.from(document.querySelectorAll('[data-chip-skill]'));
  var chip = chips.find(function(el) { return el.dataset.chipSkill === skill; });
  if (chip) chip.remove();
}

function updateClearBtn() {
  var clearBtn = document.getElementById('clear-skills-btn');
  if (!clearBtn) return;
  var input = document.getElementById('ecosystem-search-input');
  var hasChips = document.querySelector('[data-chip-skill]');
  var hasText = input && input.value.trim().length > 0;
  clearBtn.style.display = (hasChips || hasText) ? 'inline' : 'none';
}

function onEcosystemSearchInput(value) {
  var q = value.trim().toLowerCase();
  if (!q) { hideSearchDropdown(); updateClearBtn(); return; }
  updateClearBtn();
  var results = searchIndex.filter(function(item) {
    var haystack = (item.title + ' ' + item.subtitle + ' ' + (item.keywords || '')).toLowerCase();
    return haystack.includes(q);
  }).slice(0, 7);

  var dropdown = document.getElementById('search-dropdown');
  if (!results.length) { dropdown.style.display = 'none'; return; }

  dropdown.innerHTML = results.map(function(r) {
    return '<button onclick="goToPage(\'' + r.page + '\');hideSearchDropdown()"' +
      ' style="display:flex;align-items:center;gap:10px;width:100%;text-align:left;padding:10px 14px;background:transparent;border:none;cursor:pointer;border-bottom:1px solid rgba(28,28,30,0.05);transition:background .15s;font-family:\'Inter\',sans-serif"' +
      ' onmouseover="this.style.background=\'rgba(28,28,30,0.04)\'" onmouseout="this.style.background=\'transparent\'">' +
      '<span style="width:8px;height:8px;border-radius:50%;background:' + r.accent + ';flex-shrink:0;display:inline-block"></span>' +
      '<div style="flex:1;text-align:left">' +
      '<div style="font-size:.82rem;font-weight:600;color:#1C1C1E;font-family:inherit">' + r.title + '</div>' +
      '<div style="font-size:.7rem;color:#9A9A9A;margin-top:1px">' + r.subtitle + '</div>' +
      '</div>' +
      '<i data-lucide="arrow-right" style="width:12px;height:12px;color:#C0B9AD;flex-shrink:0"></i>' +
      '</button>';
  }).join('');
  dropdown.style.display = 'block';
  lucide.createIcons();
}

function hideSearchDropdown() {
  var d = document.getElementById('search-dropdown');
  if (d) d.style.display = 'none';
}

function executeEcosystemSearch() {
  var input = document.getElementById('ecosystem-search-input');
  var q = input ? input.value.trim() : '';
  hideSearchDropdown();
  if (selectedSkills.length === 0 && !q) return;
  renderDiscoveryResults(selectedSkills, q);
  goToPage('skill-discovery');
}

function filterArticles(category) {
  document.querySelectorAll('.writing-filter').forEach(btn => {
    btn.classList.remove('selected');
    if (btn.dataset.category === category) btn.classList.add('selected');
  });
  document.querySelectorAll('#articles-grid .article-card').forEach(card => {
    card.style.display = (category === 'all' || card.dataset.category === category) ? '' : 'none';
  });
}

function openArticle(id) {
  // Articles are currently in-page only — future expansion
  console.log('Article:', id);
}

const defaultConfig = {
  hero_name: 'Zefanya Kharisma Nugroho',
  hero_title: 'International Partnership Specialist',
  hero_tagline: 'Supporting 200+ international students and managing end-to-end global mobility programs across universities in Indonesia and beyond — based in Surabaya.',
  about_text: 'Over the past 3+ years, I have supported 200+ international students and managed end-to-end global mobility programs across universities in Indonesia and beyond. From coordinating semester exchange programs and government scholarships (KNB & TIAS) to reviewing 25+ partnership agreements monthly, I bring both operational depth and strategic vision to international education. Currently at Petra Christian University, I focus on building and strengthening institutional partnerships — facilitating 15+ strategic meetings per month, expanding access to international grants, and growing PCU\'s global network.',
  contact_email: 'zefanya.kharisma@gmail.com',
  partnership_title: 'Partnership Development',
  mou_title: 'MoU / MoA Coordination',
  background_color: '#F8FAFC',
  surface_color: '#FFFFFF',
  text_color: '#1E293B',
  primary_action_color: '#2563EB',
  accent_color: '#38BDF8',
  font_family: 'Sora',
  font_size: 16
};

let currentPage = 'home';
let currentSlideHero = 0;
let currentPagesSlide = 0;
let pagesAutoplay;

function goToPage(pageName, updateHash = true) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  const page = document.getElementById(`page-${pageName}`);
  if (page) {
    page.classList.add('active');
    currentPage = pageName;
    const container = document.querySelector('.pages-container');
    if (container) container.scrollTop = 0;
  }
  document.getElementById('mobile-menu').classList.add('hidden');
  const app = document.getElementById('app');
  if (app) app.scrollTop = 0;
  if (updateHash) {
    const hash = pageName === 'home' ? '' : pageName;
    history.pushState({ page: pageName }, '', hash ? `#${hash}` : location.pathname);
  }
}

window.addEventListener('popstate', (e) => {
  const page = e.state?.page || 'home';
  goToPage(page, false);
});

function slideCarouselHero(direction) {
  const track = document.getElementById('carousel-track-hero');
  const slides = track.children;
  currentSlideHero += direction;
  if (currentSlideHero >= slides.length) currentSlideHero = 0;
  if (currentSlideHero < 0) currentSlideHero = slides.length - 1;
  track.style.transform = `translateX(-${currentSlideHero * 100}%)`;
  updateCarouselDotsHero();
}

function updateCarouselDotsHero() {
  const dotsContainer = document.getElementById('carousel-dots-hero');
  dotsContainer.innerHTML = '';
  const slides = document.getElementById('carousel-track-hero').children;
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('button');
    dot.className = 'w-2 h-2 rounded-full transition';
    dot.style.background = i === currentSlideHero ? '#ffffff' : 'rgba(255,255,255,0.4)';
    dot.onclick = () => {
      currentSlideHero = i;
      document.getElementById('carousel-track-hero').style.transform = `translateX(-${currentSlideHero * 100}%)`;
      updateCarouselDotsHero();
    };
    dotsContainer.appendChild(dot);
  }
}

function slidePagesCarousel(dir) {
  const track = document.getElementById('pages-carousel-track');
  if (!track) return;
  const count = track.children.length;
  currentPagesSlide += dir;
  if (currentPagesSlide >= count) currentPagesSlide = 0;
  if (currentPagesSlide < 0) currentPagesSlide = count - 1;
  track.style.transform = `translateX(-${currentPagesSlide * 100}%)`;
  updatePagesCarouselDots();
  clearInterval(pagesAutoplay);
  pagesAutoplay = setInterval(() => slidePagesCarousel(1), 3500);
}

function updatePagesCarouselDots() {
  const dotsContainer = document.getElementById('pages-carousel-dots');
  const track = document.getElementById('pages-carousel-track');
  if (!dotsContainer || !track) return;
  const count = track.children.length;
  dotsContainer.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const dot = document.createElement('button');
    dot.className = 'w-2 h-2 rounded-full transition';
    dot.style.background = i === currentPagesSlide ? '#2563EB' : 'rgba(37,99,235,0.25)';
    dot.onclick = () => {
      currentPagesSlide = i;
      track.style.transform = `translateX(-${currentPagesSlide * 100}%)`;
      updatePagesCarouselDots();
      clearInterval(pagesAutoplay);
      pagesAutoplay = setInterval(() => slidePagesCarousel(1), 3500);
    };
    dotsContainer.appendChild(dot);
  }
}

function applyConfig(config) {
  const c = key => config[key] || defaultConfig[key];
  document.getElementById('nav-name').textContent = 'ZKN';
  const teaserEl = document.getElementById('about-teaser-text');
  if (teaserEl) teaserEl.textContent = c('about_text');
  document.getElementById('contact-email-el').textContent = c('contact_email');
  const partnershipTitle = document.getElementById('partnership-title');
  if (partnershipTitle) partnershipTitle.textContent = c('partnership_title');
  const mouTitle = document.getElementById('mou-title');
  if (mouTitle) mouTitle.textContent = c('mou_title');
}

if (window.elementSdk) window.elementSdk.init({
  defaultConfig,
  onConfigChange: async (config) => applyConfig(config),
  mapToCapabilities: (config) => ({
    recolorables: [
      { get: () => config.background_color || defaultConfig.background_color, set: v => { config.background_color = v; window.elementSdk.setConfig({ background_color: v }); }},
      { get: () => config.surface_color || defaultConfig.surface_color, set: v => { config.surface_color = v; window.elementSdk.setConfig({ surface_color: v }); }},
      { get: () => config.text_color || defaultConfig.text_color, set: v => { config.text_color = v; window.elementSdk.setConfig({ text_color: v }); }},
      { get: () => config.primary_action_color || defaultConfig.primary_action_color, set: v => { config.primary_action_color = v; window.elementSdk.setConfig({ primary_action_color: v }); }},
      { get: () => config.accent_color || defaultConfig.accent_color, set: v => { config.accent_color = v; window.elementSdk.setConfig({ accent_color: v }); }}
    ],
    borderables: [],
    fontEditable: { get: () => config.font_family || defaultConfig.font_family, set: v => { config.font_family = v; window.elementSdk.setConfig({ font_family: v }); }},
    fontSizeable: { get: () => config.font_size || defaultConfig.font_size, set: v => { config.font_size = v; window.elementSdk.setConfig({ font_size: v }); }}
  }),
  mapToEditPanelValues: (config) => new Map([
    ['hero_name', config.hero_name || defaultConfig.hero_name],
    ['hero_title', config.hero_title || defaultConfig.hero_title],
    ['hero_tagline', config.hero_tagline || defaultConfig.hero_tagline],
    ['about_text', config.about_text || defaultConfig.about_text],
    ['contact_email', config.contact_email || defaultConfig.contact_email],
    ['partnership_title', config.partnership_title || defaultConfig.partnership_title],
    ['mou_title', config.mou_title || defaultConfig.mou_title]
  ])
});

// Initialize mobile menu
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

document.querySelectorAll('.mobile-menu-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const menu = document.getElementById(btn.dataset.menu + '-menu');
    if (menu) {
      menu.classList.toggle('hidden');
      btn.querySelector('i').style.transform = menu.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
    }
  });
});

// Hero banner configurations for each page
const heroConfigs = {
  'education': { back: 'about-overview', backLabel: 'Back', category: 'About Me', title: 'Academic Foundation', desc: 'Education and achievements that shaped my professional expertise in international relations.', gradient: '#1E3A5F 0%, #2563EB 60%, #38BDF8 100%' },
  'international': { back: 'about-overview', backLabel: 'Back', category: 'About Me', title: 'International Exposure', desc: 'Real-world experience bridging institutions, students, and cultures across Southeast Asia.', gradient: '#1E3A5F 0%, #2563EB 60%, #38BDF8 100%' },
  'values': { back: 'about-overview', backLabel: 'Back', category: 'About Me', title: 'Professional Values', desc: 'Principles that guide my work and decisions in international education.', gradient: '#1E3A5F 0%, #2563EB 60%, #38BDF8 100%' },
  'expertise': { back: 'about-overview', backLabel: 'Back', category: 'About Me', title: 'Areas of Expertise', desc: 'Core competencies built through hands-on experience in international higher education.', gradient: '#1E3A5F 0%, #2563EB 60%, #38BDF8 100%' },
  'experience': { back: 'about-overview', backLabel: 'Back', category: 'About Me', title: 'Professional Experience', desc: '3+ years building international partnerships and supporting student mobility across Surabaya.', gradient: '#1E3A5F 0%, #2563EB 60%, #38BDF8 100%' },
  'skillset': { back: 'about-overview', backLabel: 'Back', category: 'About Me', title: 'Skillset', desc: 'Core competencies and professional capabilities.', gradient: '#1E3A5F 0%, #2563EB 60%, #38BDF8 100%' },
  'amerta': { back: 'projects-overview', backLabel: 'Back', category: 'Project Management', title: 'AMERTA', desc: "Universitas Airlangga's flagship semester exchange program — 120+ students, IDR 50-100M budget.", gradient: '#3B0764 0%, #7C3AED 60%, #A78BFA 100%' },
  'aci': { back: 'projects-overview', backLabel: 'Back', category: 'Project Management', title: 'ACI', desc: 'Airlangga Cultural Immersion — structured engagement program connecting international and local students.', gradient: '#3B0764 0%, #7C3AED 60%, #A78BFA 100%' },
  'aero': { back: 'projects-overview', backLabel: 'Back', category: 'Project Management', title: 'AERO', desc: 'Annual exhibition at Universitas Airlangga showcasing global partnerships and international programs.', gradient: '#3B0764 0%, #7C3AED 60%, #A78BFA 100%' },
  'partnership-detail': { back: 'partnerships', backLabel: 'Back', category: 'Global Partnerships', title: 'Partnership Development', desc: 'Building and nurturing strategic academic partnerships that drive institutional excellence.', gradient: '#7C2D12 0%, #EA580C 60%, #FB923C 100%' },
  'mou-detail': { back: 'partnerships', backLabel: 'Back', category: 'Global Partnerships', title: 'MoU / MoA Coordination', desc: 'Reviewing 25+ partnership agreements per month — ensuring compliance and institutional alignment.', gradient: '#7C2D12 0%, #EA580C 60%, #FB923C 100%' },
  'websites': { back: 'home', backLabel: 'Back', category: 'Creative Services', title: 'Web Development & Design', desc: 'Responsive, user-centered websites for institutional communications and international engagement.', gradient: '#7F1D1D 0%, #DC2626 60%, #F87171 100%' },
  'contact': { back: 'home', backLabel: 'Back', category: 'Get in Touch', title: "Let's Connect", desc: 'Open to international partnerships, collaborations, and meaningful conversations about global education.', gradient: '#1C1C1E 0%, #2C2C2E 60%, #5C5C5C 100%' }
};

function injectHeroBanners() {
  Object.entries(heroConfigs).forEach(([pageId, cfg]) => {
    const page = document.getElementById('page-' + pageId);
    if (!page || page.querySelector('.page-hero-banner')) return;
    page.classList.remove('py-20');
    const hero = document.createElement('div');
    hero.className = 'page-hero-banner relative overflow-hidden';
    hero.style.cssText = 'background:linear-gradient(135deg,' + cfg.gradient + ');padding:64px 0 48px';
    hero.innerHTML = '<div class="absolute -right-16 -top-16 w-80 h-80 rounded-full" style="background:rgba(255,255,255,0.05)"></div>' +
      '<div class="absolute right-24 bottom-8 w-48 h-48 rounded-full" style="border:2px solid rgba(255,255,255,0.08)"></div>' +
      '<div class="relative z-10 max-w-6xl mx-auto px-6">' +
      '<button onclick="goToPage(\'' + cfg.back + '\')" class="flex items-center gap-2 mb-8" style="color:rgba(255,255,255,0.75)">' +
      '<i data-lucide="arrow-left" style="width:16px;height:16px"></i> ' + cfg.backLabel + '</button>' +
      '<span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-5 uppercase tracking-wider" style="background:rgba(255,255,255,0.15);color:#fff">' + cfg.category + '</span>' +
      '<h1 class="font-heading font-bold text-4xl md:text-5xl mb-4 text-white">' + cfg.title + '</h1>' +
      '<p class="text-base md:text-lg max-w-2xl" style="color:rgba(255,255,255,0.75)">' + cfg.desc + '</p>' +
      '</div>';
    page.insertBefore(hero, page.firstChild);
    const contentWrapper = Array.from(page.children).find(el =>
      el !== hero && el.tagName === 'DIV' && el.querySelector && el.querySelector('button[onclick*="goToPage"]')
    );
    if (contentWrapper) {
      contentWrapper.style.paddingTop = contentWrapper.style.paddingTop || '64px';
      contentWrapper.style.paddingBottom = contentWrapper.style.paddingBottom || '64px';
      const oldBack = contentWrapper.querySelector('button[onclick*="goToPage"]');
      if (oldBack && oldBack.querySelector('i[data-lucide="arrow-left"]')) oldBack.remove();
    }
  });
}

// Initialize carousels (guard against missing elements)
if (document.getElementById('carousel-track-hero')) updateCarouselDotsHero();
updatePagesCarouselDots();
pagesAutoplay = setInterval(() => slidePagesCarousel(1), 3500);

// Inject hero banners then initialize lucide icons
injectHeroBanners();
lucide.createIcons();

// Navigate to page from URL hash on load
(function() {
  const hash = location.hash.replace('#', '');
  if (hash && document.getElementById(`page-${hash}`)) {
    goToPage(hash, false);
    history.replaceState({ page: hash }, '', location.hash);
  } else {
    history.replaceState({ page: 'home' }, '', location.pathname);
  }
})();

// Touch swipe for hero carousel (only if present)
(function() {
  var track = document.getElementById('carousel-track-hero');
  if (!track) return;
  var startX = 0;
  track.addEventListener('touchstart', function(e) { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', function(e) {
    var diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) slideCarouselHero(diff > 0 ? 1 : -1);
  }, { passive: true });
})();

// Touch swipe for pages carousel
(function() {
  var track = document.getElementById('pages-carousel-track');
  if (!track) return;
  var startX = 0;
  track.addEventListener('touchstart', function(e) { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', function(e) {
    var diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) slidePagesCarousel(diff > 0 ? 1 : -1);
  }, { passive: true });
})();

// ── Hero Slideshow ───────────────────────────────────────
(function() {
  var slides = Array.from(document.querySelectorAll('.hero-slide'));
  if (!slides.length) return;
  for (var i = slides.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = slides[i]; slides[i] = slides[j]; slides[j] = tmp;
  }
  var current = 0;
  slides[current].classList.add('active');
  setInterval(function() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 5000);
})();

