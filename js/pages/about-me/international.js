function internationalInitPage() {
  var el = document.getElementById('page-international');
  if (!el) return;
  el.innerHTML = `
     <div class="max-w-6xl mx-auto px-6">
      <button onclick="goToPage('about-overview')" class="flex items-center gap-2 mb-6" style="color:#1E3A5F"><i data-lucide="arrow-left" style="width:16px;height:16px"></i> Back</button>
      <div class="flex items-center gap-3 mb-4"><span class="accent-line"></span> <span class="text-sm font-semibold" style="color:#1E3A5F">Global Experience</span>
      </div>
      <h1 class="font-heading font-bold text-4xl mb-2" style="color:#1C1C1E">International Exposure</h1>
      <p class="text-lg mb-12" style="color:#5C5C5C">Real-world experience bridging institutions, students, and cultures</p>
      <div class="grid md:grid-cols-3 gap-6 mb-12">
       <div class="card p-6 text-center">
        <p class="font-heading font-bold text-4xl mb-2" style="color:#1E3A5F">200+</p>
        <p style="color:#5C5C5C">International Students Supported</p>
       </div>
       <div class="card p-6 text-center">
        <p class="font-heading font-bold text-4xl mb-2" style="color:#4A6B8A">30+</p>
        <p style="color:#5C5C5C">Institutional Partners (PCU Network)</p>
       </div>
       <div class="card p-6 text-center">
        <p class="font-heading font-bold text-4xl mb-2" style="color:#8B7355">25+</p>
        <p style="color:#5C5C5C">MoU/MoA Agreements Reviewed Monthly</p>
       </div>
      </div>
      <h3 class="font-heading font-bold text-2xl mb-6" style="color:#1C1C1E">Stakeholder &amp; Regional Experience</h3>
      <div class="space-y-4">
       <div class="card p-6" style="background:rgba(30,58,95,0.05);border-left:4px solid #1E3A5F">
        <p class="font-semibold mb-2" style="color:#1C1C1E">Southeast Asia</p>
        <p style="color:#5C5C5C">Core focus region across both PCU and Airlangga Global Engagement — coordinating with universities, immigration authorities, and government bodies across Indonesia and ASEAN partner nations.</p>
       </div>
       <div class="card p-6" style="background:rgba(74,107,138,0.05);border-left:4px solid #4A6B8A">
        <p class="font-semibold mb-2" style="color:#1C1C1E">East Asia &amp; Pacific</p>
        <p style="color:#5C5C5C">Exchange programs and MoU coordination with partner institutions in Australia, Japan, South Korea, and other Indo-Pacific nations.</p>
       </div>
       <div class="card p-6" style="background:rgba(139,115,85,0.05);border-left:4px solid #8B7355">
        <p class="font-semibold mb-2" style="color:#1C1C1E">Europe &amp; Americas</p>
        <p style="color:#5C5C5C">Institutional partnerships facilitated through PCU's global network and Airlangga's exchange programs, spanning European and North American universities.</p>
       </div>
       <div class="card p-6" style="background:rgba(139,115,85,0.05);border-left:4px solid #8B7355">
        <p class="font-semibold mb-2" style="color:#1C1C1E">Multi-Stakeholder Coordination</p>
        <p style="color:#5C5C5C">Direct experience working with 10+ stakeholder types — faculties, hospitals, banks, immigration authorities, government scholarship bodies (KNB &amp; TIAS), and vendor networks.</p>
       </div>
      </div>
     </div>
    `;
  if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', function() {
  internationalInitPage();
});
