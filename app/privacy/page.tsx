import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";
import { brand, contact } from "../config/siteData";

export const metadata: Metadata = {
  title: `Privacy Policy — ${brand.name}`,
  description: `Privacy policy for ${brand.name}.`,
};

const lastUpdated = "January 1, 2026";

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-text-secondary">Last updated: {lastUpdated}</p>

          <div className="mt-10 space-y-8 text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-brand-navy-dark mb-3" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                1. Introduction
              </h2>
              <p>
                {brand.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;)
                respects your privacy and is committed to protecting your personal
                data. This privacy policy explains how we collect, use, and safeguard
                information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-navy-dark mb-3" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                2. Information We Collect
              </h2>
              <p>We may collect the following categories of information:</p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>Contact details you submit through forms (name, email, company, message).</li>
                <li>Technical data such as IP address, browser type and version, device information.</li>
                <li>Usage data: pages visited, time on page, referral source.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-navy-dark mb-3" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                3. How We Use Information
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to inquiries you submit through our contact channels.</li>
                <li>To improve our website and the services we offer.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>

            <section id="cookies">
              <h2 className="text-xl font-bold text-brand-navy-dark mb-3" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                4. Cookies
              </h2>
              <p>
                Our site may use cookies and similar tracking technologies to remember
                preferences and analyze traffic. You can disable cookies through your
                browser settings. Doing so may affect site functionality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-navy-dark mb-3" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                5. Third-Party Services
              </h2>
              <p>
                We may use third-party providers for analytics, hosting, and messaging
                (for example WhatsApp for inbound enquiries). These providers process
                data under their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-navy-dark mb-3" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                6. Your Rights
              </h2>
              <p>
                You have the right to access, correct, or request deletion of personal
                data we hold about you. To exercise these rights, contact us at the
                email below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-navy-dark mb-3" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                7. Contact
              </h2>
              <p>
                Questions about this policy? Email us at{" "}
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
