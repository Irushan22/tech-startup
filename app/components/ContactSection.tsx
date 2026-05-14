"use client";

import { useState } from "react";
import { contact, contactSection } from "../config/siteData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      `Hi! I'd like to get in touch.`,
      ``,
      `*Name:* ${formData.name}`,
      `*Email:* ${formData.email}`,
    ];
    if (formData.company.trim()) lines.push(`*Company:* ${formData.company}`);
    lines.push(``, formData.message);

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${contact.whatsappNumber}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 lg:py-32"
      style={{
        background:
          "linear-gradient(135deg, #0f1f2e 0%, #1a3a5c 50%, #0f1f2e 100%)",
        fontFamily: "var(--font-raleway), sans-serif",
      }}
    >
      {/* Background Geometric Elements */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-[0.04]"
        style={{ background: "#ffffff" }}
      />

      {/* Subtle Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side – Heading & Info */}
          <div>
            <div className="mb-4 flex items-center gap-4">
              <span
                className="h-0.5 w-12"
                style={{ background: "rgba(255,255,255,0.4)" }}
              />
              <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                {contactSection.eyebrow}
              </span>
            </div>

            <h2
              className="mb-6 text-3xl font-extrabold leading-tight sm:text-4xl text-white"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              {contactSection.headlineLine1} <br />
              <span className="text-white/70">
                {contactSection.headlineLine2}
              </span>
            </h2>

            <p className="mb-12 text-base leading-relaxed text-white/50 max-w-md">
              {contactSection.description}
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center bg-white/5"
                  style={{
                    clipPath:
                      "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                  }}
                >
                  <svg
                    className="h-5 w-5 text-white/60"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                    Email Us
                  </p>
                  <p className="text-white font-medium text-sm">
                    {contact.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center bg-white/5"
                  style={{
                    clipPath:
                      "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                  }}
                >
                  <svg
                    className="h-5 w-5 text-white/60"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                    Call Us
                  </p>
                  <p className="text-white font-medium text-sm">
                    {contact.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center bg-white/5"
                  style={{
                    clipPath:
                      "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                  }}
                >
                  <svg
                    className="h-5 w-5 text-white/60"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                    Visit Us
                  </p>
                  <p className="text-white font-medium text-sm">
                    {contact.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side – Contact Form */}
          <div>
            <div
              className="relative bg-white/[0.04] backdrop-blur-sm p-8 lg:p-10 min-h-[500px] flex flex-col justify-center"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <form onSubmit={handleSubmit}>
                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/40 mb-2">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-white/[0.06] text-white text-sm px-4 py-3 outline-none placeholder-white/20 transition-colors duration-200 focus:bg-white/[0.1] focus-visible:ring-2 focus-visible:ring-white/30"
                      style={{
                        clipPath:
                          "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/40 mb-2">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full bg-white/[0.06] text-white text-sm px-4 py-3 outline-none placeholder-white/20 transition-colors duration-200 focus:bg-white/[0.1] focus-visible:ring-2 focus-visible:ring-white/30"
                      style={{
                        clipPath:
                          "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/40 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full bg-white/[0.06] text-white text-sm px-4 py-3 outline-none placeholder-white/20 transition-colors duration-200 focus:bg-white/[0.1] focus-visible:ring-2 focus-visible:ring-white/30"
                      style={{
                        clipPath:
                          "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/40 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={4}
                      className="w-full bg-white/[0.06] text-white text-sm px-4 py-3 outline-none placeholder-white/20 transition-colors duration-200 focus:bg-white/[0.1] resize-none focus-visible:ring-2 focus-visible:ring-white/30"
                      style={{
                        clipPath:
                          "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="mt-8 relative w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:opacity-90 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a3a5c]"
                  style={{
                    background: "#ffffff",
                    color: "#1a3a5c",
                    clipPath:
                      "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
                  }}
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  Chat on WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
