function educationInitPage() {
  var el = document.getElementById('page-education');
  if (!el) return;
  el.innerHTML = `
     <div class="max-w-6xl mx-auto px-6">
      <button onclick="goToPage('about-overview')" class="flex items-center gap-2 mb-6" style="color:#1E3A5F"><i data-lucide="arrow-left" style="width:16px;height:16px"></i> Back</button>
      <div class="flex items-center gap-3 mb-4"><span class="accent-line"></span> <span class="text-sm font-semibold" style="color:#1E3A5F" data-edit-key="education_hero_eyebrow">Educational Background</span>
      </div>
      <h1 class="font-heading font-bold text-4xl mb-2" style="color:#1C1C1E" data-edit-key="education_hero_title">Academic Foundation</h1>
      <p class="text-lg mb-12" style="color:#5C5C5C" data-edit-key="education_hero_tagline">Education and achievements that shaped my professional expertise</p>
      <div class="space-y-6">
       <div class="card p-8 border-l-4" style="border-color:#1E3A5F">
        <h3 class="font-heading font-bold text-xl mb-1" style="color:#1C1C1E">Bachelor's Degree — International Relations and Affairs</h3>
        <p class="text-sm font-medium mb-3" style="color:#1E3A5F">Universitas Airlangga — July 2020 – March 2024</p>
        <p style="color:#5C5C5C">Focused on international relations theory, foreign policy analysis, and cross-cultural dynamics. Developed research skills through published papers on U.S.–ASEAN economic cooperation and Israel–Abraham Accords diplomacy. Served as Assistant Lecturer in Foreign Policy Analysis and Research Assistant presenting at the 9th ICoCSPA 2023.</p>
       </div>
       <div class="card p-8 border-l-4" style="border-color:#4A6B8A">
        <h3 class="font-heading font-bold text-xl mb-1" style="color:#1C1C1E">High School — Mathematics and Natural Sciences</h3>
        <p class="text-sm font-medium mb-3" style="color:#4A6B8A">SMAN 15 Surabaya — 2017 – 2020</p>
        <p style="color:#5C5C5C">Mathematics and Natural Sciences stream, providing a strong analytical and problem-solving foundation before pursuing international relations at university level.</p>
       </div>
       <div class="card p-8 border-l-4" style="border-color:#8B7355">
        <h3 class="font-heading font-bold text-xl mb-1" style="color:#1C1C1E">Honors &amp; Awards</h3>
        <p class="text-sm font-medium mb-3" style="color:#8B7355">Recognition for innovation and creative communication</p>
        <p style="color:#5C5C5C">🥇 Gold Medalist — World Youth Invention and Innovation Award 2022 &nbsp;·&nbsp; 🥉 Bronze Medalist — Your-K, Your-ASEAN Short Video Contest</p>
       </div>
       <div class="card p-8 border-l-4" style="border-color:#8B7355">
        <h3 class="font-heading font-bold text-xl mb-1" style="color:#1C1C1E">Academic Publications</h3>
        <p class="text-sm font-medium mb-3" style="color:#8B7355">Peer-reviewed research in International Relations</p>
        <p style="color:#5C5C5C">Kebijakan Luar Negeri Pro-Israel Amerika Serikat di Pemerintahan Obama &nbsp;·&nbsp; Menelaah Interdependensi Korea Selatan-Tiongkok Akibat THAAD dalam Analisis Neoliberalisme &nbsp;·&nbsp; Israel dan Perjanjian Abraham: Upaya Peningkatan Status Israel dalam Sistem Internasional</p>
       </div>
      </div>
     </div>
    `;
  if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', function() {
  educationInitPage();
});
