import React from "react";
import { Eye, Mail, Lock, ArrowRight } from "lucide-react";
import { useAuth } from "../../hooks/useAuthHook";

const LoginPage = () => {
  const {
    navigate,
    register,
    handleSubmit,
    errors,
    loginForm,
  } = useAuth();

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">
        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center p-14 bg-gradient-to-br from-violet-700 via-purple-700 to-fuchsia-700 text-white relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

          <h1 className="text-5xl font-bold leading-tight">
            Welcome <br /> Back.
          </h1>

          <p className="mt-6 text-lg text-violet-100 leading-relaxed">
            Log in to continue exploring your dashboard and manage everything
            from one place.
          </p>

          <div className="mt-12 flex gap-4">
            <div className="h-3 w-3 rounded-full bg-white"></div>
            <div className="h-3 w-3 rounded-full bg-white/50"></div>
            <div className="h-3 w-3 rounded-full bg-white/30"></div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-14 flex items-center">
          <div className="w-full">
            <h2 className="text-4xl font-bold text-white">Sign In</h2>

            <p className="text-zinc-400 mt-2">
              Enter your credentials to access your account.
            </p>

            <form
              onSubmit={handleSubmit(loginForm)}
              className="mt-10 space-y-6"
            >
              {/* Email */}
              <div>
                <label className="text-sm text-zinc-300 mb-2 block">
                  Email Address
                </label>

                <div className="flex items-center border border-zinc-700 rounded-xl px-4 bg-zinc-950 focus-within:border-violet-500 transition">
                  <Mail size={20} className="text-zinc-500" />

                  <input
                    {...register("username", {
                      required: "username is required",
                      pattern: {
                        message: "Enter a valid username",
                      },
                    })}
                    type="text"
                    placeholder="john@example.com"
                    className="w-full bg-transparent p-4 outline-none text-white placeholder:text-zinc-500"
                  />
                </div>

                {errors.username && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.username.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="text-sm text-zinc-300 mb-2 block">
                  Password
                </label>

                <div className="flex items-center border border-zinc-700 rounded-xl px-4 bg-zinc-950 focus-within:border-violet-500 transition">
                  <Lock size={20} className="text-zinc-500" />

                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
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

              {/* Remember Me */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-zinc-400">
                  <input
                    {...register("remember")}
                    type="checkbox"
                    className="accent-violet-600"
                  />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-violet-400 hover:text-violet-300 text-sm"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-violet-600 hover:bg-violet-700 transition rounded-xl py-4 font-semibold text-white flex items-center justify-center gap-2"
              >
                Login
                <ArrowRight size={18} />
              </button>
            </form>

            <p className="text-center text-zinc-400 mt-8">
              Don't have an account?
              <span
                onClick={() => navigate("/registerPage")}
                className="text-violet-400 cursor-pointer ml-2 hover:text-violet-300"
              >
                Register
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;