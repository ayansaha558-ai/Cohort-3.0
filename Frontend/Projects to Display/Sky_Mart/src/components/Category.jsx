import React, { useContext } from "react";
import {
  Laptop,
  Shirt,
  Sofa,
  Home,
  Dumbbell,
  Watch,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { MyStore } from "../context/MyContext";
import { useNavigate } from "react-router";

const categories = [
  {
    name: "Electronics",
    icon: Laptop,
    glow: "bg-blue-500/5",
    sparkle: "text-blue-400",
    iconBg: "bg-blue-500/10 group-hover:bg-blue-500/20",
    iconColor: "text-blue-400",
    ring: "border-blue-400/20",
    hoverBorder: "hover:border-blue-400/30",
    line: "from-blue-500/10 to-indigo-600/5",
  },
  {
    name: "Clothing",
    icon: Shirt,
    glow: "bg-rose-500/5",
    sparkle: "text-rose-400",
    iconBg: "bg-rose-500/10 group-hover:bg-rose-500/20",
    iconColor: "text-rose-400",
    ring: "border-rose-400/20",
    hoverBorder: "hover:border-rose-400/30",
    line: "from-rose-500/10 to-pink-600/5",
  },
  {
    name: "Furniture",
    icon: Sofa,
    glow: "bg-amber-500/5",
    sparkle: "text-amber-400",
    iconBg: "bg-amber-500/10 group-hover:bg-amber-500/20",
    iconColor: "text-amber-400",
    ring: "border-amber-400/20",
    hoverBorder: "hover:border-amber-400/30",
    line: "from-amber-500/10 to-orange-600/5",
  },
  {
    name: "Home",
    icon: Home,
    glow: "bg-emerald-500/5",
    sparkle: "text-emerald-400",
    iconBg: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
    iconColor: "text-emerald-400",
    ring: "border-emerald-400/20",
    hoverBorder: "hover:border-emerald-400/30",
    line: "from-emerald-500/10 to-teal-600/5",
  },
  {
    name: "Sports",
    icon: Dumbbell,
    glow: "bg-orange-500/5",
    sparkle: "text-orange-400",
    iconBg: "bg-orange-500/10 group-hover:bg-orange-500/20",
    iconColor: "text-orange-400",
    ring: "border-orange-400/20",
    hoverBorder: "hover:border-orange-400/30",
    line: "from-orange-500/10 to-red-600/5",
  },
  {
    name: "Accessories",
    icon: Watch,
    glow: "bg-purple-500/5",
    sparkle: "text-purple-400",
    iconBg: "bg-purple-500/10 group-hover:bg-purple-500/20",
    iconColor: "text-purple-400",
    ring: "border-purple-400/20",
    hoverBorder: "hover:border-purple-400/30",
    line: "from-purple-500/10 to-violet-600/5",
  },
];

const Category = () => {
  let { product } = useContext(MyStore);

  let navigate=useNavigate();

  return (
    <section className="mx-auto mt-8 w-[92%]">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[22px] font-semibold tracking-[-0.3px] text-white">
          Shop by Category
        </h2>

        <button onClick={()=>navigate("/main/shop")} className="flex items-center gap-1 text-[13px] font-medium text-lime-400 transition-colors hover:text-lime-300">
          View All
          <span className="text-[15px]">→</span>
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => {
          const Icon = category.icon;

          const count = product.filter(
            (item) => item.category === category.name,
          ).length;

          return (
            <div
            onClick={()=>navigate(`/main/shop?category=${category.name}`)}
              key={category.name}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#0d0e0e] p-6 text-center transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-[#0d0e0e] hover:shadow-xl ${category.hoverBorder}`}
            >
              <div
                className={`absolute -right-12 -top-12 h-32 w-32 rounded-full blur-2xl transition-all duration-700 group-hover:scale-150 ${category.glow}`}
              />

              <Sparkles
                size={12}
                className={`absolute right-3 top-3 opacity-0 transition-opacity duration-300 group-hover:opacity-20 ${category.sparkle}`}
              />

              <div
                className={`relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg ${category.iconBg}`}
              >
                <Icon
                  size={32}
                  strokeWidth={1.5}
                  className={category.iconColor}
                />

                <div
                  className={`absolute inset-0 rounded-2xl border-2 opacity-0 transition-all duration-700 group-hover:scale-110 group-hover:animate-ping group-hover:opacity-100 ${category.ring}`}
                />
              </div>

              <h3 className="mt-3 text-base font-semibold text-white transition-colors group-hover:text-zinc-100">
                {category.name}
              </h3>

              <p className="mt-1 text-sm text-zinc-400">{count} items</p>

              <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-zinc-800 bg-[#0d0e0e] opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:border-zinc-700 group-hover:opacity-100">
                <ArrowRight size={16} className={category.iconColor} />
              </div>

              <div
                className={`absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r transition-all duration-700 group-hover:w-full ${category.line}`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Category;
