import React from "react";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import ResultGrid from "./components/ResultGrid";

const App = () => {
  return (
    <div className="flex flex-col gap-4 min-h-screen w-full bg-gray-950 text-amber-50">
      <SearchBar />
      <Tabs />
      <ResultGrid />
    </div>
  );
};

export default App;
