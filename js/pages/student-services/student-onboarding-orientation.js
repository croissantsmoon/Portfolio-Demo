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
