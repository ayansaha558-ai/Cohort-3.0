import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.set(imgRef.current, {
      clipPath: "inset(20% 25% 20% 25%)",
      scale: 1.4,
    });

    gsap.to(imgRef.current, {
      clipPath: "inset(0% 0% 0% 0%)",
      scale: 1,

      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 20%",
        end: "+=1200",
        pin: true,
        scrub: true,
        markers: true,
      },
    });
  }, []);

  return (
    <div className="bg-zinc-950 text-white">

      {/* TOP SPACE */}
      <section className="h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-sm tracking-[0.4em] uppercase text-zinc-500 mb-4">
            Creative Experience
          </p>

          <h1 className="text-6xl md:text-8xl font-semibold tracking-tight">
            Scroll
            <span className="text-zinc-500">.</span>
          </h1>

          <p className="mt-6 text-zinc-500">
            Watch the image transform as you scroll
          </p>
        </div>
      </section>

      {/* PINNED IMAGE SECTION */}
      <section className="relative h-[180vh]">

        <div className="h-screen flex items-center justify-center">

          <div className="relative w-[85vw] md:w-[70vw] h-[60vh] overflow-hidden rounded-3xl">

            {/* Glow */}
            <div className="absolute -inset-10 bg-violet-500/10 blur-3xl" />

            <img
              ref={imgRef}
              src="https://images.unsplash.com/photo-1786227651349-eb05c4468b13?w=1000&auto=format&fit=crop&q=80"
              alt="Landscape"
              className="relative w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />

          </div>

        </div>

      </section>

      {/* BOTTOM SPACE */}
      <section className="h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-sm tracking-[0.4em] uppercase text-zinc-600">
            Experience complete
          </p>

          <h2 className="mt-4 text-5xl md:text-7xl font-semibold">
            That's it.
          </h2>
        </div>
      </section>

    </div>
  );
};

export default App;