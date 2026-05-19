// About Me — Experience page
// Add any dynamic behaviour for this page here.

function experienceInitPage() {
  var el = document.getElementById('page-experience');
  if (!el) return;
  el.innerHTML = `
     <div class="max-w-6xl mx-auto px-6">
      <button onclick="goToPage('about-overview')" class="flex items-center gap-2 mb-6" style="color:#1E3A5F"><i data-lucide="arrow-left" style="width:16px;height:16px"></i> Back</button>
      <h1 class="font-heading font-bold text-4xl mb-2" style="color:#1C1C1E">Professional Experience</h1>
      <p class="text-lg mb-12" style="color:#5C5C5C">3+ years building international partnerships and supporting student mobility across Surabaya</p>
      <div class="space-y-6">
       <div class="card p-6">
        <div class="flex flex-col md:flex-row md:items-start gap-4">
         <div class="flex-1">
          <h3 class="font-heading font-semibold text-lg mb-1" style="color:#1C1C1E">International Partnership</h3>
          <p class="text-sm font-medium mb-2" style="color:#1E3A5F">Petra Christian University — March 2026–Present</p>
          <ul class="text-sm space-y-1 list-none" style="color:#5C5C5C">
           <li>• Manage communication with 30+ institutional partners monthly through formal correspondence</li>
           <li>• Review 25 partnership agreements (MoU/MoA) per month for compliance and institutional alignment</li>
           <li>• Facilitate 15+ strategic partnership meetings per month, delivering meeting minutes within 24 hours</li>
           <li>• Initiate collaborations to strengthen PCU's global presence and expand international grant access</li>
          </ul>
         </div><span class="tag flex-shrink-0">Current</span>
        </div>
       </div>
       <div class="card p-6">
        <h3 class="font-heading font-semibold text-lg mb-1" style="color:#1C1C1E">International Mobility &amp; Global Reputation</h3>
        <p class="text-sm font-medium mb-2" style="color:#4A6B8A">Airlangga Global Engagement — September 2025–March 2026 (7 months)</p>
        <ul class="text-sm space-y-1 list-none" style="color:#5C5C5C">
         <li>• Managed 5 end-to-end international exchange programs — promotion, pre-departure, arrival, study period, and post-program completion</li>
         <li>• Led program and budget management of IDR 50–100M per program across 50+ stakeholders</li>
         <li>• Delivered high-quality exchange experiences for 120+ international students per semester</li>
        </ul>
       </div>
       <div class="card p-6">
        <h3 class="font-heading font-semibold text-lg mb-1" style="color:#1C1C1E">International Student &amp; Mobility</h3>
        <p class="text-sm font-medium mb-2" style="color:#4A6B8A">Airlangga Global Engagement — January 2024–September 2025 (1 year 9 months)</p>
        <ul class="text-sm space-y-1 list-none" style="color:#5C5C5C">
         <li>• Provided end-to-end welfare and non-academic support for 100+ international students per semester</li>
         <li>• Covered accommodation, healthcare, insurance, banking, and immigration coordination</li>
         <li>• Coordinated across 10+ stakeholders including faculties, hospitals, banks, and immigration authorities</li>
        </ul>
       </div>
       <div class="card p-6">
        <h3 class="font-heading font-semibold text-lg mb-1" style="color:#1C1C1E">Assistant Lecturer — Foreign Policy Analysis</h3>
        <p class="text-sm font-medium mb-2" style="color:#8B7355">Universitas Airlangga — September 2023–January 2024 (5 months)</p>
        <ul class="text-sm space-y-1 list-none" style="color:#5C5C5C">
         <li>• Co-facilitated Foreign Policy Analysis discussions for undergraduate students, moderating debates</li>
         <li>• Managed grading, scheduling, and administrative coordination for the lead lecturer</li>
        </ul>
       </div>
       <div class="card p-6">
        <h3 class="font-heading font-semibold text-lg mb-1" style="color:#1C1C1E">International Program and Inbound Coordinator</h3>
        <p class="text-sm font-medium mb-2" style="color:#8B7355">Koordinasi Informasi dan Kehumasan FISIP Unair — June 2023–January 2024 (8 months)</p>
        <ul class="text-sm space-y-1 list-none" style="color:#5C5C5C">
         <li>• Coordinated logistics and program delivery for foreign lecturers and visiting students</li>
         <li>• Provided English–Indonesian interpretation at conferences, guest lectures, and company visits</li>
         <li>• Served as primary point of contact for inbound guests across multiple events per semester</li>
        </ul>
       </div>
       <div class="card p-6">
        <h3 class="font-heading font-semibold text-lg mb-1" style="color:#1C1C1E">Research Assistant</h3>
        <p class="text-sm font-medium mb-2" style="color:#8B7355">Universitas Airlangga — May 2023–January 2024 (9 months)</p>
        <ul class="text-sm space-y-1 list-none" style="color:#5C5C5C">
         <li>• Researched U.S.–ASEAN economic cooperation across Biden and Trump administrations; contributed to paper at 9th ICoCSPA 2023</li>
         <li>• Synthesized academic sources on U.S.–China economic dynamics in Southeast Asia into structured research briefs</li>
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
