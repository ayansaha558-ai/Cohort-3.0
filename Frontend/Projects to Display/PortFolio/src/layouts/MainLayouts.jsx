import React, { useState } from "react";
import { Outlet } from "react-router";

import Loader from "../components/Loader";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import BandCard from "../components/BandCard";
import Star from "../components/Star";
import About from "../components/About";
import FrontendDev from "../components/FrontendDev";
import Showcase from "../components/Showcase";

const MainLayouts = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <Loader
          onComplete={() => {
            setLoading(false);
          }}
        />
      )}

      {!loading && (
        <>
          <NavBar />
          <main>
            {/* Remove duplicate NavBar */}
            <Hero />
            <FrontendDev/>
            <Showcase/>
          </main>
        </>
      )}
    </>
  );
};

export default MainLayouts;
