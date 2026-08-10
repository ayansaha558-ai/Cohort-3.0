import React from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Category from "../components/Category";
import TrustBar from "../components/TrustBar";
import ProductHighlights from "../components/ProductHighlights";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0d0e0e] pt-7">
      <Hero />
      <Stats />
      <Category />
      <ProductHighlights />
      <TrustBar />
    </div>
  );
};

export default Home;
