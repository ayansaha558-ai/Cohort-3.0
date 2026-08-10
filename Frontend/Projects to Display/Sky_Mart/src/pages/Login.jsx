import React, { useContext, useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Zap } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

/*
Add this once to your global index.css

@keyframes formReveal {
  0% {
    opacity: 0;
    transform: translateY(18px) scale(0.985);
    filter: blur(10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}
*/

const Login = () => {
  const navigate = useNavigate();

  let { loggedIn, setLoggedIn, userData } = useContext(Auth);

  const [showPassword, setShowPassword] = useState(false);

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  let formSubmit = (data) => {
    let user = userData.find(
      (value) => value.email === data.email && value.password === data.password
    );

    if (user) {
      setLoggedIn(user);
      navigate("/main");

      toast.success("Login Successful");
    } else {
      toast.error("Invalid Credentials");
    }

    reset();
  };

  return (
    <div className="font-sans h-screen overflow-hidden bg-[#0B0B0B] text-white flex">
      {/* Left Panel */}
      <div className="hidden lg:flex w-1/2 border-r border-zinc-800 px-12 py-10 flex-col justify-between relative overflow-hidden">
        <div className="absolute -left-32 top-40 h-96 w-96 rounded-full bg-lime-400/10 blur-[120px]" />

        <div>
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-lime-400 flex items-center justify-center">
              <Zap className="text-black fill-black" size={22} />
            </div>

            <h1 className="text-3xl font-bold">
              Sky<span className="text-lime-400">Mart</span>
            </h1>
          </div>

          <div className="mt-20">
            <p className="uppercase tracking-[4px] text-lime-400 text-xs font-semibold">
              Welcome Back
            </p>

            <h2 className="mt-5 text-6xl font-bold leading-tight">
              Shop the future.
              <br />
              <span className="text-lime-400">Today.</span>
            </h2>

            <p className="mt-8 max-w-lg text-zinc-500 text-lg leading-8">
              Thousands of premium products with lightning fast delivery and an
              effortless shopping experience.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {[
            ["20K+", "Products"],
            ["50K+", "Customers"],
            ["4.9★", "Rating"],
          ].map(([num, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 text-center"
            >
              <h3 className="text-2xl font-bold text-lime-400">{num}</h3>
              <p className="mt-2 text-sm text-zinc-500">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-8 overflow-hidden">
        <div
          className="w-full max-w-md rounded-3xl border border-zinc-800 bg-white/5 backdrop-blur-xl p-8 shadow-2xl
          opacity-0 animate-[formReveal_.7s_cubic-bezier(0.22,1,0.36,1)_forwards]
          transition-shadow duration-300 hover:shadow-[0_30px_80px_rgba(0,0,0,.45)]"
        >
          <h2 className="text-4xl font-bold">Sign in</h2>

          <p className="mt-2 text-sm text-zinc-500">
            Enter your credentials to continue
          </p>

          <form onSubmit={handleSubmit(formSubmit)} className="mt-8 space-y-5">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18}/>
              <input
                {...register("email",{required:"Email is required"})}
                type="email"
                placeholder="Email address"
                className="h-12 w-full rounded-xl border border-zinc-700 bg-[#181818] pl-11 pr-4 text-sm outline-none focus:border-lime-400"
              />
            </div>
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18}/>
              <input
                {...register("password",{required:"Password is required",minLength:{value:8,message:"Minimum 8 characters"}})}
                type={showPassword ? "text":"password"}
                placeholder="Password"
                className="h-12 w-full rounded-xl border border-zinc-700 bg-[#181818] pl-11 pr-11 text-sm outline-none focus:border-lime-400"
              />
              {showPassword ? (
                <EyeOff onClick={()=>setShowPassword(false)} className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 cursor-pointer" size={18}/>
              ) : (
                <Eye onClick={()=>setShowPassword(true)} className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 cursor-pointer" size={18}/>
              )}
            </div>
            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}

            <button
              type="submit"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-lime-400 font-semibold text-black transition-all duration-300 hover:bg-lime-300 hover:shadow-[0_10px_30px_rgba(163,230,53,.20)] active:scale-[0.985]"
            >
              Sign In <ArrowRight size={18}/>
            </button>

            <p className="text-center text-sm text-zinc-500">
              Don't have an account?{" "}
              <span onClick={()=>navigate("register")} className="cursor-pointer font-semibold text-lime-400 hover:underline">
                Create one
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
