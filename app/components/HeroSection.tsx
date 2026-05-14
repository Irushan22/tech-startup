"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { hero } from "../config/siteData";

function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function HeroSection() {
  return (
    <section
      className="relative h-screen overflow-hidden flex items-center bg-white"
      style={{
        fontFamily: "var(--font-raleway), sans-serif",
      }}
    >

      {/* ===== Content ===== */}
      <div className="relative z-10 flex h-full w-full">

        {/* Left — Copy (50% width) */}
        <div className="flex w-full lg:w-[55%] flex-col justify-center px-6 lg:px-16 xl:px-24 pt-16">
          
          <div className="flex flex-col items-start text-left max-w-xl">
            {/* Headline */}
            <h1
              className="font-extrabold leading-[1.05] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[4rem]"
              style={{ color: "var(--brand-navy-dark)" }}
            >
              {hero.headlineLine1}
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, var(--brand-navy), var(--brand-blue-light))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {hero.headlineHighlight}
              </span>
              <br />
              {hero.headlineLine3}
            </h1>

            {/* Subtitle */}
            <p
              className="mt-8 text-lg leading-relaxed sm:text-md"
              style={{ color: "var(--text-secondary)" }}
            >
              {hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "var(--btn-primary-bg)",
                color: "var(--btn-primary-text)",
                clipPath: "polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)",
                boxShadow: "0 4px 20px rgba(26,58,92,0.3)",
              }}
            >
              {hero.primaryCta.label}
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-navy/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2"
              style={{
                background: "var(--btn-secondary-bg)",
                color: "var(--btn-secondary-text)",
                border: "2px solid var(--btn-secondary-border)",
                clipPath: "polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)",
              }}
            >
              {hero.secondaryCta.label}
            </a>
          </div>
          </div>
        </div>

        {/* Right — Full Height Image */}
        <div 
          className="absolute right-0 top-0 bottom-0 z-0 hidden lg:block w-[55%]"
          style={{
            clipPath: "polygon(140px 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          {/* Main image optimized with next/image */}
          <Image
            src={hero.image}
            alt={hero.imageAlt}
            fill
            className="object-cover"
            priority /* load hero images immediately */
          />
          
          <div
            className="absolute inset-0 z-10"
            style={{
              background: "linear-gradient(to left, transparent 0%, rgba(26,58,92,0.8) 100%)",
            }}
          />

          {/* Bottom Stats Bar */}
          <div
            className="absolute bottom-0 left-0 right-0 z-20 flex h-28 items-center justify-around pr-8 pl-[8%]"
            style={{
              background: "var(--brand-navy)", // theme color
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {hero.stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-extrabold text-white">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-xs uppercase tracking-wider mt-1 font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>{stat.label}</span>
                </div>
                {i < hero.stats.length - 1 && (
                  <div className="h-10 w-px ml-8 mr-8" style={{ background: "rgba(255,255,255,0.15)" }} />
                )}
              </div>
            ))}
          </div>



        </div>
      </div>

      {/* Bottom angled divider */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0"
        style={{
          height: "80px",
          background: "linear-gradient(to top, #ffffff, transparent)",
        }}
      />
    </section>
  );
}
