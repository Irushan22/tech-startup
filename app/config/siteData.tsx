/**
 * SITE CONTENT CONFIG
 * Edit every piece of copy, link, contact detail and social URL for the template
 * from this single file. No JSX changes required.
 */

import type { JSX } from "react";

/* ========================================================================== */
/*  BRAND                                                                     */
/* ========================================================================== */

export const brand = {
  /** Company / product name (used in title, footer, navbar logo alt) */
  name: "SKYLIS",
  /** Short tagline used in footer paragraph and meta description */
  tagline:
    "A full-service digital marketing agency engineering data-driven growth for ambitious brands worldwide.",
  /** Footer-rendered split (text BEFORE the highlight + AFTER) */
  logoSplit: { strong: "SKY", muted: "LIS" },
  /** Logo image path (in /public). Replace logo.png with your own asset. */
  logoSrc: "/logo.png",
  logoWidth: 140,
  logoHeight: 36,
};

/* ========================================================================== */
/*  CONTACT                                                                   */
/* ========================================================================== */

export const contact = {
  email: "hello@example.com",
  phone: "+1 (555) 123-4567",
  address: "123 Innovation Drive, San Francisco",
  /**
   * WhatsApp number in international format WITHOUT the "+" symbol.
   * Used to build https://wa.me/<number>?text=... deep links.
   * Replace with your business WhatsApp number.
   */
  whatsappNumber: "15551234567",
};

/* ========================================================================== */
/*  SOCIAL                                                                    */
/* ========================================================================== */

export const social = {
  facebook: "#",
  instagram: "#",
  linkedin: "#",
  twitter: "#",
  dribbble: "#",
};

/* ========================================================================== */
/*  SEO METADATA                                                              */
/* ========================================================================== */

export const seo = {
  title: "SKYLIS — Web Development & Digital Solutions",
  description:
    "From custom web apps to enterprise CMS solutions — we craft high-performance digital experiences that drive growth for your business.",
  keywords: [
    "web development",
    "digital agency",
    "web apps",
    "CMS",
    "custom software",
  ],
};

/* ========================================================================== */
/*  NAVBAR                                                                    */
/* ========================================================================== */

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

/* ========================================================================== */
/*  HERO                                                                      */
/* ========================================================================== */

export const hero = {
  headlineLine1: "Elevate Your",
  /** Highlighted middle line rendered with brand gradient */
  headlineHighlight: "Brand",
  headlineLine3: "Presence",
  subtitle:
    "We craft data-driven digital marketing strategies that amplify your brand, engage audiences, and drive measurable growth for your business.",
  primaryCta: { label: "Start Your Campaign", href: "#contact" },
  secondaryCta: { label: "View Our Work", href: "#portfolio" },
  image:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=75",
  imageAlt: "Marketing team collaborating on strategy",
  stats: [
    { value: 450, suffix: "+", label: "Projects Delivered" },
    { value: 98, suffix: "%", label: "Success Rate" },
    { value: 12, suffix: "M+", label: "Revenue Generated" },
  ],
};

/* ========================================================================== */
/*  ABOUT                                                                     */
/* ========================================================================== */

export const about = {
  eyebrow: "About Us",
  headlineLine1: "We don’t just build campaigns.",
  headlineLine2Prefix: "We build",
  headlineHighlight: "brands.",
  paragraphs: [
    "Based at the intersection of creativity and data, SKYLIS is a full-service digital marketing agency dedicated to empowering businesses. We understand that in today's saturated digital landscape, generalized strategies fall flat.",
    "That’s why we craft bespoke, laser-focused solutions tailored precisely to your brand’s DNA and your audience’s behavior. From technical SEO frameworks to immersive content campaigns, we engineer growth systems that scale.",
  ],
  values: [
    { title: "Data-Driven Approach", desc: "No guesswork. Just analytics and actionable insights." },
    { title: "Creative Impact", desc: "Award-winning designs that capture attention." },
    { title: "Transparent ROI", desc: "Clear reporting on every metric that matters." },
    { title: "Dedicated Experts", desc: "A seasoned team fully committed to your success." },
    { title: "Agile Execution", desc: "Rapid iterations to stay ahead of market trends." },
    { title: "Global Reach", desc: "Strategies designed to scale across localized markets." },
  ],
};

/* ========================================================================== */
/*  SERVICES                                                                  */
/* ========================================================================== */

export type Service = {
  title: string;
  desc: string;
  icon: JSX.Element;
  num: string;
  details: string[];
};

export const servicesEyebrow = "Our Capabilities";
export const servicesHeadlineLine1 = "End-to-End Solutions for ";
export const servicesHeadlineHighlight = "Digital Dominance";

export const services: Service[] = [
  {
    title: "Search Engine Optimization",
    desc: "Data-backed SEO strategies to dominate search results and drive high-intent organic traffic to your brand.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 10v4m0 0l-2-2m2 2l2-2" />
      </svg>
    ),
    num: "01",
    details: [
      "Comprehensive Technical SEO Audits",
      "High-intent Keyword Strategy & Mapping",
      "Authoritative Link Building Campaigns",
      "Local SEO & Google Business Optimization",
    ],
  },
  {
    title: "Performance Marketing",
    desc: "Hyper-targeted paid media campaigns across Google, Meta, and LinkedIn designed for maximum ROI and low CPA.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    num: "02",
    details: [
      "Google Search & Shopping Ads Management",
      "Social Media Advertising (Meta, TikTok, LinkedIn)",
      "Advanced Retargeting & Lookalike Audiences",
      "A/B Ad Creative & Copy Testing",
    ],
  },
  {
    title: "Brand Strategy & Identity",
    desc: "Comprehensive brand positioning, visual identity design, and messaging frameworks that resonate with your audience.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    num: "03",
    details: [
      "Brand Archetype & Voice Development",
      "Logo Design & Visual Asset Creation",
      "Comprehensive Brand Guidelines",
      "Market Positioning Strategy",
    ],
  },
  {
    title: "Web Development",
    desc: "High-performance, beautifully designed, and conversion-optimized websites built on modern tech stacks.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    num: "04",
    details: [
      "Custom Frontend Engineering (React/Next.js)",
      "E-Commerce Solutions (Shopify/WooCommerce)",
      "CMS Architecture & Migration (WordPress/Webflow)",
      "Technical Performance & Speed Optimization",
    ],
  },
  {
    title: "Content Marketing",
    desc: "Engaging, authoritative content that builds trust, nurtures leads, and establishes your brand as an industry leader.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    num: "05",
    details: [
      "Editorial Calendar & Content Strategy",
      "Long-form SEO Articles & Blog Posts",
      "Whitepapers, E-Books & Case Studies",
      "Email Newsletters & Nurture Sequences",
    ],
  },
  {
    title: "Conversion Optimization",
    desc: "A/B testing and UX refinements to minimize friction and maximize the percentage of visitors who convert.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
    num: "06",
    details: [
      "Heatmap & User Session Analysis",
      "Multivariate Landing Page Testing",
      "Checkout Funnel Streamlining",
      "Conversion Copywriting Refinements",
    ],
  },
];

/* ========================================================================== */
/*  PORTFOLIO                                                                 */
/* ========================================================================== */

/**
 * Each project powers BOTH a portfolio grid card AND a full case-study page
 * at /case-studies/<slug>. The first half of fields (title..statsLabel) drive
 * the card; the second half (client..gallery) drive the case study page.
 */
export type Project = {
  /** URL slug — used in /case-studies/<slug>. Lowercase, kebab-case, no spaces. */
  slug: string;
  /** Title shown on the card and as the H1 on the case study page. */
  title: string;
  /** Filter category. Must match one in `portfolioFilters`. */
  category: string;
  /** Hero / card image (also used as the case-study page hero). */
  image: string;
  /** Headline metric shown on the card (also the lead metric of the case study). */
  stats: string;
  /** Subtitle for the headline metric. */
  statsLabel: string;

  /* ===== Case study page fields ===== */

  /** Short tagline shown under the hero on the case-study page. */
  tagline: string;
  /** Client name. */
  client: string;
  /** Client industry (e.g. "Financial Services"). */
  industry: string;
  /** Project duration (e.g. "12 weeks"). */
  timeline: string;
  /** Year the project shipped. */
  year: string;
  /** Services delivered on this engagement. */
  services: string[];

  /** "The Challenge" body copy. Plain paragraph (can include \n\n for breaks). */
  challenge: string;
  /** "Our Approach" body copy. Plain paragraph (can include \n\n for breaks). */
  approach: string;

  /** Result metrics displayed in a 3-up grid on the case study page. */
  results: { value: string; label: string; description?: string }[];

  /** 2-3 additional images shown in the gallery section. */
  gallery: string[];
};

export const portfolioEyebrow = "Our Work";
export const portfolioHeadlinePrefix = "Case Studies that ";
export const portfolioHeadlineHighlight = "Prove the Process";
export const portfolioFilters = ["All", "Marketing", "Branding", "Development", "SEO"];

export const projects: Project[] = [
  {
    slug: "fintech-app-launch",
    title: "FinTech App Launch",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=75",
    stats: "+240%",
    statsLabel: "User Acquisition",
    tagline: "Zero to 50,000 active users in a single quarter through a precision-engineered launch campaign.",
    client: "FinTech Innovators",
    industry: "Financial Services",
    timeline: "12 weeks",
    year: "2025",
    services: ["Performance Marketing", "Brand Strategy", "Landing Page Optimization"],
    challenge:
      "A pre-launch fintech startup needed to break into a crowded mobile banking market dominated by incumbents with 50x larger ad budgets. They had a strong product but zero brand recognition and a 90-day window to hit ambitious user-acquisition targets ahead of their Series A round.",
    approach:
      "We led with a tightly segmented Meta and Google Ads strategy targeting three high-intent personas, paired with conversion-optimized landing pages built around a single core promise: 'Banking that pays you back.' Every dollar was tracked end-to-end with a custom attribution dashboard, and we ran weekly creative refreshes to fight ad fatigue.",
    results: [
      { value: "+240%", label: "User Acquisition", description: "vs. internal Q1 target" },
      { value: "$0.42", label: "Cost Per Install", description: "industry avg: $2.10" },
      { value: "32%", label: "Activation Rate", description: "from install to first deposit" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1200&q=75",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=75",
      "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=1200&q=75",
    ],
  },
  {
    slug: "ecobrand-identity",
    title: "EcoBrand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=75",
    stats: "1st",
    statsLabel: "Award-Winning",
    tagline: "A complete brand re-engineering that won a Brand New 'Brand of the Year' award.",
    client: "EcoBrand Global",
    industry: "Sustainable Consumer Goods",
    timeline: "16 weeks",
    year: "2024",
    services: ["Brand Strategy", "Visual Identity", "Packaging Design", "Brand Guidelines"],
    challenge:
      "A 20-year-old sustainable goods company had grown into a portfolio of 40+ products under a fragmented visual identity. Retailers struggled to merchandise the brand, customers couldn't distinguish their products from competitors, and the founders felt the brand no longer represented who they had become.",
    approach:
      "We ran a six-week discovery phase including stakeholder interviews, retail audits, and customer-research workshops. From that we built a new brand archetype, refreshed wordmark, modular packaging system, and a comprehensive guideline document. Every decision was tested against a single benchmark: 'Does this make the planet feel cared for?'",
    results: [
      { value: "1st", label: "Brand of the Year", description: "Brand New Awards 2024" },
      { value: "+58%", label: "Brand Recall", description: "post-rebrand consumer study" },
      { value: "+22%", label: "Retail Sell-Through", description: "first 90 days" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=75",
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=75",
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=75",
    ],
  },
  {
    slug: "global-ecom-scaling",
    title: "Global E-Com Scaling",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=75",
    stats: "$4M+",
    statsLabel: "Organic Revenue",
    tagline: "Eight months of technical SEO and content strategy that unlocked $4M in annual organic revenue.",
    client: "ShopGlobal",
    industry: "E-Commerce",
    timeline: "8 months",
    year: "2025",
    services: ["Technical SEO", "Content Strategy", "Internal Linking Architecture"],
    challenge:
      "An e-commerce brand with 12,000 SKUs across 14 markets was being out-ranked by competitors for nearly every commercial keyword. Their site had crawl issues, duplicate content, hreflang chaos, and no editorial strategy to compete on long-tail commercial intent.",
    approach:
      "We started with a 200-point technical audit, fixing canonical conflicts, broken hreflang implementations, and slow LCP across category pages. In parallel we built a 100-article editorial calendar mapped to mid-funnel intent and rolled out a programmatic internal-linking system tied to product catalog data.",
    results: [
      { value: "$4M+", label: "Annual Organic Revenue", description: "incremental, attributed" },
      { value: "+187%", label: "Organic Sessions", description: "year over year" },
      { value: "#1–3", label: "Rankings", description: "for 240 commercial keywords" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1200&q=75",
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1200&q=75",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=75",
    ],
  },
  {
    slug: "saas-platform-redesign",
    title: "SaaS Platform Redesign",
    category: "Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=75",
    stats: "-40%",
    statsLabel: "Bounce Rate",
    tagline: "Rebuilt the marketing site and onboarding funnel for a mid-market SaaS — bounce rate cut by 40%.",
    client: "Nova Software",
    industry: "B2B SaaS",
    timeline: "10 weeks",
    year: "2025",
    services: ["Web Development", "UX Research", "Conversion Optimization"],
    challenge:
      "Nova's marketing site was a five-year-old WordPress build that loaded in 8 seconds, used a generic stock template, and had a sign-up flow with a 73% drop-off rate. Sales blamed marketing; marketing blamed the site. Neither could prove their case without an instrumented experience.",
    approach:
      "We rebuilt the site on Next.js with a custom design system, cut the homepage to a 1.2-second LCP, and redesigned the sign-up flow around a single-screen value proposition with embedded social proof. Every component was instrumented with PostHog so future hypotheses could be tested in days, not months.",
    results: [
      { value: "-40%", label: "Bounce Rate", description: "marketing pages" },
      { value: "+85%", label: "Sign-Up Conversion", description: "homepage to activated account" },
      { value: "1.2s", label: "Largest Contentful Paint", description: "down from 8.1s" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=1200&q=75",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=75",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=75",
    ],
  },
  {
    slug: "luxury-fashion-campaign",
    title: "Luxury Fashion Campaign",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=75",
    stats: "3x",
    statsLabel: "ROAS Growth",
    tagline: "A spring-collection launch campaign that tripled return-on-ad-spend in a notoriously soft category.",
    client: "Maison Atelier",
    industry: "Luxury Apparel",
    timeline: "6 weeks",
    year: "2025",
    services: ["Creative Direction", "Paid Social", "Influencer Strategy"],
    challenge:
      "A luxury fashion house was launching a spring capsule into a market still recovering from a downturn in discretionary spending. Their previous launch had returned 1.2x ROAS — below the 2x minimum needed to justify the campaign budget to their board.",
    approach:
      "We led with a tight creative concept — 'Quiet Luxury' — and built a media plan that paired curated influencer partnerships with a high-frequency Meta retargeting layer. Every creative variant was tested in a head-to-head bracket before being scaled.",
    results: [
      { value: "3.1x", label: "Return on Ad Spend", description: "blended across paid channels" },
      { value: "+412%", label: "Site Sessions", description: "during campaign window" },
      { value: "82%", label: "Sell-Through", description: "collection at end of cycle" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=75",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=75",
      "https://images.unsplash.com/photo-1485518882345-15568b007407?w=1200&q=75",
    ],
  },
  {
    slug: "healthtech-portal",
    title: "HealthTech Portal",
    category: "Development",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=75",
    stats: "+180%",
    statsLabel: "Engagement",
    tagline: "A patient portal that turned a once-a-year touchpoint into a daily engagement habit.",
    client: "NexaHealth",
    industry: "Digital Health",
    timeline: "14 weeks",
    year: "2024",
    services: ["Web Development", "UX Research", "Accessibility Audit"],
    challenge:
      "NexaHealth's existing patient portal was used by less than 8% of their 200,000 patients. The interface was a third-party white-label product that was clinically dense, inaccessible to older users, and slow on mobile networks — exactly the audience that needed it most.",
    approach:
      "We rebuilt the portal as a Next.js PWA with a senior-friendly UI, full WCAG 2.2 AA compliance, and offline support for medication reminders and appointment cards. Personalization was driven by a small set of opt-in health-goal selections rather than algorithmic complexity.",
    results: [
      { value: "+180%", label: "Daily Active Users", description: "patients aged 60+" },
      { value: "AA", label: "WCAG 2.2 Compliance", description: "audited by third-party" },
      { value: "94", label: "Lighthouse Score", description: "on mobile networks" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=75",
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1200&q=75",
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&q=75",
    ],
  },
];

/* ========================================================================== */
/*  TESTIMONIALS                                                              */
/* ========================================================================== */

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  image: string;
};

export const testimonialsEyebrow = "Client Success";
export const testimonialsHeadlinePrefix = "Don't Just Take Our ";
export const testimonialsHeadlineHighlight = "Word For It";

export const testimonials: Testimonial[] = [
  {
    quote:
      "SKYLIS didn't just rebuild our website; they re-engineered our entire digital acquisition channel. We saw a 300% increase in qualified leads within the first quarter.",
    author: "Sarah Jenkins",
    role: "CMO, FinTech Innovators",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  {
    quote:
      "The level of strategic depth and technical execution is unmatched. Their SEO and content framework directly contributed to our $4M organic revenue run rate.",
    author: "Marcus Chen",
    role: "Founder, EcoBrand Global",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
  },
  {
    quote:
      "A true extension of our internal team. They took the time to understand our complex SaaS product and translated it into messaging that actually converts.",
    author: "Elena Rodriguez",
    role: "VP Marketing, Nova Software",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
  },
  {
    quote:
      "Their data-driven approach helped us reduce our CPA by 60% while tripling our conversion rate. The ROI speaks for itself.",
    author: "David Park",
    role: "Head of Growth, CloudSync",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
  {
    quote:
      "From brand refresh to performance marketing, SKYLIS delivered end-to-end with precision. Our pipeline has never looked healthier.",
    author: "Amira Hassan",
    role: "CEO, NexaHealth",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80",
  },
];

/* ========================================================================== */
/*  CONTACT SECTION                                                           */
/* ========================================================================== */

export const contactSection = {
  eyebrow: "Get in Touch",
  headlineLine1: "Ready to Accelerate",
  headlineLine2: "Your Growth?",
  description:
    "Let's discuss how our data-driven strategies can transform your digital presence and drive measurable results for your business.",
};

/* ========================================================================== */
/*  FOOTER                                                                    */
/* ========================================================================== */

export const footerLinks = {
  services: [
    { label: "SEO Strategy", href: "#" },
    { label: "Performance Marketing", href: "#" },
    { label: "Brand Identity", href: "#" },
    { label: "Web Development", href: "#" },
    { label: "Content Marketing", href: "#" },
    { label: "Conversion Optimization", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Work", href: "#portfolio" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  resources: [
    { label: "Case Studies", href: "#portfolio" },
    { label: "Free Audit", href: "#" },
    { label: "ROI Calculator", href: "#" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export const footerBottomLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/privacy#cookies" },
];

