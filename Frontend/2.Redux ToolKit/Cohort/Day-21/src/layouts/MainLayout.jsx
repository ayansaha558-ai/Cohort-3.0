import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <main className="min-h-[calc(100vh-72px)] bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900/80">
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;