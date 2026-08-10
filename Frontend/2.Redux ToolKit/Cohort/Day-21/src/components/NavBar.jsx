import React from "react";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/20">
            <span className="text-lg font-bold text-white">S</span>
          </div>

          <h3 className="text-xl font-bold tracking-tight text-white">
            Sky<span className="text-violet-400">Dart</span>
          </h3>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-1 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-1.5">
          <NavLink
            to="/main"
            end
            className={({ isActive }) =>
              `rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "bg-zinc-800 text-violet-400 shadow-sm"
                  : "text-zinc-400 hover:bg-zinc-800/70 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/main/shop"
            className={({ isActive }) =>
              `rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "bg-zinc-800 text-violet-400 shadow-sm"
                  : "text-zinc-400 hover:bg-zinc-800/70 hover:text-white"
              }`
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/main/about"
            className={({ isActive }) =>
              `rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "bg-zinc-800 text-violet-400 shadow-sm"
                  : "text-zinc-400 hover:bg-zinc-800/70 hover:text-white"
              }`
            }
          >
            About
          </NavLink>
        </div>

        {/* User + Cart */}
        <div className="flex items-center gap-4">
          {/* User */}
          <div className="hidden items-center gap-3 sm:flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-sm font-semibold text-violet-400">
              D
            </div>

            <div className="leading-tight">
              <p className="text-xs text-zinc-500">Welcome back</p>
              <p className="text-sm font-semibold text-zinc-200">Hey, Dev!</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden h-8 w-px bg-zinc-800 sm:block" />

          {/* Cart */}
          <NavLink
            to="/main/cartPage"
            className={({ isActive }) =>
              `group relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-500/20"
                  : "border border-zinc-700 bg-zinc-900 text-zinc-200 hover:-translate-y-0.5 hover:border-violet-500/50 hover:bg-violet-600 hover:text-white"
              }`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 2.25l1.5 1.5m0 0L6.75 15h10.5l3-8.25H5.25M8.25 20.25a.75.75 0 100-1.5.75.75 0 000 1.5zm9 0a.75.75 0 100-1.5.75.75 0 000 1.5z"
              />
            </svg>

            <span>Cart</span>

            <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-zinc-950 bg-violet-500 px-1 text-[10px] font-bold text-white">
              0
            </span>
          </NavLink>

          {/* Logout */}
          <button
            type="button"
            title="Logout"
            className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-400 transition-all duration-300 hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3-3H9m9.75 0-3-3m3 3-3 3"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
