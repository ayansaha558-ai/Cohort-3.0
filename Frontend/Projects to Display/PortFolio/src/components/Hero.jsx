import React, { useState, useEffect, useRef } from "react";
import ayanVideo from "../assets/ayan_vid.mp4";
import ayanImage from "../assets/ayan.jpg";
import gsap from "gsap";

const Hero = () => {
  const [videoFinished, setVideoFinished] = useState(false);
  
  const greetingRef = useRef(null);
  const headlineRef = useRef(null);
  const trustRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageContainerRef = useRef(null);
  const videoRef = useRef(null);
  const nameContainerRef = useRef(null);
  const nameFirstRef = useRef(null);
  const nameLastRef = useRef(null);
  const cardRef = useRef(null);
  const facesRef = useRef(null);
  const ratingRef = useRef(null);
  const tagsRef = useRef(null);
  const diamondRef = useRef(null);
  const marqueeRef = useRef(null);
  const hasUnmuted = useRef(false);

  // Unmute video on mouse movement
  useEffect(() => {
    const unmuteVideo = () => {
      if (videoRef.current && !hasUnmuted.current) {
        videoRef.current.muted = false;
        videoRef.current.volume = 1.0;
        
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            videoRef.current.muted = true;
            videoRef.current.play().then(() => {
              setTimeout(() => {
                if (videoRef.current) {
                  videoRef.current.muted = false;
                }
              }, 100);
            });
          });
        }
        
        hasUnmuted.current = true;
        
        window.removeEventListener('mousemove', unmuteVideo);
        window.removeEventListener('click', unmuteVideo);
        window.removeEventListener('scroll', unmuteVideo);
        window.removeEventListener('keydown', unmuteVideo);
        window.removeEventListener('touchstart', unmuteVideo);
      }
    };

    window.addEventListener('mousemove', unmuteVideo);
    window.addEventListener('click', unmuteVideo);
    window.addEventListener('scroll', unmuteVideo);
    window.addEventListener('keydown', unmuteVideo);
    window.addEventListener('touchstart', unmuteVideo);

    return () => {
      window.removeEventListener('mousemove', unmuteVideo);
      window.removeEventListener('click', unmuteVideo);
      window.removeEventListener('scroll', unmuteVideo);
      window.removeEventListener('keydown', unmuteVideo);
      window.removeEventListener('touchstart', unmuteVideo);
    };
  }, []);

  // Marquee animation - continuous left to right
  useEffect(() => {
    if (marqueeRef.current) {
      // Set initial position off-screen to the left
      gsap.set(marqueeRef.current, { x: "-100%" });
      
      // Animate from left to right continuously
      gsap.to(marqueeRef.current, {
        x: "100vw",
        duration: 15,
        ease: "none",
        repeat: -1,
      });
    }
  }, []);

  // GSAP Animations
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(greetingRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
      .fromTo(headlineRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
      .fromTo(trustRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
      .fromTo(buttonsRef.current.children, { y: 30, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.1 }, "-=0.3");

    tl.fromTo(imageContainerRef.current, { scale: 0.9, opacity: 0, y: 40 }, { scale: 1, opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }, "-=1.2");

    tl.fromTo(cardRef.current, { x: 100, opacity: 0, rotate: 5 }, { x: 0, opacity: 1, rotate: 0, duration: 1, ease: "back.out(1.4)" }, "-=0.8")
      .fromTo(facesRef.current.children, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, stagger: 0.08, ease: "back.out(2)" }, "-=0.6")
      .fromTo(ratingRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.3")
      .fromTo(tagsRef.current.children, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.1 }, "-=0.3");

    tl.fromTo(diamondRef.current, { scale: 0, rotate: 180, opacity: 0 }, { scale: 1, rotate: 45, opacity: 1, duration: 0.8, ease: "elastic.out(1, 0.6)" }, "-=0.5");

    gsap.to(imageContainerRef.current, { y: -15, duration: 4, repeat: -1, yoyo: true, ease: "power1.inOut", delay: 2 });
    gsap.to(diamondRef.current, { scale: 1.1, duration: 2, repeat: -1, yoyo: true, ease: "power1.inOut", delay: 1 });
    gsap.to(cardRef.current, { y: -8, duration: 3.5, repeat: -1, yoyo: true, ease: "power1.inOut", delay: 1.5 });

    return () => { gsap.killTweensOf("*"); };
  }, []);

  // Name animation after video ends
  useEffect(() => {
    if (videoFinished) {
      const nameTl = gsap.timeline({ defaults: { ease: "power4.out" } });

      nameTl.fromTo(nameContainerRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 })
        .fromTo(nameFirstRef.current, { y: 100, opacity: 0, letterSpacing: "0.3em" }, { y: 0, opacity: 1, letterSpacing: "-0.08em", duration: 1.5 }, "-=0.1")
        .fromTo(nameLastRef.current, { y: 100, opacity: 0, letterSpacing: "0.3em" }, { y: 0, opacity: 1, letterSpacing: "-0.08em", duration: 1.5 }, "-=1.3");

      gsap.to([nameFirstRef.current, nameLastRef.current], {
        textShadow: "0 0 30px rgba(255,255,255,0.25), 0 0 60px rgba(255,255,255,0.1)",
        duration: 3, repeat: -1, yoyo: true, ease: "power1.inOut", delay: 2,
      });
    }
  }, [videoFinished]);

  const marqueeItems = [
    "SAHA.DEV",
    "✦",
    "FRONTEND",
    "✦",
    "DEVELOPER",
    "✦",
    "AYAN SAHA",
    "✦",
    "SAHA.DEV",
    "✦",
    "FRONTEND",
    "✦",
    "DEVELOPER",
    "✦",
    "AYAN SAHA",
    "✦",
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#080808] text-white">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
          maskImage: "radial-gradient(circle at center, black, transparent 75%)",
        }}
      />

      {/* Hero Content */}
      <div id="home" className="relative mx-auto h-full max-w-[1400px]">

        {/* Left + Right content */}
        <div className="absolute inset-0 z-30 flex items-center justify-between px-[5.7%]">
          {/* Left Content */}
          <div className="max-w-[300px]">
            <p ref={greetingRef} className="mb-3 text-[13px] text-white/45">Full-Stack Developer</p>

            <h2 ref={headlineRef} className="text-[28px] font-medium leading-[1.25] tracking-[-0.04em]">
              Digital experiences
              <br />
              that drive growth
            </h2>

            <div ref={trustRef} className="mt-5 flex items-center gap-3 text-[11px] text-white/40">
              <span className="h-1 w-1 rounded-full bg-white/50" />
              <span>Trusted by 200+ businesses</span>
            </div>

            <div ref={buttonsRef} className="mt-6 flex items-center gap-4">
              <button className="flex items-center gap-3 rounded-full bg-white px-4 py-2.5 text-[11px] font-medium text-black transition hover:scale-105">
                Let's Collaborate
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-black text-[9px] text-white">→</span>
              </button>

              <button className="flex items-center gap-3 rounded-full border border-white/25 px-5 py-2.5 text-[11px] text-white/80 transition hover:bg-white/10">
                Explore Work
                <span className="text-[13px]">↗</span>
              </button>
            </div>
          </div>

          {/* Right Card + Diamond */}
          <div className="relative shrink-0">
            <div ref={cardRef} className="w-[212px] rounded-xl border border-white/15 bg-white/[0.045] p-5 backdrop-blur-xl">
              <div ref={facesRef} className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex h-7 w-7 items-center justify-center rounded-full border border-black bg-gradient-to-br from-white via-gray-400 to-gray-800 text-[8px] text-black">
                    ●
                  </div>
                ))}
              </div>

              <p ref={ratingRef} className="mt-3 text-[11px] leading-relaxed text-white/75">
                <span className="font-semibold text-white">99.8%</span> Client
                Satisfaction Rate
                <br />— Let's Build Something Great.
              </p>

              <div ref={tagsRef} className="mt-4 flex gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[8px] text-white/50">
                  Premium Quality
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[8px] text-white/50">
                  24h Response
                </span>
              </div>
            </div>

            <div ref={diamondRef} className="absolute -bottom-4 -right-3">
              <div className="relative h-8 w-8 rotate-45">
                <div className="absolute inset-2 bg-white/40 blur-md" />
                <div className="absolute inset-2 bg-white/70" />
              </div>
            </div>
          </div>
        </div>

        {/* Portrait */}
        <div ref={imageContainerRef} className="absolute left-1/2 top-[1%] z-10 h-[calc(100vh-1%)] w-[470px] -translate-x-1/2">
          {!videoFinished ? (
            <video
              ref={videoRef}
              src={ayanVideo}
              autoPlay
              playsInline
              muted
              onEnded={() => setVideoFinished(true)}
              className="absolute inset-0 h-full w-full object-cover object-top grayscale"
            />
          ) : (
            <img
              src={ayanImage}
              alt="Ayan Saha"
              className="absolute inset-0 h-full w-full object-cover object-top grayscale"
            />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
        </div>

        {/* Giant Name */}
        <div
          ref={nameContainerRef}
          className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center pt-[70px]"
          style={{ opacity: videoFinished ? 1 : 0 }}
        >
          <h1 ref={nameFirstRef} className="select-none text-[clamp(130px,18vw,250px)] font-black leading-[0.72] tracking-[-0.08em] text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.42)] [text-shadow:0_0_20px_rgba(255,255,255,0.15)]">
            AYAN
          </h1>
          <h1 ref={nameLastRef} className="select-none text-[clamp(130px,18vw,250px)] font-black leading-[0.72] tracking-[-0.08em] text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.42)] [text-shadow:0_0_20px_rgba(255,255,255,0.15)]">
            SAHA
          </h1>
        </div>

        {/* Bottom Decoration */}
        <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full border border-white/[0.04]" />
        <div className="absolute bottom-5 left-5 h-28 w-28 rounded-full border border-white/[0.035]" />
      </div>

      {/* Marquee - Continuous left to right */}
      <div className="absolute bottom-0 left-0 right-0 z-40 w-full overflow-hidden border-t border-white/[0.06] py-4 bg-[#080808]/80 backdrop-blur-sm">
        <div ref={marqueeRef} className="flex w-max whitespace-nowrap">
          {marqueeItems.map((text, i) => (
            <span
              key={i}
              className="mx-8 text-xs font-bold tracking-[0.35em] text-white/25"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;