"use client";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex items-center bg-white min-h-[calc(100vh-88px)] overflow-hidden pt-20 pb-20"
      style={{
        fontFamily: "var(--font-raleway), sans-serif",
      }}
    >
      {/* Background Subtle Elements */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#1a3a5c 1px, transparent 1px), linear-gradient(90deg, #1a3a5c 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-20 h-64 w-64 opacity-5"
        style={{
          background: "#1a3a5c",
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:items-center lg:gap-20 lg:px-8">
        
        {/* Left — Core Values (Moved from right side) */}
        <div className="flex w-full lg:w-1/2 flex-col justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-2xl">
            {[
              { title: "Data-Driven Approach", desc: "No guesswork. Just analytics and actionable insights." },
              { title: "Creative Impact", desc: "Award-winning designs that capture attention." },
              { title: "Transparent ROI", desc: "Clear reporting on every metric that matters." },
              { title: "Dedicated Experts", desc: "A seasoned team fully committed to your success." },
              { title: "Agile Execution", desc: "Rapid iterations to stay ahead of market trends." },
              { title: "Global Reach", desc: "Strategies designed to scale across localized markets." },
            ].map((feature, i) => (
              <div key={i} className="flex gap-4 items-start text-left">
                <div 
                  className="flex h-12 w-12 shrink-0 items-center justify-center"
                  style={{ 
                    background: "rgba(26,58,92,0.08)",
                    clipPath: "polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)",
                  }}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#1a3a5c" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "#0f1f2e", fontFamily: "var(--font-montserrat), sans-serif" }}>{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Content */}
        <div className="flex w-full lg:w-1/2 flex-col items-center text-center lg:items-start lg:text-left">
          
          {/* Section Subheading */}
          <div className="mb-6 flex items-center gap-4">
            <span className="h-0.5 w-12" style={{ background: "#2a5a8c" }} />
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#2a5a8c" }}>
              About Us
            </span>
          </div>

          {/* Headline */}
          <h2
            className="mb-8 text-4xl font-extrabold leading-tight sm:text-5xl md:text-5xl lg:text-5xl"
            style={{ color: "#0f1f2e", fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            We don’t just build campaigns.<br/><br className="lg:hidden"/>
            We build <span style={{ color: "#1a3a5c" }}>brands.</span>
          </h2>

          {/* Description */}
          <p className="mb-6 text-lg leading-relaxed text-[#4a5e72]">
            Based at the intersection of creativity and data, CODERAFT is a full-service digital marketing agency dedicated to empowering businesses. We understand that in today's saturated digital landscape, generalized strategies fall flat. 
          </p>
          <p className="mb-2 text-lg leading-relaxed text-[#4a5e72]">
            That’s why we craft bespoke, laser-focused solutions tailored precisely to your brand’s DNA and your audience’s behavior. From technical SEO frameworks to immersive content campaigns, we engineer growth systems that scale.
          </p>

        </div>
      </div>
    </section>
  );
}
