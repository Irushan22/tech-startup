"use client";

export default function PortfolioSection() {
  const projects = [
    {
      title: "FinTech App Launch",
      category: "Performance Marketing",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      stats: "+240% User Acquisition",
    },
    {
      title: "EcoBrand Identity",
      category: "Brand Strategy & Design",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
      stats: "Award-Winning Rebrand",
    },
    {
      title: "Global E-Com Scaling",
      category: "SEO & Content Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      stats: "$4M+ Organic Revenue",
    },
    {
      title: "SaaS Platform Redesign",
      category: "Web Development & UX",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      stats: "-40% Bounce Rate",
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative bg-white min-h-screen overflow-hidden py-24 lg:py-32"
      style={{
        fontFamily: "var(--font-raleway), sans-serif",
      }}
    >
      {/* Subtle Background Elements */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#1a3a5c 1px, transparent 1px), linear-gradient(90deg, #1a3a5c 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 bottom-0 h-48 w-48 opacity-5"
        style={{
          background: "#1a3a5c",
          clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
        }}
      />

      {/* Full-width container (No horizontal padding) */}
      <div className="relative z-10 w-full">
        
        {/* Header Area (Centered constraint) */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 px-6 lg:px-8">
          <div className="mb-2 flex items-center gap-4">
            <span className="h-0.5 w-12" style={{ background: "#2a5a8c" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#2a5a8c" }}>
              Our Work
            </span>
            <span className="h-0.5 w-12" style={{ background: "#2a5a8c" }} />
          </div>

          <h2
            className="mb-2 text-3xl font-extrabold leading-tight sm:text-4xl"
            style={{ color: "#0f1f2e", fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Case Studies that <span style={{ color: "#1a3a5c" }}>Prove the Process</span>
          </h2>
          
          <p className="text-sm leading-relaxed text-[#4a5e72] font-medium hidden sm:block">
            Take a look at how our customized, data-driven frameworks have generated measurable ROI and explosive growth for our partners.
          </p>
        </div>

        {/* Portfolio Grid - Display 4 items spanning the full width, touching edges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative overflow-hidden"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Removed clip path cut from images so they touch perfectly
              }}
            >
              {/* Image background - TALLER */}
              <div 
                className="relative h-96 sm:h-[450px] lg:h-[600px] w-full transform transition-transform duration-700 ease-out group-hover:scale-105"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                
                {/* Default Gradient Overlay */}
                <div 
                  className="absolute inset-0 opacity-40 transition-opacity duration-300 group-hover:opacity-60"
                  style={{
                    background: "linear-gradient(to top, #0f1f2e, transparent)",
                  }}
                />

                {/* Navy Blue Hover Overlay */}
                <div 
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-80"
                  style={{ background: "#1a3a5c" }}
                />
              </div>

              {/* Text Content overlaying the image */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                
                {/* Sliding Category Tag */}
                <span 
                  className="mb-2 inline-block self-start px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#1a3a5c] bg-white transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  style={{ clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)" }}
                >
                  {project.category}
                </span>

                {/* Title */}
                <h3 
                  className="text-2xl font-bold text-white mb-1 transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {project.title}
                </h3>
                
                {/* Highlighted Stat / Result */}
                <p 
                  className="text-white text-opacity-80 text-sm font-medium transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0"
                >
                  {project.stats}
                </p>

                {/* Arrow Icon (Hover Reveal) */}
                <div className="absolute right-6 lg:right-8 bottom-6 lg:bottom-8 transform translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  <div className="flex h-10 w-10 items-center justify-center bg-white" style={{ clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)" }}>
                    <svg className="h-5 w-5 text-[#1a3a5c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#2a5a8c]"
            style={{
              background: "#1a3a5c",
              color: "#ffffff",
              clipPath: "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
              boxShadow: "0 4px 14px rgba(26,58,92,0.25)"
            }}
          >
            View All Projects
          </a>
        </div>

      </div>
    </section>
  );
}
