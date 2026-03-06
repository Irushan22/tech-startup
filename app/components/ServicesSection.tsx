"use client";

export default function ServicesSection() {
  const services = [
    {
      title: "Search Engine Optimization",
      desc: "Data-backed SEO strategies to dominate search results and drive high-intent organic traffic to your brand.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 10v4m0 0l-2-2m2 2l2-2" />
        </svg>
      ),
    },
    {
      title: "Performance Marketing",
      desc: "Hyper-targeted paid media campaigns across Google, Meta, and LinkedIn designed for maximum ROI and low CPA.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: "Brand Strategy & Identity",
      desc: "Comprehensive brand positioning, visual identity design, and messaging frameworks that resonate with your audience.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: "Web Development",
      desc: "High-performance, beautifully designed, and conversion-optimized websites built on modern tech stacks.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "Content Marketing",
      desc: "Engaging, authoritative content that builds trust, nurtures leads, and establishes your brand as an industry leader.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      title: "Conversion Optimization",
      desc: "A/B testing and UX refinements to minimize friction and maximize the percentage of visitors who convert.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="services"
      className="relative flex items-center bg-[#f8fafc] min-h-[calc(100vh-88px)] overflow-hidden py-10"
      style={{
        fontFamily: "var(--font-raleway), sans-serif",
      }}
    >
      {/* Background Decor Removed */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10">
          <div className="mb-2 flex items-center gap-4">
            <span className="h-0.5 w-12" style={{ background: "#2a5a8c" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#2a5a8c" }}>
              Our Capabilities
            </span>
            <span className="h-0.5 w-12" style={{ background: "#2a5a8c" }} />
          </div>

          <h2
            className="mb-2 text-3xl font-extrabold leading-tight sm:text-4xl"
            style={{ color: "#0f1f2e", fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            End-to-End Solutions for <span style={{ color: "#1a3a5c" }}>Digital Dominance</span>
          </h2>
          
          <p className="text-sm leading-relaxed text-[#4a5e72] font-medium hidden sm:block">
            We fuse deep technical expertise with award-winning creative to deliver full-funnel marketing strategies that systematically scale your revenue.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative flex flex-col p-6 transition-all duration-300 hover:-translate-y-2"
              style={{
                background: "#ffffff",
                boxShadow: "0 10px 40px rgba(26,58,92,0.05)",
                clipPath: "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
              }}
            >
              {/* Hover Top Border Accent */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 w-0 bg-[#1a3a5c] transition-all duration-300 group-hover:w-full"
              />

              {/* Icon */}
              <div 
                className="mb-2 flex h-8 w-8 items-center justify-center transition-colors duration-300 group-hover:bg-[#1a3a5c]"
                style={{ 
                  background: "rgba(26,58,92,0.05)",
                  clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)",
                }}
              >
                <div className="text-[#1a3a5c] group-hover:text-white transition-colors duration-300">
                  {/* Scaled down icon */}
                  <div style={{ transform: "scale(0.7)" }}>
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <h3 
                className="mb-1 text-base font-bold leading-tight" 
                style={{ color: "#0f1f2e", fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {service.title}
              </h3>
              <p className="text-[#4a5e72] leading-relaxed text-xs font-medium hidden sm:block">
                {service.desc}
              </p>

              {/* Learn More Link (Hover Reveal) */}
              <div className="mt-4 flex items-center gap-2 overflow-hidden opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <span className="text-sm font-bold uppercase tracking-wider text-[#1a3a5c]">Learn More</span>
                <svg className="h-4 w-4 text-[#1a3a5c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
