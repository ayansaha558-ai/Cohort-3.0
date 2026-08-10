import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Music2,
  User,
  AtSign,
  Mic,
  Music,
} from "lucide-react";

const NOTE_GLYPHS = ["♪", "♫", "♬", "♩"];

const RegisterPage = () => {
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [role, setRole] = useState("listener"); // "listener" | "artist"
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bars, setBars] = useState([]);
  const barCount = 32;

  let navigate = useNavigate();

  useEffect(() => {
    const roll = () =>
      setBars(Array.from({ length: barCount }, () => 8 + Math.random() * 46));
    roll();
    const id = setInterval(roll, 260);
    return () => clearInterval(id);
  }, []);

  const notes = useRef(
    Array.from({ length: 9 }, (_, i) => ({
      glyph: NOTE_GLYPHS[i % NOTE_GLYPHS.length],
      left: 6 + Math.random() * 82,
      size: 14 + Math.random() * 20,
      duration: 7 + Math.random() * 6,
      delay: i * 0.9,
    })),
  ).current;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading || !agree) return;
    setLoading(true);
    setTimeout(() => setLoading(false), 1800);
  };

  return (
    <div className="h-screen w-full bg-black text-white flex items-center justify-center overflow-hidden relative">
      <style>{`
        @keyframes driftA { 0%,100%{ transform: translate(0,0) scale(1);} 50%{ transform: translate(60px,50px) scale(1.15);} }
        @keyframes driftB { 0%,100%{ transform: translate(0,0) scale(1);} 50%{ transform: translate(-60px,-40px) scale(1.1);} }
        @keyframes floatNote {
          0% { transform: translateY(30px) rotate(-8deg); opacity: 0; }
          12% { opacity: 0.9; }
          85% { opacity: 0.45; }
          100% { transform: translateY(-380px) rotate(10deg); opacity: 0; }
        }
        @keyframes hoverY { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes ringOut {
          0% { transform: scale(0.55); opacity: 0.6; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        @keyframes sheen { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes cupGlow { 0%,100% { opacity: 0.45; } 50% { opacity: 1; } }
        @keyframes dotBlink { 0%,100% { opacity: 1; } 50% { opacity: 0.25; } }
        @keyframes spin360 { to { transform: rotate(360deg); } }
        @keyframes shineMove { 0% { left: -60%; } 35% { left: 130%; } 100% { left: 130%; } }
        .eq-bar { transition: height 0.25s ease; }
      `}</style>

      {/* ambient glow blobs */}
      <div
        className="absolute -left-40 -top-40 w-[600px] h-[600px] rounded-full opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #8b5cf6, transparent 70%)",
          filter: "blur(110px)",
          animation: "driftA 18s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -right-40 -bottom-40 w-[520px] h-[520px] rounded-full opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #e879f9, transparent 70%)",
          filter: "blur(110px)",
          animation: "driftB 22s ease-in-out infinite",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex items-center justify-between gap-10 px-8 py-4 h-full max-h-screen">
        {/* ================= LEFT: animated music panel (SAME as Login) ================= */}
        <div className="hidden md:flex flex-col justify-center flex-1 max-w-xl relative h-full max-h-[90vh]">
          <div className="absolute inset-0 pointer-events-none overflow-visible">
            {notes.map((n, i) => (
              <span
                key={i}
                className="absolute bottom-0 text-purple-300"
                style={{
                  left: `${n.left}%`,
                  fontSize: `${n.size}px`,
                  filter: "drop-shadow(0 0 6px rgba(167,139,250,0.6))",
                  animation: `floatNote ${n.duration}s linear infinite`,
                  animationDelay: `${n.delay}s`,
                }}
              >
                {n.glyph}
              </span>
            ))}
          </div>

          <div className="relative w-full h-56 flex items-center justify-center mb-6">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute rounded-full border border-purple-400/30"
                style={{
                  width: 180,
                  height: 180,
                  animation: "ringOut 3.2s ease-out infinite",
                  animationDelay: `${i * 1.1}s`,
                }}
              />
            ))}

            <div className="absolute flex items-center justify-center gap-[3px] w-full">
              {bars.map((h, i) => (
                <span
                  key={i}
                  className="eq-bar block w-1 rounded-full"
                  style={{
                    height: `${h * 0.85}px`,
                    background:
                      "linear-gradient(180deg, #e879f9, #8b5cf6 60%, transparent)",
                    opacity: 0.8,
                  }}
                />
              ))}
            </div>

            <div
              className="relative z-10"
              style={{
                width: 130,
                height: 130,
                animation: "hoverY 4.5s ease-in-out infinite",
              }}
            >
              <div
                className="absolute top-0 left-[16px] right-[16px] h-[68px] rounded-t-[70px]"
                style={{
                  border: "8px solid #a78bfa",
                  borderBottom: "none",
                  boxShadow:
                    "0 0 26px rgba(167,139,250,0.55), inset 0 0 14px rgba(232,121,249,0.25)",
                }}
              />
              {["left", "right"].map((side) => (
                <div
                  key={side}
                  className="absolute bottom-[12px] w-[30px] h-[46px] rounded-[12px]"
                  style={{
                    [side]: "5px",
                    background: "linear-gradient(160deg, #2a2340, #14101f)",
                    border: "2px solid rgba(167,139,250,0.55)",
                    boxShadow: "0 0 22px rgba(139,92,246,0.45)",
                  }}
                >
                  <div
                    className="absolute rounded-[9px]"
                    style={{
                      inset: "8px",
                      background:
                        "radial-gradient(circle at 35% 30%, rgba(232,121,249,0.55), rgba(139,92,246,0.15) 60%, transparent 75%)",
                      animation: "cupGlow 2.2s ease-in-out infinite",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <h1
            className="font-extrabold text-5xl leading-none tracking-tight"
            style={{
              backgroundImage:
                "linear-gradient(100deg, #ffffff 10%, #a78bfa 55%, #e879f9 100%)",
              backgroundSize: "220% 100%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              animation: "sheen 6s ease-in-out infinite",
            }}
          >
            Resonance
          </h1>
          <p className="mt-3 text-gray-400 text-sm max-w-sm leading-relaxed">
            Experience high-fidelity sound tailored to your soul.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-400 text-xs uppercase tracking-wider font-mono">
            <Music2 size={12} className="text-purple-300" />
            <span
              className="w-1.5 h-1.5 rounded-full bg-pink-400"
              style={{
                boxShadow: "0 0 8px #e879f9",
                animation: "dotBlink 1.6s ease-in-out infinite",
              }}
            />
            Now streaming in lossless
          </div>
        </div>

        {/* ================= RIGHT: Register card (matches Login UI + screenshot structure) ================= */}
        <div className="w-full max-w-md relative shrink-0">
          <div
            className="absolute -inset-px rounded-3xl"
            style={{
              padding: 1,
              background:
                "conic-gradient(from 0deg, transparent 0%, #8b5cf6 12%, transparent 24%, transparent 60%, #e879f9 72%, transparent 84%)",
              WebkitMask:
                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              animation: "spin360 5s linear infinite",
              opacity: 0.9,
            }}
          />
          <div
            className="relative rounded-3xl border border-white/10 px-8 py-6"
            style={{
              background:
                "linear-gradient(160deg, rgba(255,255,255,0.045), rgba(255,255,255,0.015))",
              backdropFilter: "blur(22px)",
              boxShadow: "0 30px 80px -20px rgba(0,0,0,0.7)",
            }}
          >
            <h2 className="font-bold text-2xl tracking-tight">
              Create Account
            </h2>
            <p className="text-gray-400 text-sm mt-1 mb-5">
              Join the sound revolution.
            </p>

            {/* Role selector - matches the screenshot */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <button
                type="button"
                onClick={() => setRole("listener")}
                className={`cursor-pointer flex flex-col items-center justify-center gap-1.5 h-[72px] rounded-xl border transition-all ${
                  role === "listener"
                    ? "border-purple-400/70 bg-purple-500/10 shadow-[0_0_20px_rgba(139,92,246,0.25)]"
                    : "border-white/10 bg-white/[0.02] hover:bg-white/[0.04]"
                }`}
              >
                <Music
                  size={20}
                  className={
                    role === "listener" ? "text-purple-300" : "text-gray-500"
                  }
                />
                <span
                  className={`text-[11px] font-semibold tracking-wider uppercase ${
                    role === "listener" ? "text-purple-200" : "text-gray-500"
                  }`}
                >
                  Listener
                </span>
              </button>

              <button
                type="button"
                onClick={() => setRole("artist")}
                className={`cursor-pointer flex flex-col items-center justify-center gap-1.5 h-[72px] rounded-xl border transition-all ${
                  role === "artist"
                    ? "border-purple-400/70 bg-purple-500/10 shadow-[0_0_20px_rgba(139,92,246,0.25)]"
                    : "border-white/10 bg-white/[0.02] hover:bg-white/[0.04]"
                }`}
              >
                <Mic
                  size={20}
                  className={
                    role === "artist" ? "text-purple-300" : "text-gray-500"
                  }
                />
                <span
                  className={`text-[11px] font-semibold tracking-wider uppercase ${
                    role === "artist" ? "text-purple-200" : "text-gray-500"
                  }`}
                >
                  Artist
                </span>
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="mb-3">
                <div className="flex items-center gap-2.5 h-[44px] px-3.5 rounded-xl border border-white/10 bg-white/[0.025] focus-within:border-purple-400/60 focus-within:bg-purple-500/[0.06] transition-colors">
                  <User size={16} className="text-gray-500 flex-shrink-0" />
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="flex-1 bg-transparent outline-none text-sm placeholder-gray-600 cursor-text"
                  />
                </div>
              </div>

              {/* Username */}
              <div className="mb-3">
                <div className="flex items-center gap-2.5 h-[44px] px-3.5 rounded-xl border border-white/10 bg-white/[0.025] focus-within:border-purple-400/60 focus-within:bg-purple-500/[0.06] transition-colors">
                  <AtSign size={16} className="text-gray-500 flex-shrink-0" />
                  <input
                    type="text"
                    required
                    placeholder="Username"
                    className="flex-1 bg-transparent outline-none text-sm placeholder-gray-600 cursor-text"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-3">
                <div className="flex items-center gap-2.5 h-[44px] px-3.5 rounded-xl border border-white/10 bg-white/[0.025] focus-within:border-purple-400/60 focus-within:bg-purple-500/[0.06] transition-colors">
                  <Mail size={16} className="text-gray-500 flex-shrink-0" />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className="flex-1 bg-transparent outline-none text-sm placeholder-gray-600 cursor-text"
                  />
                </div>
              </div>

              {/* Password + Confirm side by side */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex items-center gap-2 h-[44px] px-3 rounded-xl border border-white/10 bg-white/[0.025] focus-within:border-purple-400/60 focus-within:bg-purple-500/[0.06] transition-colors">
                  <Lock size={15} className="text-gray-500 flex-shrink-0" />
                  <input
                    type={showPw ? "text" : "password"}
                    required
                    placeholder="Password"
                    className="flex-1 bg-transparent outline-none text-sm placeholder-gray-600 min-w-0 cursor-text"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw((s) => !s)}
                    className="cursor-pointer text-gray-500 hover:text-purple-300 transition-colors flex-shrink-0"
                  >
                    {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>

                <div className="flex items-center gap-2 h-[44px] px-3 rounded-xl border border-white/10 bg-white/[0.025] focus-within:border-purple-400/60 focus-within:bg-purple-500/[0.06] transition-colors">
                  <Lock size={15} className="text-gray-500 flex-shrink-0" />
                  <input
                    type={showConfirm ? "text" : "password"}
                    required
                    placeholder="Confirm"
                    className="flex-1 bg-transparent outline-none text-sm placeholder-gray-600 min-w-0 cursor-text"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((s) => !s)}
                    className="cursor-pointer text-gray-500 hover:text-purple-300 transition-colors flex-shrink-0"
                  >
                    {showConfirm ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <div
                className="flex items-start gap-2.5 mb-5 cursor-pointer select-none"
                onClick={() => setAgree((a) => !a)}
              >
                <div
                  className="w-[16px] h-[16px] mt-0.5 rounded-md border flex items-center justify-center transition-all flex-shrink-0"
                  style={
                    agree
                      ? {
                          background:
                            "linear-gradient(135deg, #8b5cf6, #e879f9)",
                          borderColor: "transparent",
                          boxShadow: "0 0 12px rgba(139,92,246,0.45)",
                        }
                      : {
                          borderColor: "rgba(255,255,255,0.15)",
                          background: "rgba(255,255,255,0.02)",
                        }
                  }
                >
                  {agree && (
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>
                <span className="text-xs text-gray-400 leading-relaxed">
                  I agree to the{" "}
                  <span className="cursor-pointer text-purple-300 hover:text-pink-300 transition-colors">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="cursor-pointer text-purple-300 hover:text-pink-300 transition-colors">
                    Privacy Policy
                  </span>
                  .
                </span>
              </div>

              {/* Register button */}
              <button
                type="submit"
                disabled={!agree}
                className="cursor-pointer relative w-full h-[48px] rounded-xl font-semibold text-[15px] flex items-center justify-center gap-2 overflow-hidden transition-all active:scale-[0.985] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
                style={{
                  background:
                    "linear-gradient(100deg, #8b5cf6 0%, #7c4feb 45%, #e879f9 100%)",
                  boxShadow: "0 12px 30px -8px rgba(139,92,246,0.55)",
                }}
              >
                <span
                  className="absolute top-0 left-[-60%] w-2/5 h-full"
                  style={{
                    background:
                      "linear-gradient(100deg, transparent, rgba(255,255,255,0.35), transparent)",
                    transform: "skewX(-20deg)",
                    animation: "shineMove 3.2s ease-in-out infinite",
                  }}
                />
                {loading ? (
                  <span
                    className="w-5 h-5 rounded-full border-2 border-white/35"
                    style={{
                      borderTopColor: "white",
                      animation: "spin360 0.7s linear infinite",
                    }}
                  />
                ) : (
                  <>
                    <span>Register</span>
                    <ArrowRight size={17} />
                  </>
                )}
              </button>
            </form>

            <p className="text-center mt-5 text-sm text-gray-400">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/")}
                className="cursor-pointer text-purple-300 hover:text-pink-300 font-semibold transition-colors"
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;