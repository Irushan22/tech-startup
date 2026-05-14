import Link from "next/link";
import Navbar from "./components/Navbar";
import FooterSection from "./components/FooterSection";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white pt-32 pb-20"
        style={{ fontFamily: "var(--font-raleway), sans-serif" }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--brand-navy) 1px, transparent 1px), linear-gradient(90deg, var(--brand-navy) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-0.5 w-12" style={{ background: "var(--brand-blue)" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--brand-blue)" }}>
              Error 404
            </span>
            <span className="h-0.5 w-12" style={{ background: "var(--brand-blue)" }} />
          </div>

          <h1
            className="text-7xl font-extrabold leading-none sm:text-8xl"
            style={{
              background: "linear-gradient(135deg, var(--brand-navy), var(--brand-blue-light))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "var(--font-montserrat), sans-serif",
            }}
          >
            404
          </h1>

          <h2
            className="mt-6 text-2xl font-extrabold sm:text-3xl"
            style={{ color: "var(--brand-navy-dark)", fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Page Not Found
          </h2>

          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            The page you’re looking for doesn’t exist or has been moved. Let’s
            get you back on track.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "var(--btn-primary-bg)",
                color: "var(--btn-primary-text)",
                clipPath: "polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)",
                boxShadow: "0 4px 20px rgba(26,58,92,0.3)",
              }}
            >
              Back to Home
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-navy/5"
              style={{
                background: "var(--btn-secondary-bg)",
                color: "var(--btn-secondary-text)",
                border: "2px solid var(--btn-secondary-border)",
                clipPath: "polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
