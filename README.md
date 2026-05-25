# Portfolio Website — Demo Version

This is a **demo build** of the portfolio website template. All names, institutions, programs, and contact details are fictional placeholders. Backends (Supabase, Formspree) are intentionally unconfigured.

For setup instructions see [DEMO-SETUP.md](DEMO-SETUP.md) (content customisation) and [SETUP.md](SETUP.md) (Supabase admin backend).

---

## Overview

A single-page application with an editorial premium aesthetic, organised into five canonical sections:

- **About** — Overview, education, international exposure, professional values, expertise, experience, and skillset
- **Projects** — NEXUS (Exchange Program), CONNECT (Cultural Immersion), HORIZON (Exhibition), NGU Global (Web Project)
- **Intl. Ed** — Student onboarding & support, student engagement (with detail view), partnership development (with detail view), MoU/MoA coordination (with detail view), and international grants
- **Creative** — CroissantsMoon (boutique studio identity), Writing, Web Development, Graphic Design
- **Contact** — Contact information

The home page also hosts the Skill Discovery entry point, where visitors filter work by skill area, plus a calendar widget showing published articles and upcoming events.

## Features

- **Public site** — read-only portfolio served as static files (works on GitHub Pages, Vercel, Netlify).
- **Admin mode** — a single authenticated admin (gated by Supabase Row Level Security) can:
  - Write, edit, and publish articles via a Quill 2.x WYSIWYG editor (stored as Delta JSON + rendered HTML).
  - Add, edit, and delete calendar events shown on the home and MoU/MoA pages.
  - Inline-edit headings, paragraphs, and CTAs across the site.
- **Contact form** — powered by Formspree; falls back to `mailto:` when unconfigured.
- Sign-in opens via the `···` button in the top-right or `Ctrl/Cmd + Shift + A`.

## Tech Stack

- HTML5, CSS3
- [Tailwind CSS](https://tailwindcss.com/) v3.4 (CDN)
- [Lucide Icons](https://lucide.dev/) v0.263 (CDN)
- [Quill](https://quilljs.com/) v2.0.2 (CDN) — WYSIWYG editor for articles
- [Supabase](https://supabase.com/) — auth, Postgres, storage, and Row Level Security
- [Formspree](https://formspree.io/) — contact form backend
- Vanilla JavaScript (no framework, no build step)
- Google Fonts: Plus Jakarta Sans, DM Sans

## Project Structure

```
├── index.html              # Entry point and nav
├── 404.html                # Custom 404 page
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Crawler directives
├── DEMO-SETUP.md           # Content customisation guide
├── SETUP.md                # Supabase admin backend setup
├── css/
│   └── styles.css          # Custom styles
├── js/
│   ├── main.js             # Page routing and shared logic
│   ├── auth.js             # Sign in/out, admin gating
│   ├── config.js           # App config (fill in your credentials — gitignored)
│   ├── config.example.js   # Template reference
│   ├── demo.js             # Demo mode banner (remove when going live)
│   ├── supabase-client.js  # Initialises window.sb
│   ├── inline-edit.js      # Click-to-edit headings/paragraphs/CTAs
│   ├── components/
│   │   ├── admin-banner.js
│   │   ├── calendar.js
│   │   ├── event-modal.js
│   │   ├── login-modal.js
│   │   ├── quill-editor.js
│   │   └── tiptap-editor.js
│   └── pages/
│       ├── home/home.js
│       ├── about-me/
│       │   ├── about-me-overview.js
│       │   ├── education.js
│       │   ├── experience.js
│       │   ├── expertise.js
│       │   ├── international.js
│       │   ├── skillset.js
│       │   └── values.js
│       ├── contact-me/contact-me.js
│       ├── creative-services/
│       │   ├── croissantsmoon.js
│       │   ├── graphic-designs.js
│       │   ├── web-projects.js
│       │   └── websites.js
│       ├── global-partnership/
│       │   ├── mou-detail.js
│       │   ├── mou-moa-coordination.js
│       │   ├── partnership-detail.js
│       │   └── partnership-development.js
│       ├── project-management/
│       │   ├── aci.js
│       │   ├── aero.js
│       │   ├── amerta.js
│       │   ├── pcu-global.js
│       │   └── project-management-overview.js
│       ├── skill-discovery/skill-discovery.js
│       ├── student-services/
│       │   ├── intl-grants.js
│       │   ├── student-engagement-detail.js
│       │   ├── student-engagement-initiatives.js
│       │   └── student-onboarding-orientation.js
│       └── writing/
│           ├── article-editor.js
│           ├── article-view.js
│           └── writing.js
├── assets/
│   ├── images/             # Section images (replace with your own)
│   ├── graphics/           # Decorative graphics and icons
│   └── data/               # Program data files
└── supabase/
    └── migrations/
        └── 001_initial_schema.sql
```

## Running Locally

The site is static — no build step required. Serve it with:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Quick Start (Demo → Production)

1. Replace demo content in `js/pages/` files with your real information (see [DEMO-SETUP.md](DEMO-SETUP.md))
2. Create a Supabase project and run `supabase/migrations/001_initial_schema.sql`
3. Copy `js/config.example.js` to `js/config.js` and fill in your Supabase URL, anon key, admin email, and Formspree endpoint
4. Replace images in `assets/images/` with your own photos
5. Update meta tags, Open Graph tags, and the JSON-LD block in `index.html`
6. Update `sitemap.xml` with your real domain
7. Remove `<script src="./js/demo.js"></script>` from `index.html`
8. Deploy to Vercel, Netlify, or GitHub Pages

See [SETUP.md](SETUP.md) for the full Supabase admin backend guide.
