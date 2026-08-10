import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import SkyMart from "../assets/SkyMart.png"

/* =========================================================
   DATA
========================================================= */

const techStack = [
  {
    name: "HTML5",
    icon: "https://cdn.simpleicons.org/html5/E34F26",
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: "https://cdn.simpleicons.org/css/1572B6",
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.simpleicons.org/typescript/3178C6",
    color: "#3178C6",
  },
  {
    name: "React",
    icon: "https://cdn.simpleicons.org/react/61DAFB",
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
    color: "#FFFFFF",
  },
  {
    name: "Node.js",
    icon: "https://cdn.simpleicons.org/nodedotjs/339933",
    color: "#339933",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    color: "#06B6D4",
  },
  {
    name: "Python",
    icon: "https://cdn.simpleicons.org/python/3776AB",
    color: "#3776AB",
  },
  {
    name: "Firebase",
    icon: "https://cdn.simpleicons.org/firebase/FFCA28",
    color: "#FFCA28",
  },
  {
    name: "Git",
    icon: "https://cdn.simpleicons.org/git/F05032",
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: "https://cdn.simpleicons.org/github/FFFFFF",
    color: "#FFFFFF",
  },
  {
    name: "Vercel",
    icon: "https://cdn.simpleicons.org/vercel/FFFFFF",
    color: "#FFFFFF",
  },
  {
    name: "Netlify",
    icon: "https://cdn.simpleicons.org/netlify/00C7B7",
    color: "#00C7B7",
  },
  {
    name: "Terminal",
    icon: "https://cdn.simpleicons.org/gnometerminal/4EAA25",
    color: "#4EAA25",
  },
];

const projects = [
  {
    title: "SkyMart",
    tech: "React+Tailwindcss",
    thumbnail:
      SkyMart,
      liveLink:"https://cohort-3-0-t1ls.vercel.app/",
    github: "https://github.com/princekumar-dev74/portfolio.git",
  },
  {
    title: "WebKaizen",
    tech: "TypeScript + Tailwind",
    thumbnail: "/assets/website.png",
    github: "https://www.webkaizen.in",
  },
  {
    title: "Portfolio V1",
    tech: "TypeScript",
    thumbnail:
      "https://cdn.jsdelivr.net/gh/princekumar-dev74/portfolio-v1/public/preview.png",
    github: "https://github.com/princekumar-dev74/portfolio-v1.git",
  },
];

const certificates = [
  {
    title: "Certificate Coming Soon",
    tech: "Certificate",
    thumbnail: null,
  },
  {
    title: "Certificate Coming Soon",
    tech: "Certificate",
    thumbnail: null,
  },
];

const tabs = [
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "tech", label: "Tech Stack" },
];

/* =========================================================
   ICONS
========================================================= */

const GithubIcon = () => (
  <svg
    className="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const DownloadIcon = () => (
  <svg
    className="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm-8 4h16v-2H4v2z" />
  </svg>
);

const Spinner = () => (
  <svg
    className="h-4 w-4 animate-spin"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      d="M12 2v4m0 12v4m10-10h-4M6 12H2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ item }) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      y: -8,
      duration: 0.45,
      ease: "power3.out",
    });

    gsap.to(imageRef.current, {
      scale: 1.06,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      duration: 0.45,
      ease: "power3.out",
    });

    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-md"
      style={{
        backdropFilter: "blur(20px)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-48 overflow-hidden bg-white/5">
        <img
          ref={imageRef}
          src={item.thumbnail}
          alt={item.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute inset-0 bg-white/0 transition-colors duration-300 group-hover:bg-white/5" />
      </div>

      <div className="flex items-center justify-between p-5">
        <div>
          <p className="mb-1 text-sm font-medium text-white">
            {item.title}
          </p>

          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
            {item.tech}
          </span>
        </div>

        <a
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition-all duration-200 hover:border-white/30 hover:bg-white/10 hover:text-white active:scale-95"
        >
          <GithubIcon />
        </a>
      </div>
    </div>
  );
}

/* =========================================================
   CERTIFICATE CARD
========================================================= */

function CertCard({ item }) {
  const [downloading, setDownloading] = useState(false);
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  const handleDownload = async () => {
    if (!item.thumbnail) return;

    setDownloading(true);

    try {
      const response = await fetch(item.thumbnail);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${item.title}.jpg`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }

    setTimeout(() => {
      setDownloading(false);
    }, 500);
  };

  const enter = () => {
    gsap.to(cardRef.current, {
      y: -8,
      duration: 0.45,
      ease: "power3.out",
    });

    gsap.to(imageRef.current, {
      scale: 1.06,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  const leave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      duration: 0.45,
      ease: "power3.out",
    });

    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-md"
      style={{
        backdropFilter: "blur(20px)",
      }}
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      <div className="relative h-48 overflow-hidden bg-white/5">
        {item.thumbnail ? (
          <img
            ref={imageRef}
            src={item.thumbnail}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-white/[0.02]">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/20">
              Coming Soon
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-sm font-semibold leading-snug text-white">
            {item.title}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between px-5 py-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
          {item.tech}
        </span>

        <button
          onClick={handleDownload}
          disabled={!item.thumbnail}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition-all duration-200 hover:border-white/30 hover:bg-white/10 hover:text-white active:scale-95 disabled:cursor-not-allowed disabled:opacity-30"
        >
          {downloading ? <Spinner /> : <DownloadIcon />}
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   TECH SPHERE
========================================================= */

function TechGrid() {
  const sceneRef = useRef(null);
  const itemRefs = useRef([]);

  const rotX = useRef(0.3);
  const rotY = useRef(0);

  const velocityX = useRef(0);
  const velocityY = useRef(0.004);

  const dragging = useRef(false);

  const lastX = useRef(0);
  const lastY = useRef(0);

  const dragVelocityX = useRef(0);
  const dragVelocityY = useRef(0);

  const animationFrame = useRef(null);

  const RADIUS = 160;

  const positions = useRef([]);

  /* ---------------------------------------------
     Create Fibonacci sphere positions
  --------------------------------------------- */

  useEffect(() => {
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    positions.current = techStack.map((_, i) => {
      const y =
        1 - (i / (techStack.length - 1)) * 2;

      const radius = Math.sqrt(1 - y * y);

      const theta = goldenAngle * i;

      return {
        x: Math.cos(theta) * radius,
        y,
        z: Math.sin(theta) * radius,
      };
    });
  }, []);

  /* ---------------------------------------------
     Project 3D → 2D
  --------------------------------------------- */

  const project = (position, rx, ry) => {
    const cosY = Math.cos(ry);
    const sinY = Math.sin(ry);

    const x1 =
      position.x * cosY -
      position.z * sinY;

    const z1 =
      position.x * sinY +
      position.z * cosY;

    const cosX = Math.cos(rx);
    const sinX = Math.sin(rx);

    const y2 =
      position.y * cosX -
      z1 * sinX;

    const z2 =
      position.y * sinX +
      z1 * cosX;

    return {
      x: x1,
      y: y2,
      z: z2,
    };
  };

  /* ---------------------------------------------
     GSAP ticker instead of normal CSS animation
  --------------------------------------------- */

  useEffect(() => {
    const renderSphere = () => {
      if (!dragging.current) {
        rotY.current += velocityY.current;
        rotX.current += velocityX.current;

        velocityX.current *= 0.97;
        velocityY.current =
          velocityY.current * 0.99 + 0.00004;

        if (rotX.current > 0.6) {
          velocityX.current -= 0.0005;
        }

        if (rotX.current < -0.1) {
          velocityX.current += 0.0005;
        }
      }

      const projected = positions.current.map(
        (position, index) => ({
          element: itemRefs.current[index],
          position: project(
            position,
            rotX.current,
            rotY.current
          ),
        })
      );

      projected
        .slice()
        .sort(
          (a, b) =>
            a.position.z - b.position.z
        )
        .forEach(
          ({ element, position }, index) => {
            if (!element) return;

            const x =
              position.x * RADIUS +
              210 -
              36;

            const y =
              position.y * RADIUS +
              210 -
              36;

            const depth =
              (position.z + 1) / 2;

            const opacity =
              0.25 + depth * 0.75;

            const scale =
              0.55 + depth * 0.55;

            element.style.left = `${x}px`;
            element.style.top = `${y}px`;
            element.style.opacity = opacity;
            element.style.transform =
              `scale(${scale})`;
            element.style.zIndex = index;
          }
        );
    };

    gsap.ticker.add(renderSphere);

    return () => {
      gsap.ticker.remove(renderSphere);
    };
  }, []);

  /* ---------------------------------------------
     Mouse
  --------------------------------------------- */

  const onMouseDown = (event) => {
    dragging.current = true;

    lastX.current = event.clientX;
    lastY.current = event.clientY;

    dragVelocityX.current = 0;
    dragVelocityY.current = 0;
  };

  useEffect(() => {
    const onMouseMove = (event) => {
      if (!dragging.current) return;

      const dx =
        event.clientX - lastX.current;

      const dy =
        event.clientY - lastY.current;

      dragVelocityX.current = dy * 0.005;
      dragVelocityY.current = dx * 0.005;

      rotX.current +=
        dragVelocityX.current;

      rotY.current +=
        dragVelocityY.current;

      lastX.current = event.clientX;
      lastY.current = event.clientY;
    };

    const onMouseUp = () => {
      if (!dragging.current) return;

      velocityX.current =
        dragVelocityX.current;

      velocityY.current =
        dragVelocityY.current || 0.004;

      dragging.current = false;
    };

    window.addEventListener(
      "mousemove",
      onMouseMove
    );

    window.addEventListener(
      "mouseup",
      onMouseUp
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        onMouseMove
      );

      window.removeEventListener(
        "mouseup",
        onMouseUp
      );
    };
  }, []);

  /* ---------------------------------------------
     Touch
  --------------------------------------------- */

  const onTouchStart = (event) => {
    dragging.current = true;

    lastX.current =
      event.touches[0].clientX;

    lastY.current =
      event.touches[0].clientY;

    dragVelocityX.current = 0;
    dragVelocityY.current = 0;
  };

  const onTouchMove = (event) => {
    if (!dragging.current) return;

    const dx =
      event.touches[0].clientX -
      lastX.current;

    const dy =
      event.touches[0].clientY -
      lastY.current;

    dragVelocityX.current = dy * 0.005;
    dragVelocityY.current = dx * 0.005;

    rotX.current +=
      dragVelocityX.current;

    rotY.current +=
      dragVelocityY.current;

    lastX.current =
      event.touches[0].clientX;

    lastY.current =
      event.touches[0].clientY;
  };

  const onTouchEnd = () => {
    velocityX.current =
      dragVelocityX.current;

    velocityY.current =
      dragVelocityY.current || 0.004;

    dragging.current = false;
  };

  return (
    <div className="space-y-4">
      {/* Header */}

      <div className="flex items-center justify-center gap-3 text-white/40">
        <div className="h-px w-10 bg-gradient-to-r from-transparent to-white/30" />

        <span className="font-mono text-[10px] uppercase tracking-[0.4em]">
          {techStack.length} technologies · daily stack
        </span>

        <div className="h-px w-10 bg-gradient-to-l from-transparent to-white/30" />
      </div>

      {/* Sphere */}

      <div
        className="relative flex w-full select-none items-center justify-center"
        style={{
          height: "460px",
          cursor: dragging.current
            ? "grabbing"
            : "grab",
          touchAction: "none",
        }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Glow */}

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%)",
          }}
        />

        {/* Scene */}

        <div
          ref={sceneRef}
          className="relative"
          style={{
            width: "420px",
            height: "420px",
          }}
        >
          {techStack.map((tech, index) => (
            <div
              key={tech.name}
              ref={(element) => {
                itemRefs.current[index] =
                  element;
              }}
              className="absolute"
              style={{
                width: 72,
                height: 72,
              }}
            >
              <div
                className="flex h-full w-full flex-col items-center justify-center gap-[5px] rounded-[18px] border border-white/10 bg-black/60 backdrop-blur-xl transition-all duration-200 hover:scale-110 hover:border-white/40"
                style={{
                  boxShadow: `0 0 20px -8px ${tech.color}55`,
                }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  loading="lazy"
                  className="h-[30px] w-[30px] object-contain"
                />

                <span className="font-mono text-center text-[9px] uppercase leading-tight tracking-[0.1em] text-white/50">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Edge fade */}

        <div
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            boxShadow:
              "inset 0 0 80px 40px rgba(0,0,0,0.7)",
          }}
        />
      </div>
    </div>
  );
}

/* =========================================================
   SHOWCASE
========================================================= */

const Showcase = () => {
  const [active, setActive] =
    useState("projects");

  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const tabsRef = useRef(null);
  const contentRef = useRef(null);
  const pillRef = useRef(null);

  const touchStartX = useRef(null);

  /* =======================================================
     INITIAL GSAP ANIMATION
  ======================================================= */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      gsap.set(
        [
          labelRef.current,
          headingRef.current,
          tabsRef.current,
          contentRef.current,
        ],
        {
          opacity: 0,
        }
      );

      gsap.set(labelRef.current, {
        y: -20,
      });

      gsap.set(headingRef.current, {
        y: 50,
        scale: 0.96,
      });

      gsap.set(tabsRef.current, {
        y: 30,
        scale: 0.96,
      });

      gsap.set(contentRef.current, {
        y: 40,
        scale: 0.97,
      });

      tl.to(labelRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
      })
        .to(
          headingRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.35"
        )
        .to(
          tabsRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
          },
          "-=0.5"
        )
        .to(
          contentRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
          },
          "-=0.35"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* =======================================================
     TAB PILL POSITION
  ======================================================= */

  useEffect(() => {
    const positions = {
      projects: "0%",
      certificates: "33.333%",
      tech: "66.666%",
    };

    gsap.to(pillRef.current, {
      left: positions[active],
      duration: 0.5,
      ease: "power3.inOut",
    });
  }, [active]);

  /* =======================================================
     TAB CONTENT ANIMATION
  ======================================================= */

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards =
        contentRef.current?.querySelectorAll(
          ".showcase-item"
        );

      if (!cards?.length) return;

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 35,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    }, contentRef);

    return () => ctx.revert();
  }, [active]);

  /* =======================================================
     TAB SWITCH
  ======================================================= */

  const switchTab = useCallback(
    (id) => {
      if (id === active) return;

      const oldContent = contentRef.current;

      gsap.to(oldContent, {
        opacity: 0,
        y: 20,
        scale: 0.98,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          setActive(id);

          requestAnimationFrame(() => {
            gsap.fromTo(
              oldContent,
              {
                opacity: 0,
                y: 25,
                scale: 0.98,
              },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.5,
                ease: "power3.out",
              }
            );
          });
        },
      });
    },
    [active]
  );

  /* =======================================================
     SWIPE
  ======================================================= */

  const handleTouchStart = (event) => {
    touchStartX.current =
      event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const dx =
      event.changedTouches[0].clientX -
      touchStartX.current;

    if (Math.abs(dx) < 50) return;

    const index = tabs.findIndex(
      (tab) => tab.id === active
    );

    if (
      dx < 0 &&
      index < tabs.length - 1
    ) {
      switchTab(tabs[index + 1].id);
    }

    if (dx > 0 && index > 0) {
      switchTab(tabs[index - 1].id);
    }

    touchStartX.current = null;
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[85vh] w-full overflow-hidden bg-black px-4 py-12 text-white sm:px-8 md:min-h-screen md:px-16 lg:px-24"
    >
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center">
        {/* =================================================
            LABEL
        ================================================= */}

        <div
          ref={labelRef}
          className="mb-5 flex items-center justify-center gap-4"
        >
          <div className="relative h-px w-10 overflow-hidden bg-white/20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent" />
          </div>

          <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-white/35">
            Showcase
          </span>

          <div className="relative h-px w-10 overflow-hidden bg-white/20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent" />
          </div>
        </div>

        {/* =================================================
            HEADING
        ================================================= */}

        <div className="relative mb-12 overflow-hidden">
          <h1
            ref={headingRef}
            className="whitespace-nowrap text-center font-black leading-none tracking-tight text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
            style={{
              fontSize: "clamp(32px, 6vw, 80px)",
            }}
          >
            <span className="bg-gradient-to-b from-white via-white to-white/45 bg-clip-text text-transparent">
              Portfolio Showcase
            </span>
          </h1>
        </div>

        {/* =================================================
            TABS
        ================================================= */}

        <div
          ref={tabsRef}
          className="relative mb-14 flex w-full max-w-md items-center rounded-full border border-white/20 bg-white/[0.08] p-1.5 shadow-2xl shadow-black/40"
          style={{
            backdropFilter: "blur(30px)",
          }}
        >
          <div
            ref={pillRef}
            className="absolute bottom-1.5 top-1.5 rounded-full border border-white/40 bg-white/20 shadow-xl shadow-white/10"
            style={{
              width: "calc(33.333% - 4px)",
              left: "0%",
              backdropFilter: "blur(15px)",
            }}
          />

          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() =>
                switchTab(tab.id)
              }
              className="relative z-10 flex h-12 flex-1 items-center justify-center rounded-full text-xs font-medium tracking-wide"
            >
              <span
                className={
                  active === tab.id
                    ? "font-semibold text-white"
                    : "text-white/35 transition-colors duration-200 hover:text-white/60"
                }
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* =================================================
            CONTENT
        ================================================= */}

        <div
          ref={contentRef}
          className="w-full"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* PROJECTS */}

          {active === "projects" && (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
              {projects.map((item, index) => (
                <div
                  className="showcase-item"
                  key={index}
                >
                  <ProjectCard item={item} />
                </div>
              ))}
            </div>
          )}

          {/* CERTIFICATES */}

          {active === "certificates" && (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
              {certificates.map(
                (item, index) => (
                  <div
                    className="showcase-item"
                    key={index}
                  >
                    <CertCard item={item} />
                  </div>
                )
              )}
            </div>
          )}

          {/* TECH STACK */}

          {active === "tech" && (
            <div className="showcase-item w-full">
              <TechGrid />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Showcase;