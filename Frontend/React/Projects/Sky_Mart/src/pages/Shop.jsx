import React, { useState, useRef, useEffect, useContext } from "react";
import ProductCard from "../components/ProductCard";
import { MyStore } from "../context/MyContext";

const Shop = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedSort, setSelectedSort] = useState("Featured");

  const [search, setSearch] = useState("");

  let { product } = useContext(MyStore);

  const categoryRef = useRef(null);
  const sortRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (categoryRef.current && !categoryRef.current.contains(e.target)) {
        setCategoryOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setSortOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const categories = [
    "All Categories",
    "Electronics",
    "Clothing",
    "Furniture",
    "Home",
    "Sports",
    "Accessories",
  ];

  const sortOptions = [
    "Featured",
    "Price: Low to High",
    "Price: High to Low",
    "Top Rated",
    "Lowest Rated",
  ];

  let filteredProducts = [...product];

  filteredProducts = filteredProducts.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  if (selectedCategory != "All Categories") {
    filteredProducts = filteredProducts.filter(
      (item) => item.category === selectedCategory,
    );
  }

  switch (selectedSort) {
    case "Price: Low to High":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;

    case "Price: High to Low":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;

    case "Top Rated":
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;

    case "Lowest Rated":
      filteredProducts.sort((a, b) => a.rating - b.rating);
      break;

    default:
      break;
  }

  const isFilterApplied =
    search !== "" ||
    selectedCategory !== "All Categories" ||
    selectedSort !== "Featured";

  const clearAllFilters = () => {
    setSearch("");
    setSelectedCategory("All Categories");
    setSelectedSort("Featured");
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white tracking-tight">
            All Products
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            {filteredProducts.length} products found
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-3 bg-[#141414] border border-gray-700 rounded-2xl p-3">
          {/* Search */}
          <div className="flex-1 relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-emerald-400 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <input
              type="text"
              value={search}
              onChange={(item) => setSearch(item.target.value)}
              placeholder="Search products..."
              className="w-full bg-[#1a1a1a] text-white placeholder-gray-500 pl-11 pr-4 py-3 rounded-xl border border-gray-800 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/20 text-sm transition-all duration-200"
            />
          </div>

          {/* Category Dropdown */}
          <div className="relative" ref={categoryRef}>
            <button
              onClick={() => {
                setCategoryOpen(!categoryOpen);
                setSortOpen(false);
              }}
              className={`flex items-center gap-2 bg-[#1a1a1a] text-white px-5 py-3 rounded-xl border text-sm transition-all duration-200 ${
                categoryOpen
                  ? "border-emerald-500/50 bg-[#1c1c1c]"
                  : "border-gray-800 hover:border-emerald-500/50 hover:bg-[#1c1c1c]"
              } ${selectedCategory !== "All Categories" ? "border-emerald-500/40 bg-emerald-500/5" : ""}`}
            >
              <span>{selectedCategory}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`text-gray-400 transition-all duration-200 ${categoryOpen ? "text-emerald-400 rotate-180" : "group-hover:text-emerald-400"}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {categoryOpen && (
              <div className="absolute top-full mt-2 left-0 w-52 bg-[#141414] border border-gray-700 rounded-xl overflow-hidden shadow-2xl shadow-black/50 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="py-1.5">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setCategoryOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-all duration-150 ${
                        selectedCategory === cat
                          ? "text-emerald-400 bg-emerald-500/10 border-l-2 border-emerald-500"
                          : "text-gray-300 hover:text-white hover:bg-[#1c1c1c] hover:border-l-2 hover:border-emerald-500/60 border-l-2 border-transparent"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="relative" ref={sortRef}>
            <button
              onClick={() => {
                setSortOpen(!sortOpen);
                setCategoryOpen(false);
              }}
              className={`flex items-center gap-2 bg-[#1a1a1a] text-white px-5 py-3 rounded-xl border text-sm transition-all duration-200 ${
                sortOpen
                  ? "border-emerald-500/50 bg-[#1c1c1c]"
                  : "border-gray-800 hover:border-emerald-500/50 hover:bg-[#1c1c1c]"
              } ${selectedSort !== "Featured" ? "border-emerald-500/40 bg-emerald-500/5" : ""}`}
            >
              <span>{selectedSort}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`text-gray-400 transition-all duration-200 ${sortOpen ? "text-emerald-400 rotate-180" : ""}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {sortOpen && (
              <div className="absolute top-full mt-2 right-0 w-52 bg-[#141414] border border-gray-700 rounded-xl overflow-hidden shadow-2xl shadow-black/50 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="py-1.5">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setSelectedSort(opt);
                        setSortOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-all duration-150 ${
                        selectedSort === opt
                          ? "text-emerald-400 bg-emerald-500/10 border-l-2 border-emerald-500"
                          : "text-gray-300 hover:text-white hover:bg-[#1c1c1c] hover:border-l-2 hover:border-emerald-500/60 border-l-2 border-transparent"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Clear Filters - Red Interface */}
          {isFilterApplied && (
            <button
              onClick={clearAllFilters}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 hover:border-red-500/50 text-red-400 hover:text-red-300 transition-all duration-200 text-sm font-medium group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:rotate-90 transition-transform duration-200"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span>Clear All</span>
            </button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {filteredProducts.map((item, index) => (
          <ProductCard key={item.id} product={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
