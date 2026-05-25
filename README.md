# Portfolio Website — Demo Version

This is a **demo build** of the portfolio website template. All names, institutions, programs, and contact details are fictional placeholders. Backends (Supabase, Formspree) are intentionally unconfigured.

For setup instructions, see [DEMO-SETUP.md](DEMO-SETUP.md).

---

## Overview

A single-page application with an editorial premium aesthetic, organized into five canonical sections:

- **About** — Overview, education, international exposure, professional values, expertise, experience, and skillset
- **Projects** — NEXUS (Exchange Program), CONNECT (Cultural Immersion), HORIZON (Exhibition), NGU Global (Web Project)
- **Intl. Ed** — Student onboarding & support, student engagement (with detail view), partnership development (with detail view), MoU/MoA coordination (with detail view), and international grants
- **Creative** — CroissantsMoon (boutique studio identity), Writing, Web Development, Graphic Design
- **Contact** — Contact information

The home page also hosts the Skill Discovery entry point, where visitors filter work by skill area, plus a calendar widget showing published articles and upcoming events.

## Features

- **Public site** — read-only portfolio served as static files (works on GitHub Pages).
- **Admin mode** — a single authenticated admin (gated by Supabase Row Level Security) can:
  - Write, edit, and publish articles via a Quill 2.x WYSIWYG editor (stored as Delta JSON + rendered HTML).
  - Add, edit, and delete calendar events shown on the home and MoU/MoA pages.
  - Inline-edit headings, paragraphs, and CTAs across the site.
- Sign-in opens via the `···` button in the top-right or `Ctrl/Cmd + Shift + A`.

## Tech Stack

- HTML5, CSS3
- [Tailwind CSS](https://tailwindcss.com/) v3.4 (CDN)
- [Lucide Icons](https://lucide.dev/) v0.263 (CDN)
- [Quill](https://quilljs.com/) v2.0.2 (CDN) — WYSIWYG editor for articles
- [Supabase](https://supabase.com/) — auth, Postgres, storage, and Row Level Security
- Vanilla JavaScript (no framework, no build step)
- Google Fonts: Plus Jakarta Sans, DM Sans

## Project Structure

```
├── index.html              # Entry point and nav
├── DEMO-SETUP.md           # Step-by-step configuration guide
├── css/
│   └── styles.css          # Custom styles
├── js/
│   ├── main.js             # Page routing and shared logic
│   ├── auth.js             # Sign in/out, admin gating
│   ├── config.js           # App config (fill in your credentials)
│   ├── config.example.js   # Template reference
│   ├── demo.js             # Demo mode banner (remove when going live)
│   ├── supabase-client.js  # Initializes window.sb
│   ├── inline-edit.js      # Click-to-edit headings/paragraphs/CTAs
│   ├── components/
│   │   ├── admin-banner.js
│   │   ├── calendar.js
│   │   ├── event-modal.js
│   │   ├── login-modal.js
│   │   └── quill-editor.js
│   └── pages/
│       ├── home/home.js
│       ├── about-me/
│       ├── contact-me/contact-me.js
│       ├── creative-services/
│       ├── global-partnership/
│       ├── project-management/
│       ├── skill-discovery/skill-discovery.js
│       ├── student-services/
│       └── writing/
├── assets/
│   ├── images/             # Section images (replace with your own)
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

1. Replace demo content in `js/pages/` files with your real information
2. Create a Supabase project and run `supabase/migrations/001_initial_schema.sql`
3. Fill in `js/config.js` with your Supabase URL, anon key, admin email, and Formspree endpoint
4. Replace images in `assets/images/` with your own photos
5. Update meta tags in `index.html`
6. Remove `<script src="./js/demo.js"></script>` from `index.html`
7. Deploy to Vercel, Netlify, or GitHub Pages

See [DEMO-SETUP.md](DEMO-SETUP.md) for the full step-by-step guide.
