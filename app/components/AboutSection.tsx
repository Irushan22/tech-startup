"use client";

import { about } from "../config/siteData";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex items-center bg-surface-soft min-h-[calc(100vh-88px)] overflow-hidden pt-20 pb-20"
      style={{
        fontFamily: "var(--font-raleway), sans-serif",
      }}
    >
      {/* Background Subtle Elements */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(var(--brand-navy) 1px, transparent 1px), linear-gradient(90deg, var(--brand-navy) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:items-center lg:gap-20 lg:px-8">
        
        {/* Left — Core Values (Moved from right side) */}
        <div className="flex w-full lg:w-1/2 flex-col justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-2xl">
            {about.values.map((feature, i) => (
              <div key={i} className="flex gap-4 items-start text-left">
                <div 
                  className="flex h-12 w-12 shrink-0 items-center justify-center"
                  style={{ 
                    background: "rgba(26,58,92,0.08)",
                    clipPath: "polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)",
                  }}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="var(--brand-navy)" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "var(--brand-navy-dark)", fontFamily: "var(--font-montserrat), sans-serif" }}>{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Content */}
        <div className="flex w-full lg:w-1/2 flex-col items-center text-center lg:items-start lg:text-left">
          
          {/* Section Subheading */}
          <div className="mb-3 flex items-center gap-4">
            <span className="h-0.5 w-12" style={{ background: "var(--brand-blue)" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--brand-blue)" }}>
              {about.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h2
            className="text-3xl font-extrabold leading-tight sm:text-4xl"
            style={{ color: "var(--brand-navy-dark)", fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            {about.headlineLine1}<br/><br className="lg:hidden"/>
            {about.headlineLine2Prefix} <span style={{ color: "var(--brand-navy)" }}>{about.headlineHighlight}</span>
          </h2>

          {/* Description */}
          {about.paragraphs.map((p, i) => (
            <p key={i} className={`text-lg leading-relaxed text-text-secondary ${i === 0 ? "mt-8 mb-6" : "mb-2"}`}>
              {p}
            </p>
          ))}

        </div>
      </div>
    </section>
  );
}
