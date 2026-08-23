import React, { useState, useEffect, useRef } from "react";
import ayanVideo from "../assets/ayan_vid.mp4";
import ayanImage from "../assets/ayan.jpg";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

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

  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);

  const cardRef = useRef(null);
  const facesRef = useRef(null);
  const ratingRef = useRef(null);
  const tagsRef = useRef(null);

  const diamondRef = useRef(null);
  const marqueeRef = useRef(null);

  const hasStarted = useRef(false);

  // =====================================================
  // SMOOTH SCROLL
  // =====================================================

  const handleSectionClick = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    const navbarHeight = 100;

    const targetPosition =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    gsap.killTweensOf(window);

    gsap.to(window, {
      duration: 1.8,

      scrollTo: {
        y: targetPosition,
        autoKill: false,
      },

      ease: "power3.inOut",
      overwrite: true,
    });
  };

  // =====================================================
  // VIDEO
  // =====================================================

  useEffect(() => {
    const playWithSound = async () => {
      if (
        videoRef.current &&
        !hasStarted.current
      ) {
        try {
          videoRef.current.muted = false;
          videoRef.current.volume = 1;

          await videoRef.current.play();

          hasStarted.current = true;
        } catch (error) {
          videoRef.current.muted = true;

          await videoRef.current.play();

          hasStarted.current = true;

          setTimeout(() => {
            if (videoRef.current) {
              videoRef.current.muted = false;
              videoRef.current.volume = 1;
            }
          }, 100);
        }
      }
    };

    playWithSound();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (
          videoRef.current &&
          !videoRef.current.paused
        ) {
          videoRef.current.pause();
        }
      } else {
        if (
          videoRef.current &&
          videoRef.current.paused &&
          !videoFinished
        ) {
          videoRef.current.muted = false;
          videoRef.current.volume = 1;

          videoRef.current
            .play()
            .catch(() => {
              videoRef.current.muted = true;
              videoRef.current.play();
            });
        }
      }
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
    };
  }, [videoFinished]);

  // =====================================================
  // KEEP VIDEO SOUND
  // =====================================================

  useEffect(() => {
    const ensureSound = () => {
      if (!videoRef.current) return;

      if (videoRef.current.muted) {
        videoRef.current.muted = false;
        videoRef.current.volume = 1;
      }
    };

    const events = [
      "click",
      "scroll",
      "keydown",
      "touchstart",
      "mousemove",
    ];

    events.forEach((event) => {
      window.addEventListener(
        event,
        ensureSound
      );
    });

    return () => {
      events.forEach((event) => {
        window.removeEventListener(
          event,
          ensureSound
        );
      });
    };
  }, []);

  // =====================================================
  // MARQUEE
  // =====================================================

  useEffect(() => {
    if (!marqueeRef.current) return;

    gsap.set(marqueeRef.current, {
      x: "-100%",
    });

    gsap.to(marqueeRef.current, {
      x: "100vw",
      duration: 15,
      ease: "none",
      repeat: -1,
    });

    return () => {
      gsap.killTweensOf(
        marqueeRef.current
      );
    };
  }, []);

  // =====================================================
  // HERO ANIMATIONS
  // =====================================================

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    // ===================================================
    // LEFT PANEL
    // ===================================================

    tl.fromTo(
      leftPanelRef.current,
      {
        x: -100,
        opacity: 0,
        rotate: -3,
      },
      {
        x: 0,
        opacity: 1,
        rotate: 0,
        duration: 1,
        ease: "back.out(1.4)",
      }
    )

      .fromTo(
        greetingRef.current,
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        },
        "-=0.6"
      )

      .fromTo(
        headlineRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
        },
        "-=0.4"
      )

      .fromTo(
        trustRef.current,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        },
        "-=0.3"
      )

      .fromTo(
        buttonsRef.current.children,
        {
          y: 25,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
        },
        "-=0.3"
      );

    // ===================================================
    // CENTER VIDEO
    // ===================================================

    tl.fromTo(
      imageContainerRef.current,
      {
        scale: 0.9,
        opacity: 0,
        y: 40,
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
      },
      "-=1.1"
    );

    // ===================================================
    // RIGHT PANEL
    // ===================================================

    tl.fromTo(
      rightPanelRef.current,
      {
        x: 100,
        opacity: 0,
        rotate: 3,
      },
      {
        x: 0,
        opacity: 1,
        rotate: 0,
        duration: 1,
        ease: "back.out(1.4)",
      },
      "-=1"
    )

      .fromTo(
        facesRef.current.children,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: "back.out(2)",
        },
        "-=0.5"
      )

      .fromTo(
        ratingRef.current,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        },
        "-=0.3"
      )

      .fromTo(
        tagsRef.current.children,
        {
          y: 10,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
        },
        "-=0.3"
      );

    // ===================================================
    // DIAMOND
    // ===================================================

    tl.fromTo(
      diamondRef.current,
      {
        scale: 0,
        rotate: 180,
        opacity: 0,
      },
      {
        scale: 1,
        rotate: 45,
        opacity: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.6)",
      },
      "-=0.5"
    );

    // ===================================================
    // FLOATING ANIMATIONS
    // ===================================================

    gsap.to(imageContainerRef.current, {
      y: -15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 2,
    });

    gsap.to(diamondRef.current, {
      scale: 1.1,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 1,
    });

    gsap.to(leftPanelRef.current, {
      y: -6,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 2,
    });

    gsap.to(rightPanelRef.current, {
      y: -9,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 1.5,
    });

    return () => {
      tl.kill();

      gsap.killTweensOf(
        imageContainerRef.current
      );

      gsap.killTweensOf(
        leftPanelRef.current
      );

      gsap.killTweensOf(
        rightPanelRef.current
      );

      gsap.killTweensOf(
        diamondRef.current
      );
    };
  }, []);

  // =====================================================
  // NAME ANIMATION AFTER VIDEO
  // =====================================================

  useEffect(() => {
    if (!videoFinished) return;

    const nameTl = gsap.timeline({
      defaults: {
        ease: "power4.out",
      },
    });

    nameTl
      .fromTo(
        nameContainerRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.3,
        }
      )

      .fromTo(
        nameFirstRef.current,
        {
          y: 100,
          opacity: 0,
          letterSpacing: "0.3em",
        },
        {
          y: 0,
          opacity: 1,
          letterSpacing: "-0.08em",
          duration: 1.5,
        },
        "-=0.1"
      )

      .fromTo(
        nameLastRef.current,
        {
          y: 100,
          opacity: 0,
          letterSpacing: "0.3em",
        },
        {
          y: 0,
          opacity: 1,
          letterSpacing: "-0.08em",
          duration: 1.5,
        },
        "-=1.3"
      );

    gsap.to(
      [
        nameFirstRef.current,
        nameLastRef.current,
      ],
      {
        textShadow:
          "0 0 30px rgba(255,255,255,0.25), 0 0 60px rgba(255,255,255,0.1)",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 2,
      }
    );

    return () => {
      nameTl.kill();

      gsap.killTweensOf([
        nameFirstRef.current,
        nameLastRef.current,
      ]);
    };
  }, [videoFinished]);

  // =====================================================
  // MARQUEE ITEMS
  // =====================================================

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

  // =====================================================
  // JSX
  // =====================================================

  return (
    <section
      className="
        relative
        h-screen
        w-full
        overflow-hidden
        bg-[#080808]
        text-white
      "
    >
      {/* =================================================
          BACKGROUND GRID
      ================================================= */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.13]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.05) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "70px 70px",
          maskImage:
            "radial-gradient(circle at center, black, transparent 75%)",
        }}
      />

      {/* =================================================
          CENTER PORTRAIT
      ================================================= */}

      <div
        ref={imageContainerRef}
        className="
          absolute
          left-1/2
          top-[1%]
          z-10
          h-[calc(100vh-1%)]
          w-[470px]
          -translate-x-1/2
        "
      >
        {!videoFinished ? (
          <video
            ref={videoRef}
            src={ayanVideo}
            autoPlay
            playsInline
            muted={false}
            volume={1}
            onEnded={() =>
              setVideoFinished(true)
            }
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-top
              grayscale
            "
          />
        ) : (
          <img
            src={ayanImage}
            alt="Ayan Saha"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-top
              grayscale
            "
          />
        )}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-[#080808]
            via-transparent
            to-transparent
          "
        />
      </div>

      {/* =================================================
          GIANT NAME
      ================================================= */}

      <div
        ref={nameContainerRef}
        className="
          pointer-events-none
          absolute
          inset-0
          z-20
          flex
          flex-col
          items-center
          justify-center
          pt-[70px]
        "
        style={{
          opacity: videoFinished
            ? 1
            : 0,
        }}
      >
        <h1
          ref={nameFirstRef}
          className="
            select-none
            text-[clamp(130px,18vw,250px)]
            font-black
            leading-[0.72]
            tracking-[-0.08em]
            text-transparent
            [-webkit-text-stroke:1.5px_rgba(255,255,255,0.42)]
            [text-shadow:0_0_20px_rgba(255,255,255,0.15)]
          "
        >
          AYAN
        </h1>

        <h1
          ref={nameLastRef}
          className="
            select-none
            text-[clamp(130px,18vw,250px)]
            font-black
            leading-[0.72]
            tracking-[-0.08em]
            text-transparent
            [-webkit-text-stroke:1.5px_rgba(255,255,255,0.42)]
            [text-shadow:0_0_20px_rgba(255,255,255,0.15)]
          "
        >
          SAHA
        </h1>
      </div>

      {/* =================================================
          LEFT PROFESSIONAL PANEL
      ================================================= */}

      <div
        ref={leftPanelRef}
        className="
          absolute
          left-[4%]
          top-[55%]
          z-40
          w-[340px]
          -translate-y-1/2
          rounded-[24px]
          border
          border-white/[0.12]
          bg-white/[0.035]
          p-7
          backdrop-blur-2xl
          shadow-[0_25px_80px_rgba(0,0,0,0.45)]
        "
      >
        {/* Small top indicator */}

        <div
          className="
            mb-6
            flex
            items-center
            gap-2
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-white/35
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-white/70
              shadow-[0_0_12px_rgba(255,255,255,0.7)]
            "
          />

          Available for work
        </div>

        <p
          ref={greetingRef}
          className="
            mb-3
            text-[13px]
            text-white/45
          "
        >
          Frontend Developer
        </p>

        <h2
          ref={headlineRef}
          className="
            text-[28px]
            font-medium
            leading-[1.2]
            tracking-[-0.045em]
          "
        >
          Digital experiences
          <br />
          that drive growth.
        </h2>

        <div
          ref={trustRef}
          className="
            mt-5
            flex
            items-center
            gap-3
            text-[11px]
            text-white/40
          "
        >
          <span
            className="
              h-1
              w-1
              rounded-full
              bg-white/50
            "
          />

          <span>
            Trusted by 200+ businesses
          </span>
        </div>

        {/* Divider */}

        <div
          className="
            my-6
            h-px
            w-full
            bg-white/[0.08]
          "
        />

        {/* Buttons */}

        <div
          ref={buttonsRef}
          className="
            flex
            flex-wrap
            items-center
            gap-3
          "
        >
          {/* Collaborate */}

          <button
            type="button"
            onClick={() =>
              handleSectionClick("contact")
            }
            className="
              cursor-pointer
              flex
              items-center
              gap-3
              rounded-full
              bg-white
              px-4
              py-2.5
              text-[11px]
              font-medium
              text-black
              transition-all
              duration-300
              hover:scale-105
              hover:bg-white/90
              active:scale-95
            "
          >
            Let's Collaborate

            <span
              className="
                flex
                h-4
                w-4
                items-center
                justify-center
                rounded-full
                bg-black
                text-[9px]
                text-white
              "
            >
              →
            </span>
          </button>

          {/* Explore */}

          <button
            type="button"
            onClick={() =>
              handleSectionClick("showcase")
            }
            className="
              cursor-pointer
              flex
              items-center
              gap-3
              rounded-full
              border
              border-white/20
              bg-white/[0.03]
              px-4
              py-2.5
              text-[11px]
              text-white/75
              transition-all
              duration-300
              hover:border-white/40
              hover:bg-white/10
              active:scale-95
            "
          >
            Explore Work

            <span className="text-[13px]">
              ↗
            </span>
          </button>
        </div>
      </div>

      {/* =================================================
          RIGHT PROFESSIONAL PANEL
      ================================================= */}

      <div
        ref={rightPanelRef}
        className="
          absolute
          right-[4%]
          top-[44%]
          z-40
          w-[300px]
          -translate-y-1/2
          rounded-[24px]
          border
          border-white/[0.12]
          bg-white/[0.035]
          p-7
          backdrop-blur-2xl
          shadow-[0_25px_80px_rgba(0,0,0,0.45)]
        "
      >
        {/* Header */}

        <div
          className="
            mb-6
            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-white/30
            "
          >
            Client Feedback
          </span>

          <span
            className="
              text-[10px]
              text-white/25
            "
          >
            01 / 05
          </span>
        </div>

        {/* Avatars */}

        <div
          ref={facesRef}
          className="
            flex
            -space-x-2.5
          "
        >
          {[1, 2, 3, 4, 5].map(
            (item) => (
              <div
                key={item}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#080808]
                  bg-gradient-to-br
                  from-white
                  via-gray-400
                  to-gray-800
                  text-[9px]
                  text-black
                "
              >
                ●
              </div>
            )
          )}
        </div>

        {/* Rating */}

        <p
          ref={ratingRef}
          className="
            mt-6
            text-[14px]
            leading-relaxed
            text-white/70
          "
        >
          <span
            className="
              text-[25px]
              font-semibold
              tracking-[-0.04em]
              text-white
            "
          >
            99.8%
          </span>

          <br />

          Client Satisfaction Rate

          <br />

          <span className="text-white/35">
            Let's build something great.
          </span>
        </p>

        {/* Divider */}

        <div
          className="
            my-6
            h-px
            w-full
            bg-white/[0.08]
          "
        />

        {/* Tags */}

        <div
          ref={tagsRef}
          className="
            flex
            flex-wrap
            gap-2
          "
        >
          <span
            className="
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-3
              py-1.5
              text-[9px]
              text-white/45
            "
          >
            Premium Quality
          </span>

          <span
            className="
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-3
              py-1.5
              text-[9px]
              text-white/45
            "
          >
            24h Response
          </span>
        </div>

        {/* Bottom label */}

        <div
          className="
            mt-6
            flex
            items-center
            gap-2
            text-[9px]
            uppercase
            tracking-[0.18em]
            text-white/25
          "
        >
          <span className="h-px w-6 bg-white/20" />

          Let's create something memorable
        </div>

        {/* Diamond */}

        <div
          ref={diamondRef}
          className="
            absolute
            -bottom-5
            -right-5
          "
        >
          <div
            className="
              relative
              h-10
              w-10
              rotate-45
            "
          >
            <div
              className="
                absolute
                inset-2
                bg-white/30
                blur-lg
              "
            />

            <div
              className="
                absolute
                inset-2
                bg-white/70
              "
            />
          </div>
        </div>
      </div>

      {/* =================================================
          MARQUEE
      ================================================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-50
          w-full
          overflow-hidden
          border-t
          border-white/[0.06]
          bg-[#080808]/80
          py-4
          backdrop-blur-sm
        "
      >
        <div
          ref={marqueeRef}
          className="
            flex
            w-max
            whitespace-nowrap
          "
        >
          {marqueeItems.map(
            (text, i) => (
              <span
                key={i}
                className="
                  mx-8
                  text-xs
                  font-bold
                  tracking-[0.35em]
                  text-white/25
                "
              >
                {text}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;