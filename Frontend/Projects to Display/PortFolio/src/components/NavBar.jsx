import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import {
  Sun,
  CloudSun,
  Sunrise,
  Sunset,
  Moon,
  CloudMoon,
} from "lucide-react";

gsap.registerPlugin(ScrollToPlugin);

const NavBar = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [timeIcon, setTimeIcon] = useState("sun");
  const [activeLink, setActiveLink] = useState("home");

  const navRef = useRef(null);
  const logoRef = useRef(null);
  const navLinksRef = useRef(null);
  const timeRef = useRef(null);
  const iconRef = useRef(null);

  // =====================================================
  // CLOCK
  // =====================================================

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const hours = now.getHours();
      const minutes = now.getMinutes();

      const ampm = hours >= 12 ? "PM" : "AM";

      const formattedHours = hours % 12 || 12;

      const formattedMinutes =
        minutes < 10 ? `0${minutes}` : minutes;

      setCurrentTime(
        `${formattedHours}:${formattedMinutes} ${ampm}`
      );

      // =================================================
      // TIME BASED ICON
      // =================================================

      let icon = "sun";

      if (hours >= 5 && hours < 7) {
        icon = "sunrise";
      } else if (hours >= 7 && hours < 12) {
        icon = "sun";
      } else if (hours >= 12 && hours < 17) {
        icon = "cloudSun";
      } else if (hours >= 17 && hours < 19) {
        icon = "sunset";
      } else if (hours >= 19 && hours < 22) {
        icon = "moon";
      } else {
        icon = "cloudMoon";
      }

      setTimeIcon(icon);
    };

    updateTime();

    const interval = setInterval(
      updateTime,
      1000
    );

    return () => clearInterval(interval);
  }, []);

  // =====================================================
  // NAVBAR ENTRANCE ANIMATION
  // =====================================================

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    tl.fromTo(
      navRef.current,
      {
        y: -80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
      }
    )

      // Logo
      .fromTo(
        logoRef.current,
        {
          x: -40,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
        },
        "-=0.8"
      )

      // Navigation links
      .fromTo(
        navLinksRef.current.children,
        {
          y: -20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
        },
        "-=0.6"
      )

      // Time
      .fromTo(
        timeRef.current,
        {
          x: 40,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
        },
        "-=0.8"
      );

    // Initial icon
    gsap.fromTo(
      iconRef.current,
      {
        scale: 0,
        rotation: -180,
        opacity: 0,
      },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.8,
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  // =====================================================
  // TIME ICON ANIMATION
  // =====================================================

  useEffect(() => {
    if (!iconRef.current) return;

    gsap.fromTo(
      iconRef.current,
      {
        scale: 0.6,
        rotation: -25,
        opacity: 0.3,
      },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
      }
    );
  }, [timeIcon]);

  // =====================================================
  // NAVIGATION LINKS
  // =====================================================

  const links = [
    {
      id: "home",
      label: "Home",
    },
    {
      id: "about",
      label: "About",
    },
    {
      id: "showcase",
      label: "Showcase",
    },
    {
      id: "contact",
      label: "Contact",
    },
  ];

  // =====================================================
  // AUTO ACTIVE NAV ON SCROLL
  // =====================================================

  useEffect(() => {
    const sections = links
      .map((link) =>
        document.getElementById(link.id)
      )
      .filter(Boolean);

    if (!sections.length) return;

    const observer =
      new IntersectionObserver(
        (entries) => {
          const visibleSections =
            entries
              .filter(
                (entry) =>
                  entry.isIntersecting
              )
              .sort(
                (a, b) =>
                  b.intersectionRatio -
                  a.intersectionRatio
              );

          if (
            visibleSections.length > 0
          ) {
            setActiveLink(
              visibleSections[0].target.id
            );
          }
        },
        {
          root: null,

          rootMargin:
            "-25% 0px -55% 0px",

          threshold: [
            0,
            0.1,
            0.25,
            0.5,
            0.75,
            1,
          ],
        }
      );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });

      observer.disconnect();
    };
  }, []);

  // =====================================================
  // GSAP SMOOTH SCROLL
  // =====================================================

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);

    const section =
      document.getElementById(linkId);

    if (!section) {
      console.log(
        `Section #${linkId} not found`
      );
      return;
    }

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
  // TIME ICON
  // =====================================================

  const renderTimeIcon = () => {
    const commonProps = {
      size: 24,
      strokeWidth: 1.5,
    };

    switch (timeIcon) {
      case "sunrise":
        return <Sunrise {...commonProps} />;

      case "sun":
        return <Sun {...commonProps} />;

      case "cloudSun":
        return <CloudSun {...commonProps} />;

      case "sunset":
        return <Sunset {...commonProps} />;

      case "moon":
        return <Moon {...commonProps} />;

      case "cloudMoon":
        return <CloudMoon {...commonProps} />;

      default:
        return <Sun {...commonProps} />;
    }
  };

  // =====================================================
  // RETURN
  // =====================================================

  return (
    <header
      ref={navRef}
      className="
        fixed
        left-0
        right-0
        top-0
        z-[999]
        flex
        items-center
        justify-between
        px-6
        py-5
        md:px-10
        lg:px-14
      "
    >
      {/* =================================================
          LOGO
      ================================================= */}

      <div
        ref={logoRef}
        className="
          cursor-pointer
          font-condensed
          text-[28px]
          font-black
          tracking-[-0.05em]
          text-white
          lg:text-[34px]
        "
      >
        SAHA.DEV
      </div>

      {/* =================================================
          NAVIGATION
      ================================================= */}

      <nav
        ref={navLinksRef}
        className="
          absolute
          left-1/2
          top-7
          hidden
          -translate-x-1/2
          items-center
          gap-2
          rounded-full
          border
          border-white/10
          bg-white/[0.07]
          p-1.5
          backdrop-blur-xl
          md:flex
          lg:top-8
        "
      >
        {links.map((link) => (
          <button
            key={link.id}
            type="button"
            onClick={() =>
              handleLinkClick(link.id)
            }
            className={`
              cursor-pointer
              rounded-full
              px-10
              py-2.5
              text-[13px]
              transition-all
              duration-300
              lg:px-12
              lg:py-3
              lg:text-[14px]

              ${
                activeLink === link.id
                  ? "bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.04)]"
                  : "text-white/50 hover:bg-white/10 hover:text-white"
              }
            `}
          >
            {link.label}
          </button>
        ))}
      </nav>

      {/* =================================================
          TIME + ICON
      ================================================= */}

      <div
        ref={timeRef}
        className="
          flex
          items-center
          gap-4
        "
      >
        {/* TIME */}

        <span
          className="
            cursor-default
            font-condensed
            text-[24px]
            font-bold
            tracking-[-0.04em]
            text-white/90
            lg:text-[28px]
          "
        >
          {currentTime || "1:22 PM"}
        </span>

        {/* ICON */}

        <div
          className="
            relative
            flex
            h-12
            w-12
            cursor-default
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border
            border-white/20
            bg-white/[0.03]
            text-white/80
            backdrop-blur-md
            lg:h-14
            lg:w-14
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-full
              bg-white/[0.03]
            "
          />

          <div
            ref={iconRef}
            className="
              relative
              z-10
              flex
              items-center
              justify-center
            "
          >
            {renderTimeIcon()}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;