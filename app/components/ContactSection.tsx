"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 lg:py-32"
      style={{
        background: "linear-gradient(135deg, #0f1f2e 0%, #1a3a5c 50%, #0f1f2e 100%)",
        fontFamily: "var(--font-raleway), sans-serif",
      }}
    >
      {/* Background Geometric Elements */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-[50%] opacity-[0.04]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 60% 100%, 0 100%)",
          background: "#ffffff",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 bottom-0 h-full w-[35%] opacity-[0.03]"
        style={{
          clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0 100%)",
          background: "#ffffff",
        }}
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
              <span className="h-0.5 w-12" style={{ background: "rgba(255,255,255,0.4)" }} />
              <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                Get in Touch
              </span>
            </div>

            <h2
              className="mb-6 text-3xl font-extrabold leading-tight sm:text-4xl text-white"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Ready to Accelerate <br />
              <span className="text-white/70">Your Growth?</span>
            </h2>

            <p className="mb-12 text-base leading-relaxed text-white/50 max-w-md">
              Let's discuss how our data-driven strategies can transform your digital presence and drive measurable results for your business.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center bg-white/5"
                  style={{ clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" }}
                >
                  <svg className="h-5 w-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/40">Email Us</p>
                  <p className="text-white font-medium text-sm">hello@coderaft.agency</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center bg-white/5"
                  style={{ clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" }}
                >
                  <svg className="h-5 w-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/40">Call Us</p>
                  <p className="text-white font-medium text-sm">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center bg-white/5"
                  style={{ clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" }}
                >
                  <svg className="h-5 w-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/40">Visit Us</p>
                  <p className="text-white font-medium text-sm">123 Innovation Drive, San Francisco</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side – Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="relative bg-white/[0.04] backdrop-blur-sm p-8 lg:p-10"
              style={{
                clipPath: "polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/40 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-white/[0.06] text-white text-sm px-4 py-3 outline-none placeholder-white/20 transition-colors duration-200 focus:bg-white/[0.1]"
                    style={{
                      clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
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
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full bg-white/[0.06] text-white text-sm px-4 py-3 outline-none placeholder-white/20 transition-colors duration-200 focus:bg-white/[0.1]"
                    style={{
                      clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
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
                    className="w-full bg-white/[0.06] text-white text-sm px-4 py-3 outline-none placeholder-white/20 transition-colors duration-200 focus:bg-white/[0.1]"
                    style={{
                      clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
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
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full bg-white/[0.06] text-white text-sm px-4 py-3 outline-none placeholder-white/20 transition-colors duration-200 focus:bg-white/[0.1] resize-none"
                    style={{
                      clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-8 w-full inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:opacity-90 cursor-pointer"
                style={{
                  background: "#ffffff",
                  color: "#1a3a5c",
                  clipPath: "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
                }}
              >
                Send Message
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
