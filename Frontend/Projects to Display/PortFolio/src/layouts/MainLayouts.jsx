import React, { useState } from "react";

import Loader from "../components/Loader";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import FrontendDev from "../components/FrontendDev";
import Showcase from "../components/Showcase";
import Contact from "../components/Contact";

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

          <main className="scroll-smooth">
            
            {/* HOME */}
            <div id="home">
              <Hero />
            </div>

            {/* ABOUT */}
            <div id="about" className="scroll-mt-24">
              <FrontendDev />
            </div>

            {/* SHOWCASE */}
            <div id="showcase" className="scroll-mt-24">
              <Showcase />
            </div>

            {/* CONTACT */}
            <div id="contact" className="scroll-mt-24">
              <Contact />
            </div>

          </main>
        </>
      )}
    </>
  );
};

export default MainLayouts;