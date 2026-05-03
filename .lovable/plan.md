
# Rugved Dhorje — Frontend Developer Portfolio

A single-page, dark-themed portfolio built on the project's existing **React + Vite + Tailwind** stack (Next.js isn't supported here, but the design, animations, and SEO structure will match a Next.js-style premium SaaS site). Animations via **Framer Motion**.

## Design system

- Dark by default with a light/dark toggle in the navbar (persisted in localStorage)
- Accent gradient: **emerald → teal** used sparingly on CTAs, headings highlights, and blob backgrounds
- Typography: **Inter** (loaded from Google Fonts)
- Surfaces: subtle glassmorphism (`backdrop-blur` + low-opacity borders), soft shadows, generous spacing
- Animated background blobs (slow, GPU-friendly) behind the hero
- Mobile-first responsive layout, container max-width 1200px

## Page structure (single route `/`)

```text
[ Sticky Navbar — logo · About · Skills · Projects · Experience · Contact · Theme toggle ]

Hero
  - "Hi, I'm Rugved Dhorje"
  - Title: Frontend Developer
  - Tagline: Building scalable SaaS platforms and interactive web experiences
  - CTAs: View Projects · Contact Me
  - Animated gradient blobs + entrance fade/slide

About
  - Short professional summary
  - Highlight chips: React.js · Next.js · SaaS apps · Role-based dashboards · Performance optimization

Skills
  - Three glass cards: Frontend / Backend / Tools
  - Frontend: React, Next.js, Tailwind, Redux
  - Backend: Node.js, Express
  - Tools: Git, Postman
  - Lucide icons, hover lift + glow

Projects (6 cards, responsive grid)
  - HRMS SaaS Platform
  - Expense Management System
  - Recruitment Management System
  - Queue Management System
  - Government Admin Analytics Dashboard
  - Minimal India Marketing Website
  Each card: title, 1–2 line description, tech tag chips, hover scale+border-glow,
  GitHub & Live buttons as placeholder "#" links.

Experience
  - Vertical timeline with animated dots
  - Entries emphasizing frontend ownership and SaaS delivery

Contact
  - Left: email, LinkedIn, GitHub (icon links)
  - Right: form (Name, Email, Message) with validation via react-hook-form + zod
  - Submit shows a success toast (no backend wiring yet)

Footer
  - Minimal: name, year, small social row
```

## Animations (Framer Motion)

- Hero: staggered fade + slide-up on mount
- Section headings & cards: `whileInView` fade/slide-up with `viewport={{ once: true, margin: "-80px" }}`
- Cards: `whileHover` subtle scale (1.02) + accent border glow
- Buttons: hover/tap micro-interactions
- Navbar: shrinks/condenses on scroll, smooth-scroll to anchors
- Background blobs: slow infinite transform loop
- All transitions ≤300ms, eased — no layout thrash

## Technical details

- **Stack:** existing React 18 + Vite + Tailwind + TypeScript. Add `framer-motion`. `react-hook-form` + `zod` are available via shadcn `form`.
- **Theme:** small `ThemeProvider` toggling `dark` class on `<html>`, persisted in localStorage; default `dark`.
- **Design tokens:** extend `src/index.css` with emerald/teal accent HSL vars and a `--gradient-accent`; extend `tailwind.config.ts` with fade-in / slide-up / blob keyframes and an `accent` color token. No hardcoded colors in components.
- **Files to add:**
  - `src/components/portfolio/Navbar.tsx`
  - `src/components/portfolio/Hero.tsx`
  - `src/components/portfolio/About.tsx`
  - `src/components/portfolio/Skills.tsx`
  - `src/components/portfolio/Projects.tsx`
  - `src/components/portfolio/Experience.tsx`
  - `src/components/portfolio/Contact.tsx`
  - `src/components/portfolio/Footer.tsx`
  - `src/components/portfolio/AnimatedBlobs.tsx`
  - `src/components/theme/ThemeProvider.tsx` + `ThemeToggle.tsx`
  - `src/data/portfolio.ts` (projects, skills, experience data — easy to edit)
- **Files to edit:**
  - `src/pages/Index.tsx` — compose the sections
  - `src/index.css` — Inter font, accent tokens, gradient, scroll-behavior smooth
  - `tailwind.config.ts` — accent colors, keyframes/animations
  - `index.html` — SEO meta (title, description, OG tags), Inter preconnect
- **Performance:** `viewport={{ once: true }}` so animations don't re-fire; blobs use `transform` only; no large images.
- **SEO:** semantic `<section id="...">` per area, single `<h1>` in hero, descriptive `<title>` and meta description, OG/Twitter tags.

## Out of scope (can add later)

- Real backend for the contact form (Lovable Cloud + Resend)
- Real project links / screenshots
- Blog or case-study subpages
