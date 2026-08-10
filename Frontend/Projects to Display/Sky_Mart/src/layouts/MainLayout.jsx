import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Cart from "../pages/Cart";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <ScrollToTop />

      <div className="sticky top-0 z-50 bg-[#0b0b0b]/90 backdrop-blur-md border-b border-zinc-800">
        <NavBar />
      </div>

      <main>
        <Outlet />
      </main>
      <div>
        <Cart />
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
