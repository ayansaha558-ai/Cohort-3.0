import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(
  ScrollTrigger,
  CustomEase,
  ScrollToPlugin
);

const smoothEase = CustomEase.create(
  "smoothEase",
  "M0,0 C0.22,1 0.36,1 1,1"
);

const FrontendDev = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const headingOneRef = useRef(null);
  const headingTwoRef = useRef(null);

  const paragraphRef = useRef(null);

  const techStackRef = useRef(null);

  const aboutBtnRef = useRef(null);
  const magneticBtnRef = useRef(null);

  const typingTextRef = useRef(null);
  const cursorRef = useRef(null);

  const floatingElementsRef = useRef(null);

  const lineDecorationRef =
    useRef(null);

  const glowOrb1 = useRef(null);
  const glowOrb2 = useRef(null);
  const glowOrb3 = useRef(null);

  const [isInView, setIsInView] =
    useState(false);

  // =====================================================
  // MOUSE
  // =====================================================

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    const { innerWidth, innerHeight } =
      window;

    mouse.current = {
      x: (clientX / innerWidth - 0.5) * 2,
      y: (clientY / innerHeight - 0.5) * 2,
    };
  };

  // =====================================================
  // SCROLL TRIGGER
  // =====================================================

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",

      onEnter: () => {
        setIsInView(true);
      },

      onLeaveBack: () => {
        setIsInView(false);
      },
    });

    ScrollTrigger.refresh();

    return () => {
      trigger.kill();
    };
  }, []);

  // =====================================================
  // MAIN ANIMATION
  // =====================================================

  useEffect(() => {
    if (!isInView) return;

    const ctx = gsap.context(() => {
      // =================================================
      // BACKGROUND ORBS
      // =================================================

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

      // =================================================
      // TYPING
      // =================================================

      const typingTl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1.4,
      });

      typingTl
        .fromTo(
          typingTextRef.current,
          {
            width: "0ch",
            opacity: 0,
          },
          {
            width: "18ch",
            opacity: 1,
            duration: 1.6,
            ease: "power2.inOut",
          }
        )
        .to(
          typingTextRef.current,
          {
            duration: 2.8,
          }
        )
        .to(
          typingTextRef.current,
          {
            width: "0ch",
            duration: 1.1,
            ease: "power2.inOut",
          }
        );

      // =================================================
      // CURSOR
      // =================================================

      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.45,
        repeat: -1,
        yoyo: true,
        ease: "steps(1)",
      });

      // =================================================
      // LINE
      // =================================================

      gsap.fromTo(
        lineDecorationRef.current,
        {
          scaleX: 0,
          opacity: 0,
        },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1.4,
          delay: 0.25,
          ease: "power3.out",
          transformOrigin: "center",
        }
      );

      // =================================================
      // HEADING ONE
      // =================================================

      gsap.fromTo(
        headingOneRef.current,
        {
          opacity: 0,
          y: 80,
          filter: "blur(12px)",
          scale: 0.92,
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          scale: 1,
          duration: 1.35,
          ease: "power4.out",
        }
      );

      // =================================================
      // HEADING TWO
      // =================================================

      gsap.fromTo(
        headingTwoRef.current,
        {
          opacity: 0,
          y: 60,
          filter: "blur(10px)",
          skewX: -8,
        },
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

      // =================================================
      // PARAGRAPH
      // =================================================

      if (paragraphRef.current) {
        gsap.fromTo(
          paragraphRef.current,
          {
            opacity: 0,
            y: 40,
            filter: "blur(6px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.1,
            delay: 0.55,
            ease: "power3.out",
          }
        );
      }

      // =================================================
      // PREMIUM TECH STACK
      // =================================================

      if (techStackRef.current) {
        const rows =
          techStackRef.current.querySelectorAll(
            ".tech-row"
          );

        const firstRow =
          rows[0]?.querySelectorAll(
            ".tech-pill"
          );

        const secondRow =
          rows[1]?.querySelectorAll(
            ".tech-pill"
          );

        const sweep =
          techStackRef.current.querySelector(
            ".tech-sweep"
          );

        // -------------------------------------------------
        // INITIAL STATE
        // -------------------------------------------------

        gsap.set(
          [...(firstRow || []), ...(secondRow || [])],
          {
            opacity: 0,
            y: 35,
            scale: 0.92,
            rotateX: 55,
            filter: "blur(8px)",
            transformPerspective: 1000,
            transformOrigin:
              "center bottom",
          }
        );

        // -------------------------------------------------
        // FIRST ROW
        // -------------------------------------------------

        const techTl =
          gsap.timeline({
            delay: 0.7,
          });

        if (firstRow?.length) {
          techTl.to(firstRow, {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 0.9,
            stagger: 0.07,
            ease: "power4.out",
          });
        }

        // -------------------------------------------------
        // SECOND ROW
        // -------------------------------------------------

        if (secondRow?.length) {
          techTl.to(
            secondRow,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
              filter: "blur(0px)",
              duration: 0.9,
              stagger: 0.1,
              ease: "power4.out",
            },
            "-=0.55"
          );
        }

        // -------------------------------------------------
        // LIGHT SWEEP
        // -------------------------------------------------

        if (sweep) {
          gsap.fromTo(
            sweep,
            {
              x: "-120%",
              opacity: 0,
            },
            {
              x: "120%",
              opacity: 0.8,
              duration: 1.4,
              delay: 1.25,
              ease: "power2.inOut",
            }
          );
        }
      }

      // =================================================
      // BUTTON
      // =================================================

      gsap.fromTo(
        aboutBtnRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.88,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          delay: 1.35,
          ease: "back.out(1.8)",
        }
      );

      // =================================================
      // PARTICLES
      // =================================================

      if (floatingElementsRef.current) {
        const elements =
          floatingElementsRef.current
            .children;

        gsap.fromTo(
          elements,
          {
            opacity: 0,
            scale: 0,
            rotation: 120,
          },
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

    return () => {
      ctx.revert();
    };
  }, [isInView]);

  // =====================================================
  // FLOATING PARALLAX
  // =====================================================

  useEffect(() => {
    if (
      !floatingElementsRef.current ||
      !isInView
    ) {
      return;
    }

    const elements = Array.from(
      floatingElementsRef.current.children
    );

    const floats = elements.map(
      (el, i) => {
        const baseY =
          gsap.utils.random(
            -35,
            35
          );

        const baseX =
          gsap.utils.random(
            -25,
            25
          );

        const speed =
          gsap.utils.random(
            5,
            9
          );

        return gsap.to(el, {
          y: baseY,
          x: baseX,
          rotation:
            gsap.utils.random(
              -20,
              20
            ),
          duration: speed,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.35,
        });
      }
    );

    const tick = () => {
      if (
        !floatingElementsRef.current
      ) {
        return;
      }

      gsap.to(
        floatingElementsRef.current,
        {
          x:
            mouse.current.x * 18,
          y:
            mouse.current.y * 12,
          duration: 1.2,
          ease: "power2.out",
        }
      );

      gsap.to(contentRef.current, {
        x:
          mouse.current.x * 6,
        y:
          mouse.current.y * 4,
        duration: 1.4,
        ease: "power2.out",
      });
    };

    gsap.ticker.add(tick);

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      floats.forEach((t) =>
        t.kill()
      );

      gsap.ticker.remove(tick);

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, [isInView]);

  // =====================================================
  // MAGNETIC BUTTON
  // =====================================================

  useEffect(() => {
    const btn =
      magneticBtnRef.current;

    if (!btn) return;

    const onMove = (e) => {
      const rect =
        btn.getBoundingClientRect();

      const x =
        e.clientX -
        rect.left -
        rect.width / 2;

      const y =
        e.clientY -
        rect.top -
        rect.height / 2;

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

    btn.addEventListener(
      "mousemove",
      onMove
    );

    btn.addEventListener(
      "mouseleave",
      onLeave
    );

    return () => {
      btn.removeEventListener(
        "mousemove",
        onMove
      );

      btn.removeEventListener(
        "mouseleave",
        onLeave
      );
    };
  }, []);

  // =====================================================
  // EXPLORE MY WORK
  // =====================================================

  const handleExploreWork = () => {
    const showcase =
      document.getElementById(
        "showcase"
      );

    const button =
      aboutBtnRef.current;

    if (!showcase || !button) {
      return;
    }

    gsap.killTweensOf(window);

    const clickTl =
      gsap.timeline();

    clickTl
      .to(button, {
        scale: 0.9,
        duration: 0.12,
        ease: "power2.out",
      })
      .to(button, {
        scale: 1.08,
        duration: 0.22,
        ease: "back.out(2)",
      })
      .to(button, {
        scale: 1,
        duration: 0.35,
        ease: "elastic.out(1, 0.4)",
      });

    const glow =
      document.createElement(
        "div"
      );

    glow.style.position = "fixed";
    glow.style.left = "50%";
    glow.style.top = "50%";
    glow.style.width = "20px";
    glow.style.height = "20px";
    glow.style.borderRadius =
      "50%";
    glow.style.background =
      "rgba(255,255,255,0.25)";
    glow.style.boxShadow =
      "0 0 100px 40px rgba(255,255,255,0.08)";
    glow.style.pointerEvents =
      "none";
    glow.style.zIndex = "9999";
    glow.style.transform =
      "translate(-50%, -50%) scale(0)";

    document.body.appendChild(
      glow
    );

    gsap.to(glow, {
      scale: 12,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      onComplete: () => {
        glow.remove();
      },
    });

    const navbarHeight = 100;

    const targetPosition =
      showcase.getBoundingClientRect()
        .top +
      window.scrollY -
      navbarHeight;

    gsap.to(window, {
      duration: 1.8,

      scrollTo: {
        y: targetPosition,
        autoKill: false,
      },

      ease: smoothEase,

      overwrite: true,
    });
  };

  // =====================================================
  // BUTTON HOVER
  // =====================================================

  const handleButtonHover = (
    e,
    isEnter
  ) => {
    const btn =
      e.currentTarget;

    gsap.to(btn, {
      scale: isEnter ? 1.06 : 1,

      backgroundColor: isEnter
        ? "rgba(255,255,255,0.06)"
        : "transparent",

      borderColor: isEnter
        ? "rgba(255,255,255,0.35)"
        : "rgba(255,255,255,0.12)",

      boxShadow: isEnter
        ? "0 0 40px rgba(255,255,255,0.08)"
        : "0 0 0 rgba(255,255,255,0)",

      duration: 0.35,

      ease: "power2.out",
    });
  };

  // =====================================================
  // PREMIUM TECH HOVER
  // =====================================================

  const handleTechHover = (
    e,
    isEnter
  ) => {
    const pill =
      e.currentTarget;

    if (isEnter) {
      gsap.to(pill, {
        y: -5,
        scale: 1.08,

        color: "#ffffff",

        borderColor:
          "rgba(255,255,255,0.32)",

        backgroundColor:
          "rgba(255,255,255,0.075)",

        boxShadow:
          "0 12px 40px rgba(255,255,255,0.10)",

        duration: 0.35,

        ease: "power3.out",

        overwrite: true,
      });

      const shine =
        pill.querySelector(
          ".tech-shine"
        );

      if (shine) {
        gsap.fromTo(
          shine,
          {
            x: "-120%",
          },
          {
            x: "120%",
            duration: 0.65,
            ease: "power2.out",
          }
        );
      }
    } else {
      gsap.to(pill, {
        y: 0,
        scale: 1,

        color:
          "rgba(255,255,255,0.48)",

        borderColor:
          "rgba(255,255,255,0.08)",

        backgroundColor:
          "rgba(255,255,255,0.035)",

        boxShadow:
          "0 0 0 rgba(255,255,255,0)",

        duration: 0.45,

        ease: "power3.out",

        overwrite: true,
      });
    }
  };

  // =====================================================
  // JSX
  // =====================================================

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        relative
        flex
        min-h-screen
        w-full
        select-none
        items-center
        justify-center
        overflow-hidden
        bg-black
        px-6
        text-white
        md:px-20
      "
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(ellipse_at_center,_#0a0a0a_0%,_#000000_70%)]
          "
        />

        <div
          ref={glowOrb1}
          className="
            absolute
            left-1/4
            top-1/4
            h-[500px]
            w-[500px]
            rounded-full
            bg-white/[0.03]
            blur-[140px]
          "
        />

        <div
          ref={glowOrb2}
          className="
            absolute
            bottom-1/4
            right-1/5
            h-[420px]
            w-[420px]
            rounded-full
            bg-indigo-500/[0.04]
            blur-[130px]
          "
        />

        <div
          ref={glowOrb3}
          className="
            absolute
            left-1/2
            top-1/2
            h-[700px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/[0.02]
            blur-[180px]
          "
        />
      </div>

      {/* =================================================
          GRID
      ================================================= */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.12) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.12) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* =================================================
          FLOATING PARTICLES
      ================================================= */}

      <div
        ref={floatingElementsRef}
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {[...Array(18)].map(
          (_, i) => (
            <div
              key={i}
              className="
                absolute
                rounded-full
                bg-white
              "
              style={{
                width: `${
                  Math.random() * 2.5 +
                  1
                }px`,

                height: `${
                  Math.random() * 2.5 +
                  1
                }px`,

                top: `${
                  8 +
                  Math.random() * 84
                }%`,

                left: `${
                  Math.random() * 96
                }%`,

                opacity: 0,
              }}
            />
          )
        )}
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div
        ref={contentRef}
        className="
          relative
          z-10
          max-w-3xl
          text-center
          will-change-transform
        "
      >
        {/* STATUS */}

        <div className="mb-8 flex items-center justify-center">
          <div className="relative mr-3">
            <div className="h-2 w-2 rounded-full bg-emerald-400" />

            <div className="absolute inset-0 h-2 w-2 animate-ping rounded-full bg-emerald-400 opacity-40" />
          </div>

          <span
            ref={typingTextRef}
            className="
              inline-block
              overflow-hidden
              whitespace-nowrap
              font-mono
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-white/45
            "
          >
            Available for work
          </span>

          <span
            ref={cursorRef}
            className="
              ml-[2px]
              font-mono
              text-white/45
            "
          >
            |
          </span>
        </div>

        {/* LINE */}

        <div
          ref={lineDecorationRef}
          className="
            mx-auto
            mb-7
            h-[1px]
            origin-center
            bg-gradient-to-r
            from-transparent
            via-white/25
            to-transparent
          "
        />

        {/* HEADINGS */}

        <div className="space-y-1">
          <h1
            ref={headingOneRef}
            className="
              text-[clamp(52px,9.5vw,132px)]
              font-black
              leading-[0.95]
              tracking-tight
              text-white
            "
          >
            Frontend
          </h1>

          <h1
            ref={headingTwoRef}
            className="
              bg-gradient-to-r
              from-white
              via-white/75
              to-white/25
              bg-clip-text
              text-[clamp(52px,9.5vw,132px)]
              font-black
              leading-[0.95]
              tracking-tight
              text-transparent
            "
          >
            Developer
          </h1>
        </div>

        {/* =================================================
            TECH STACK
        ================================================= */}

        <div
          ref={techStackRef}
          className="
            relative
            mt-10
            flex
            flex-col
            items-center
            gap-3
            overflow-hidden
            py-3
          "
        >
          {/* LIGHT SWEEP */}

          <div
            className="
              tech-sweep
              pointer-events-none
              absolute
              top-0
              z-20
              h-full
              w-16
              rotate-[18deg]
              bg-gradient-to-r
              from-transparent
              via-white/10
              to-transparent
              blur-xl
            "
          />

          {/* FIRST ROW */}

          <div
            className="
              tech-row
              flex
              flex-wrap
              justify-center
              gap-2.5
            "
          >
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind",
              "TypeScript",
            ].map((tech) => (
              <div
                key={tech}
                onMouseEnter={(e) =>
                  handleTechHover(
                    e,
                    true
                  )
                }
                onMouseLeave={(e) =>
                  handleTechHover(
                    e,
                    false
                  )
                }
                className="
                  tech-pill
                  group
                  relative
                  cursor-default
                  overflow-hidden
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-white/[0.035]
                  px-4
                  py-2
                  text-xs
                  font-medium
                  tracking-wide
                  text-white/50
                  backdrop-blur-xl
                  will-change-transform
                "
              >
                {/* Shine */}

                <span
                  className="
                    tech-shine
                    pointer-events-none
                    absolute
                    -left-1/2
                    top-0
                    h-full
                    w-1/2
                    -skew-x-12
                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                  "
                />

                {/* Top highlight */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-x-3
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                  "
                />

                <span className="relative z-10">
                  {tech}
                </span>
              </div>
            ))}
          </div>

          {/* SECOND ROW */}

          <div
            className="
              tech-row
              flex
              flex-wrap
              justify-center
              gap-2.5
            "
          >
            {[
              "Java",
              "Python",
              "MySQL",
              "PL/SQL",
            ].map((tech) => (
              <div
                key={tech}
                onMouseEnter={(e) =>
                  handleTechHover(
                    e,
                    true
                  )
                }
                onMouseLeave={(e) =>
                  handleTechHover(
                    e,
                    false
                  )
                }
                className="
                  tech-pill
                  group
                  relative
                  cursor-default
                  overflow-hidden
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-white/[0.035]
                  px-4
                  py-2
                  text-xs
                  font-medium
                  tracking-wide
                  text-white/50
                  backdrop-blur-xl
                  will-change-transform
                "
              >
                {/* Shine */}

                <span
                  className="
                    tech-shine
                    pointer-events-none
                    absolute
                    -left-1/2
                    top-0
                    h-full
                    w-1/2
                    -skew-x-12
                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                  "
                />

                {/* Top highlight */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-x-3
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                  "
                />

                <span className="relative z-10">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =================================================
            EXPLORE MY WORK
        ================================================= */}

        <div className="mt-11 flex flex-col items-center">
          <div
            ref={magneticBtnRef}
            className="inline-block"
          >
            <button
              ref={aboutBtnRef}
              onMouseEnter={(e) =>
                handleButtonHover(
                  e,
                  true
                )
              }
              onMouseLeave={(e) =>
                handleButtonHover(
                  e,
                  false
                )
              }
              onClick={
                handleExploreWork
              }
              className="
                relative
                z-30
                inline-flex
                cursor-pointer
                items-center
                gap-3
                rounded-full
                border
                border-white/12
                bg-transparent
                px-9
                py-3.5
                text-xs
                font-medium
                uppercase
                tracking-[0.22em]
                text-white/70
                hover:text-white
              "
            >
              <span className="text-base opacity-70">
                →
              </span>

              Explore My Work

              <span className="text-base opacity-70">
                ←
              </span>
            </button>
          </div>
        </div>

        {/* =================================================
            SCROLL
        ================================================= */}

        <div
          className="
            mt-14
            flex
            items-center
            justify-center
            gap-3
            font-mono
            text-[8px]
            uppercase
            tracking-[0.35em]
            text-white/25
          "
        >
          <div className="h-px w-10 bg-white/15" />

          <span className="animate-pulse">
            Scroll
          </span>

          <div className="h-px w-10 bg-white/15" />
        </div>
      </div>
    </section>
  );
};

export default FrontendDev;