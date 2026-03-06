"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ServicesSection() {
  const services = [
    {
      title: "Search Engine Optimization",
      desc: "Data-backed SEO strategies to dominate search results and drive high-intent organic traffic to your brand.",
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 10v4m0 0l-2-2m2 2l2-2" />
        </svg>
      ),
      num: "01",
    },
    {
      title: "Performance Marketing",
      desc: "Hyper-targeted paid media campaigns across Google, Meta, and LinkedIn designed for maximum ROI and low CPA.",
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      num: "02",
    },
    {
      title: "Brand Strategy & Identity",
      desc: "Comprehensive brand positioning, visual identity design, and messaging frameworks that resonate with your audience.",
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      num: "03",
    },
    {
      title: "Web Development",
      desc: "High-performance, beautifully designed, and conversion-optimized websites built on modern tech stacks.",
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      num: "04",
    },
    {
      title: "Content Marketing",
      desc: "Engaging, authoritative content that builds trust, nurtures leads, and establishes your brand as an industry leader.",
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      num: "05",
    },
    {
      title: "Conversion Optimization",
      desc: "A/B testing and UX refinements to minimize friction and maximize the percentage of visitors who convert.",
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      num: "06",
    },
  ];

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
                Our Capabilities
              </span>
            </div>

            <h2
              className="text-3xl font-extrabold leading-tight sm:text-4xl"
              style={{ color: "#0f1f2e", fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              End-to-End Solutions for <span style={{ color: "#1a3a5c" }}>Digital Dominance</span>
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

      {/* Custom Styles for Swiper */}
      <style jsx global>{`
        #services .swiper-wrapper {
          padding-bottom: 8px;
        }
      `}</style>
    </section>
  );
}
