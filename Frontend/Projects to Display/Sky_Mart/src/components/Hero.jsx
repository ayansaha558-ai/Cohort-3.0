import React, { useContext } from "react";
import { Auth } from "../context/AuthContext";
import { useNavigate } from "react-router";

const Hero = () => {
  const { loggedIn } = useContext(Auth);

  const hour = new Date().getHours();

  let greeting;

  if (hour >= 5 && hour < 12) {
    greeting = "GOOD MORNING 👋";
  } else if (hour >= 12 && hour < 17) {
    greeting = "GOOD AFTERNOON ☀️";
  } else {
    greeting = "GOOD EVENING 🌙";
  }

  const navigate = useNavigate();

  return (
    <section className="relative mx-auto h-[280px] w-[92%] overflow-hidden rounded-[20px] border border-zinc-800 bg-[#0d0e0e]">
      <div
        className="pointer-events-none absolute inset-0
        bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-[size:45px_45px]"
      />

      <div className="relative z-10 flex h-full items-center justify-between px-10">
        <div>
          <p className="mb-2 text-[12px] font-medium tracking-[1.4px] text-[#9bd000]">
            {greeting}
          </p>

          <h1 className="text-[36px] leading-[1.1] font-semibold tracking-[-0.5px] text-white md:text-[38px]">
            Welcome back,{" "}
            <span className="text-[#c2ff00]">{loggedIn?.name}!</span>
          </h1>

          <p className="mt-3 max-w-[440px] text-[14px] leading-[1.6] text-zinc-500">
            Discover today's picks — hand-curated products across
            electronics, fashion, and more.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            {/* Primary CTA */}
            <button
              onClick={() => navigate("/main/shop?rating=Top Rated")}
              className="
                group flex h-[44px] cursor-pointer items-center gap-2
                rounded-[14px] bg-[#c2ff00] px-5 text-[13px] font-semibold
                text-black transition-all duration-300 ease-out
                hover:-translate-y-0.5 hover:bg-[#d0ff3d]
                hover:shadow-[0_8px_30px_rgba(194,255,0,0.18)]
                active:translate-y-0 active:scale-[0.98]
              "
            >
              Grab the Deal
              <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            {/* Secondary CTA */}
            <button
              onClick={() => navigate("/main/shop")}
              className="
                h-[44px] cursor-pointer rounded-[14px] border
                border-zinc-700 px-5 text-[13px] text-zinc-200
                transition-all duration-300 ease-out
                hover:-translate-y-0.5 hover:border-zinc-500
                hover:bg-white/[0.04] hover:text-white
                hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)]
                active:translate-y-0 active:scale-[0.98]
              "
            >
              Browse All Collections
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="hidden flex-col gap-3 sm:flex">
          <div className="flex h-[76px] w-[150px] flex-col items-center justify-center rounded-[14px] border border-zinc-800 bg-[#0f1400]">
            <h2 className="text-[22px] leading-none font-bold text-[#c2ff00]">
              20+
            </h2>
            <p className="mt-1.5 text-[11px] text-zinc-500">
              Products Available
            </p>
          </div>

          <div className="flex h-[72px] w-[150px] flex-col items-center justify-center rounded-[14px] border border-zinc-800">
            <h2 className="text-[19px] leading-none font-semibold text-white">
              Free
            </h2>
            <p className="mt-1.5 text-[11px] text-zinc-500">
              Delivery on ₹999+
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;