"use client";

import { useState } from "react";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Marketing", "Branding", "Development", "SEO"];

  const projects = [
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

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="relative bg-[#f8fafc] overflow-hidden py-20"
      style={{
        fontFamily: "var(--font-raleway), sans-serif",
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <div>
            <div className="mb-3 flex items-center gap-4">
              <span className="h-0.5 w-12" style={{ background: "#2a5a8c" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#2a5a8c" }}>
                Our Work
              </span>
            </div>
            <h2
              className="text-3xl font-extrabold leading-tight sm:text-4xl"
              style={{ color: "#0f1f2e", fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Case Studies that <span style={{ color: "#1a3a5c" }}>Prove the Process</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-6 md:mt-0">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeFilter === f
                    ? "bg-[#1a3a5c] text-white"
                    : "bg-transparent text-[#1a3a5c]/60 hover:text-[#1a3a5c] border border-[#1a3a5c]/15 hover:border-[#1a3a5c]/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid – 3 cols, no gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[220px]">
          {filteredProjects.map((project, i) => (
            <div
              key={project.title}
              className="group relative overflow-hidden cursor-pointer transition-all duration-500"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Static dark gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(15,31,46,0.3) 0%, rgba(15,31,46,0.6) 50%, rgba(15,31,46,0.9) 100%)",
                }}
              />

              {/* Content – always visible */}
              <div className="absolute inset-0 flex flex-col justify-between p-5 lg:p-6">
                
                {/* Top Row – Category + Stats */}
                <div className="flex items-start justify-between">
                  <span className="px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-white bg-white/10 backdrop-blur-sm">
                    {project.category}
                  </span>

                  {/* Stats Badge */}
                  <div className="text-right">
                    <span
                      className="text-2xl font-extrabold text-white block leading-none"
                      style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                    >
                      {project.stats}
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/60 mt-0.5 block">
                      {project.statsLabel}
                    </span>
                  </div>
                </div>

                {/* Bottom Row – Title + Arrow */}
                <div className="flex items-end justify-between">
                  <div>
                    <h3
                      className="text-lg lg:text-xl font-bold text-white leading-tight"
                      style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                    >
                      {project.title}
                    </h3>
                  </div>

                  {/* Arrow */}
                  <div className="flex h-9 w-9 items-center justify-center bg-white text-[#1a3a5c]">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 bg-[#1a3a5c] px-8 py-4 text-sm font-bold tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0f1f2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3a5c] focus-visible:ring-offset-2"
            style={{
              clipPath: "polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)",
            }}
          >
            VIEW ALL PROJECTS
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
