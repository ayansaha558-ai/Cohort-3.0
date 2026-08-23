import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SkyMart from "../assets/SkyMart.png";
import Fintrack from "../assets/FinTrack.png";
import DromForge from "../assets/DromForge.png";
import Nptel from "../assets/Nptel.jpg";
import Dsa from "../assets/Dsa.png";
import pythons from "../assets/pythons.jpg";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   TECH STACK
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
    name: "Tailwind CSS",
    icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    color: "#06B6D4",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.simpleicons.org/typescript/3178C6",
    color: "#3178C6",
  },
  {
    name: "MySQL",
    icon: "https://cdn.simpleicons.org/mysql/4479A1",
    color: "#4479A1",
  },
  {
    name: "Redux",
    icon: "https://cdn.simpleicons.org/redux/764ABC",
    color: "#764ABC",
  },
  {
    name: "Java",
    icon: "https://cdn.simpleicons.org/openjdk/ED8B00",
    color: "#ED8B00",
  },
  {
    name: "Python",
    icon: "https://cdn.simpleicons.org/python/3776AB",
    color: "#3776AB",
  },
  {
    name: "GitHub",
    icon: "https://cdn.simpleicons.org/github/FFFFFF",
    color: "#FFFFFF",
  },
  {
    name: "React",
    icon: "https://cdn.simpleicons.org/react/61DAFB",
    color: "#61DAFB",
  },
];

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    title: "SkyMart",
    tech: "React + Tailwindcss",
    thumbnail: SkyMart,
    liveLink: "https://cohort-3-0-t1ls.vercel.app/",
    github:
      "https://github.com/ayansaha558-ai/Cohort-3.0/tree/main/Frontend/Projects%20to%20Display/Sky_Mart",
  },
  {
    title: "FinTrack Pro",
    tech: "HTML + CSS + JavaScript",
    thumbnail: Fintrack,
    liveLink: "https://fintrackpro-rust.vercel.app/",
    github:
      "https://github.com/ayansaha558-ai/Cohort-3.0/tree/main/Frontend/Projects%20to%20Display/Fintrack-Pro",
  },
  {
    title: "DromForge-Productivity DashBoard",
    tech: "TypeScript",
    thumbnail: DromForge,
    liveLink: "https://domforgetaskmanager.vercel.app/",
    github:
      "https://github.com/ayansaha558-ai/Cohort-3.0/tree/main/Frontend/Projects%20to%20Display/Productivity%20Dashboard",
  },
];

/* =========================================================
   CERTIFICATES
========================================================= */

const certificates = [
  {
    title: "Introduction to Database Systems",
    tech: "Top 2% (Silver + Elite)",
    thumbnail: Nptel,
  },
  {
    title: "Data Structures & Algorithm",
    tech: "Completed Internship",
    thumbnail: Dsa,
  },
  {
    title: "Introduction to Python",
    tech: "Scored 88% (Silver + Elite)",
    thumbnail: pythons,
  },
];

/* =========================================================
   TABS
========================================================= */

const tabs = [
  {
    id: "projects",
    label: "Projects",
  },
  {
    id: "certificates",
    label: "Certificates",
  },
  {
    id: "tech",
    label: "Tech Stack",
  },
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
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12.01 12.01 0 0 0 24 12C24 5.37 18.63 0 12 0Z" />
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

const ExternalLinkIcon = () => (
  <svg
    className="h-3.5 w-3.5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"
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
      y: -10,
      scale: 1.015,
      duration: 0.45,
      ease: "power3.out",
    });

    gsap.to(imageRef.current, {
      scale: 1.08,
      duration: 0.9,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
      duration: 0.45,
      ease: "power3.out",
    });

    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  const handleCardClick = () => {
    if (item.liveLink) {
      window.open(item.liveLink, "_blank");
    }
  };

  const handleGithubClick = (e) => {
    e.stopPropagation();
    window.open(item.github, "_blank");
  };

  return (
    <div
      ref={cardRef}
      className="
        showcase-item
        group
        relative
        cursor-pointer
        overflow-hidden
        rounded-[26px]
        border
        border-white/[0.09]
        bg-white/[0.035]
        shadow-[0_30px_100px_rgba(0,0,0,0.45)]
        backdrop-blur-2xl
      "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
    >
      <div
        className="
          pointer-events-none
          absolute
          -inset-px
          rounded-[26px]
          bg-gradient-to-b
          from-white/[0.12]
          via-transparent
          to-transparent
        "
      />

      <div className="relative h-52 overflow-hidden bg-white/[0.025]">
        <img
          ref={imageRef}
          src={item.thumbnail}
          alt={item.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

        <div className="absolute inset-0 bg-white/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div
          className="
            absolute
            right-4
            top-4
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-black/60
            px-3
            py-1.5
            text-[8px]
            uppercase
            tracking-[0.2em]
            text-white/60
            opacity-0
            backdrop-blur-xl
            transition-all
            duration-500
            group-hover:opacity-100
          "
        >
          <ExternalLinkIcon />
          Live
        </div>

        <span
          className="
            absolute
            bottom-4
            left-4
            font-mono
            text-[9px]
            tracking-[0.25em]
            text-white/30
          "
        >
          PROJECT
        </span>
      </div>

      <div className="relative flex items-center justify-between p-5">
        <div>
          <p className="mb-1.5 text-[15px] font-semibold text-white">
            {item.title}
          </p>

          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/35">
            {item.tech}
          </span>
        </div>

        <button
          onClick={handleGithubClick}
          className="
            flex
            h-9
            w-9
            cursor-pointer
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.04]
            text-white/50
            transition-all
            duration-300
            hover:scale-110
            hover:border-white/30
            hover:bg-white/10
            hover:text-white
            active:scale-95
          "
        >
          <GithubIcon />
        </button>
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
      y: -10,
      scale: 1.015,
      duration: 0.45,
      ease: "power3.out",
    });

    gsap.to(imageRef.current, {
      scale: 1.08,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  const leave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
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
      className="
        showcase-item
        group
        relative
        cursor-pointer
        overflow-hidden
        rounded-[26px]
        border
        border-white/[0.09]
        bg-white/[0.035]
        shadow-[0_30px_100px_rgba(0,0,0,0.45)]
        backdrop-blur-2xl
      "
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      <div
        className="
          pointer-events-none
          absolute
          -inset-px
          rounded-[26px]
          bg-gradient-to-b
          from-white/[0.12]
          via-transparent
          to-transparent
        "
      />

      <div className="relative h-52 overflow-hidden bg-white/[0.025]">
        {item.thumbnail ? (
          <img
            ref={imageRef}
            src={item.thumbnail}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/20">
              Coming Soon
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />

        <div className="absolute bottom-4 left-5 right-5">
          <p className="text-[15px] font-semibold leading-snug text-white">
            {item.title}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between px-5 py-4">
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/35">
          {item.tech}
        </span>

        <button
          onClick={handleDownload}
          disabled={!item.thumbnail}
          className="
            flex
            h-9
            w-9
            cursor-pointer
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.04]
            text-white/50
            transition-all
            duration-300
            hover:scale-110
            hover:border-white/30
            hover:bg-white/10
            hover:text-white
            active:scale-95
            disabled:cursor-not-allowed
            disabled:opacity-30
          "
        >
          {downloading ? <Spinner /> : <DownloadIcon />}
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   TECH GRID
========================================================= */

function TechGrid() {
  const itemRefs = useRef([]);

  const RADIUS = 210;

  const rotX = useRef(0.3);
  const rotY = useRef(0);

  const targetX = useRef(0.3);
  const targetY = useRef(0);

  const velocityX = useRef(0);
  const velocityY = useRef(0.004);

  const dragging = useRef(false);

  const lastX = useRef(0);
  const lastY = useRef(0);

  const dragVelocityX = useRef(0);
  const dragVelocityY = useRef(0);

  const positions = useRef([]);

  useEffect(() => {
    const goldenAngle =
      Math.PI * (3 - Math.sqrt(5));

    positions.current = techStack.map((_, i) => {
      const y =
        1 -
        (i / (techStack.length - 1)) * 2;

      const radius =
        Math.sqrt(1 - y * y);

      const theta =
        goldenAngle * i;

      return {
        x: Math.cos(theta) * radius,
        y,
        z: Math.sin(theta) * radius,
      };
    });
  }, []);

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

  useEffect(() => {
    const renderSphere = () => {
      if (!dragging.current) {
        targetY.current += velocityY.current;

        targetX.current += velocityX.current;

        velocityX.current *= 0.96;

        velocityY.current *= 0.995;

        velocityY.current =
          velocityY.current * 0.99 +
          0.000035;
      }

      rotX.current +=
        (targetX.current - rotX.current) *
        0.12;

      rotY.current +=
        (targetY.current - rotY.current) *
        0.12;

      const projected =
        positions.current.map(
          (position, index) => ({
            element:
              itemRefs.current[index],

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
            a.position.z -
            b.position.z
        )
        .forEach(
          (
            { element, position },
            index
          ) => {
            if (!element) return;

            const x =
              position.x * RADIUS +
              270 -
              39;

            const y =
              position.y * RADIUS +
              270 -
              39;

            const depth =
              (position.z + 1) / 2;

            const opacity =
              0.2 + depth * 0.8;

            const scale =
              0.55 + depth * 0.55;

            element.style.left =
              `${x}px`;

            element.style.top =
              `${y}px`;

            element.style.opacity =
              opacity;

            element.style.transform =
              `scale(${scale})`;

            element.style.zIndex =
              index;
          }
        );
    };

    gsap.ticker.add(renderSphere);

    return () => {
      gsap.ticker.remove(renderSphere);
    };
  }, []);

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
        event.clientX -
        lastX.current;

      const dy =
        event.clientY -
        lastY.current;

      const rotationX =
        dy * 0.004;

      const rotationY =
        dx * 0.004;

      targetX.current += rotationX;

      targetY.current += rotationY;

      dragVelocityX.current =
        rotationX;

      dragVelocityY.current =
        rotationY;

      lastX.current =
        event.clientX;

      lastY.current =
        event.clientY;
    };

    const onMouseUp = () => {
      if (!dragging.current) return;

      dragging.current = false;

      velocityX.current =
        dragVelocityX.current * 0.8;

      velocityY.current =
        dragVelocityY.current * 0.8;
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

    const rotationX =
      dy * 0.004;

    const rotationY =
      dx * 0.004;

    targetX.current += rotationX;

    targetY.current += rotationY;

    dragVelocityX.current =
      rotationX;

    dragVelocityY.current =
      rotationY;

    lastX.current =
      event.touches[0].clientX;

    lastY.current =
      event.touches[0].clientY;
  };

  const onTouchEnd = () => {
    if (!dragging.current) return;

    dragging.current = false;

    velocityX.current =
      dragVelocityX.current * 0.8;

    velocityY.current =
      dragVelocityY.current * 0.8;
  };

  return (
    <div className="relative py-3">
      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[520px]
          w-[520px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/[0.025]
          blur-[120px]
        "
      />

      {/* Label */}

      <div
        className="
          mb-3
          flex
          items-center
          justify-center
          gap-3
          text-white/35
        "
      >
        <div className="h-px w-10 bg-gradient-to-r from-transparent to-white/25" />

        <span className="font-mono text-[9px] uppercase tracking-[0.4em]">
          {techStack.length} technologies · daily stack
        </span>

        <div className="h-px w-10 bg-gradient-to-l from-transparent to-white/25" />
      </div>

      {/* Sphere */}

      <div
        className="
          relative
          flex
          w-full
          cursor-grab
          select-none
          items-center
          justify-center
          active:cursor-grabbing
        "
        style={{
          height: "580px",
          touchAction: "none",
        }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="relative"
          style={{
            width: "540px",
            height: "540px",
          }}
        >
          {/* Outer ring */}

          <div
            className="
              pointer-events-none
              absolute
              inset-[20px]
              rounded-full
              border
              border-white/[0.045]
            "
          />

          {/* Middle ring */}

          <div
            className="
              pointer-events-none
              absolute
              inset-[70px]
              rounded-full
              border
              border-white/[0.035]
            "
          />

          {/* Inner ring */}

          <div
            className="
              pointer-events-none
              absolute
              inset-[105px]
              rounded-full
              border
              border-white/[0.025]
            "
          />

          {/* Icons */}

          {techStack.map(
            (tech, index) => (
              <div
                key={tech.name}
                ref={(element) => {
                  itemRefs.current[index] =
                    element;
                }}
                className="
                  absolute
                  cursor-pointer
                "
                style={{
                  width: 78,
                  height: 78,
                  willChange:
                    "transform,left,top,opacity",
                }}
              >
                <div
                  className="
                    flex
                    h-full
                    w-full
                    cursor-pointer
                    flex-col
                    items-center
                    justify-center
                    gap-2
                    rounded-[21px]
                    border
                    border-white/[0.10]
                    bg-black/75
                    shadow-[0_18px_45px_rgba(0,0,0,0.55)]
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:border-white/40
                    hover:bg-white/[0.08]
                  "
                  style={{
                    boxShadow: `
                      0 0 30px -10px
                      ${tech.color}99
                    `,
                  }}
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    loading="lazy"
                    draggable="false"
                    className="
                      h-[42px]
                      w-[42px]
                      object-contain
                    "
                  />

                  <span
                    className="
                      text-center
                      font-mono
                      text-[8px]
                      uppercase
                      leading-tight
                      tracking-[0.1em]
                      text-white/45
                    "
                  >
                    {tech.name}
                  </span>
                </div>
              </div>
            )
          )}
        </div>
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

  /* =====================================================
     SECTION ANIMATION
  ===================================================== */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards =
        contentRef.current?.querySelectorAll(
          ".showcase-item"
        );

      gsap.set(labelRef.current, {
        opacity: 0,
        y: -30,
      });

      gsap.set(headingRef.current, {
        opacity: 0,
        y: 80,
        scale: 0.9,
        filter: "blur(12px)",
      });

      gsap.set(tabsRef.current, {
        opacity: 0,
        y: 35,
        scale: 0.92,
      });

      gsap.set(contentRef.current, {
        opacity: 0,
        y: 50,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          toggleActions:
            "play none none reverse",
        },
      });

      tl.to(labelRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
      })
        .to(
          headingRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.15,
            ease: "power4.out",
          },
          "-=0.25"
        )
        .to(
          tabsRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "back.out(1.5)",
          },
          "-=0.55"
        )
        .to(
          contentRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        );

      if (cards?.length) {
        gsap.set(cards, {
          opacity: 0,
          y: 55,
          scale: 0.94,
        });

        gsap.to(cards, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 82%",
            toggleActions:
              "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  /* =====================================================
     ACTIVE TAB PILL
  ===================================================== */

  useEffect(() => {
    const positions = {
      projects: "0%",
      certificates: "33.333%",
      tech: "66.666%",
    };

    gsap.to(pillRef.current, {
      left: positions[active],
      duration: 0.55,
      ease: "power3.inOut",
    });
  }, [active]);

  /* =====================================================
     TAB CONTENT ANIMATION
  ===================================================== */

  useEffect(() => {
    const cards =
      contentRef.current?.querySelectorAll(
        ".showcase-item"
      );

    if (!cards?.length) return;

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 30,
        scale: 0.96,
        filter: "blur(5px)",
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.65,
        stagger: 0.1,
        ease: "power3.out",
      }
    );
  }, [active]);

  /* =====================================================
     TAB SWITCH
  ===================================================== */

  const switchTab = useCallback(
    (id) => {
      if (id === active) return;

      gsap.to(contentRef.current, {
        opacity: 0,
        y: 20,
        scale: 0.98,
        filter: "blur(5px)",
        duration: 0.25,
        ease: "power2.in",

        onComplete: () => {
          setActive(id);

          requestAnimationFrame(() => {
            gsap.fromTo(
              contentRef.current,
              {
                opacity: 0,
                y: 25,
                scale: 0.98,
                filter: "blur(5px)",
              },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                duration: 0.55,
                ease: "power3.out",
              }
            );
          });
        },
      });
    },
    [active]
  );

  /* =====================================================
     SWIPE
  ===================================================== */

  const handleTouchStart = (event) => {
    touchStartX.current =
      event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (
      touchStartX.current === null
    ) {
      return;
    }

    const dx =
      event.changedTouches[0].clientX -
      touchStartX.current;

    if (Math.abs(dx) < 50) return;

    const index =
      tabs.findIndex(
        (tab) => tab.id === active
      );

    if (
      dx < 0 &&
      index < tabs.length - 1
    ) {
      switchTab(
        tabs[index + 1].id
      );
    }

    if (dx > 0 && index > 0) {
      switchTab(
        tabs[index - 1].id
      );
    }

    touchStartX.current = null;
  };

  /* =====================================================
     JSX
  ===================================================== */

  return (
    <section
      ref={sectionRef}
      id="showcase"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#030303]
        px-4
        py-24
        text-white
        sm:px-8
        md:px-16
        lg:px-24
      "
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-[30%]
            h-[650px]
            w-[650px]
            -translate-x-1/2
            rounded-full
            bg-white/[0.025]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -left-40
            top-[45%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-white/[0.015]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-[10%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-white/[0.015]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.2) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.2) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "80px 80px",
          }}
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(ellipse_at_center,transparent_30%,#000_100%)]
          "
        />
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-6xl
          flex-col
          items-center
        "
      >
        {/* =================================================
            LABEL
        ================================================= */}

        <div
          ref={labelRef}
          className="
            mb-6
            flex
            items-center
            justify-center
            gap-4
          "
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/30" />

          <span
            className="
              font-mono
              text-[9px]
              uppercase
              tracking-[0.5em]
              text-white/35
            "
          >
            Selected Work
          </span>

          <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/30" />
        </div>

        {/* =================================================
            HEADING
        ================================================= */}

        <div
          className="
            relative
            mb-12
            overflow-hidden
          "
        >
          <h1
            ref={headingRef}
            className="
              text-center
              font-black
              leading-[0.9]
              tracking-[-0.055em]
            "
            style={{
              fontSize:
                "clamp(42px,7vw,92px)",
            }}
          >
            <span
              className="
                bg-gradient-to-b
                from-white
                via-white
                to-white/35
                bg-clip-text
                text-transparent
              "
            >
              Portfolio
            </span>

            <span className="text-white/20">
              {" "}
              Showcase
            </span>
          </h1>
        </div>

        {/* =================================================
            NAVIGATION TABS
        ================================================= */}

        <div
          ref={tabsRef}
          className="
            relative
            mb-14
            flex
            w-full
            max-w-[430px]
            items-center
            rounded-full
            border
            border-white/[0.10]
            bg-white/[0.035]
            p-1.5
            shadow-[0_20px_70px_rgba(0,0,0,0.5)]
            backdrop-blur-2xl
          "
        >
          {/* ACTIVE SLIDING PILL */}

          <div
            ref={pillRef}
            className="
              pointer-events-none
              absolute
              bottom-1.5
              top-1.5
              rounded-full
              border
              border-white/20
              bg-white/[0.10]
              shadow-[0_0_30px_rgba(255,255,255,0.05)]
            "
            style={{
              width:
                "calc(33.333% - 4px)",
              left: "0%",
            }}
          />

          {/* TABS */}

          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() =>
                switchTab(tab.id)
              }
              className={`
                group
                relative
                z-10
                flex
                h-11
                flex-1
                cursor-pointer
                items-center
                justify-center
                rounded-full
                text-[10px]
                uppercase
                tracking-[0.18em]
                transition-all
                duration-300

                ${
                  active === tab.id
                    ? "text-white"
                    : "text-white/35 hover:bg-white/[0.055] hover:text-white/90"
                }
              `}
            >
              <span
                className="
                  transition-all
                  duration-300
                  group-hover:scale-105
                "
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
          {/* =================================================
              PROJECTS
          ================================================= */}

          {active === "projects" && (
            <div
              className="
                grid
                grid-cols-1
                gap-6
                sm:grid-cols-2
                md:grid-cols-3
              "
            >
              {projects.map(
                (item, index) => (
                  <ProjectCard
                    item={item}
                    key={index}
                  />
                )
              )}
            </div>
          )}

          {/* =================================================
              CERTIFICATES
          ================================================= */}

          {active === "certificates" && (
            <div
              className="
                grid
                grid-cols-1
                gap-6
                sm:grid-cols-2
                md:grid-cols-3
              "
            >
              {certificates.map(
                (item, index) => (
                  <CertCard
                    item={item}
                    key={index}
                  />
                )
              )}
            </div>
          )}

          {/* =================================================
              TECH STACK
          ================================================= */}

          {active === "tech" && (
            <div className="showcase-item w-full">
              <TechGrid />
            </div>
          )}
        </div>

        {/* =================================================
            BOTTOM LABEL
        ================================================= */}

        <div
          className="
            mt-16
            flex
            items-center
            gap-4
            font-mono
            text-[8px]
            uppercase
            tracking-[0.35em]
            text-white/20
          "
        >
          <div className="h-px w-8 bg-white/10" />

          <span>
            Scroll · Explore · Create
          </span>

          <div className="h-px w-8 bg-white/10" />
        </div>
      </div>
    </section>
  );
};

export default Showcase;