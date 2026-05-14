# SKYLIS — Startup / Agency Landing Page Template

A premium, single-page marketing site template built with **Next.js 16**, **React 19**, **TypeScript** and **Tailwind CSS v4**. Designed for digital agencies, SaaS startups and freelancers who need a polished landing page that converts.

> 🆕 **New to coding?** Start with **[PREREQUISITES.md](PREREQUISITES.md)** — a step-by-step setup guide for non-technical users. It walks you through installing Node.js, a code editor, and running the template, in about 20 minutes.

---

## Tech Stack

- [Next.js 16](https://nextjs.org) — App Router, RSC, Image & Font optimization
- [React 19](https://react.dev)
- [TypeScript 5](https://www.typescriptlang.org) (strict mode)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Swiper](https://swiperjs.com) — testimonial & services carousels

---

## Features

- Single-file content config — edit one file to change every piece of copy
- Fully responsive — desktop, tablet, and mobile breakpoints tuned individually
- Animated hero with intersection-observer counter stats
- Services carousel with detail modals
- Filterable portfolio grid
- Testimonial carousel with active-slide highlight
- Contact form that opens a pre-filled WhatsApp chat
- 404, Privacy Policy, and Terms of Service pages included
- SEO-ready metadata via the Next.js App Router
- All images use `next/image`, all fonts use `next/font` (Google Fonts subset)
- Accessibility: keyboard navigation, ARIA labels, focus states throughout

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

---

## Customization Guide

### 1. Edit all content from one file

Every piece of text, contact detail, link and image URL lives in:

```
app/config/siteData.tsx
```

Open that file and edit any string. The site updates instantly in dev.

The file is organized into sections matching the landing-page sections:

| Section in file | What it controls |
| --- | --- |
| `brand` | Company name, tagline, logo path |
| `contact` | Email, phone, address, **WhatsApp number** |
| `social` | Social media URLs (footer + navbar icons) |
| `seo` | `<title>`, meta description, keywords |
| `navItems` | Navbar menu links |
| `hero` | Headline, subtitle, CTAs, image, animated stats |
| `about` | About-us copy + the six "values" grid |
| `services` | Six service cards (title, description, SVG icon, details list) |
| `projects` | Portfolio grid items + filter categories |
| `testimonials` | Client quote carousel |
| `contactSection` | Headline, eyebrow, description of contact section |
| `footerLinks` / `footerBottomLinks` | Footer columns + legal links |

### 2. Connect the WhatsApp contact form

Open `app/config/siteData.tsx` and change:

```ts
export const contact = {
  // ...
  whatsappNumber: "15551234567", // ← your number, international format, NO "+"
};
```

The Contact section form's "Chat on WhatsApp" button opens
`https://wa.me/<your-number>?text=...` in a new tab with the form data
pre-filled. No backend, no API keys, no email service to wire up.

### 3. Change brand colors

The site uses a navy palette (`#1a3a5c`) as the primary brand color. Tokens are defined as CSS variables in:

```
app/globals.css
```

Find the `:root` block and edit `--brand-navy`, `--brand-blue`, etc.

For inline hex values (e.g. `#1a3a5c`), do a find-and-replace across `app/components/`.

### 4. Replace fonts

Fonts are loaded in [app/layout.tsx](app/layout.tsx) via `next/font/google`. Swap any font there — the rest of the codebase reads from CSS variables `--font-inter`, `--font-raleway`, `--font-jetbrains-mono`.

### 5. Replace the logo

Drop your own logo in `public/logo.png` (or change the path in `brand.logoSrc` inside `siteData.tsx`).

### 6. Replace images

Hero image, portfolio thumbnails, testimonial avatars — all defined as URLs in `siteData.tsx`. They currently point to Unsplash; swap with your own CDN-hosted images or move them into `public/`.

---

## Project Structure

```
app/
├── components/          # All section components
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── PortfolioSection.tsx
│   ├── TestimonialSection.tsx
│   ├── ContactSection.tsx
│   └── FooterSection.tsx
├── config/
│   └── siteData.tsx     # ★ EDIT THIS FILE TO CUSTOMIZE
├── privacy/page.tsx
├── terms/page.tsx
├── not-found.tsx        # 404 page
├── globals.css
├── layout.tsx
└── page.tsx
public/
├── logo.png
└── ...
```

---

## Deploy

This template deploys cleanly to:

- **Vercel** — push your repo, click import, done.
- **Netlify** — `npm run build`, point publish dir to `.next`.
- **Cloudflare Pages** — works out of the box with the Next.js build preset.

---

## License

See [LICENSE](LICENSE).
