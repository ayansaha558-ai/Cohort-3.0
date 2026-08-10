import React, { useState } from "react";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

const App = () => {
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
            <Hero />
          </main>
        </>
      )}
    </>
  );
};

export default App;
