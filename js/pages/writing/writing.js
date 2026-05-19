function writingInitPage() {
  var el = document.getElementById('page-writing');
  if (!el) return;

  var articles = [
    { id: 'digital-transformation', category: 'International Education', categoryColor: '#4A6B8A', dataCat: 'intl-education', title: 'Digital Transformation in International Offices', desc: 'How higher education institutions can leverage digital systems to improve partnership management, student support, and global mobility operations.', tags: ['Leadership', 'Internationalization', 'Digital Systems'], readTime: '8 min read', date: 'May 2025' },
    { id: 'systems-thinking', category: 'Leadership & Systems', categoryColor: '#1E3A5F', dataCat: 'leadership', title: 'Systems Thinking as a Leadership Lens', desc: 'Why understanding interconnected systems — not just individual tasks — is the core competency of effective leaders in international education and beyond.', tags: ['Leadership', 'Systems Thinking', 'Strategy'], readTime: '6 min read', date: 'April 2025' },
    { id: 'editorial-design', category: 'Digital & Creative', categoryColor: '#4A5235', dataCat: 'digital', title: 'Editorial Design in the Age of Digital Noise', desc: 'A reflection on why editorial principles — restraint, hierarchy, and intentionality — are more valuable than ever in digital design.', tags: ['UI/UX Design', 'Creative Direction', 'Typography'], readTime: '5 min read', date: 'March 2025' },
    { id: 'student-experience', category: 'International Education', categoryColor: '#4A6B8A', dataCat: 'intl-education', title: 'Designing the International Student Experience', desc: 'Moving beyond logistics — how universities can create meaningful, memorable experiences for international students through thoughtful systems and human-centered design.', tags: ['Student Support', 'Student Mobility', 'UX'], readTime: '7 min read', date: 'February 2025' },
    { id: 'multidisciplinary', category: 'Reflections', categoryColor: '#6B4F32', dataCat: 'reflections', title: 'On Being Multidisciplinary in a Specialized World', desc: 'Navigating the tension between depth and breadth — and why I believe multidisciplinary thinkers are uniquely positioned for the future.', tags: ['Identity', 'Career', 'Philosophy'], readTime: '5 min read', date: 'January 2025' },
    { id: 'partnership-strategy', category: 'Leadership & Systems', categoryColor: '#1E3A5F', dataCat: 'leadership', title: 'Building Global Partnerships That Actually Work', desc: 'From MoU signing ceremonies to genuine institutional collaboration — what distinguishes performative partnerships from transformative ones.', tags: ['International Partnership', 'Strategy', 'Leadership'], readTime: '9 min read', date: 'December 2024' }
  ];

  var articleCards = articles.map(function (a) {
    return '<button type="button" class="article-card card p-7 rounded-xl text-left" data-category="' + a.dataCat + '" data-article-id="' + a.id + '" onclick="openArticle(\'' + a.id + '\')" style="background:#fff;border:1px solid rgba(28,28,30,0.08);cursor:pointer;width:100%;font:inherit;color:inherit">' +
      '<div class="flex items-center justify-between mb-3">' +
        '<div class="label-small" style="color:' + a.categoryColor + '">' + a.category + '</div>' +
        '<span style="font-size:.62rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:3px 8px;border-radius:999px;background:rgba(139,115,85,0.1);color:#6B4F32">Draft</span>' +
      '</div>' +
      '<h3 class="font-heading font-semibold text-lg mb-3 leading-snug" style="color:#1C1C1E">' + a.title + '</h3>' +
      '<p class="text-sm leading-relaxed mb-5" style="color:#5C5C5C">' + a.desc + '</p>' +
      '<div class="flex flex-wrap gap-2 mb-5">' +
        a.tags.map(function (t) { return '<span class="tag">' + t + '</span>'; }).join('') +
      '</div>' +
      '<div class="flex items-center justify-between">' +
        '<span class="label-small">' + a.readTime + '</span>' +
        '<span class="label-small">' + a.date + '</span>' +
      '</div>' +
    '</button>';
  }).join('');

  el.innerHTML = `
    <div style="padding:64px 24px 48px;border-bottom:1px solid rgba(28,28,30,0.07)">
     <div class="max-w-5xl mx-auto">
      <a href="#/home" class="inline-flex items-center gap-2 mb-10 text-sm" style="color:#767676;text-decoration:none"><i data-lucide="arrow-left" style="width:16px;height:16px"></i> Back</a>
      <div class="flex items-center gap-3 mb-6"><span class="accent-line"></span><span class="label-small">Writing</span></div>
      <h1 class="font-heading font-bold text-5xl mb-4" style="color:#1C1C1E;line-height:1.05">Ideas, Reflections<br><em style="color:#8B7355">& Perspectives</em></h1>
      <p class="text-base leading-relaxed max-w-2xl" style="color:#5C5C5C">A digital journal — essays, reflections, and insights on international education, leadership, systems thinking, digital craft, and the intersections between them.</p>
      <div class="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full" style="background:rgba(139,115,85,0.08);border:1px solid rgba(139,115,85,0.2)">
       <i data-lucide="pen-tool" style="width:14px;height:14px;color:#6B4F32"></i>
       <span style="font-size:.78rem;color:#6B4F32">Essays are in draft — full pieces publishing soon.</span>
      </div>
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
      ${articleCards}
     </div>
    </div>
   `;
  if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', function() {
  writingInitPage();
});
