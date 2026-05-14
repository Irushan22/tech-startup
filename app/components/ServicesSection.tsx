"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  services,
  servicesEyebrow,
  servicesHeadlineLine1,
  servicesHeadlineHighlight,
  type Service,
} from "../config/siteData";

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section
      id="services"
      className="relative bg-white min-h-[calc(100vh-88px)] flex flex-col justify-center overflow-hidden pt-20 pb-20"
      style={{
        fontFamily: "var(--font-raleway), sans-serif",
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        
        {/* Header Row: Title on left, Navigation arrows on right */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <div>
            <div className="mb-3 flex items-center gap-4">
              <span className="h-0.5 w-12" style={{ background: "#2a5a8c" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#2a5a8c" }}>
                {servicesEyebrow}
              </span>
            </div>

            <h2
              className="text-3xl font-extrabold leading-tight sm:text-4xl"
              style={{ color: "#0f1f2e", fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              {servicesHeadlineLine1}<span style={{ color: "#1a3a5c" }}>{servicesHeadlineHighlight}</span>
            </h2>
          </div>

          {/* Custom Navigation Arrows */}
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              className="swiper-btn-prev flex h-12 w-12 items-center justify-center border border-[#1a3a5c]/20 text-[#1a3a5c] hover:bg-[#1a3a5c] hover:text-white transition-all duration-300 cursor-pointer"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <button
              className="swiper-btn-next flex h-12 w-12 items-center justify-center border border-[#1a3a5c]/20 text-[#1a3a5c] hover:bg-[#1a3a5c] hover:text-white transition-all duration-300 cursor-pointer"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Swiper Carousel */}
      <div className="relative z-10 w-full pl-6 lg:pl-[calc((100%-1280px)/2+32px)]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1.8 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 3.8 },
          }}
          navigation={{
            prevEl: ".swiper-btn-prev",
            nextEl: ".swiper-btn-next",
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          loop={true}
          className="!overflow-visible"
        >
          {services.map((service, i) => (
            <SwiperSlide key={i}>
              <div
                onClick={() => setSelectedService(service)}
                className="group relative flex flex-col justify-between h-[320px] p-8 lg:p-10 cursor-pointer transition-all duration-500 hover:shadow-2xl"
                style={{
                  background: "#f8fafc",
                  borderRadius: "2px",
                }}
              >
                {/* Top accent – scales in on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#1a3a5c] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

                {/* Number watermark */}
                <span
                  className="absolute top-4 right-6 text-6xl font-extrabold pointer-events-none select-none opacity-[0.04] transition-opacity duration-300 group-hover:opacity-[0.08]"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif", color: "#1a3a5c" }}
                >
                  {service.num}
                </span>

                {/* Icon + Content */}
                <div>
                  <div 
                    className="mb-6 flex h-14 w-14 items-center justify-center rounded-sm transition-all duration-300 group-hover:bg-[#1a3a5c] group-hover:shadow-lg"
                    style={{ background: "rgba(26,58,92,0.06)" }}
                  >
                    <div className="text-[#1a3a5c] group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>

                  <h3 
                    className="mb-3 text-xl font-bold leading-snug"
                    style={{ color: "#0f1f2e", fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {service.title}
                  </h3>

                  <p className="text-[#4a5e72] leading-relaxed text-sm">
                    {service.desc}
                  </p>
                </div>

                {/* Learn More */}
                <div className="flex items-center gap-2 text-[#1a3a5c] mt-4">
                  <span className="text-xs font-bold uppercase tracking-wider">Explore</span>
                  <svg className="h-3.5 w-3.5 transform transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Detail Popup Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedService(null)}
          style={{ background: "rgba(15, 31, 46, 0.8)", backdropFilter: "blur(8px)" }}
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-2xl overflow-hidden bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "fade-in-up 0.3s ease-out forwards" }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between bg-white px-8 py-6 border-b border-[var(--border-subtle)]">
              <div className="flex items-center gap-4">
                <div 
                    className="flex h-12 w-12 items-center justify-center rounded-sm bg-[var(--brand-navy)] text-white shadow-lg"
                >
                  {selectedService.icon}
                </div>
                <h3 className="text-2xl font-bold" style={{ color: "var(--text-primary)", fontFamily: "var(--font-montserrat), sans-serif" }}>
                  {selectedService.title}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedService(null)}
                className="text-[var(--text-muted)] hover:text-[var(--brand-navy)] transition-colors p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
                {selectedService.desc}
              </p>

              <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--brand-blue)] mb-4">Core Capabilities</h4>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedService.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-medium text-[var(--text-primary)]">
                    <svg className="h-5 w-5 shrink-0 text-[var(--brand-navy)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Call to Action */}
              <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end">
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{
                    background: "var(--brand-navy)",
                  }}
                >
                  Request Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Component-scoped Swiper tweak */}
      <style jsx global>{`
        #services .swiper-wrapper {
          padding-bottom: 8px;
        }
      `}</style>
    </section>
  );
}
