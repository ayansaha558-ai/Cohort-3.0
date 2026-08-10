import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const NavBar = () => {
  const [currentTime, setCurrentTime] = useState("");

  const navRef = useRef(null);
  const logoRef = useRef(null);
  const navLinksRef = useRef(null);
  const timeRef = useRef(null);

  // ================= CLOCK =================

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
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // ================= GSAP ANIMATION =================

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

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <header
      ref={navRef}
      className="
        fixed
        left-0
        top-0
        z-[99999]
        flex
        w-full
        items-center
        justify-between
        px-8
        pt-7
        lg:px-[5.7vw]
      "
    >
      {/* ================= LOGO ================= */}

      <div
        ref={logoRef}
        className="
          font-condensed
          text-[22px]
          font-black
          tracking-[-0.05em]
          text-white
        "
      >
        SAHA.DEV
      </div>

      {/* ================= NAVIGATION ================= */}

      <nav
        ref={navLinksRef}
        className="
          absolute
          left-1/2
          top-7
          hidden
          -translate-x-1/2
          items-center
          gap-1
          rounded-full
          border
          border-white/10
          bg-white/[0.07]
          p-1
          backdrop-blur-xl
          md:flex
        "
      >
        <a
          href="#home"
          className="
            rounded-full
            bg-white/10
            px-9
            py-2
            text-[11px]
            text-white
            transition
            hover:bg-white/10
          "
        >
          Home
        </a>

        <a
          href="#about"
          className="
            rounded-full
            px-9
            py-2
            text-[11px]
            text-white/50
            transition
            hover:bg-white/10
            hover:text-white
          "
        >
          About
        </a>

        <a
          href="#showcase"
          className="
            rounded-full
            px-9
            py-2
            text-[11px]
            text-white/50
            transition
            hover:bg-white/10
            hover:text-white
          "
        >
          Showcase
        </a>

        <a
          href="#contact"
          className="
            rounded-full
            px-9
            py-2
            text-[11px]
            text-white/50
            transition
            hover:bg-white/10
            hover:text-white
          "
        >
          Contact
        </a>
      </nav>

      {/* ================= TIME ================= */}

      <div
        ref={timeRef}
        className="flex items-center gap-3"
      >
        <span
          className="
            font-condensed
            text-[22px]
            font-bold
            tracking-[-0.04em]
            text-white/90
          "
        >
          {currentTime || "1:22 PM"}
        </span>

        <div
          className="
            relative
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/20
          "
        >
          <div
            className="
              absolute
              h-[1px]
              w-3
              rotate-[-45deg]
              origin-right
              bg-white/40
            "
          />

          <div
            className="
              absolute
              h-[1px]
              w-3
              rotate-[25deg]
              origin-left
              bg-white/40
            "
          />

          <div className="h-1 w-1 rounded-full bg-white/70" />
        </div>
      </div>
    </header>
  );
};

export default NavBar;