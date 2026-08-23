import React, {
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    message: "",
  });

  // =====================================================
  // REFS
  // =====================================================

  const sectionRef = useRef(null);

  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const leftRef = useRef(null);

  const cardRef = useRef(null);
  const cardInnerRef = useRef(null);

  const footerRef = useRef(null);
  const socialRef = useRef(null);

  // =====================================================
  // FORM CHANGE
  // =====================================================

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // =====================================================
  // SEND MESSAGE TO WHATSAPP
  // =====================================================

  const handleSend = () => {
    if (!form.name || !form.message) return;

    const text = `Hello, my name is ${form.name}%0A%0A${form.message}`;

    const phone = "919903769556";

    window.open(
      `https://wa.me/${phone}?text=${text}`,
      "_blank"
    );

    setForm({
      name: "",
      message: "",
    });
  };

  // =====================================================
  // GSAP SCROLL ANIMATION
  // =====================================================

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // INITIAL STATES

      gsap.set(labelRef.current, {
        opacity: 0,
        y: -30,
      });

      gsap.set(headingRef.current, {
        opacity: 0,
        y: 80,
        scale: 0.92,
        filter: "blur(12px)",
      });

      gsap.set(leftRef.current, {
        opacity: 0,
        x: -60,
      });

      gsap.set(cardRef.current, {
        opacity: 0,
        x: 60,
        scale: 0.94,
        filter: "blur(10px)",
      });

      gsap.set(footerRef.current, {
        opacity: 0,
        y: 40,
      });

      // MAIN TIMELINE

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions:
            "play none none reverse",
        },

        defaults: {
          ease: "power3.out",
        },
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
            filter: "blur(0px)",
            duration: 1,
            ease: "power4.out",
          },
          "-=0.35"
        )
        .to(
          leftRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
          },
          "-=0.45"
        )
        .to(
          cardRef.current,
          {
            opacity: 1,
            x: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
          },
          "-=0.7"
        )
        .to(
          footerRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.4"
        );

      // SOCIAL ICONS

      if (socialRef.current) {
        gsap.fromTo(
          socialRef.current.children,
          {
            opacity: 0,
            y: 25,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 85%",
              toggleActions:
                "play none none reverse",
            },
          }
        );
      }

      // FLOATING CARD

      gsap.to(cardRef.current, {
        y: -10,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.2,
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  // =====================================================
  // 3D CARD MOUSE MOVE
  // =====================================================

  const handleCardMouseMove = (e) => {
    const card = cardInnerRef.current;

    if (!card) return;

    const rect =
      card.getBoundingClientRect();

    const x =
      e.clientX - rect.left;

    const y =
      e.clientY - rect.top;

    const rotateY =
      (x / rect.width - 0.5) * 8;

    const rotateX =
      (y / rect.height - 0.5) * -8;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  // =====================================================
  // RESET 3D CARD
  // =====================================================

  const handleCardMouseLeave = () => {
    gsap.to(cardInnerRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  // =====================================================
  // SEND BUTTON HOVER
  // =====================================================

  const handleButtonEnter = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleButtonLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // =====================================================
  // RETURN
  // =====================================================

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-black
        px-4
        py-24
        text-white
        sm:px-8
        md:px-16
        lg:px-24
      "
    >
      {/* =================================================
          GRID BACKGROUND
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.04]
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
          backgroundSize: "40px 40px",
        }}
      />

      {/* =================================================
          BACKGROUND GLOWS
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-[-180px]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-white/10
            opacity-20
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            bottom-[-220px]
            right-[-120px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-white/5
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            left-[-120px]
            top-[30%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-white/5
            blur-[120px]
          "
        />
      </div>

      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
        "
      >
        {/* =================================================
            HEADING
        ================================================= */}

        <div
          className="
            mb-16
            space-y-5
            text-center
          "
        >
          {/* LABEL */}

          <div
            ref={labelRef}
            className="
              relative
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <div className="relative overflow-hidden">
              <div className="h-px w-10 bg-white/20" />

              <div
                className="
                  absolute
                  inset-0
                  animate-[contactLine_2s_linear_infinite]
                  bg-gradient-to-r
                  from-transparent
                  via-white/80
                  to-transparent
                "
              />
            </div>

            <span
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.45em]
                text-white/35
              "
            >
              Contact
            </span>

            <div className="relative overflow-hidden">
              <div className="h-px w-10 bg-white/20" />

              <div
                className="
                  absolute
                  inset-0
                  animate-[contactLine_2s_linear_infinite]
                  bg-gradient-to-r
                  from-transparent
                  via-white/80
                  to-transparent
                "
              />
            </div>
          </div>

          {/* HEADING */}

          <div className="relative overflow-hidden">
            <h1
              ref={headingRef}
              className="
                font-black
                leading-none
                tracking-tight
                text-white
                drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]
              "
              style={{
                fontSize:
                  "clamp(42px,7vw,92px)",
              }}
            >
              <span
                className="
                  inline-block
                  bg-gradient-to-b
                  from-white
                  via-white
                  to-white/45
                  bg-clip-text
                  text-transparent
                "
              >
                Let's Build Together
              </span>
            </h1>
          </div>
        </div>

        {/* =================================================
            TWO COLUMN AREA
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-12
            lg:grid-cols-2
          "
        >
          {/* =================================================
              LEFT
          ================================================= */}

          <div
            ref={leftRef}
            className="
              flex
              flex-col
              items-center
              justify-center
              gap-8
              text-center
              lg:items-start
              lg:text-left
            "
          >
            <div className="space-y-4">
              <p
                className="
                  max-w-md
                  bg-[length:200%_auto]
                  bg-gradient-to-r
                  from-white
                  via-white/60
                  to-white
                  bg-clip-text
                  font-[Poppins]
                  text-sm
                  font-medium
                  leading-relaxed
                  tracking-wide
                  text-transparent
                  sm:text-base
                  lg:text-xl
                  animate-[contactShine_4s_linear_infinite]
                "
              >
                Have an idea, project, or
                collaboration in mind?
                Send me a message and
                let's create something
                clean, modern, and
                impactful together.
              </p>
            </div>

            {/* CONTACT ICONS */}

            <div
              className="
                mt-2
                flex
                items-center
                justify-center
                gap-5
                lg:justify-start
              "
            >
              {/* GMAIL */}

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ayan.saha558@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="
                  group
                  relative
                  flex
                  h-12
                  w-12
                  cursor-pointer
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:border-red-400/40
                  hover:bg-red-500/10
                  hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]
                  sm:h-14
                  sm:w-14
                "
              >
                <FaEnvelope
                  className="
                    relative
                    z-10
                    text-[18px]
                    text-white/80
                    transition-all
                    duration-300
                    group-hover:text-red-400
                    sm:text-[20px]
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    bg-gradient-to-br
                    from-red-500/10
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />
              </a>

              {/* WHATSAPP */}

              <a
                href="https://wa.me/919903769556"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="
                  group
                  relative
                  flex
                  h-12
                  w-12
                  cursor-pointer
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:border-green-400/40
                  hover:bg-green-500/10
                  hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]
                  sm:h-14
                  sm:w-14
                "
              >
                <FaWhatsapp
                  className="
                    relative
                    z-10
                    text-[20px]
                    text-white/80
                    transition-all
                    duration-300
                    group-hover:text-green-400
                    sm:text-[24px]
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    bg-gradient-to-br
                    from-green-500/10
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    border
                    border-green-400/30
                    animate-ping
                  "
                />
              </a>
            </div>
          </div>

          {/* =================================================
              CONTACT CARD
          ================================================= */}

          <div
            ref={cardRef}
            className="
              relative
              rounded-[32px]
            "
          >
            <div
              ref={cardInnerRef}
              onMouseMove={
                handleCardMouseMove
              }
              onMouseLeave={
                handleCardMouseLeave
              }
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/15
                bg-black
                shadow-[0_20px_80px_rgba(255,255,255,0.06)]
                backdrop-blur-xl
              "
            >
              {/* ANIMATED BORDER */}

              <div
                className="
                  absolute
                  inset-0
                  overflow-hidden
                  rounded-[32px]
                "
              >
                <div
                  className="
                    absolute
                    inset-[-200%]
                    animate-[contactSpin_10s_linear_infinite]
                    bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.18),transparent_30%)]
                  "
                />
              </div>

              {/* TOP GRADIENT */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-30
                "
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.1), transparent 70%)",
                }}
              />

              {/* TOP LINE */}

              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-white/40
                  to-transparent
                  opacity-60
                "
              />

              {/* GLOW */}

              <div
                className="
                  absolute
                  -top-20
                  left-1/2
                  h-80
                  w-80
                  -translate-x-1/2
                  rounded-full
                  bg-white/5
                  opacity-40
                  blur-[100px]
                  transition-opacity
                  duration-700
                  group-hover:opacity-60
                "
              />

              {/* CARD CONTENT */}

              <div
                className="
                  relative
                  z-10
                  space-y-6
                  p-6
                  sm:p-7
                "
              >
                {/* TOP */}

                <div className="space-y-3">
                  <div className="flex items-baseline gap-3">
                    <h2
                      className="
                        bg-gradient-to-r
                        from-white
                        via-white
                        to-white/70
                        bg-clip-text
                        text-2xl
                        font-black
                        tracking-tight
                        text-transparent
                      "
                    >
                      Send Message
                    </h2>

                    <span
                      className="
                        font-mono
                        text-xs
                        uppercase
                        tracking-widest
                        text-white/25
                      "
                    >
                      Direct
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-white/35">
                    Your message opens
                    directly in
                    WhatsApp—no spam,
                    just real connection.
                  </p>
                </div>

                {/* FORM */}

                <div className="space-y-4">
                  {/* NAME */}

                  <div className="group/input relative">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={
                        handleChange
                      }
                      placeholder="Your Name"
                      className="
                        h-14
                        w-full
                        rounded-[16px]
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-6
                        font-medium
                        text-white
                        outline-none
                        backdrop-blur-2xl
                        transition-all
                        duration-300
                        placeholder:text-white/20
                        hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]
                        focus:border-white/30
                        focus:shadow-[0_0_20px_rgba(255,255,255,0.05)]
                      "
                    />
                  </div>

                  {/* MESSAGE */}

                  <div className="group/textarea relative">
                    <textarea
                      rows={4}
                      name="message"
                      value={form.message}
                      onChange={
                        handleChange
                      }
                      placeholder="Write your message..."
                      className="
                        w-full
                        resize-none
                        rounded-[16px]
                        border
                        border-white/10
                        bg-white/[0.03]
                        p-5
                        font-medium
                        leading-relaxed
                        text-white
                        outline-none
                        backdrop-blur-2xl
                        transition-all
                        duration-300
                        placeholder:text-white/20
                        hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]
                        focus:border-white/30
                        focus:shadow-[0_0_20px_rgba(255,255,255,0.05)]
                      "
                    />
                  </div>

                  {/* =================================================
                      SEND BUTTON
                  ================================================= */}

                  <button
                    onClick={handleSend}
                    onMouseEnter={
                      handleButtonEnter
                    }
                    onMouseLeave={
                      handleButtonLeave
                    }
                    disabled={
                      !form.name ||
                      !form.message
                    }
                    className="
                      group/btn
                      relative
                      mt-6
                      h-12
                      w-full
                      cursor-pointer
                      overflow-hidden
                      rounded-[16px]
                      bg-gradient-to-b
                      from-white
                      to-zinc-300
                      text-sm
                      font-bold
                      uppercase
                      tracking-wide
                      text-black
                      transition-all
                      duration-300
                      hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]
                      active:scale-[0.97]
                      disabled:cursor-not-allowed
                      disabled:opacity-50
                    "
                  >
                    <span
                      className="
                        relative
                        z-10
                        flex
                        items-center
                        justify-center
                        gap-2
                      "
                    >
                      <svg
                        className="
                          h-5
                          w-5
                          transition-transform
                          duration-300
                          group-hover/btn:translate-x-1
                        "
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16126562 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.837654326,3.0486314 1.15159189,3.99621575 L3.03521743,10.4371852 C3.03521743,10.5942826 3.19218622,10.75138 3.50612381,10.75138 L16.6915026,11.5368670 C16.6915026,11.5368670 17.1624089,11.5368670 17.1624089,12.0081591 C17.1624089,12.4794512 16.6915026,12.4744748 16.6915026,12.4744748 Z" />
                      </svg>

                      Send Message
                    </span>

                    {/* BUTTON SHINE */}

                    <div
                      className="
                        absolute
                        inset-0
                        -translate-x-full
                        bg-gradient-to-r
                        from-transparent
                        via-white/50
                        to-transparent
                        opacity-0
                        transition-all
                        duration-500
                        group-hover/btn:translate-x-full
                        group-hover/btn:opacity-100
                      "
                    />
                  </button>

                  {/* STATUS */}

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      border-t
                      border-white/10
                      pt-4
                    "
                  >
                    <div
                      className="
                        h-2
                        w-2
                        animate-pulse
                        rounded-full
                        bg-green-400
                      "
                    />

                    <p
                      className="
                        font-mono
                        text-xs
                        text-white/30
                      "
                    >
                      Usually replies
                      within a few hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            FOOTER
        ================================================= */}

        <div
          ref={footerRef}
          className="
            relative
            z-10
            mt-24
            border-t
            border-white/10
            pb-8
            pt-12
          "
        >
          <div
            className="
              relative
              flex
              flex-col
              items-center
              gap-7
            "
          >
            <h2
              className="
                text-center
                text-[14px]
                font-black
                uppercase
                tracking-[0.25em]
                text-white/60
                sm:text-[18px]
              "
            >
              <span
                className="
                  inline-block
                  bg-gradient-to-b
                  from-white
                  via-white/70
                  to-white/30
                  bg-clip-text
                  text-transparent
                "
              >
                Follow Me
              </span>
            </h2>

            {/* SOCIAL */}

            <div
              ref={socialRef}
              className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-5
              "
            >
              {/* INSTAGRAM */}

              <a
                href="https://www.instagram.com/truth_and_stare/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  group
                  relative
                  grid
                  h-14
                  w-14
                  cursor-pointer
                  place-items-center
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-white/10
                  bg-white/[0.05]
                  shadow-[0_10px_30px_rgba(0,0,0,0.28)]
                  backdrop-blur-2xl
                  transition-all
                  duration-500
                  hover:-translate-y-1.5
                  hover:scale-105
                  hover:border-white/30
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-yellow-400
                    via-pink-500
                    to-purple-600
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div
                  className="
                    absolute
                    inset-[1px]
                    rounded-[19px]
                    bg-[#0b0b12]/80
                  "
                />

                <FaInstagram
                  className="
                    relative
                    z-10
                    text-[30px]
                    text-white
                    transition-all
                    duration-500
                    group-hover:scale-110
                  "
                />
              </a>

              {/* GITHUB */}

              <a
                href="https://github.com/ayansaha558-ai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  group
                  relative
                  grid
                  h-14
                  w-14
                  cursor-pointer
                  place-items-center
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-white/10
                  bg-white/[0.05]
                  shadow-[0_10px_30px_rgba(0,0,0,0.28)]
                  backdrop-blur-2xl
                  transition-all
                  duration-500
                  hover:-translate-y-1.5
                  hover:scale-105
                  hover:border-white/40
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-white/16
                    via-slate-300/8
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div
                  className="
                    absolute
                    inset-[1px]
                    rounded-[19px]
                    bg-[#0b0b12]/80
                  "
                />

                <FaGithub
                  className="
                    relative
                    z-10
                    text-[30px]
                    text-white
                    transition-all
                    duration-500
                    group-hover:scale-110
                  "
                />
              </a>

              {/* YOUTUBE */}

              <a
                href="https://www.youtube.com/@ayansaha7952"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="
                  group
                  relative
                  grid
                  h-14
                  w-14
                  cursor-pointer
                  place-items-center
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-white/10
                  bg-white/[0.05]
                  shadow-[0_10px_30px_rgba(0,0,0,0.28)]
                  backdrop-blur-2xl
                  transition-all
                  duration-500
                  hover:-translate-y-1.5
                  hover:scale-105
                  hover:border-red-400/50
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-red-500/18
                    via-rose-500/10
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div
                  className="
                    absolute
                    inset-[1px]
                    rounded-[19px]
                    bg-[#0b0b12]/80
                  "
                />

                <FaYoutube
                  className="
                    relative
                    z-10
                    text-[30px]
                    text-white
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:text-red-400
                  "
                />
              </a>

              {/* TELEGRAM */}

              <a
                href="https://web.telegram.org/a/#831918384"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="
                  group
                  relative
                  grid
                  h-14
                  w-14
                  cursor-pointer
                  place-items-center
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-white/10
                  bg-white/[0.05]
                  shadow-[0_10px_30px_rgba(0,0,0,0.28)]
                  backdrop-blur-2xl
                  transition-all
                  duration-500
                  hover:-translate-y-1.5
                  hover:scale-105
                  hover:border-sky-400/50
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-sky-500/18
                    via-cyan-400/10
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div
                  className="
                    absolute
                    inset-[1px]
                    rounded-[19px]
                    bg-[#0b0b12]/80
                  "
                />

                <FaTelegram
                  className="
                    relative
                    z-10
                    text-[30px]
                    text-white
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:text-sky-400
                  "
                />
              </a>
            </div>

            {/* DIVIDER */}

            <div
              className="
                h-px
                w-32
                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent
              "
            />

            {/* COPYRIGHT */}

            <p
              className="
                text-center
                text-sm
                tracking-[0.22em]
                text-white/35
              "
            >
              Copyright ©{" "}
              {new Date().getFullYear()}{" "}
              All Rights Reserved | Created
              by{" "}
              <span className="relative inline-block text-white/70">
                ayan

                <span
                  className="
                    absolute
                    -bottom-2
                    left-1/2
                    -translate-x-1/2
                  "
                >
                  <div
                    className="
                      h-px
                      w-24
                      bg-gradient-to-r
                      from-transparent
                      via-white/25
                      to-transparent
                    "
                  />
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* =================================================
          DECORATIVE ANIMATIONS
      ================================================= */}

      <style>{`
        @keyframes contactLine {
          from {
            transform: translateX(-120%);
          }

          to {
            transform: translateX(120%);
          }
        }

        @keyframes contactShine {
          0% {
            background-position: 200% center;
          }

          100% {
            background-position: -200% center;
          }
        }

        @keyframes contactSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;