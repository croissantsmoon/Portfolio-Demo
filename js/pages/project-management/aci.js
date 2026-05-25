// ── CONNECT (Cultural Immersion Program) Page ─────────────────────────────────

const ACI_DATA = {
  all: {
    label: 'All Batches', period: '2023 – 2025',
    participants: 156, batches: 3, countries: 8, locations: 3,
    color: '#4A5235', bg: 'linear-gradient(135deg,#F1F3EE,#E4E8DC)', border: 'rgba(74,82,53,0.15)',
    budgetTotal: 103000,
    budgetNote: 'Combined realization across 3 batches. All figures in USD.',
    budgetCategories: [
      { name: 'Activities/Events',   amount: 42000, color: '#4A5235' },
      { name: 'Accommodation',       amount: 27000, color: '#2563EB' },
      { name: 'Transport',           amount: 16000, color: '#F97316' },
      { name: 'Food & Beverages',    amount: 11000, color: '#8B5CF6' },
      { name: 'Consumables/Shirts',  amount: 5500,  color: '#EC4899' },
      { name: 'Emergency',           amount: 1500,  color: '#64748B' },
    ],
    budgetBatches: [
      { label: 'Portland 2023',   spent: 28000,  budget: 32000 },
      { label: 'Seattle 2024',    spent: 36000,  budget: 40000 },
      { label: 'Vancouver 2025',  spent: 39000,  budget: 45000 },
    ],
    nationalities: [
      { country: 'Japan',        flag: '🇯🇵', count: 22 },
      { country: 'South Korea',  flag: '🇰🇷', count: 19 },
      { country: 'Germany',      flag: '🇩🇪', count: 18 },
      { country: 'France',       flag: '🇫🇷', count: 17 },
      { country: 'Canada',       flag: '🇨🇦', count: 15 },
      { country: 'Mexico',       flag: '🇲🇽', count: 14 },
      { country: 'Brazil',       flag: '🇧🇷', count: 12 },
      { country: 'Australia',    flag: '🇦🇺', count: 9  },
    ],
    natNote: 'Nationality data is fully available for all 3 batches (156 participants). Figures reflect cumulative enrollment across Portland 2023, Seattle 2024, and Vancouver 2025.',
    programs: [
      { name: 'Cultural Workshops',       count: 52, color: '#2563EB' },
      { name: 'Company Visits',           count: 45, color: '#4A5235' },
      { name: 'Homestay Experience',      count: 38, color: '#F97316' },
      { name: 'Cooking Classes',          count: 35, color: '#8B5CF6' },
      { name: 'Language Exchange',        count: 30, color: '#EC4899' },
      { name: 'City Tours',               count: 28, color: '#64748B' },
    ],
    gender: { M: 68, F: 88, note: 'Gender data available for all 156 participants across 3 batches.' },
    satisfaction: {
      scale: 'mixed',
      note: 'All batches used a 1–10 satisfaction scale. Scores converted to percentage for comparison.',
      batches: [
        { label: 'Portland 2023 (1–10)',   overall: 9.12,  max: 10, pct: 91.2,  n: 50 },
        { label: 'Seattle 2024 (1–10)',    overall: 9.45,  max: 10, pct: 94.5,  n: 51 },
        { label: 'Vancouver 2025 (1–10)',  overall: 9.61,  max: 10, pct: 96.1,  n: 52 },
      ],
    },
    analysis: [
      { icon: '👥', text: 'Across 3 batches (2023–2025), CONNECT reached <strong>156 participants from 8 countries</strong> across 3 destinations: Portland, Seattle, and Vancouver.' },
      { icon: '🇯🇵', text: '<strong>Japanese and South Korean students lead</strong> CONNECT enrollment (~26%), reflecting a strong bilateral academic partnership with universities in East Asia.' },
      { icon: '🌍', text: 'Each batch introduced distinct city experiences — from tech campuses in Portland to Boeing\'s factory in Seattle and UBC\'s waterfront campus in Vancouver — ensuring no two cohorts shared the same itinerary.' },
      { icon: '📈', text: '<strong>Satisfaction consistently high</strong> across all batches — rising from 91.2% (2023) to 96.1% (2025), demonstrating continuous program improvement.' },
      { icon: '💰', text: 'Total program cost of <strong>$103,000 across 3 batches</strong> averages $660 per participant — demonstrating cost-efficient cultural immersion at scale.' },
    ],
  },

  b1_2024: {
    label: 'Portland 2023', sublabel: 'Batch 1 – Portland, OR',
    period: '14-day program · June 2023', location: 'Portland, Oregon',
    participants: 52,
    color: '#2563EB', bg: 'linear-gradient(135deg,#EFF6FF,#DBEAFE)', border: 'rgba(37,99,235,0.15)',
    vendors: [
      { category: 'Hotel',      name: 'The Nines Hotel, Portland',      desc: 'Accommodation for participants during the 14-day program stay in downtown Portland.' },
      { category: 'Venue',      name: 'Nike World Campus, Beaverton',   desc: 'Guided tour of Nike\'s global headquarters — innovation labs, design studios, and athlete performance centers.' },
      { category: 'Venue',      name: 'Intel Campus, Hillsboro',        desc: 'Technology company visit with an overview of semiconductor manufacturing and global R&D operations.' },
      { category: 'Venue',      name: 'Portland Japanese Garden',       desc: 'Guided cultural visit to one of the most authentic Japanese gardens outside Japan — cultural exchange activity.' },
      { category: 'Venue',      name: 'Powell\'s Books',                desc: 'Literary and cultural exploration at the world\'s largest independent bookstore.' },
      { category: 'Food',       name: 'Various Portland Food Carts',    desc: 'Group meals across Portland\'s iconic food cart pods — showcasing local culinary culture.' },
    ],
    activities: [
      'Nike World Campus guided tour — innovation labs and design studios in Beaverton',
      'Intel Campus visit — semiconductor technology and global R&D overview in Hillsboro',
      'Portland Japanese Garden cultural visit with guided tour',
      'Powell\'s Books literary exploration and cross-cultural book exchange',
      'Multnomah Falls day trip — Columbia River Gorge hiking and nature experience',
      'Cooking class: Pacific Northwest cuisine with local chefs',
    ],
    budgetTotal: 28000,
    budgetAlloc: 32000,
    budgetCategories: [
      { name: 'Activities/Events', amount: 11200, color: '#4A5235' },
      { name: 'Accommodation',     amount: 8400,  color: '#2563EB' },
      { name: 'Transport',         amount: 4200,  color: '#F97316' },
      { name: 'Food & Beverages',  amount: 2800,  color: '#8B5CF6' },
      { name: 'Consumables',       amount: 900,   color: '#EC4899' },
      { name: 'Emergency',         amount: 500,   color: '#64748B' },
    ],
    nationalities: [
      { country: 'Japan',        flag: '🇯🇵', count: 9  },
      { country: 'South Korea',  flag: '🇰🇷', count: 8  },
      { country: 'Germany',      flag: '🇩🇪', count: 7  },
      { country: 'France',       flag: '🇫🇷', count: 7  },
      { country: 'Canada',       flag: '🇨🇦', count: 6  },
      { country: 'Mexico',       flag: '🇲🇽', count: 6  },
      { country: 'Brazil',       flag: '🇧🇷', count: 5  },
      { country: 'Australia',    flag: '🇦🇺', count: 4  },
    ],
    programs: [
      { name: 'Cultural Workshops',   count: 18, color: '#2563EB' },
      { name: 'Company Visits',       count: 16, color: '#4A5235' },
      { name: 'Homestay Experience',  count: 12, color: '#F97316' },
      { name: 'Cooking Classes',      count: 11, color: '#8B5CF6' },
      { name: 'Language Exchange',    count: 10, color: '#EC4899' },
      { name: 'City Tours',           count: 9,  color: '#64748B' },
    ],
    gender: { M: 22, F: 30 },
    satisfaction: {
      scale: '1–10',
      n: 50,
      overall: 9.12,
      max: 10,
      criteria: [
        { label: 'Homestay family experience',       score: 9.45, max: 10 },
        { label: 'Company visit quality',            score: 9.38, max: 10 },
        { label: 'Committee helpfulness on trip',    score: 9.30, max: 10 },
        { label: 'Trip was fun & insightful',        score: 9.25, max: 10 },
        { label: 'Program information availability', score: 9.18, max: 10 },
        { label: 'Cultural activity interest',       score: 9.05, max: 10 },
        { label: 'Overall satisfaction',             score: 9.12, max: 10 },
        { label: 'Registration process',             score: 8.98, max: 10 },
        { label: 'Program content & schedule',       score: 8.90, max: 10 },
        { label: 'Language exchange sessions',       score: 8.75, max: 10 },
      ],
    },
    analysis: [
      { icon: '🌍', text: 'The inaugural CONNECT batch brought together <strong>52 participants from 8 countries</strong> for a 14-day cultural immersion in Portland — the first cohort in the program\'s history.' },
      { icon: '🏢', text: '<strong>Tech company visits were the standout activity</strong> — Nike and Intel campus tours received the highest individual activity ratings, reflecting participants\' interest in connecting culture with industry.' },
      { icon: '💰', text: '<strong>Budget efficiency of 12.5%</strong> — $28,000 spent of $32,000 allocated — reflecting careful vendor negotiation in the program\'s inaugural year.' },
      { icon: '⭐', text: 'Satisfaction averaged <strong>9.12 / 10</strong> across 50 respondents — strongest for homestay experience (9.45) and company visits (9.38). Language exchange scored lowest at 8.75, signaling room for structured session improvement.' },
    ],
  },

  b1_2025: {
    label: 'Seattle 2024', sublabel: 'Batch 2 – Seattle, WA',
    period: '14-day program · June 2024', location: 'Seattle, Washington',
    participants: 52,
    color: '#10B981', bg: 'linear-gradient(135deg,#F0FDF4,#DCFCE7)', border: 'rgba(16,185,129,0.15)',
    vendors: [
      { category: 'Hotel',  name: 'Hyatt Regency Seattle',           desc: 'Accommodation for participants. 26 rooms used for the 14-day program in downtown Seattle.' },
      { category: 'Venue',  name: 'Pike Place Market',               desc: 'Immersive market visit — cooking demonstration with local vendors, fish market tour, and food tasting.' },
      { category: 'Venue',  name: 'Boeing Future of Flight Center',  desc: 'Factory tour of the world\'s largest building — witnessing commercial aircraft assembly firsthand.' },
      { category: 'Venue',  name: 'Space Needle',                    desc: 'Iconic Seattle landmark — group visit with cultural photography session and city panoramic tour.' },
      { category: 'Venue',  name: 'University of Washington',        desc: 'Campus visit — academic session with UW International Programs and library tour.' },
      { category: 'Food',   name: 'Local Seattle Restaurants',       desc: 'Group dining at Seattle\'s diverse restaurant scene including Pike Place Market food stalls.' },
      { category: 'Shirts', name: 'Northwest Print Co.',             desc: 'Custom CONNECT program shirts for all 52 participants and staff.' },
    ],
    activities: [
      'Pike Place Market visit — cooking class, fish market tour, and food tasting with local vendors',
      'Boeing Future of Flight factory tour — commercial aircraft assembly in Everett, WA',
      'Space Needle visit with group photography session and Seattle panorama tour',
      'University of Washington campus visit and academic session with UW International Programs',
      'Language exchange evening events — pairing participants by language and interest',
    ],
    budgetTotal: 36000,
    budgetAlloc: 40000,
    budgetCategories: [
      { name: 'Activities/Events', amount: 14800, color: '#4A5235' },
      { name: 'Accommodation',     amount: 10800, color: '#2563EB' },
      { name: 'Transport',         amount: 5400,  color: '#F97316' },
      { name: 'Food & Beverages',  amount: 3600,  color: '#8B5CF6' },
      { name: 'Consumables',       amount: 1100,  color: '#EC4899' },
      { name: 'Emergency',         amount: 300,   color: '#64748B' },
    ],
    natNote: 'Nationality data fully available for all 52 participants in the Seattle 2024 cohort.',
    nationalities: [
      { country: 'Japan',        flag: '🇯🇵', count: 8  },
      { country: 'South Korea',  flag: '🇰🇷', count: 7  },
      { country: 'Germany',      flag: '🇩🇪', count: 7  },
      { country: 'France',       flag: '🇫🇷', count: 6  },
      { country: 'Canada',       flag: '🇨🇦', count: 6  },
      { country: 'Mexico',       flag: '🇲🇽', count: 5  },
      { country: 'Brazil',       flag: '🇧🇷', count: 5  },
      { country: 'Australia',    flag: '🇦🇺', count: 4  },
    ],
    programs: [
      { name: 'Cultural Workshops',   count: 17, color: '#2563EB' },
      { name: 'Company Visits',       count: 15, color: '#4A5235' },
      { name: 'Homestay Experience',  count: 13, color: '#F97316' },
      { name: 'Cooking Classes',      count: 12, color: '#8B5CF6' },
      { name: 'Language Exchange',    count: 10, color: '#EC4899' },
      { name: 'City Tours',           count: 9,  color: '#64748B' },
    ],
    gender: { M: 23, F: 29 },
    satisfaction: {
      scale: '1–10',
      n: 51,
      overall: 9.45,
      max: 10,
      note: 'Survey collected 51 responses from the Seattle 2024 cohort.',
      criteria: [
        { label: 'Boeing factory tour experience',   score: 9.72, max: 10 },
        { label: 'Homestay family experience',       score: 9.65, max: 10 },
        { label: 'Trip was fun & insightful',        score: 9.58, max: 10 },
        { label: 'Committee helpfulness on trip',    score: 9.50, max: 10 },
        { label: 'Cultural activity interest',       score: 9.44, max: 10 },
        { label: 'Overall satisfaction',             score: 9.45, max: 10 },
        { label: 'Program information availability', score: 9.38, max: 10 },
        { label: 'Registration process',             score: 9.30, max: 10 },
        { label: 'Program content & schedule',       score: 9.22, max: 10 },
        { label: 'Language exchange sessions',       score: 9.10, max: 10 },
      ],
    },
    analysis: [
      { icon: '🔄', text: 'CONNECT Seattle 2024 <strong>expanded the program to a new Pacific Northwest city</strong> — shifting from Portland to Seattle introduced entirely new industry and cultural touchpoints for participants.' },
      { icon: '✈️', text: '<strong>Boeing factory tour was the highest-rated activity</strong> at 9.72/10 — the scale and spectacle of commercial aircraft assembly left a lasting impression on participants from all 8 countries.' },
      { icon: '💰', text: 'Total spend of <strong>$36,000</strong> (vs $28,000 in 2023) reflected expanded programming — a 29% budget increase while growing per-participant value and satisfaction scores.' },
      { icon: '⭐', text: 'Satisfaction reached <strong>9.45/10 (94.5%)</strong> — markedly higher than 2023\'s 91.2%. The Boeing visit and strengthened homestay matching contributed most to the improvement.' },
    ],
  },

  b21_2025: {
    label: 'Vancouver 2025', sublabel: 'Batch 3 – Vancouver, BC',
    period: '14-day program · June 2025', location: 'Vancouver, British Columbia',
    participants: 52,
    color: '#F97316', bg: 'linear-gradient(135deg,#FFF7ED,#FFEDD5)', border: 'rgba(249,115,22,0.15)',
    vendors: [
      { category: 'Hotel',  name: 'Fairmont Hotel Vancouver',      desc: 'Landmark downtown hotel for the 14-day program. Central location enabled walkable access to key city sites.' },
      { category: 'Venue',  name: 'Stanley Park',                  desc: 'Guided cycling and nature walk through Vancouver\'s iconic 1,000-acre urban park — cultural and ecological immersion.' },
      { category: 'Venue',  name: 'Capilano Suspension Bridge',    desc: 'Treetop adventure and guided nature education through ancient Douglas fir forest in North Vancouver.' },
      { category: 'Venue',  name: 'UBC Campus',                    desc: 'University of British Columbia campus visit — academic session with UBC Global Affairs and campus tour.' },
      { category: 'Venue',  name: 'Granville Island Market',       desc: 'Public market visit with cooking demonstration, artisan vendor interaction, and group lunch experience.' },
      { category: 'Food',   name: 'Vancouver Restaurant Partners', desc: 'Curated group dining across Vancouver\'s multicultural restaurant scene — featuring Asian, European, and Pacific cuisine.' },
      { category: 'Shirts', name: 'Pacific Threads Vancouver',     desc: 'Custom CONNECT program shirts for all 52 participants and program staff.' },
    ],
    activities: [
      'Stanley Park guided cycling and nature walk — Vancouver\'s iconic urban forest and seawall',
      'Capilano Suspension Bridge treetop adventure and guided nature education',
      'UBC Campus visit — academic session with UBC Global Affairs and campus tour',
      'Granville Island Market visit with cooking class and artisan vendor interaction',
      'Multicultural cooking class — preparing dishes from 4 participant home countries',
    ],
    budgetTotal: 39000,
    budgetAlloc: 45000,
    budgetCategories: [
      { name: 'Activities/Events', amount: 16000, color: '#4A5235' },
      { name: 'Accommodation',     amount: 11500, color: '#2563EB' },
      { name: 'Transport',         amount: 5800,  color: '#F97316' },
      { name: 'Food & Beverages',  amount: 3900,  color: '#8B5CF6' },
      { name: 'Consumables',       amount: 1500,  color: '#EC4899' },
      { name: 'Emergency',         amount: 300,   color: '#64748B' },
    ],
    nationalities: [
      { country: 'Japan',        flag: '🇯🇵', count: 9  },
      { country: 'South Korea',  flag: '🇰🇷', count: 8  },
      { country: 'Germany',      flag: '🇩🇪', count: 7  },
      { country: 'France',       flag: '🇫🇷', count: 7  },
      { country: 'Canada',       flag: '🇨🇦', count: 6  },
      { country: 'Mexico',       flag: '🇲🇽', count: 6  },
      { country: 'Brazil',       flag: '🇧🇷', count: 5  },
      { country: 'Australia',    flag: '🇦🇺', count: 4  },
    ],
    programs: [
      { name: 'CONNECT Exchange', count: 52, color: '#F97316' },
    ],
    gender: { M: 22, F: 30 },
    satisfaction: {
      scale: '1–10',
      n: 52,
      overall: 9.61,
      max: 10,
      criteria: [
        { label: 'Capilano Bridge experience',       score: 9.82, max: 10 },
        { label: 'Homestay family experience',       score: 9.78, max: 10 },
        { label: 'UBC campus visit',                 score: 9.70, max: 10 },
        { label: 'Program content & schedule',       score: 9.65, max: 10 },
        { label: 'Overall satisfaction',             score: 9.61, max: 10 },
        { label: 'Cultural activity interest',       score: 9.58, max: 10 },
        { label: 'Committee helpfulness on trip',    score: 9.55, max: 10 },
        { label: 'Trip was fun & insightful',        score: 9.52, max: 10 },
        { label: 'Program information availability', score: 9.48, max: 10 },
        { label: 'Language exchange sessions',       score: 9.30, max: 10 },
      ],
    },
    analysis: [
      { icon: '🏔️', text: 'CONNECT Vancouver 2025 was the <strong>first Canadian edition</strong> — introducing participants to a uniquely multicultural Pacific city and expanding the program beyond the US Pacific Northwest for the first time.' },
      { icon: '🇯🇵', text: 'All 52 participants represented <strong>8 countries across 4 continents</strong> — the most geographically balanced cohort in CONNECT\'s history, with no single nationality exceeding 17% of enrollment.' },
      { icon: '💰', text: 'Best budget efficiency at <strong>$39,000 spent vs $45,000 allocated</strong> — 13% underspend ($6,000 saved). Per-participant cost of $750 reflected Vancouver\'s higher cost of living with strong value management.' },
      { icon: '⭐', text: '<strong>Highest satisfaction at 9.61/10 (96.1%)</strong> across all CONNECT batches. Capilano Bridge scored 9.82 — the highest single activity score in program history.' },
    ],
  },

  b22_2025: {
    label: 'Vancouver 2025', sublabel: 'Highlights & Outcomes',
    period: '14-day program · June 2025', location: 'Vancouver, British Columbia',
    participants: 52,
    color: '#A855F7', bg: 'linear-gradient(135deg,#FDF4FF,#FAE8FF)', border: 'rgba(168,85,247,0.15)',
    vendors: [
      { category: 'Venue',  name: 'Stanley Park',                  desc: 'Guided cycling and nature walk — Vancouver\'s 1,000-acre urban park and seawall experience.' },
      { category: 'Venue',  name: 'Capilano Suspension Bridge',    desc: 'Treetop adventure through ancient Douglas fir forest — highest-rated activity across all CONNECT editions.' },
      { category: 'Venue',  name: 'UBC Global Affairs',            desc: 'Academic partnership session — exploring exchange opportunities and research collaboration.' },
      { category: 'Venue',  name: 'Granville Island',              desc: 'Public market cooking class and artisan vendor engagement — local food and craft culture.' },
      { category: 'Food',   name: 'Vancouver Restaurant Partners', desc: 'Group dining experiences showcasing Vancouver\'s diverse multicultural food scene.' },
      { category: 'Shirts', name: 'Pacific Threads Vancouver',     desc: 'Custom CONNECT program shirts for all participants and staff.' },
    ],
    activities: [
      'Stanley Park guided cycling with nature interpretation and seawall walking tour',
      'Capilano Suspension Bridge treetop adventure (highest-rated activity, 9.82/10)',
      'UBC campus academic session with Global Affairs and campus tour',
      'Granville Island cooking class — preparing dishes from 4 participant home countries',
    ],
    budgetTotal: 39000,
    budgetAlloc: 45000,
    budgetCategories: [
      { name: 'Activities/Events', amount: 16000, color: '#4A5235' },
      { name: 'Accommodation',     amount: 11500, color: '#2563EB' },
      { name: 'Food & Beverages',  amount: 5800,  color: '#8B5CF6' },
      { name: 'Consumables',       amount: 4200,  color: '#EC4899' },
      { name: 'Transport',         amount: 1500,  color: '#F97316' },
    ],
    nationalities: [
      { country: 'Japan',        flag: '🇯🇵', count: 9  },
      { country: 'South Korea',  flag: '🇰🇷', count: 8  },
      { country: 'Germany',      flag: '🇩🇪', count: 7  },
      { country: 'France',       flag: '🇫🇷', count: 7  },
      { country: 'Canada',       flag: '🇨🇦', count: 6  },
      { country: 'Mexico',       flag: '🇲🇽', count: 6  },
      { country: 'Brazil',       flag: '🇧🇷', count: 5  },
      { country: 'Australia',    flag: '🇦🇺', count: 4  },
    ],
    programs: [
      { name: 'Cultural Workshops',  count: 18, color: '#8B5CF6' },
      { name: 'Company Visits',      count: 15, color: '#2563EB' },
      { name: 'Homestay Experience', count: 13, color: '#F97316' },
      { name: 'Cooking Classes',     count: 12, color: '#EC4899' },
    ],
    gender: null,
    satisfaction: {
      scale: '1–10',
      n: 52,
      overall: 9.61,
      max: 10,
      criteria: [
        { label: 'Capilano Bridge experience',       score: 9.82, max: 10 },
        { label: 'Homestay family experience',       score: 9.78, max: 10 },
        { label: 'UBC campus visit',                 score: 9.70, max: 10 },
        { label: 'Program content & schedule',       score: 9.65, max: 10 },
        { label: 'Overall satisfaction',             score: 9.61, max: 10 },
        { label: 'Cultural activity interest',       score: 9.58, max: 10 },
        { label: 'Committee helpfulness on trip',    score: 9.55, max: 10 },
        { label: 'Trip was fun & insightful',        score: 9.52, max: 10 },
        { label: 'Program information availability', score: 9.48, max: 10 },
        { label: 'Language exchange sessions',       score: 9.30, max: 10 },
      ],
    },
    analysis: [
      { icon: '🌲', text: 'Vancouver 2025 was the <strong>most nature-immersive edition</strong> — Stanley Park cycling, Capilano treetop adventure, and UBC\'s Pacific campus setting connected participants to both urban and natural Pacific Northwest environments.' },
      { icon: '🌍', text: 'The <strong>most geographically balanced cohort</strong> with 8 nationalities, no single country exceeding 17%. For the first time, CONNECT achieved near-equal representation across Asia, Europe, the Americas, and Oceania.' },
      { icon: '🔗', text: 'UBC Global Affairs session generated <strong>3 formal partnership inquiries</strong> from participant universities — the first direct institutional outcomes from a CONNECT program activity.' },
      { icon: '⭐', text: 'Satisfaction at <strong>9.61/10 (96.1%)</strong> — the highest across all CONNECT batches. Capilano Bridge (9.82) and homestay experience (9.78) led all activity scores in program history.' },
    ],
  },
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function aciEsc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function aciFormatIDR(n) {
  if (n >= 1000000) return '$' + (n / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (n >= 1000) return '$' + (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  return '$' + n.toLocaleString();
}

// ── Section Builders ──────────────────────────────────────────────────────────

function aciBuildOverview(key) {
  const d = ACI_DATA[key];
  if (key === 'all') {
    const cards = ['b1_2024', 'b1_2025', 'b21_2025', 'b22_2025'].map(k => {
      const b = ACI_DATA[k];
      return `<div onclick="aciSelectBatch('${k}')" class="rounded-xl p-5 text-center cursor-pointer hover:shadow-md transition-all duration-200" style="background:${b.bg};border:1px solid ${b.border}">
        <p class="font-heading font-bold text-2xl mb-1" style="color:${b.color}">${b.participants}</p>
        <p class="font-heading font-semibold text-sm mb-0.5" style="color:#0F172A">${b.label}</p>
        <p class="text-xs mb-2" style="color:#0F172A;font-weight:500">${b.sublabel}</p>
        <p class="text-xs" style="color:#64748B">${b.period}</p>
      </div>`;
    }).join('');
    return `<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">${cards}</div>`;
  }
  return `<div class="rounded-xl p-6 mb-8 flex flex-wrap gap-8 items-center" style="background:${d.bg};border:1px solid ${d.border}">
    <div class="text-center">
      <p class="font-heading font-bold text-3xl" style="color:${d.color}">${d.participants}</p>
      <p class="text-xs mt-1" style="color:#64748B">Participants</p>
    </div>
    <div class="text-center">
      <p class="font-heading font-bold text-xl" style="color:${d.color}">${d.location}</p>
      <p class="text-xs mt-1" style="color:#64748B">Destination</p>
    </div>
    <div class="ml-auto text-right">
      <p class="font-heading font-bold text-xl" style="color:#0F172A">${d.label} · ${d.sublabel}</p>
      <p class="text-sm" style="color:#64748B">${d.period}</p>
    </div>
  </div>`;
}

function aciBuildVendors(d) {
  if (!d.vendors) return '';
  const catColors = { Hotel: '#1E3A5F', Venue: '#4A5235', Food: '#F97316', Shirts: '#8B5CF6', Konsumsi: '#F97316' };
  const rows = d.vendors.map(v => {
    const col = catColors[v.category] || '#64748B';
    return `<div class="rounded-lg p-4" style="background:#F8FAFC;border:1px solid rgba(74,107,138,0.1)">
      <div class="flex items-start gap-3">
        <span class="text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5" style="background:${col}18;color:${col}">${aciEsc(v.category)}</span>
        <div>
          <p class="text-sm font-semibold mb-1" style="color:#0F172A">${aciEsc(v.name)}</p>
          <p class="text-xs leading-relaxed" style="color:#64748B">${aciEsc(v.desc)}</p>
        </div>
      </div>
    </div>`;
  }).join('');
  const acts = d.activities ? d.activities.map(a =>
    `<li class="flex gap-2 text-sm" style="color:#475569"><span style="color:#4A5235;flex-shrink:0">▸</span>${aciEsc(a)}</li>`
  ).join('') : '';
  return `<h3 class="font-heading font-semibold text-lg mb-4" style="color:#0F172A">Vendors</h3>
  <div class="grid md:grid-cols-2 gap-3 mb-8">${rows}</div>
  ${acts ? `<h3 class="font-heading font-semibold text-lg mb-3" style="color:#0F172A">Key Activities</h3><ul class="space-y-2 mb-8">${acts}</ul>` : ''}`;
}

function aciBuildVendorsOverall() {
  const allVendors = [
    { batch: 'Portland 2023',   name: 'The Nines Hotel, Portland',        category: 'Hotel',  desc: 'Downtown Portland hotel for the inaugural CONNECT cohort. Central location for all Portland activities.' },
    { batch: 'Portland 2023',   name: 'Nike World Campus',                category: 'Venue',  desc: 'Global headquarters tour — innovation labs and design studios. Top-rated company visit in 2023.' },
    { batch: 'Portland 2023',   name: 'Intel Campus, Hillsboro',          category: 'Venue',  desc: 'Semiconductor technology company visit. Combined with Nike for the Portland tech campus experience.' },
    { batch: 'Portland 2023',   name: 'Portland Japanese Garden',         category: 'Venue',  desc: 'Cultural highlight of Portland 2023 — one of the most authentic Japanese gardens outside Japan.' },
    { batch: 'Portland 2023',   name: 'Powell\'s Books',                  category: 'Venue',  desc: 'World\'s largest independent bookstore — literary cultural exchange and cross-cultural book activity.' },
    { batch: 'Seattle 2024',    name: 'Hyatt Regency Seattle',            category: 'Hotel',  desc: 'Downtown Seattle hotel for Batch 2. City-center location enabled easy access to all Seattle sites.' },
    { batch: 'Seattle 2024',    name: 'Boeing Future of Flight Center',   category: 'Venue',  desc: 'Factory tour of the world\'s largest building — highest single-activity score across all editions (9.72).' },
    { batch: 'Seattle 2024',    name: 'Pike Place Market',                category: 'Venue',  desc: 'Iconic Seattle market — cooking demo, fish market tour, and local food tasting experience.' },
    { batch: 'Seattle 2024',    name: 'Space Needle',                     category: 'Venue',  desc: 'Seattle\'s landmark tower — group cultural photography session and city panoramic tour.' },
    { batch: 'Seattle 2024',    name: 'University of Washington',         category: 'Venue',  desc: 'UW campus visit and academic session with International Programs office.' },
    { batch: 'Vancouver 2025',  name: 'Fairmont Hotel Vancouver',         category: 'Hotel',  desc: 'Landmark downtown Vancouver hotel for Batch 3. Walking distance to major city attractions.' },
    { batch: 'Vancouver 2025',  name: 'Stanley Park',                     category: 'Venue',  desc: 'Guided cycling and nature walk through Vancouver\'s iconic 1,000-acre urban park.' },
    { batch: 'Vancouver 2025',  name: 'Capilano Suspension Bridge',       category: 'Venue',  desc: 'Treetop adventure in ancient Douglas fir forest — highest-rated activity in program history (9.82).' },
    { batch: 'Vancouver 2025',  name: 'UBC Campus & Global Affairs',      category: 'Venue',  desc: 'Academic partnership session — generated 3 formal partnership inquiries from participant universities.' },
    { batch: 'Vancouver 2025',  name: 'Granville Island Market',          category: 'Venue',  desc: 'Public market cooking class and artisan interaction — local food and craft culture highlight.' },
  ];
  const catColors = { Hotel: '#1E3A5F', Venue: '#4A5235', Food: '#F97316', Shirts: '#8B5CF6' };
  const rows = allVendors.map(v => {
    const col = catColors[v.category] || '#64748B';
    return `<div class="rounded-lg p-4" style="background:#F8FAFC;border:1px solid rgba(74,107,138,0.1)">
      <div class="flex items-start gap-3">
        <span class="text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5" style="background:${col}18;color:${col}">${aciEsc(v.category)}</span>
        <div class="flex-1">
          <div class="flex justify-between items-start gap-2">
            <p class="text-sm font-semibold mb-1" style="color:#0F172A">${aciEsc(v.name)}</p>
            <span class="text-xs px-2 py-0.5 rounded-full flex-shrink-0" style="background:#F1F5F9;color:#64748B">${aciEsc(v.batch)}</span>
          </div>
          <p class="text-xs leading-relaxed" style="color:#64748B">${aciEsc(v.desc)}</p>
        </div>
      </div>
    </div>`;
  }).join('');
  return `<h3 class="font-heading font-semibold text-lg mb-4" style="color:#0F172A">All Vendors — Across 3 Batches</h3>
  <div class="grid md:grid-cols-2 gap-3 mb-8">${rows}</div>`;
}

function aciBuildBudget(key, d) {
  const cats = d.budgetCategories;
  const total = d.budgetTotal;
  const alloc = d.budgetAlloc;
  const maxAmt = Math.max(...cats.map(c => c.amount));
  const bars = cats.map(c => {
    const pct = ((c.amount / maxAmt) * 100).toFixed(1);
    const share = ((c.amount / total) * 100).toFixed(0);
    return `<div class="flex items-center gap-3">
      <span class="text-sm w-40 flex-shrink-0" style="color:#0F172A">${aciEsc(c.name)}</span>
      <div class="flex-1 rounded-full overflow-hidden" style="background:#F1F5F9;height:10px">
        <div class="h-full rounded-full" data-w="${pct}%" style="width:0;background:${c.color};transition:width .55s ease"></div>
      </div>
      <span class="text-sm font-semibold w-16 text-right" style="color:${c.color}">${aciFormatIDR(c.amount)}</span>
      <span class="text-xs w-8 text-right" style="color:#94A3B8">${share}%</span>
    </div>`;
  }).join('');

  let summaryHtml = `<div class="flex flex-wrap gap-6 mb-6">
    <div><p class="font-heading font-bold text-2xl" style="color:#0F172A">${aciFormatIDR(total)}</p><p class="text-xs" style="color:#64748B">Total Spent</p></div>`;
  if (alloc) {
    const efficiency = ((1 - total / alloc) * 100).toFixed(0);
    summaryHtml += `<div><p class="font-heading font-bold text-2xl" style="color:#64748B">${aciFormatIDR(alloc)}</p><p class="text-xs" style="color:#64748B">Budget Allocated</p></div>
    <div><p class="font-heading font-bold text-2xl" style="color:#4A5235">${efficiency}% saved</p><p class="text-xs" style="color:#64748B">Budget Efficiency</p></div>`;
  }
  if (d.participants) {
    const perPax = Math.round(total / d.participants);
    summaryHtml += `<div><p class="font-heading font-bold text-2xl" style="color:#1E3A5F">${aciFormatIDR(perPax)}</p><p class="text-xs" style="color:#64748B">Per Participant</p></div>`;
  }
  summaryHtml += '</div>';

  let overallBatches = '';
  if (key === 'all' && d.budgetBatches) {
    const bRows = d.budgetBatches.map(b => {
      const note = b.budget ? ` / ${aciFormatIDR(b.budget)} alloc` : ' (no formal allocation recorded)';
      return `<div class="flex items-center justify-between py-2 border-b" style="border-color:rgba(241,245,249,1)">
        <span class="text-sm" style="color:#0F172A">${aciEsc(b.label)}</span>
        <span class="text-sm font-semibold" style="color:#4A5235">${aciFormatIDR(b.spent)}<span class="font-normal text-xs ml-1" style="color:#94A3B8">${note}</span></span>
      </div>`;
    }).join('');
    overallBatches = `<h3 class="font-heading font-semibold text-base mb-3 mt-6" style="color:#0F172A">By Batch</h3>${bRows}`;
  }

  const noteHtml = d.budgetNote ? `<p class="text-xs mt-3" style="color:#94A3B8">${aciEsc(d.budgetNote)}</p>` : '';

  return `<h3 class="font-heading font-semibold text-lg mb-4" style="color:#0F172A">Budget Analysis</h3>
  ${summaryHtml}
  <div class="space-y-3 mb-4">${bars}</div>
  ${noteHtml}
  ${overallBatches}
  <div class="mt-8"></div>`;
}

function aciBuildDemographics(key, d) {
  const nats = d.nationalities;
  const maxNat = nats[0].count;
  const totalPax = d.participants;
  const natRows = nats.map(n => {
    const barPct = ((n.count / maxNat) * 100).toFixed(1);
    const share = ((n.count / totalPax) * 100).toFixed(0);
    return `<div class="flex items-center gap-3">
      <span class="text-base w-7 flex-shrink-0">${n.flag}</span>
      <span class="text-sm w-32 flex-shrink-0" style="color:#0F172A">${aciEsc(n.country)}</span>
      <div class="flex-1 rounded-full overflow-hidden" style="background:#F1F5F9;height:10px">
        <div class="h-full rounded-full" data-w="${barPct}%" style="width:0;background:linear-gradient(90deg,#4A5235,#6B7455);transition:width .55s ease"></div>
      </div>
      <span class="text-sm font-semibold w-8 text-right" style="color:#4A5235">${n.count}</span>
      <span class="text-xs w-9 text-right" style="color:#94A3B8">${share}%</span>
    </div>`;
  }).join('');

  const natNote = d.natNote ? `<p class="text-xs mb-5" style="color:#94A3B8">${aciEsc(d.natNote)}</p>` : '';

  const progs = d.programs;
  const maxProg = progs[0].count;
  const progRows = progs.map(p => {
    const pct = ((p.count / maxProg) * 100).toFixed(1);
    return `<div class="flex items-center gap-3">
      <span class="text-sm flex-shrink-0" style="color:#0F172A;max-width:min(13rem,40vw);overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${aciEsc(p.name)}">${aciEsc(p.name)}</span>
      <div class="flex-1 rounded-full overflow-hidden" style="background:#F1F5F9;height:10px">
        <div class="h-full rounded-full" data-w="${pct}%" style="width:0;background:${p.color};transition:width .55s ease"></div>
      </div>
      <span class="text-sm font-semibold w-8 text-right" style="color:${p.color}">${p.count}</span>
    </div>`;
  }).join('');

  let genderHtml = '';
  if (d.gender && d.gender.M !== undefined) {
    const total = d.gender.M + d.gender.F;
    const fPct = ((d.gender.F / total) * 100).toFixed(0);
    const mPct = 100 - fPct;
    const note = d.gender.note ? `<p class="text-xs mt-1" style="color:#94A3B8">${aciEsc(d.gender.note)}</p>` : '';
    genderHtml = `<h3 class="font-heading font-semibold text-lg mb-4" style="color:#0F172A">Gender Distribution</h3>
    <div class="flex items-center gap-4 mb-2">
      <div class="flex-1">
        <div class="flex rounded-full overflow-hidden" style="height:20px">
          <div style="width:${fPct}%;background:#EC4899" title="Female ${d.gender.F}"></div>
          <div style="width:${mPct}%;background:#1E3A5F" title="Male ${d.gender.M}"></div>
        </div>
      </div>
    </div>
    <div class="flex gap-6 mb-8">
      <div class="flex items-center gap-2"><span class="inline-block w-3 h-3 rounded-full" style="background:#EC4899"></span><span class="text-sm" style="color:#0F172A">Female <strong>${d.gender.F}</strong> (${fPct}%)</span></div>
      <div class="flex items-center gap-2"><span class="inline-block w-3 h-3 rounded-full" style="background:#1E3A5F"></span><span class="text-sm" style="color:#0F172A">Male <strong>${d.gender.M}</strong> (${mPct}%)</span></div>
    </div>${note}`;
  } else if (d.gender === null) {
    genderHtml = `<h3 class="font-heading font-semibold text-lg mb-2" style="color:#0F172A">Gender Distribution</h3>
    <div class="rounded-lg p-4 mb-8 text-center" style="background:#F8FAFC;border:1px dashed rgba(100,116,139,0.3)">
      <p class="text-sm" style="color:#94A3B8">📋 Gender data was not recorded for this batch.</p>
    </div>`;
  }

  return `<h3 class="font-heading font-semibold text-lg mb-2" style="color:#0F172A">
    Nationalities <span class="text-sm font-normal ml-2" style="color:#64748B">— ${nats.length} countries</span>
  </h3>
  ${natNote}
  <div class="space-y-3 mb-8">${natRows}</div>
  <h3 class="font-heading font-semibold text-lg mb-4" style="color:#0F172A">Program Activities</h3>
  <div class="space-y-3 mb-8">${progRows}</div>
  ${genderHtml}`;
}

function aciBuildSatisfaction(d) {
  const sat = d.satisfaction;
  if (!sat) return '';

  const sortedCriteria = [...sat.criteria].sort((a, b) => b.score - a.score);
  const scoreColor = (pct) => pct >= 95 ? '#4A5235' : pct >= 85 ? '#1E3A5F' : pct >= 75 ? '#F97316' : '#EF4444';

  const bars = sortedCriteria.map(c => {
    const pct = ((c.score / c.max) * 100).toFixed(1);
    const col = scoreColor(parseFloat(pct));
    return `<div class="flex items-center gap-3">
      <span class="text-sm flex-1" style="color:#0F172A">${aciEsc(c.label)}</span>
      <div class="w-32 rounded-full overflow-hidden flex-shrink-0" style="background:#F1F5F9;height:10px">
        <div class="h-full rounded-full" data-w="${pct}%" style="width:0;background:${col};transition:width .55s ease"></div>
      </div>
      <span class="text-sm font-semibold w-12 text-right flex-shrink-0" style="color:${col}">${c.score}/${c.max}</span>
      <span class="text-xs w-10 text-right flex-shrink-0" style="color:#94A3B8">${pct}%</span>
    </div>`;
  }).join('');

  const overallPct = ((sat.overall / sat.max) * 100).toFixed(1);
  const overallCol = scoreColor(parseFloat(overallPct));
  const noteHtml = sat.note ? `<p class="text-xs mb-4" style="color:#94A3B8">${aciEsc(sat.note)}</p>` : '';

  const gaugeFill = overallPct;
  const gaugeHtml = `<div class="flex items-center gap-6 mb-6">
    <div class="relative" style="width:80px;height:80px">
      <svg viewBox="0 0 80 80" style="width:80px;height:80px;transform:rotate(-90deg)">
        <circle cx="40" cy="40" r="32" fill="none" stroke="#F1F5F9" stroke-width="8"/>
        <circle cx="40" cy="40" r="32" fill="none" stroke="${overallCol}" stroke-width="8"
          stroke-dasharray="${(gaugeFill * 2.01).toFixed(1)} 201"
          stroke-linecap="round"/>
      </svg>
      <div class="absolute inset-0 flex items-center justify-center">
        <span class="font-heading font-bold text-sm" style="color:${overallCol}">${overallPct}%</span>
      </div>
    </div>
    <div>
      <p class="font-heading font-bold text-3xl mb-1" style="color:${overallCol}">${sat.overall} / ${sat.max}</p>
      <p class="text-sm" style="color:#64748B">Overall Satisfaction · Scale ${sat.scale} · <strong>${sat.n}</strong> responses</p>
    </div>
  </div>`;

  return `<h3 class="font-heading font-semibold text-lg mb-4" style="color:#0F172A">Satisfaction Analysis</h3>
  ${noteHtml}${gaugeHtml}
  <div class="space-y-3 mb-10">${bars}</div>`;
}

function aciBuildSatisfactionOverall(d) {
  const batches = d.satisfaction.batches;
  const scoreColor = (pct) => pct >= 95 ? '#4A5235' : pct >= 85 ? '#1E3A5F' : pct >= 75 ? '#F97316' : '#EF4444';
  const cards = batches.map(b => {
    const col = scoreColor(b.pct);
    const gaugeFill = b.pct;
    return `<div class="rounded-xl p-5 text-center" style="background:#F8FAFC;border:1px solid rgba(74,107,138,0.1)">
      <div class="relative mx-auto mb-3" style="width:72px;height:72px">
        <svg viewBox="0 0 80 80" style="width:72px;height:72px;transform:rotate(-90deg)">
          <circle cx="40" cy="40" r="32" fill="none" stroke="#F1F5F9" stroke-width="8"/>
          <circle cx="40" cy="40" r="32" fill="none" stroke="${col}" stroke-width="8"
            stroke-dasharray="${(gaugeFill * 2.01).toFixed(1)} 201"
            stroke-linecap="round"/>
        </svg>
        <div class="absolute inset-0 flex items-center justify-center">
          <span class="font-heading font-bold text-xs" style="color:${col}">${b.pct}%</span>
        </div>
      </div>
      <p class="font-heading font-bold text-xl mb-1" style="color:${col}">${b.overall}/${b.max}</p>
      <p class="text-xs font-semibold mb-1" style="color:#0F172A">${aciEsc(b.label)}</p>
      <p class="text-xs" style="color:#64748B">${b.n} responses</p>
    </div>`;
  }).join('');
  const note = `<p class="text-xs mt-4" style="color:#94A3B8">${aciEsc(d.satisfaction.note)}</p>`;
  return `<h3 class="font-heading font-semibold text-lg mb-4" style="color:#0F172A">Satisfaction Analysis — All Batches</h3>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">${cards}</div>
  ${note}
  <div class="mt-8"></div>`;
}

function aciBuildAnalysis(d) {
  const items = d.analysis.map(a =>
    `<div class="flex gap-3 items-start">
      <span class="text-xl flex-shrink-0 mt-0.5">${a.icon}</span>
      <p class="text-sm leading-relaxed" style="color:#475569">${a.text}</p>
    </div>`
  ).join('');
  return `<div class="rounded-xl p-6" style="background:linear-gradient(135deg,#F1F3EE,#E4E8DC);border:1px solid rgba(74,82,53,0.12)">
    <h3 class="font-heading font-semibold text-base mb-4" style="color:#0F172A">Batch Analysis</h3>
    <div class="space-y-3">${items}</div>
  </div>`;
}

// ── Gallery Rotation ──────────────────────────────────────────────────────────

const ACI_GALLERY_IMGS = [
  'https://picsum.photos/seed/connect-1/800/600',
  'https://picsum.photos/seed/connect-2/800/600',
  'https://picsum.photos/seed/connect-3/800/600',
  'https://picsum.photos/seed/connect-4/800/600',
  'https://picsum.photos/seed/connect-5/800/600',
  'https://picsum.photos/seed/connect-6/800/600',
  'https://picsum.photos/seed/connect-7/800/600',
  'https://picsum.photos/seed/connect-8/800/600',
  'https://picsum.photos/seed/connect-9/800/600',
  'https://picsum.photos/seed/connect-10/800/600',
  'https://picsum.photos/seed/connect-11/800/600',
  'https://picsum.photos/seed/connect-12/800/600',
  'https://picsum.photos/seed/connect-13/800/600',
  'https://picsum.photos/seed/connect-14/800/600',
  'https://picsum.photos/seed/connect-15/800/600',
];

let _aciGalTimer = null;
let _aciGalSlot  = 0;
let _aciGalShown = [];
let _aciGalQueue = [];

function _aciShuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function aciStartGallery() {
  if (_aciGalTimer) { clearInterval(_aciGalTimer); _aciGalTimer = null; }

  const imgs = document.querySelectorAll('.aci-gs-img');
  if (!imgs.length) return;

  _aciGalQueue = _aciShuffle(ACI_GALLERY_IMGS);
  _aciGalShown = [];
  let qi = 0;

  imgs.forEach(img => {
    const src = _aciGalQueue[qi % _aciGalQueue.length];
    img.src = src;
    _aciGalShown.push(src);
    qi++;
  });

  _aciGalSlot = 0;

  _aciGalTimer = setInterval(() => {
    const imgEls = document.querySelectorAll('.aci-gs-img');
    if (!imgEls.length) { clearInterval(_aciGalTimer); return; }

    const slot = _aciGalSlot % imgEls.length;
    const imgEl = imgEls[slot];

    // Advance queue, skip images already visible
    let next = _aciGalQueue[qi % _aciGalQueue.length];
    let tries = 0;
    while (_aciGalShown.includes(next) && tries < ACI_GALLERY_IMGS.length) {
      qi++;
      if (qi >= _aciGalQueue.length) {
        _aciGalQueue = _aciShuffle(ACI_GALLERY_IMGS);
        qi = 0;
      }
      next = _aciGalQueue[qi % _aciGalQueue.length];
      tries++;
    }
    const nextSrc = next;
    qi++;

    imgEl.style.opacity = '0';
    setTimeout(() => {
      if (!document.body.contains(imgEl)) return;
      _aciGalShown[slot] = nextSrc;
      imgEl.src = nextSrc;
      const show = () => { imgEl.style.opacity = '1'; };
      if (imgEl.complete && imgEl.naturalWidth) show();
      else { imgEl.onload = show; imgEl.onerror = show; }
    }, 500);

    _aciGalSlot++;
  }, 3000);
}

// ── Page Shell ────────────────────────────────────────────────────────────────

function aciInitPage() {
  const el = document.getElementById('page-aci');
  if (!el) return;

  const steps = [
    { n:'01', icon:'map-pin',        title:'Destination Planning & Venue Curation',           desc:'Selected culturally meaningful and logistically feasible destinations each batch — from tech company campuses and iconic markets to suspension bridges and university partnerships. Venue selection balanced cultural depth, participant engagement, and budget constraints.' },
    { n:'02', icon:'handshake',      title:'Vendor Coordination & Contract Management',       desc:'Managed relationships with hotels, venues, catering services, transport providers, and activity organizers. Negotiated pricing, confirmed logistics, and ensured services aligned with program needs within the allocated budget.' },
    { n:'03', icon:'users',          title:'Participant Registration & Communication',         desc:'Managed participant sign-ups, program guidebooks, pre-trip briefings, and all communications. Coordinated shirt sizing, dietary needs, and participant readiness across diverse student populations from 8 countries across 3 continents.' },
    { n:'04', icon:'clipboard-list', title:'Budget Planning & Financial Reporting',            desc:'Prepared detailed budget plans for each batch, tracked realization against allocations, and submitted post-event financial reports. Maintained cost efficiency from $28,000 (Portland 2023) to $39,000 (Vancouver 2025) while growing program quality.' },
    { n:'05', icon:'mountain-snow',  title:'On-Site Program Delivery',                        desc:'Led on-ground operations during each 14-day program: coordinating transport, managing time schedules at each venue, facilitating intercultural interaction, and ensuring participant safety and comfort throughout.' },
    { n:'06', icon:'star',           title:'Post-Event Reporting & Continuous Improvement',   desc:'Collected satisfaction surveys after each batch, analyzed feedback, and applied learnings to subsequent programs — driving satisfaction scores from 91.2% (Portland 2023) to 96.1% (Vancouver 2025) across three editions.' },
  ];

  const stepsHtml = steps.map(s => `
   <div class="flex gap-6 py-8" style="border-top:1px solid rgba(28,28,30,0.07)">
    <div class="flex-shrink-0 w-10 pt-0.5">
     <span class="font-heading font-bold text-3xl select-none" style="color:rgba(28,28,30,0.1);line-height:1">${s.n}</span>
    </div>
    <div class="flex gap-4 flex-1">
     <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style="background:rgba(74,82,53,0.1)">
      <i data-lucide="${s.icon}" style="width:18px;height:18px;color:#4A5235"></i>
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
    <div class="absolute inset-0"><img loading="lazy" src="https://picsum.photos/seed/connect-hero/1200/500" alt="CONNECT" style="width:100%;height:100%;object-fit:cover;object-position:center"><div style="position:absolute;inset:0;background:linear-gradient(135deg,rgba(74,82,53,0.88) 0%,rgba(92,102,66,0.82) 60%,rgba(107,116,85,0.77) 100%)"></div></div>
    <div class="absolute -right-16 -top-16 w-80 h-80 rounded-full" style="background:rgba(255,255,255,0.04)"></div>
    <div class="absolute right-24 bottom-8 w-48 h-48 rounded-full" style="border:2px solid rgba(255,255,255,0.06)"></div>
    <div class="absolute inset-0 flex items-center justify-end overflow-hidden pr-8 pointer-events-none select-none" aria-hidden="true">
     <span class="font-heading font-bold" style="font-size:clamp(6rem,20vw,16rem);color:rgba(255,255,255,0.05);letter-spacing:-.04em;line-height:1">CONNECT</span>
    </div>
    <div class="relative z-10 max-w-6xl mx-auto px-6">
     <a href="/projects-overview" class="inline-flex items-center gap-2 mb-8 px-3.5 py-1.5 rounded-full text-sm font-medium" style="background:rgba(255,255,255,0.14);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);color:rgba(255,255,255,0.9);text-decoration:none;border:1px solid rgba(255,255,255,0.18)"><i data-lucide="chevron-left" style="width:14px;height:14px"></i> Back</a>
     <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-5 uppercase tracking-wider" style="background:rgba(255,255,255,0.12);color:#fff">Project Management</span>
     <h1 class="font-heading font-bold mb-3 text-white" style="font-size:clamp(2.5rem,6vw,4rem);letter-spacing:-.02em" data-edit-key="aci_hero_title">CONNECT</h1>
     <p class="text-base max-w-2xl" style="color:rgba(255,255,255,0.75)" data-edit-key="aci_hero_tagline">CONNECT — Cultural Immersion Program — 14-day cultural immersion trips for international students, managed end-to-end across 3 batches in Portland, Seattle, and Vancouver.</p>
    </div>
   </div>
   <div class="max-w-6xl mx-auto px-6">
    <div class="flex flex-wrap gap-10 py-10" style="border-bottom:1px solid rgba(28,28,30,0.08)">
     <div><div class="font-heading font-bold text-4xl" style="color:#1C1C1E">156</div><div class="text-xs uppercase tracking-wider mt-1" style="color:#767676">Total Participants</div></div>
     <div><div class="font-heading font-bold text-4xl" style="color:#1C1C1E">3</div><div class="text-xs uppercase tracking-wider mt-1" style="color:#767676">Batches</div></div>
     <div><div class="font-heading font-bold text-4xl" style="color:#1C1C1E">8</div><div class="text-xs uppercase tracking-wider mt-1" style="color:#767676">Nationalities</div></div>
     <div><div class="font-heading font-bold text-4xl" style="color:#1C1C1E">$103K</div><div class="text-xs uppercase tracking-wider mt-1" style="color:#767676">Total Budget</div></div>
    </div>
   </div>
   <div class="max-w-6xl mx-auto px-6 py-14">
    <p class="text-lg max-w-3xl leading-relaxed mb-14" style="color:#5C5C5C">As coordinator of CONNECT at Northgate University's International Programs office, I managed the full delivery of 3 cultural immersion trips for international students — spanning logistics, vendor management, participant coordination, budget planning, and post-event reporting across Portland, Seattle, and Vancouver.</p>
    <div class="flex items-center gap-3 mb-3"><span class="accent-line"></span><span class="text-sm font-semibold" style="color:#4A5235">Program Process</span></div>
    <h2 class="font-heading font-bold text-3xl mb-2" style="color:#1C1C1E">End-to-End Responsibilities</h2>
    <div class="mt-6">${stepsHtml}</div>
   </div>
   <div style="background:#0D0D0B;padding-top:80px">
    <div class="max-w-6xl mx-auto px-6" style="padding-bottom:48px">
     <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
      <span style="display:block;width:28px;height:1.5px;background:rgba(255,255,255,0.2)"></span>
      <span style="color:rgba(255,255,255,0.38);font-size:0.7rem;font-weight:600;letter-spacing:0.14em;text-transform:uppercase">Photo Diary</span>
     </div>
     <h2 class="font-heading" style="font-weight:700;font-size:clamp(2rem,5vw,3rem);color:#fff;letter-spacing:-0.02em;margin:0 0 10px">Moments from the Field</h2>
     <p style="color:rgba(255,255,255,0.32);font-size:0.875rem;margin:0">Three batches &middot; Three cities &middot; 156 participants &middot; 2023–2025</p>
    </div>
    <div id="aci-gallery" style="display:grid;grid-template-columns:3fr 2fr;grid-template-rows:1fr 1fr;height:75vh;gap:3px">
     <div class="aci-gs" style="grid-row:span 2;overflow:hidden;background:#111">
      <img loading="lazy" class="aci-gs-img" src="" alt="CONNECT moment" style="width:100%;height:100%;object-fit:cover;transition:opacity .5s ease;display:block">
     </div>
     <div class="aci-gs" style="overflow:hidden;background:#111">
      <img loading="lazy" class="aci-gs-img" src="" alt="CONNECT moment" style="width:100%;height:100%;object-fit:cover;transition:opacity .5s ease;display:block">
     </div>
     <div class="aci-gs" style="overflow:hidden;background:#111">
      <img loading="lazy" class="aci-gs-img" src="" alt="CONNECT moment" style="width:100%;height:100%;object-fit:cover;transition:opacity .5s ease;display:block">
     </div>
    </div>
   </div>
   <div style="background:#F2ECE4;border-top:1px solid rgba(28,28,30,0.07)">
    <div class="max-w-6xl mx-auto px-6 py-16">
     <div class="flex items-center gap-3 mb-3"><span class="accent-line"></span><span class="text-sm font-semibold" style="color:#4A5235">Data &amp; Analytics</span></div>
     <h2 class="font-heading font-bold text-3xl mb-2" style="color:#1C1C1E">Program Data &amp; Analytics</h2>
     <p class="text-sm mb-8" id="aci-stats-subtitle" style="color:#5C5C5C">Data compiled from 3 CONNECT batches across 156 participants, 8 nationalities, and 3 destinations.</p>
     <div class="flex flex-wrap gap-2 mb-8">
      <button class="aci-batch-tab px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200" data-batch="all" style="cursor:pointer;background:#4A5235;color:#fff;border-color:#4A5235">All Batches</button>
      <button class="aci-batch-tab px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200" data-batch="b1_2024" style="cursor:pointer;color:#5C5C5C;border-color:rgba(28,28,30,0.2)">Portland 2023</button>
      <button class="aci-batch-tab px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200" data-batch="b1_2025" style="cursor:pointer;color:#5C5C5C;border-color:rgba(28,28,30,0.2)">Seattle 2024</button>
      <button class="aci-batch-tab px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200" data-batch="b21_2025" style="cursor:pointer;color:#5C5C5C;border-color:rgba(28,28,30,0.2)">Vancouver 2025</button>
      <button class="aci-batch-tab px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200" data-batch="b22_2025" style="cursor:pointer;color:#5C5C5C;border-color:rgba(28,28,30,0.2)">Vancouver Highlights</button>
     </div>
     <div id="aci-stats-content"></div>
    </div>
   </div>`;
}

// ── Render ────────────────────────────────────────────────────────────────────

function aciRenderBatch(key) {
  const d = ACI_DATA[key];
  if (!d) return;

  document.querySelectorAll('.aci-batch-tab').forEach(tab => {
    const active = tab.dataset.batch === key;
    tab.style.background  = active ? d.color : '';
    tab.style.color       = active ? '#fff'  : '#5C5C5C';
    tab.style.borderColor = active ? d.color : 'rgba(28,28,30,0.2)';
  });

  const sub = document.getElementById('aci-stats-subtitle');
  if (sub) sub.textContent = key === 'all'
    ? 'Data compiled from 3 CONNECT batches across 156 participants, 8 nationalities, and 3 destinations.'
    : `${d.label} · ${d.sublabel} · ${d.period} · ${d.participants} participants`;

  const el = document.getElementById('aci-stats-content');
  if (!el) return;

  let html = aciBuildOverview(key);

  if (key === 'all') {
    html += `<div class="card no-hover p-6 mb-6">${aciBuildVendorsOverall()}</div>`;
    html += `<div class="card no-hover p-6 mb-6">${aciBuildBudget(key, d)}</div>`;
    html += `<div class="card no-hover p-6 mb-6">${aciBuildDemographics(key, d)}</div>`;
    html += `<div class="card no-hover p-6 mb-6">${aciBuildSatisfactionOverall(d)}</div>`;
  } else {
    html += `<div class="card no-hover p-6 mb-6">${aciBuildVendors(d)}</div>`;
    html += `<div class="card no-hover p-6 mb-6">${aciBuildBudget(key, d)}</div>`;
    html += `<div class="card no-hover p-6 mb-6">${aciBuildDemographics(key, d)}</div>`;
    html += `<div class="card no-hover p-6 mb-6">${aciBuildSatisfaction(d)}</div>`;
  }

  html += `<div class="mb-6">${aciBuildAnalysis(d)}</div>`;
  el.innerHTML = html;

  requestAnimationFrame(() => requestAnimationFrame(() => {
    el.querySelectorAll('[data-w]').forEach(bar => { bar.style.width = bar.dataset.w; });
  }));
}

window.aciSelectBatch = function (key) { aciRenderBatch(key); };

// ── Init ──────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function () {
  aciInitPage();
  if (window.lucide) lucide.createIcons();
  document.querySelectorAll('.aci-batch-tab').forEach(tab => {
    tab.addEventListener('click', function () { aciRenderBatch(this.dataset.batch); });
  });
  aciRenderBatch('all');
  aciStartGallery();
});
