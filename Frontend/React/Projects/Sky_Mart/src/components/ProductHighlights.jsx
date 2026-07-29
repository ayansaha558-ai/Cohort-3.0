import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Star,
  Sparkles,
  ArrowRight,
  ShoppingBag,
  Check,
  Headphones,
  Watch,
  Backpack,
  Glasses,
  Camera,
  Laptop,
  Coffee,
  Lamp,
  Crown,
  Zap,
  TrendingUp,
  Gift,
  Rocket,
} from "lucide-react";
import { MyStore } from "../context/MyContext";
import { useNavigate } from "react-router";

/* ---------- data ---------- */

const TOP_RATED = [
  {
    id: "tr-1",
    rank: 1,
    Icon: Headphones,
    name: "Wireless ANC Headphones",
    rating: 5,
    reviews: 312,
    price: "$129.99",
    priceWas: "$159.99",
  },
  {
    id: "tr-2",
    rank: 2,
    Icon: Watch,
    name: "Smart Fitness Watch",
    rating: 4,
    reviews: 158,
    price: "$199.99",
  },
  {
    id: "tr-3",
    rank: 3,
    Icon: Backpack,
    name: "Weatherproof Backpack",
    rating: 5,
    reviews: 201,
    price: "$59.99",
  },
  {
    id: "tr-4",
    rank: 4,
    Icon: Glasses,
    name: "Polarized Sunglasses",
    rating: 4,
    reviews: 97,
    price: "$39.99",
  },
  {
    id: "tr-5",
    rank: 5,
    Icon: Camera,
    name: "4K Mini Action Camera",
    rating: 5,
    reviews: 64,
    price: "$249.99",
  },
];

const PREMIUM_PICKS = [
  {
    id: "pp-1",
    Icon: Headphones,
    name: "Earbuds Pro, Noise Cancelling",
    tag: "Bestseller",
    price: "$179.99",
  },
  {
    id: "pp-2",
    Icon: Laptop,
    name: "Leather Laptop Sleeve",
    tag: "New",
    price: "$69.99",
  },
  {
    id: "pp-3",
    Icon: Coffee,
    name: "Portable Espresso Maker",
    tag: "Trending",
    price: "$89.99",
  },
  {
    id: "pp-4",
    Icon: Lamp,
    name: "Smart LED Desk Lamp",
    tag: "New",
    price: "$49.99",
  },
  {
    id: "pp-5",
    Icon: Watch,
    name: "Titanium Sport Watch",
    tag: "Bestseller",
    price: "$219.99",
  },
];

/* ---------- hooks ---------- */

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

/* ---------- small pieces ---------- */

const Stars = ({ rating }) => (
  <div className="flex items-center gap-[1px]">
    {[0, 1, 2, 3, 4].map((i) => (
      <Star
        key={i}
        size={11}
        className={
          i < rating
            ? "fill-yellow-400 text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.3)]"
            : "fill-zinc-700 text-zinc-700"
        }
      />
    ))}
  </div>
);

const AddButton = ({ added, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative flex h-10 w-10 flex-none items-center justify-center rounded-xl border transition-all duration-300
        ${
          added
            ? "scale-110 border-emerald-400 bg-emerald-400 text-black shadow-[0_0_30px_-8px_rgba(52,211,153,0.6)]"
            : "border-lime-400/20 bg-lime-400/5 text-lime-400 hover:scale-105 hover:border-lime-400 hover:bg-lime-400 hover:text-black hover:shadow-[0_0_30px_-8px_rgba(163,230,53,0.3)]"
        }`}
    >
      {!added && isHovered && (
        <span className="absolute inset-0 animate-[ripple_1s_ease-out_infinite] rounded-xl border border-lime-400/30" />
      )}
      {added ? (
        <Check
          size={17}
          strokeWidth={2.5}
          className="animate-[pop_0.3s_ease-out]"
        />
      ) : (
        <ShoppingBag size={17} strokeWidth={1.8} />
      )}
    </button>
  );
};

const ProductRow = ({ item, index, showRank, added, onAdd }) => {
  const [ref, visible] = useReveal();
  const { title, thumbnail, price, rating, reviews } = item;

  let navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/main/detail/${item.id}`)}
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`group relative flex min-h-[90px] items-center justify-between overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-950/40 px-5 transition-all duration-500 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-800/50 hover:shadow-xl hover:shadow-lime-400/5
        ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
    >
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-lime-400/0 via-lime-400/8 to-lime-400/0 transition-transform duration-700 group-hover:translate-x-full" />
      <div className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-lime-400/0 transition-all duration-300 group-hover:bg-lime-400/30 group-hover:shadow-[0_0_10px_rgba(163,230,53,0.5)]" />

      <div className="relative flex items-center gap-4">
        <div className="relative flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-lime-400/10 to-lime-500/5 text-lime-400 transition-all duration-300 group-hover:from-lime-400/20 group-hover:to-lime-500/10 group-hover:shadow-[0_0_30px_-12px_rgba(163,230,53,0.2)]">
          {showRank && (
            <span className="absolute -left-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-[10px] font-bold text-lime-400 shadow-lg">
              {index + 1}
            </span>
          )}
          <img
            src={thumbnail}
            alt={title}
            className="h-full w-full rounded-xl object-contain p-1"
          />
          <span className="absolute inset-0 rounded-xl bg-lime-400/0 transition-all duration-500 group-hover:bg-lime-400/5" />
        </div>

        <div>
          <h3 className="text-sm font-semibold text-zinc-200 transition-all duration-300 group-hover:text-white group-hover:tracking-wide">
            {title}
          </h3>
        </div>
      </div>

      <AddButton added={added} onClick={onAdd} />
    </div>
  );
};

const Panel = ({
  eyebrow,
  title,
  HeaderIcon,
  items,
  showRank,
  addedMap,
  onAdd,
  accentColor = "lime",
  seeAllPath
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const colorMap = {
    lime: "from-lime-400/0 via-lime-400/5 to-lime-400/0",
    yellow: "from-yellow-400/0 via-yellow-400/5 to-yellow-400/0",
  };

  let navigate = useNavigate();

  return (
    <div
      className="group relative rounded-[28px] border border-zinc-800/40 bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 p-6 backdrop-blur-sm transition-all duration-500 hover:border-zinc-700 hover:shadow-2xl hover:shadow-lime-400/5 md:p-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute -inset-px rounded-[28px] bg-gradient-to-r ${colorMap[accentColor]} opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px]">
        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-lime-400/0 blur-3xl transition-all duration-1000 group-hover:bg-lime-400/5" />
        <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-yellow-400/0 blur-3xl transition-all duration-1000 delay-300 group-hover:bg-yellow-400/5" />
      </div>

      <div className="relative">
        <div className="mb-7 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 animate-ping rounded-xl bg-lime-400/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-lime-400/20 to-lime-500/10 shadow-[0_0_30px_-12px_rgba(163,230,53,0.15)]">
                <HeaderIcon size={21} className="text-lime-400" />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight text-white transition-all duration-300 group-hover:tracking-wide md:text-2xl">
                {title}
              </h2>
              <p className="mt-0.5 flex items-center gap-1 text-xs text-zinc-500">
                <span className="inline-block h-1 w-1 rounded-full bg-lime-400/60" />
                {eyebrow}
              </p>
            </div>
          </div>

          <button onClick={() => navigate(seeAllPath)} className="group/btn flex items-center gap-1.5 text-sm font-semibold text-lime-400 transition-all duration-300 hover:text-lime-300">
            <span className="relative">
              See all
              <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-lime-400 transition-all duration-300 group-hover/btn:w-full" />
            </span>
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </button>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <ProductRow
              key={item.id}
              item={item}
              index={i}
              showRank={showRank}
              added={!!addedMap[item.id]}
              onAdd={() => onAdd(item.id)}
            />
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-zinc-800/50 pt-4 text-[11px] text-zinc-600">
          <span className="flex items-center gap-1.5">
            <Crown size={12} className="text-yellow-400/60" />
            <span>Premium selection</span>
          </span>
          <span className="flex items-center gap-1.5">
            <TrendingUp size={12} className="text-emerald-400/60" />
            <span>+{Math.floor(Math.random() * 20 + 10)}% this week</span>
          </span>
        </div>
      </div>
    </div>
  );
};

/* ---------- main component ---------- */

const ProductHighlights = () => {
  const [addedMap, setAddedMap] = useState({});
  const [sectionRef, sectionVisible] = useReveal();

  let { product, setInCart, setIscartOpen } = useContext(MyStore);

  const handleAdd = (id) => {
    if (addedMap[id]) return;
    setAddedMap((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setAddedMap((prev) => ({ ...prev, [id]: false }));
    }, 1600);

    const selectedProduct = product.find((item) => item.id === id);

    setInCart((prev) => [
      ...prev,
      {
        ...selectedProduct,
        quantity: 1,
      },
    ]);
    setIscartOpen(true);
  };

  let topRated = [...product].sort((a, b) => b.rating - a.rating).slice(0, 5);

  let premiumProducts = [...product]
    .sort((a, b) => b.price - a.price)
    .slice(0, 5);

  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-12 md:px-8 lg:px-16">
      {/* Background matching the image style - dark with subtle grid */}
      <div className="pointer-events-none absolute inset-0">
        {/* Base dark color matching image */}
        <div className="absolute inset-0 bg-[#0d0e0e]" />
        
        {/* Subtle grid pattern like in the image */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Very subtle ambient glow */}
        <div className="absolute -top-1/2 -left-1/2 h-full w-full bg-lime-500/5 blur-[120px]" />
        <div className="absolute -bottom-1/2 -right-1/2 h-full w-full bg-yellow-500/5 blur-[120px] delay-1000" />
        
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
      </div>

      <div
        ref={sectionRef}
        className={`relative mx-auto max-w-[1600px] transition-all duration-1000 ${
          sectionVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        {/* Section header with animated elements */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800/60 bg-zinc-900/50 px-5 py-2 backdrop-blur-sm">
            <Rocket size={14} className="text-lime-400 animate-bounce" />
            <span className="text-xs font-medium uppercase tracking-wider text-zinc-400">
              Curated Collection
            </span>
            <Gift size={14} className="text-yellow-400" />
          </div>

          <h1 className="mt-5 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
            Product{" "}
            <span className="bg-gradient-to-r from-lime-400 to-yellow-400 bg-clip-text text-transparent">
              Highlights
            </span>
          </h1>

          <div className="mx-auto mt-3 flex items-center justify-center gap-3">
            <div className="h-0.5 w-12 rounded-full bg-gradient-to-r from-transparent to-lime-400" />
            <Zap size={16} className="text-lime-400" />
            <div className="h-0.5 w-12 rounded-full bg-gradient-to-l from-transparent to-lime-400" />
          </div>

          <p className="mt-4 text-sm text-zinc-500">
            Discover our most loved and premium products
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Panel
            eyebrow="Loved by our customers"
            title="Top Rated"
            HeaderIcon={Star}
            items={topRated}
            showRank
            addedMap={addedMap}
            onAdd={handleAdd}
            accentColor="yellow"
            seeAllPath="/main/shop?rating=5"
          />
          <Panel
            eyebrow="Curated premium collection"
            title="Premium Picks"
            HeaderIcon={Sparkles}
            items={premiumProducts}
            showRank={false}
            addedMap={addedMap}
            onAdd={handleAdd}
            accentColor="lime"
            seeAllPath={"/main/shop?premiumPicks=Price: High to Low"}
          />
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        @keyframes pop {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          70% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
      `}</style>
    </section>
  );
};

export default ProductHighlights;