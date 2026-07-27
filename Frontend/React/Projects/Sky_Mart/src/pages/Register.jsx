import React, { useContext, useEffect } from "react";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onChange",
  });

  let { userData, setUserData } = useContext(Auth);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  const getStrength = (password) => {
    let score = 0;

    if (password.length > 0) score++;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) return { level: "Weak", color: "text-red-500", bars: 1 };

    if (score <= 4)
      return { level: "Medium", color: "text-yellow-500", bars: 2 };

    return { level: "Strong", color: "text-lime-400", bars: 3 };
  };
  
  const strength = getStrength(password);

  let formSubmit = (data) => {
    setUserData((prev) => [...prev, data]);

    navigate("/");
    toast.success("Account created sucessfully")

    reset();
  };

  useEffect(() => {
    console.log(userData);
  }, [userData]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#090909] via-[#0b0b0b] to-[#111111] flex flex-col items-center justify-center gap-5 p-6 font-sans">
      <div className="flex items-center gap-2.5 animate-[logoReveal_.7s_cubic-bezier(0.22,1,0.36,1)]">
        <div className="w-10 h-10 bg-lime-400 rounded-[10px] flex items-center justify-center shadow-[0_8px_25px_rgba(163,230,53,.25)]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0f0f0f"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        </div>

        <span className="text-[22px] font-extrabold text-white tracking-tight">
          Sky<span className="text-lime-400">Mart</span>
        </span>
      </div>

      <div className="w-full max-w-[380px] rounded-2xl border border-zinc-800 bg-gradient-to-b from-[#171717] to-[#111111] p-7 shadow-[0_30px_80px_rgba(0,0,0,.45)] opacity-0 animate-[cardReveal_.55s_cubic-bezier(0.22,1,0.36,1)_120ms_forwards] hover:-translate-y-1 hover:shadow-[0_40px_90px_rgba(0,0,0,.55)] transition-all duration-300">
        <div className="mb-5">
          <h1 className="text-2xl font-bold text-white mb-1.5">
            Create account
          </h1>
          <p className="text-[13px] text-zinc-500">
            Join SkyMart and start shopping
          </p>
        </div>

        <form
          onSubmit={handleSubmit(formSubmit)}
          className="flex flex-col gap-3"
        >
          <div className="relative">
            <User
              className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
              size={16}
            />
            <input
              {...register("name", {
                required: "Name is required",
              })}
              type="text"
              placeholder="Full name"
              className="w-full py-2.5 pl-9 pr-4 bg-[#1b1b1b] border border-zinc-700 rounded-[10px] text-white text-[13px] outline-none placeholder:text-zinc-500 focus:border-lime-400 focus:shadow-[0_0_0_3px_rgba(163,230,53,.15)] transition-all"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="relative">
            <Mail
              className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
              size={16}
            />
            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
              placeholder="Email address"
              className="w-full py-2.5 pl-9 pr-4 bg-[#1b1b1b] border border-zinc-700 rounded-[10px] text-white text-[13px] outline-none placeholder:text-zinc-500 focus:border-lime-400 focus:shadow-[0_0_0_3px_rgba(163,230,53,.15)] transition-all"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative">
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
                size={16}
              />

              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Minimum 8 characters",
                  },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full py-2.5 pl-9 pr-10 bg-[#1b1b1b] border border-zinc-700 rounded-xl text-white outline-none focus:border-lime-400 transition"
              />

              {showPassword ? (
                <EyeOff
                  onClick={() => setShowPassword(false)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 cursor-pointer"
                  size={18}
                />
              ) : (
                <Eye
                  onClick={() => setShowPassword(true)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 cursor-pointer"
                  size={18}
                />
              )}
            </div>
            {password && (
              <div className="mt-2">
                <div className="flex gap-2">
                  <div
                    className={`h-1 flex-1 rounded ${
                      strength.bars >= 1 ? "bg-red-500" : "bg-zinc-700"
                    }`}
                  ></div>

                  <div
                    className={`h-1 flex-1 rounded ${
                      strength.bars >= 2 ? "bg-yellow-500" : "bg-zinc-700"
                    }`}
                  ></div>

                  <div
                    className={`h-1 flex-1 rounded ${
                      strength.bars >= 3 ? "bg-lime-400" : "bg-zinc-700"
                    }`}
                  ></div>
                </div>

                <p className={`text-sm mt-2 ${strength.color}`}>
                  {strength.level}
                </p>
              </div>
            )}
            {password && <div className="mt-2">{/* Strength meter */}</div>}

            {errors.password && (
              <p className="mt-1 text-xs text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="relative">
            <Lock
              className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
              size={16}
            />
            <input
              {...register("confirmPassword", {
                required: "Password matching is required",
                validate:(value)=>value===password || "Passwords do not match"
              })}
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              className="w-full py-2.5 pl-9 pr-9 bg-[#1b1b1b] border border-zinc-700 rounded-[10px] text-white text-[13px] outline-none placeholder:text-zinc-500 focus:border-lime-400 focus:shadow-[0_0_0_3px_rgba(163,230,53,.15)] transition-all"
            />
            {showConfirmPassword ? (
              <EyeOff
                onClick={() => setShowConfirmPassword(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 cursor-pointer"
                size={18}
              />
            ) : (
              <Eye
                onClick={() => setShowConfirmPassword(true)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 cursor-pointer"
                size={18}
              />
            )}
            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
          
            type="submit"
            className="mt-1 flex w-full items-center justify-center gap-2 rounded-[14px] bg-gradient-to-r from-lime-300 to-lime-400 py-3.5 text-[15px] font-bold text-black shadow-[0_10px_35px_rgba(163,230,53,.25)] transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
          >
            Create Account
          </button>
        </form>

        <div className="mt-4 text-center">
          <span className="text-[13px] text-zinc-500">
            Already have an account?
          </span>{" "}
          <button
            onClick={() => navigate("/")}
            className="text-[13px] font-semibold text-lime-400 hover:underline"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
