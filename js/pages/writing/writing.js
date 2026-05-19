function writingInitPage() {
  var el = document.getElementById('page-writing');
  if (!el) return;
  el.innerHTML = `
    <div style="padding:64px 24px 48px;border-bottom:1px solid rgba(28,28,30,0.07)">
     <div class="max-w-5xl mx-auto">
      <button onclick="goToPage('home')" class="flex items-center gap-2 mb-10 text-sm" style="color:#9A9A9A"><i data-lucide="arrow-left" style="width:16px;height:16px"></i> Back</button>
      <div class="flex items-center gap-3 mb-6"><span class="accent-line"></span><span class="label-small">Writing</span></div>
      <h1 class="font-heading font-bold text-5xl mb-4" style="color:#1C1C1E;line-height:1.05">Ideas, Reflections<br><em style="color:#8B7355">& Perspectives</em></h1>
      <p class="text-base leading-relaxed max-w-2xl" style="color:#5C5C5C">A digital journal — essays, reflections, and insights on international education, leadership, systems thinking, digital craft, and the intersections between them.</p>
     </div>
    </div>
    <!-- Category filter -->
    <div style="padding:32px 24px;background:#F2ECE4;border-bottom:1px solid rgba(28,28,30,0.07)">
     <div class="max-w-5xl mx-auto flex flex-wrap gap-2">
      <button onclick="filterArticles('all')" class="writing-filter skill-tag selected" data-category="all">All Writing</button>
      <button onclick="filterArticles('intl-education')" class="writing-filter skill-tag cat-education" data-category="intl-education">International Education</button>
      <button onclick="filterArticles('leadership')" class="writing-filter skill-tag cat-leadership" data-category="leadership">Leadership &amp; Systems</button>
      <button onclick="filterArticles('digital')" class="writing-filter skill-tag cat-tech" data-category="digital">Digital &amp; Creative</button>
      <button onclick="filterArticles('reflections')" class="writing-filter skill-tag cat-creative" data-category="reflections">Reflections</button>
     </div>
    </div>
    <!-- Articles grid -->
    <div style="padding:64px 24px" id="articles-container">
     <div class="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="articles-grid">
      <!-- Article 1 -->
      <div class="article-card card p-7 rounded-xl cursor-pointer" data-category="intl-education" onclick="openArticle('digital-transformation')">
       <div class="label-small mb-3" style="color:#4A6B8A">International Education</div>
       <h3 class="font-heading font-semibold text-lg mb-3 leading-snug" style="color:#1C1C1E">Digital Transformation in International Offices</h3>
       <p class="text-sm leading-relaxed mb-5" style="color:#5C5C5C">How higher education institutions can leverage digital systems to improve partnership management, student support, and global mobility operations.</p>
       <div class="flex flex-wrap gap-2 mb-5">
        <span class="tag">Leadership</span><span class="tag">Internationalization</span><span class="tag">Digital Systems</span>
       </div>
       <div class="flex items-center justify-between">
        <span class="label-small">8 min read</span>
        <span class="label-small">May 2025</span>
       </div>
      </div>
      <!-- Article 2 -->
      <div class="article-card card p-7 rounded-xl cursor-pointer" data-category="leadership" onclick="openArticle('systems-thinking')">
       <div class="label-small mb-3" style="color:#1E3A5F">Leadership &amp; Systems</div>
       <h3 class="font-heading font-semibold text-lg mb-3 leading-snug" style="color:#1C1C1E">Systems Thinking as a Leadership Lens</h3>
       <p class="text-sm leading-relaxed mb-5" style="color:#5C5C5C">Why understanding interconnected systems — not just individual tasks — is the core competency of effective leaders in international education and beyond.</p>
       <div class="flex flex-wrap gap-2 mb-5">
        <span class="tag">Leadership</span><span class="tag">Systems Thinking</span><span class="tag">Strategy</span>
       </div>
       <div class="flex items-center justify-between">
        <span class="label-small">6 min read</span>
        <span class="label-small">April 2025</span>
       </div>
      </div>
      <!-- Article 3 -->
      <div class="article-card card p-7 rounded-xl cursor-pointer" data-category="digital" onclick="openArticle('editorial-design')">
       <div class="label-small mb-3" style="color:#4A5235">Digital &amp; Creative</div>
       <h3 class="font-heading font-semibold text-lg mb-3 leading-snug" style="color:#1C1C1E">Editorial Design in the Age of Digital Noise</h3>
       <p class="text-sm leading-relaxed mb-5" style="color:#5C5C5C">A reflection on why editorial principles — restraint, hierarchy, and intentionality — are more valuable than ever in digital design.</p>
       <div class="flex flex-wrap gap-2 mb-5">
        <span class="tag">UI/UX Design</span><span class="tag">Creative Direction</span><span class="tag">Typography</span>
       </div>
       <div class="flex items-center justify-between">
        <span class="label-small">5 min read</span>
        <span class="label-small">March 2025</span>
       </div>
      </div>
      <!-- Article 4 -->
      <div class="article-card card p-7 rounded-xl cursor-pointer" data-category="intl-education" onclick="openArticle('student-experience')">
       <div class="label-small mb-3" style="color:#4A6B8A">International Education</div>
       <h3 class="font-heading font-semibold text-lg mb-3 leading-snug" style="color:#1C1C1E">Designing the International Student Experience</h3>
       <p class="text-sm leading-relaxed mb-5" style="color:#5C5C5C">Moving beyond logistics — how universities can create meaningful, memorable experiences for international students through thoughtful systems and human-centered design.</p>
       <div class="flex flex-wrap gap-2 mb-5">
        <span class="tag">Student Support</span><span class="tag">Student Mobility</span><span class="tag">UX</span>
       </div>
       <div class="flex items-center justify-between">
        <span class="label-small">7 min read</span>
        <span class="label-small">February 2025</span>
       </div>
      </div>
      <!-- Article 5 -->
      <div class="article-card card p-7 rounded-xl cursor-pointer" data-category="reflections" onclick="openArticle('multidisciplinary')">
       <div class="label-small mb-3" style="color:#6B4F32">Reflections</div>
       <h3 class="font-heading font-semibold text-lg mb-3 leading-snug" style="color:#1C1C1E">On Being Multidisciplinary in a Specialized World</h3>
       <p class="text-sm leading-relaxed mb-5" style="color:#5C5C5C">Navigating the tension between depth and breadth — and why I believe multidisciplinary thinkers are uniquely positioned for the future.</p>
       <div class="flex flex-wrap gap-2 mb-5">
        <span class="tag">Identity</span><span class="tag">Career</span><span class="tag">Philosophy</span>
       </div>
       <div class="flex items-center justify-between">
        <span class="label-small">5 min read</span>
        <span class="label-small">January 2025</span>
       </div>
      </div>
      <!-- Article 6 -->
      <div class="article-card card p-7 rounded-xl cursor-pointer" data-category="leadership" onclick="openArticle('partnership-strategy')">
       <div class="label-small mb-3" style="color:#1E3A5F">Leadership &amp; Systems</div>
       <h3 class="font-heading font-semibold text-lg mb-3 leading-snug" style="color:#1C1C1E">Building Global Partnerships That Actually Work</h3>
       <p class="text-sm leading-relaxed mb-5" style="color:#5C5C5C">From MoU signing ceremonies to genuine institutional collaboration — what distinguishes performative partnerships from transformative ones.</p>
       <div class="flex flex-wrap gap-2 mb-5">
        <span class="tag">International Partnership</span><span class="tag">Strategy</span><span class="tag">Leadership</span>
       </div>
       <div class="flex items-center justify-between">
        <span class="label-small">9 min read</span>
        <span class="label-small">December 2024</span>
       </div>
      </div>
     </div>
    </div>
   `;
  if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', function() {
  writingInitPage();
});
