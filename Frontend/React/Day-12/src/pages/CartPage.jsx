import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";
import CartCard from "../components/CartCard";

const CartPage = () => {
  const { cartItems } = useContext(MyStore);

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="max-w-7xl mx-auto px-8 py-10">

        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold text-white">
              Shopping Cart
            </h1>

            <p className="text-zinc-400 mt-2">
              Review your selected products before checkout.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4">
            <p className="text-zinc-400 text-sm">
              Total Items
            </p>

            <h2 className="text-3xl font-bold text-white">
              {cartItems.length}
            </h2>
          </div>
        </div>

        <div className="grid gap-5">
          {cartItems.map((item) => (
            <CartCard
              key={item.id}
              cart={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;