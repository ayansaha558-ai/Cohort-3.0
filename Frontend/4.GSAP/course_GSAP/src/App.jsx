import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const App = () => {
  const counterRef = useRef(null);
  const loaderRef = useRef(null);
  const imageRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    gsap.set([heroRef.current], {
      yPercent: 110,
    });

    // After counter finishes, move loader down
    tl.to(loaderRef.current, {
      yPercent: 100,
      duration: 1,
      ease: "expo.out",
    })
      .from(
        imageRef.current,
        {
          scale: 1.5,
          duration: 1.23,
          ease: "expo.out",
        },
        "-=1.1",
      )
      .to(heroRef.current, {
        yPercent: 0,
        duration:1.2,
        ease:"expo.out"
      },"-=0.9");

    const obj = {
      value: 0,
    };

    gsap.to(obj, {
      value: 100,
      duration: 1.3,
      ease: "none",

      onUpdate: () => {
        counterRef.current.textContent = `${Math.round(obj.value)}%`;
      },

      onComplete: () => {
        gsap.to(counterRef.current, {
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",

          onComplete: () => {
            tl.play();
          },
        });
      },
    });
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* IMAGE */}
      <img
        ref={imageRef}
        src="https://plus.unsplash.com/premium_photo-1785828348359-787d1ad7e44e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="background"
        className="h-full w-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 z-[5] bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

      {/* HERO TEXT */}
      <div
        ref={heroRef}
        className=" absolute inset-0 z-10 flex items-end px-8 pb-20 md:px-16 md:pb-24"
      >
        <div className="hero-content max-w-4xl">
          <div className="hero-heading">
            <h1 className="text-[#FFF3E0] font-[Space_Grotesk] text-[clamp(3.5rem,8vw,8rem)] font-bold leading-[0.9] tracking-[-0.04em] text-[#F5F5F5]">
              Weichao Deng
            </h1>
          </div>

          <div className="sub-heading mt-6">
            <p className="font-[Space_Grotesk] text-lg font-medium tracking-wide text-[#F5F5F5]/80 md:text-2xl">
              Bring animations that feel alive
            </p>
          </div>
        </div>
      </div>

      {/* LOADER */}
      <div
        ref={loaderRef}
        className="fixed top-0 left-0 z-[999] flex h-screen w-full items-center justify-center overflow-hidden bg-[#010101]"
      >
        <h2 ref={counterRef} className="text-[4rem] font-bold text-[#F5F5F5]">
          0%
        </h2>
      </div>
    </div>
  );
};

export default App;
