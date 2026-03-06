"use client";

export default function TestimonialSection() {
  const testimonials = [
    {
      quote: "CODERAFT didn't just rebuild our website; they re-engineered our entire digital acquisition channel. We saw a 300% increase in qualified leads within the first quarter.",
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
  ];

  return (
    <section
      id="testimonials"
      className="relative flex items-center bg-[#f8fafc] py-24 lg:py-32 overflow-hidden"
      style={{
        fontFamily: "var(--font-raleway), sans-serif",
      }}
    >
      {/* Background Decor Elements */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-[30%] opacity-[0.03]"
        style={{
          background: "#1a3a5c",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)",
        }}
      />
      
      {/* Subtle Grid overlayed on the whole section */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#1a3a5c 1px, transparent 1px), linear-gradient(90deg, #1a3a5c 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="mb-4 flex items-center gap-4">
            <span className="h-0.5 w-12" style={{ background: "#2a5a8c" }} />
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#2a5a8c" }}>
              Client Success
            </span>
            <span className="h-0.5 w-12" style={{ background: "#2a5a8c" }} />
          </div>

          <h2
            className="mb-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl"
            style={{ color: "#0f1f2e", fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Don't Just Take Our <span style={{ color: "#1a3a5c" }}>Word For It</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="relative bg-white p-10 lg:p-12 transition-transform duration-300 hover:-translate-y-2"
              style={{
                boxShadow: "0 10px 40px rgba(26,58,92,0.06)",
                clipPath: "polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)",
                borderTop: "3px solid #1a3a5c",
              }}
            >
              {/* Large quote icon in background */}
              <div 
                className="absolute top-6 right-6 opacity-[0.04]"
              >
                <svg className="h-20 w-20 text-[#1a3a5c]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote Text */}
              <p className="relative z-10 text-base leading-loose text-[#4a5e72] font-medium mb-10 italic">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="relative z-10 flex items-center gap-4 mt-auto">
                <div 
                  className="h-14 w-14 overflow-hidden"
                  style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} // Hexagon clip
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 
                    className="text-[15px] font-bold text-[#0f1f2e]"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {testimonial.author}
                  </h4>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#2a5a8c] mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Metrics/Trust Bar */}
        <div className="mt-20 border-t border-gray-200 pt-10 flex flex-wrap justify-center gap-12 lg:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1000px-Google_2015_logo.svg.png" alt="Google Partner" className="h-6 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1000px-YouTube_Logo_2017.svg.png" alt="YouTube Ads" className="h-6 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png" alt="Amazon Partner" className="h-6 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1000px-LinkedIn_Logo.svg.png" alt="LinkedIn Marketing" className="h-6 object-contain" />
        </div>

      </div>
    </section>
  );
}
