# Portfolio Demo — Setup Guide

This is a live demo of the portfolio website template. All names, institutions, and contact details are fictional placeholders. Backends are intentionally unconfigured so you can try the UI without any side effects.

Follow the steps below to turn this demo into your real portfolio.

---

## Step 1 — Update Personal Information

Replace the demo content with your real details across the page JS files:

| File | What to update |
|------|---------------|
| `js/pages/home/home.js` | Name, tagline, hero text, stats |
| `js/pages/about-me/about-me-overview.js` | Bio, skills, overview |
| `js/pages/about-me/experience.js` | Job titles, employers, dates, bullet points |
| `js/pages/about-me/education.js` | Degrees, institutions, years |
| `js/pages/about-me/expertise.js` | Skill areas |
| `js/pages/about-me/international.js` | International exposure |
| `js/pages/contact-me/contact-me.js` | Email, LinkedIn URL, WhatsApp number, city |
| `index.html` | `<title>`, meta description, Open Graph tags, JSON-LD Person block, footer copyright |

---

## Step 2 — Configure Supabase (CMS / Admin Panel)

The admin panel lets you edit content inline directly in the browser. Without Supabase the site is fully static — great for a quick deploy.

1. Create a free account at **https://supabase.com**
2. Create a new project (choose the region closest to your users)
3. Go to **Project Settings → API** and copy:
   - **Project URL** (looks like `https://xxxx.supabase.co`)
   - **anon / public key** (starts with `eyJ…`)
4. Open the SQL editor in your Supabase project and run the migration:
   ```
   supabase/migrations/001_initial_schema.sql
   ```
5. Create an auth user (your admin login):
   - Go to **Authentication → Users → Invite user**
   - Use the email you want as your admin login
6. Open `js/config.js` and fill in the values:
   ```js
   window.APP_CONFIG = {
     SUPABASE_URL: 'https://YOUR-PROJECT.supabase.co',
     SUPABASE_ANON_KEY: 'eyJ...',
     ADMIN_EMAIL: 'your@email.com',
     FORMSPREE_ENDPOINT: '',   // configure in Step 3
   };
   ```

---

## Step 3 — Configure Formspree (Contact Form)

1. Create a free account at **https://formspree.io**
2. Click **New Form**, give it a name, and set the notification email
3. Copy the form endpoint URL — it looks like `https://formspree.io/f/xxxxxxxx`
4. Add it to `js/config.js`:
   ```js
   FORMSPREE_ENDPOINT: 'https://formspree.io/f/xxxxxxxx',
   ```

Once configured, form submissions will be emailed to you directly. The form falls back to a `mailto:` link when the endpoint is empty (current demo behavior).

---

## Step 4 — Replace Images

Swap the placeholder images in `assets/images/` with your own photos:

| Folder | Content |
|--------|---------|
| `assets/images/self-portrait/` | Profile photos |
| `assets/images/amerta/` | AMERTA program photos |
| `assets/images/aci/` | ACI program photos |
| `assets/images/aero/` | AERO exhibition photos |
| `assets/images/student-services/` | Student services photos |

Keep the same filenames so existing references continue to work, or do a find-and-replace in the JS files.

---

## Step 5 — Remove the Demo Banner

Once you're happy with your content, remove the demo banner by deleting one line from `index.html`:

```html
<!-- Remove this line: -->
<script src="./js/demo.js"></script>
```

---

## Step 6 — Deploy

The site is a static SPA — deploy anywhere that serves static files:

- **Vercel** (recommended): `vercel --prod`
- **Netlify**: drag-and-drop the project folder
- **GitHub Pages**: push to a `gh-pages` branch

Make sure to set the correct domain in `index.html` meta tags and update the Supabase project's allowed redirect URLs.

---

## Quick Checklist

- [ ] Personal info replaced in all page JS files
- [ ] `index.html` title, meta, and footer updated
- [ ] Profile photo added to `assets/images/self-portrait/`
- [ ] Supabase project created and migration run
- [ ] `js/config.js` filled in with real credentials
- [ ] Formspree form created and endpoint added
- [ ] All project images replaced
- [ ] Demo banner script removed from `index.html`
- [ ] Site deployed and custom domain configured
