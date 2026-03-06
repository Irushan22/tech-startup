"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialSection() {
  const testimonials = [
    {
      quote: "SKYLIS didn't just rebuild our website; they re-engineered our entire digital acquisition channel. We saw a 300% increase in qualified leads within the first quarter.",
      author: "Sarah Jenkins",
      role: "CMO, FinTech Innovators",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    },
    {
      quote: "The level of strategic depth and technical execution is unmatched. Their SEO and content framework directly contributed to our $4M organic revenue run rate.",
      author: "Marcus Chen",
      role: "Founder, EcoBrand Global",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    },
    {
      quote: "A true extension of our internal team. They took the time to understand our complex SaaS product and translated it into messaging that actually converts.",
      author: "Elena Rodriguez",
      role: "VP Marketing, Nova Software",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    },
    {
      quote: "Their data-driven approach helped us reduce our CPA by 60% while tripling our conversion rate. The ROI speaks for itself.",
      author: "David Park",
      role: "Head of Growth, CloudSync",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    },
    {
      quote: "From brand refresh to performance marketing, SKYLIS delivered end-to-end with precision. Our pipeline has never looked healthier.",
      author: "Amira Hassan",
      role: "CEO, NexaHealth",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative bg-white py-24 lg:py-32 overflow-hidden"
      style={{
        fontFamily: "var(--font-raleway), sans-serif",
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        
        {/* Top: Centered Header */}
        <div className="text-center mb-16">
          <div className="mb-3 flex items-center justify-center gap-4">
            <span className="h-0.5 w-12" style={{ background: "#2a5a8c" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#2a5a8c" }}>
              Client Success
            </span>
            <span className="h-0.5 w-12" style={{ background: "#2a5a8c" }} />
          </div>

          <h2
            className="text-3xl font-extrabold leading-tight sm:text-4xl"
            style={{ color: "#0f1f2e", fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Don't Just Take Our <span style={{ color: "#1a3a5c" }}>Word For It</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            centeredSlides={true}
            breakpoints={{
              768: { slidesPerView: 1.6 },
              1024: { slidesPerView: 2.2 },
            }}
            navigation={{
              prevEl: ".testi-prev",
              nextEl: ".testi-next",
            }}
            pagination={{
              el: ".testi-pagination",
              clickable: true,
              bulletClass: "testi-bullet",
              bulletActiveClass: "testi-bullet-active",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            loop={true}
          >
            {testimonials.map((testimonial, i) => (
              <SwiperSlide key={i}>
                {({ isActive }) => (
                  <div
                    className={`relative p-8 lg:p-10 transition-all duration-500 ${
                      isActive 
                        ? "bg-[#1a3a5c] scale-100 shadow-2xl" 
                        : "bg-[#f8fafc] scale-95 opacity-70"
                    }`}
                  >
                    {/* Quote Mark */}
                    <div className={`absolute top-6 right-8 ${isActive ? "opacity-10" : "opacity-[0.04]"}`}>
                      <svg className={`h-14 w-14 ${isActive ? "text-white" : "text-[#1a3a5c]"}`} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* Star Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, s) => (
                        <svg key={s} className={`h-4 w-4 ${isActive ? "text-yellow-400" : "text-yellow-400/50"}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote Text */}
                    <p className={`text-base leading-relaxed font-medium mb-8 ${
                      isActive ? "text-white/90" : "text-[#4a5e72]"
                    }`}>
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/20">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4
                          className={`text-sm font-bold ${isActive ? "text-white" : "text-[#0f1f2e]"}`}
                          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                        >
                          {testimonial.author}
                        </h4>
                        <p className={`text-[10px] font-bold uppercase tracking-wider mt-0.5 ${
                          isActive ? "text-white/50" : "text-[#2a5a8c]"
                        }`}>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bottom Controls: Arrows + Pagination dots centered */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button className="testi-prev flex h-11 w-11 items-center justify-center border border-[#1a3a5c]/20 text-[#1a3a5c] hover:bg-[#1a3a5c] hover:text-white transition-all duration-300 cursor-pointer">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>

            {/* Pagination Dots */}
            <div className="testi-pagination flex items-center gap-2" />

            <button className="testi-next flex h-11 w-11 items-center justify-center border border-[#1a3a5c]/20 text-[#1a3a5c] hover:bg-[#1a3a5c] hover:text-white transition-all duration-300 cursor-pointer">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>


      </div>

      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .testi-bullet {
          display: inline-block;
          width: 8px;
          height: 8px;
          background: #1a3a5c;
          opacity: 0.2;
          cursor: pointer;
          transition: all 0.3s;
        }
        .testi-bullet-active {
          opacity: 1;
          width: 28px;
          border-radius: 0;
        }
      `}</style>
    </section>
  );
}
