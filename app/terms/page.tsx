import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";
import { brand, contact } from "../config/siteData";

export const metadata: Metadata = {
  title: `Terms of Service — ${brand.name}`,
  description: `Terms of service for ${brand.name}.`,
};

const lastUpdated = "January 1, 2026";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main
        className="relative bg-white pt-40 pb-20"
        style={{ fontFamily: "var(--font-raleway), sans-serif" }}
      >
        <div className="mx-auto w-full max-w-3xl px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-0.5 w-12" style={{ background: "var(--brand-blue)" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--brand-blue)" }}>
              Legal
            </span>
          </div>

          <h1
            className="text-3xl font-extrabold leading-tight sm:text-4xl"
            style={{ color: "var(--brand-navy-dark)", fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-text-secondary">Last updated: {lastUpdated}</p>

          <div className="mt-10 space-y-8 text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-brand-navy-dark mb-3" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the {brand.name} website, you agree to be bound
                by these Terms of Service. If you do not agree, please do not use the
                site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-navy-dark mb-3" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                2. Use of the Site
              </h2>
              <p>
                You agree to use this site only for lawful purposes and in a way that
                does not infringe the rights of, restrict, or inhibit anyone else&apos;s
                use of the site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-navy-dark mb-3" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                3. Intellectual Property
              </h2>
              <p>
                All content on this site — including text, graphics, logos, and
                code — is the property of {brand.name} or its licensors and is
                protected by intellectual property laws. You may not reproduce,
                distribute, or create derivative works without prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-navy-dark mb-3" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                4. Disclaimer
              </h2>
              <p>
                The information on this site is provided on an &ldquo;as is&rdquo; basis
                without warranties of any kind, either express or implied. {brand.name}
                makes no warranty that the site will be uninterrupted, error-free, or
                free of viruses or other harmful components.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-navy-dark mb-3" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                5. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, {brand.name} shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages arising out of your access to or use of the site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-navy-dark mb-3" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                6. Changes to These Terms
              </h2>
              <p>
                We may revise these terms from time to time. The most current version
                will always be posted on this page. Your continued use of the site
                after changes are posted constitutes acceptance of those changes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-navy-dark mb-3" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                7. Contact
              </h2>
              <p>
                Questions about these terms? Email{" "}
                <a href={`mailto:${contact.email}`} className="text-brand-navy font-semibold underline">
                  {contact.email}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
