function skillDiscoveryInitPage() {
  var el = document.getElementById('page-skill-discovery');
  if (!el) return;
  el.innerHTML = `
    <div style="padding:64px 24px 48px;background:#F2ECE4;border-bottom:1px solid rgba(28,28,30,0.07)">
     <div class="max-w-5xl mx-auto">
      <button onclick="goToPage('home')" class="flex items-center gap-2 mb-10 text-sm" style="color:#767676"><i data-lucide="arrow-left" style="width:16px;height:16px"></i> Back to Home</button>
      <div class="flex items-center gap-3 mb-5"><span class="accent-line"></span><span class="label-small">Skill Discovery</span></div>
      <h1 class="font-heading font-bold text-4xl mb-4" style="color:#1C1C1E">Related Work</h1>
      <p class="text-sm mb-6" style="color:#5C5C5C">Results curated based on your selected skills:</p>
      <div id="selected-skills-display" class="flex flex-wrap gap-2 mb-6"></div>
      <button onclick="goToPage('home')" class="text-sm font-medium" style="color:#8B7355">← Adjust selection</button>
     </div>
    </div>
    <div style="padding:64px 24px" id="discovery-results">
     <div class="max-w-5xl mx-auto">
      <div id="results-grid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-5"></div>
      <div id="no-results" class="text-center py-20 hidden">
       <p class="font-heading text-xl mb-3" style="color:#1C1C1E">No results found</p>
       <p class="text-sm" style="color:#767676">Try selecting different or broader skills.</p>
      </div>
     </div>
    </div>
   `;
  if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', function() {
  skillDiscoveryInitPage();
});
