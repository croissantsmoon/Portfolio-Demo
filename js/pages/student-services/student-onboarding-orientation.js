var onboardingActivities = [
  {
    id: 'pickup',
    icon: 'plane',
    color: '#1E3A5F',
    gradient: 'linear-gradient(135deg, #1E3A5F 0%, #4A6B8A 100%)',
    title: 'Student Pick-Up Services',
    preview: 'Coordinating airport arrivals and ensuring every student felt welcomed from their very first moment in Indonesia.',
    role: 'I served as the first point of contact for international students arriving in Surabaya — managing transportation logistics, monitoring flight schedules, and ensuring a seamless first-arrival experience for every student that set a warm, welcoming tone for their entire stay.',
    responsibilities: [
      'Received and reviewed flight manifests from inbound mobility staff',
      'Communicated directly with students before arrival to confirm schedules and needs',
      'Coordinated transportation teams and driver assignments for each batch',
      'Welcomed students personally at Juanda International Airport',
      'Assisted with luggage, local SIM cards, and immediate settlement logistics',
      'Transferred students safely to their designated accommodation',
      'Provided welcome packages with essential Surabaya information and emergency contacts'
    ],
    workflow: 'Received pre-arrival student information → coordinated transportation logistics → monitored live flight schedules → greeted students at arrival terminal → managed first-hour needs (SIM cards, cash, etc.) → transported to accommodation → handed over to buddy system for continued support.',
    impact: 'Ensured 100+ students per semester arrived stress-free and felt genuinely welcomed from day one — setting a positive emotional foundation for their entire study experience in Indonesia.',
    highlights: ['Supported arrivals across multiple flight batches per semester', 'Available for weekend and late-night arrivals', 'Coordinated logistics for students from 20+ countries']
  },
  {
    id: 'orientation',
    icon: 'book-open',
    color: '#4A6B8A',
    gradient: 'linear-gradient(135deg, #4A6B8A 0%, #6B8FAA 100%)',
    title: 'Onboarding & Orientation Session',
    preview: 'Designing and delivering comprehensive orientation programs that helped students adapt academically, culturally, and administratively from day one.',
    role: 'I co-designed and facilitated multi-day orientation sessions that equipped incoming international students with the knowledge, connections, and confidence they needed to succeed at Airlangga and in Surabaya — covering academic, cultural, and administrative dimensions.',
    responsibilities: [
      'Developed orientation program schedules, rundowns, and supporting materials',
      'Facilitated academic information sessions covering course registration and faculty expectations',
      'Coordinated campus tours and introduced students to key offices and services',
      'Delivered cultural adaptation briefings on Indonesian customs, norms, and daily life',
      'Connected students with academic advisors, faculty contacts, and peer mentors',
      'Distributed essential documents: student handbooks, emergency contacts, and resource directories',
      'Facilitated open Q&A sessions and created space for student concerns to be heard'
    ],
    workflow: 'Collaborated with academic and visa staff to define orientation content → prepared logistics and materials → facilitated multi-day program → introduced students to peer buddy network → conducted follow-up check-ins in the first two weeks.',
    impact: 'Successfully onboarded 100+ students per semester, significantly reducing early-stage confusion and improving student confidence during the critical first weeks of their program.',
    highlights: ['Multi-day structured orientation programs', 'Delivered in English with multilingual visual guides', 'Inclusive design accommodating diverse cultural backgrounds']
  },
  {
    id: 'bestbuddies',
    icon: 'heart-handshake',
    color: '#8B7355',
    gradient: 'linear-gradient(135deg, #8B7355 0%, #A69070 100%)',
    title: 'Best Buddies Support',
    preview: 'Building a peer mentoring ecosystem where local and international students formed meaningful, lasting cross-cultural friendships.',
    role: 'I coordinated the Best Buddies peer mentoring program — recruiting and training local student volunteers, matching them with international students based on shared interests, and facilitating ongoing relationship support and integration activities throughout the semester.',
    responsibilities: [
      'Recruited local student volunteers through campus-wide outreach campaigns',
      'Designed and delivered buddy mentor training and cultural sensitivity briefings',
      'Matched buddies with international students based on academic interests and backgrounds',
      'Organized buddy kickoff meet-and-greet events to spark initial connections',
      'Monitored buddy relationships and mediated any cultural or communication challenges',
      'Facilitated group activities and cross-cultural social events throughout the semester',
      'Collected regular feedback to continuously improve the matching and support process'
    ],
    workflow: 'Open recruitment campaign → application screening → buddy training and briefing → matching process → kickoff event → semester-long check-ins and group activities → end-of-semester appreciation and feedback collection.',
    impact: 'Created meaningful cross-cultural friendships for 100+ international students per semester, with many buddy pairs maintaining contact long after program completion.',
    highlights: ['50+ trained local student mentors per semester', 'Organized cross-cultural friendship events throughout the semester', 'High continuation rates of buddy relationships post-program']
  },
  {
    id: 'tax',
    icon: 'file-text',
    color: '#059669',
    gradient: 'linear-gradient(135deg, #064E3B 0%, #059669 100%)',
    title: 'Tax Reporting Support',
    preview: 'Guiding international students through Indonesian tax reporting obligations — turning a complex administrative process into a clear, manageable experience.',
    role: 'I assisted international students — particularly government scholarship recipients — in understanding, preparing for, and completing their Indonesian tax reporting obligations accurately and on time, coordinating across university offices and scholarship authorities to ensure compliance.',
    responsibilities: [
      'Explained Indonesian tax reporting requirements in simple, accessible language',
      'Coordinated with university finance and administrative offices for official guidance',
      'Assisted students in gathering and preparing required documentation',
      'Hosted group information sessions on tax obligations for scholarship holders',
      'Accompanied students to relevant government offices when needed',
      'Followed up individually to ensure timely and accurate submission',
      'Liaised with scholarship offices to confirm compliance status'
    ],
    workflow: 'Identified students with tax reporting obligations → coordinated with finance office for official guidance → hosted group information session → provided individual assistance with documents → monitored submission deadlines → confirmed compliance with scholarship authorities.',
    impact: 'Ensured 100% tax reporting compliance for all government scholarship students, protecting their visa and scholarship status and maintaining institutional credibility with DIKTI.',
    highlights: ['Supported KNB and TIAS scholarship holders', 'Zero compliance issues or missed deadlines', 'Created step-by-step guidance materials in accessible English']
  },
  {
    id: 'farewell',
    icon: 'sparkles',
    color: '#EA580C',
    gradient: 'linear-gradient(135deg, #7C2D12 0%, #EA580C 100%)',
    title: 'Farewell Party',
    preview: 'Celebrating the journeys of departing students with memorable farewell events that honored their time in Indonesia and strengthened lasting connections.',
    role: 'I organized and facilitated warm, meaningful farewell celebrations for international students completing their programs — creating a sense of closure, appreciation, and community for both departing students and the staff who supported them throughout their journey.',
    responsibilities: [
      'Planned and coordinated farewell event themes, logistics, and budgets',
      'Curated cultural performances and student talent showcases',
      'Organized student sharing sessions and cultural reflection moments',
      'Coordinated certificate distribution and institutional appreciation gestures',
      'Facilitated alumni network-building and contact sharing sessions',
      'Arranged event photography and video documentation for lasting memories',
      'Supported students with departure logistics and administrative clearance'
    ],
    workflow: 'Planned event concept and theme → coordinated with student committees for program contributions → managed venue and catering → facilitated the event ceremony → documented highlights → supported post-event alumni engagement.',
    impact: 'Created emotionally meaningful closure for 100+ students per semester, with many participants citing the farewell event as one of the most memorable moments of their Indonesia experience.',
    highlights: ['Cultural performance and student talent showcases', 'Institutional certificate and appreciation ceremonies', 'Alumni connection and network-building moments']
  },
  {
    id: 'monitoring',
    icon: 'clipboard-list',
    color: '#7C3AED',
    gradient: 'linear-gradient(135deg, #3B0764 0%, #7C3AED 100%)',
    title: 'Monitoring & Evaluation',
    preview: 'Ensuring government scholarship students met all program requirements through structured monitoring, stakeholder reporting, and proactive issue resolution.',
    role: 'I coordinated monitoring and evaluation activities for government-funded scholarship programs — specifically KNB (Kemitraan Negara Berkembang) and TIAS scholarships — ensuring full compliance with program obligations, maintaining accurate student progress records, and communicating regularly with national scholarship authorities.',
    responsibilities: [
      'Conducted regular individual and group check-in meetings with KNB and TIAS scholarship holders',
      'Monitored academic progress, attendance, and wellbeing indicators throughout the semester',
      'Prepared structured progress reports for formal submission to scholarship authorities',
      'Communicated officially with DIKTI and relevant scholarship stakeholders',
      'Organized evaluation sessions and collected qualitative student feedback',
      'Proactively identified and resolved compliance issues before reporting deadlines',
      'Coordinated with academic and visa staff on student status updates and concerns'
    ],
    workflow: 'Established semester-long monitoring schedules → conducted regular check-ins with scholarship holders → collected academic and welfare data → compiled official progress reports → submitted to scholarship offices → addressed any flagged concerns with relevant departments.',
    impact: 'Maintained 100% reporting compliance across all government scholarship programs, ensuring uninterrupted funding and sustaining strong institutional credibility with national scholarship authorities.',
    highlights: ['Full oversight of KNB and TIAS scholarship programs', 'Regular structured reporting to DIKTI', 'Zero reporting compliance failures across all monitored semesters']
  }
];

function buildModalHTML(activity, highlightsLabel) {
  var label = highlightsLabel || 'Highlights';
  return (
    '<div class="relative overflow-hidden" style="background:' + activity.gradient + ';padding:48px 40px 40px">' +
      '<div class="absolute -right-8 -top-8 w-48 h-48 rounded-full" style="background:rgba(255,255,255,0.06)"></div>' +
      '<div class="absolute right-16 bottom-4 w-24 h-24 rounded-full" style="border:1.5px solid rgba(255,255,255,0.1)"></div>' +
      '<button onclick="closeStudentModal()" class="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center z-10" style="background:rgba(255,255,255,0.2)">' +
        '<i data-lucide="x" style="width:16px;height:16px;color:#fff"></i>' +
      '</button>' +
      '<div class="relative z-10">' +
        '<div class="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style="background:rgba(255,255,255,0.15)">' +
          '<i data-lucide="' + activity.icon + '" style="width:28px;height:28px;color:#fff"></i>' +
        '</div>' +
        '<h2 class="font-heading font-bold text-2xl md:text-3xl text-white mb-2">' + activity.title + '</h2>' +
        '<p style="color:rgba(255,255,255,0.8);line-height:1.6">' + activity.preview + '</p>' +
      '</div>' +
    '</div>' +
    '<div class="p-8 md:p-10">' +
      '<div class="mb-8">' +
        '<span class="inline-block text-xs font-semibold uppercase tracking-widest mb-3 px-2 py-1 rounded" style="background:rgba(28,28,30,0.05);color:' + activity.color + '">My Role</span>' +
        '<p style="color:#5C5C5C;line-height:1.7">' + activity.role + '</p>' +
      '</div>' +
      '<div class="mb-8">' +
        '<span class="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-2 py-1 rounded" style="background:rgba(28,28,30,0.05);color:' + activity.color + '">Key Responsibilities</span>' +
        '<div class="space-y-2.5">' +
          activity.responsibilities.map(function(r) {
            return '<div class="flex items-start gap-3"><div class="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style="background:' + activity.color + '"></div><span style="color:#5C5C5C;line-height:1.6">' + r + '</span></div>';
          }).join('') +
        '</div>' +
      '</div>' +
      '<div class="mb-8 p-5 rounded-xl" style="background:rgba(28,28,30,0.03);border-left:3px solid ' + activity.color + '">' +
        '<span class="inline-block text-xs font-semibold uppercase tracking-widest mb-3" style="color:' + activity.color + '">Workflow &amp; Process</span>' +
        '<p style="color:#5C5C5C;line-height:1.7;font-size:0.9rem">' + activity.workflow + '</p>' +
      '</div>' +
      '<div class="mb-8 p-5 rounded-xl" style="background:rgba(28,28,30,0.03)">' +
        '<span class="inline-block text-xs font-semibold uppercase tracking-widest mb-3" style="color:' + activity.color + '">Impact</span>' +
        '<p style="color:#5C5C5C;line-height:1.7">' + activity.impact + '</p>' +
      '</div>' +
      '<div>' +
        '<span class="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style="color:' + activity.color + '">' + label + '</span>' +
        '<div class="flex flex-wrap gap-2">' +
          activity.highlights.map(function(h) {
            return '<span class="px-3 py-1.5 rounded-full text-xs font-medium" style="background:rgba(28,28,30,0.06);color:#1C1C1E">' + h + '</span>';
          }).join('') +
        '</div>' +
      '</div>' +
    '</div>'
  );
}

function openOnboardingModal(id) {
  var activity = null;
  for (var i = 0; i < onboardingActivities.length; i++) {
    if (onboardingActivities[i].id === id) { activity = onboardingActivities[i]; break; }
  }
  if (!activity) return;
  var modal = document.getElementById('student-modal');
  var body = document.getElementById('student-modal-body');
  body.innerHTML = buildModalHTML(activity);
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  if (window.lucide) lucide.createIcons();
}

function closeStudentModal() {
  var modal = document.getElementById('student-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

function onboardingInitPage() {
  var el = document.getElementById('page-onboarding');
  if (!el) return;
  el.innerHTML = `
     <!-- Hero -->
     <div style="background:linear-gradient(160deg,#1C1C1E 0%,#1E3A5F 55%,#2C4A72 100%);padding:clamp(48px,8vh,72px) 24px 0;position:relative;overflow:hidden">
      <div class="absolute inset-0 pointer-events-none" style="background:radial-gradient(ellipse at 85% 20%,rgba(139,115,85,0.18),transparent 55%)"></div>
      <div class="absolute -right-16 -top-16 w-80 h-80 rounded-full pointer-events-none" style="border:1px solid rgba(255,255,255,0.04)"></div>
      <div class="max-w-6xl mx-auto relative z-10">
       <button onclick="goToPage('engagement')" class="flex items-center gap-2 mb-8" style="color:rgba(255,255,255,0.45);font-size:.8rem;font-weight:500"><i data-lucide="arrow-left" style="width:15px;height:15px"></i> Back</button>
       <div class="label-small mb-3" style="color:rgba(255,255,255,0.35);letter-spacing:.12em">Student Welfare &amp; Mobility</div>
       <h1 class="font-heading font-bold mb-4" style="font-size:clamp(2rem,5vw,3.5rem);line-height:1.05;color:#fff;letter-spacing:-.02em">International<br><em style="font-style:italic;color:#8B7355">Student Support</em></h1>
       <p class="max-w-2xl mb-8" style="color:rgba(255,255,255,0.6);font-size:1rem;line-height:1.7">From the moment students land to the day they depart — providing holistic support for 100+ international students per semester across academic, visa, welfare, and peer ecosystems in Indonesia.</p>
       <div class="flex flex-wrap gap-8 pb-8">
        <div><p class="font-heading font-bold text-2xl" style="color:#8B7355">480+</p><p class="label-small" style="color:rgba(255,255,255,0.35)">Students</p></div>
        <div><p class="font-heading font-bold text-2xl" style="color:#8B7355">30+</p><p class="label-small" style="color:rgba(255,255,255,0.35)">Countries</p></div>
        <div><p class="font-heading font-bold text-2xl" style="color:#8B7355">10+</p><p class="label-small" style="color:rgba(255,255,255,0.35)">Stakeholder Types</p></div>
        <div><p class="font-heading font-bold text-2xl" style="color:#8B7355">4</p><p class="label-small" style="color:rgba(255,255,255,0.35)">AMERTA Batches</p></div>
       </div>
       <!-- Tab Nav -->
       <div class="flex gap-0 border-t" style="border-color:rgba(255,255,255,0.08)">
        <button onclick="goToPage('engagement')" style="color:rgba(255,255,255,0.45);font-size:.75rem;font-weight:500;padding:12px 20px;border-bottom:2px solid transparent;background:transparent;cursor:pointer;transition:all .2s" onmouseover="this.style.color='#fff';this.style.borderBottomColor='#8B7355'" onmouseout="this.style.color='rgba(255,255,255,0.45)';this.style.borderBottomColor='transparent'">Overview</button>
        <button onclick="goToPage('engagement-detail')" style="color:rgba(255,255,255,0.45);font-size:.75rem;font-weight:500;padding:12px 20px;border-bottom:2px solid transparent;background:transparent;cursor:pointer;transition:all .2s" onmouseover="this.style.color='#fff';this.style.borderBottomColor='#8B7355'" onmouseout="this.style.color='rgba(255,255,255,0.45)';this.style.borderBottomColor='transparent'">Student Engagement</button>
        <button onclick="goToPage('partnerships')" style="color:rgba(255,255,255,0.45);font-size:.75rem;font-weight:500;padding:12px 20px;border-bottom:2px solid transparent;background:transparent;cursor:pointer;transition:all .2s" onmouseover="this.style.color='#fff';this.style.borderBottomColor='#8B7355'" onmouseout="this.style.color='rgba(255,255,255,0.45)';this.style.borderBottomColor='transparent'">Partnerships</button>
       </div>
      </div>
     </div>
     <!-- Content Sections -->
     <div style="padding:72px 24px 72px;background:#FAFAF8">
      <div class="max-w-6xl mx-auto">
      <!-- Support Ecosystem -->
      <div class="mb-20">
       <div class="flex items-center gap-3 mb-3"><span class="accent-line"></span><span class="text-sm font-semibold" style="color:#059669">Holistic Support</span></div>
       <h2 class="font-heading font-bold text-3xl mb-4" style="color:#1C1C1E">Support Ecosystem</h2>
       <p class="text-base max-w-3xl mb-10" style="color:#5C5C5C">From the moment a student accepted their offer until the day they returned home, I worked across a multi-stakeholder ecosystem — collaborating with academic staff, visa teams, inbound mobility staff, international offices, and student buddies — to ensure every dimension of their Indonesia journey was holistically supported.</p>
       <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background:rgba(30,58,95,0.08)"><i data-lucide="graduation-cap" style="width:24px;height:24px;color:#1E3A5F"></i></div>
         <h3 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">Academic Coordination</h3>
         <p class="text-sm leading-relaxed" style="color:#5C5C5C">Liaised with faculty and academic staff to ensure students' course registrations, schedules, and academic obligations were smoothly managed throughout their program.</p>
        </div>
        <div class="card p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background:rgba(74,107,138,0.08)"><i data-lucide="shield-check" style="width:24px;height:24px;color:#4A6B8A"></i></div>
         <h3 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">Immigration &amp; Visa Assistance</h3>
         <p class="text-sm leading-relaxed" style="color:#5C5C5C">Guided students through KITAS applications, extensions, and immigration reporting requirements — coordinating closely with visa staff to keep every student legally compliant.</p>
        </div>
        <div class="card p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background:rgba(139,115,85,0.08)"><i data-lucide="heart" style="width:24px;height:24px;color:#8B7355"></i></div>
         <h3 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">Student Welfare</h3>
         <p class="text-sm leading-relaxed" style="color:#5C5C5C">Provided personalized, responsive support for student wellbeing — from healthcare coordination and accommodation assistance to emotional support during difficult personal situations.</p>
        </div>
        <div class="card p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background:rgba(6,78,59,0.08)"><i data-lucide="globe" style="width:24px;height:24px;color:#059669"></i></div>
         <h3 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">Cross-Cultural Adaptation</h3>
         <p class="text-sm leading-relaxed" style="color:#5C5C5C">Helped students navigate cultural differences, language barriers, and Indonesian social norms — offering practical guidance on daily life, customs, and building meaningful local connections.</p>
        </div>
        <div class="card p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background:rgba(59,7,100,0.08)"><i data-lucide="award" style="width:24px;height:24px;color:#7C3AED"></i></div>
         <h3 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">Government Scholarship Administration</h3>
         <p class="text-sm leading-relaxed" style="color:#5C5C5C">Managed administrative obligations for KNB and TIAS scholarship holders — including progress monitoring, tax reporting support, and formal reporting to scholarship authorities.</p>
        </div>
        <div class="card p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background:rgba(124,45,18,0.08)"><i data-lucide="users" style="width:24px;height:24px;color:#EA580C"></i></div>
         <h3 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">Community &amp; Peer Support</h3>
         <p class="text-sm leading-relaxed" style="color:#5C5C5C">Built an inclusive support community through the Best Buddies peer mentoring program — connecting international students with trained local mentors and organizing integration activities throughout the semester.</p>
        </div>
       </div>
      </div>
      <!-- Activities & Student Services -->
      <div class="mb-20">
       <div class="flex items-center gap-3 mb-3"><span class="accent-line"></span><span class="text-sm font-semibold" style="color:#059669">What I Did</span></div>
       <h2 class="font-heading font-bold text-3xl mb-4" style="color:#1C1C1E">Activities &amp; Student Services</h2>
       <p class="text-base max-w-3xl mb-10" style="color:#5C5C5C">Each activity below represents a specific service or program I coordinated for international students — from their first day of arrival to their final farewell. Click on any card to learn more about my role, responsibilities, and impact.</p>
       <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" onclick="openOnboardingModal('pickup')" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="h-1.5" style="background:linear-gradient(90deg,#1E3A5F,#4A6B8A)"></div>
         <div class="p-6">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background:rgba(30,58,95,0.08)"><i data-lucide="plane" style="width:24px;height:24px;color:#1E3A5F"></i></div>
          <h3 class="font-heading font-semibold text-lg mb-2" style="color:#1C1C1E">Student Pick-Up Services</h3>
          <p class="text-sm mb-4 leading-relaxed" style="color:#5C5C5C">Airport coordination, transportation logistics, and first-arrival assistance — ensuring every student felt welcomed the moment they landed in Surabaya.</p>
          <div class="flex items-center gap-1.5" style="color:#1E3A5F"><span class="text-xs font-semibold">View Details</span><i data-lucide="arrow-right" style="width:13px;height:13px"></i></div>
         </div>
        </div>
        <div class="card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" onclick="openOnboardingModal('orientation')" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="h-1.5" style="background:linear-gradient(90deg,#4A6B8A,#6B8FAA)"></div>
         <div class="p-6">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background:rgba(74,107,138,0.08)"><i data-lucide="book-open" style="width:24px;height:24px;color:#4A6B8A"></i></div>
          <h3 class="font-heading font-semibold text-lg mb-2" style="color:#1C1C1E">Onboarding &amp; Orientation Session</h3>
          <p class="text-sm mb-4 leading-relaxed" style="color:#5C5C5C">Multi-day academic, cultural, and administrative orientation programs designed to set every student up for success from day one.</p>
          <div class="flex items-center gap-1.5" style="color:#4A6B8A"><span class="text-xs font-semibold">View Details</span><i data-lucide="arrow-right" style="width:13px;height:13px"></i></div>
         </div>
        </div>
        <div class="card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" onclick="openOnboardingModal('bestbuddies')" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="h-1.5" style="background:linear-gradient(90deg,#8B7355,#A69070)"></div>
         <div class="p-6">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background:rgba(139,115,85,0.08)"><i data-lucide="heart-handshake" style="width:24px;height:24px;color:#8B7355"></i></div>
          <h3 class="font-heading font-semibold text-lg mb-2" style="color:#1C1C1E">Best Buddies Support</h3>
          <p class="text-sm mb-4 leading-relaxed" style="color:#5C5C5C">Peer mentoring program connecting international students with local student volunteers for cross-cultural friendship and integration support.</p>
          <div class="flex items-center gap-1.5" style="color:#8B7355"><span class="text-xs font-semibold">View Details</span><i data-lucide="arrow-right" style="width:13px;height:13px"></i></div>
         </div>
        </div>
        <div class="card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" onclick="openOnboardingModal('tax')" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="h-1.5" style="background:linear-gradient(90deg,#064E3B,#059669)"></div>
         <div class="p-6">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background:rgba(6,78,59,0.08)"><i data-lucide="file-text" style="width:24px;height:24px;color:#059669"></i></div>
          <h3 class="font-heading font-semibold text-lg mb-2" style="color:#1C1C1E">Tax Reporting Support</h3>
          <p class="text-sm mb-4 leading-relaxed" style="color:#5C5C5C">Guided international students through Indonesian tax reporting requirements — turning a complex obligation into a clear, manageable process.</p>
          <div class="flex items-center gap-1.5" style="color:#059669"><span class="text-xs font-semibold">View Details</span><i data-lucide="arrow-right" style="width:13px;height:13px"></i></div>
         </div>
        </div>
        <div class="card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" onclick="openOnboardingModal('farewell')" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="h-1.5" style="background:linear-gradient(90deg,#7C2D12,#EA580C)"></div>
         <div class="p-6">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background:rgba(124,45,18,0.08)"><i data-lucide="sparkles" style="width:24px;height:24px;color:#EA580C"></i></div>
          <h3 class="font-heading font-semibold text-lg mb-2" style="color:#1C1C1E">Farewell Party</h3>
          <p class="text-sm mb-4 leading-relaxed" style="color:#5C5C5C">Meaningful farewell celebrations honoring departing students' journeys — appreciation events, cultural reflection moments, and alumni connection building.</p>
          <div class="flex items-center gap-1.5" style="color:#EA580C"><span class="text-xs font-semibold">View Details</span><i data-lucide="arrow-right" style="width:13px;height:13px"></i></div>
         </div>
        </div>
        <div class="card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" onclick="openOnboardingModal('monitoring')" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="h-1.5" style="background:linear-gradient(90deg,#3B0764,#7C3AED)"></div>
         <div class="p-6">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background:rgba(59,7,100,0.08)"><i data-lucide="clipboard-list" style="width:24px;height:24px;color:#7C3AED"></i></div>
          <h3 class="font-heading font-semibold text-lg mb-2" style="color:#1C1C1E">Monitoring &amp; Evaluation</h3>
          <p class="text-sm mb-4 leading-relaxed" style="color:#5C5C5C">Structured progress monitoring and reporting for KNB and TIAS scholarship holders — ensuring full compliance with government scholarship obligations.</p>
          <div class="flex items-center gap-1.5" style="color:#7C3AED"><span class="text-xs font-semibold">View Details</span><i data-lucide="arrow-right" style="width:13px;height:13px"></i></div>
         </div>
        </div>
       </div>
      </div>
      <!-- Student Overview Data Section -->
      <div class="mb-20">
       <div class="flex items-center gap-3 mb-3"><span class="accent-line"></span><span class="text-sm font-semibold" style="color:#059669">Data Overview</span></div>
       <h2 class="font-heading font-bold text-3xl mb-4" style="color:#1C1C1E">Student Overview</h2>
       <p class="text-base max-w-3xl mb-10" style="color:#5C5C5C">A data snapshot of the international students I supported across exchange programs, government scholarships, and inbound welfare services at Airlangga Global Engagement — based on records from all program batches.</p>
       <!-- Program Summary Cards -->
       <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        <div class="card p-5 rounded-2xl" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style="background:rgba(5,150,105,0.1)"><i data-lucide="plane" style="width:20px;height:20px;color:#059669"></i></div>
         <p class="font-heading font-bold text-3xl mb-0.5" style="color:#1C1C1E">193</p>
         <p class="text-sm font-semibold mb-1" style="color:#1C1C1E">AMERTA Exchange</p>
         <p class="text-xs leading-relaxed" style="color:#5C5C5C">Batches 21–24 (2024–2027) · 15 countries</p>
         <div class="mt-3 flex flex-wrap gap-1">
          <span class="px-1.5 py-0.5 rounded text-xs" style="background:rgba(5,150,105,0.08);color:#059669">Batch 21: 34</span>
          <span class="px-1.5 py-0.5 rounded text-xs" style="background:rgba(5,150,105,0.08);color:#059669">Batch 22: 43</span>
          <span class="px-1.5 py-0.5 rounded text-xs" style="background:rgba(5,150,105,0.08);color:#059669">Batch 23: 67</span>
          <span class="px-1.5 py-0.5 rounded text-xs" style="background:rgba(5,150,105,0.08);color:#059669">Batch 24: 49</span>
         </div>
        </div>
        <div class="card p-5 rounded-2xl" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style="background:rgba(124,58,237,0.1)"><i data-lucide="award" style="width:20px;height:20px;color:#7C3AED"></i></div>
         <p class="font-heading font-bold text-3xl mb-0.5" style="color:#1C1C1E">27</p>
         <p class="text-sm font-semibold mb-1" style="color:#1C1C1E">KNB Scholarship</p>
         <p class="text-xs leading-relaxed" style="color:#5C5C5C">Government-funded · 10+ countries · monitored &amp; evaluated</p>
         <div class="mt-3 flex flex-wrap gap-1">
          <span class="px-1.5 py-0.5 rounded text-xs" style="background:rgba(124,58,237,0.08);color:#7C3AED">Pakistan · Yemen</span>
          <span class="px-1.5 py-0.5 rounded text-xs" style="background:rgba(124,58,237,0.08);color:#7C3AED">Timor-Leste</span>
         </div>
        </div>
        <div class="card p-5 rounded-2xl" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style="background:rgba(234,88,12,0.1)"><i data-lucide="star" style="width:20px;height:20px;color:#EA580C"></i></div>
         <p class="font-heading font-bold text-3xl mb-0.5" style="color:#1C1C1E">9</p>
         <p class="text-sm font-semibold mb-1" style="color:#1C1C1E">TIAS Scholarship</p>
         <p class="text-xs leading-relaxed" style="color:#5C5C5C">Government-funded · 5 countries · monitored &amp; evaluated</p>
         <div class="mt-3 flex flex-wrap gap-1">
          <span class="px-1.5 py-0.5 rounded text-xs" style="background:rgba(234,88,12,0.08);color:#EA580C">Kenya · Nigeria</span>
          <span class="px-1.5 py-0.5 rounded text-xs" style="background:rgba(234,88,12,0.08);color:#EA580C">Zimbabwe</span>
         </div>
        </div>
        <div class="card p-5 rounded-2xl" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style="background:rgba(30,58,95,0.1)"><i data-lucide="users" style="width:20px;height:20px;color:#1E3A5F"></i></div>
         <p class="font-heading font-bold text-3xl mb-0.5" style="color:#1C1C1E">251</p>
         <p class="text-sm font-semibold mb-1" style="color:#1C1C1E">Inbound &amp; Welfare</p>
         <p class="text-xs leading-relaxed" style="color:#5C5C5C">All programs · 25+ countries · arrival to departure</p>
         <div class="mt-3 flex flex-wrap gap-1">
          <span class="px-1.5 py-0.5 rounded text-xs" style="background:rgba(30,58,95,0.08);color:#1E3A5F">Yemen · Pakistan</span>
          <span class="px-1.5 py-0.5 rounded text-xs" style="background:rgba(30,58,95,0.08);color:#1E3A5F">Timor-Leste</span>
         </div>
        </div>
       </div>
       <!-- Nationality Charts -->
       <div class="grid md:grid-cols-2 gap-6 mb-6">
        <!-- AMERTA Nationalities -->
        <div class="card p-6 rounded-2xl" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="flex items-center gap-2 mb-5">
          <div class="w-1 h-5 rounded-full" style="background:#059669"></div>
          <h3 class="font-heading font-semibold text-base" style="color:#1C1C1E">AMERTA Exchange — Top Nationalities</h3>
         </div>
         <div class="space-y-3">
          <div><div class="flex justify-between mb-1"><span class="text-xs font-medium" style="color:#1C1C1E">Malaysia</span><span class="text-xs" style="color:#5C5C5C">87</span></div><div class="h-1.5 rounded-full" style="background:rgba(28,28,30,0.06)"><div class="h-1.5 rounded-full" style="width:100%;background:#059669"></div></div></div>
          <div><div class="flex justify-between mb-1"><span class="text-xs font-medium" style="color:#1C1C1E">Philippines</span><span class="text-xs" style="color:#5C5C5C">49</span></div><div class="h-1.5 rounded-full" style="background:rgba(28,28,30,0.06)"><div class="h-1.5 rounded-full" style="width:56%;background:#059669"></div></div></div>
          <div><div class="flex justify-between mb-1"><span class="text-xs font-medium" style="color:#1C1C1E">France</span><span class="text-xs" style="color:#5C5C5C">11</span></div><div class="h-1.5 rounded-full" style="background:rgba(28,28,30,0.06)"><div class="h-1.5 rounded-full" style="width:13%;background:#059669"></div></div></div>
          <div><div class="flex justify-between mb-1"><span class="text-xs font-medium" style="color:#1C1C1E">Brunei</span><span class="text-xs" style="color:#5C5C5C">10</span></div><div class="h-1.5 rounded-full" style="background:rgba(28,28,30,0.06)"><div class="h-1.5 rounded-full" style="width:11%;background:#059669"></div></div></div>
          <div><div class="flex justify-between mb-1"><span class="text-xs font-medium" style="color:#1C1C1E">Germany</span><span class="text-xs" style="color:#5C5C5C">9</span></div><div class="h-1.5 rounded-full" style="background:rgba(28,28,30,0.06)"><div class="h-1.5 rounded-full" style="width:10%;background:#059669"></div></div></div>
          <div><div class="flex justify-between mb-1"><span class="text-xs font-medium" style="color:#1C1C1E">Australia</span><span class="text-xs" style="color:#5C5C5C">6</span></div><div class="h-1.5 rounded-full" style="background:rgba(28,28,30,0.06)"><div class="h-1.5 rounded-full" style="width:7%;background:#059669"></div></div></div>
          <div><div class="flex justify-between mb-1"><span class="text-xs font-medium" style="color:#1C1C1E">Poland</span><span class="text-xs" style="color:#5C5C5C">6</span></div><div class="h-1.5 rounded-full" style="background:rgba(28,28,30,0.06)"><div class="h-1.5 rounded-full" style="width:7%;background:#059669"></div></div></div>
          <div><div class="flex justify-between mb-1"><span class="text-xs font-medium" style="color:#1C1C1E">Singapore</span><span class="text-xs" style="color:#5C5C5C">3</span></div><div class="h-1.5 rounded-full" style="background:rgba(28,28,30,0.06)"><div class="h-1.5 rounded-full" style="width:3%;background:#059669"></div></div></div>
         </div>
        </div>
        <!-- Inbound Nationalities -->
        <div class="card p-6 rounded-2xl" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="flex items-center gap-2 mb-5">
          <div class="w-1 h-5 rounded-full" style="background:#1E3A5F"></div>
          <h3 class="font-heading font-semibold text-base" style="color:#1C1C1E">Inbound &amp; Scholarship — Top Nationalities</h3>
         </div>
         <div class="space-y-3">
          <div><div class="flex justify-between mb-1"><span class="text-xs font-medium" style="color:#1C1C1E">Yemen</span><span class="text-xs" style="color:#5C5C5C">60</span></div><div class="h-1.5 rounded-full" style="background:rgba(28,28,30,0.06)"><div class="h-1.5 rounded-full" style="width:100%;background:#1E3A5F"></div></div></div>
          <div><div class="flex justify-between mb-1"><span class="text-xs font-medium" style="color:#1C1C1E">Pakistan</span><span class="text-xs" style="color:#5C5C5C">55</span></div><div class="h-1.5 rounded-full" style="background:rgba(28,28,30,0.06)"><div class="h-1.5 rounded-full" style="width:92%;background:#1E3A5F"></div></div></div>
          <div><div class="flex justify-between mb-1"><span class="text-xs font-medium" style="color:#1C1C1E">Timor-Leste</span><span class="text-xs" style="color:#5C5C5C">27</span></div><div class="h-1.5 rounded-full" style="background:rgba(28,28,30,0.06)"><div class="h-1.5 rounded-full" style="width:45%;background:#1E3A5F"></div></div></div>
          <div><div class="flex justify-between mb-1"><span class="text-xs font-medium" style="color:#1C1C1E">Myanmar</span><span class="text-xs" style="color:#5C5C5C">14</span></div><div class="h-1.5 rounded-full" style="background:rgba(28,28,30,0.06)"><div class="h-1.5 rounded-full" style="width:23%;background:#1E3A5F"></div></div></div>
          <div><div class="flex justify-between mb-1"><span class="text-xs font-medium" style="color:#1C1C1E">Gambia</span><span class="text-xs" style="color:#5C5C5C">14</span></div><div class="h-1.5 rounded-full" style="background:rgba(28,28,30,0.06)"><div class="h-1.5 rounded-full" style="width:23%;background:#1E3A5F"></div></div></div>
          <div><div class="flex justify-between mb-1"><span class="text-xs font-medium" style="color:#1C1C1E">Nigeria</span><span class="text-xs" style="color:#5C5C5C">10</span></div><div class="h-1.5 rounded-full" style="background:rgba(28,28,30,0.06)"><div class="h-1.5 rounded-full" style="width:17%;background:#1E3A5F"></div></div></div>
          <div><div class="flex justify-between mb-1"><span class="text-xs font-medium" style="color:#1C1C1E">Sudan</span><span class="text-xs" style="color:#5C5C5C">9</span></div><div class="h-1.5 rounded-full" style="background:rgba(28,28,30,0.06)"><div class="h-1.5 rounded-full" style="width:15%;background:#1E3A5F"></div></div></div>
          <div><div class="flex justify-between mb-1"><span class="text-xs font-medium" style="color:#1C1C1E">Tanzania</span><span class="text-xs" style="color:#5C5C5C">9</span></div><div class="h-1.5 rounded-full" style="background:rgba(28,28,30,0.06)"><div class="h-1.5 rounded-full" style="width:15%;background:#1E3A5F"></div></div></div>
         </div>
        </div>
       </div>
       <!-- Gender + Study Level -->
       <div class="grid md:grid-cols-2 gap-6">
        <!-- Gender -->
        <div class="card p-6 rounded-2xl" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="flex items-center gap-2 mb-5">
          <div class="w-1 h-5 rounded-full" style="background:#8B7355"></div>
          <h3 class="font-heading font-semibold text-base" style="color:#1C1C1E">Gender Distribution</h3>
         </div>
         <div class="mb-6">
          <p class="text-xs font-semibold uppercase tracking-wider mb-3" style="color:#5C5C5C">AMERTA Exchange (Batches 22–24 · 158 students)</p>
          <div class="flex h-2.5 rounded-full overflow-hidden mb-2" style="background:rgba(28,28,30,0.06)">
           <div class="h-full" style="width:70%;background:#059669"></div>
           <div class="h-full" style="width:30%;background:#4A6B8A"></div>
          </div>
          <div class="flex justify-between text-xs">
           <span style="color:#059669">Female — 111 (70%)</span>
           <span style="color:#4A6B8A">Male — 47 (30%)</span>
          </div>
         </div>
         <div>
          <p class="text-xs font-semibold uppercase tracking-wider mb-3" style="color:#5C5C5C">Inbound &amp; Welfare (ADS · 110 with data)</p>
          <div class="flex h-2.5 rounded-full overflow-hidden mb-2" style="background:rgba(28,28,30,0.06)">
           <div class="h-full" style="width:35%;background:#8B7355"></div>
           <div class="h-full" style="width:65%;background:#1E3A5F"></div>
          </div>
          <div class="flex justify-between text-xs">
           <span style="color:#8B7355">Female — 38 (35%)</span>
           <span style="color:#1E3A5F">Male — 72 (65%)</span>
          </div>
         </div>
        </div>
        <!-- Study Program Level -->
        <div class="card p-6 rounded-2xl" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="flex items-center gap-2 mb-5">
          <div class="w-1 h-5 rounded-full" style="background:#4A6B8A"></div>
          <h3 class="font-heading font-semibold text-base" style="color:#1C1C1E">Study Program Level</h3>
         </div>
         <p class="text-xs font-semibold uppercase tracking-wider mb-4" style="color:#5C5C5C">AMERTA Exchange — 156 students (Batches 22–24)</p>
         <div class="space-y-4">
          <div>
           <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2"><div class="w-2.5 h-2.5 rounded-full" style="background:#4A6B8A"></div><span class="text-sm font-medium" style="color:#1C1C1E">Undergraduate</span></div>
            <span class="font-heading font-bold text-lg" style="color:#1C1C1E">145</span>
           </div>
           <div class="h-2.5 rounded-full" style="background:rgba(28,28,30,0.06)"><div class="h-2.5 rounded-full" style="width:93%;background:#4A6B8A"></div></div>
           <p class="text-xs mt-1" style="color:#5C5C5C">93% of AMERTA participants</p>
          </div>
          <div>
           <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2"><div class="w-2.5 h-2.5 rounded-full" style="background:#8B7355"></div><span class="text-sm font-medium" style="color:#1C1C1E">Master's Program</span></div>
            <span class="font-heading font-bold text-lg" style="color:#1C1C1E">11</span>
           </div>
           <div class="h-2.5 rounded-full" style="background:rgba(28,28,30,0.06)"><div class="h-2.5 rounded-full" style="width:7%;background:#8B7355"></div></div>
           <p class="text-xs mt-1" style="color:#5C5C5C">7% of AMERTA participants</p>
          </div>
         </div>
         <div class="mt-6 pt-4 border-t" style="border-color:rgba(28,28,30,0.08)">
          <p class="text-xs" style="color:#767676">Data based on Batches 22–24 where study level was recorded. All KNB and TIAS students are government scholarship recipients.</p>
         </div>
        </div>
       </div>
      </div>
      <!-- Summary Stats -->
      <div class="pt-12 border-t" style="border-color:rgba(28,28,30,0.1)">
       <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div class="text-center">
         <div class="w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto" style="background:rgba(5,150,105,0.08)"><i data-lucide="users" style="width:32px;height:32px;color:#059669"></i></div>
         <p class="font-heading font-bold text-2xl mb-1" style="color:#1C1C1E">480+</p>
         <p class="text-sm" style="color:#5C5C5C">Total Students Supported</p>
        </div>
        <div class="text-center">
         <div class="w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto" style="background:rgba(30,58,95,0.08)"><i data-lucide="globe" style="width:32px;height:32px;color:#1E3A5F"></i></div>
         <p class="font-heading font-bold text-2xl mb-1" style="color:#1C1C1E">30+</p>
         <p class="text-sm" style="color:#5C5C5C">Countries Represented</p>
        </div>
        <div class="text-center">
         <div class="w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto" style="background:rgba(139,115,85,0.08)"><i data-lucide="share-2" style="width:32px;height:32px;color:#8B7355"></i></div>
         <p class="font-heading font-bold text-2xl mb-1" style="color:#1C1C1E">10+</p>
         <p class="text-sm" style="color:#5C5C5C">Stakeholder Types Coordinated</p>
        </div>
        <div class="text-center">
         <div class="w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto" style="background:rgba(74,107,138,0.08)"><i data-lucide="calendar" style="width:32px;height:32px;color:#4A6B8A"></i></div>
         <p class="font-heading font-bold text-2xl mb-1" style="color:#1C1C1E">4</p>
         <p class="text-sm" style="color:#5C5C5C">Programs Managed (AMERTA Batches)</p>
        </div>
       </div>
      </div>
      </div>
     </div>
    `;
  if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', function() {
  onboardingInitPage();
});
