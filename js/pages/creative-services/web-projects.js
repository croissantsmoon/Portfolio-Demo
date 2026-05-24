// ── Web Project Detail Pages ─────────────────────────────────────────────────
// Shared colour tokens (mirrors CroissantsMoon CM object)
const WP = {
  cream:   '#FAF7F2',
  espresso:'#1C1410',
  gold:    '#C9A84C',
  blush:   '#F0E6D3',
  muted:   '#8C7B6B',
  border:  'rgba(28,20,16,0.1)',
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

// ── Page builder ──────────────────────────────────────────────────────────────

function wpBuildPage(projectId) {
  const p = WP_PROJECTS[projectId];
  if (!p) return '';

  const techBadges = p.tech.map(t => `
    <span style="
      font-family:'Outfit',sans-serif;font-size:.72rem;font-weight:500;
      padding:4px 12px;border-radius:999px;
      background:rgba(201,168,76,0.12);color:${WP.muted};
      border:1px solid rgba(201,168,76,0.22)
    ">${t}</span>`).join('');

  const statusColor = p.status === 'Live' ? '#2D7A4F' : WP.gold;
  const statusBg    = p.status === 'Live' ? 'rgba(45,122,79,0.1)' : 'rgba(201,168,76,0.12)';

  const problemCards = p.problems.map(pr => `
    <div class="wp-card" style="
      background:#fff;border-radius:14px;padding:24px;
      border:1px solid ${WP.border};
      box-shadow:0 2px 12px rgba(28,20,16,0.04)
    ">
      <div style="display:flex;align-items:flex-start;gap:14px;margin-bottom:12px">
        <div style="
          width:36px;height:36px;border-radius:10px;flex-shrink:0;
          background:rgba(200,80,60,0.08);
          display:flex;align-items:center;justify-content:center
        ">
          <i data-lucide="${pr.icon}" style="width:16px;height:16px;color:#C8503C"></i>
        </div>
        <div>
          <span style="
            font-family:'Outfit',sans-serif;font-size:.67rem;font-weight:600;
            letter-spacing:.08em;text-transform:uppercase;color:#C8503C;
            display:block;margin-bottom:4px
          ">${pr.tag}</span>
          <h4 style="
            font-family:'Cormorant Garamond',Georgia,serif;
            font-size:1.05rem;font-weight:600;color:${WP.espresso};line-height:1.25
          ">${pr.title}</h4>
        </div>
      </div>
      <p style="
        font-family:'Outfit',sans-serif;font-size:.84rem;line-height:1.65;color:${WP.muted}
      ">${pr.desc}</p>
    </div>`).join('');

  const solutionCards = p.solutions.map(s => `
    <div class="wp-card" style="
      background:#fff;border-radius:14px;padding:24px;
      border:1px solid ${WP.border};
      box-shadow:0 2px 12px rgba(28,20,16,0.04)
    ">
      <div style="display:flex;align-items:flex-start;gap:14px;margin-bottom:12px">
        <div style="
          width:36px;height:36px;border-radius:10px;flex-shrink:0;
          background:rgba(201,168,76,0.12);
          display:flex;align-items:center;justify-content:center
        ">
          <i data-lucide="${s.icon}" style="width:16px;height:16px;color:${WP.gold}"></i>
        </div>
        <div>
          <span style="
            font-family:'Outfit',sans-serif;font-size:.67rem;font-weight:600;
            letter-spacing:.08em;text-transform:uppercase;color:${WP.gold};
            display:block;margin-bottom:4px
          ">${s.tag}</span>
          <h4 style="
            font-family:'Cormorant Garamond',Georgia,serif;
            font-size:1.05rem;font-weight:600;color:${WP.espresso};line-height:1.25
          ">${s.title}</h4>
        </div>
      </div>
      <p style="
        font-family:'Outfit',sans-serif;font-size:.84rem;line-height:1.65;color:${WP.muted}
      ">${s.desc}</p>
    </div>`).join('');

  return `
    <style>
      .wp-card { transition: box-shadow .2s, transform .2s; }
      .wp-card:hover { box-shadow: 0 8px 32px rgba(28,20,16,0.1) !important; transform: translateY(-2px); }
      @media (prefers-reduced-motion: reduce) { .wp-card:hover { transform: none; } }
    </style>

    <!-- Hero -->
    <div class="page-hero-banner" style="
      background:${WP.espresso};
      padding: clamp(5rem,10vh,7rem) 0 0;
      position:relative;overflow:hidden
    ">
      <div style="
        position:absolute;inset:0;
        background:radial-gradient(ellipse at 80% 20%,rgba(201,168,76,0.12),transparent 55%),
                   radial-gradient(ellipse at 5%  80%,rgba(240,230,211,0.06),transparent 50%)
      "></div>

      <div style="max-width:760px;margin:0 auto;padding:0 clamp(1.25rem,5vw,3rem);position:relative;z-index:1">

        <!-- Back button -->
        <button onclick="goToPage('croissantsmoon')" style="
          display:inline-flex;align-items:center;gap:7px;
          font-family:'Outfit',sans-serif;font-size:.78rem;font-weight:500;
          color:rgba(250,247,242,0.5);background:none;border:none;cursor:pointer;
          padding:0;margin-bottom:clamp(1.5rem,4vh,2.5rem);
          transition:color .18s
        " onmouseover="this.style.color='rgba(250,247,242,0.85)'"
           onmouseout="this.style.color='rgba(250,247,242,0.5)'">
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
            border:1px solid ${p.status === 'Live' ? 'rgba(45,122,79,0.2)' : 'rgba(201,168,76,0.25)'}
          ">${p.status}</span>
          <span style="
            font-family:'Outfit',sans-serif;font-size:.68rem;color:rgba(250,247,242,0.35);
            letter-spacing:.06em
          ">${p.year}</span>
        </div>

        <!-- Title -->
        <h1 style="
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:clamp(2.2rem,5.5vw,3.5rem);font-weight:600;
          color:${WP.cream};letter-spacing:-.02em;line-height:1.1;
          margin-bottom:16px
        ">${p.title}</h1>

        <!-- Tagline -->
        <p style="
          font-family:'Outfit',sans-serif;font-size:clamp(.9rem,2vw,1.05rem);
          color:rgba(240,230,211,0.65);line-height:1.6;
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
            background:${WP.gold};color:${WP.espresso};
            text-decoration:none;border:none;
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
            background:transparent;color:${WP.cream};
            text-decoration:none;
            border:1px solid rgba(250,247,242,0.2);
            transition:border-color .18s,background .18s
          " onmouseover="this.style.borderColor='rgba(250,247,242,0.5)';this.style.background='rgba(250,247,242,0.06)'"
             onmouseout="this.style.borderColor='rgba(250,247,242,0.2)';this.style.background='transparent'">
            <i data-lucide="github" style="width:14px;height:14px"></i>
            View on GitHub
          </a>
        </div>
      </div>
    </div>

    <!-- Body -->
    <div style="background:${WP.cream};padding-bottom:80px">
      <div style="max-width:760px;margin:0 auto;padding:0 clamp(1.25rem,5vw,3rem)">

        <!-- Background -->
        <section style="padding:clamp(2.5rem,6vh,4rem) 0 clamp(1.5rem,4vh,3rem)">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
            <span style="
              font-family:'Outfit',sans-serif;font-size:.67rem;font-weight:700;
              letter-spacing:.13em;text-transform:uppercase;color:${WP.gold}
            ">Background</span>
            <div style="flex:1;height:1px;background:${WP.border}"></div>
          </div>
          <p style="
            font-family:'Outfit',sans-serif;font-size:.9375rem;line-height:1.75;color:#3D342C
          ">${p.background}</p>
        </section>

        <!-- Divider -->
        <div style="height:1px;background:${WP.border};margin-bottom:clamp(2rem,5vh,3.5rem)"></div>

        <!-- Problems -->
        <section style="margin-bottom:clamp(2rem,5vh,3.5rem)">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px">
            <span style="
              font-family:'Outfit',sans-serif;font-size:.67rem;font-weight:700;
              letter-spacing:.13em;text-transform:uppercase;color:#C8503C
            ">Problems That Arose</span>
            <div style="flex:1;height:1px;background:${WP.border}"></div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px">
            ${problemCards}
          </div>
        </section>

        <!-- Divider -->
        <div style="height:1px;background:${WP.border};margin-bottom:clamp(2rem,5vh,3.5rem)"></div>

        <!-- Solutions -->
        <section style="margin-bottom:clamp(2rem,5vh,3.5rem)">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px">
            <span style="
              font-family:'Outfit',sans-serif;font-size:.67rem;font-weight:700;
              letter-spacing:.13em;text-transform:uppercase;color:${WP.gold}
            ">How It Was Handled</span>
            <div style="flex:1;height:1px;background:${WP.border}"></div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px">
            ${solutionCards}
          </div>
        </section>

        <!-- Divider -->
        <div style="height:1px;background:${WP.border};margin-bottom:clamp(2rem,5vh,3.5rem)"></div>

        <!-- Live Preview -->
        <section>
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px">
            <span style="
              font-family:'Outfit',sans-serif;font-size:.67rem;font-weight:700;
              letter-spacing:.13em;text-transform:uppercase;color:${WP.muted}
            ">Live Preview</span>
            <div style="flex:1;height:1px;background:${WP.border}"></div>
          </div>

          <!-- Browser chrome frame -->
          <div style="
            border-radius:16px;overflow:hidden;
            border:1px solid ${WP.border};
            box-shadow:0 8px 40px rgba(28,20,16,0.1)
          ">
            <!-- Address bar -->
            <div style="
              background:#F5EEE6;padding:9px 14px;
              border-bottom:1px solid ${WP.border};
              display:flex;align-items:center;gap:8px
            ">
              <div style="display:flex;gap:5px;flex-shrink:0">
                <span style="width:9px;height:9px;border-radius:50%;background:#FF5F57;display:block"></span>
                <span style="width:9px;height:9px;border-radius:50%;background:#FEBC2E;display:block"></span>
                <span style="width:9px;height:9px;border-radius:50%;background:#28C840;display:block"></span>
              </div>
              <div style="
                flex:1;background:#fff;border-radius:5px;padding:4px 10px;
                font-family:'Outfit',sans-serif;font-size:.66rem;color:#B0988A;
                border:1px solid #EDE0D3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis
              ">${p.live}</div>
              <a href="${p.live}" target="_blank" rel="noopener noreferrer" style="
                flex-shrink:0;display:flex;align-items:center;justify-content:center;
                width:26px;height:26px;border-radius:6px;
                background:rgba(201,168,76,0.15);
                color:${WP.gold};text-decoration:none;
                transition:background .18s
              " title="Open in new tab"
                 onmouseover="this.style.background='rgba(201,168,76,0.28)'"
                 onmouseout="this.style.background='rgba(201,168,76,0.15)'">
                <i data-lucide="external-link" style="width:12px;height:12px"></i>
              </a>
            </div>
            <!-- iframe -->
            <div style="position:relative;height:520px;background:#F5EEE6">
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
                gap:18px;background:${WP.blush};
                font-family:'Outfit',sans-serif;text-align:center;padding:32px
              ">
                <i data-lucide="monitor-off" style="width:32px;height:32px;color:${WP.muted};opacity:.5"></i>
                <p style="font-size:.875rem;color:${WP.muted};line-height:1.6;max-width:300px">
                  This site cannot be embedded here.<br>Open it directly to see it in action.
                </p>
                <a href="${p.live}" target="_blank" rel="noopener noreferrer" style="
                  display:inline-flex;align-items:center;gap:8px;
                  font-size:.85rem;font-weight:600;
                  padding:11px 24px;border-radius:999px;
                  background:${WP.espresso};color:${WP.cream};
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
      el.innerHTML = wpBuildPage(id);
    });
  // lucide icons are created by main.js DOMContentLoaded — no need to call here
})();
