import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    dispatch(setQuery(text));

    console.log("Form Submitted:", text);
  };

  return (
    <div className="w-full px-6 pt-4">
      <form
        onSubmit={submitHandler}
        className="mx-auto flex max-w-3xl items-center gap-4"
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Search anything..."
          className="w-full rounded-xl border border-gray-700 bg-gray-900 px-6 py-3.5 text-base text-white outline-none placeholder:text-gray-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all shadow-inner"
        />

        <button
          type="submit"
          className="cursor-pointer rounded-xl bg-amber-400 px-7 py-3.5 text-base font-bold text-gray-950 shadow-md transition hover:bg-amber-300"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
