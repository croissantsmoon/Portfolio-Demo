# Portfolio Website — Zefanya Kharisma Nugroho

Personal portfolio website for Zefanya Kharisma Nugroho, International Partnership Specialist at PCU & Universitas Airlangga, Surabaya.

## Overview

A single-page application with an editorial premium aesthetic, organized into five canonical sections:

- **About** — Overview, education, international exposure, professional values, expertise, experience, and skillset
- **Projects** — AMERTA (Exchange Program), ACI (Cultural Immersion), AERO (Exhibition), PCU Global (Web Project)
- **Intl. Education** — Student onboarding & support, student engagement (with detail view), partnership development (with detail view), and MoU/MoA coordination (with detail view)
- **Creative** — CroissantsMoon (boutique studio identity), Writing, Web Development, Graphic Design
- **Contact** — Contact information

The home page also hosts the Skill Discovery entry point, where visitors filter work by skill area, plus a calendar widget showing published articles and upcoming events.

## Features

- **Public site** — read-only portfolio served as static files (works on GitHub Pages).
- **Admin mode** — a single authenticated admin (gated by Supabase Row Level Security) can:
  - Write, edit, and publish articles via a Quill 2.x WYSIWYG editor (stored as Delta JSON + rendered HTML).
  - Add, edit, and delete calendar events shown on the home and MoU/MoA pages.
  - Inline-edit headings, paragraphs, and CTAs across the site.
  - Manage page content for the editorial sections.
- Sign-in opens via the footer **Admin** link or `Ctrl/Cmd + Shift + A`.

## Tech Stack

- HTML5, CSS3
- [Tailwind CSS](https://tailwindcss.com/) v3.4 (CDN)
- [Lucide Icons](https://lucide.dev/) v0.263 (CDN)
- [Quill](https://quilljs.com/) v2.0.2 (CDN) — WYSIWYG editor for articles
- [Supabase](https://supabase.com/) — auth, Postgres, storage, and Row Level Security
- Vanilla JavaScript (no framework, no build step)
- Google Fonts: Playfair Display, Inter

## Project Structure

```
├── index.html              # Entry point and nav
├── css/
│   └── styles.css          # Custom styles
├── js/
│   ├── main.js             # Page routing and shared logic
│   ├── auth.js             # Sign in/out, admin gating
│   ├── config.example.js   # Template — copy to config.js (gitignored)
│   ├── supabase-client.js  # Initializes window.sb
│   ├── inline-edit.js      # Click-to-edit headings/paragraphs/CTAs
│   ├── components/
│   │   ├── admin-banner.js
│   │   ├── calendar.js
│   │   ├── event-modal.js
│   │   ├── login-modal.js
│   │   └── tiptap-editor.js  # Quill wrapper (textarea fallback)
│   └── pages/
│       ├── home/home.js
│       ├── about-me/         # overview, education, international, values,
│       │                     # expertise, experience, skillset
│       ├── contact-me/contact-me.js
│       ├── creative-services/  # croissantsmoon, graphic-designs, websites
│       ├── global-partnership/ # partnership development & detail,
│       │                       # MoU/MoA coordination & detail
│       ├── project-management/ # overview, amerta, aci, aero, pcu-global
│       ├── skill-discovery/skill-discovery.js
│       ├── student-services/   # onboarding, engagement, engagement-detail
│       └── writing/            # writing index, article-editor, article-view
├── assets/
│   ├── images/             # Section images
│   ├── graphics/           # Graphic design assets
│   └── data/               # Program data files (XLSX, DOCX)
└── supabase/
    └── migrations/
        └── 001_initial_schema.sql  # Tables, RLS policies, storage bucket
```

## Running Locally

The site is static and has no build step. Open `index.html` directly in a browser, or serve it:

```bash
npx serve .
# or
python3 -m http.server 8080
```

To use admin features locally you must also configure Supabase — see [SETUP.md](SETUP.md).

## Admin Backend

The admin role is fully optional. The site renders read-only without it. To enable writing:

1. Create a free Supabase project.
2. Run `supabase/migrations/001_initial_schema.sql` (after replacing `YOUR_ADMIN_EMAIL`).
3. Copy `js/config.example.js` to `js/config.js` and fill in your project URL, anon key, and admin email.

Full step-by-step instructions, including RLS verification and troubleshooting, are in [SETUP.md](SETUP.md).

> `js/config.js` is gitignored. The Supabase anon key is publishable and safe to ship; the `service_role` key is not — never put it in frontend code.
