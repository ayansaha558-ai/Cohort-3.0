import React from "react";
import { Search } from "lucide-react";
import { useProductApi } from "../hooks/productHooks";

const Filters = ({filterProducts}) => {

  return (
    <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg md:flex-row md:items-center md:justify-between">
      {/* Search */}
      <div className="relative w-full md:flex-1">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
        />

        <input
        onChange={(e)=>filterProducts(e.target.value)}
          type="text"
          placeholder="Search products..."
          className="w-full rounded-xl border border-zinc-700 bg-zinc-950 py-3 pl-11 pr-4 text-sm text-white placeholder:text-zinc-500 outline-none transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
        />
      </div>

      {/* Category */}
      <div className="w-full md:w-64">
        <select className="w-full cursor-pointer rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20">
          <option value="">Select Category</option>
          <option value="groceries">Groceries</option>
          <option value="beauty">Beauty</option>
          <option value="furniture">Furniture</option>
        </select>
      </div>

      {/* Search Button */}
      <button className="rounded-xl bg-violet-600 px-8 py-3 font-medium text-white transition-all duration-300 hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-600/30 active:scale-95">
        Search
      </button>
    </div>
  );
};

export default Filters;
