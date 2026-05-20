function valuesInitPage() {
  var el = document.getElementById('page-values');
  if (!el) return;
  el.innerHTML = `
     <div class="max-w-6xl mx-auto px-6">
      <button onclick="goToPage('about-overview')" class="flex items-center gap-2 mb-6" style="color:#1E3A5F"><i data-lucide="arrow-left" style="width:16px;height:16px"></i> Back</button>
      <div class="flex items-center gap-3 mb-4"><span class="accent-line"></span> <span class="text-sm font-semibold" style="color:#1E3A5F" data-edit-key="values_hero_eyebrow">Core Values</span>
      </div>
      <h1 class="font-heading font-bold text-4xl mb-2" style="color:#1C1C1E" data-edit-key="values_hero_title">Professional Values</h1>
      <p class="text-lg mb-12" style="color:#5C5C5C" data-edit-key="values_hero_tagline">Principles that guide my work and decisions in international education</p>
      <div class="grid md:grid-cols-2 gap-6">
       <div class="card p-8">
        <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background:rgba(30,58,95,0.08)"><i data-lucide="target" style="width:24px;height:24px;color:#1E3A5F"></i>
        </div>
        <h3 class="font-heading font-bold text-lg mb-3" style="color:#1C1C1E">Excellence &amp; Quality</h3>
        <p style="color:#5C5C5C">Commitment to highest standards in program design, partnership development, and student support. Every initiative reflects institutional pride and global best practices.</p>
       </div>
       <div class="card p-8">
        <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background:rgba(74,107,138,0.08)"><i data-lucide="users" style="width:24px;height:24px;color:#4A6B8A"></i>
        </div>
        <h3 class="font-heading font-bold text-lg mb-3" style="color:#1C1C1E">Inclusivity &amp; Equity</h3>
        <p style="color:#5C5C5C">Belief that international education should be accessible to all students, regardless of background. Advocate for equitable access and diverse representation.</p>
       </div>
       <div class="card p-8">
        <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background:rgba(139,115,85,0.08)"><i data-lucide="lightbulb" style="width:24px;height:24px;color:#8B7355"></i>
        </div>
        <h3 class="font-heading font-bold text-lg mb-3" style="color:#1C1C1E">Innovation &amp; Adaptability</h3>
        <p style="color:#5C5C5C">Embrace change and seek new approaches to education and partnership. Continuously learn, adapt to emerging trends, and pioneer solutions.</p>
       </div>
       <div class="card p-8">
        <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background:rgba(139,115,85,0.08)"><i data-lucide="handshake" style="width:24px;height:24px;color:#8B7355"></i>
        </div>
        <h3 class="font-heading font-bold text-lg mb-3" style="color:#1C1C1E">Collaboration &amp; Integrity</h3>
        <p style="color:#5C5C5C">Build partnerships on trust, transparency, and mutual benefit. Operate with honesty and ethical commitment in all institutional relationships.</p>
       </div>
       <div class="card p-8">
        <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background:rgba(74,107,138,0.08)"><i data-lucide="globe" style="width:24px;height:24px;color:#4A6B8A"></i>
        </div>
        <h3 class="font-heading font-bold text-lg mb-3" style="color:#1C1C1E">Global Citizenship</h3>
        <p style="color:#5C5C5C">Foster cross-cultural understanding and respect for diverse perspectives. Empower students to become engaged global citizens contributing to a better world.</p>
       </div>
       <div class="card p-8">
        <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background:rgba(139,115,85,0.08)"><i data-lucide="zap" style="width:24px;height:24px;color:#8B7355"></i>
        </div>
        <h3 class="font-heading font-bold text-lg mb-3" style="color:#1C1C1E">Student-Centered Approach</h3>
        <p style="color:#5C5C5C">Every decision prioritizes student success, well-being, and personal growth. Listen to student voices and create supportive environments for learning.</p>
       </div>
      </div>
     </div>
    `;
  if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', function() {
  valuesInitPage();
});
