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
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80",
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

export type Project = {
  title: string;
  category: string;
  image: string;
  stats: string;
  statsLabel: string;
};

export const portfolioEyebrow = "Our Work";
export const portfolioHeadlinePrefix = "Case Studies that ";
export const portfolioHeadlineHighlight = "Prove the Process";
export const portfolioFilters = ["All", "Marketing", "Branding", "Development", "SEO"];

export const projects: Project[] = [
  {
    title: "FinTech App Launch",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    stats: "+240%",
    statsLabel: "User Acquisition",
  },
  {
    title: "EcoBrand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    stats: "1st",
    statsLabel: "Award-Winning",
  },
  {
    title: "Global E-Com Scaling",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    stats: "$4M+",
    statsLabel: "Organic Revenue",
  },
  {
    title: "SaaS Platform Redesign",
    category: "Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    stats: "-40%",
    statsLabel: "Bounce Rate",
  },
  {
    title: "Luxury Fashion Campaign",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    stats: "3x",
    statsLabel: "ROAS Growth",
  },
  {
    title: "HealthTech Portal",
    category: "Development",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    stats: "+180%",
    statsLabel: "Engagement",
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

