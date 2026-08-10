import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Cart = () => {
  const { cartProduct } = useContext(MyStore);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">🛒 My Cart</h1>

        {cartProduct.length === 0 ? (
          <div className="flex justify-center items-center h-[60vh]">
            <h2 className="text-2xl text-zinc-500">
              Your cart is empty 😔
            </h2>
          </div>
        ) : (
          <div className="space-y-6">
            {cartProduct.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-violet-500 transition-all"
              >
                {/* Left */}
                <div className="flex items-center gap-6">
                  <div className="bg-zinc-800 rounded-xl p-4 w-32 h-32 flex justify-center items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-24 object-contain"
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold line-clamp-2">
                      {item.title}
                    </h2>

                    <p className="text-zinc-400 mt-2 line-clamp-2">
                      {item.description}
                    </p>

                    <span className="inline-block mt-3 px-3 py-1 bg-violet-600/20 text-violet-400 rounded-full text-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Right */}
                <div className="text-right">
                  <h2 className="text-3xl font-bold text-violet-400">
                    ${item.price}
                  </h2>

                  <p className="text-yellow-400 mt-2">
                    ⭐ {item.rating.rate}
                  </p>

                  <button className="mt-4 bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg transition">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;