# Portfolio Website — Zefanya Kharisma Nugroho

Personal portfolio website for Zefanya Kharisma Nugroho, International Partnership Specialist at PCU & Universitas Airlangga, Surabaya.

## Overview

A single-page application with an editorial premium aesthetic, organized into the following sections:

- **About** — Overview, expertise, experience, and skillset
- **Projects** — AMERTA, ACI, AERO, PCU Global, and Graphic Design
- **Intl. Education** — Student onboarding, student engagement, partnership development, and MoU/MoA coordination
- **CroissantsMoon** — Personal creative space
- **Writing** — Written work and essays
- **Web Dev** — Web development projects
- **Contact** — Contact information

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
│       ├── about-me/
│       │   ├── about-me-overview.js
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
│       │   ├── partnership-development.js
│       │   └── mou-moa-coordination.js
│       ├── project-management/
│       │   ├── project-management-overview.js
│       │   ├── amerta.js
│       │   ├── aci.js
│       │   ├── aero.js
│       │   └── pcu-global.js
│       └── student-services/
│           ├── student-onboarding-orientation.js
│           └── student-engagement-initiatives.js
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
