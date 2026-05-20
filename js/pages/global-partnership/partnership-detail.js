function partnershipDetailInitPage() {
  var el = document.getElementById('page-partnership-detail');
  if (!el) return;
  el.innerHTML = `
     <div class="max-w-6xl mx-auto px-6"><button onclick="goToPage('partnerships')" class="flex items-center gap-2 mb-8" style="color:#1E3A5F"><i data-lucide="arrow-left" style="width:16px;height:16px"></i> Back to Partnerships</button>
      <div class="mb-12">
       <div class="flex items-center gap-3 mb-4"><span class="accent-line"></span> <span class="text-sm font-semibold" style="color:#1E3A5F" data-edit-key="partnershipdetail_hero_eyebrow">Strategic Collaborations</span>
       </div>
       <h1 class="font-heading font-bold text-4xl mb-3" style="color:#1C1C1E" data-edit-key="partnershipdetail_hero_title">Partnership Development</h1>
       <p class="text-lg max-w-3xl" style="color:#5C5C5C" data-edit-key="partnershipdetail_hero_tagline">Comprehensive approach to building and nurturing strategic academic partnerships that drive institutional excellence and global opportunity</p>
      </div>
      <div class="grid md:grid-cols-2 gap-8 mb-12">
       <div class="card p-8 border-l-4" style="border-color:#1E3A5F">
        <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background:rgba(30,58,95,0.08)"><i data-lucide="search" style="width:24px;height:24px;color:#1E3A5F"></i>
        </div>
        <h3 class="font-heading font-bold text-lg mb-2" style="color:#1C1C1E">Strategic Identification</h3>
        <p style="color:#5C5C5C">Identifying partner institutions aligned with our mission and academic strengths through rigorous evaluation and due diligence</p>
       </div>
       <div class="card p-8 border-l-4" style="border-color:#4A6B8A">
        <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background:rgba(74,107,138,0.08)"><i data-lucide="users" style="width:24px;height:24px;color:#4A6B8A"></i>
        </div>
        <h3 class="font-heading font-bold text-lg mb-2" style="color:#1C1C1E">Engagement &amp; Negotiation</h3>
        <p style="color:#5C5C5C">Building relationships and negotiating terms that benefit both institutions and advance shared educational goals</p>
       </div>
       <div class="card p-8 border-l-4" style="border-color:#8B7355">
        <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background:rgba(139,115,85,0.08)"><i data-lucide="book-open" style="width:24px;height:24px;color:#8B7355"></i>
        </div>
        <h3 class="font-heading font-bold text-lg mb-2" style="color:#1C1C1E">Program Development</h3>
        <p style="color:#5C5C5C">Co-designing exchange programs, research collaborations, and joint curriculum initiatives with partner institutions</p>
       </div>
       <div class="card p-8 border-l-4" style="border-color:#8B7355">
        <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background:rgba(139,115,85,0.08)"><i data-lucide="trending-up" style="width:24px;height:24px;color:#8B7355"></i>
        </div>
        <h3 class="font-heading font-bold text-lg mb-2" style="color:#1C1C1E">Activation &amp; Growth</h3>
        <p style="color:#5C5C5C">Implementing programs, monitoring progress, and fostering long-term partnership growth through continuous engagement</p>
       </div>
      </div>
      <div class="card p-8 mb-8">
       <h2 class="font-heading font-semibold text-2xl mb-6" style="color:#1C1C1E">Partnership Categories</h2>
       <div class="grid md:grid-cols-2 gap-6">
        <div class="space-y-4">
         <div class="p-4 rounded-lg" style="background:rgba(30,58,95,0.05);border-left:4px solid #1E3A5F">
          <p class="font-semibold mb-1" style="color:#1C1C1E">Research Collaborations</p>
          <p class="text-sm" style="color:#5C5C5C">Joint research projects, interdisciplinary initiatives, and scientific partnerships advancing knowledge</p>
         </div>
         <div class="p-4 rounded-lg" style="background:rgba(30,58,95,0.05);border-left:4px solid #1E3A5F">
          <p class="font-semibold mb-1" style="color:#1C1C1E">Student Exchange Programs</p>
          <p class="text-sm" style="color:#5C5C5C">Semester abroad, dual-degree, and degree-level mobility opportunities for students</p>
         </div>
        </div>
        <div class="space-y-4">
         <div class="p-4 rounded-lg" style="background:rgba(30,58,95,0.05);border-left:4px solid #1E3A5F">
          <p class="font-semibold mb-1" style="color:#1C1C1E">Faculty Development</p>
          <p class="text-sm" style="color:#5C5C5C">Teaching capacity, research mentoring, and professional development initiatives</p>
         </div>
         <div class="p-4 rounded-lg" style="background:rgba(30,58,95,0.05);border-left:4px solid #1E3A5F">
          <p class="font-semibold mb-1" style="color:#1C1C1E">Curriculum Development</p>
          <p class="text-sm" style="color:#5C5C5C">Joint program design, curriculum internationalization, and academic innovation</p>
         </div>
        </div>
       </div>
      </div>
     </div>
    `;
  if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', function() {
  partnershipDetailInitPage();
});
