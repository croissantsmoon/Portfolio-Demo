// About Me — Experience page
// Add any dynamic behaviour for this page here.

function experienceInitPage() {
  var el = document.getElementById('page-experience');
  if (!el) return;
  el.innerHTML = `
     <div class="max-w-6xl mx-auto px-6">
      <button onclick="goToPage('about-overview')" class="flex items-center gap-2 mb-6" style="color:#1E3A5F"><i data-lucide="arrow-left" style="width:16px;height:16px"></i> Back</button>
      <h1 class="font-heading font-bold text-4xl mb-2" style="color:#1C1C1E" data-edit-key="experience_hero_title">Professional Experience</h1>
      <p class="text-lg mb-12" style="color:#5C5C5C" data-edit-key="experience_hero_tagline">4+ years building international programs and supporting student success across Portland</p>
      <div class="space-y-6">
       <div class="card p-6">
        <div class="flex flex-col md:flex-row md:items-start gap-4">
         <div class="flex-1">
          <h3 class="font-heading font-semibold text-lg mb-1" style="color:#1C1C1E">Director of International Programs</h3>
          <p class="text-sm font-medium mb-2" style="color:#1E3A5F">Northgate University — February 2025–Present</p>
          <ul class="text-sm space-y-1 list-none" style="color:#5C5C5C">
           <li>• Lead team of 8 managing partnerships with 38+ institutions across six continents</li>
           <li>• Oversee 6 exchange programs and $180K annual budget with full accountability to the Provost</li>
           <li>• Established 12 new Asia-Pacific partnerships in first year, expanding student mobility pipeline</li>
           <li>• Drive quarterly strategy reviews with Provost to align international programs with university mission</li>
          </ul>
         </div><span class="tag flex-shrink-0">Current</span>
        </div>
       </div>
       <div class="card p-6">
        <h3 class="font-heading font-semibold text-lg mb-1" style="color:#1C1C1E">International Programs Manager</h3>
        <p class="text-sm font-medium mb-2" style="color:#4A6B8A">Pacific Bridge Institute — July 2023–February 2025 (1 yr 7 mo)</p>
        <ul class="text-sm space-y-1 list-none" style="color:#5C5C5C">
         <li>• Managed 4 exchange programs serving 150+ students annually across partner institutions</li>
         <li>• Coordinated pre-departure orientations and maintained in-country support networks</li>
         <li>• Handled $60K–$120K budgets per cohort, coordinating logistics across 30+ stakeholders</li>
        </ul>
       </div>
       <div class="card p-6">
        <h3 class="font-heading font-semibold text-lg mb-1" style="color:#1C1C1E">Global Engagement Coordinator</h3>
        <p class="text-sm font-medium mb-2" style="color:#4A6B8A">Westbridge University — August 2021–July 2023 (2 years)</p>
        <ul class="text-sm space-y-1 list-none" style="color:#5C5C5C">
         <li>• Supported 80+ international students per semester with accommodation, visa, and healthcare coordination</li>
         <li>• Managed cultural integration initiatives and peer mentorship pairings each intake cycle</li>
         <li>• Designed onboarding curriculum later adopted by 3 partner institutions as a regional best-practice model</li>
        </ul>
       </div>
       <div class="card p-6">
        <h3 class="font-heading font-semibold text-lg mb-1" style="color:#1C1C1E">Teaching Assistant — Global Studies</h3>
        <p class="text-sm font-medium mb-2" style="color:#8B7355">Pacific Coast University — January 2021–May 2022 (1 yr 4 mo)</p>
        <ul class="text-sm space-y-1 list-none" style="color:#5C5C5C">
         <li>• Co-taught introductory Global Studies seminars and graded written submissions for 60+ students</li>
         <li>• Organized visiting scholar lecture series, delivering 6 sessions per semester</li>
        </ul>
       </div>
       <div class="card p-6">
        <h3 class="font-heading font-semibold text-lg mb-1" style="color:#1C1C1E">Research Intern</h3>
        <p class="text-sm font-medium mb-2" style="color:#8B7355">Center for Pacific Affairs — June 2020–December 2020 (7 months)</p>
        <ul class="text-sm space-y-1 list-none" style="color:#5C5C5C">
         <li>• Contributed to APEC trade dynamics policy report published in 2021 by senior research staff</li>
         <li>• Supported senior researchers with data collection, literature review, and citation management</li>
        </ul>
       </div>
      </div>
     </div>
    `;
  if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', function() {
  experienceInitPage();
});
