function contactInitPage() {
  var el = document.getElementById('page-contact');
  if (!el) return;
  el.innerHTML = `
     <div class="max-w-2xl mx-auto px-6"><button onclick="goToPage('home')" class="flex items-center gap-2 mb-12" style="color:#C85A3A"><i data-lucide="arrow-left" style="width:16px;height:16px"></i> Back</button> <!-- Welcome Section -->
      <div class="text-center mb-12">
       <h1 class="font-heading font-bold text-5xl mb-4" style="color:#5A2D2D">Let's Connect</h1>
       <p class="text-lg" style="color:#8B5A5A">Open to connecting with professionals in international education, global mobility, and higher education partnerships. Whether you're exploring collaboration, have a program in mind, or just want to say hello — reach out!</p>
      </div><!-- Contact Form -->
      <div class="card p-8 md:p-12 rounded-2xl mb-12" style="background:#FFFFFF;border:1px solid rgba(200,90,58,0.1);box-shadow:0 4px 20px rgba(200,90,58,0.08)">
       <form id="contact-form" class="space-y-6">
        <div><label for="cf-name" class="text-sm font-semibold block mb-3" style="color:#5A2D2D">Full Name</label> <input id="cf-name" type="text" class="w-full px-4 py-3 rounded-lg border text-base focus:outline-none focus:ring-2 transition" style="border-color:#E8D4CC;background:#FFF9F5;color:#5A2D2D" placeholder="Your name" required>
        </div>
        <div><label for="cf-email" class="text-sm font-semibold block mb-3" style="color:#5A2D2D">Email Address</label> <input id="cf-email" type="email" class="w-full px-4 py-3 rounded-lg border text-base focus:outline-none focus:ring-2 transition" style="border-color:#E8D4CC;background:#FFF9F5;color:#5A2D2D" placeholder="your@email.com" required>
        </div>
        <div><label for="cf-subject" class="text-sm font-semibold block mb-3" style="color:#5A2D2D">Subject</label> <input id="cf-subject" type="text" class="w-full px-4 py-3 rounded-lg border text-base focus:outline-none focus:ring-2 transition" style="border-color:#E8D4CC;background:#FFF9F5;color:#5A2D2D" placeholder="What's this about?" required>
        </div>
        <div><label for="cf-msg" class="text-sm font-semibold block mb-3" style="color:#5A2D2D">Message</label> <textarea id="cf-msg" rows="5" class="w-full px-4 py-3 rounded-lg border text-base focus:outline-none focus:ring-2 resize-none transition" style="border-color:#E8D4CC;background:#FFF9F5;color:#5A2D2D" placeholder="Tell me more..." required></textarea>
        </div><button type="submit" class="w-full font-heading font-semibold text-base px-6 py-4 rounded-lg inline-flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-105" style="background:#C85A3A;color:#fff"> <i data-lucide="send" style="width:18px;height:18px"></i> Send Message </button>
        <p id="form-msg" class="text-sm text-center hidden font-semibold" style="color:#C85A3A"></p>
       </form>
      </div><!-- Direct Contact Links -->
      <div class="text-center mb-8">
       <p class="text-sm font-semibold mb-8" style="color:#8B5A5A">Or connect directly through:</p>
       <div class="flex items-center justify-center gap-6 flex-wrap"><!-- Email --> <a href="mailto:zefanya.kharisma@gmail.com" class="group flex flex-col items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:scale-110" style="background:rgba(200,90,58,0.08)">
         <div class="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300" style="background:#C85A3A;color:#fff"><i data-lucide="mail" style="width:24px;height:24px"></i>
         </div><span class="text-xs font-semibold text-center" style="color:#5A2D2D">Email</span> </a> <!-- LinkedIn --> <a href="https://www.linkedin.com/in/zefanyakharisma" target="_blank" rel="noopener noreferrer" class="group flex flex-col items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:scale-110" style="background:rgba(200,90,58,0.08)">
         <div class="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300" style="background:#C85A3A;color:#fff"><i data-lucide="linkedin" style="width:24px;height:24px"></i>
         </div><span class="text-xs font-semibold text-center" style="color:#5A2D2D">LinkedIn</span> </a> <!-- WhatsApp --> <a href="https://wa.me/6282139619570" target="_blank" rel="noopener noreferrer" class="group flex flex-col items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:scale-110" style="background:rgba(200,90,58,0.08)">
         <div class="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300" style="background:#C85A3A;color:#fff"><i data-lucide="message-circle" style="width:24px;height:24px"></i>
         </div><span class="text-xs font-semibold text-center" style="color:#5A2D2D">WhatsApp</span> </a> <!-- Location -->
        <div class="flex flex-col items-center gap-3 p-4 rounded-xl" style="background:rgba(200,90,58,0.08)">
         <div class="w-12 h-12 rounded-full flex items-center justify-center" style="background:#C85A3A;color:#fff"><i data-lucide="map-pin" style="width:24px;height:24px"></i>
         </div><span class="text-xs font-semibold text-center" style="color:#5A2D2D">Surabaya<br>
          East Java, Indonesia</span>
        </div>
       </div>
      </div><!-- Response Time Info -->
      <div class="text-center p-6 rounded-xl" style="background:rgba(200,90,58,0.05);border:1px solid rgba(200,90,58,0.1)">
       <p class="text-sm" style="color:#8B5A5A"><i data-lucide="clock" style="width:16px;height:16px;display:inline;margin-right:8px;vertical-align:middle"></i> I typically respond within 24-48 hours. Looking forward to connecting with you!</p>
      </div>
     </div>
    `;
  if (window.lucide) lucide.createIcons();
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.getElementById('form-msg');
      msg.textContent = '✓ Message sent! I\'ll get back to you soon.';
      msg.classList.remove('hidden');
      e.target.reset();
      setTimeout(function () { msg.classList.add('hidden'); }, 4000);
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  contactInitPage();
});
