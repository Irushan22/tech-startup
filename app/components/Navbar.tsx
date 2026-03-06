"use client";

import { useState, useEffect, useRef } from "react";

// Navigation data with dropdowns for a marketing agency
const navItems = [
  { label: "Home", href: "#" },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Digital Marketing", href: "#digital-marketing" },
      { label: "SEO & SEM", href: "#seo" },
      { label: "Social Media Marketing", href: "#social-media" },
      { label: "Content Strategy", href: "#content" },
      { label: "Branding & Identity", href: "#branding" },
      { label: "PPC Advertising", href: "#ppc" },
    ],
  },
  {
    label: "Portfolio",
    href: "#portfolio",
    children: [
      { label: "Case Studies", href: "#case-studies" },
      { label: "Client Projects", href: "#projects" },
      { label: "Success Stories", href: "#success-stories" },
    ],
  },
  {
    label: "About",
    href: "#about",
  },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 100);
  };

  const handleNavItemEnter = (label: string, hasChildren: boolean) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    if (hasChildren) {
      setOpenDropdown(label);
    } else {
      setOpenDropdown(null);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav
        className="relative"
        style={{ background: "#ffffff", minHeight: "88px", boxShadow: "0 4px 12px rgba(26,58,92,0.15)", fontFamily: "var(--font-raleway), sans-serif" }}
      >
        {/* Top bar — absolutely positioned, extends to right edge of viewport */}
        <div
          className="absolute top-0 right-0"
          style={{
            background: "#1a3a5c",
            height: "36px",
            width: "78%",
            clipPath: "polygon(30px 0, 100% 0, 100% 100%, 18px 100%)",
          }}
        >
          <div className="flex h-full items-center justify-end gap-6 px-6" style={{ paddingLeft: "48px", paddingRight: "100px" }}>
            <a
              href="mailto:contact@gmail.com"
              className="flex items-center gap-2 text-xs font-medium transition-colors duration-200 hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              contact@gmail.com
            </a>
            <div className="h-3.5 w-px" style={{ background: "rgba(255,255,255,0.25)" }} />
            <a
              href="tel:+94715720948"
              className="hidden sm:flex items-center gap-2 text-xs font-medium transition-colors duration-200 hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +94 71 572 0948
            </a>
            <div className="h-3.5 w-px" style={{ background: "rgba(255,255,255,0.25)" }} />
            <div className="flex items-center gap-2.5">
              <a href="#" aria-label="Facebook" className="flex h-6 w-6 items-center justify-center rounded-full transition-all duration-200 hover:scale-110" style={{ background: "rgba(255,255,255,0.15)" }}>
                <svg className="h-3 w-3" fill="rgba(255,255,255,0.9)" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="#" aria-label="Instagram" className="flex h-6 w-6 items-center justify-center rounded-full transition-all duration-200 hover:scale-110" style={{ background: "rgba(255,255,255,0.15)" }}>
                <svg className="h-3 w-3" fill="rgba(255,255,255,0.9)" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="flex h-6 w-6 items-center justify-center rounded-full transition-all duration-200 hover:scale-110" style={{ background: "rgba(255,255,255,0.15)" }}>
                <svg className="h-3 w-3" fill="rgba(255,255,255,0.9)" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="#" aria-label="Twitter" className="flex h-6 w-6 items-center justify-center rounded-full transition-all duration-200 hover:scale-110" style={{ background: "rgba(255,255,255,0.15)" }}>
                <svg className="h-3 w-3" fill="rgba(255,255,255,0.9)" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar wrapper */}
        <div
          className="absolute right-0"
          style={{
            top: "36px",
            width: "78%",
            height: "52px",
            filter: "drop-shadow(0 4px 12px rgba(26,58,92,0.15))",
          }}
        >
          {/* White nav bar with angled left edge */}
          <div
            className="absolute inset-0"
            style={{
              background: "rgba(255, 255, 255, 0.97)",
              clipPath: "polygon(18px 0, 100% 0, 100% 100%, 0 100%)",
            }}
          />
          <div className="relative z-10 flex h-full items-center justify-end gap-8 px-6" style={{ paddingLeft: "48px", paddingRight: "100px" }}>
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleNavItemEnter(item.label, !!item.children)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.href}
                  className="group relative flex items-center gap-1 text-[13px] font-semibold uppercase tracking-widest transition-colors duration-300"
                  style={{ color: "#3a4a5c" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#1a3a5c")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#3a4a5c")}
                >
                  {item.label}
                  {item.children && (
                    <svg
                      className={`h-3 w-3 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  <span
                    className="absolute -bottom-1 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full"
                    style={{ background: "linear-gradient(135deg, #1a3a5c, #2a5a8c)" }}
                  />
                </a>

                {/* Dropdown Menu */}
                {item.children && openDropdown === item.label && (
                  <div
                    className="absolute left-0 top-full pt-3"
                    style={{ minWidth: "220px", zIndex: 50 }}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div
                      className="rounded-sm py-2"
                      style={{
                        background: "#ffffff",
                        boxShadow: "0 8px 30px rgba(26,58,92,0.15), 0 2px 8px rgba(26,58,92,0.08)",
                        border: "1px solid rgba(26,58,92,0.06)",
                      }}
                    >
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="flex items-center px-5 py-2.5 text-sm font-medium transition-all duration-200"
                          style={{ color: "#4a5568" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(26,58,92,0.05)";
                            e.currentTarget.style.color = "#1a3a5c";
                            e.currentTarget.style.paddingLeft = "24px";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "#4a5568";
                            e.currentTarget.style.paddingLeft = "20px";
                          }}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <a
              href="#contact"
              className="px-8 py-2.5 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "#1a3a5c",
                color: "#ffffff",
                clipPath: "polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#2a5a8c";
                e.currentTarget.style.boxShadow = "0 6px 28px rgba(42,90,140,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#1a3a5c";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Logo — sits on the left, vertically centered across both bars */}
        <div className="mx-auto flex max-w-7xl items-center px-6 lg:px-8 py-5">
          <a href="#" className="relative flex items-center">
            <img src="/logo.png" alt="SKYLIS" className="h-9 w-auto" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] w-6 rounded-full transition-all duration-300 ${
              menuOpen ? "translate-y-[5px] rotate-45" : ""
            }`}
            style={{ background: "#1a3a5c" }}
          />
          <span
            className={`block h-[2px] w-6 rounded-full transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
            style={{ background: "#1a3a5c" }}
          />
          <span
            className={`block h-[2px] w-6 rounded-full transition-all duration-300 ${
              menuOpen ? "-translate-y-[5px] -rotate-45" : ""
            }`}
            style={{ background: "#1a3a5c" }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        style={{ background: "rgba(255, 255, 255, 0.98)" }}
      >
        <div className="flex flex-col items-center gap-6 w-full max-w-sm px-6">
          {navItems.map((item, i) => (
            <div key={item.label} className="w-full text-center">
              <div className="flex items-center justify-center gap-2">
                <a
                  href={item.href}
                  onClick={() => { if (!item.children) setMenuOpen(false); }}
                  className="text-2xl font-bold uppercase tracking-wider transition-colors duration-300"
                  style={{
                    color: "#1a2e3a",
                    animation: menuOpen
                      ? `fade-in-up 0.4s ease-out ${i * 0.08}s forwards`
                      : "none",
                    opacity: menuOpen ? 0 : 1,
                  }}
                >
                  {item.label}
                </a>
                {item.children && (
                  <button
                    onClick={() => setMobileSubmenu(mobileSubmenu === item.label ? null : item.label)}
                    className="p-1"
                    style={{
                      animation: menuOpen
                        ? `fade-in-up 0.4s ease-out ${i * 0.08}s forwards`
                        : "none",
                      opacity: menuOpen ? 0 : 1,
                    }}
                  >
                    <svg
                      className={`h-5 w-5 transition-transform duration-200 ${mobileSubmenu === item.label ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#1a3a5c"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
              {/* Mobile submenu */}
              {item.children && mobileSubmenu === item.label && (
                <div className="mt-2 flex flex-col items-center gap-2">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-sm font-medium transition-colors duration-200"
                      style={{ color: "#4a5568" }}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 px-12 py-4 text-lg font-bold uppercase tracking-wider"
            style={{
              background: "#1a3a5c",
              color: "#ffffff",
              animation: menuOpen
                ? `fade-in-up 0.4s ease-out ${navItems.length * 0.08}s forwards`
                : "none",
              opacity: menuOpen ? 0 : 1,
            }}
          >
            Get Started
          </a>

          {/* Social icons in mobile menu */}
          <div className="mt-4 flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 hover:scale-110" style={{ background: "rgba(26,58,92,0.1)" }}>
              <svg className="h-4 w-4" fill="#1a3a5c" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
            <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 hover:scale-110" style={{ background: "rgba(26,58,92,0.1)" }}>
              <svg className="h-4 w-4" fill="#1a3a5c" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 hover:scale-110" style={{ background: "rgba(26,58,92,0.1)" }}>
              <svg className="h-4 w-4" fill="#1a3a5c" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
            <a href="#" aria-label="Twitter" className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 hover:scale-110" style={{ background: "rgba(26,58,92,0.1)" }}>
              <svg className="h-4 w-4" fill="#1a3a5c" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
