import React from "react";
import { useNavigate } from "react-router";

const About = () => {
  let navigate=useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans antialiased">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-20 pb-12 px-6">
        {/* Animated SkyMart logo - floating up & down gently */}
        <div className="w-14 h-14 bg-lime-400 rounded-2xl flex items-center justify-center mb-6 animate-float shadow-[0_0_30px_rgba(163,230,53,0.5)]">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-center tracking-tight mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
          About <span className="text-lime-400 bg-gradient-to-r from-lime-400 to-lime-300 bg-clip-text text-transparent">SkyMart</span>
        </h1>

        <p className="text-zinc-300 text-center text-base md:text-lg max-w-2xl leading-relaxed font-light tracking-wide">
          SkyMart is a next-generation e-commerce platform built to make online shopping fast, fair, and enjoyable — for everyone.
        </p>
      </section>

      {/* Stats Section */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border border-white/40 rounded-2xl p-6 flex flex-col items-center bg-[#111111] shadow-[0_0_20px_rgba(255,255,255,0.06)] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all duration-300 hover:border-white/60">
            <div className="text-lime-400 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>
              </svg>
            </div>
            <span className="text-2xl font-bold text-white">20K+</span>
            <span className="text-zinc-400 text-xs mt-0.5 font-medium tracking-wide">Products</span>
          </div>

          <div className="border border-white/40 rounded-2xl p-6 flex flex-col items-center bg-[#111111] shadow-[0_0_20px_rgba(255,255,255,0.06)] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all duration-300 hover:border-white/60">
            <div className="text-lime-400 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <span className="text-2xl font-bold text-white">50K+</span>
            <span className="text-zinc-400 text-xs mt-0.5 font-medium tracking-wide">Happy Customers</span>
          </div>

          <div className="border border-white/40 rounded-2xl p-6 flex flex-col items-center bg-[#111111] shadow-[0_0_20px_rgba(255,255,255,0.06)] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all duration-300 hover:border-white/60">
            <div className="text-lime-400 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <span className="text-2xl font-bold text-white">4.9</span>
            <span className="text-zinc-400 text-xs mt-0.5 font-medium tracking-wide">Avg. Rating</span>
          </div>

          <div className="border border-white/40 rounded-2xl p-6 flex flex-col items-center bg-[#111111] shadow-[0_0_20px_rgba(255,255,255,0.06)] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all duration-300 hover:border-white/60">
            <div className="text-lime-400 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="16" height="13" x="6" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="m2 7 8.97 5.7a1.94 1.94 0 0 0 2.06 0L22 7"/>
              </svg>
            </div>
            <span className="text-2xl font-bold text-white">99%</span>
            <span className="text-zinc-400 text-xs mt-0.5 font-medium tracking-wide">On-time Delivery</span>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="border border-white/40 rounded-3xl bg-[#111111] p-10 md:p-12 shadow-[0_0_25px_rgba(255,255,255,0.06)] hover:shadow-[0_0_45px_rgba(255,255,255,0.12)] transition-all duration-300 hover:border-white/60">
          <h2 className="text-3xl font-bold mb-6 tracking-tight text-white">Our Story</h2>
          <div className="space-y-5 text-zinc-300 text-base md:text-[16px] leading-8 font-light">
            <p>
              SkyMart started in 2022 as a small side project — two engineers tired of bloated, slow e-commerce experiences. We asked ourselves: what if shopping online was actually <span className="text-white font-medium">enjoyable?</span>
            </p>
            <p>
              Three years later, SkyMart serves over 50,000 customers across the country. We stock electronics, fashion, jewelry, and everyday essentials — all at prices that don't require a second mortgage.
            </p>
            <p>
              We're still the same team at heart: obsessed with speed, transparency, and making you feel good about every purchase you make here.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-center text-3xl font-bold mb-10 tracking-tight text-white">What We Stand For</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-white/40 rounded-2xl p-7 flex gap-5 bg-[#111111] shadow-[0_0_20px_rgba(255,255,255,0.04)] hover:shadow-[0_0_40px_rgba(255,255,255,0.12)] transition-all duration-300 hover:border-white/60">
            <div className="w-12 h-12 rounded-xl bg-lime-400/15 text-lime-400 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(163,230,53,0.15)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1 text-white">Trust</h3>
              <p className="text-zinc-400 text-sm leading-6 font-light">Every product is verified for quality and authenticity before listing.</p>
            </div>
          </div>

          <div className="border border-white/40 rounded-2xl p-7 flex gap-5 bg-[#111111] shadow-[0_0_20px_rgba(255,255,255,0.04)] hover:shadow-[0_0_40px_rgba(255,255,255,0.12)] transition-all duration-300 hover:border-white/60">
            <div className="w-12 h-12 rounded-xl bg-lime-400/15 text-lime-400 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(163,230,53,0.15)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1 text-white">Speed</h3>
              <p className="text-zinc-400 text-sm leading-6 font-light">We obsess over delivery times so your orders arrive when promised.</p>
            </div>
          </div>

          <div className="border border-white/40 rounded-2xl p-7 flex gap-5 bg-[#111111] shadow-[0_0_20px_rgba(255,255,255,0.04)] hover:shadow-[0_0_40px_rgba(255,255,255,0.12)] transition-all duration-300 hover:border-white/60">
            <div className="w-12 h-12 rounded-xl bg-lime-400/15 text-lime-400 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(163,230,53,0.15)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/><path d="m18 15-2-2"/><path d="m15 18-2-2"/>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1 text-white">Community</h3>
              <p className="text-zinc-400 text-sm leading-6 font-light">Built around real customer feedback, not just business metrics.</p>
            </div>
          </div>

          <div className="border border-white/40 rounded-2xl p-7 flex gap-5 bg-[#111111] shadow-[0_0_20px_rgba(255,255,255,0.04)] hover:shadow-[0_0_40px_rgba(255,255,255,0.12)] transition-all duration-300 hover:border-white/60">
            <div className="w-12 h-12 rounded-xl bg-lime-400/15 text-lime-400 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(163,230,53,0.15)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1 text-white">Quality</h3>
              <p className="text-zinc-400 text-sm leading-6 font-light">We curate the best — no filler, no junk, just great products.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-center text-3xl font-bold mb-10 tracking-tight text-white">Meet the Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border border-white/40 rounded-2xl p-7 bg-[#111111] text-center shadow-[0_0_20px_rgba(255,255,255,0.04)] hover:shadow-[0_0_40px_rgba(255,255,255,0.12)] transition-all duration-300 hover:border-white/60">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-lime-400 to-lime-300 text-black font-bold text-2xl flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(163,230,53,0.3)]">A</div>
            <h3 className="text-base font-semibold text-white">Aryan Shah</h3>
            <p className="text-zinc-400 text-xs mt-1 font-medium tracking-wide">Founder & CEO</p>
          </div>

          <div className="border border-white/40 rounded-2xl p-7 bg-[#111111] text-center shadow-[0_0_20px_rgba(255,255,255,0.04)] hover:shadow-[0_0_40px_rgba(255,255,255,0.12)] transition-all duration-300 hover:border-white/60">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-blue-300 text-black font-bold text-2xl flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(59,130,246,0.3)]">P</div>
            <h3 className="text-base font-semibold text-white">Priya Mehta</h3>
            <p className="text-zinc-400 text-xs mt-1 font-medium tracking-wide">Head of Product</p>
          </div>

          <div className="border border-white/40 rounded-2xl p-7 bg-[#111111] text-center shadow-[0_0_20px_rgba(255,255,255,0.04)] hover:shadow-[0_0_40px_rgba(255,255,255,0.12)] transition-all duration-300 hover:border-white/60">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-400 to-purple-300 text-black font-bold text-2xl flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(168,85,247,0.3)]">R</div>
            <h3 className="text-base font-semibold text-white">Rohan Verma</h3>
            <p className="text-zinc-400 text-xs mt-1 font-medium tracking-wide">Lead Engineer</p>
          </div>

          <div className="border border-white/40 rounded-2xl p-7 bg-[#111111] text-center shadow-[0_0_20px_rgba(255,255,255,0.04)] hover:shadow-[0_0_40px_rgba(255,255,255,0.12)] transition-all duration-300 hover:border-white/60">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-400 to-rose-300 text-black font-bold text-2xl flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(244,63,94,0.3)]">S</div>
            <h3 className="text-base font-semibold text-white">Sneha Kapoor</h3>
            <p className="text-zinc-400 text-xs mt-1 font-medium tracking-wide">Design Director</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="border border-white/40 rounded-3xl bg-[#101010] py-16 text-center shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-all duration-300 hover:border-white/60">
          <h2 className="text-3xl font-bold tracking-tight text-white">Ready to shop?</h2>
          <p className="text-zinc-400 text-base mt-3 font-light">Explore thousands of products at unbeatable prices.</p>
          <button onClick={()=>navigate("/main/shop")} className="mt-8 bg-lime-400 hover:bg-lime-300 transition cursor-pointer text-black font-semibold text-sm px-8 py-3 rounded-xl inline-flex items-center gap-2 shadow-[0_0_30px_rgba(163,230,53,0.3)] hover:shadow-[0_0_50px_rgba(163,230,53,0.4)]">
            Browse Products
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </button>
        </div>
      </section>

      {/* Custom animation keyframes for floating logo */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 2.4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default About;