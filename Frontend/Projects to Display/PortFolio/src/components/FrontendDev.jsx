import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);

const smoothEase = CustomEase.create("smoothEase", "M0,0 C0.22,1 0.36,1 1,1");
const exitEase = CustomEase.create("exitEase", "M0,0 C0.16,1 0.3,1 1,1");

const FrontendDev = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const headingOneRef = useRef(null);
  const headingTwoRef = useRef(null);
  const paragraphRef = useRef(null);
  const techStackRef = useRef(null);
  const aboutBtnRef = useRef(null);
  const typingTextRef = useRef(null);
  const cursorRef = useRef(null);
  const floatingElementsRef = useRef(null);
  const lineDecorationRef = useRef(null);
  const glowOrb1 = useRef(null);
  const glowOrb2 = useRef(null);
  const glowOrb3 = useRef(null);
  const magneticBtnRef = useRef(null);
  
  const [goAbout, setGoAbout] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const navigate = useNavigate();

  // Mouse tracking for parallax & magnetic
  const mouse = useRef({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouse.current = {
      x: (clientX / innerWidth - 0.5) * 2,
      y: (clientY / innerHeight - 0.5) * 2,
    };
  };

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      onEnter: () => setIsInView(true),
      onLeaveBack: () => setIsInView(false),
    });
    ScrollTrigger.refresh();
    return () => trigger.kill();
  }, []);

  // Main entrance animations
  useEffect(() => {
    if (!isInView) return;

    const ctx = gsap.context(() => {
      // Soft ambient glow orbs
      gsap.to(glowOrb1.current, {
        x: "+=40",
        y: "-=30",
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(glowOrb2.current, {
        x: "-=50",
        y: "+=40",
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(glowOrb3.current, {
        x: "+=30",
        y: "+=20",
        scale: 1.2,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Typing animation
      const typingTl = gsap.timeline({ repeat: -1, repeatDelay: 1.4 });
      typingTl
        .fromTo(
          typingTextRef.current,
          { width: "0ch", opacity: 0 },
          { width: "18ch", opacity: 1, duration: 1.6, ease: "power2.inOut" }
        )
        .to(typingTextRef.current, { duration: 2.8 })
        .to(typingTextRef.current, {
          width: "0ch",
          duration: 1.1,
          ease: "power2.inOut",
        });

      // Cursor blink
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.45,
        repeat: -1,
        yoyo: true,
        ease: "steps(1)",
      });

      // Decorative line
      gsap.fromTo(
        lineDecorationRef.current,
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1.4,
          delay: 0.25,
          ease: "power3.out",
          transformOrigin: "center",
        }
      );

      // Headings
      gsap.fromTo(
        headingOneRef.current,
        { opacity: 0, y: 80, filter: "blur(12px)", scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          scale: 1,
          duration: 1.35,
          ease: "power4.out",
        }
      );

      gsap.fromTo(
        headingTwoRef.current,
        { opacity: 0, y: 60, filter: "blur(10px)", skewX: -8 },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          skewX: 0,
          duration: 1.35,
          delay: 0.18,
          ease: "power4.out",
        }
      );

      // Paragraph
      gsap.fromTo(
        paragraphRef.current,
        { opacity: 0, y: 40, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
          delay: 0.55,
          ease: "power3.out",
        }
      );

      // Tech stack stagger
      if (techStackRef.current) {
        const techItems = techStackRef.current.children;
        gsap.fromTo(
          techItems,
          { opacity: 0, y: 28, scale: 0.85, filter: "blur(4px)" },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.7,
            delay: 0.85,
            stagger: 0.07,
            ease: "back.out(1.6)",
          }
        );
      }

      // Button entrance
      gsap.fromTo(
        aboutBtnRef.current,
        { opacity: 0, y: 40, scale: 0.88 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          delay: 1.25,
          ease: "back.out(1.8)",
        }
      );

      // Floating particles entrance
      if (floatingElementsRef.current) {
        const elements = floatingElementsRef.current.children;
        gsap.fromTo(
          elements,
          { opacity: 0, scale: 0, rotation: 120 },
          {
            opacity: 0.25,
            scale: 1,
            rotation: 0,
            duration: 1.6,
            delay: 0.9,
            stagger: 0.08,
            ease: "back.out(2.2)",
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isInView]);

  // Continuous floating + mouse parallax
  useEffect(() => {
    if (!floatingElementsRef.current || !isInView) return;

    const elements = Array.from(floatingElementsRef.current.children);
    const floats = elements.map((el, i) => {
      const baseY = gsap.utils.random(-35, 35);
      const baseX = gsap.utils.random(-25, 25);
      const speed = gsap.utils.random(5, 9);

      return gsap.to(el, {
        y: baseY,
        x: baseX,
        rotation: gsap.utils.random(-20, 20),
        duration: speed,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.35,
      });
    });

    const tick = () => {
      if (!floatingElementsRef.current) return;
      gsap.to(floatingElementsRef.current, {
        x: mouse.current.x * 18,
        y: mouse.current.y * 12,
        duration: 1.2,
        ease: "power2.out",
      });
      gsap.to(contentRef.current, {
        x: mouse.current.x * 6,
        y: mouse.current.y * 4,
        duration: 1.4,
        ease: "power2.out",
      });
    };

    gsap.ticker.add(tick);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      floats.forEach((t) => t.kill());
      gsap.ticker.remove(tick);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isInView]);

  // Magnetic button effect
  useEffect(() => {
    const btn = magneticBtnRef.current;
    if (!btn) return;

    const onMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, {
        x: x * 0.28,
        y: y * 0.28,
        duration: 0.45,
        ease: "power3.out",
      });
    };

    const onLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.4)",
      });
    };

    btn.addEventListener("mousemove", onMove);
    btn.addEventListener("mouseleave", onLeave);
    return () => {
      btn.removeEventListener("mousemove", onMove);
      btn.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Exit animation
  useEffect(() => {
    if (goAbout) {
      gsap.to(sectionRef.current, {
        opacity: 0,
        scale: 0.92,
        filter: "blur(12px)",
        duration: 1.4,
        ease: exitEase,
        onComplete: () => navigate("/about"),
      });
    }
  }, [goAbout, navigate]);

  // Button hover
  const handleButtonHover = (e, isEnter) => {
    const btn = e.currentTarget;
    gsap.to(btn, {
      scale: isEnter ? 1.06 : 1,
      backgroundColor: isEnter ? "rgba(255,255,255,0.06)" : "transparent",
      borderColor: isEnter ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.12)",
      boxShadow: isEnter
        ? "0 0 40px rgba(255,255,255,0.08)"
        : "0 0 0 rgba(255,255,255,0)",
      duration: 0.35,
      ease: "power2.out",
    });
  };

  // Tech item hover
  const handleTechHover = (e, isEnter) => {
    gsap.to(e.currentTarget, {
      scale: isEnter ? 1.08 : 1,
      y: isEnter ? -3 : 0,
      borderColor: isEnter ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.08)",
      color: isEnter ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.5)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="frontend"
      className="relative w-full min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-6 md:px-20 select-none"
    >
      {/* Deep black atmospheric background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0a0a0a_0%,_#000000_70%)]" />
        <div
          ref={glowOrb1}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-white/[0.03] blur-[140px]"
        />
        <div
          ref={glowOrb2}
          className="absolute bottom-1/4 right-1/5 w-[420px] h-[420px] rounded-full bg-indigo-500/[0.04] blur-[130px]"
        />
        <div
          ref={glowOrb3}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/[0.02] blur-[180px]"
        />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* Floating particles */}
      <div
        ref={floatingElementsRef}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 2.5 + 1}px`,
              height: `${Math.random() * 2.5 + 1}px`,
              top: `${8 + Math.random() * 84}%`,
              left: `${Math.random() * 96}%`,
              opacity: 0,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div ref={contentRef} className="relative z-10 max-w-3xl text-center will-change-transform">
        {/* Status */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative mr-3">
            <div className="w-2 h-2 bg-emerald-400 rounded-full" />
            <div className="absolute inset-0 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-40" />
          </div>
          <span
            ref={typingTextRef}
            className="inline-block overflow-hidden whitespace-nowrap text-[10px] tracking-[0.35em] uppercase text-white/45 font-mono"
          >
            Available for work
          </span>
          <span ref={cursorRef} className="text-white/45 font-mono ml-[2px]">
            |
          </span>
        </div>

        {/* Line */}
        <div
          ref={lineDecorationRef}
          className="h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent mx-auto mb-7 origin-center"
        />

        {/* Headings */}
        <div className="space-y-1">
          <h1
            ref={headingOneRef}
            className="font-black leading-[0.95] tracking-tight text-white text-[clamp(52px,9.5vw,132px)]"
          >
            Frontend
          </h1>
          <h1
            ref={headingTwoRef}
            className="font-black leading-[0.95] tracking-tight bg-gradient-to-r from-white via-white/75 to-white/25 bg-clip-text text-transparent text-[clamp(52px,9.5vw,132px)]"
          >
            Developer
          </h1>
        </div>

        {/* Paragraph
        <p
          ref={paragraphRef}
          className="relative text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg mx-auto mt-7 text-white/55 font-light tracking-wide"
        >
          Full-stack developer crafting digital experiences with precision and elegance.
          <span className="block mt-2.5 text-white/35 text-xs tracking-[0.28em] uppercase">
            HTML • CSS • JavaScript • React • Tailwind • TypeScript • Java • Python • MySQL • PL/SQL
          </span>
        </p> */}

        {/* Tech stack */}
        <div
          ref={techStackRef}
          className="mt-9 flex flex-wrap justify-center gap-2.5"
        >
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind",
            "TypeScript",
            "Java",
            "Python",
            "MySQL",
            "PL/SQL"
          ].map((tech) => (
            <div
              key={tech}
              onMouseEnter={(e) => handleTechHover(e, true)}
              onMouseLeave={(e) => handleTechHover(e, false)}
              className="group relative px-4 py-2 rounded-full text-xs font-medium text-white/50 bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] cursor-default transition-colors"
            >
              <span className="relative z-10">{tech}</span>
            </div>
          ))}
        </div>

        {/* Magnetic button */}
        <div className="mt-11 flex flex-col items-center">
          <div ref={magneticBtnRef} className="inline-block">
            <button
              ref={aboutBtnRef}
              onMouseEnter={(e) => handleButtonHover(e, true)}
              onMouseLeave={(e) => handleButtonHover(e, false)}
              onClick={() => setGoAbout(true)}
              className="inline-flex items-center gap-3 border border-white/12 px-9 py-3.5 text-xs tracking-[0.22em] uppercase font-medium text-white/70 hover:text-white rounded-full relative z-30 cursor-pointer bg-transparent"
            >
              <span className="text-base opacity-70">→</span>
              Explore My Work
              <span className="text-base opacity-70">←</span>
            </button>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-14 flex items-center justify-center gap-3 text-white/25 text-[8px] tracking-[0.35em] uppercase font-mono">
          <div className="w-10 h-px bg-white/15" />
          <span className="animate-pulse">Scroll</span>
          <div className="w-10 h-px bg-white/15" />
        </div>
      </div>
    </section>
  );
};

export default FrontendDev;