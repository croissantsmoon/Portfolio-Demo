function engagementDetailInitPage() {
  var el = document.getElementById('page-engagement-detail');
  if (!el) return;
  el.innerHTML = `
     <!-- Hero -->
     <div style="background:linear-gradient(160deg,#1C1C1E 0%,#1E3A5F 55%,#2C4A72 100%);padding:clamp(48px,8vh,72px) 24px 0;position:relative;overflow:hidden">
      <div class="absolute inset-0 pointer-events-none" style="background:radial-gradient(ellipse at 85% 20%,rgba(139,115,85,0.18),transparent 55%)"></div>
      <div class="absolute -right-16 -top-16 w-80 h-80 rounded-full pointer-events-none" style="border:1px solid rgba(255,255,255,0.04)"></div>
      <div class="max-w-6xl mx-auto relative z-10">
       <button onclick="goToPage('engagement')" class="flex items-center gap-2 mb-8" style="color:rgba(255,255,255,0.45);font-size:.8rem;font-weight:500"><i data-lucide="arrow-left" style="width:15px;height:15px"></i> Back</button>
       <div class="label-small mb-3" style="color:rgba(255,255,255,0.35);letter-spacing:.12em" data-edit-key="engagementdetail_hero_eyebrow">Cultural Engagement</div>
       <h1 class="font-heading font-bold mb-4" style="font-size:clamp(2rem,5vw,3.5rem);line-height:1.05;color:#fff;letter-spacing:-.02em" data-edit-key="engagementdetail_hero_title">Student Engagement<br><em style="font-style:italic;color:#8B7355">Initiatives</em></h1>
       <p class="max-w-2xl mb-8" style="color:rgba(255,255,255,0.6);font-size:1rem;line-height:1.7" data-edit-key="engagementdetail_hero_tagline">Creating meaningful cultural experiences for international students — through immersion programs, local community engagement, and experiential learning across United States.</p>
       <div class="flex flex-wrap gap-8 pb-8">
        <div><p class="font-heading font-bold text-2xl" style="color:#8B7355">6+</p><p class="label-small" style="color:rgba(255,255,255,0.35)">Programs</p></div>
        <div><p class="font-heading font-bold text-2xl" style="color:#8B7355">5</p><p class="label-small" style="color:rgba(255,255,255,0.35)">Community Partners</p></div>
        <div><p class="font-heading font-bold text-2xl" style="color:#8B7355">120+</p><p class="label-small" style="color:rgba(255,255,255,0.35)">Students/Semester</p></div>
        <div><p class="font-heading font-bold text-2xl" style="color:#8B7355">20+</p><p class="label-small" style="color:rgba(255,255,255,0.35)">Countries</p></div>
       </div>
      </div>
     </div>
     <!-- Content -->
     <div style="padding:72px 24px 72px;background:#FAFAF8">
      <div class="max-w-6xl mx-auto">
      <!-- Cultural Engagement Activities -->
      <div class="mb-20">
       <div class="flex items-center gap-3 mb-3"><span class="accent-line"></span><span class="text-sm font-semibold" style="color:#059669">What I Organized</span></div>
       <h2 class="font-heading font-bold text-3xl mb-4" style="color:#1C1C1E">Cultural Engagement Activities</h2>
       <p class="text-base max-w-3xl mb-10" style="color:#5C5C5C">From city explorations and traditional art shows to community volunteering and peer friendship programs — each activity was designed to deepen students' connection with American culture, people, and ways of life. Click on any card to learn more.</p>
       <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" onclick="openEngagementModal('city-tour')" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="h-1.5" style="background:linear-gradient(90deg,#1E3A5F,#4A6B8A)"></div>
         <div class="p-6">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background:rgba(30,58,95,0.08)"><i data-lucide="map-pin" style="width:24px;height:24px;color:#1E3A5F"></i></div>
          <h3 class="font-heading font-semibold text-lg mb-2" style="color:#1C1C1E">Portland City Tour</h3>
          <p class="text-sm mb-4 leading-relaxed" style="color:#5C5C5C">Guided explorations of Portland's historical landmarks, cultural sites, and local neighborhoods — helping students discover their host city's identity and character.</p>
          <div class="flex items-center gap-1.5" style="color:#1E3A5F"><span class="text-xs font-semibold">View Details</span><i data-lucide="arrow-right" style="width:13px;height:13px"></i></div>
         </div>
        </div>
        <div class="card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" onclick="openEngagementModal('rujak-uleg')" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="h-1.5" style="background:linear-gradient(90deg,#8B7355,#C9A97E)"></div>
         <div class="p-6">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background:rgba(139,115,85,0.08)"><i data-lucide="utensils" style="width:24px;height:24px;color:#8B7355"></i></div>
          <h3 class="font-heading font-semibold text-lg mb-2" style="color:#1C1C1E">Portland International Food Festival</h3>
          <p class="text-sm mb-4 leading-relaxed" style="color:#5C5C5C">Immersive participation in Portland's iconic annual culinary festival — experiencing local food culture, community traditions, and authentic American celebration.</p>
          <div class="flex items-center gap-1.5" style="color:#8B7355"><span class="text-xs font-semibold">View Details</span><i data-lucide="arrow-right" style="width:13px;height:13px"></i></div>
         </div>
        </div>
        <div class="card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" onclick="openEngagementModal('tari-topeng')" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="h-1.5" style="background:linear-gradient(90deg,#7C2D12,#EA580C)"></div>
         <div class="p-6">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background:rgba(124,45,18,0.08)"><i data-lucide="music" style="width:24px;height:24px;color:#EA580C"></i></div>
          <h3 class="font-heading font-semibold text-lg mb-2" style="color:#1C1C1E">Pacific Northwest Traditional Arts Showcase</h3>
          <p class="text-sm mb-4 leading-relaxed" style="color:#5C5C5C">A cultural excursion to witness one of Oregon's most revered traditional performing arts — deepening appreciation for the Pacific Northwest's rich artistic heritage.</p>
          <div class="flex items-center gap-1.5" style="color:#EA580C"><span class="text-xs font-semibold">View Details</span><i data-lucide="arrow-right" style="width:13px;height:13px"></i></div>
         </div>
        </div>
        <div class="card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" onclick="openEngagementModal('seminars')" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="h-1.5" style="background:linear-gradient(90deg,#064E3B,#059669)"></div>
         <div class="p-6">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background:rgba(6,78,59,0.08)"><i data-lucide="landmark" style="width:24px;height:24px;color:#059669"></i></div>
          <h3 class="font-heading font-semibold text-lg mb-2" style="color:#1C1C1E">Government-Led Seminars</h3>
          <p class="text-sm mb-4 leading-relaxed" style="color:#5C5C5C">Facilitating student participation in academic diplomacy and government-organized seminars — building professional networks and deepening institutional engagement.</p>
          <div class="flex items-center gap-1.5" style="color:#059669"><span class="text-xs font-semibold">View Details</span><i data-lucide="arrow-right" style="width:13px;height:13px"></i></div>
         </div>
        </div>
        <div class="card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" onclick="openEngagementModal('volunteering')" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="h-1.5" style="background:linear-gradient(90deg,#4A6B8A,#6B8FAA)"></div>
         <div class="p-6">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background:rgba(74,107,138,0.08)"><i data-lucide="users" style="width:24px;height:24px;color:#4A6B8A"></i></div>
          <h3 class="font-heading font-semibold text-lg mb-2" style="color:#1C1C1E">Volunteering Programs</h3>
          <p class="text-sm mb-3 leading-relaxed" style="color:#5C5C5C">Community engagement creating genuine educational exchange and social impact across partner institutions in Portland and beyond.</p>
          <div class="flex flex-wrap gap-1.5 mb-4">
           <span class="px-2 py-0.5 rounded-full text-xs" style="background:rgba(74,107,138,0.1);color:#4A6B8A">SAIM</span>
           <span class="px-2 py-0.5 rounded-full text-xs" style="background:rgba(74,107,138,0.1);color:#4A6B8A">U-SPEAK</span>
           <span class="px-2 py-0.5 rounded-full text-xs" style="background:rgba(74,107,138,0.1);color:#4A6B8A">Lincoln Middle School</span>
           <span class="px-2 py-0.5 rounded-full text-xs" style="background:rgba(74,107,138,0.1);color:#4A6B8A">Pacific Learning Center</span>
          </div>
          <div class="flex items-center gap-1.5" style="color:#4A6B8A"><span class="text-xs font-semibold">View Details</span><i data-lucide="arrow-right" style="width:13px;height:13px"></i></div>
         </div>
        </div>
        <div class="card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" onclick="openEngagementModal('buddies')" style="border:1px solid rgba(28,28,30,0.08)">
         <div class="h-1.5" style="background:linear-gradient(90deg,#3B0764,#7C3AED)"></div>
         <div class="p-6">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background:rgba(59,7,100,0.08)"><i data-lucide="heart-handshake" style="width:24px;height:24px;color:#7C3AED"></i></div>
          <h3 class="font-heading font-semibold text-lg mb-2" style="color:#1C1C1E">Best Buddies</h3>
          <p class="text-sm mb-4 leading-relaxed" style="color:#5C5C5C">Weaving international and local students together through intercultural friendship, language exchange, and inclusive community events that made campus life feel like home.</p>
          <div class="flex items-center gap-1.5" style="color:#7C3AED"><span class="text-xs font-semibold">View Details</span><i data-lucide="arrow-right" style="width:13px;height:13px"></i></div>
         </div>
        </div>
       </div>
      </div>
      <!-- Cultural Impact Stats -->
      <div class="pt-12 border-t" style="border-color:rgba(28,28,30,0.1)">
       <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div class="text-center">
         <div class="w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto" style="background:rgba(5,150,105,0.08)"><i data-lucide="map" style="width:32px;height:32px;color:#059669"></i></div>
         <p class="font-heading font-bold text-2xl mb-1" style="color:#1C1C1E">6+</p>
         <p class="text-sm" style="color:#5C5C5C">Cultural Engagement Programs</p>
        </div>
        <div class="text-center">
         <div class="w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto" style="background:rgba(139,115,85,0.08)"><i data-lucide="building" style="width:32px;height:32px;color:#8B7355"></i></div>
         <p class="font-heading font-bold text-2xl mb-1" style="color:#1C1C1E">5</p>
         <p class="text-sm" style="color:#5C5C5C">Community Partner Institutions</p>
        </div>
        <div class="text-center">
         <div class="w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto" style="background:rgba(74,107,138,0.08)"><i data-lucide="users" style="width:32px;height:32px;color:#4A6B8A"></i></div>
         <p class="font-heading font-bold text-2xl mb-1" style="color:#1C1C1E">120+</p>
         <p class="text-sm" style="color:#5C5C5C">Students Engaged Per Semester</p>
        </div>
        <div class="text-center">
         <div class="w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto" style="background:rgba(30,58,95,0.08)"><i data-lucide="globe" style="width:32px;height:32px;color:#1E3A5F"></i></div>
         <p class="font-heading font-bold text-2xl mb-1" style="color:#1C1C1E">20+</p>
         <p class="text-sm" style="color:#5C5C5C">Countries Represented in Programs</p>
        </div>
       </div>
      </div>
      </div>
     </div>
    `;
  if (window.lucide) lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', function() {
  engagementDetailInitPage();
});
