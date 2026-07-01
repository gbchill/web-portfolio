<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=7c3aed&height=200&section=header&text=George%20Badulescu&fontSize=48&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Personal%20Portfolio&descSize=18&descAlignY=58" />
</div>

<h1 align="center">Portfolio</h1>

<p align="center">
  A brutalist, engineering-leaning personal site built to read like a real engineer made it, not a template.
</p>

<p align="center">
  <a href="https://www.georgebadulescu.com"><img src="https://img.shields.io/badge/Live%20Site-7c3aed?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Site" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-131313?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-7c3aed?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Deployed_on-Vercel-131313?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/License-MIT-7c3aed?style=flat-square" alt="MIT License" />
</p>

---

## Overview

This is my personal portfolio. The design is a hybrid direction: an engineering and brutalist look with personality. Heavy borders, bold uppercase display type, monospace metadata, and a single purple accent, all wrapped in motion that stays out of the way. The goal is clean, professional, and memorable without looking AI generated.

- **Design language:** brutalist grid, 2px ink borders, hover-invert cards, one purple accent (`#7c3aed`)
- **Type:** Space Grotesk for display and body, Space Mono for labels, dates, and tags
- **Theme:** light by default, full dark mode via a toggle
- **Content:** driven from a single data file so updates are quick

---

## Features

- **Typewriter hero** that cycles through roles with a blinking caret
- **Scramble / decode** section headings with a growing underline on hover
- **Magnetic buttons** that lean toward the cursor
- **Experience timeline** that draws itself in as you scroll
- **Hover-invert project cards** with a sliding purple fill and image zoom
- **Scroll progress bar** and an active-section indicator in the floating nav
- **Light and dark mode** with hand-tuned palettes in both
- **Accessible motion:** every animation respects `prefers-reduced-motion`
- **Responsive** from mobile to desktop

---

## Tech Stack

<p align="left">
  <img src="https://img.shields.io/badge/Next.js_16-131313?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-131313?style=for-the-badge&logo=react&logoColor=7c3aed" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-131313?style=for-the-badge&logo=typescript&logoColor=3178C6" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-131313?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Framer_Motion-131313?style=for-the-badge&logo=framer&logoColor=7c3aed" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/next--themes-131313?style=for-the-badge&logo=react&logoColor=white" alt="next-themes" />
</p>

| Area | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS with CSS variable design tokens |
| Animation | Framer Motion / motion |
| Fonts | Space Grotesk and Space Mono via `next/font` |
| Theming | next-themes (light default, dark toggle) |
| Hosting | Vercel |

---

## Getting Started

**Prerequisites:** Node.js 18+ and Yarn.

```bash
# 1. Clone the repository
git clone https://github.com/gbchill/web-portfolio.git
cd web-portfolio

# 2. Install dependencies
yarn install

# 3. Start the dev server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

```bash
# Production build
yarn build
yarn start
```

---

## Project Structure

```
web-portfolio/
├── app/
│   ├── layout.tsx         # Fonts, theme provider, background, metadata
│   ├── page.tsx           # Section composition (hero, about, experience...)
│   ├── globals.css        # Design tokens (light + dark), utilities
│   └── icon.svg           # GB monogram favicon
├── components/
│   ├── Intro.tsx          # Hero with typewriter + magnetic buttons
│   ├── About.tsx          # About copy
│   ├── Experience.tsx     # Timeline of roles
│   ├── RecentProjects.tsx # Hover-invert project cards
│   ├── Contact.tsx        # Contact + socials
│   └── ui/
│       ├── motion.tsx     # Typewriter, Scramble, Magnetic, Marquee, etc.
│       ├── Skills.tsx     # Bordered skill grid
│       ├── FloatingNav.tsx
│       └── Background.tsx # Grid + glow + grain backdrop
├── data/
│   └── index.ts           # Experience and projects (source of truth)
└── lib/
    └── data.ts            # Skills, certifications, education
```

---

## Customization

Everything is content driven, so making it yours is fast:

- **Experience and projects:** edit `data/index.ts`
- **Skills, certifications, education:** edit `lib/data.ts`
- **Accent color and theme:** update the `--brand` and palette tokens in `app/globals.css`
- **Favicon:** swap `app/icon.svg`

---

## Deployment

Deployed on **Vercel**. Push to the default branch and Vercel builds and ships automatically. To deploy your own copy, import the repo into Vercel and it detects the Next.js setup with no extra config.

---

## Connect

<p align="center">
  <a href="https://linkedin.com/in/george-badu" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-7c3aed?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://github.com/gbchill" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-131313?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="mailto:georgebadulescu123@gmail.com" target="_blank">
    <img src="https://img.shields.io/badge/Email-7c3aed?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>

---

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=7c3aed&height=120&section=footer" />
</div>
