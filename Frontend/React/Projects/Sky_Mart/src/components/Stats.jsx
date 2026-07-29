import React, { useContext } from "react";
import { Box, TrendingUp, Star, Tag } from "lucide-react";
import { MyStore } from "../context/MyContext";
import { useNavigate } from "react-router";

const Stats = () => {
  let { inCart ,product,setIscartOpen} = useContext(MyStore);

  let navigate=useNavigate();

  // Calculate total
  const total =
    inCart?.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;

    //five star rating product
    let fiveStarsRating=product.filter((value)=>
    Math.round(value.rating)===5)

  return (
    <section className="mx-auto mt-6 w-[92%]">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Cart Items */}
        <div onClick={()=>setIscartOpen(true)} className="cursor-pointer flex h-[104px] items-center gap-4 rounded-[18px] border border-zinc-800 bg-[#0d0e0e] px-6 transition-colors duration-200 hover:border-zinc-700">
          <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[13px] bg-lime-400/10">
            <Box size={20} strokeWidth={2} className="text-[#c2ff00]" />
          </div>

          <div>
            <h3 className="text-[20px] font-semibold leading-none text-white">
              {inCart.length}
            </h3>
            <p className="mt-1.5 text-[13px] text-zinc-400">Cart Items</p>
            <p className="mt-0.5 text-[11px] text-zinc-600">In your bag</p>
          </div>
        </div>

        {/* Cart Value */}
        <div onClick={()=>setIscartOpen(true)} className="cursor-pointer flex h-[104px] items-center gap-4 rounded-[18px] border border-zinc-800 bg-[#0d0e0e] px-6 transition-colors duration-200 hover:border-zinc-700">
          <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[13px] bg-lime-400/10">
            <TrendingUp size={20} strokeWidth={2} className="text-[#c2ff00]" />
          </div>

          <div>
            <h3 className="text-[20px] font-semibold leading-none text-white">
              ${total}
            </h3>
            <p className="mt-1.5 text-[13px] text-zinc-400">Cart Value</p>
            <p className="mt-0.5 text-[11px] text-zinc-600">
              Ready to checkout
            </p>
          </div>
        </div>

        {/* Top Products */}
        <div onClick={()=>navigate("/main/shop?rating=5")} className="cursor-pointer flex h-[104px] items-center gap-4 rounded-[18px] border border-zinc-800 bg-[#0d0e0e] px-6 transition-colors duration-200 hover:border-zinc-700">
          <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[13px] bg-lime-400/10">
            <Star size={20} strokeWidth={2} className="text-[#c2ff00]" />
          </div>

          <div>
            <h3 className="text-[20px] font-semibold leading-none text-white">
              {fiveStarsRating.length}
            </h3>
            <p className="mt-1.5 text-[13px] text-zinc-400">Top Products</p>
            <p className="mt-0.5 text-[11px] text-zinc-600">Highly rated</p>
          </div>
        </div>

        {/* Categories */}
        <div onClick={()=>navigate("/main/shop")} className="cursor-pointer flex h-[104px] items-center gap-4 rounded-[18px] border border-zinc-800 bg-[#0d0e0e] px-6 transition-colors duration-200 hover:border-zinc-700">
          <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[13px] bg-lime-400/10">
            <Tag size={20} strokeWidth={2} className="text-[#c2ff00]" />
          </div>

          <div>
            <h3 className="text-[20px] font-semibold leading-none text-white">
              6
            </h3>
            <p className="mt-1.5 text-[13px] text-zinc-400">Categories</p>
            <p className="mt-0.5 text-[11px] text-zinc-600">To explore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
