import React from "react";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-gray-800 bg-gray-900 px-8 py-4 shadow-lg">
      
      {/* Brand */}
      <NavLink to="/" className="group flex items-center gap-3">
        
        {/* Logo */}
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 text-lg font-black text-gray-950 shadow-lg shadow-amber-400/10 transition duration-300 group-hover:rotate-3">
          V
        </div>

        {/* Brand Name + Tagline */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold leading-none tracking-tight text-white">
            Vey<span className="text-amber-400">ra</span>
          </h1>

          <span className="mt-1 text-[9px] font-medium tracking-[0.18em] text-gray-500">
            DISCOVER · SAVE · INSPIRE
          </span>
        </div>
      </NavLink>

      {/* Navigation */}
      <div className="flex items-center gap-3">
        
        {/* Search */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `cursor-pointer rounded-lg px-5 py-2 text-sm font-semibold transition-all duration-200 ${
              isActive
                ? "bg-amber-400 text-gray-950 shadow-md shadow-amber-400/10"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
            }`
          }
        >
          Search
        </NavLink>

        {/* Collection */}
        <NavLink
          to="/collection"
          className={({ isActive }) =>
            `cursor-pointer rounded-lg px-5 py-2 text-sm font-semibold transition-all duration-200 ${
              isActive
                ? "bg-amber-400 text-gray-950 shadow-md shadow-amber-400/10"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
            }`
          }
        >
          Collection
        </NavLink>

      </div>
    </nav>
  );
};

export default NavBar;