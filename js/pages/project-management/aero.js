// Project Management — HORIZON page

// ── Data ─────────────────────────────────────────────────────────────────────

const AERO_BUDGET = {
  categories: [
    {
      name: 'Event & Venue', icon: 'package', color: '#1C1C1E',
      bg: 'linear-gradient(135deg,#F4F4F4,#EBEBEB)', border: 'rgba(28,28,30,0.15)',
      total: 14200,
      items: [
        { name: 'Outdoor Exhibition Tent (main hall)', qty: '1', total: 1800 },
        { name: 'Sound System & AV Equipment', qty: '1', total: 2200 },
        { name: 'Stage & Backdrop Setup', qty: '1', total: 1400 },
        { name: 'Exhibition Booth Frames (8x8ft)', qty: '25 units', total: 3750 },
        { name: 'Exhibition Tables & Chairs', qty: '50 sets', total: 1250 },
        { name: 'Entrance Gate & Wayfinding Signage', qty: '1', total: 950 },
        { name: 'LED Display Screens (65")', qty: '4 units', total: 1200 },
        { name: 'Festival Flags & Decorations', qty: 'assorted', total: 650 },
        { name: 'Photobooth Station', qty: '1 package', total: 800 },
        { name: 'Tax & Venue Fees', qty: '—', total: 200 },
      ]
    },
    {
      name: 'Accommodation', icon: 'building', color: '#4A6B8A',
      bg: 'linear-gradient(135deg,#EEF2F7,#D8E5EF)', border: 'rgba(74,107,138,0.2)',
      total: 4800,
      items: [
        { name: 'Guest Hotel — The Nines Portland', qty: '12 rooms × 2 nights', total: 4800 },
      ]
    },
    {
      name: 'Meals & Catering', icon: 'utensils', color: '#8B7355',
      bg: 'linear-gradient(135deg,#F5F1EC,#EDE5D8)', border: 'rgba(139,115,85,0.2)',
      total: 5200,
      items: [
        { name: 'Day 1 Lunch — Exhibitors & Guests', qty: '120 persons', total: 1800 },
        { name: 'Day 1 Afternoon Snack', qty: '120 persons', total: 720 },
        { name: 'Networking Reception Dinner — Day 1', qty: '80 persons', total: 2000 },
        { name: 'Day 2 Lunch', qty: '60 persons', total: 480 },
        { name: 'Vegetarian & Dietary-Specific Meals', qty: '30 persons', total: 200 },
      ]
    },
    {
      name: 'Honorarium & Staffing', icon: 'users', color: '#4A5235',
      bg: 'linear-gradient(135deg,#F1F3EE,#E4E8DC)', border: 'rgba(74,82,53,0.2)',
      total: 5800,
      items: [
        { name: 'Event Coordinator & Logistics Staff', qty: '8 persons', total: 2400 },
        { name: 'Interns & Volunteers', qty: '12 persons', total: 1200 },
        { name: 'Panel Discussion Moderator', qty: '1 person', total: 800 },
        { name: 'Keynote Speaker Honorarium', qty: '2 speakers', total: 1000 },
        { name: 'Student MC', qty: '1 event', total: 400 },
      ]
    },
  ],
  grandTotal: 30000
};

const AERO_PARTICIPANTS = {
  corners: [
    { name: 'Global Futures Research Lab', note: 'Northgate University', booth: 1 },
    { name: 'Pacific Rim Studies Center', note: 'Northgate University', booth: 2 },
    { name: 'European Cultural Exchange Corner', note: 'Northgate University', booth: 3 },
    { name: 'Americas & Latinx Studies Hub', note: 'Northgate University', booth: 4 },
  ],
  institutions: [
    { country: 'Japan', flag: '🇯🇵', orgs: [
      { name: 'Waseda University', booth: 5 },
      { name: 'Keio University', booth: 6 },
    ]},
    { country: 'Germany', flag: '🇩🇪', orgs: [
      { name: 'Humboldt-Universität zu Berlin', booth: 7 },
    ]},
    { country: 'France', flag: '🇫🇷', orgs: [
      { name: 'Sciences Po Paris', booth: 8 },
    ]},
    { country: 'Australia', flag: '🇦🇺', orgs: [
      { name: 'University of Melbourne', booth: null },
      { name: 'Australian National University', booth: 9 },
    ]},
    { country: 'Canada', flag: '🇨🇦', orgs: [
      { name: 'University of British Columbia', booth: 10 },
      { name: 'McGill University', booth: null },
      { name: 'Simon Fraser University', booth: 11 },
    ]},
    { country: 'Partners', flag: '🌐', orgs: [
      { name: 'Portland Art Museum', booth: 12 },
      { name: 'Intel Education Initiative', booth: 13 },
    ]},
  ],
  studentDelegations: [
    { country: 'South Korea',  flag: '🇰🇷', booth: 14 },
    { country: 'Brazil',       flag: '🇧🇷', booth: 15 },
    { country: 'Mexico',       flag: '🇲🇽', booth: 16 },
    { country: 'India',        flag: '🇮🇳', booth: 17 },
    { country: 'China',        flag: '🇨🇳', booth: 18 },
    { country: 'Nigeria',      flag: '🇳🇬', booth: null },
    { country: 'Kenya',        flag: '🇰🇪', booth: null },
    { country: 'Colombia',     flag: '🇨🇴', booth: null },
    { country: 'Vietnam',      flag: '🇻🇳', booth: null },
  ]
};

const AERO_RUNDOWN = [
  {
    day: 'Pre-Event', date: 'Friday, 7 March 2025', label: 'Exhibitor Briefing', color: '#767676',
    items: [
      { time: '14:00 – 15:30', activity: 'Technical Briefing & Setup Orientation', venue: 'Online (Zoom)' },
    ]
  },
  {
    day: 'Day 0', date: 'Sunday, 9 March 2025', label: 'Arrival & Setup', color: '#4A6B8A',
    items: [
      { time: 'TBC', activity: 'International Guest Arrival & Hotel Check-in', venue: 'The Nines Hotel, Portland' },
      { time: '16:00 – 19:00', activity: 'Exhibitor Load-In & Booth Setup', venue: 'Northgate University Exhibition Hall' },
    ]
  },
  {
    day: 'Day 1', date: 'Monday, 10 March 2025', label: 'HORIZON Showcase', color: '#1C1C1E',
    items: [
      { time: '08:00 – 09:00', activity: 'Exhibitor Registration & Badge Collection', venue: 'Main Entrance, NGU Exhibition Hall' },
      { time: '09:00 – 09:05', activity: 'MC Start — Opening Ceremony', venue: 'Main Stage' },
      { time: '09:05 – 09:20', activity: 'Welcome Address — Director of International Programs', venue: 'Main Stage', note: 'Alex Morgan Rivera, Northgate University' },
      { time: '09:20 – 09:30', activity: 'Photo Session with All Exhibitors & Guests', venue: 'Main Stage' },
      { time: '09:30 – 09:45', activity: 'Interactive Opening — Marking Start of Exhibition', venue: 'Exhibition Floor' },
      { time: '09:45 – 11:00', activity: 'Panel Discussion — Session 1: "Human Connection Across Borders"', venue: 'Main Stage', note: 'Waseda University · Sciences Po · UBC · Portland Art Museum · Intel Education' },
      { time: '11:00 – 12:30', activity: 'Open Exhibition Floor — Research Posters & Creative Installations', venue: 'Exhibition Hall' },
      { time: '12:30 – 13:30', activity: 'Lunch Break', venue: '—' },
      { time: '13:30 – 14:30', activity: 'HORIZON Spotlight — Student Success Stories & Alumni Sharing', venue: 'Main Stage', note: 'Featured speakers: 3 NGU alumni now working internationally' },
      { time: '14:30 – 15:30', activity: 'Cultural Performances & Interactive Demonstrations', venue: 'Exhibition Hall' },
      { time: '15:30 – 16:15', activity: 'Panel Discussion — Session 2: Industry & Research Opportunities', venue: 'Main Stage', note: 'ANU · Humboldt University · McGill · Simon Fraser · Intel Education' },
      { time: '16:15 – 16:30', activity: 'Closing Ceremony & Awards', venue: 'Main Stage' },
      { time: '16:30 – 17:30', activity: 'Exhibitors Load-Out', venue: 'Exhibition Hall' },
    ]
  },
  {
    day: 'Day 1', date: 'Monday, 10 March 2025', label: 'Networking Reception', color: '#8B7355',
    items: [
      { time: '18:30 – 18:35', activity: 'Opening — Networking Reception', venue: 'Faculty Commons, Northgate University' },
      { time: '18:35 – 18:50', activity: 'Welcome Remarks — University President', venue: '', note: 'Dr. Patricia Osei-Bonsu, Northgate University' },
      { time: '18:50 – 18:55', activity: 'Group Photo with All Participants & Guests', venue: '' },
      { time: '18:55 – 19:05', activity: 'Awarding Session — Best Research Poster', venue: '' },
      { time: '19:05 – 19:15', activity: 'Awarding Session — Outstanding Creative Installation', venue: '' },
      { time: '19:15 – 20:30', activity: 'Dinner & Networking Session', venue: '' },
      { time: '20:30 – 20:35', activity: 'Closing Remarks', venue: '' },
      { time: '20:35', activity: 'Transfer Back to Hotel (shuttle provided)', venue: 'Main Entrance' },
    ]
  },
  {
    day: 'Day 2', date: 'Tuesday, 11 March 2025', label: 'Portland Culture Tour', color: '#4A5235',
    items: [
      { time: '07:00 – 08:30', activity: 'Breakfast', venue: 'Hotel Restaurant' },
      { time: '08:30 – 09:00', activity: 'Preparation for City Tour', venue: 'Meet at Hotel Lobby' },
      { time: '09:00 – 09:30', activity: 'Transfer to Portland Art Museum', venue: 'Shuttle from Hotel' },
      { time: '09:30 – 11:00', activity: 'Guided Tour — Portland Art Museum', venue: 'Portland Art Museum' },
      { time: '11:00 – 12:00', activity: 'Powell\'s Books Visit & Cultural Exchange Activity', venue: 'Powell\'s Books, Burnside' },
      { time: '12:00 – 13:00', activity: 'Farewell Lunch at Local Restaurant', venue: 'Portland Food Scene' },
      { time: '13:00 – 14:00', activity: 'Hotel Check-Out & Departure', venue: 'Hotel' },
    ]
  },
];


// ── Gallery ──────────────────────────────────────────────────────────────────

const AERO_GALLERY_IMGS = [
  'https://picsum.photos/seed/horizon-1/800/600',
  'https://picsum.photos/seed/horizon-2/800/600',
  'https://picsum.photos/seed/horizon-3/800/600',
  'https://picsum.photos/seed/horizon-4/800/600',
  'https://picsum.photos/seed/horizon-5/800/600',
  'https://picsum.photos/seed/horizon-6/800/600',
  'https://picsum.photos/seed/horizon-7/800/600',
  'https://picsum.photos/seed/horizon-8/800/600',
  'https://picsum.photos/seed/horizon-9/800/600',
  'https://picsum.photos/seed/horizon-10/800/600',
  'https://picsum.photos/seed/horizon-11/800/600',
  'https://picsum.photos/seed/horizon-12/800/600',
  'https://picsum.photos/seed/horizon-13/800/600',
  'https://picsum.photos/seed/horizon-14/800/600',
  'https://picsum.photos/seed/horizon-15/800/600',
];

let _aeroGalTimer = null;
let _aeroGalSlot  = 0;
let _aeroGalShown = [];
let _aeroGalQueue = [];

function _aeroShuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function aeroStartGallery() {
  if (_aeroGalTimer) { clearInterval(_aeroGalTimer); _aeroGalTimer = null; }

  const imgs = document.querySelectorAll('.aero-gs-img');
  if (!imgs.length) return;

  _aeroGalQueue = _aeroShuffle(AERO_GALLERY_IMGS);
  _aeroGalShown = [];
  let qi = 0;

  imgs.forEach(img => {
    const src = _aeroGalQueue[qi % _aeroGalQueue.length];
    img.src = src;
    _aeroGalShown.push(src);
    qi++;
  });

  _aeroGalSlot = 0;

  _aeroGalTimer = setInterval(() => {
    const imgEls = document.querySelectorAll('.aero-gs-img');
    if (!imgEls.length) { clearInterval(_aeroGalTimer); return; }

    const slot = _aeroGalSlot % imgEls.length;
    const imgEl = imgEls[slot];

    let next = _aeroGalQueue[qi % _aeroGalQueue.length];
    let tries = 0;
    while (_aeroGalShown.includes(next) && tries < AERO_GALLERY_IMGS.length) {
      qi++;
      if (qi >= _aeroGalQueue.length) {
        _aeroGalQueue = _aeroShuffle(AERO_GALLERY_IMGS);
        qi = 0;
      }
      next = _aeroGalQueue[qi % _aeroGalQueue.length];
      tries++;
    }
    const nextSrc = next;
    qi++;

    imgEl.style.opacity = '0';
    setTimeout(() => {
      if (!document.body.contains(imgEl)) return;
      _aeroGalShown[slot] = nextSrc;
      imgEl.src = nextSrc;
      const show = () => { imgEl.style.opacity = '1'; };
      if (imgEl.complete && imgEl.naturalWidth) show();
      else { imgEl.onload = show; imgEl.onerror = show; }
    }, 500);

    _aeroGalSlot++;
  }, 3000);
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function aeroEsc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function fmtRp(n) {
  return '$' + Number(n).toLocaleString('en-US');
}

// ── Section Builders ─────────────────────────────────────────────────────────

function buildAeroWhatToExpect() {
  const features = [
    { icon: 'building-2',  color: '#1C1C1E', bg: 'rgba(28,28,30,0.06)',   title: 'Research Posters & Creative Installations',  desc: 'Explore cutting-edge research and creative work by international students — covering topics from climate science and technology to cross-cultural art and design.' },
    { icon: 'mic',         color: '#4A6B8A', bg: 'rgba(74,107,138,0.08)', title: 'Panel Discussions & Alumni Sharing',          desc: 'Gain firsthand insights from international alumni and academic leaders — covering global career paths, research opportunities, and cross-border collaboration.' },
    { icon: 'globe',       color: '#8B7355', bg: 'rgba(139,115,85,0.08)', title: 'Cultural Performances & Demonstrations',     desc: 'Experience the richness of global cultures through artistic performances and interactive demonstrations showcasing traditions from 15+ countries.' },
    { icon: 'users',       color: '#4A5235', bg: 'rgba(74,82,53,0.08)',   title: 'Networking & Industry Connections',          desc: 'Connect with international faculty, industry partners from Portland Art Museum and local tech companies, and students from 15+ countries in structured networking sessions.' },
  ];
  const cards = features.map(f => `
    <div class="rounded-xl p-6" style="background:#F8FAFC;border:1px solid rgba(28,28,30,0.07)">
      <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style="background:${f.bg}">
        <i data-lucide="${f.icon}" style="width:20px;height:20px;color:${f.color}"></i>
      </div>
      <h4 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">${aeroEsc(f.title)}</h4>
      <p class="text-sm leading-relaxed" style="color:#5C5C5C">${aeroEsc(f.desc)}</p>
    </div>`).join('');
  return `<div class="grid sm:grid-cols-2 gap-4">${cards}</div>`;
}

function buildAeroContributions() {
  const items = [
    { n:'01', icon:'calendar-check', color:'#1C1C1E', bg:'rgba(28,28,30,0.06)',   title:'Event Planning & Logistics',             desc:'Planned and coordinated end-to-end event logistics across 80+ exhibitors and guests, including venue setup, scheduling, partner communications, and day-of operations for a 2-day format.' },
    { n:'02', icon:'receipt',        color:'#8B7355', bg:'rgba(139,115,85,0.08)', title:'Vendor Management & Budgeting',           desc:'Managed vendor relationships and procurement within an $18,000–$35,000 per-edition budget, ensuring cost-efficient delivery across all event components including AV, catering, and accommodation.' },
    { n:'03', icon:'building-2',     color:'#4A6B8A', bg:'rgba(74,107,138,0.08)', title:'Partner & Exhibitor Coordination',        desc:'Coordinated logistics for 15+ partner institutions across 7 countries, managed consulate liaisons, and facilitated international guest attendance — ensuring smooth communication and on-site experience from 3 annual editions.' },
    { n:'04', icon:'megaphone',      color:'#4A5235', bg:'rgba(74,82,53,0.08)',   title:'Promotion, Operations & Reporting',       desc:'Led pre-event promotion campaigns reaching 600–900 visitors per edition, managed on-site operations across panel sessions and cultural performances, and prepared comprehensive post-event reports for university leadership.' },
  ];
  return items.map(i => `
   <div class="flex gap-6 py-8" style="border-top:1px solid rgba(28,28,30,0.07)">
    <div class="flex-shrink-0 w-10 pt-0.5">
     <span class="font-heading font-bold text-3xl select-none" style="color:rgba(28,28,30,0.1);line-height:1">${i.n}</span>
    </div>
    <div class="flex gap-4 flex-1">
     <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style="background:${i.bg}">
      <i data-lucide="${i.icon}" style="width:18px;height:18px;color:${i.color}"></i>
     </div>
     <div>
      <h3 class="font-heading font-semibold text-lg mb-2" style="color:#1C1C1E">${aeroEsc(i.title)}</h3>
      <p class="text-sm leading-relaxed" style="color:#5C5C5C">${aeroEsc(i.desc)}</p>
     </div>
    </div>
   </div>
  `).join('');
}

function buildAeroRundown() {
  const sections = AERO_RUNDOWN.map(s => {
    const rows = s.items.map(item => {
      const noteRow = item.note
        ? `<tr><td></td><td colspan="2" class="pb-2 text-xs italic" style="color:#767676;padding-left:0">${aeroEsc(item.note)}</td></tr>`
        : '';
      return `
        <tr>
          <td class="py-1.5 pr-4 text-xs font-mono whitespace-nowrap align-top" style="color:${s.color};width:8rem">${aeroEsc(item.time)}</td>
          <td class="py-1.5 pr-4 text-sm font-medium align-top" style="color:#1C1C1E">${aeroEsc(item.activity)}</td>
          <td class="py-1.5 text-xs align-top" style="color:#767676">${item.venue ? aeroEsc(item.venue) : ''}</td>
        </tr>${noteRow}`;
    }).join('');
    return `
      <div class="mb-5">
        <div class="flex items-center gap-3 mb-3">
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold" style="background:${s.color}18;color:${s.color}">${aeroEsc(s.day)}</span>
          <span class="font-heading font-semibold text-sm" style="color:#1C1C1E">${aeroEsc(s.date)} — ${aeroEsc(s.label)}</span>
        </div>
        <div class="rounded-xl overflow-auto" style="border:1px solid rgba(28,28,30,0.08)">
          <table class="w-full" style="border-collapse:collapse;min-width:500px">
            <tbody style="padding:0 1rem">${rows}</tbody>
          </table>
        </div>
      </div>`;
  }).join('');
  return sections;
}

function buildAeroParticipants() {
  const cornerCards = AERO_PARTICIPANTS.corners.map(c => `
    <div class="flex items-center gap-3 px-4 py-3 rounded-lg" style="background:#F8FAFC;border:1px solid rgba(28,28,30,0.08)">
      <span class="text-xs font-bold px-2 py-0.5 rounded" style="background:rgba(28,28,30,0.08);color:#1C1C1E">B${c.booth}</span>
      <div>
        <p class="text-sm font-medium" style="color:#1C1C1E">${aeroEsc(c.name)}</p>
        <p class="text-xs" style="color:#767676">${aeroEsc(c.note)}</p>
      </div>
    </div>`).join('');

  const instBlocks = AERO_PARTICIPANTS.institutions.map(g => {
    const rows = g.orgs.map(o => {
      const badge = o.booth
        ? `<span class="text-xs font-bold px-1.5 py-0.5 rounded flex-shrink-0" style="background:rgba(28,28,30,0.08);color:#1C1C1E">B${o.booth}</span>`
        : '';
      return `<div class="flex items-center justify-between gap-2">
        <span class="text-sm" style="color:#1C1C1E">${aeroEsc(o.name)}</span>${badge}
      </div>`;
    }).join('');
    return `
      <div class="rounded-lg p-4" style="background:#F8FAFC;border:1px solid rgba(28,28,30,0.08)">
        <p class="text-xs font-semibold mb-2" style="color:#5C5C5C">${g.flag} ${aeroEsc(g.country)}</p>
        <div class="space-y-1.5">${rows}</div>
      </div>`;
  }).join('');

  const studentCards = AERO_PARTICIPANTS.studentDelegations.map(c => {
    const badge = c.booth
      ? `<span class="text-xs font-bold ml-auto" style="color:#1C1C1E">B${c.booth}</span>`
      : '';
    return `
      <div class="flex items-center gap-2 px-3 py-2 rounded-lg" style="background:#F8FAFC;border:1px solid rgba(28,28,30,0.08)">
        <span class="text-base">${c.flag}</span>
        <span class="text-sm" style="color:#1C1C1E">${aeroEsc(c.country)}</span>
        ${badge}
      </div>`;
  }).join('');

  return `
    <h3 class="font-heading font-semibold text-base mb-3" style="color:#1C1C1E">NGU Internal Showcases</h3>
    <div class="grid sm:grid-cols-2 gap-2 mb-8">${cornerCards}</div>
    <h3 class="font-heading font-semibold text-base mb-3" style="color:#1C1C1E">Partner Universities & Institutions <span class="text-sm font-normal ml-1" style="color:#767676">— 7 countries</span></h3>
    <div class="grid md:grid-cols-2 gap-3 mb-8">${instBlocks}</div>
    <h3 class="font-heading font-semibold text-base mb-3" style="color:#1C1C1E">International Student Delegations <span class="text-sm font-normal ml-1" style="color:#767676">— representing their home countries</span></h3>
    <div class="grid sm:grid-cols-3 gap-2">${studentCards}</div>`;
}

function buildAeroBudget() {
  const catRows = AERO_BUDGET.categories.map(cat => `
    <div class="flex items-center gap-4 p-4 rounded-xl" style="background:${cat.bg};border:1px solid ${cat.border}">
      <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(0,0,0,0.06)">
        <i data-lucide="${cat.icon}" style="width:20px;height:20px;color:${cat.color}"></i>
      </div>
      <p class="text-sm font-semibold flex-1" style="color:#1C1C1E">${aeroEsc(cat.name)}</p>
      <p class="font-heading font-bold text-base" style="color:${cat.color}">${fmtRp(cat.total)}</p>
    </div>`).join('');

  return `
    <div class="space-y-3 mb-6">${catRows}</div>
    <div class="rounded-xl p-5 flex items-center justify-between" style="background:#1C1C1E;border:1px solid rgba(255,255,255,0.08)">
      <div>
        <p class="text-xs uppercase tracking-wider mb-1" style="color:rgba(255,255,255,0.5)">Grand Total</p>
        <p class="font-heading font-bold text-2xl" style="color:#fff">${fmtRp(AERO_BUDGET.grandTotal)}</p>
      </div>
      <i data-lucide="receipt" style="width:36px;height:36px;color:rgba(255,255,255,0.2)"></i>
    </div>`;
}

// ── Page Shell ───────────────────────────────────────────────────────────────

function aeroInitPage() {
  const el = document.getElementById('page-aero');
  if (!el) return;
  el.innerHTML = `
   <div class="page-hero-banner relative overflow-hidden" style="padding:64px 0 48px">
    <div class="absolute inset-0"><img loading="lazy" src="https://picsum.photos/seed/horizon-hero/1200/500" alt="HORIZON" style="width:100%;height:100%;object-fit:cover;object-position:center"><div style="position:absolute;inset:0;background:linear-gradient(135deg,rgba(28,28,30,0.88) 0%,rgba(44,44,46,0.82) 60%,rgba(60,60,62,0.77) 100%)"></div></div>
    <div class="absolute -right-16 -top-16 w-80 h-80 rounded-full" style="background:rgba(255,255,255,0.03)"></div>
    <div class="absolute right-24 bottom-8 w-48 h-48 rounded-full" style="border:2px solid rgba(255,255,255,0.05)"></div>
    <div class="absolute inset-0 flex items-center justify-end overflow-hidden pr-8 pointer-events-none select-none" aria-hidden="true">
     <span class="font-heading font-bold" style="font-size:clamp(5rem,15vw,12rem);color:rgba(255,255,255,0.04);letter-spacing:-.04em;line-height:1">HORIZON</span>
    </div>
    <div class="relative z-10 max-w-6xl mx-auto px-6">
     <button onclick="goToPage('projects-overview')" class="flex items-center gap-2 mb-8" style="color:rgba(255,255,255,0.6)"><i data-lucide="arrow-left" style="width:16px;height:16px"></i> Back</button>
     <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-5 uppercase tracking-wider" style="background:rgba(255,255,255,0.1);color:#fff">Project Management</span>
     <h1 class="font-heading font-bold mb-3 text-white" style="font-size:clamp(2.5rem,6vw,4rem);letter-spacing:-.02em" data-edit-key="aero_hero_title">HORIZON 2025</h1>
     <p class="text-base max-w-2xl" style="color:rgba(255,255,255,0.65)" data-edit-key="aero_hero_tagline">HORIZON International Showcase — annual international student exhibition at Northgate University, connecting research, culture, and global opportunity across 15+ countries. 10–11 March 2025, Portland.</p>
    </div>
   </div>

   <div class="max-w-6xl mx-auto px-6">
    <div class="flex flex-wrap gap-10 py-10" style="border-bottom:1px solid rgba(28,28,30,0.08)">
     <div><div class="font-heading font-bold text-4xl" style="color:#1C1C1E">100+</div><div class="text-xs uppercase tracking-wider mt-1" style="color:#767676">Exhibitors</div></div>
     <div><div class="font-heading font-bold text-4xl" style="color:#1C1C1E">15+</div><div class="text-xs uppercase tracking-wider mt-1" style="color:#767676">Countries Represented</div></div>
     <div><div class="font-heading font-bold text-4xl" style="color:#1C1C1E">800+</div><div class="text-xs uppercase tracking-wider mt-1" style="color:#767676">Visitors per Edition</div></div>
     <div><div class="font-heading font-bold text-4xl" style="color:#1C1C1E">$35K</div><div class="text-xs uppercase tracking-wider mt-1" style="color:#767676">Peak Budget</div></div>
    </div>
   </div>

   <div class="max-w-6xl mx-auto px-6 py-14">
    <p class="text-lg max-w-3xl leading-relaxed mb-14" style="color:#5C5C5C">HORIZON is Northgate University's annual international student showcase — a 2-day event where students from 15+ countries present research, creative installations, and cultural performances to an audience of 600–900 visitors including students, faculty, the public, and industry partners. I managed three consecutive editions (2022, 2023, 2024), building the event from its inaugural run into a flagship NGU international program.</p>

    <div class="flex items-center gap-3 mb-3"><span class="accent-line"></span><span class="text-sm font-semibold" style="color:#5C5C5C">What to Expect</span></div>
    <h2 class="font-heading font-bold text-3xl mb-8" style="color:#1C1C1E">Program Highlights</h2>
    ${buildAeroWhatToExpect()}

    <div class="flex items-center gap-3 mb-3 mt-16"><span class="accent-line"></span><span class="text-sm font-semibold" style="color:#5C5C5C">My Role</span></div>
    <h2 class="font-heading font-bold text-3xl mb-2" style="color:#1C1C1E">Contributions</h2>
    <div class="mt-6">${buildAeroContributions()}</div>
   </div>

   <div style="background:#0D0D0B;padding-top:80px">
    <div class="max-w-6xl mx-auto px-6" style="padding-bottom:48px">
     <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
      <span style="display:block;width:28px;height:1.5px;background:rgba(255,255,255,0.2)"></span>
      <span style="color:rgba(255,255,255,0.38);font-size:0.7rem;font-weight:600;letter-spacing:0.14em;text-transform:uppercase">Photo Diary</span>
     </div>
     <h2 class="font-heading" style="font-weight:700;font-size:clamp(2rem,5vw,3rem);color:#fff;letter-spacing:-0.02em;margin:0 0 10px">Moments from the Event</h2>
     <p style="color:rgba(255,255,255,0.32);font-size:0.875rem;margin:0">3 editions &middot; 15+ countries &middot; 800+ visitors &middot; 2022–2024</p>
    </div>
    <div id="aero-gallery" style="display:grid;grid-template-columns:3fr 2fr;grid-template-rows:1fr 1fr;height:75vh;gap:3px">
     <div class="aero-gs" style="grid-row:span 2;overflow:hidden;background:#111">
      <img loading="lazy" class="aero-gs-img" src="" alt="HORIZON moment" style="width:100%;height:100%;object-fit:cover;transition:opacity .5s ease;display:block">
     </div>
     <div class="aero-gs" style="overflow:hidden;background:#111">
      <img loading="lazy" class="aero-gs-img" src="" alt="HORIZON moment" style="width:100%;height:100%;object-fit:cover;transition:opacity .5s ease;display:block">
     </div>
     <div class="aero-gs" style="overflow:hidden;background:#111">
      <img loading="lazy" class="aero-gs-img" src="" alt="HORIZON moment" style="width:100%;height:100%;object-fit:cover;transition:opacity .5s ease;display:block">
     </div>
    </div>
   </div>

   <div style="background:#F2ECE4;border-top:1px solid rgba(28,28,30,0.07)">
    <div class="max-w-6xl mx-auto px-6 py-16">

     <div class="flex items-center gap-3 mb-3"><span class="accent-line"></span><span class="text-sm font-semibold" style="color:#5C5C5C">Institutions</span></div>
     <h2 class="font-heading font-bold text-3xl mb-2" style="color:#1C1C1E">Participating Institutions</h2>
     <p class="text-sm mb-10" style="color:#5C5C5C">80–120 exhibitors · 15+ partner universities & institutions · 9 international student delegations</p>
     ${buildAeroParticipants()}

     <div class="flex items-center gap-3 mb-3 mt-16"><span class="accent-line"></span><span class="text-sm font-semibold" style="color:#5C5C5C">Schedule</span></div>
     <h2 class="font-heading font-bold text-3xl mb-2" style="color:#1C1C1E">Event Rundown</h2>
     <p class="text-sm mb-8" style="color:#5C5C5C">10–11 March 2025 · Northgate University, Portland</p>
     ${buildAeroRundown()}

     <div class="flex items-center gap-3 mb-3 mt-16"><span class="accent-line"></span><span class="text-sm font-semibold" style="color:#5C5C5C">Financials</span></div>
     <h2 class="font-heading font-bold text-3xl mb-2" style="color:#1C1C1E">Budget Overview</h2>
     <p class="text-sm mb-8" style="color:#5C5C5C">Budget breakdown across 4 categories — HORIZON 2025 edition</p>
     ${buildAeroBudget()}

    </div>
   </div>`;

  if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', function () {
  aeroInitPage();
  aeroStartGallery();
});
