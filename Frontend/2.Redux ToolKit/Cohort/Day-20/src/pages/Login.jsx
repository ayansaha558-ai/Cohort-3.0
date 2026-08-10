import React from "react";
import { useAuth } from "../hooks/authHooks";

const Login = () => {
  let { navigate, register, handleSubmit, reset, loginForm, errors } =
    useAuth();

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#070b14] font-sans text-slate-100 antialiased">
      {/* ── Local keyframes (no tailwind.config edits needed) ───────────── */}
      <style>{`
        @keyframes float-slow {
          0%,100% { transform: translate(0,0) scale(1); }
          33%     { transform: translate(30px,-40px) scale(1.08); }
          66%     { transform: translate(-25px,25px) scale(0.95); }
        }
        @keyframes float-rev {
          0%,100% { transform: translate(0,0) scale(1); }
          50%     { transform: translate(-40px,30px) scale(1.12); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes rise {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes grid-pan {
          from { background-position: 0 0; }
          to   { background-position: 60px 60px; }
        }
        @keyframes spin-slow { to { transform: rotate(360deg); } }

        .animate-float-slow { animation: float-slow 14s ease-in-out infinite; }
        .animate-float-rev  { animation: float-rev 18s ease-in-out infinite; }
        .animate-grid-pan   { animation: grid-pan 8s linear infinite; }
        .animate-spin-slow  { animation: spin-slow 18s linear infinite; }
        .shimmer-text {
          background: linear-gradient(100deg,#fff 20%,#7dd3fc 40%,#c4b5fd 55%,#fff 75%);
          background-size: 200% auto;
          -webkit-background-clip: text; background-clip: text;
          color: transparent;
          animation: shimmer 5s linear infinite;
        }
        .rise { opacity: 0; animation: rise .8s cubic-bezier(.22,1,.36,1) forwards; }
      `}</style>

      {/* ── Ambient background ─────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-indigo-600/25 blur-[120px] animate-float-slow" />
        <div className="absolute -bottom-52 -right-24 h-[34rem] w-[34rem] rounded-full bg-fuchsia-500/20 blur-[130px] animate-float-rev" />
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-[110px] animate-float-slow" />
        <div
          className="absolute inset-0 opacity-[0.18] animate-grid-pan"
          style={{
            backgroundImage:
              "linear-gradient(to right,rgba(148,163,184,.14) 1px,transparent 1px),linear-gradient(to bottom,rgba(148,163,184,.14) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%,#000 40%,transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%,#000 40%,transparent 100%)",
          }}
        />
      </div>

      {/* ── Layout ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-16 px-6 py-12 lg:grid-cols-2 lg:px-10">
        {/* ─── Left : brand storytelling ─── */}
        <section className="hidden flex-col lg:flex">
          <div
            className="rise flex items-center gap-3"
            style={{ animationDelay: ".05s" }}
          >
            <div className="relative grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 shadow-lg shadow-indigo-500/30">
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-400 to-fuchsia-400 opacity-60 blur-md" />
              <svg
                viewBox="0 0 24 24"
                className="relative h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 3 2.4 5.6L20 11l-5.6 2.4L12 19l-2.4-5.6L4 11l5.6-2.4Z" />
              </svg>
            </div>
            <span className="text-lg font-semibold tracking-tight">
              Nebula<span className="text-indigo-400">Studio</span>
            </span>
          </div>

          <h1
            className="rise mt-14 max-w-xl text-5xl font-bold leading-[1.08] tracking-tight xl:text-6xl"
            style={{ animationDelay: ".15s" }}
          >
            Where bold ideas <br />
            <span className="shimmer-text">become experiences.</span>
          </h1>

          <p
            className="rise mt-6 max-w-md text-[15px] leading-relaxed text-slate-400"
            style={{ animationDelay: ".25s" }}
          >
            Step back into your creative workspace — projects, assets and
            collaborators, all synced and exactly where you left them.
          </p>

          {/* feature pills */}
          <ul className="mt-12 space-y-4">
            {[
              ["Real-time collaborative canvas", ".35s"],
              ["Version history on every layer", ".45s"],
              ["Ship to production in one click", ".55s"],
            ].map(([label, delay]) => (
              <li
                key={label}
                className="rise flex items-center gap-3 text-sm text-slate-300"
                style={{ animationDelay: delay }}
              >
                <span className="grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-white/5 backdrop-blur">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m5 13 4 4L19 7" />
                  </svg>
                </span>
                {label}
              </li>
            ))}
          </ul>

          {/* social proof */}
          <div
            className="rise mt-14 flex items-center gap-4"
            style={{ animationDelay: ".65s" }}
          >
            <div className="flex -space-x-3">
              {[
                "from-rose-400 to-orange-300",
                "from-sky-400 to-indigo-400",
                "from-emerald-400 to-teal-300",
                "from-violet-400 to-fuchsia-400",
              ].map((g, i) => (
                <span
                  key={i}
                  className={`h-9 w-9 rounded-full bg-gradient-to-br ${g} ring-2 ring-[#070b14]`}
                />
              ))}
            </div>
            <p className="text-xs text-slate-400">
              <span className="font-semibold text-slate-200">24,000+</span>{" "}
              creators building daily
            </p>
          </div>
        </section>

        {/* ─── Right : login card ─── */}
        <section
          className="rise w-full justify-self-center"
          style={{ animationDelay: ".2s" }}
        >
          <div className="group relative mx-auto w-full max-w-md">
            {/* animated gradient border glow */}
            <div className="absolute -inset-[1.5px] rounded-[28px] bg-[conic-gradient(from_0deg,#6366f1,#22d3ee,#d946ef,#6366f1)] opacity-40 blur-[2px] transition duration-500 group-hover:opacity-70 animate-spin-slow" />
            <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/50 backdrop-blur-2xl sm:p-10">
              {/* top sheen */}
              <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

              <div className="mb-8 lg:hidden">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m12 3 2.4 5.6L20 11l-5.6 2.4L12 19l-2.4-5.6L4 11l5.6-2.4Z" />
                  </svg>
                </div>
              </div>

              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-slate-300">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                Secure sign in
              </span>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight">
                Welcome back
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Enter your details to continue creating.
              </p>

              {/* form (markup only) */}
              <form
                onSubmit={handleSubmit(loginForm)}
                className="mt-8 space-y-5"
              >
                {/* email */}
                <div className="group/f relative">
                  <input
                    {...register("email", {
                      required: "email is required",
                    })}
                    type="email"
                    id="email"
                    placeholder=" "
                    className="peer w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 pb-2.5 pt-6 text-sm text-slate-100 outline-none transition-all duration-300 placeholder-shown:pt-4 focus:border-indigo-400/60 focus:bg-white/[0.06] focus:ring-4 focus:ring-indigo-500/15"
                  />
                  <label
                    htmlFor="email"
                    className="pointer-events-none absolute left-4 top-2 text-[11px] font-medium uppercase tracking-wider text-slate-400 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-indigo-300"
                  >
                    Email address
                  </label>
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* password */}
                <div className="relative">
                  <input
                    {...register("password", {
                      required: "password is required",
                    })}
                    type="password"
                    id="password"
                    placeholder=" "
                    className="peer w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 pb-2.5 pt-6 pr-12 text-sm text-slate-100 outline-none transition-all duration-300 placeholder-shown:pt-4 focus:border-indigo-400/60 focus:bg-white/[0.06] focus:ring-4 focus:ring-indigo-500/15"
                  />
                  <label
                    htmlFor="password"
                    className="pointer-events-none absolute left-4 top-2 text-[11px] font-medium uppercase tracking-wider text-slate-400 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-indigo-300"
                  >
                    Password
                  </label>
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-slate-200"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4.5 w-4.5"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                  {errors.password && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* row */}
                <div className="flex items-center justify-between pt-1">
                  <label className="group/c flex cursor-pointer select-none items-center gap-2.5 text-xs text-slate-400">
                    <span className="relative grid h-4 w-4 place-items-center rounded-[5px] border border-white/20 bg-white/5 transition group-hover/c:border-indigo-400/70">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3 w-3 text-indigo-300 opacity-0 transition group-hover/c:opacity-40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m5 13 4 4L19 7" />
                      </svg>
                    </span>
                    Remember me
                  </label>
                  <a
                    href="#"
                    className="text-xs font-medium text-indigo-300 transition hover:text-indigo-200"
                  >
                    Forgot password?
                  </a>
                </div>

                {/* submit */}
                <button
                  type="submit"
                  className="group/b relative mt-2 w-full overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/40 active:translate-y-0"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/b:translate-x-full" />
                  <span className="relative flex items-center justify-center gap-2">
                    Sign in
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 transition-transform duration-300 group-hover/b:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14m-6-6 6 6-6 6" />
                    </svg>
                  </span>
                </button>
              </form>

              {/* divider */}
              <div className="my-7 flex items-center gap-4">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/15" />
                <span className="text-[11px] uppercase tracking-widest text-slate-500">
                  or continue with
                </span>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/15" />
              </div>

              {/* socials */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    name: "Google",
                    icon: (
                      <svg viewBox="0 0 24 24" className="h-5 w-5">
                        <path
                          fill="#EA4335"
                          d="M12 10.2v3.9h5.4c-.24 1.4-1.7 4.1-5.4 4.1a6.2 6.2 0 0 1 0-12.4c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3.1 14.6 2 12 2a10 10 0 1 0 0 20c5.8 0 9.6-4 9.6-9.7 0-.7-.1-1.2-.2-1.7H12Z"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "GitHub",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 fill-slate-100"
                      >
                        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.35 4.7-4.58 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Apple",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 fill-slate-100"
                      >
                        <path d="M16.4 12.8c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.7-1.8-3.3-1.8-1.4-.1-2.6.8-3.3.8-.7 0-1.7-.8-2.9-.8-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.7 2.3 2.9 2.2 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-1.1 2.8-2.2c.9-1.3 1.3-2.5 1.3-2.6-.1 0-2.9-1.1-2.9-4.4ZM14.3 5.6c.6-.8 1-1.8.9-2.9-.9 0-2 .6-2.7 1.4-.6.7-1 1.8-.9 2.8 1 .1 2-.5 2.7-1.3Z" />
                      </svg>
                    ),
                  },
                ].map((s) => (
                  <button
                    key={s.name}
                    type="button"
                    aria-label={s.name}
                    className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-3 text-xs font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                  >
                    {s.icon}
                    <span className="hidden sm:inline">{s.name}</span>
                  </button>
                ))}
              </div>

              <p className="mt-8 text-center text-sm text-slate-400">
                New here?{" "}
                <span
                  onClick={() => navigate("register")}
                  className="cursor-pointer group/l relative font-semibold text-white"
                >
                  Create an account
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-indigo-400 to-fuchsia-400 transition-all duration-300 group-hover/l:w-full" />
                </span>
              </p>
            </div>
          </div>

          <p className="mt-6 text-center text-[11px] text-slate-500">
            Protected by industry-standard encryption · Terms · Privacy
          </p>
        </section>
      </div>
    </div>
  );
};

export default Login;
