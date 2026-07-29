import React, { useContext } from "react";
import { Zap, ShoppingCart, LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
import { MyStore } from "../context/MyContext";

const NavBar = () => {
  const navigate = useNavigate();

  const { setLoggedIn, loggedIn } = useContext(Auth);

  const { setIscartOpen, inCart } = useContext(MyStore);

  return (
    <nav className="h-12 w-full border-b border-zinc-800 bg-[#0B0B0B]">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5">

        {/* Logo */}
        <div
          onClick={() => navigate("/main")}
          className="flex cursor-pointer items-center gap-2"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-lime-400 transition-transform duration-300 hover:scale-110">
            <Zap
              className="h-4 w-4 text-black"
              strokeWidth={2.5}
            />
          </div>

          <h1 className="text-lg font-bold tracking-tight text-white">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <NavLink
            to="/main"
            end
            className={({ isActive }) =>
              `relative text-[13px] font-medium transition duration-300
              after:absolute after:-bottom-1 after:left-0 after:h-[2px]
              after:bg-lime-400 after:transition-all after:duration-300
              ${
                isActive
                  ? "text-lime-400 after:w-full"
                  : "text-gray-300 after:w-0 hover:text-lime-400 hover:after:w-full"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/main/shop"
            end
            className={({ isActive }) =>
              `relative text-[13px] font-medium transition duration-300
              after:absolute after:-bottom-1 after:left-0 after:h-[2px]
              after:bg-lime-400 after:transition-all after:duration-300
              ${
                isActive
                  ? "text-lime-400 after:w-full"
                  : "text-gray-300 after:w-0 hover:text-lime-400 hover:after:w-full"
              }`
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/main/about"
            end
            className={({ isActive }) =>
              `relative text-[13px] font-medium transition duration-300
              after:absolute after:-bottom-1 after:left-0 after:h-[2px]
              after:bg-lime-400 after:transition-all after:duration-300
              ${
                isActive
                  ? "text-lime-400 after:w-full"
                  : "text-gray-300 after:w-0 hover:text-lime-400 hover:after:w-full"
              }`
            }
          >
            About
          </NavLink>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">

          {/* User */}
          <button className="flex items-center gap-2 rounded-md border border-zinc-700 bg-[#151515] px-2 py-1 transition-all duration-300 hover:border-lime-400 hover:bg-zinc-900">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-lime-400 text-[11px] font-bold text-black">
              {loggedIn.name.charAt(0).toUpperCase()}
            </div>

            <span className="text-[13px] text-zinc-200">
              {loggedIn.name}
            </span>
          </button>

          {/* Cart */}
          <button
            onClick={() => {
              setIscartOpen(true);
            }}
            className="relative flex h-8 w-8 items-center justify-center rounded-md border border-zinc-700 bg-[#151515] text-zinc-300 transition-all duration-300 hover:scale-105 hover:border-lime-400 hover:bg-zinc-900 hover:text-lime-400"
          >
            <ShoppingCart
              className="h-4 w-4"
              strokeWidth={2}
            />

            {/* Cart Count Badge */}
            {inCart.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-[18px] min-w-[18px] items-center justify-center rounded-full border-2 border-[#0B0B0B] bg-lime-400 px-1 text-[9px] font-bold leading-none text-black">
                {inCart.length}
              </span>
            )}
          </button>

          {/* Logout */}
          <button
            onClick={() => {
              setLoggedIn(null);
              navigate("/");
            }}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-700 bg-[#151515] text-zinc-300 transition-all duration-300 hover:scale-105 hover:border-red-500 hover:bg-zinc-900 hover:text-red-400"
          >
            <LogOut
              className="h-4 w-4"
              strokeWidth={2}
            />
          </button>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;