export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* ===== Background Shapes ===== */}

      {/* Large circle — top right */}
      <div
        className="pointer-events-none absolute animate-pulse-glow"
        style={{
          width: "700px",
          height: "700px",
          top: "-15%",
          right: "-10%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(90,154,74,0.06) 0%, transparent 70%)",
          border: "1px solid rgba(90,154,74,0.06)",
        }}
      />

      {/* Medium circle — bottom left */}
      <div
        className="pointer-events-none absolute animate-pulse-glow delay-200"
        style={{
          width: "500px",
          height: "500px",
          bottom: "-10%",
          left: "-8%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(58,143,212,0.05) 0%, transparent 70%)",
          border: "1px solid rgba(58,143,212,0.05)",
        }}
      />

      {/* Rotating ring — center */}
      <div
        className="pointer-events-none absolute animate-shape-rotate"
        style={{
          width: "900px",
          height: "900px",
          top: "50%",
          left: "50%",
          marginTop: "-450px",
          marginLeft: "-450px",
          borderRadius: "50%",
          border: "1px solid rgba(90,154,74,0.04)",
        }}
      />

      {/* Small decorative dot cluster — top left */}
      <div className="pointer-events-none absolute top-[12%] left-[8%] animate-float-slow delay-300">
        <div
          className="h-3 w-3 rounded-full"
          style={{ background: "rgba(90,154,74,0.25)" }}
        />
        <div
          className="mt-3 ml-4 h-2 w-2 rounded-full"
          style={{ background: "rgba(58,143,212,0.2)" }}
        />
        <div
          className="mt-2 -ml-1 h-1.5 w-1.5 rounded-full"
          style={{ background: "rgba(90,154,74,0.15)" }}
        />
      </div>

      {/* Diagonal line accent — right side */}
      <div
        className="pointer-events-none absolute hidden lg:block"
        style={{
          width: "1px",
          height: "300px",
          top: "15%",
          right: "18%",
          background: "linear-gradient(to bottom, transparent, rgba(90,154,74,0.12), transparent)",
          transform: "rotate(25deg)",
        }}
      />

      {/* Cross shape — bottom right */}
      <div className="pointer-events-none absolute bottom-[20%] right-[12%] animate-float delay-400 hidden lg:block">
        <div
          style={{
            width: "20px",
            height: "2px",
            background: "rgba(58,143,212,0.15)",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "2px",
              height: "20px",
              background: "rgba(58,143,212,0.15)",
              position: "absolute",
              top: "-9px",
              left: "9px",
            }}
          />
        </div>
      </div>

      {/* Grid dots — subtle background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(90,154,74,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ===== Content ===== */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-16 px-6 pt-32 pb-20 lg:flex-row lg:items-center lg:gap-20 lg:px-8 lg:pt-36">

        {/* Left — Copy */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          {/* Badge */}
          <div
            className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold tracking-widest uppercase"
            style={{
              background: "rgba(90,154,74,0.08)",
              border: "1px solid rgba(90,154,74,0.15)",
              color: "#5a9a4a",
            }}
          >
            <span
              className="inline-block h-2 w-2 rounded-full animate-pulse"
              style={{ background: "#5a9a4a" }}
            />
            Web Development Agency
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up delay-100 font-extrabold leading-[1.05] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            <span style={{ color: "var(--text-primary)" }}>
              We Build
            </span>
            <br />
            <span className="gradient-text">Digital</span>
            <br />
            <span style={{ color: "var(--text-primary)" }}>
              Products
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="animate-fade-in-up delay-200 mt-8 max-w-lg text-lg leading-relaxed sm:text-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            From custom web apps to enterprise CMS solutions — we craft
            high-performance digital experiences that convert visitors into
            customers.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up delay-300 mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-full px-10 py-4 text-base font-bold sm:text-lg transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "#5a9a4a",
                color: "#ffffff",
                boxShadow: "0 4px 24px rgba(90,154,74,0.3)",
              }}
            >
              Start Your Project
              <svg
                className="h-5 w-5"
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
              href="#work"
              className="inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-semibold sm:text-lg transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "transparent",
                color: "#5a9a4a",
                border: "2px solid #5a9a4a",
              }}
            >
              View Our Work
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up delay-500 mt-16 flex gap-10 sm:gap-16">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "5+", label: "Years Experience" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center lg:items-start">
                <span
                  className="text-3xl font-extrabold sm:text-4xl"
                  style={{ color: "#5a9a4a" }}
                >
                  {s.value}
                </span>
                <span
                  className="mt-1 text-xs sm:text-sm font-medium"
                  style={{ color: "var(--text-muted)" }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Dashboard Mockup */}
        <div className="animate-slide-in-right delay-300 relative flex-1 flex justify-center lg:justify-end">
          <div className="animate-float relative w-full max-w-lg" style={{ animationDuration: "7s" }}>

            {/* Main dashboard card */}
            <div
              className="rounded-2xl p-6 shadow-2xl"
              style={{
                background: "var(--bg-card)",
                border: "1px solid rgba(90,154,74,0.1)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              {/* Dashboard header */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full" style={{ background: "rgba(232,245,189,0.8)" }} />
                  <div className="h-3 w-3 rounded-full" style={{ background: "rgba(90,154,74,0.5)" }} />
                  <div className="h-3 w-3 rounded-full" style={{ background: "rgba(58,143,212,0.5)" }} />
                </div>
                <div
                  className="rounded-md px-3 py-1 text-[11px] font-mono font-bold"
                  style={{
                    background: "rgba(90,154,74,0.1)",
                    color: "#5a9a4a",
                  }}
                >
                  Dashboard
                </div>
              </div>

              {/* Stats row */}
              <div className="mb-5 grid grid-cols-3 gap-3">
                {[
                  { label: "Revenue", value: "$48.2K", change: "+12.5%", color: "#5a9a4a" },
                  { label: "Users", value: "2,847", change: "+8.3%", color: "#3a8fd4" },
                  { label: "Growth", value: "23.6%", change: "+4.1%", color: "#6aad58" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl p-3"
                    style={{ background: "var(--bg-secondary)" }}
                  >
                    <p className="text-[10px] mb-1" style={{ color: "var(--text-muted)" }}>
                      {stat.label}
                    </p>
                    <p className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>
                      {stat.value}
                    </p>
                    <p className="text-[10px] font-bold mt-0.5" style={{ color: stat.color }}>
                      {stat.change}
                    </p>
                  </div>
                ))}
              </div>

              {/* Chart area */}
              <div
                className="rounded-xl p-4"
                style={{ background: "var(--bg-secondary)" }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[11px] font-semibold" style={{ color: "var(--text-muted)" }}>
                    Performance Overview
                  </span>
                  <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>
                    Last 7 days
                  </span>
                </div>
                {/* Bar chart */}
                <div className="flex items-end gap-2 h-28">
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md transition-all duration-300"
                      style={{
                        height: `${h}%`,
                        background: i === 5
                          ? "var(--gradient-primary)"
                          : "rgba(90,154,74,0.15)",
                        ["--bar-height" as string]: `${h}%`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-medium" style={{ color: "var(--text-muted)" }}>
                    Project Completion
                  </span>
                  <span className="text-[11px] font-mono font-bold" style={{ color: "#3a8fd4" }}>
                    87%
                  </span>
                </div>
                <div
                  className="h-2 w-full rounded-full overflow-hidden"
                  style={{ background: "rgba(90,154,74,0.06)" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: "87%",
                      background: "var(--gradient-accent)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Floating card — top right */}
            <div
              className="animate-float-slow absolute -top-5 -right-5 rounded-xl p-3.5 shadow-lg"
              style={{
                animationDelay: "1s",
                background: "var(--bg-card)",
                border: "1px solid rgba(58,143,212,0.12)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{ background: "rgba(58,143,212,0.1)" }}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#3a8fd4" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-semibold" style={{ color: "var(--text-primary)" }}>Conversions</p>
                  <p className="text-xs font-bold" style={{ color: "#3a8fd4" }}>+34.7%</p>
                </div>
              </div>
            </div>

            {/* Floating card — bottom left */}
            <div
              className="animate-float-slow absolute -bottom-4 -left-5 rounded-xl p-3.5 shadow-lg"
              style={{
                animationDelay: "2s",
                background: "var(--bg-card)",
                border: "1px solid rgba(90,154,74,0.12)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{ background: "rgba(90,154,74,0.1)" }}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#5a9a4a" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-semibold" style={{ color: "var(--text-primary)" }}>Tasks Done</p>
                  <p className="text-xs font-bold" style={{ color: "#5a9a4a" }}>142 / 163</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-40"
        style={{
          background: "linear-gradient(to top, var(--bg-primary), transparent)",
        }}
      />
    </section>
  );
}
