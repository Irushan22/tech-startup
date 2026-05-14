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
| `projects` | Portfolio grid items **AND** full case study pages (auto-generated at `/case-studies/[slug]`) |
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

**Every color in the template is controlled from one file:** [app/globals.css](app/globals.css). Open the `:root` block and edit any value.

```css
:root {
  /* Brand colors */
  --brand-navy: #1a3a5c;        /* primary brand color */
  --brand-navy-dark: #0f1f2e;   /* headings, deepest shade */
  --brand-blue: #2a5a8c;        /* accent / eyebrow */
  --brand-blue-light: #2a6aac;  /* hero gradient endpoint */

  /* Surfaces */
  --surface-soft: #f8fafc;      /* light section background */
  --surface-footer: #0a1520;    /* dark footer background */

  /* Text */
  --text-primary: #0f1f2e;
  --text-secondary: #4a5e72;
  --text-muted: #4a5568;
  --text-nav-inactive: #3a4a5c;
}
```

Change `--brand-navy` to your hex of choice and the entire site updates — buttons, links, accents, gradients, focus rings, scrollbar.

### 3.1 Button color palette

Buttons use a separate group of tokens so you can theme buttons without changing the rest of the brand:

```css
:root {
  /* Primary button — solid (Hero "Start Your Campaign", "View All Projects", modal CTAs) */
  --btn-primary-bg: var(--brand-navy);
  --btn-primary-bg-hover: var(--brand-navy-dark);
  --btn-primary-text: #ffffff;

  /* Secondary button — outlined (Hero "View Our Work", 404 "Contact Us") */
  --btn-secondary-bg: transparent;
  --btn-secondary-text: var(--brand-navy);
  --btn-secondary-border: var(--brand-navy);

  /* On-dark CTA — white button on dark backgrounds (Contact section submit) */
  --btn-on-dark-bg: #ffffff;
  --btn-on-dark-text: var(--brand-navy);

  /* WhatsApp CTA — available preset if you want the WhatsApp brand green */
  --btn-whatsapp-bg: #25d366;
  --btn-whatsapp-text: #ffffff;
}
```

Want a green primary button? Change `--btn-primary-bg` and `--btn-primary-bg-hover` without touching anything else.

### 4. Replace fonts

Fonts are loaded in [app/layout.tsx](app/layout.tsx) via `next/font/google`. Swap any font there — the rest of the codebase reads from CSS variables `--font-inter` and `--font-raleway`.

### 5. Replace the logo

Drop your own logo in `public/logo.png` (or change the path in `brand.logoSrc` inside `siteData.tsx`).

### 6. Replace images

Hero image, portfolio thumbnails, case-study galleries, testimonial avatars — all defined as URLs in [app/config/siteData.tsx](app/config/siteData.tsx). They currently point to Unsplash as placeholders.

> ⚠️ **Strongly recommended: move images into `/public` before going live.**
>
> Unsplash is a third-party CDN and occasionally rate-limits or slows down. Next.js's image optimizer has a hard ~7-second upstream-fetch timeout, so a slow Unsplash response causes a `500` on `/_next/image?...` and broken images on the page. You may see this in `npm run dev` as:
> ```
> Error [TimeoutError]: The operation was aborted due to timeout
> upstream image response timed out for https://images.unsplash.com/...
> ```
> This is a network problem, **not a code bug**. The template ships with `images.minimumCacheTTL: 31536000` in [next.config.ts](next.config.ts), so once an image fetches successfully it's cached for a year. Just refresh the page once and the cache fills.

**Production fix:**

1. Download each replacement image into `public/` (e.g. `public/case-studies/fintech-hero.jpg`).
2. In `siteData.tsx`, replace the Unsplash URL with the local path: `"/case-studies/fintech-hero.jpg"`.
3. Local paths skip the network entirely — no proxy, no timeouts, faster LCP, no third-party dependency.

You can keep the `remotePatterns` block in `next.config.ts` if you also use a CDN like Cloudinary or your own S3 bucket — just add that hostname to the list.

### 7. Edit / add case study pages

Every project in the `projects` array of `siteData.tsx` automatically generates:

1. A clickable card in the portfolio grid on the home page
2. A dedicated case study page at `/case-studies/<slug>`

Each project has these fields (all live in one object):

| Field | Drives |
| --- | --- |
| `slug` | The URL (e.g. `"fintech-app-launch"` → `/case-studies/fintech-app-launch`) |
| `title`, `category`, `image`, `stats`, `statsLabel` | Portfolio card |
| `tagline`, `client`, `industry`, `timeline`, `year`, `services` | Case study hero + meta bar |
| `challenge`, `approach` | Two-column narrative section (use `\n\n` between paragraphs) |
| `results` | 3-up metric grid (each item has `value`, `label`, optional `description`) |
| `gallery` | Image grid below results (2–3 images recommended) |

**To add a case study:** copy any existing project object in `projects`, change the `slug` (must be unique, lowercase, kebab-case) and content. The new page is live immediately — no routing setup, no extra files. The prev/next navigation at the bottom of each case study cycles through them automatically.

**To remove a case study:** delete the object from the `projects` array.

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
│   └── siteData.tsx              # ★ EDIT THIS FILE TO CUSTOMIZE
├── case-studies/
│   └── [slug]/page.tsx           # auto-generated per project in siteData
├── privacy/page.tsx
├── terms/page.tsx
├── not-found.tsx                 # 404 page
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
