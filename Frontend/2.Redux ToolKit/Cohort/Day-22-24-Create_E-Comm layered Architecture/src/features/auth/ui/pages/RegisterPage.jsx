import React from "react";
import { User, Mail, Lock, Eye, ArrowRight } from "lucide-react";
import { useAuth } from "../../hooks/useAuthHook";

const RegisterPage = () => {
  const {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    watch,
    loginForm,
  } = useAuth();

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">
        {/* Left */}
        <div className="p-8 md:p-14 flex items-center order-2 lg:order-1">
          <div className="w-full">
            <h2 className="text-4xl font-bold text-white">
              Create Account
            </h2>

            <p className="text-zinc-400 mt-2">
              Join us today and start your amazing journey.
            </p>

            <form
              onSubmit={handleSubmit(loginForm)}
              className="mt-10 space-y-6"
            >
              {/* Name */}
              <div>
                <label className="text-sm text-zinc-300 mb-2 block">
                  Full Name
                </label>

                <div className="flex items-center border border-zinc-700 rounded-xl px-4 bg-zinc-950 focus-within:border-violet-500">
                  <User size={20} className="text-zinc-500" />

                  <input
                    {...register("name", {
                      required: "Full name is required",
                      minLength: {
                        value: 3,
                        message: "Name must be at least 3 characters",
                      },
                    })}
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-transparent p-4 outline-none text-white placeholder:text-zinc-500"
                  />
                </div>

                {errors.name && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-zinc-300 mb-2 block">
                  Email
                </label>

                <div className="flex items-center border border-zinc-700 rounded-xl px-4 bg-zinc-950 focus-within:border-violet-500">
                  <Mail size={20} className="text-zinc-500" />

                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-transparent p-4 outline-none text-white placeholder:text-zinc-500"
                  />
                </div>

                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="text-sm text-zinc-300 mb-2 block">
                  Password
                </label>

                <div className="flex items-center border border-zinc-700 rounded-xl px-4 bg-zinc-950 focus-within:border-violet-500">
                  <Lock size={20} className="text-zinc-500" />

                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                        message:
                          "Must contain uppercase, lowercase, number & special character",
                      },
                    })}
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-transparent p-4 outline-none text-white placeholder:text-zinc-500"
                  />

                  <Eye
                    size={20}
                    className="text-zinc-500 cursor-pointer"
                  />
                </div>

                {errors.password && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="text-sm text-zinc-300 mb-2 block">
                  Confirm Password
                </label>

                <div className="flex items-center border border-zinc-700 rounded-xl px-4 bg-zinc-950 focus-within:border-violet-500">
                  <Lock size={20} className="text-zinc-500" />

                  <input
                    {...register("confirmPassword", {
                      required: "Confirm Password is required",
                      validate: (value) =>
                        value === watch("password") ||
                        "Passwords do not match",
                    })}
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-transparent p-4 outline-none text-white placeholder:text-zinc-500"
                  />

                  <Eye
                    size={20}
                    className="text-zinc-500 cursor-pointer"
                  />
                </div>

                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-violet-600 hover:bg-violet-700 transition rounded-xl py-4 font-semibold text-white flex items-center justify-center gap-2"
              >
                Create Account
                <ArrowRight size={18} />
              </button>
            </form>

            <p className="text-center text-zinc-400 mt-8">
              Already have an account?
              <span
                onClick={() => navigate("/")}
                className="text-violet-400 ml-2 cursor-pointer hover:text-violet-300"
              >
                Login
              </span>
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="hidden lg:flex flex-col justify-center p-14 bg-gradient-to-br from-violet-700 via-purple-700 to-fuchsia-700 text-white relative overflow-hidden order-1 lg:order-2">
          <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

          <h1 className="text-5xl font-bold leading-tight">
            Start <br />
            Your Journey.
          </h1>

          <p className="mt-6 text-lg text-violet-100 leading-relaxed">
            Create your account and unlock powerful features with a beautiful
            and secure experience.
          </p>

          <div className="mt-12 flex gap-4">
            <div className="h-3 w-3 rounded-full bg-white"></div>
            <div className="h-3 w-3 rounded-full bg-white/50"></div>
            <div className="h-3 w-3 rounded-full bg-white/30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;