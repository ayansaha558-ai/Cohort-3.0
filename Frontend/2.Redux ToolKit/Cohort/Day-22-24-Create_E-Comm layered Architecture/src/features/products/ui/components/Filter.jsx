import React from "react";
import { Search, ChevronDown } from "lucide-react";
import {
  useAllCategories,
  useProductBtCategory,
} from "../../hooks/useProductsHooks";

const Filter = ({ search, setSearch, setCategory, category }) => {
  let { data, isPending, error } = useAllCategories();

  if (isPending) {
    return (
      <div className="flex flex-col md:flex-row items-center gap-3 bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-lg shadow-zinc-200/50 border border-zinc-200/60">
        <div className="w-full h-10 bg-zinc-100 animate-pulse rounded-lg"></div>
        <div className="w-full md:w-56 h-10 bg-zinc-100 animate-pulse rounded-lg"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row items-center gap-3 bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-lg shadow-zinc-200/50 border border-zinc-200/60">
      {/* Search */}
      <div className="w-full md:flex-1 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search products..."
          className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-zinc-200 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all text-sm bg-zinc-50/50"
        />
      </div>

      {/* Category */}
      <div className="w-full md:w-56 relative">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all bg-zinc-50/50 text-sm appearance-none cursor-pointer text-zinc-700"
        >
          <option value="">All Categories</option>
          {data?.map((item) => (
            <option value={item.slug} key={item.slug}>
              {item.name}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
      </div>
    </div>
  );
};

export default Filter;
