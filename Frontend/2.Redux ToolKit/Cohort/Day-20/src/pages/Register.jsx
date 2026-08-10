import React from "react";
import { useAuth } from "../hooks/authHooks";

/* -------------------- Icons -------------------- */

const Icon = ({ d, className = "w-5 h-5", ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {d}
  </svg>
);

const UserIcon = (props) => (
  <Icon
    {...props}
    d={
      <>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </>
    }
  />
);

const MailIcon = (props) => (
  <Icon
    {...props}
    d={
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </>
    }
  />
);

const LockIcon = (props) => (
  <Icon
    {...props}
    d={
      <>
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </>
    }
  />
);

const EyeIcon = (props) => (
  <Icon
    {...props}
    d={
      <>
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    }
  />
);

const CheckIcon = (props) => (
  <Icon {...props} d={<path d="m5 13 4 4L19 7" />} />
);

const SparkIcon = (props) => (
  <Icon
    {...props}
    d={
      <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1M7.7 16.3l-2.1 2.1" />
    }
  />
);

const RocketIcon = (props) => (
  <Icon
    {...props}
    d={
      <>
        <path d="M12 2s-3 4-3 9c0 3 1.5 5.5 3 7 1.5-1.5 3-4 3-7 0-5-3-9-3-9z" />
        <circle cx="12" cy="11" r="2" />
        <path d="M7 13c-2 2-4 5-4 8h18c0-3-2-6-4-8" />
      </>
    }
  />
);

/* -------------------- Register -------------------- */

const Register = () => {
  const {
    navigate,
    register,
    handleSubmit,
    registerForm,
    errors,
  } = useAuth();

  const inputStyle =
    "peer w-full rounded-xl border border-white/10 bg-white/5 py-3.5 pl-11 pr-11 text-sm text-white placeholder:text-slate-500 outline-none backdrop-blur-sm transition-all duration-300 hover:border-white/25 focus:border-indigo-400 focus:bg-white/10 focus:ring-4 focus:ring-indigo-500/20";

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070713] text-white">
      <Backdrop />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 py-10 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* ================= LEFT PANEL ================= */}

        <aside className="hidden animate-fade-right lg:block">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-indigo-200 backdrop-blur">
            <SparkIcon className="h-4 w-4 animate-spin-slow text-fuchsia-400" />
            Trusted by 12,000+ creators
          </div>

          <h1 className="mt-7 text-5xl font-black leading-[1.08] tracking-tight xl:text-6xl">
            Build something
            <span className="animate-gradient-x bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-300 bg-[length:200%_auto] bg-clip-text text-transparent">
              {" "}
              extraordinary
            </span>
            <br />
            today.
          </h1>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-slate-400">
            Join a workspace built for speed, clarity and collaboration. Free
            forever for personal projects — no credit card required.
          </p>

          <ul className="mt-9 space-y-4">
            {[
              "Unlimited projects & members",
              "Bank-grade AES-256 encryption",
              "Cancel anytime — zero lock-in",
            ].map((text, index) => (
              <li
                key={text}
                className="animate-fade-up flex items-center gap-3 text-sm text-slate-300"
                style={{
                  animationDelay: `${300 + index * 130}ms`,
                }}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/25">
                  <CheckIcon className="h-3.5 w-3.5 text-emerald-400" />
                </span>

                {text}
              </li>
            ))}
          </ul>

          <div className="mt-11 flex items-center gap-4">
            <div className="flex -space-x-3">
              <span className="animate-float h-10 w-10 rounded-full border-2 border-[#070713] bg-gradient-to-br from-indigo-500 to-indigo-950 shadow-lg" />

              <span className="animate-float animation-delay-200 h-10 w-10 rounded-full border-2 border-[#070713] bg-gradient-to-br from-fuchsia-500 to-indigo-950 shadow-lg" />

              <span className="animate-float animation-delay-400 h-10 w-10 rounded-full border-2 border-[#070713] bg-gradient-to-br from-amber-500 to-indigo-950 shadow-lg" />

              <span className="animate-float animation-delay-600 h-10 w-10 rounded-full border-2 border-[#070713] bg-gradient-to-br from-emerald-500 to-indigo-950 shadow-lg" />
            </div>

            <p className="text-xs text-slate-500">
              <span className="font-semibold text-amber-300">★ 4.9/5</span>{" "}
              from 2,300+ reviews
            </p>
          </div>

          <div className="animate-float-slow mt-8 flex items-center gap-3 text-sm text-slate-400">
            <RocketIcon className="h-5 w-5 text-fuchsia-400" />

            <span className="animate-gradient-x bg-gradient-to-r from-indigo-300 to-fuchsia-300 bg-[length:200%_auto] bg-clip-text font-medium text-transparent">
              Launch your next project
            </span>
          </div>
        </aside>

        {/* ================= REGISTER CARD ================= */}

        <main className="animate-fade-left mx-auto w-full max-w-md">
          <div className="group relative">
            {/* Border Glow */}

            <div className="absolute -inset-[1px] rounded-[26px] bg-gradient-to-r from-indigo-500/50 via-fuchsia-500/50 to-amber-400/50 opacity-60 blur-[2px] transition-opacity duration-500 group-hover:opacity-100" />

            {/* Particles */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[25px]">
              <div className="animate-float-slow absolute -right-2 -top-2 h-4 w-4 rounded-full bg-fuchsia-400/20 blur-sm" />

              <div className="animate-float-delayed absolute -bottom-2 -left-2 h-3 w-3 rounded-full bg-indigo-400/20 blur-sm" />

              <div className="animate-float absolute -right-1 top-1/3 h-2 w-2 rounded-full bg-amber-400/20 blur-sm" />
            </div>

            {/* ================= FORM ================= */}

            <form
              onSubmit={handleSubmit(registerForm)}
              className="relative rounded-[25px] border border-white/10 bg-[#0c0c1c]/80 p-7 backdrop-blur-2xl sm:p-9"
            >
              {/* Heading */}

              <header className="mb-7">
                <div className="animate-float mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-600 shadow-lg shadow-indigo-600/30">
                  <SparkIcon className="h-6 w-6" />
                </div>

                <h2 className="text-2xl font-bold tracking-tight">
                  Create your account
                </h2>

                <p className="mt-1.5 text-sm text-slate-400">
                  Takes less than 60 seconds ⚡
                </p>
              </header>

              {/* ================= SOCIAL BUTTONS ================= */}

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="group/social flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 active:scale-95"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 transition-transform duration-300 group-hover/social:scale-110"
                    fill="#EA4335"
                  >
                    <path d="M12 11v2.8h6.6c-.3 1.7-2 5-6.6 5A6.8 6.8 0 1 1 12 5.2c1.9 0 3.2.8 4 1.5l2.7-2.6A10 10 0 1 0 12 22c5.8 0 9.6-4 9.6-9.7 0-.6 0-1-.1-1.3H12Z" />
                  </svg>

                  Google
                </button>

                <button
                  type="button"
                  className="group/social flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 active:scale-95"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 transition-transform duration-300 group-hover/social:scale-110"
                    fill="white"
                  >
                    <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6 0-.6 0-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.2.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7 0 0-.6-.2.1-2.1 0 0 .8-.3 2.6 1a9.4 9.4 0 0 1 4.8 0c1.8-1.3 2.6-1 2.6-1 .7 1.9.1 2.1.1 2.1.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
                  </svg>

                  GitHub
                </button>
              </div>

              {/* Divider */}

              <div className="my-6 flex items-center gap-3">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/15" />

                <span className="text-[11px] uppercase tracking-widest text-slate-500">
                  or
                </span>

                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/15" />
              </div>

              {/* ================= INPUTS ================= */}

              <div className="space-y-4">
                {/* Full Name */}

                <Field label="Full name">
                  <UserIcon className="pointer-events-none absolute left-3.5 top-[22px] h-5 w-5 -translate-y-1/2 text-slate-500 transition-colors peer-focus:text-indigo-400" />

                  <input
                    {...register("name", {
                      required: "Name is required",
                    })}
                    type="text"
                    autoComplete="name"
                    placeholder="Ada Lovelace"
                    className={inputStyle}
                  />

                  {errors.name?.message && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </Field>

                {/* Email */}

                <Field label="Email address">
                  <MailIcon className="pointer-events-none absolute left-3.5 top-[22px] h-5 w-5 -translate-y-1/2 text-slate-500 transition-colors peer-focus:text-indigo-400" />

                  <input
                    {...register("email", {
                      required: "Email is required",
                    })}
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    className={inputStyle}
                  />

                  {errors.email?.message && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </Field>

                {/* Password */}

                <Field label="Password">
                  <LockIcon className="pointer-events-none absolute left-3.5 top-[22px] h-5 w-5 -translate-y-1/2 text-slate-500 transition-colors peer-focus:text-indigo-400" />

                  <input
                    {...register("password", {
                      required: "Password is required",
                    })}
                    type="password"
                    autoComplete="new-password"
                    placeholder="••••••••"
                    className={inputStyle}
                  />

                  <button
                    type="button"
                    tabIndex={-1}
                    className="absolute right-3.5 top-[22px] -translate-y-1/2 text-slate-500 transition-colors hover:text-indigo-300"
                  >
                    <EyeIcon className="h-5 w-5" />
                  </button>

                  {errors.password?.message && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.password.message}
                    </p>
                  )}
                </Field>

                {/* Confirm Password */}

                <Field label="Confirm password">
                  <LockIcon className="pointer-events-none absolute left-3.5 top-[22px] h-5 w-5 -translate-y-1/2 text-slate-500 transition-colors peer-focus:text-indigo-400" />

                  <input
                    {...register("confirmPassword", {
                      required: "Confirm password is required",
                    })}
                    type="password"
                    autoComplete="new-password"
                    placeholder="••••••••"
                    className={inputStyle}
                  />

                  <button
                    type="button"
                    tabIndex={-1}
                    className="absolute right-3.5 top-[22px] -translate-y-1/2 text-slate-500 transition-colors hover:text-indigo-300"
                  >
                    <EyeIcon className="h-5 w-5" />
                  </button>

                  {errors.confirmPassword?.message && (
                    <p className="mt-1.5 text-xs text-red-400">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </Field>
              </div>

              {/* ================= TERMS ================= */}

              <label className="mt-6 flex cursor-pointer items-start gap-3 text-xs text-slate-400">
                <input type="checkbox" className="peer sr-only" />

                <span className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-white/20 bg-white/5 transition-all duration-300 peer-checked:border-transparent peer-checked:bg-gradient-to-br peer-checked:from-indigo-500 peer-checked:to-fuchsia-500 peer-focus-visible:ring-4 peer-focus-visible:ring-indigo-500/25">
                  <CheckIcon className="h-3.5 w-3.5 scale-0 text-white transition-transform duration-300 peer-checked:scale-100" />
                </span>

                <span className="leading-relaxed">
                  I agree to the{" "}
                  <span className="font-medium text-indigo-300 underline decoration-dotted underline-offset-2 transition hover:text-indigo-200">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="font-medium text-indigo-300 underline decoration-dotted underline-offset-2 transition hover:text-indigo-200">
                    Privacy Policy
                  </span>
                  .
                </span>
              </label>

              {/* ================= SUBMIT ================= */}

              <button
                type="submit"
                className="group/btn relative mt-7 w-full overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-fuchsia-600/30 active:translate-y-0 active:scale-[0.98] focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/40"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />

                <span className="relative flex items-center justify-center gap-2">
                  Create free account

                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                    →
                  </span>
                </span>
              </button>

              {/* ================= LOGIN ================= */}

              <p className="mt-6 text-center text-sm text-slate-400">
                Already have an account?{" "}
                <span
                  onClick={() => navigate("/")}
                  className="cursor-pointer font-semibold text-indigo-300 transition-colors hover:text-indigo-200"
                >
                  Sign in
                </span>
              </p>
            </form>
          </div>
        </main>
      </div>

      <Keyframes />
    </div>
  );
};

/* -------------------- Field -------------------- */

const Field = ({ label, children }) => {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-slate-300">
        {label}
      </label>

      <div className="relative">{children}</div>
    </div>
  );
};

/* -------------------- Background -------------------- */

const Backdrop = () => {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,.18),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(217,70,239,.16),transparent_45%)]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="animate-blob absolute -left-28 top-[-6rem] h-[26rem] w-[26rem] rounded-full bg-indigo-600/25 blur-[110px]" />

      <div className="animate-blob absolute -right-24 top-1/3 h-[24rem] w-[24rem] rounded-full bg-fuchsia-600/25 blur-[110px] [animation-delay:2.5s]" />

      <div className="animate-blob absolute bottom-[-8rem] left-1/3 h-[22rem] w-[22rem] rounded-full bg-amber-400/15 blur-[110px] [animation-delay:5s]" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="animate-float absolute left-[14%] top-[18%] h-1 w-1 rounded-full bg-white/10" />

        <span className="animate-float-delayed absolute left-[32%] top-[73%] h-1 w-1 rounded-full bg-white/10" />

        <span className="animate-float-slow absolute left-[65%] top-[20%] h-1 w-1 rounded-full bg-white/10" />

        <span className="animate-float absolute left-[82%] top-[60%] h-1 w-1 rounded-full bg-white/10" />

        <span className="animate-float-delayed absolute left-[50%] top-[87%] h-1 w-1 rounded-full bg-white/10" />

        <span className="animate-float-slow absolute left-[90%] top-[30%] h-1 w-1 rounded-full bg-white/10" />
      </div>
    </>
  );
};

/* -------------------- Animations -------------------- */

const Keyframes = () => (
  <style>{`
    @keyframes blob {
      0%,100% {
        transform: translate(0,0) scale(1)
      }

      33% {
        transform: translate(36px,-46px) scale(1.12)
      }

      66% {
        transform: translate(-28px,26px) scale(.92)
      }
    }

    @keyframes float {
      0%,100% {
        transform: translateY(0)
      }

      50% {
        transform: translateY(-9px)
      }
    }

    @keyframes float-slow {
      0%,100% {
        transform: translateY(0)
      }

      50% {
        transform: translateY(-15px)
      }
    }

    @keyframes float-delayed {
      0%,100% {
        transform: translateY(0)
      }

      50% {
        transform: translateY(-12px)
      }
    }

    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(18px)
      }

      to {
        opacity: 1;
        transform: translateY(0)
      }
    }

    @keyframes fadeLeft {
      from {
        opacity: 0;
        transform: translateX(36px)
      }

      to {
        opacity: 1;
        transform: translateX(0)
      }
    }

    @keyframes fadeRight {
      from {
        opacity: 0;
        transform: translateX(-36px)
      }

      to {
        opacity: 1;
        transform: translateX(0)
      }
    }

    @keyframes gradientX {
      0%,100% {
        background-position: 0% 50%
      }

      50% {
        background-position: 100% 50%
      }
    }

    @keyframes spin {
      from {
        transform: rotate(0deg)
      }

      to {
        transform: rotate(360deg)
      }
    }

    .animate-blob {
      animation: blob 18s ease-in-out infinite;
    }

    .animate-float {
      animation: float 3.6s ease-in-out infinite;
    }

    .animate-float-slow {
      animation: float-slow 4.8s ease-in-out infinite;
    }

    .animate-float-delayed {
      animation: float-delayed 4.2s ease-in-out infinite 1s;
    }

    .animate-fade-up {
      animation: fadeUp .7s cubic-bezier(.16,1,.3,1) both;
    }

    .animate-fade-left {
      animation: fadeLeft .8s cubic-bezier(.16,1,.3,1) both;
    }

    .animate-fade-right {
      animation: fadeRight .8s cubic-bezier(.16,1,.3,1) both;
    }

    .animate-gradient-x {
      animation: gradientX 5s ease infinite;
    }

    .animate-spin-slow {
      animation: spin 6s linear infinite;
    }

    @media (prefers-reduced-motion: reduce) {
      * {
        animation: none !important;
        transition-duration: .01ms !important;
      }
    }
  `}</style>
);

export default Register;