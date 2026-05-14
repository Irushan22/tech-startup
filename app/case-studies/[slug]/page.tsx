import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import FooterSection from "../../components/FooterSection";
import { projects, brand } from "../../config/siteData";

type Params = { slug: string };

/* ---------- Static params: pre-render every case study at build time ---------- */
export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

/* ---------- Per-page SEO metadata ---------- */
export async function generateMetadata(
  { params }: { params: Promise<Params> },
): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: `Case Study Not Found — ${brand.name}` };
  return {
    title: `${project.title} — ${brand.name}`,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
      images: [project.image],
    },
  };
}

export default async function CaseStudyPage(
  { params }: { params: Promise<Params> },
) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Navbar />

      <main
        className="relative bg-white"
        style={{ fontFamily: "var(--font-raleway), sans-serif" }}
      >
        {/* ============================================================ HERO */}
        <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(15,31,46,0.92) 0%, rgba(15,31,46,0.6) 60%, rgba(15,31,46,0.3) 100%)",
            }}
          />

          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-16 lg:px-8 lg:pb-20">
            <Link
              href="/#portfolio"
              className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70 transition-colors hover:text-white"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              All Case Studies
            </Link>

            <div className="mb-4 flex items-center gap-4">
              <span className="h-0.5 w-12" style={{ background: "rgba(255,255,255,0.5)" }} />
              <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                {project.category} · {project.year}
              </span>
            </div>

            <h1
              className="max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
              {project.tagline}
            </p>
          </div>
        </section>

        {/* ===================================================== META INFO BAR */}
        <section className="border-b border-[color:var(--border-subtle)] bg-white">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-6 px-6 py-10 lg:grid-cols-4 lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-blue">Client</p>
              <p className="mt-2 text-base font-bold text-brand-navy-dark">{project.client}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-blue">Industry</p>
              <p className="mt-2 text-base font-bold text-brand-navy-dark">{project.industry}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-blue">Timeline</p>
              <p className="mt-2 text-base font-bold text-brand-navy-dark">{project.timeline}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-blue">Services</p>
              <p className="mt-2 text-sm font-medium text-brand-navy-dark">
                {project.services.join(" · ")}
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ CHALLENGE + APPROACH */}
        <section className="bg-white py-24 lg:py-32">
          <div className="mx-auto grid w-full max-w-6xl gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div>
              <div className="mb-3 flex items-center gap-4">
                <span className="h-0.5 w-12 bg-brand-blue" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
                  The Challenge
                </span>
              </div>
              <h2
                className="text-3xl font-extrabold leading-tight text-brand-navy-dark sm:text-4xl"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                What we were up against.
              </h2>
              {project.challenge.split("\n\n").map((para, i) => (
                <p key={i} className="mt-6 text-base leading-relaxed text-text-secondary">
                  {para}
                </p>
              ))}
            </div>

            <div>
              <div className="mb-3 flex items-center gap-4">
                <span className="h-0.5 w-12 bg-brand-blue" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
                  Our Approach
                </span>
              </div>
              <h2
                className="text-3xl font-extrabold leading-tight text-brand-navy-dark sm:text-4xl"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                How we solved it.
              </h2>
              {project.approach.split("\n\n").map((para, i) => (
                <p key={i} className="mt-6 text-base leading-relaxed text-text-secondary">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ RESULTS */}
        <section className="relative overflow-hidden py-24 lg:py-32"
          style={{
            background:
              "linear-gradient(135deg, var(--brand-navy-dark) 0%, var(--brand-navy) 50%, var(--brand-navy-dark) 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="mb-16 text-center">
              <div className="mb-3 flex items-center justify-center gap-4">
                <span className="h-0.5 w-12" style={{ background: "rgba(255,255,255,0.4)" }} />
                <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                  The Results
                </span>
                <span className="h-0.5 w-12" style={{ background: "rgba(255,255,255,0.4)" }} />
              </div>
              <h2
                className="text-3xl font-extrabold leading-tight text-white sm:text-4xl"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                Outcomes that moved the business.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
              {project.results.map((r) => (
                <div
                  key={r.label}
                  className="relative bg-white/[0.04] p-8 lg:p-10 backdrop-blur-sm"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <p
                    className="text-5xl font-extrabold leading-none text-white sm:text-6xl"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {r.value}
                  </p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-widest text-white/60">
                    {r.label}
                  </p>
                  {r.description && (
                    <p className="mt-3 text-sm leading-relaxed text-white/50">
                      {r.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ GALLERY */}
        {project.gallery.length > 0 && (
          <section className="bg-surface-soft py-24 lg:py-32">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
              <div className="mb-12 flex items-center gap-4">
                <span className="h-0.5 w-12 bg-brand-blue" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
                  Project Gallery
                </span>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {project.gallery.map((src, i) => (
                  <div
                    key={src}
                    className="relative aspect-[4/3] overflow-hidden bg-white shadow-lg"
                  >
                    <Image
                      src={src}
                      alt={`${project.title} — image ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ============================================================ PREV / NEXT */}
        <section className="bg-white py-20">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-10">
              <Link
                href={`/case-studies/${prev.slug}`}
                className="group relative block aspect-[16/9] overflow-hidden"
              >
                <Image
                  src={prev.image}
                  alt={prev.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(15,31,46,0.85) 0%, rgba(15,31,46,0.4) 60%, rgba(15,31,46,0.15) 100%)",
                  }}
                />
                <div className="absolute inset-0 flex flex-col justify-center p-8 lg:p-12">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/60">
                    ← Previous Case Study
                  </p>
                  <h3
                    className="mt-3 max-w-md text-xl font-extrabold text-white sm:text-2xl"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {prev.title}
                  </h3>
                </div>
              </Link>

              <Link
                href={`/case-studies/${next.slug}`}
                className="group relative block aspect-[16/9] overflow-hidden"
              >
                <Image
                  src={next.image}
                  alt={next.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(15,31,46,0.85) 0%, rgba(15,31,46,0.4) 60%, rgba(15,31,46,0.15) 100%)",
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-end justify-center p-8 text-right lg:p-12">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/60">
                    Next Case Study →
                  </p>
                  <h3
                    className="mt-3 max-w-md text-xl font-extrabold text-white sm:text-2xl"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {next.title}
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
