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
      // =====================================================
      // PREMIUM EASING
      // =====================================================

      const smoothEase = CustomEase.create(
        "loaderSmooth",
        "M0,0 C0.16,1 0.3,1 1,1"
      );

      const elegantEase = CustomEase.create(
        "loaderElegant",
        "M0,0 C0.25,0 0.25,1 1,1"
      );

      // =====================================================
      // INITIAL STATES
      // =====================================================

      gsap.set(".loader-content", {
        opacity: 0,
      });

      gsap.set(".loader-icon", {
        opacity: 0,
        scale: 0.5,
        y: 35,
        rotation: -30,
      });

      gsap.set(".loader-welcome", {
        opacity: 0,
        y: 45,
      });

      gsap.set(".loader-to-my", {
        opacity: 0,
        y: 45,
      });

      gsap.set(".loader-portfolio", {
        opacity: 0,
        y: 55,
        scale: 0.85,
      });

      gsap.set(".loader-subtitle", {
        opacity: 0,
        y: 20,
      });

      gsap.set(".loader-website", {
        opacity: 0,
        scale: 0.85,
      });

      gsap.set(".loader-url", {
        width: "0ch",
      });

      gsap.set(".loader-progress", {
        width: "0%",
      });

      gsap.set(".loader-counter", {
        scale: 0.7,
        opacity: 0,
      });

      // =====================================================
      // COUNTER
      // =====================================================

      const counterObj = {
        value: 0,
      };

      gsap.to(counterObj, {
        value: 100,

        duration: 2.5,

        ease: "power2.inOut",

        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent =
              Math.round(counterObj.value);
          }
        },
      });

      // =====================================================
      // MAIN TIMELINE
      // =====================================================

      const tl = gsap.timeline({
        onComplete: () => {
          // Small pause gives the ending some weight
          gsap.to(".loader-screen", {
            opacity: 0,
            scale: 1.03,

            duration: 0.65,

            ease: smoothEase,

            onComplete: () => {
              onComplete();
            },
          });
        },
      });

      // =====================================================
      // CONTENT
      // =====================================================

      tl.to(
        ".loader-content",
        {
          opacity: 1,
          duration: 0.45,
          ease: smoothEase,
        },
        0
      );

      // =====================================================
      // COUNTER
      // =====================================================

      tl.to(
        ".loader-counter",
        {
          scale: 1,
          opacity: 0.13,

          duration: 0.6,

          ease: "back.out(1.7)",
        },
        0
      );

      // =====================================================
      // ICONS
      // =====================================================

      tl.to(
        ".loader-icon",
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotation: 0,

          duration: 0.65,

          stagger: {
            each: 0.12,
            from: "center",
          },

          ease: elegantEase,
        },
        0.15
      );

      // =====================================================
      // WELCOME
      // =====================================================

      tl.to(
        ".loader-welcome",
        {
          opacity: 1,
          y: 0,

          duration: 0.7,

          ease: elegantEase,
        },
        0.45
      );

      // =====================================================
      // TO MY
      // =====================================================

      tl.to(
        ".loader-to-my",
        {
          opacity: 1,
          y: 0,

          duration: 0.7,

          ease: elegantEase,
        },
        0.55
      );

      // =====================================================
      // PORTFOLIO
      // =====================================================

      tl.to(
        ".loader-portfolio",
        {
          opacity: 1,
          y: 0,
          scale: 1,

          duration: 0.8,

          ease: "back.out(1.5)",
        },
        0.7
      );

      // =====================================================
      // SUBTITLE
      // =====================================================

      tl.to(
        ".loader-subtitle",
        {
          opacity: 0.7,
          y: 0,

          duration: 0.7,

          ease: "power2.out",
        },
        1
      );

      // =====================================================
      // WEBSITE
      // =====================================================

      tl.to(
        ".loader-website",
        {
          opacity: 1,
          scale: 1,

          duration: 0.55,

          ease: "back.out(1.5)",
        },
        1.15
      );

      // =====================================================
      // URL TYPE
      // =====================================================

      tl.to(
        ".loader-url",
        {
          width: "22ch",

          duration: 1.1,

          ease: "steps(22)",
        },
        1.3
      );

      // =====================================================
      // PROGRESS BAR
      // =====================================================

      tl.to(
        ".loader-progress",
        {
          width: "100%",

          duration: 2.35,

          ease: smoothEase,
        },
        0.15
      );

      // =====================================================
      // CURSOR BLINK
      // =====================================================

      gsap.to(".loader-cursor", {
        opacity: 0,

        duration: 0.45,

        repeat: -1,
        yoyo: true,

        ease: "power2.inOut",
      });

      // =====================================================
      // ICON GLOW
      // =====================================================

      gsap.to(".loader-icon", {
        boxShadow:
          "0 0 25px rgba(255,255,255,0.12)",

        duration: 1.4,

        repeat: -1,
        yoyo: true,

        ease: "power1.inOut",

        stagger: {
          each: 0.2,
          from: "random",
        },

        delay: 1,
      });

      // =====================================================
      // PROGRESS GLOW
      // =====================================================

      gsap.to(".loader-progress-glow", {
        opacity: 0.9,

        duration: 0.8,

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
        fixed
        inset-0
        z-[99999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-black
        p-5
      "
    >
      {/* Subtle background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/[0.025]
          blur-[120px]
        "
      />

      <div
        className="
          loader-content
          relative
          flex
          w-full
          max-w-[340px]
          flex-col
          items-center
          gap-5
          text-center
          text-white
        "
      >
        {/* =================================================
            COUNTER
        ================================================= */}

        <div
          className="
            loader-counter
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            select-none
          "
        >
          <span
            ref={counterRef}
            className="
              text-[200px]
              font-black
              leading-none
              text-white/10
            "
          >
            0
          </span>
        </div>

        {/* =================================================
            ICONS
        ================================================= */}

        <div
          className="
            relative
            z-10
            flex
            items-center
            justify-center
            gap-4
          "
        >
          {/* CODE */}

          <div
            className="
              loader-icon
              flex
              h-[48px]
              w-[48px]
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              shadow-[0_0_25px_rgba(255,255,255,0.05)]
              backdrop-blur-md
            "
          >
            <Code2 size={20} />
          </div>

          {/* USER */}

          <div
            className="
              loader-icon
              flex
              h-[48px]
              w-[48px]
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              shadow-[0_0_25px_rgba(255,255,255,0.05)]
              backdrop-blur-md
            "
          >
            <User size={20} />
          </div>

          {/* GLOBE */}

          <div
            className="
              loader-icon
              flex
              h-[48px]
              w-[48px]
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              shadow-[0_0_25px_rgba(255,255,255,0.05)]
              backdrop-blur-md
            "
          >
            <Globe size={20} />
          </div>
        </div>

        {/* =================================================
            HEADING
        ================================================= */}

        <div
          className="
            relative
            z-10
            flex
            flex-col
            items-center
            gap-1
          "
        >
          <div className="flex flex-wrap items-center justify-center gap-2">
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
              text-center
              text-[clamp(24px,6vw,38px)]
              font-black
              leading-tight
              tracking-tight
            "
          >
            Portfolio Website
          </h1>
        </div>

        {/* =================================================
            SUBTITLE
        ================================================= */}

        <p
          className="
            loader-subtitle
            relative
            z-10
            text-sm
            tracking-wide
            text-white/60
          "
        >
          Creating Websites That Feel Alive.
        </p>

        {/* =================================================
            WEBSITE
        ================================================= */}

        <div
          className="
            loader-website
            relative
            z-10
            overflow-hidden
            whitespace-nowrap
            rounded-full
            border
            border-white/10
            bg-white/5
            px-4
            py-2
            text-xs
            tracking-[0.25em]
            text-white/70
            shadow-[0_0_30px_rgba(255,255,255,0.04)]
            backdrop-blur-md
          "
        >
          <span className="loader-url inline-block overflow-hidden whitespace-nowrap">
            www.ayanSaha.in
          </span>

          <span className="loader-cursor ml-[2px]">
            |
          </span>
        </div>

        {/* =================================================
            PROGRESS
        ================================================= */}

        <div className="relative z-10 mt-7 w-[240px]">
          <div
            className="
              relative
              h-[2px]
              overflow-hidden
              rounded-full
              bg-white/20
            "
          >
            <div
              className="
                loader-progress
                relative
                h-full
                bg-gradient-to-r
                from-white/40
                via-white
                to-white/40
              "
            >
              <div
                className="
                  loader-progress-glow
                  absolute
                  right-0
                  top-1/2
                  h-4
                  w-4
                  -translate-y-1/2
                  rounded-full
                  bg-white
                  opacity-0
                  blur-md
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;