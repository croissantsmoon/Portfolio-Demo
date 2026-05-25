// International Grants page

function intlGrantsInitPage() {
  var el = document.getElementById('page-intl-grants');
  if (!el) return;
  el.innerHTML = `
     <!-- Hero -->
     <div style="background:linear-gradient(160deg,#1C1C1E 0%,#064E3B 45%,#065F46 100%);padding:clamp(48px,8vh,72px) 24px 0;position:relative;overflow:hidden">
      <div class="absolute inset-0 pointer-events-none" style="background:radial-gradient(ellipse at 85% 20%,rgba(217,119,6,0.18),transparent 55%)"></div>
      <div class="absolute -right-16 -top-16 w-80 h-80 rounded-full pointer-events-none" style="border:1px solid rgba(255,255,255,0.04)"></div>
      <div class="max-w-6xl mx-auto relative z-10">
       <button onclick="goToPage('engagement')" class="flex items-center gap-2 mb-8" style="color:rgba(255,255,255,0.45);font-size:.8rem;font-weight:500"><i data-lucide="arrow-left" style="width:15px;height:15px"></i> Back</button>
       <div class="flex items-center gap-3 mb-3">
        <div class="label-small" style="color:rgba(255,255,255,0.35);letter-spacing:.12em">International Education · PCU</div>
        <span style="display:inline-flex;align-items:center;gap:5px;font-size:.65rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;padding:3px 10px;border-radius:999px;background:rgba(217,119,6,0.25);color:#FCD34D;border:1px solid rgba(217,119,6,0.3)"><i data-lucide="construction" style="width:10px;height:10px"></i> In Development</span>
       </div>
       <h1 class="font-heading font-bold mb-4" style="font-size:clamp(2rem,5vw,3.5rem);line-height:1.05;color:#fff;letter-spacing:-.02em">International Grants<br><em style="font-style:italic;color:#FCD34D">Management System</em></h1>
       <p class="max-w-2xl mb-8" style="color:rgba(255,255,255,0.6);font-size:1rem;line-height:1.7">Currently building a comprehensive system — both digital and physical — to inform, maintain, and execute international grants at Petra Christian University. A single place for every grant opportunity, every applicant, and every deadline.</p>
       <div class="flex flex-wrap gap-8 pb-8">
        <div><p class="font-heading font-bold text-2xl" style="color:#FCD34D">Digital</p><p class="label-small" style="color:rgba(255,255,255,0.35)">Dashboard System</p></div>
        <div><p class="font-heading font-bold text-2xl" style="color:#FCD34D">Physical</p><p class="label-small" style="color:rgba(255,255,255,0.35)">Operational Flow</p></div>
        <div><p class="font-heading font-bold text-2xl" style="color:#FCD34D">PCU</p><p class="label-small" style="color:rgba(255,255,255,0.35)">Petra Christian University</p></div>
       </div>
       <!-- Tab Nav -->
       <div class="flex gap-0 border-t" style="border-color:rgba(255,255,255,0.08)">
        <button onclick="goToPage('onboarding')" style="color:rgba(255,255,255,0.45);font-size:.75rem;font-weight:500;padding:12px 20px;border-bottom:2px solid transparent;background:transparent;cursor:pointer;transition:all .2s" onmouseover="this.style.color='#fff';this.style.borderBottomColor='#FCD34D'" onmouseout="this.style.color='rgba(255,255,255,0.45)';this.style.borderBottomColor='transparent'">Student Support</button>
        <button onclick="goToPage('engagement-detail')" style="color:rgba(255,255,255,0.45);font-size:.75rem;font-weight:500;padding:12px 20px;border-bottom:2px solid transparent;background:transparent;cursor:pointer;transition:all .2s" onmouseover="this.style.color='#fff';this.style.borderBottomColor='#FCD34D'" onmouseout="this.style.color='rgba(255,255,255,0.45)';this.style.borderBottomColor='transparent'">Student Engagement</button>
        <button onclick="goToPage('partnerships')" style="color:rgba(255,255,255,0.45);font-size:.75rem;font-weight:500;padding:12px 20px;border-bottom:2px solid transparent;background:transparent;cursor:pointer;transition:all .2s" onmouseover="this.style.color='#fff';this.style.borderBottomColor='#FCD34D'" onmouseout="this.style.color='rgba(255,255,255,0.45)';this.style.borderBottomColor='transparent'">Partnerships</button>
        <button onclick="goToPage('mou')" style="color:rgba(255,255,255,0.45);font-size:.75rem;font-weight:500;padding:12px 20px;border-bottom:2px solid transparent;background:transparent;cursor:pointer;transition:all .2s" onmouseover="this.style.color='#fff';this.style.borderBottomColor='#FCD34D'" onmouseout="this.style.color='rgba(255,255,255,0.45)';this.style.borderBottomColor='transparent'">MoU / MoA</button>
        <button style="color:#fff;font-size:.75rem;font-weight:600;padding:12px 20px;border-bottom:2px solid #FCD34D;background:transparent;cursor:default">Intl. Grants</button>
       </div>
      </div>
     </div>

     <!-- What's Being Built -->
     <div style="padding:72px 24px 64px;background:#FAFAF8">
      <div class="max-w-6xl mx-auto">
       <div class="flex items-center gap-3 mb-10"><span class="accent-line"></span><span class="label-small">What's Being Built</span></div>
       <div class="grid md:grid-cols-2 gap-12 items-start">
        <div>
         <h2 class="font-heading font-bold text-3xl mb-4" style="color:#1C1C1E">A System for Every Stage of Every Grant</h2>
         <p class="text-base mb-5" style="color:#5C5C5C;line-height:1.75">International grant programmes — from government scholarships to university-funded exchanges — require careful coordination across multiple stages: awareness, application, selection, placement, and completion. At PCU, this information has been fragmented across emails, shared drives, and spreadsheets. I'm building a system that centralises all of it.</p>
         <p class="text-base mb-5" style="color:#5C5C5C;line-height:1.75">The system has two interdependent layers: a <strong style="color:#064E3B">digital dashboard</strong> that tracks every active grant, applicant, and deadline in real time — and a <strong style="color:#064E3B">physical operational workflow</strong> that ensures students are properly informed and supported throughout the application and placement process.</p>
         <p class="text-base mb-8" style="color:#5C5C5C;line-height:1.75">The goal is a single source of truth for PCU's international grants — one that faculty, staff, and students can consult without chasing status updates across email chains.</p>
         <div class="flex flex-wrap gap-3">
          <span class="tag">Supabase Realtime</span>
          <span class="tag">Grant Tracking</span>
          <span class="tag">Deadline Calendar</span>
          <span class="tag">Pipeline Management</span>
          <span class="tag">Physical Workflow</span>
          <span class="tag">Student Facing</span>
         </div>
        </div>
        <div class="grid gap-4">
         <div class="card p-5 rounded-2xl" style="border:1px solid rgba(28,28,30,0.08)">
          <div class="flex items-start gap-4">
           <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(6,78,59,0.08)"><i data-lucide="layers" style="width:18px;height:18px;color:#064E3B"></i></div>
           <div>
            <h4 class="font-heading font-semibold mb-1" style="color:#1C1C1E">Digital + Physical Integration</h4>
            <p class="text-sm leading-relaxed" style="color:#5C5C5C">The dashboard is the digital backbone — but the physical workflow (briefing sessions, printed guides, in-person advising) ensures students are properly equipped to apply and succeed.</p>
           </div>
          </div>
         </div>
         <div class="card p-5 rounded-2xl" style="border:1px solid rgba(28,28,30,0.08)">
          <div class="flex items-start gap-4">
           <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(217,119,6,0.08)"><i data-lucide="zap" style="width:18px;height:18px;color:#D97706"></i></div>
           <div>
            <h4 class="font-heading font-semibold mb-1" style="color:#1C1C1E">Realtime Grant Status</h4>
            <p class="text-sm leading-relaxed" style="color:#5C5C5C">Every grant, every applicant, every stage — updated live via Supabase Realtime subscriptions. No polling. No refresh required. Staff see changes the moment they happen.</p>
           </div>
          </div>
         </div>
         <div class="card p-5 rounded-2xl" style="border:1px solid rgba(28,28,30,0.08)">
          <div class="flex items-start gap-4">
           <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(124,58,237,0.08)"><i data-lucide="calendar" style="width:18px;height:18px;color:#7C3AED"></i></div>
           <div>
            <h4 class="font-heading font-semibold mb-1" style="color:#1C1C1E">Deadline-First Calendar</h4>
            <p class="text-sm leading-relaxed" style="color:#5C5C5C">A dedicated calendar view surfaces every grant deadline across active programmes, sorted by urgency — so no submission window is ever missed by a student or staff member.</p>
           </div>
          </div>
         </div>
         <div class="card p-5 rounded-2xl" style="border:1px solid rgba(28,28,30,0.08)">
          <div class="flex items-start gap-4">
           <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(5,150,105,0.08)"><i data-lucide="git-merge" style="width:18px;height:18px;color:#059669"></i></div>
           <div>
            <h4 class="font-heading font-semibold mb-1" style="color:#1C1C1E">Stage-Based Applicant Pipeline</h4>
            <p class="text-sm leading-relaxed" style="color:#5C5C5C">A Kanban-style pipeline tracks every applicant's current stage across concurrent grant cycles — making it immediately visible where bottlenecks are and who needs follow-up.</p>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>

     <!-- The International Grants Dashboard -->
     <div style="padding:64px 24px;background:#fff;border-top:1px solid rgba(28,28,30,0.07)">
      <div class="max-w-6xl mx-auto">
       <div class="flex items-center gap-3 mb-10"><span class="accent-line"></span><span class="label-small">The Dashboard</span></div>
       <h2 class="font-heading font-bold text-3xl mb-4" style="color:#1C1C1E">International Grants Dashboard</h2>
       <p class="text-base max-w-3xl mb-10" style="color:#5C5C5C;line-height:1.75">The digital centrepiece of this system — a self-built web application that centralises international grant tracking from opportunity discovery through to placement outcome. Built with Supabase (database, realtime, auth, storage, RLS) and Chart.js for analytics.</p>
       <div class="grid md:grid-cols-3 gap-6 mb-10">
        <div class="card rounded-2xl p-6" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background:rgba(6,78,59,0.08)"><i data-lucide="search" style="width:22px;height:22px;color:#064E3B"></i></div>
         <h3 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">Grant Discovery &amp; Matching</h3>
         <p class="text-sm leading-relaxed" style="color:#5C5C5C">A matching engine cross-references a student's faculty and programme against grant eligibility criteria — surfacing the most relevant opportunities automatically without manual searching.</p>
        </div>
        <div class="card rounded-2xl p-6" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background:rgba(217,119,6,0.08)"><i data-lucide="bookmark" style="width:22px;height:22px;color:#D97706"></i></div>
         <h3 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">Local &amp; Synced Bookmarks</h3>
         <p class="text-sm leading-relaxed" style="color:#5C5C5C">Public users can bookmark grants locally; authenticated users get bookmarks synced across devices via Supabase — so students never lose track of opportunities they're considering.</p>
        </div>
        <div class="card rounded-2xl p-6" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background:rgba(124,58,237,0.08)"><i data-lucide="upload-cloud" style="width:22px;height:22px;color:#7C3AED"></i></div>
         <h3 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">Admin Document Attachments</h3>
         <p class="text-sm leading-relaxed" style="color:#5C5C5C">Staff can upload supporting documents (PDFs, forms) directly to Supabase Storage from the grant form — drag-and-drop or file picker, with a full audit trail in the activity log.</p>
        </div>
        <div class="card rounded-2xl p-6" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background:rgba(5,150,105,0.08)"><i data-lucide="pie-chart" style="width:22px;height:22px;color:#059669"></i></div>
         <h3 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">Outcome Analytics</h3>
         <p class="text-sm leading-relaxed" style="color:#5C5C5C">Acceptance rates, total funding secured, and placement outcomes are calculated automatically from live data — charts are ready for leadership reporting without manual aggregation.</p>
        </div>
        <div class="card rounded-2xl p-6" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background:rgba(30,58,95,0.08)"><i data-lucide="shield" style="width:22px;height:22px;color:#1E3A5F"></i></div>
         <h3 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">Row Level Security</h3>
         <p class="text-sm leading-relaxed" style="color:#5C5C5C">Every table is protected by Supabase RLS — public read, admin write. The anon key is safely exposed in the client; the service_role key never touches frontend code.</p>
        </div>
        <div class="card rounded-2xl p-6" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background:rgba(139,115,85,0.08)"><i data-lucide="zap" style="width:22px;height:22px;color:#8B7355"></i></div>
         <h3 class="font-heading font-semibold text-base mb-2" style="color:#1C1C1E">Realtime Updates</h3>
         <p class="text-sm leading-relaxed" style="color:#5C5C5C">Supabase Realtime subscriptions push INSERT / UPDATE / DELETE events from the grants table to every connected client instantly — no polling, no page refresh required.</p>
        </div>
       </div>
       <div class="flex flex-wrap gap-4">
        <button onclick="goToPage('web-dashboard-grants')" class="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all" style="background:#064E3B;color:#fff;border:none;cursor:pointer" onmouseover="this.style.background='#065F46'" onmouseout="this.style.background='#064E3B'">
         <i data-lucide="layout-dashboard" style="width:15px;height:15px"></i>
         View Dashboard Details
        </button>
        <button onclick="goToPage('engagement')" class="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all" style="background:transparent;color:#064E3B;border:1.5px solid rgba(6,78,59,0.3);cursor:pointer" onmouseover="this.style.borderColor='rgba(6,78,59,0.6)'" onmouseout="this.style.borderColor='rgba(6,78,59,0.3)'">
         <i data-lucide="arrow-left" style="width:15px;height:15px"></i>
         Back to Intl. Education
        </button>
       </div>
      </div>
     </div>

     <!-- Physical Layer -->
     <div style="padding:64px 24px;background:#FAFAF8;border-top:1px solid rgba(28,28,30,0.07)">
      <div class="max-w-6xl mx-auto">
       <div class="flex items-center gap-3 mb-10"><span class="accent-line"></span><span class="label-small">Physical System</span></div>
       <h2 class="font-heading font-bold text-3xl mb-4" style="color:#1C1C1E">Beyond the Dashboard — The Physical Workflow</h2>
       <p class="text-base max-w-3xl mb-10" style="color:#5C5C5C;line-height:1.75">A dashboard alone does not move a student from interest to application. The physical layer of this system ensures students at PCU are actively informed, supported, and guided through each grant cycle — not just pointed to a website.</p>
       <div class="grid md:grid-cols-2 gap-6">
        <div class="card rounded-2xl overflow-hidden" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="p-5 border-b" style="border-color:rgba(28,28,30,0.07);background:rgba(6,78,59,0.03)">
          <div class="flex items-center gap-3"><div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background:rgba(6,78,59,0.1)"><i data-lucide="megaphone" style="width:16px;height:16px;color:#064E3B"></i></div><h3 class="font-heading font-semibold" style="color:#1C1C1E">Informing Students</h3></div>
         </div>
         <div class="p-5">
          <p class="text-sm leading-relaxed" style="color:#5C5C5C">Grant briefing sessions, printed opportunity guides, and targeted outreach to eligible faculties — ensuring students at PCU know what is available before deadlines pass.</p>
         </div>
        </div>
        <div class="card rounded-2xl overflow-hidden" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="p-5 border-b" style="border-color:rgba(28,28,30,0.07);background:rgba(6,78,59,0.03)">
          <div class="flex items-center gap-3"><div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background:rgba(217,119,6,0.1)"><i data-lucide="clipboard-list" style="width:16px;height:16px;color:#D97706"></i></div><h3 class="font-heading font-semibold" style="color:#1C1C1E">Maintaining Records</h3></div>
         </div>
         <div class="p-5">
          <p class="text-sm leading-relaxed" style="color:#5C5C5C">A physical archive of grant documentation, applicant records, and outcome reports — maintained in coordination with the digital dashboard to create a redundant, complete institutional record.</p>
         </div>
        </div>
        <div class="card rounded-2xl overflow-hidden" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="p-5 border-b" style="border-color:rgba(28,28,30,0.07);background:rgba(6,78,59,0.03)">
          <div class="flex items-center gap-3"><div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background:rgba(124,58,237,0.1)"><i data-lucide="users" style="width:16px;height:16px;color:#7C3AED"></i></div><h3 class="font-heading font-semibold" style="color:#1C1C1E">Guiding Applications</h3></div>
         </div>
         <div class="p-5">
          <p class="text-sm leading-relaxed" style="color:#5C5C5C">In-person advising sessions, document checklist walkthroughs, and application review support — making sure students submit complete, competitive applications rather than navigating the process alone.</p>
         </div>
        </div>
        <div class="card rounded-2xl overflow-hidden" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="p-5 border-b" style="border-color:rgba(28,28,30,0.07);background:rgba(6,78,59,0.03)">
          <div class="flex items-center gap-3"><div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background:rgba(5,150,105,0.1)"><i data-lucide="check-circle" style="width:16px;height:16px;color:#059669"></i></div><h3 class="font-heading font-semibold" style="color:#1C1C1E">Executing Placements</h3></div>
         </div>
         <div class="p-5">
          <p class="text-sm leading-relaxed" style="color:#5C5C5C">Post-selection coordination with partner institutions and funding bodies — ensuring accepted students are placed, onboarded, and supported through the start of their grant period.</p>
         </div>
        </div>
       </div>
      </div>
     </div>
    `;
  if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', function() {
  intlGrantsInitPage();
});
