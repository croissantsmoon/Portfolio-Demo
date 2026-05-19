# Portfolio Website — Zefanya Kharisma Nugroho

Personal portfolio website for Zefanya Kharisma Nugroho, International Partnership Specialist at PCU & Universitas Airlangga, Surabaya.

## Overview

A single-page application with an editorial premium aesthetic, organized into five canonical sections:

- **About** — Overview, education, international exposure, professional values, expertise, experience, and skillset
- **Projects** — AMERTA (Exchange Program), ACI (Cultural Immersion), AERO (Exhibition), PCU Global (Web Project)
- **Intl. Education** — Student onboarding & support, student engagement (with detail view), partnership development (with detail view), and MoU/MoA coordination (with detail view)
- **Creative** — CroissantsMoon (boutique studio identity), Writing, Web Development, Graphic Design
- **Contact** — Contact information

The home page also hosts the Skill Discovery entry point, where visitors filter work by skill area.

## Tech Stack

- HTML5, CSS3
- [Tailwind CSS](https://tailwindcss.com/) v3.4 (CDN)
- [Lucide Icons](https://lucide.dev/) v0.263 (CDN)
- Vanilla JavaScript (no framework)
- Google Fonts: Playfair Display, Inter

## Project Structure

```
├── index.html          # Entry point and nav
├── css/
│   └── styles.css      # Custom styles
├── js/
│   ├── main.js         # Page routing and shared logic
│   └── pages/          # Page-specific JS modules
│       ├── home/
│       │   └── home.js
│       ├── about-me/
│       │   ├── about-me-overview.js
│       │   ├── education.js
│       │   ├── international.js
│       │   ├── values.js
│       │   ├── expertise.js
│       │   ├── experience.js
│       │   └── skillset.js
│       ├── contact-me/
│       │   └── contact-me.js
│       ├── creative-services/
│       │   ├── croissantsmoon.js
│       │   ├── graphic-designs.js
│       │   └── websites.js
│       ├── global-partnership/
│       │   ├── partnership-deveopment.js
│       │   ├── partnership-detail.js
│       │   ├── mou-moa-coordination.js
│       │   └── mou-detail.js
│       ├── project-management/
│       │   ├── project-management-overview.js
│       │   ├── amerta.js
│       │   ├── aci.js
│       │   ├── aero.js
│       │   └── pcu-global.js
│       ├── skill-discovery/
│       │   └── skill-discovery.js
│       ├── student-services/
│       │   ├── student-onboarding-orientation.js
│       │   ├── student-engagement-initiatives.js
│       │   └── student-engagement-detail.js
│       └── writing/
│           └── writing.js
└── assets/
    ├── images/         # Section images
    ├── graphics/       # Graphic design assets
    └── data/           # Program data files (XLSX, DOCX)
```

## Running Locally

Open `index.html` directly in a browser, or serve with any static file server:

```bash
npx serve .
# or
python3 -m http.server 8080
```
