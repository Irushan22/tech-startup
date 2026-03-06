"use client";

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
              style={{ color: "#0f1f2e" }}
            >
              Elevate Your
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #1a3a5c, #2a6aac)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Brand
              </span>
              <br />
              Presence
            </h1>

            {/* Subtitle */}
            <p
              className="mt-8 text-lg leading-relaxed sm:text-md"
              style={{ color: "#4a5e72" }}
            >
              We craft data-driven digital marketing strategies that amplify your
              brand, engage audiences, and drive measurable growth for your
              business.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "#1a3a5c",
                color: "#ffffff",
                clipPath: "polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)",
                boxShadow: "0 4px 20px rgba(26,58,92,0.3)",
              }}
            >
              Start Your Campaign
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
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "transparent",
                color: "#1a3a5c",
                border: "2px solid #1a3a5c",
                clipPath: "polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)",
              }}
            >
              View Our Work
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
          {/* Main image */}
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80"
            alt="Marketing team collaborating on strategy"
            className="h-full w-full object-cover"
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
              background: "#1a3a5c", // theme color
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div className="flex flex-col items-center">
              <span className="text-3xl font-extrabold text-white">450+</span>
              <span className="text-xs uppercase tracking-wider mt-1 font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>Projects Delivered</span>
            </div>
            <div className="h-10 w-px" style={{ background: "rgba(255,255,255,0.15)" }} />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-extrabold text-white">98%</span>
              <span className="text-xs uppercase tracking-wider mt-1 font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>Success Rate</span>
            </div>
            <div className="h-10 w-px" style={{ background: "rgba(255,255,255,0.15)" }} />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-extrabold text-white">12M+</span>
              <span className="text-xs uppercase tracking-wider mt-1 font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>Revenue Generated</span>
            </div>
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
