// ── Web Project Detail Pages ─────────────────────────────────────────────────
// Celestial Midnight Luxury colour tokens
const WP = {
  cream:   '#D9E6FF',   // moonlight
  espresso:'#071126',   // midnight
  gold:    '#D4B15A',   // nebulaGold
  blush:   '#0B1E3A',   // deepSpace
  muted:   '#8FA8D6',   // stardust
  border:  'rgba(111,168,255,0.14)',
};

const WP_PROJECTS = {
  'web-portfolio': {
    title:   'Website Portfolio',
    tagline: 'A dual-identity SPA for international education and creative technology.',
    year:    '2025',
    status:  'Live',
    github:  'https://github.com/zefanyakharisma-cell/Website-Portfolio',
    live:    'https://website-portfolio-liard-alpha.vercel.app/',
    tech:    ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Supabase', 'Quill.js'],
    background: `This portfolio started as a personal challenge: how do you present two very different professional identities — international education professional and creative technologist — without splitting them into two separate sites or burying one under the other? The answer was a single-page application designed to feel like a native mobile app on phone and a polished editorial site on desktop. Every architectural decision, from the hash-based routing to the iOS-style bottom tab bar, was made in service of that dual narrative.`,
    features: [
      { icon: 'layout-dashboard', title: 'Five Canonical Sections', desc: 'About, Projects, International Education, Creative, and Contact — each with its own visual language, sub-pages, and navigation state.' },
      { icon: 'smartphone',       title: 'iOS-Style Navigation Shell', desc: 'Bottom tab bar, Dynamic Island pill, and smooth page transitions replicate a native app feel using only vanilla CSS and a custom hash-router.' },
      { icon: 'edit-3',           title: 'Admin CMS with Quill Editor', desc: 'An authenticated admin mode lets the owner write and publish articles via a Quill 2.x WYSIWYG editor, manage calendar events, and edit any heading or paragraph inline — no code push required.' },
      { icon: 'git-branch',       title: '20+ Pages, One HTML File', desc: 'A custom 60-line hash-router handles dynamic meta titles, OG tags, browser history, scroll-to-top, and nav state across more than twenty distinct pages without any framework.' },
      { icon: 'filter',           title: 'Skill Discovery Entry Point', desc: 'Home page hosts a filterable work grid where visitors can filter projects and work by skill area, surfacing relevant experience instantly.' },
      { icon: 'calendar',         title: 'Calendar Widget', desc: 'A calendar on the home page shows published articles and upcoming events, all managed by the admin and stored in Supabase.' },
    ],
    problems: [
      {
        icon: 'split',
        title: 'Two Identities, One Domain',
        tag: 'Identity Architecture',
        desc: 'International education work and creative studio work felt mismatched under a single brand. Visitors from one world expected a very different site than those from the other.',
      },
      {
        icon: 'smartphone',
        title: 'Native Feel on Mobile',
        tag: 'Mobile UX',
        desc: 'Traditional portfolio sites feel clunky on phones — too much scrolling, no clear hierarchy. The site needed to feel like an iOS app, not a web page on a small screen.',
      },
      {
        icon: 'edit-3',
        title: 'Content Without Code',
        tag: 'Content Management',
        desc: 'Updating a paragraph or image should not require a code push. A non-technical edit workflow was essential for long-term maintenance.',
      },
      {
        icon: 'git-branch',
        title: 'Scale Across 20+ Pages',
        tag: 'Routing Complexity',
        desc: 'Over twenty distinct pages with their own titles, meta descriptions, and nav states — all living inside one HTML file without a framework.',
      },
    ],
    solutions: [
      {
        icon: 'layers',
        title: 'Section-Based Design System',
        tag: 'Architecture',
        desc: 'Each section of the portfolio — About, Projects, Intl. Ed, Creative — has its own visual language and colour palette, giving each professional identity room to breathe.',
      },
      {
        icon: 'smartphone',
        title: 'iOS-Inspired Navigation Shell',
        tag: 'Mobile UX',
        desc: 'Bottom tab bar, Dynamic Island pill, and smooth page transitions replicate a native app feel using only vanilla CSS transitions and a custom hash-router.',
      },
      {
        icon: 'database',
        title: 'Supabase Inline Editing',
        tag: 'CMS Layer',
        desc: 'An admin mode powered by Supabase and Quill.js lets any data-edit-key element be edited in place — no code, no deploy, just click and type.',
      },
      {
        icon: 'hash',
        title: 'Custom Hash Router',
        tag: 'SPA Routing',
        desc: 'A 60-line router in main.js handles 20+ pages: dynamic meta titles, OG tags, back/forward history, scroll-to-top, and nav state — all without a framework.',
      },
    ],
  },

  'web-pcu-global-intl': {
    title:   'PCU Global — International Office Website',
    tagline: "Rebuilding an institutional web presence for a university's international office.",
    year:    '2026',
    status:  'In Progress',
    github:  'https://github.com/zefanyakharisma-cell/International-Office-Website',
    live:    'https://international-office-website.vercel.app/',
    tech:    ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Supabase'],
    background: `Petra Christian University's International Office had a digital presence that had not kept pace with its growing partnerships and ambitions. The old site was a static collection of pages with no content management, inconsistent design, and poor information architecture that made it hard for prospective partner universities and exchange students to find what they needed. The brief was clear: rebuild from scratch, with a content system that staff could maintain themselves, a design that reflected PCU's positioning as an internationally recognised institution, and a structure that served both inbound and outbound audiences.`,
    features: [
      { icon: 'globe',        title: 'Inbound & Outbound Programs', desc: 'Dedicated pages for every academic program — semester exchange, international degree, ICOP, Indonesian SPECTRUM, joint/double degree, and internship — structured around two distinct audience journeys.' },
      { icon: 'users',        title: 'Role-Based Admin News CMS', desc: 'Four admin roles (Inbound, Outbound, Partnership, Head) can publish, edit, and delete news articles from a rich-text editor. Articles are stored in Supabase and merged with static seed data at runtime.' },
      { icon: 'mail',         title: 'Meeting Request Form', desc: 'A multi-step modal form captures institution details, meeting preferences, and guest lists, writes directly to Supabase, and fires a Deno Edge Function to send email notifications via Resend.' },
      { icon: 'map',          title: 'Interactive Partnership Directory', desc: 'A drill-down modal — continent → country → partner details — lets visitors explore PCU\'s global network. Domestic partners have a separate categorised modal with toggleable sections.' },
      { icon: 'play-circle',  title: 'Animated Hero Carousel', desc: 'Auto-advancing hero slides with navigation arrows, dot indicators, and scroll-reveal animations built using IntersectionObserver — no animation library required.' },
      { icon: 'database',     title: 'OSE & Internship CMS', desc: 'Admins can add custom university entries to the Outbound Semester Exchange page and manage internship opportunity listings via dedicated Supabase-backed modals.' },
    ],
    problems: [
      {
        icon: 'file-x',
        title: 'Static Site, No CMS',
        tag: 'Content Management',
        desc: 'Updating news, partner information, or program details required technical access to the codebase — a bottleneck for a busy international office team.',
      },
      {
        icon: 'users',
        title: 'Two Audiences, One Navigation',
        tag: 'Information Architecture',
        desc: 'Prospective partner universities and exchange students have completely different information needs. The old site did not separate these journeys at all.',
      },
      {
        icon: 'globe',
        title: 'No Partnership Directory',
        tag: 'Data Presentation',
        desc: "PCU's network of international partners had no visual representation — no searchable directory, no map, no snapshot of the institution's global reach.",
      },
      {
        icon: 'smartphone',
        title: 'Desktop-Only Layout',
        tag: 'Responsive Design',
        desc: 'The existing site broke on mobile devices, alienating a large share of prospective students who browse primarily on their phones.',
      },
    ],
    solutions: [
      {
        icon: 'edit-3',
        title: 'Supabase-Powered News CMS',
        tag: 'Content Management',
        desc: 'A rich-text editor connected to Supabase lets staff publish and edit news articles, announcements, and program updates without touching code.',
      },
      {
        icon: 'layout',
        title: 'Audience-First Architecture',
        tag: 'Information Architecture',
        desc: 'Navigation and content structure were redesigned around two primary journeys — partner institutions and prospective exchange students — reducing cognitive load for each.',
      },
      {
        icon: 'map',
        title: 'Partnership Directory',
        tag: 'Data Presentation',
        desc: "A searchable, filterable directory of partner universities with country, region, and agreement-type filters gives the institution's global network a proper visual home.",
      },
      {
        icon: 'smartphone',
        title: 'Mobile-First Rebuild',
        tag: 'Responsive Design',
        desc: 'Every layout was designed mobile-first using Tailwind CSS, with progressive enhancement for tablet and desktop — ensuring a consistent experience across all devices.',
      },
    ],
  },

  'web-dashboard-partnership': {
    title:   'Dashboard Partnership',
    tagline: 'A data dashboard for visualising and managing international partnership networks.',
    year:    '2025',
    status:  'Live',
    github:  'https://github.com/zefanyakharisma-cell/Dashboard-Partnership',
    live:    'https://dashboard-partnership.vercel.app/',
    tech:    ['HTML', 'CSS', 'JavaScript', 'Chart.js', 'Tailwind CSS'],
    background: `International offices at universities manage dozens — sometimes hundreds — of institutional partnerships. At Petra Christian University, much of this data lived in spreadsheets: partner universities, agreement types, expiry dates, geographic regions, and activity status. There was no quick way to see the overall health of the network, identify which regions were underrepresented, or track which agreements were approaching expiry. This dashboard was built to transform that raw data into an interactive, at-a-glance overview that anyone in the team could use without opening a single spreadsheet.`,
    features: [
      { icon: 'bar-chart-2',  title: '2,289 Agreements at a Glance', desc: 'Real institutional dataset — 2,289 agreements across 1,201 institutions and 38 departments, normalised from raw spreadsheets into a fast, searchable JSON store.' },
      { icon: 'workflow',     title: '8-Stage Workflow Engine', desc: 'Every agreement moves through Drafting → Internal Review → Legal Review → Partner Review → Waiting Signature → Signed → Completed → Archived, with progress tracking and status history.' },
      { icon: 'archive',      title: 'Public Archive Library', desc: 'Signed and active agreements are auto-archived and made available in a public-facing library with advanced search, filter, and CSV export — no sign-in required.' },
      { icon: 'pie-chart',    title: 'Executive Analytics', desc: 'Status distribution, agreements by department, monthly activity trends, and expiration timeline — all rendered with Chart.js and updated live as filters change.' },
      { icon: 'users',        title: 'Role-Based Admin System', desc: 'Four roles (Admin, Manager, Staff, Viewer) with Supabase Auth. Admins manage users, workflows, and document attachments; viewers get read-only access.' },
      { icon: 'moon',         title: 'Dark Mode & CSV Export', desc: 'Persistent dark/light mode toggle, keyboard shortcuts, confirmation modals on all destructive actions, and one-click data export to JSON or CSV from the Settings page.' },
    ],
    problems: [
      {
        icon: 'table',
        title: 'Data Locked in Spreadsheets',
        tag: 'Data Accessibility',
        desc: "Partnership data was maintained in multiple spreadsheet files, making it impossible to get a real-time, consolidated picture of the institution's partner network.",
      },
      {
        icon: 'map-pin',
        title: 'No Geographic Overview',
        tag: 'Visualisation',
        desc: 'Without a map or regional breakdown, it was difficult to identify geographic gaps in the partnership network or report distribution to senior leadership.',
      },
      {
        icon: 'clock',
        title: 'Agreement Expiry Blind Spots',
        tag: 'Monitoring',
        desc: 'MoU and MoA agreements have fixed terms — but there was no system to surface agreements nearing expiry before they lapsed unnoticed.',
      },
      {
        icon: 'filter',
        title: 'No Filtering or Segmentation',
        tag: 'User Experience',
        desc: 'With 30+ partners across multiple agreement types and regions, there was no way to quickly answer "show me all active partners in Europe" without manual sorting.',
      },
    ],
    solutions: [
      {
        icon: 'bar-chart-2',
        title: 'Interactive Summary Charts',
        tag: 'Visualisation',
        desc: 'Chart.js-powered bar and doughnut charts break down partnerships by region, agreement type, and activity status — updating live when filters change.',
      },
      {
        icon: 'map',
        title: 'Regional Distribution View',
        tag: 'Visualisation',
        desc: 'A regional breakdown panel gives an immediate sense of geographic coverage, making it easy to identify gaps and report distribution data.',
      },
      {
        icon: 'alert-circle',
        title: 'Expiry Status Indicators',
        tag: 'Monitoring',
        desc: 'Each partnership card displays agreement status — active, expiring soon, or expired — with colour-coded badges so renewals never slip through.',
      },
      {
        icon: 'search',
        title: 'Search and Filter Controls',
        tag: 'User Experience',
        desc: 'Compound filters by country, region, agreement type, and status let any team member answer specific questions about the network in seconds.',
      },
    ],
  },

  'web-dashboard-grants': {
    title:   'Dashboard International Grants',
    tagline: 'Centralising international grant tracking from application through to outcome.',
    year:    '2025',
    status:  'Live',
    github:  'https://github.com/zefanyakharisma-cell/Dashboard-International-Grants',
    live:    'https://dashboard-international-grants.vercel.app/',
    tech:    ['HTML', 'CSS', 'JavaScript', 'Chart.js', 'Tailwind CSS'],
    background: `International grant programmes — from government scholarships to university-funded exchanges — require careful tracking across multiple stages: awareness, application, selection, placement, and completion. At the International Office, managing these journeys across multiple grant types and dozens of applicants per cycle created a coordination overhead that was hard to manage without a dedicated tool. This dashboard was built to centralise that information: one place to see every active grant, every applicant's stage, every upcoming deadline, and every outcome — without chasing status updates across emails and spreadsheets.`,
    features: [
      { icon: 'zap',          title: 'Realtime Updates', desc: 'Supabase Realtime subscriptions push INSERT/UPDATE/DELETE events from the grants table to every connected client instantly — no polling, no page refresh required.' },
      { icon: 'calendar',     title: 'Deadline Calendar', desc: 'A dedicated calendar view surfaces every grant deadline across active programmes, sorted by urgency so no submission window is missed.' },
      { icon: 'bookmark',     title: 'Local & Remote Bookmarks', desc: 'Public users can bookmark grants locally; authenticated users get their bookmarks synced across devices via Supabase, persisting across sessions.' },
      { icon: 'cpu',          title: 'Grant Matching Engine', desc: 'A matching view cross-references a user\'s faculty and programme against grant eligibility criteria, surfacing the most relevant opportunities automatically.' },
      { icon: 'shield',       title: 'Row Level Security Throughout', desc: 'Every table is protected by Supabase RLS — public read, admin write. The anon key is safely exposed in the client bundle; the service_role key is never used in frontend code.' },
      { icon: 'upload-cloud', title: 'Admin File Attachments', desc: 'Admins can upload supporting documents (PDFs, forms) directly to Supabase Storage from the grant form — drag-and-drop or file picker, with a full audit trail in the activity log.' },
    ],
    problems: [
      {
        icon: 'inbox',
        title: 'Scattered Grant Information',
        tag: 'Data Management',
        desc: 'Grant details, applicant lists, deadlines, and outcomes were distributed across emails, shared drives, and spreadsheets — creating a fragmented and unreliable record.',
      },
      {
        icon: 'calendar',
        title: 'Deadline Management',
        tag: 'Time-Critical Tracking',
        desc: 'Grant cycles have hard deadlines at multiple stages. Missing a submission window meant losing funding for the entire cohort — yet there was no centralised deadline view.',
      },
      {
        icon: 'trending-up',
        title: 'No Outcome Visibility',
        tag: 'Reporting',
        desc: 'Leadership needed to report on grant performance — acceptance rates, funding secured, placement outcomes — but producing those figures required manual data aggregation.',
      },
      {
        icon: 'user-check',
        title: 'Applicant Stage Tracking',
        tag: 'Pipeline Management',
        desc: 'With multiple applicants per grant and multiple stages per applicant, tracking who was at which stage across several concurrent grant cycles was error-prone.',
      },
    ],
    solutions: [
      {
        icon: 'layout',
        title: 'Centralised Grant Overview',
        tag: 'Data Management',
        desc: 'All active and completed grants in one dashboard — each with type, funding body, cycle dates, applicant count, and current status visible at a glance.',
      },
      {
        icon: 'calendar',
        title: 'Deadline Timeline View',
        tag: 'Time-Critical Tracking',
        desc: 'A timeline panel surfaces upcoming deadlines across all active grants, sorted by urgency — ensuring no submission window is missed.',
      },
      {
        icon: 'pie-chart',
        title: 'Outcome Analytics',
        tag: 'Reporting',
        desc: 'Acceptance rates, funding totals, and placement outcomes are calculated automatically from the data and presented in charts ready for leadership reporting.',
      },
      {
        icon: 'git-merge',
        title: 'Stage-Based Pipeline View',
        tag: 'Pipeline Management',
        desc: 'A Kanban-style pipeline shows every applicant\'s current stage across active grants — making it easy to see where the bottlenecks are and who needs follow-up.',
      },
    ],
  },
};

// ── Star field helper ─────────────────────────────────────────────────────────
function wpStars(n) {
  return Array.from({length:n},(_,i)=>{
    const x=(Math.random()*100).toFixed(1),y=(Math.random()*100).toFixed(1),s=(Math.random()*2+0.5).toFixed(1),d=(Math.random()*4).toFixed(1),op=(Math.random()*0.5+0.2).toFixed(2);
    return `<span style="position:absolute;left:${x}%;top:${y}%;width:${s}px;height:${s}px;border-radius:50%;background:#fff;opacity:${op};pointer-events:none;animation:wpTwinkle ${(Math.random()*3+1.5).toFixed(1)}s ${d}s ease-in-out infinite"></span>`;
  }).join('');
}

// ── Page builder ──────────────────────────────────────────────────────────────

function wpBuildPage(projectId) {
  const p = WP_PROJECTS[projectId];
  if (!p) return '';

  const techBadges = p.tech.map(t => `
    <span style="
      font-family:'Outfit',sans-serif;font-size:.72rem;font-weight:500;
      padding:4px 12px;border-radius:999px;
      background:rgba(212,177,90,0.1);color:#8FA8D6;
      border:1px solid rgba(212,177,90,0.2)
    ">${t}</span>`).join('');

  const statusColor = p.status === 'Live' ? '#4CAF87' : '#D4B15A';
  const statusBg    = p.status === 'Live' ? 'rgba(45,180,79,0.15)' : 'rgba(212,177,90,0.15)';
  const statusBorder = p.status === 'Live' ? 'rgba(45,180,79,0.25)' : 'rgba(212,177,90,0.25)';

  const featureCards = p.features.map(f => `
    <div class="wp-card" style="
      background:rgba(11,30,58,0.7);border-radius:14px;padding:22px;
      border:1px solid rgba(111,168,255,0.14);
      backdrop-filter:blur(12px);
      box-shadow:0 2px 12px rgba(3,7,18,0.3);
      display:flex;gap:14px;align-items:flex-start
    ">
      <div style="
        width:36px;height:36px;border-radius:10px;flex-shrink:0;
        background:rgba(111,168,255,0.1);border:1px solid rgba(111,168,255,0.2);
        display:flex;align-items:center;justify-content:center;margin-top:2px
      ">
        <i data-lucide="${f.icon}" style="width:16px;height:16px;color:#6FA8FF"></i>
      </div>
      <div>
        <h4 style="
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:1rem;font-weight:600;color:#D9E6FF;
          line-height:1.25;margin-bottom:6px
        ">${f.title}</h4>
        <p style="
          font-family:'Outfit',sans-serif;font-size:.83rem;line-height:1.65;color:#8FA8D6
        ">${f.desc}</p>
      </div>
    </div>`).join('');

  const problemCards = p.problems.map(pr => `
    <div class="wp-card" style="
      background:rgba(11,30,58,0.7);border-radius:14px;padding:24px;
      border:1px solid rgba(111,168,255,0.14);
      backdrop-filter:blur(12px);
      box-shadow:0 2px 12px rgba(3,7,18,0.3)
    ">
      <div style="display:flex;align-items:flex-start;gap:14px;margin-bottom:12px">
        <div style="
          width:36px;height:36px;border-radius:10px;flex-shrink:0;
          background:rgba(255,80,60,0.1);border:1px solid rgba(255,80,60,0.2);
          display:flex;align-items:center;justify-content:center
        ">
          <i data-lucide="${pr.icon}" style="width:16px;height:16px;color:#FF6B6B"></i>
        </div>
        <div>
          <span style="
            font-family:'Outfit',sans-serif;font-size:.67rem;font-weight:600;
            letter-spacing:.08em;text-transform:uppercase;color:#FF6B6B;
            display:block;margin-bottom:4px
          ">${pr.tag}</span>
          <h4 style="
            font-family:'Cormorant Garamond',Georgia,serif;
            font-size:1.05rem;font-weight:600;color:#D9E6FF;line-height:1.25
          ">${pr.title}</h4>
        </div>
      </div>
      <p style="
        font-family:'Outfit',sans-serif;font-size:.84rem;line-height:1.65;color:#8FA8D6
      ">${pr.desc}</p>
    </div>`).join('');

  const solutionCards = p.solutions.map(s => `
    <div class="wp-card" style="
      background:rgba(11,30,58,0.7);border-radius:14px;padding:24px;
      border:1px solid rgba(111,168,255,0.14);
      backdrop-filter:blur(12px);
      box-shadow:0 2px 12px rgba(3,7,18,0.3)
    ">
      <div style="display:flex;align-items:flex-start;gap:14px;margin-bottom:12px">
        <div style="
          width:36px;height:36px;border-radius:10px;flex-shrink:0;
          background:rgba(212,177,90,0.1);border:1px solid rgba(212,177,90,0.2);
          display:flex;align-items:center;justify-content:center
        ">
          <i data-lucide="${s.icon}" style="width:16px;height:16px;color:#D4B15A"></i>
        </div>
        <div>
          <span style="
            font-family:'Outfit',sans-serif;font-size:.67rem;font-weight:600;
            letter-spacing:.08em;text-transform:uppercase;color:#D4B15A;
            display:block;margin-bottom:4px
          ">${s.tag}</span>
          <h4 style="
            font-family:'Cormorant Garamond',Georgia,serif;
            font-size:1.05rem;font-weight:600;color:#D9E6FF;line-height:1.25
          ">${s.title}</h4>
        </div>
      </div>
      <p style="
        font-family:'Outfit',sans-serif;font-size:.84rem;line-height:1.65;color:#8FA8D6
      ">${s.desc}</p>
    </div>`).join('');

  return `
    <style>
      @keyframes wpTwinkle { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.15;transform:scale(.5)} }
      .wp-card { transition: box-shadow .2s, transform .2s; }
      .wp-card:hover { box-shadow: 0 12px 40px rgba(3,7,18,0.5) !important; transform: translateY(-3px); }
      @media (prefers-reduced-motion: reduce) { .wp-card:hover { transform: none; } }
    </style>

    <!-- Hero -->
    <div class="page-hero-banner" style="
      background:linear-gradient(160deg,#030712 0%,#071126 50%,#0B1E3A 100%);
      padding: clamp(5rem,10vh,7rem) 0 0;
      position:relative;overflow:hidden
    ">
      <!-- Star field -->
      ${wpStars(90)}

      <!-- Nebula glow overlays -->
      <div style="
        position:absolute;inset:0;pointer-events:none;
        background:radial-gradient(ellipse at 80% 20%,rgba(212,177,90,0.07),transparent 55%),
                   radial-gradient(ellipse at 5%  80%,rgba(111,168,255,0.06),transparent 50%)
      "></div>

      <!-- Decorative crescent moon -->
      <div style="position:absolute;right:clamp(1rem,6vw,5rem);top:clamp(2rem,8vh,5rem);opacity:0.13;pointer-events:none">
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="70" cy="70" r="60" fill="#D9E6FF"/>
          <circle cx="95" cy="50" r="55" fill="#071126"/>
        </svg>
      </div>

      <div style="max-width:760px;margin:0 auto;padding:0 clamp(1.25rem,5vw,3rem);position:relative;z-index:1">

        <!-- Back button -->
        <button onclick="goToPage('croissantsmoon')" style="
          display:inline-flex;align-items:center;gap:7px;
          font-family:'Outfit',sans-serif;font-size:.78rem;font-weight:500;
          color:rgba(143,168,214,0.5);background:none;border:none;cursor:pointer;
          padding:0;margin-bottom:clamp(1.5rem,4vh,2.5rem);
          transition:color .18s
        " onmouseover="this.style.color='rgba(143,168,214,0.85)'"
           onmouseout="this.style.color='rgba(143,168,214,0.5)'">
          <i data-lucide="arrow-left" style="width:14px;height:14px"></i>
          CroissantsMoon
        </button>

        <!-- Status + year -->
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:18px">
          <span style="
            font-family:'Outfit',sans-serif;font-size:.68rem;font-weight:600;
            letter-spacing:.1em;text-transform:uppercase;
            padding:3px 11px;border-radius:999px;
            background:${statusBg};color:${statusColor};
            border:1px solid ${statusBorder}
          ">${p.status}</span>
          <span style="
            font-family:'Outfit',sans-serif;font-size:.68rem;color:rgba(217,230,255,0.35);
            letter-spacing:.06em
          ">${p.year}</span>
        </div>

        <!-- Title -->
        <h1 style="
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:clamp(2.2rem,5.5vw,3.5rem);font-weight:600;
          color:#D9E6FF;letter-spacing:-.02em;line-height:1.1;
          margin-bottom:16px;
          text-shadow:0 0 60px rgba(111,168,255,0.18)
        ">${p.title}</h1>

        <!-- Tagline -->
        <p style="
          font-family:'Outfit',sans-serif;font-size:clamp(.9rem,2vw,1.05rem);
          color:rgba(217,230,255,0.6);line-height:1.6;
          margin-bottom:clamp(1.5rem,4vh,2.5rem);max-width:520px
        ">${p.tagline}</p>

        <!-- Tech badges -->
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:clamp(1.75rem,4vh,2.75rem)">
          ${techBadges}
        </div>

        <!-- CTAs -->
        <div style="display:flex;flex-wrap:wrap;gap:12px;padding-bottom:clamp(2rem,6vh,4rem)">
          <a href="${p.live}" target="_blank" rel="noopener noreferrer" style="
            display:inline-flex;align-items:center;gap:8px;
            font-family:'Outfit',sans-serif;font-size:.85rem;font-weight:600;
            padding:11px 24px;border-radius:999px;
            background:#D4B15A;color:#071126;
            text-decoration:none;border:none;
            box-shadow:0 0 18px rgba(212,177,90,0.3);
            transition:opacity .18s,transform .18s
          " onmouseover="this.style.opacity='.85';this.style.transform='translateY(-1px)'"
             onmouseout="this.style.opacity='1';this.style.transform='translateY(0)'">
            <i data-lucide="external-link" style="width:14px;height:14px"></i>
            Open Live Site
          </a>
          <a href="${p.github}" target="_blank" rel="noopener noreferrer" style="
            display:inline-flex;align-items:center;gap:8px;
            font-family:'Outfit',sans-serif;font-size:.85rem;font-weight:600;
            padding:10px 22px;border-radius:999px;
            background:transparent;color:#D9E6FF;
            text-decoration:none;
            border:1px solid rgba(217,230,255,0.2);
            transition:border-color .18s,background .18s
          " onmouseover="this.style.borderColor='rgba(217,230,255,0.4)';this.style.background='rgba(217,230,255,0.06)'"
             onmouseout="this.style.borderColor='rgba(217,230,255,0.2)';this.style.background='transparent'">
            <i data-lucide="github" style="width:14px;height:14px"></i>
            View on GitHub
          </a>
        </div>
      </div>
    </div>

    <!-- Body -->
    <div style="background:#071126;padding-bottom:80px">
      <div style="max-width:760px;margin:0 auto;padding:0 clamp(1.25rem,5vw,3rem)">

        <!-- Background -->
        <section style="padding:clamp(2.5rem,6vh,4rem) 0 clamp(1.5rem,4vh,3rem)">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
            <span style="
              font-family:'Outfit',sans-serif;font-size:.67rem;font-weight:700;
              letter-spacing:.13em;text-transform:uppercase;color:#D4B15A
            ">Background</span>
            <div style="flex:1;height:1px;background:rgba(111,168,255,0.1)"></div>
          </div>
          <p style="
            font-family:'Outfit',sans-serif;font-size:.9375rem;line-height:1.75;color:#8FA8D6
          ">${p.background}</p>
        </section>

        <!-- Divider -->
        <div style="height:1px;background:rgba(111,168,255,0.1);margin-bottom:clamp(2rem,5vh,3.5rem)"></div>

        <!-- Features -->
        <section style="margin-bottom:clamp(2rem,5vh,3.5rem)">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px">
            <span style="
              font-family:'Outfit',sans-serif;font-size:.67rem;font-weight:700;
              letter-spacing:.13em;text-transform:uppercase;color:#6FA8FF
            ">What It Does</span>
            <div style="flex:1;height:1px;background:rgba(111,168,255,0.1)"></div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px">
            ${featureCards}
          </div>
        </section>

        <!-- Divider -->
        <div style="height:1px;background:rgba(111,168,255,0.1);margin-bottom:clamp(2rem,5vh,3.5rem)"></div>

        <!-- Problems -->
        <section style="margin-bottom:clamp(2rem,5vh,3.5rem)">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px">
            <span style="
              font-family:'Outfit',sans-serif;font-size:.67rem;font-weight:700;
              letter-spacing:.13em;text-transform:uppercase;color:#FF6B6B
            ">Problems That Arose</span>
            <div style="flex:1;height:1px;background:rgba(111,168,255,0.1)"></div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px">
            ${problemCards}
          </div>
        </section>

        <!-- Divider -->
        <div style="height:1px;background:rgba(111,168,255,0.1);margin-bottom:clamp(2rem,5vh,3.5rem)"></div>

        <!-- Solutions -->
        <section style="margin-bottom:clamp(2rem,5vh,3.5rem)">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px">
            <span style="
              font-family:'Outfit',sans-serif;font-size:.67rem;font-weight:700;
              letter-spacing:.13em;text-transform:uppercase;color:#D4B15A
            ">How It Was Handled</span>
            <div style="flex:1;height:1px;background:rgba(111,168,255,0.1)"></div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px">
            ${solutionCards}
          </div>
        </section>

        <!-- Divider -->
        <div style="height:1px;background:rgba(111,168,255,0.1);margin-bottom:clamp(2rem,5vh,3.5rem)"></div>

        <!-- Live Preview -->
        <section>
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px">
            <span style="
              font-family:'Outfit',sans-serif;font-size:.67rem;font-weight:700;
              letter-spacing:.13em;text-transform:uppercase;color:#8FA8D6
            ">Live Preview</span>
            <div style="flex:1;height:1px;background:rgba(111,168,255,0.1)"></div>
          </div>

          <!-- Browser chrome frame -->
          <div style="
            border-radius:16px;overflow:hidden;
            border:1px solid rgba(111,168,255,0.14);
            box-shadow:0 8px 40px rgba(3,7,18,0.4)
          ">
            <!-- Address bar / chrome -->
            <div style="
              background:rgba(11,30,58,0.8);padding:9px 14px;
              border-bottom:1px solid rgba(111,168,255,0.12);
              display:flex;align-items:center;gap:8px
            ">
              <div style="display:flex;gap:5px;flex-shrink:0">
                <span style="width:9px;height:9px;border-radius:50%;background:#FF5F57;display:block"></span>
                <span style="width:9px;height:9px;border-radius:50%;background:#FEBC2E;display:block"></span>
                <span style="width:9px;height:9px;border-radius:50%;background:#28C840;display:block"></span>
              </div>
              <div style="
                flex:1;background:rgba(7,17,38,0.6);border-radius:5px;padding:4px 10px;
                font-family:'Outfit',sans-serif;font-size:.66rem;color:#8FA8D6;
                border:1px solid rgba(111,168,255,0.1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis
              ">${p.live}</div>
              <a href="${p.live}" target="_blank" rel="noopener noreferrer" style="
                flex-shrink:0;display:flex;align-items:center;justify-content:center;
                width:26px;height:26px;border-radius:6px;
                background:rgba(212,177,90,0.12);
                color:#D4B15A;text-decoration:none;
                transition:background .18s
              " title="Open in new tab"
                 onmouseover="this.style.background='rgba(212,177,90,0.25)'"
                 onmouseout="this.style.background='rgba(212,177,90,0.12)'">
                <i data-lucide="external-link" style="width:12px;height:12px"></i>
              </a>
            </div>
            <!-- iframe -->
            <div style="position:relative;height:520px;background:#0B1E3A">
              <iframe
                id="wp-iframe-${projectId}"
                src="${p.live}"
                title="${p.title} — live preview"
                loading="lazy"
                style="width:100%;height:100%;border:none;display:block"
                onload="document.getElementById('wp-iframe-fallback-${projectId}').style.display='none'"
                onerror="document.getElementById('wp-iframe-fallback-${projectId}').style.display='flex'"
              ></iframe>
              <!-- Fallback shown if iframe fails (X-Frame-Options / CSP) -->
              <div id="wp-iframe-fallback-${projectId}" style="
                display:none;position:absolute;inset:0;
                flex-direction:column;align-items:center;justify-content:center;
                gap:18px;background:#071126;
                font-family:'Outfit',sans-serif;text-align:center;padding:32px
              ">
                <i data-lucide="monitor-off" style="width:32px;height:32px;color:#8FA8D6;opacity:.5"></i>
                <p style="font-size:.875rem;color:#8FA8D6;line-height:1.6;max-width:300px">
                  This site cannot be embedded here.<br>Open it directly to see it in action.
                </p>
                <a href="${p.live}" target="_blank" rel="noopener noreferrer" style="
                  display:inline-flex;align-items:center;gap:8px;
                  font-size:.85rem;font-weight:600;
                  padding:11px 24px;border-radius:999px;
                  background:#D4B15A;color:#071126;
                  text-decoration:none;transition:opacity .18s
                " onmouseover="this.style.opacity='.8'"
                   onmouseout="this.style.opacity='1'">
                  <i data-lucide="external-link" style="width:14px;height:14px"></i>
                  Open Live Site
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  `;
}

// ── Initialise each page ─────────────────────────────────────────────────────
// Script is at the bottom of <body> — DOM elements are already parsed.
// Call directly; no need to wait for DOMContentLoaded.

(function wpInit() {
  ['web-portfolio', 'web-pcu-global-intl', 'web-dashboard-partnership', 'web-dashboard-grants']
    .forEach(function(id) {
      var el = document.getElementById('page-' + id);
      if (!el) return;
      el.style.background = '#071126';
      el.innerHTML = wpBuildPage(id);
    });
  // lucide icons are created by main.js DOMContentLoaded — no need to call here
})();
