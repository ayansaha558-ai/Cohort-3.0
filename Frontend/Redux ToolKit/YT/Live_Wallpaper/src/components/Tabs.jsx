import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos", "gifs"];

  const colors = [
    "bg-blue-600 hover:bg-blue-500",
    "bg-purple-600 hover:bg-purple-500",
    "bg-pink-600 hover:bg-pink-500",
  ];

  const dispatch = useDispatch();

  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex items-center justify-center gap-4 px-6 pt-2">
      {tabs.map(function (elem, ind) {
        return (
          <button
            key={elem}
            onClick={() => dispatch(setActiveTabs(elem))}
            className={`${
              activeTab === elem
                ? "bg-amber-400 text-gray-950 font-bold shadow-md"
                : `${colors[ind]} text-white`
            } rounded-lg px-6 py-2.5 font-medium uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 cursor-pointer`}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;