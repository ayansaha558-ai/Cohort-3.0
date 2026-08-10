import {
  Box,
  ShoppingCart,
  Home,
  ShoppingBag,
  Info,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  let navigate = useNavigate();

  const navLinks = [
    { to: "/main", label: "Home", icon: Home },
    { to: "/main/productsPage", label: "Shop", icon: ShoppingBag },
    { to: "/main/aboutPage", label: "About", icon: Info },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#D7DEE7] bg-[#EEF2F6]/95 backdrop-blur-xl">
      <style>{`
        @keyframes navPop {
          0% { transform: scale(1) rotate(0deg); }
          40% { transform: scale(1.15) rotate(-8deg); }
          100% { transform: scale(1.05) rotate(0deg); }
        }
        @keyframes navWiggle {
          0%, 100% { transform: rotate(0deg) translateY(0); }
          25% { transform: rotate(-10deg) translateY(-2px); }
          75% { transform: rotate(10deg) translateY(-2px); }
        }
        @keyframes navShimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes navSlideIn {
          0% { opacity: 0; transform: translateX(-12px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .nav-link-item:hover .nav-link-icon {
          animation: navWiggle 0.5s ease-in-out;
        }
        .nav-link-item::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 0.5rem;
          background: linear-gradient(135deg, rgba(15,118,110,0.14), rgba(15,118,110,0.06));
          transform: scale(0.85);
          opacity: 0;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease;
          z-index: -1;
        }
        .nav-link-item:hover::before {
          transform: scale(1);
          opacity: 1;
        }
        .nav-underline {
          position: absolute;
          left: 50%;
          bottom: 2px;
          height: 2px;
          width: 0%;
          background: linear-gradient(90deg, #0f766e, #134e4a, #0f766e);
          background-size: 200% 100%;
          border-radius: 999px;
          transform: translateX(-50%);
          transition: width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .nav-link-item:hover .nav-underline {
          width: 70%;
          animation: navShimmer 1.2s linear infinite;
        }
        .nav-link-item.active .nav-underline {
          width: 70%;
          animation: navShimmer 1.2s linear infinite;
        }
        .icon-btn {
          position: relative;
          overflow: hidden;
        }
        .icon-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 0.5rem;
          background: radial-gradient(circle, rgba(15,118,110,0.22) 0%, transparent 70%);
          transform: scale(0);
          transition: transform 0.4s ease;
        }
        .icon-btn:hover::after {
          transform: scale(1.6);
        }
        .icon-btn:hover svg {
          animation: navPop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .icon-btn:active svg {
          transform: scale(0.85) rotate(0deg);
        }
        .logout-btn {
          position: relative;
          overflow: hidden;
          background-size: 200% 100%;
          background-image: linear-gradient(90deg, #134e4a 0%, #0f766e 50%, #134e4a 100%);
          transition: background-position 0.5s ease, transform 0.15s ease, box-shadow 0.3s ease;
        }
        .logout-btn:hover {
          background-position: 100% 0;
          box-shadow: 0 6px 20px -4px rgba(19,78,74,0.5);
        }
        .logout-btn:hover .logout-icon {
          transform: translateX(3px) rotate(-8deg);
        }
        .logout-btn:active {
          transform: scale(0.96);
        }
        .logout-icon {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .logo-box {
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
        }
        .logo-group:hover .logo-box {
          transform: rotate(-14deg) scale(1.1);
          box-shadow: 0 4px 14px -2px rgba(19,78,74,0.45);
        }
        .logo-group:hover .logo-text {
          letter-spacing: 0.02em;
        }
        .logo-text {
          transition: letter-spacing 0.3s ease, color 0.3s ease;
        }
        .mobile-toggle {
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.2s ease;
        }
        .mobile-toggle:hover {
          transform: rotate(90deg);
        }
        .mobile-link {
          position: relative;
          overflow: hidden;
        }
        .mobile-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: #0f766e;
          transform: scaleY(0);
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-origin: bottom;
        }
        .mobile-link:hover::before {
          transform: scaleY(1);
        }
        .mobile-link:hover {
          padding-left: 1.1rem;
        }
        .mobile-link:hover .mobile-link-icon {
          transform: scale(1.2) rotate(-6deg);
        }
        .mobile-link-icon {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .mobile-menu-open .mobile-link {
          animation: navSlideIn 0.4s ease backwards;
        }
        .mobile-menu-open .mobile-link:nth-child(1) { animation-delay: 0.05s; }
        .mobile-menu-open .mobile-link:nth-child(2) { animation-delay: 0.1s; }
        .mobile-menu-open .mobile-link:nth-child(3) { animation-delay: 0.15s; }
      `}</style>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="logo-group flex items-center gap-2.5 cursor-pointer">
          <div className="logo-box flex h-8 w-8 items-center justify-center rounded-lg bg-[#134E4A] shadow-sm">
            <Box className="h-4.5 w-4.5 text-[#EEF2F6]" strokeWidth={2} />
          </div>
          <span className="logo-text text-lg font-semibold tracking-tight text-[#1E2A3A]">
            Logo
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/main"}
              className={({ isActive }) =>
                `nav-link-item group relative flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "active text-[#1E2A3A]"
                    : "text-[#5B6B7C] hover:text-[#1E2A3A]"
                }`
              }
            >
              <link.icon className="nav-link-icon h-4 w-4" />
              {link.label}
              <span className="nav-underline" />
            </NavLink>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className=" hidden items-center gap-1 md:flex">
          <button
            onClick={() => navigate("/main/cartPage")}
            className="cursor-pointer icon-btn rounded-lg p-2 text-[#7A8CA0] transition-colors duration-200 hover:text-[#134E4A]"
          >
            <ShoppingCart className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            onClick={() => navigate("/main/orderPage")}
            className="cursor-pointer icon-btn rounded-lg p-2 text-[#7A8CA0] transition-colors duration-200 hover:text-[#134E4A]"
          >
            <Box className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <div className="mx-2 h-4 w-px bg-[#D7DEE7]" />
          <button className="cursor-pointer logout-btn flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-[#EEF2F6] shadow-sm">
            <LogOut className=" logout-icon h-4 w-4" strokeWidth={1.5} />
            Logout
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle rounded-lg p-2 text-[#5B6B7C] hover:bg-[#E2E8ED] md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-[#D7DEE7] bg-[#EEF2F6] transition-all duration-300 ease-in-out md:hidden ${
          mobileMenuOpen
            ? "mobile-menu-open max-h-80 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 px-4 py-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/main"}
              className={({ isActive }) =>
                `mobile-link flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#E2E8ED] text-[#1E2A3A]"
                    : "text-[#5B6B7C] hover:bg-[#E2E8ED] hover:text-[#1E2A3A]"
                }`
              }
            >
              <link.icon
                className="mobile-link-icon h-4 w-4"
                strokeWidth={1.5}
              />
              {link.label}
            </NavLink>
          ))}
          <div className="mt-3 flex items-center gap-2 border-t border-[#D7DEE7] pt-3">
            <button className="icon-btn rounded-lg p-2.5 text-[#7A8CA0] hover:text-[#134E4A]">
              <ShoppingCart className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button className="icon-btn rounded-lg p-2.5 text-[#7A8CA0] hover:text-[#134E4A]">
              <Box className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button className="logout-btn ml-auto flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-[#EEF2F6]">
              <LogOut className="logout-icon h-4 w-4" strokeWidth={1.5} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;