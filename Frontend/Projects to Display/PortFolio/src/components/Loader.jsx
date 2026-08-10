import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { Code2, User, Globe } from "lucide-react";

gsap.registerPlugin(CustomEase);

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      // Professional easing curves
      const smoothEase = CustomEase.create(
        "smoothEase",
        "M0,0 C0.22,1 0.36,1 1,1"
      );
      
      const elegantEase = CustomEase.create(
        "elegantEase",
        "M0,0 C0.33,0 0.25,1 1,1"
      );

      // -------------------------
      // INITIAL STATES
      // -------------------------

      gsap.set(".loader-content", {
        opacity: 0,
      });

      gsap.set(".loader-icon", {
        opacity: 0,
        scale: 0,
        y: 60,
      });

      gsap.set(".loader-welcome", {
        opacity: 0,
        y: 80,
        skewY: 5,
      });

      gsap.set(".loader-to-my", {
        opacity: 0,
        y: 80,
        skewY: -5,
      });

      gsap.set(".loader-portfolio", {
        opacity: 0,
        y: 100,
        scale: 0.8,
      });

      gsap.set(".loader-subtitle", {
        opacity: 0,
        y: 30,
        letterSpacing: "0.5em",
      });

      gsap.set(".loader-website", {
        opacity: 0,
        scale: 0.9,
      });

      gsap.set(".loader-url", {
        width: "0ch",
      });

      gsap.set(".loader-progress", {
        width: "0%",
      });

      gsap.set(".loader-counter", {
        scale: 0.5,
        opacity: 0,
      });

      // -------------------------
      // COUNTER ANIMATION
      // -------------------------

      const counterObj = { value: 0 };
      
      gsap.to(counterObj, {
        value: 100,
        duration: 4,
        ease: "power2.inOut",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = Math.round(counterObj.value);
          }
        },
      });

      // -------------------------
      // MAIN TIMELINE
      // -------------------------

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(".loader-screen", {
            opacity: 0,
            scale: 1.05,
            duration: 1.5,
            ease: smoothEase,
            onComplete: () => onComplete()
          });
        }
      });

      // Content fade in
      tl.to(".loader-content", {
        opacity: 1,
        duration: 1.5,
        ease: smoothEase,
      }, 0);

      // Counter appears
      tl.to(".loader-counter", {
        scale: 1,
        opacity: 0.15,
        duration: 1.2,
        ease: "elastic.out(1, 0.8)",
      }, 0.2);

      // Icons appear one by one with rotation
      tl.to(".loader-icon", {
        opacity: 1,
        scale: 1,
        y: 0,
        rotate: 0,
        duration: 1.2,
        stagger: {
          each: 0.2,
          from: "center",
        },
        ease: elegantEase,
      }, 0.4);

      // Welcome slides up
      tl.to(".loader-welcome", {
        opacity: 1,
        y: 0,
        skewY: 0,
        duration: 1.2,
        ease: elegantEase,
      }, 1);

      // To my slides up
      tl.to(".loader-to-my", {
        opacity: 1,
        y: 0,
        skewY: 0,
        duration: 1.2,
        ease: elegantEase,
      }, 1.2);

      // Portfolio scales up
      tl.to(".loader-portfolio", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.4,
        ease: "back.out(1.4)",
      }, 1.4);

      // Subtitle appears with letter spacing animation
      tl.to(".loader-subtitle", {
        opacity: 0.7,
        y: 0,
        letterSpacing: "0.025em",
        duration: 1.5,
        ease: "power2.out",
      }, 1.8);

      // Website badge appears
      tl.to(".loader-website", {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.4)",
      }, 2);

      // URL types out
      tl.to(".loader-url", {
        width: "22ch",
        duration: 2.5,
        ease: "steps(22)",
      }, 2.2);

      // Loading bar fills
      tl.to(".loader-progress", {
        width: "100%",
        duration: 5,
        ease: smoothEase,
      }, 0.5);

      // -------------------------
      // CONTINUOUS ANIMATIONS
      // -------------------------

      // Cursor blinking
      gsap.to(".loader-cursor", {
        opacity: 0,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });

      // Subtle icon pulse
      gsap.to(".loader-icon", {
        boxShadow: "0 0 20px rgba(255,255,255,0.1), 0 0 40px rgba(255,255,255,0.05)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: {
          each: 0.3,
          from: "random",
        },
        delay: 2,
      });

      // Progress bar glow
      gsap.to(".loader-progress-glow", {
        opacity: 0.8,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

    }, loaderRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = "auto";
    };
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="
        loader-screen
        fixed inset-0
        z-[99999]
        flex items-center justify-center
        bg-black
        overflow-hidden
        p-5
      "
    >
      <div
        className="
          loader-content
          relative
          text-center
          text-white
          flex
          flex-col
          items-center
          gap-5
          w-full
          max-w-[340px]
        "
      >
        {/* ================= COUNTER ================= */}
        <div className="loader-counter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span 
            ref={counterRef}
            className="text-[200px] font-black leading-none text-white/10"
          >
            0
          </span>
        </div>

        {/* ================= ICONS ================= */}
        <div className="flex gap-4 items-center justify-center relative z-10">
          {/* Code */}
          <div
            className="
              loader-icon
              w-[48px]
              h-[48px]
              rounded-full
              border border-white/10
              flex items-center justify-center
              bg-white/5
              backdrop-blur-md
              shadow-[0_0_25px_rgba(255,255,255,0.05)]
            "
          >
            <Code2 size={20} />
          </div>

          {/* User */}
          <div
            className="
              loader-icon
              w-[48px]
              h-[48px]
              rounded-full
              border border-white/10
              flex items-center justify-center
              bg-white/5
              backdrop-blur-md
              shadow-[0_0_25px_rgba(255,255,255,0.05)]
            "
          >
            <User size={20} />
          </div>

          {/* Globe */}
          <div
            className="
              loader-icon
              w-[48px]
              h-[48px]
              rounded-full
              border border-white/10
              flex items-center justify-center
              bg-white/5
              backdrop-blur-md
              shadow-[0_0_25px_rgba(255,255,255,0.05)]
            "
          >
            <Globe size={20} />
          </div>
        </div>

        {/* ================= HEADING ================= */}
        <div className="flex flex-col items-center gap-1 relative z-10">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span
              className="
                loader-welcome
                text-[clamp(22px,5vw,34px)]
                font-black
                tracking-tight
              "
            >
              Welcome
            </span>

            <span
              className="
                loader-to-my
                text-[clamp(22px,5vw,34px)]
                font-black
                tracking-tight
              "
            >
              to my
            </span>
          </div>

          <h1
            className="
              loader-portfolio
              text-[clamp(24px,6vw,38px)]
              font-black
              tracking-tight
              leading-tight
              text-center
            "
          >
            Portfolio Website
          </h1>
        </div>

        {/* ================= SUBTITLE ================= */}
        <p
          className="
            loader-subtitle
            text-sm
            text-white/60
            tracking-wide
            relative z-10
          "
        >
          Creating Websites That Feel Alive.
        </p>

        {/* ================= WEBSITE ================= */}
        <div
          className="
            loader-website
            px-4
            py-2
            rounded-full
            border border-white/10
            bg-white/5
            backdrop-blur-md
            text-xs
            tracking-[0.25em]
            text-white/70
            shadow-[0_0_30px_rgba(255,255,255,0.04)]
            overflow-hidden
            whitespace-nowrap
            relative z-10
          "
        >
          <span className="loader-url inline-block overflow-hidden whitespace-nowrap">
            www.webkaizen.in
          </span>

          <span className="loader-cursor ml-[2px]">
            |
          </span>
        </div>

        {/* ================= LOADING BAR ================= */}
        <div className="relative z-10 mt-10 w-[240px]">
          <div
            className="
              bg-white/20
              h-[2px]
              overflow-hidden
              rounded-full
              relative
            "
          >
            <div className="loader-progress h-full bg-gradient-to-r from-white/50 via-white to-white/50 relative">
              <div className="loader-progress-glow absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white blur-md rounded-full opacity-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;