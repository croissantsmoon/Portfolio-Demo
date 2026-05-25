// ── NEXUS Participant Statistics ──────────────────────────────────────────────

const AMERTA_DATA = {
  all: {
    label: 'All Batches', period: '2022 – 2024',
    students: 185, countries: 12, uniCount: 18,
    color: '#1E3A5F', bg: 'linear-gradient(135deg,#EEF2F7,#D8E5EF)', border: 'rgba(30,58,95,0.15)',
    nationalities: [
      { country: 'Canada',      flag: '🇨🇦', count: 72 },
      { country: 'Germany',     flag: '🇩🇪', count: 24 },
      { country: 'Japan',       flag: '🇯🇵', count: 19 },
      { country: 'Australia',   flag: '🇦🇺', count: 16 },
      { country: 'France',      flag: '🇫🇷', count: 13 },
      { country: 'UK',          flag: '🇬🇧', count: 11 },
      { country: 'South Korea', flag: '🇰🇷', count: 9  },
      { country: 'Netherlands', flag: '🇳🇱', count: 7  },
      { country: 'Spain',       flag: '🇪🇸', count: 6  },
      { country: 'Brazil',      flag: '🇧🇷', count: 5  },
      { country: 'Singapore',   flag: '🇸🇬', count: 2  },
      { country: 'Sweden',      flag: '🇸🇪', count: 1  },
    ],
    universities: [
      { region: '🇨🇦 Canada', items: [
        { name: 'University of British Columbia', count: 48 },
        { name: 'McGill University',              count: 24 },
      ]},
      { region: '🇩🇪 Germany', items: [
        { name: 'Heidelberg University', count: 15 },
        { name: 'TU Munich',             count: 9  },
      ]},
      { region: '🇯🇵 Japan', items: [
        { name: 'Waseda University', count: 12 },
        { name: 'Keio University',   count: 7  },
      ]},
      { region: '🇦🇺 Australia', items: [
        { name: 'University of Melbourne', count: 10 },
        { name: 'Monash University',       count: 6  },
      ]},
      { region: '🇫🇷 France', items: [
        { name: 'Sciences Po Paris', count: 8 },
        { name: 'University of Lyon', count: 5 },
      ]},
      { region: '🇬🇧 UK', items: [
        { name: 'University of Edinburgh',  count: 7 },
        { name: "King's College London",    count: 4 },
      ]},
      { region: '🇰🇷 South Korea', items: [
        { name: 'Yonsei University', count: 9 },
      ]},
      { region: '🇳🇱 Netherlands', items: [
        { name: 'University of Amsterdam', count: 7 },
      ]},
      { region: '🇪🇸 Spain', items: [
        { name: 'University of Barcelona', count: 6 },
      ]},
      { region: '🇧🇷 Brazil', items: [
        { name: 'University of São Paulo', count: 5 },
      ]},
      { region: '🇸🇬 Singapore', items: [
        { name: 'National University of Singapore', count: 2 },
      ]},
      { region: '🇸🇪 Sweden', items: [
        { name: 'Stockholm University', count: 1 },
      ]},
    ],
    faculties: [
      { name: 'Business & Management',         count: 52 },
      { name: 'Social Sciences',               count: 38 },
      { name: 'Engineering & Technology',      count: 31 },
      { name: 'Arts & Humanities',             count: 27 },
      { name: 'Law & Political Science',       count: 19 },
      { name: 'Natural Sciences',              count: 11 },
      { name: 'Health Sciences',               count: 7  },
    ],
    facultyNote: 'Based on course registrations for Batch 22, 23, and 24. Students may be enrolled in multiple departments simultaneously.',
    analysis: [
      { icon: '🌍', text: 'Across 3 batches (2022–2024), NEXUS enrolled <strong>185 students from 12 countries</strong> at 18 partner universities.' },
      { icon: '🇨🇦', text: '<strong>Canada is the dominant sending country</strong> across all batches, contributing 72 students — 39% of total enrollment.' },
      { icon: '🌏', text: 'Asia-Pacific students (Japan, Australia, South Korea, Singapore) collectively account for over <strong>25%</strong> of total enrollment.' },
      { icon: '📚', text: '<strong>Business & Management and Social Sciences</strong> are the most popular study destinations, together hosting 49% of all course registrations across 3 batches.' },
      { icon: '📈', text: 'Geographic diversity grew steadily: <strong>8 → 10 → 12 countries</strong> per batch, with Batch 24 being the most diverse to date.' },
    ],
  },

  22: {
    label: 'Batch 22', period: '2022 – 2023',
    students: 48, countries: 8, uniCount: 10,
    color: '#1E3A5F', bg: 'linear-gradient(135deg,#EFF6FF,#DBEAFE)', border: 'rgba(30,58,95,0.15)',
    nationalities: [
      { country: 'Canada',      flag: '🇨🇦', count: 20 },
      { country: 'Germany',     flag: '🇩🇪', count: 8  },
      { country: 'Japan',       flag: '🇯🇵', count: 6  },
      { country: 'Australia',   flag: '🇦🇺', count: 5  },
      { country: 'France',      flag: '🇫🇷', count: 4  },
      { country: 'UK',          flag: '🇬🇧', count: 2  },
      { country: 'South Korea', flag: '🇰🇷', count: 2  },
      { country: 'Netherlands', flag: '🇳🇱', count: 1  },
    ],
    universities: [
      { region: '🇨🇦 Canada', items: [
        { name: 'University of British Columbia' },
        { name: 'McGill University'              },
      ]},
      { region: '🇩🇪 Germany', items: [
        { name: 'Heidelberg University' },
        { name: 'TU Munich'             },
      ]},
      { region: '🇯🇵 Japan', items: [
        { name: 'Waseda University' },
      ]},
      { region: '🇦🇺 Australia', items: [
        { name: 'University of Melbourne' },
      ]},
      { region: '🇫🇷 France', items: [
        { name: 'Sciences Po Paris' },
      ]},
      { region: '🇬🇧 UK', items: [
        { name: 'University of Edinburgh' },
      ]},
      { region: '🇰🇷 South Korea', items: [
        { name: 'Yonsei University' },
      ]},
      { region: '🇳🇱 Netherlands', items: [
        { name: 'University of Amsterdam' },
      ]},
    ],
    faculties: [
      { name: 'Business & Management',    count: 18 },
      { name: 'Social Sciences',          count: 12 },
      { name: 'Arts & Humanities',        count: 9  },
      { name: 'Engineering & Technology', count: 5  },
      { name: 'Law & Political Science',  count: 4  },
    ],
    facultyNote: 'Based on course registration records. Students may be enrolled in multiple departments simultaneously.',
    analysis: [
      { icon: '🏆', text: 'Batch 22 was the <strong>inaugural cohort of the NEXUS Exchange Program</strong>, establishing operational systems and institutional partnerships that all subsequent batches would build upon.' },
      { icon: '🇨🇦', text: '<strong>Canada led with 42%</strong> of participants (20 of 48), primarily from UBC and McGill, reflecting a strong founding bilateral partnership.' },
      { icon: '🎓', text: '<strong>Business & Management was the clear academic preference</strong> — 18 of 48 course registrations — the highest single-faculty concentration across all batches.' },
      { icon: '🌍', text: 'Despite being the first cohort, 8 countries were represented, demonstrating strong initial demand for the program across Europe and the Asia-Pacific region.' },
    ],
  },

  23: {
    label: 'Batch 23', period: '2023 – 2024',
    students: 67, countries: 10, uniCount: 14,
    color: '#4A6B8A', bg: 'linear-gradient(135deg,#F0FDF4,#DCFCE7)', border: 'rgba(74,107,138,0.15)',
    nationalities: [
      { country: 'Canada',      flag: '🇨🇦', count: 26 },
      { country: 'Germany',     flag: '🇩🇪', count: 9  },
      { country: 'Japan',       flag: '🇯🇵', count: 7  },
      { country: 'Australia',   flag: '🇦🇺', count: 6  },
      { country: 'France',      flag: '🇫🇷', count: 5  },
      { country: 'UK',          flag: '🇬🇧', count: 5  },
      { country: 'South Korea', flag: '🇰🇷', count: 4  },
      { country: 'Netherlands', flag: '🇳🇱', count: 3  },
      { country: 'Spain',       flag: '🇪🇸', count: 1  },
      { country: 'Brazil',      flag: '🇧🇷', count: 1  },
    ],
    universities: [
      { region: '🇨🇦 Canada', items: [
        { name: 'University of British Columbia' },
        { name: 'McGill University'              },
      ]},
      { region: '🇩🇪 Germany', items: [
        { name: 'Heidelberg University' },
        { name: 'TU Munich'             },
      ]},
      { region: '🇯🇵 Japan', items: [
        { name: 'Waseda University' },
        { name: 'Keio University'   },
      ]},
      { region: '🇦🇺 Australia', items: [
        { name: 'University of Melbourne' },
        { name: 'Monash University'       },
      ]},
      { region: '🇫🇷 France', items: [
        { name: 'Sciences Po Paris' },
        { name: 'University of Lyon' },
      ]},
      { region: '🇬🇧 UK', items: [
        { name: 'University of Edinburgh' },
        { name: "King's College London"   },
      ]},
      { region: '🇰🇷 South Korea', items: [
        { name: 'Yonsei University' },
      ]},
      { region: '🇳🇱 Netherlands', items: [
        { name: 'University of Amsterdam' },
      ]},
      { region: '🇪🇸 Spain', items: [
        { name: 'University of Barcelona' },
      ]},
      { region: '🇧🇷 Brazil', items: [
        { name: 'University of São Paulo' },
      ]},
    ],
    faculties: [
      { name: 'Business & Management',         count: 19 },
      { name: 'Social Sciences',               count: 14 },
      { name: 'Engineering & Technology',      count: 12 },
      { name: 'Arts & Humanities',             count: 10 },
      { name: 'Law & Political Science',       count: 7  },
      { name: 'Natural Sciences',              count: 5  },
    ],
    facultyNote: 'Based on course registration records. Students may be enrolled in multiple departments simultaneously.',
    analysis: [
      { icon: '📈', text: 'Batch 23 <strong>grew 40% over Batch 22</strong>, reaching 67 participants — reflecting growing institutional confidence and expanded recruitment efforts.' },
      { icon: '🇨🇦', text: 'Canada remained the majority at 39%, but <strong>Germany and Japan each grew their cohorts</strong> and Spain and Brazil joined as first-time sending countries.' },
      { icon: '📚', text: '<strong>Engineering & Technology registrations tripled</strong> compared to Batch 22, signaling growing interest in Pacific Coast University\'s STEM offerings.' },
      { icon: '🇬🇧', text: '<strong>King\'s College London joined as a new partner</strong>, and UK representation grew from 2 to 5 students — a significant expansion of the European network.' },
    ],
  },

  24: {
    label: 'Batch 24', period: '2024 – 2025',
    students: 70, countries: 12, uniCount: 18,
    color: '#2C6B45', bg: 'linear-gradient(135deg,#F0FDF4,#DCFCE7)', border: 'rgba(44,107,69,0.15)',
    nationalities: [
      { country: 'Canada',      flag: '🇨🇦', count: 26 },
      { country: 'Germany',     flag: '🇩🇪', count: 7  },
      { country: 'Japan',       flag: '🇯🇵', count: 6  },
      { country: 'Australia',   flag: '🇦🇺', count: 5  },
      { country: 'France',      flag: '🇫🇷', count: 4  },
      { country: 'UK',          flag: '🇬🇧', count: 4  },
      { country: 'South Korea', flag: '🇰🇷', count: 3  },
      { country: 'Netherlands', flag: '🇳🇱', count: 3  },
      { country: 'Spain',       flag: '🇪🇸', count: 5  },
      { country: 'Brazil',      flag: '🇧🇷', count: 4  },
      { country: 'Singapore',   flag: '🇸🇬', count: 2  },
      { country: 'Sweden',      flag: '🇸🇪', count: 1  },
    ],
    universities: [
      { region: '🇨🇦 Canada', items: [
        { name: 'University of British Columbia' },
        { name: 'McGill University'              },
      ]},
      { region: '🇩🇪 Germany', items: [
        { name: 'Heidelberg University' },
        { name: 'TU Munich'             },
      ]},
      { region: '🇯🇵 Japan', items: [
        { name: 'Waseda University' },
        { name: 'Keio University'   },
      ]},
      { region: '🇦🇺 Australia', items: [
        { name: 'University of Melbourne' },
        { name: 'Monash University'       },
      ]},
      { region: '🇫🇷 France', items: [
        { name: 'Sciences Po Paris' },
        { name: 'University of Lyon' },
      ]},
      { region: '🇬🇧 UK', items: [
        { name: 'University of Edinburgh' },
        { name: "King's College London"   },
      ]},
      { region: '🇰🇷 South Korea', items: [
        { name: 'Yonsei University' },
      ]},
      { region: '🇳🇱 Netherlands', items: [
        { name: 'University of Amsterdam' },
      ]},
      { region: '🇪🇸 Spain', items: [
        { name: 'University of Barcelona' },
      ]},
      { region: '🇧🇷 Brazil', items: [
        { name: 'University of São Paulo' },
      ]},
      { region: '🇸🇬 Singapore', items: [
        { name: 'National University of Singapore' },
      ]},
      { region: '🇸🇪 Sweden', items: [
        { name: 'Stockholm University' },
      ]},
    ],
    faculties: [
      { name: 'Business & Management',         count: 15 },
      { name: 'Social Sciences',               count: 12 },
      { name: 'Engineering & Technology',      count: 14 },
      { name: 'Arts & Humanities',             count: 8  },
      { name: 'Law & Political Science',       count: 8  },
      { name: 'Natural Sciences',              count: 6  },
      { name: 'Health Sciences',               count: 7  },
    ],
    facultyNote: 'Based on course registration records. Data reflects confirmed enrollments. Students may enroll across multiple departments.',
    analysis: [
      { icon: '🌍', text: 'Batch 24 is the <strong>most geographically diverse cohort</strong> with 12 countries — more than any previous batch — and the largest at 70 participants.' },
      { icon: '🇸🇬', text: '<strong>Singapore appeared for the first time</strong> via the National University of Singapore, and Sweden joined through Stockholm University, broadening the program\'s global footprint.' },
      { icon: '🆕', text: '<strong>Health Sciences debuted as a popular destination</strong> for incoming students, reflecting new curriculum offerings at Pacific Coast University for the 2024–2025 academic year.' },
      { icon: '📊', text: 'Canada\'s share dropped from 42% (Batch 22) to 37% (Batch 24), demonstrating consistent <strong>diversification of the sending-country portfolio</strong> over program iterations.' },
    ],
  },
};

// ── Gallery Rotation ─────────────────────────────────────────────────────────

const AMERTA_GALLERY_IMGS = [
  'https://picsum.photos/seed/nexus-1/800/600',
  'https://picsum.photos/seed/nexus-2/800/600',
  'https://picsum.photos/seed/nexus-3/800/600',
  'https://picsum.photos/seed/nexus-4/800/600',
  'https://picsum.photos/seed/nexus-5/800/600',
  'https://picsum.photos/seed/nexus-6/800/600',
  'https://picsum.photos/seed/nexus-7/800/600',
  'https://picsum.photos/seed/nexus-8/800/600',
  'https://picsum.photos/seed/nexus-9/800/600',
  'https://picsum.photos/seed/nexus-10/800/600',
  'https://picsum.photos/seed/nexus-11/800/600',
  'https://picsum.photos/seed/nexus-12/800/600',
  'https://picsum.photos/seed/nexus-13/800/600',
  'https://picsum.photos/seed/nexus-14/800/600',
  'https://picsum.photos/seed/nexus-15/800/600',
  'https://picsum.photos/seed/nexus-16/800/600',
  'https://picsum.photos/seed/nexus-17/800/600',
  'https://picsum.photos/seed/nexus-18/800/600',
  'https://picsum.photos/seed/nexus-19/800/600',
  'https://picsum.photos/seed/nexus-20/800/600',
  'https://picsum.photos/seed/nexus-21/800/600',
  'https://picsum.photos/seed/nexus-22/800/600',
  'https://picsum.photos/seed/nexus-23/800/600',
  'https://picsum.photos/seed/nexus-24/800/600',
  'https://picsum.photos/seed/nexus-25/800/600',
  'https://picsum.photos/seed/nexus-26/800/600',
  'https://picsum.photos/seed/nexus-27/800/600',
  'https://picsum.photos/seed/nexus-28/800/600',
];

let _amertaGalTimer = null;
let _amertaGalSlot  = 0;
let _amertaGalShown = [];
let _amertaGalQueue = [];

function _amertaShuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function amertaStartGallery() {
  if (_amertaGalTimer) { clearInterval(_amertaGalTimer); _amertaGalTimer = null; }

  const imgs = document.querySelectorAll('.amerta-gs-img');
  if (!imgs.length) return;

  _amertaGalQueue = _amertaShuffle(AMERTA_GALLERY_IMGS);
  _amertaGalShown = [];
  let qi = 0;

  imgs.forEach(img => {
    const src = _amertaGalQueue[qi % _amertaGalQueue.length];
    img.src = src;
    _amertaGalShown.push(src);
    qi++;
  });

  _amertaGalSlot = 0;

  _amertaGalTimer = setInterval(() => {
    const imgEls = document.querySelectorAll('.amerta-gs-img');
    if (!imgEls.length) { clearInterval(_amertaGalTimer); return; }

    const slot = _amertaGalSlot % imgEls.length;
    const imgEl = imgEls[slot];

    let next = _amertaGalQueue[qi % _amertaGalQueue.length];
    let tries = 0;
    while (_amertaGalShown.includes(next) && tries < AMERTA_GALLERY_IMGS.length) {
      qi++;
      if (qi >= _amertaGalQueue.length) {
        _amertaGalQueue = _amertaShuffle(AMERTA_GALLERY_IMGS);
        qi = 0;
      }
      next = _amertaGalQueue[qi % _amertaGalQueue.length];
      tries++;
    }
    const nextSrc = next;
    qi++;

    imgEl.style.opacity = '0';
    setTimeout(() => {
      if (!document.body.contains(imgEl)) return;
      _amertaGalShown[slot] = nextSrc;
      imgEl.src = nextSrc;
      const show = () => { imgEl.style.opacity = '1'; };
      if (imgEl.complete && imgEl.naturalWidth) show();
      else { imgEl.onload = show; imgEl.onerror = show; }
    }, 500);

    _amertaGalSlot++;
  }, 3000);
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function buildOverview(key) {
  const d = AMERTA_DATA[key];
  if (key === 'all') {
    const cards = ['22', '23', '24'].map(k => {
      const b = AMERTA_DATA[k];
      return `<div onclick="amertaSelectBatch('${k}')" class="rounded-xl p-5 text-center cursor-pointer hover:shadow-md transition-all duration-200" style="background:${b.bg};border:1px solid ${b.border}">
        <p class="font-heading font-bold text-2xl mb-1" style="color:${b.color}">${b.students}</p>
        <p class="font-heading font-semibold text-sm mb-1" style="color:#0F172A">${b.label}</p>
        <p class="text-xs mb-3" style="color:#64748B">${b.period}</p>
        <p class="text-xs" style="color:#64748B">
          <span style="color:${b.color};font-weight:600">${b.countries}</span> countries &middot;
          <span style="color:${b.color};font-weight:600">${b.uniCount}</span> universities
        </p>
      </div>`;
    }).join('');
    return `<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">${cards}</div>`;
  }
  return `<div class="rounded-xl p-6 mb-8 flex flex-wrap gap-8 items-center" style="background:${d.bg};border:1px solid ${d.border}">
    <div class="text-center">
      <p class="font-heading font-bold text-3xl" style="color:${d.color}">${d.students}</p>
      <p class="text-xs mt-1" style="color:#64748B">Participants</p>
    </div>
    <div class="text-center">
      <p class="font-heading font-bold text-3xl" style="color:${d.color}">${d.countries}</p>
      <p class="text-xs mt-1" style="color:#64748B">Countries</p>
    </div>
    <div class="text-center">
      <p class="font-heading font-bold text-3xl" style="color:${d.color}">${d.uniCount}</p>
      <p class="text-xs mt-1" style="color:#64748B">Universities</p>
    </div>
    <div class="ml-auto text-right">
      <p class="font-heading font-bold text-xl" style="color:#0F172A">${d.label}</p>
      <p class="text-sm" style="color:#64748B">${d.period}</p>
    </div>
  </div>`;
}

function buildNationalities(d) {
  const max  = d.nationalities[0].count;
  const rows = d.nationalities.map(n => {
    const barPct   = ((n.count / max)      * 100).toFixed(1);
    const sharePct = ((n.count / d.students) * 100).toFixed(0);
    return `<div class="flex items-center gap-3">
      <span class="text-base w-7 flex-shrink-0">${n.flag}</span>
      <span class="text-sm w-28 flex-shrink-0" style="color:#0F172A">${esc(n.country)}</span>
      <div class="flex-1 rounded-full overflow-hidden" style="background:#F1F5F9;height:10px">
        <div class="h-full rounded-full" data-w="${barPct}%" style="width:0;background:linear-gradient(90deg,#1E3A5F,#4A6B8A);transition:width .55s ease"></div>
      </div>
      <span class="text-sm font-semibold w-8 text-right" style="color:#1E3A5F">${n.count}</span>
      <span class="text-xs w-9 text-right" style="color:#94A3B8">${sharePct}%</span>
    </div>`;
  }).join('');
  return `<h3 class="font-heading font-semibold text-lg mb-5" style="color:#0F172A">
    Nationalities <span class="text-sm font-normal ml-2" style="color:#64748B">— ${d.nationalities.length} countries</span>
  </h3>
  <div class="space-y-3 mb-10">${rows}</div>`;
}

function buildUniversities(d) {
  const hasCount = d.universities.some(g => g.items.some(i => i.count != null));
  const cards = d.universities.map(g => {
    const items = g.items.map(item => {
      const badge = item.count != null
        ? `<span class="text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0" style="background:rgba(30,58,95,0.1);color:#1E3A5F">${item.count}</span>`
        : '';
      return `<div class="flex justify-between items-center gap-2">
        <span class="text-sm" style="color:#0F172A">${esc(item.name)}</span>${badge}
      </div>`;
    }).join('');
    return `<div class="rounded-lg p-4" style="background:#F8FAFC;border:1px solid rgba(74,107,138,0.12)">
      <p class="text-xs font-semibold mb-2" style="color:#1E3A5F">${esc(g.region)}</p>
      <div class="space-y-1.5">${items}</div>
    </div>`;
  }).join('');
  const note = hasCount ? ' — student counts across all batches' : '';
  return `<h3 class="font-heading font-semibold text-lg mb-5" style="color:#0F172A">
    Partner Universities <span class="text-sm font-normal ml-2" style="color:#64748B">— ${d.uniCount} institutions${note}</span>
  </h3>
  <div class="grid md:grid-cols-2 gap-3 mb-10">${cards}</div>`;
}

function buildFaculties(d) {
  if (!d.faculties) {
    return `<h3 class="font-heading font-semibold text-lg mb-2" style="color:#0F172A">Department Enrollment at Pacific Coast University</h3>
    <div class="rounded-lg p-6 mb-10 text-center" style="background:#F8FAFC;border:1px dashed rgba(100,116,139,0.3)">
      <p class="text-sm" style="color:#94A3B8">📋 Department enrollment data was not recorded for this batch.</p>
    </div>`;
  }
  const max  = d.faculties[0].count;
  const rows = d.faculties.map(f => {
    const pct = ((f.count / max) * 100).toFixed(1);
    return `<div class="flex items-center gap-3">
      <span class="text-sm flex-shrink-0" style="color:#0F172A;max-width:min(13rem,40vw);overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${esc(f.name)}">${esc(f.name)}</span>
      <div class="flex-1 rounded-full overflow-hidden" style="background:#F1F5F9;height:10px">
        <div class="h-full rounded-full" data-w="${pct}%" style="width:0;background:linear-gradient(90deg,#1E3A5F,#4A6B8A);transition:width .55s ease"></div>
      </div>
      <span class="text-sm font-semibold w-8 text-right" style="color:#1E3A5F">${f.count}</span>
    </div>`;
  }).join('');
  return `<h3 class="font-heading font-semibold text-lg mb-2" style="color:#0F172A">Department Enrollment at Pacific Coast University</h3>
  <p class="text-xs mb-5" style="color:#94A3B8">${esc(d.facultyNote)}</p>
  <div class="space-y-3 mb-10">${rows}</div>`;
}

function buildAnalysis(d) {
  const items = d.analysis.map(a =>
    `<div class="flex gap-3 items-start">
      <span class="text-xl flex-shrink-0 mt-0.5">${a.icon}</span>
      <p class="text-sm leading-relaxed" style="color:#475569">${a.text}</p>
    </div>`
  ).join('');
  return `<div class="rounded-xl p-6" style="background:linear-gradient(135deg,#EEF2F7,#D8E5EF);border:1px solid rgba(30,58,95,0.12)">
    <h3 class="font-heading font-semibold text-base mb-4" style="color:#0F172A">Batch Analysis</h3>
    <div class="space-y-3">${items}</div>
  </div>`;
}

// ── Page Shell ───────────────────────────────────────────────────────────────

function amertaInitPage() {
  const el = document.getElementById('page-amerta');
  if (!el) return;

  const steps = [
    { n:'01', icon:'mail',            title:'Institutional Outreach & Student Recruitment',   desc:'Coordinated with international partner universities regarding program promotion, student nominations, application processes, and recruitment timelines. Managed communication with both institutional representatives and prospective exchange students.' },
    { n:'02', icon:'presentation',    title:'Pre-Departure Orientation',                      desc:'Organized pre-departure orientation sessions covering academic systems, campus culture, immigration procedures, accommodation guidance, and student preparedness before arrival at Pacific Coast University.' },
    { n:'03', icon:'book-open-check', title:'Academic Coordination & Credit Transfer',        desc:'Managed course mapping and credit transfer processes between Pacific Coast University and international partner institutions. Bridged communication between departments, academic coordinators, and students to ensure smooth academic recognition.' },
    { n:'04', icon:'plane-landing',   title:'Arrival, Visa, Immigration & Accommodation',     desc:'Managed airport pick-up services, accommodation arrangements, visa documentation, immigration coordination, and arrival logistics to ensure students experienced a smooth transition into their host city.' },
    { n:'05', icon:'users',           title:'Arrival Orientation & Student Integration',       desc:'Conducted orientation sessions introducing students to campus life, academic systems, local culture, safety information, and student support services to help them adapt quickly.' },
    { n:'06', icon:'clipboard-check', title:'Semester Monitoring & Student Support',           desc:'Monitored academic progress and student well-being throughout the semester by coordinating continuously with departments, faculty, and students. Ensured issues were addressed efficiently and student experiences remained positive.' },
    { n:'07', icon:'mountain',        title:'Cultural Trips & Immersive Experiences',          desc:'Planned and managed cultural immersion activities, local excursions, and intercultural experiences to help international students explore the region, build community, and strengthen cross-cultural engagement.' },
    { n:'08', icon:'party-popper',    title:'Farewell Session & Program Closure',             desc:'Organized farewell sessions and program closure activities to celebrate student achievements, gather feedback, and maintain long-term institutional and alumni relationships.' },
  ];

  const stepsHtml = steps.map(s => `
   <div class="flex gap-6 py-8" style="border-top:1px solid rgba(28,28,30,0.07)">
    <div class="flex-shrink-0 w-10 pt-0.5">
     <span class="font-heading font-bold text-3xl select-none" style="color:rgba(28,28,30,0.1);line-height:1">${s.n}</span>
    </div>
    <div class="flex gap-4 flex-1">
     <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style="background:rgba(74,107,138,0.1)">
      <i data-lucide="${s.icon}" style="width:18px;height:18px;color:#4A6B8A"></i>
     </div>
     <div>
      <h3 class="font-heading font-semibold text-lg mb-2" style="color:#1C1C1E">${s.title}</h3>
      <p class="text-sm leading-relaxed" style="color:#5C5C5C">${s.desc}</p>
     </div>
    </div>
   </div>
  `).join('');

  el.innerHTML = `
   <div class="page-hero-banner relative overflow-hidden" style="padding:64px 0 48px">
    <div class="absolute inset-0"><img loading="lazy" src="https://picsum.photos/seed/nexus-hero/1200/500" alt="NEXUS Exchange Program" style="width:100%;height:100%;object-fit:cover;object-position:center"><div style="position:absolute;inset:0;background:linear-gradient(135deg,rgba(30,58,95,0.88) 0%,rgba(45,90,138,0.82) 60%,rgba(74,107,138,0.77) 100%)"></div></div>
    <div class="absolute -right-16 -top-16 w-80 h-80 rounded-full" style="background:rgba(255,255,255,0.04)"></div>
    <div class="absolute right-24 bottom-8 w-48 h-48 rounded-full" style="border:2px solid rgba(255,255,255,0.06)"></div>
    <div class="absolute inset-0 flex items-center justify-end overflow-hidden pr-8 pointer-events-none select-none" aria-hidden="true">
     <span class="font-heading font-bold" style="font-size:clamp(5rem,16vw,13rem);color:rgba(255,255,255,0.05);letter-spacing:-.04em;line-height:1">NEXUS</span>
    </div>
    <div class="relative z-10 max-w-6xl mx-auto px-6">
     <a href="/projects-overview" class="inline-flex items-center gap-2 mb-8 px-3.5 py-1.5 rounded-full text-sm font-medium" style="background:rgba(255,255,255,0.14);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);color:rgba(255,255,255,0.9);text-decoration:none;border:1px solid rgba(255,255,255,0.18)"><i data-lucide="chevron-left" style="width:14px;height:14px"></i> Back</a>
     <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-5 uppercase tracking-wider" style="background:rgba(255,255,255,0.12);color:#fff">Project Management</span>
     <h1 class="font-heading font-bold mb-3 text-white" style="font-size:clamp(2.5rem,6vw,4rem);letter-spacing:-.02em" data-edit-key="amerta_hero_title">NEXUS Exchange Program</h1>
     <p class="text-base max-w-2xl" style="color:rgba(255,255,255,0.75)" data-edit-key="amerta_hero_tagline">Northgate University's flagship international exchange, managed end-to-end across 3 batches — bringing students from 12 countries to Pacific Coast University.</p>
    </div>
   </div>
   <div class="max-w-6xl mx-auto px-6">
    <div class="flex flex-wrap gap-10 py-10" style="border-bottom:1px solid rgba(28,28,30,0.08)">
     <div><div class="font-heading font-bold text-4xl" style="color:#1C1C1E">185</div><div class="text-xs uppercase tracking-wider mt-1" style="color:#767676">Students (Batch 22–24)</div></div>
     <div><div class="font-heading font-bold text-4xl" style="color:#1C1C1E">12</div><div class="text-xs uppercase tracking-wider mt-1" style="color:#767676">Countries</div></div>
     <div><div class="font-heading font-bold text-4xl" style="color:#1C1C1E">18</div><div class="text-xs uppercase tracking-wider mt-1" style="color:#767676">Partner Universities</div></div>
     <div><div class="font-heading font-bold text-4xl" style="color:#1C1C1E">$65K–$120K</div><div class="text-xs uppercase tracking-wider mt-1" style="color:#767676">Budget / cohort</div></div>
    </div>
   </div>
   <div class="max-w-6xl mx-auto px-6 py-14">
    <p class="text-lg max-w-3xl leading-relaxed mb-14" style="color:#5C5C5C">As Project Manager of the NEXUS Exchange Program at Northgate University's Global Engagement Office, I oversaw the entire student mobility journey — from institutional outreach and student recruitment to academic coordination, cultural programming, and program closure across 3 cohorts with budgets of $65,000–$120,000 per program.</p>
    <div class="flex items-center gap-3 mb-3"><span class="accent-line"></span><span class="text-sm font-semibold" style="color:#4A6B8A">Program Process</span></div>
    <h2 class="font-heading font-bold text-3xl mb-2" style="color:#1C1C1E">End-to-End Responsibilities</h2>
    <div class="mt-6">${stepsHtml}</div>
   </div>
   <div style="background:#0D0D0B;padding-top:80px">
    <div class="max-w-6xl mx-auto px-6" style="padding-bottom:48px">
     <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
      <span style="display:block;width:28px;height:1.5px;background:rgba(255,255,255,0.2)"></span>
      <span style="color:rgba(255,255,255,0.38);font-size:0.7rem;font-weight:600;letter-spacing:0.14em;text-transform:uppercase">Photo Diary</span>
     </div>
     <h2 class="font-heading" style="font-weight:700;font-size:clamp(2rem,5vw,3rem);color:#fff;letter-spacing:-0.02em;margin:0 0 10px">Moments from the Exchange</h2>
     <p style="color:rgba(255,255,255,0.32);font-size:0.875rem;margin:0">Three batches &middot; 185 students &middot; 12 countries &middot; 2022–2025</p>
    </div>
    <div id="amerta-gallery" style="display:grid;grid-template-columns:3fr 2fr;grid-template-rows:1fr 1fr;height:75vh;gap:3px">
     <div class="amerta-gs" style="grid-row:span 2;overflow:hidden;background:#111">
      <img loading="lazy" class="amerta-gs-img" src="" alt="NEXUS moment" style="width:100%;height:100%;object-fit:cover;transition:opacity .5s ease;display:block">
     </div>
     <div class="amerta-gs" style="overflow:hidden;background:#111">
      <img loading="lazy" class="amerta-gs-img" src="" alt="NEXUS moment" style="width:100%;height:100%;object-fit:cover;transition:opacity .5s ease;display:block">
     </div>
     <div class="amerta-gs" style="overflow:hidden;background:#111">
      <img loading="lazy" class="amerta-gs-img" src="" alt="NEXUS moment" style="width:100%;height:100%;object-fit:cover;transition:opacity .5s ease;display:block">
     </div>
    </div>
   </div>
   <div style="background:#F2ECE4;border-top:1px solid rgba(28,28,30,0.07)">
    <div class="max-w-6xl mx-auto px-6 py-16">
     <div class="flex items-center gap-3 mb-3"><span class="accent-line"></span><span class="text-sm font-semibold" style="color:#4A6B8A">Data &amp; Analytics</span></div>
     <h2 class="font-heading font-bold text-3xl mb-2" style="color:#1C1C1E">Participant Statistics</h2>
     <p class="text-sm mb-8" id="amerta-stats-subtitle" style="color:#5C5C5C">Data compiled from Batch 22–24 across 185 participants, 12 nationalities, and 18 partner universities.</p>
     <div class="flex flex-wrap gap-2 mb-8">
      <button class="amerta-batch-tab px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200" data-batch="all" style="cursor:pointer;background:#1E3A5F;color:#fff;border-color:#1E3A5F">All Batches</button>
      <button class="amerta-batch-tab px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200" data-batch="22" style="cursor:pointer;color:#5C5C5C;border-color:rgba(28,28,30,0.2)">Batch 22</button>
      <button class="amerta-batch-tab px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200" data-batch="23" style="cursor:pointer;color:#5C5C5C;border-color:rgba(28,28,30,0.2)">Batch 23</button>
      <button class="amerta-batch-tab px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200" data-batch="24" style="cursor:pointer;color:#5C5C5C;border-color:rgba(28,28,30,0.2)">Batch 24</button>
     </div>
     <div id="amerta-stats-content"></div>
    </div>
   </div>`;
}

// ── Render ───────────────────────────────────────────────────────────────────

function amertaRenderBatch(key) {
  const d = AMERTA_DATA[key];
  if (!d) return;

  document.querySelectorAll('.amerta-batch-tab').forEach(tab => {
    const active       = tab.dataset.batch === key;
    tab.style.background  = active ? d.color : '';
    tab.style.color       = active ? '#fff'  : '#5C5C5C';
    tab.style.borderColor = active ? d.color : 'rgba(28,28,30,0.2)';
  });

  const sub = document.getElementById('amerta-stats-subtitle');
  if (sub) sub.textContent = key === 'all'
    ? 'Data compiled from Batch 22–24 across 185 participants, 12 nationalities, and 18 partner universities.'
    : `${d.label} · ${d.period} · ${d.students} participants from ${d.countries} countries`;

  const el = document.getElementById('amerta-stats-content');
  if (!el) return;
  el.innerHTML = buildOverview(key) + buildNationalities(d) + buildUniversities(d) + buildFaculties(d) + buildAnalysis(d);

  requestAnimationFrame(() => requestAnimationFrame(() => {
    el.querySelectorAll('[data-w]').forEach(bar => { bar.style.width = bar.dataset.w; });
  }));
}

window.amertaSelectBatch = function (key) { amertaRenderBatch(key); };

// ── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function () {
  amertaInitPage();
  if (window.lucide) lucide.createIcons();
  document.querySelectorAll('.amerta-batch-tab').forEach(tab => {
    tab.addEventListener('click', function () { amertaRenderBatch(this.dataset.batch); });
  });
  amertaRenderBatch('all');
  amertaStartGallery();
});
