import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const CartCard = ({ cart }) => {

  let {setCount}=useContext(MyStore);

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-violet-500 transition-all duration-300">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-5">

          <div className="w-28 h-28 bg-zinc-950 rounded-xl flex items-center justify-center">
            <img
              src={cart.thumbnail}
              alt={cart.title}
              className="w-20 h-20 object-contain"
            />
          </div>

          <div>

            <span className="text-xs bg-violet-600/20 text-violet-400 px-3 py-1 rounded-full capitalize">
              {cart.category}
            </span>

            <h2 className="text-xl text-white font-semibold mt-3">
              {cart.title}
            </h2>

            <p className="text-zinc-400 text-sm mt-2 max-w-lg">
              {cart.description}
            </p>

            <div className="flex gap-6 mt-4">

              <p className="text-zinc-400 text-sm">
                Qty :
                <span className="text-white ml-2">
                  {cart.quantity}
                </span>
              </p>

              <p className="text-zinc-400 text-sm">
                Rating :
                <span className="text-white ml-2">
                  ⭐ {cart.rating}
                </span>
              </p>

            </div>

          </div>

        </div>

        <div className="text-right">

          <h2 className="text-3xl font-bold text-emerald-400">
            ${cart.price}
          </h2>

          <button  className="mt-6 px-5 py-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white transition">
            Remove
          </button>

        </div>

      </div>
    </div>
  );
};

export default CartCard;