import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const ProductList = ({ product, isInCart }) => {
  let {
    cartItems,
    setCartItems,
    setToggle,
    setCount,
    count,
    decrementQuantity,
    incrementQuantity,
  } = useContext(MyStore);

  let clickChange = () => {
    setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
  };

  console.log(count);

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-violet-500 hover:-translate-y-1 transition-all duration-300">
      {/* Product Image */}
      <div className="bg-zinc-950 h-44 flex items-center justify-center p-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-32 object-contain transition duration-300 hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* Category & Price */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] px-2 py-1 rounded-full bg-violet-600/20 text-violet-400 capitalize">
            {product.category}
          </span>

          <span className="text-xl font-bold text-emerald-400">
            ${product.price}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-white line-clamp-1">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-zinc-400 mt-2 line-clamp-2">
          {product.description}
        </p>

        {/* Rating & Stock */}
        <div className="flex justify-between items-center mt-4 text-sm">
          <div className="flex items-center gap-1">
            <span>⭐</span>
            <span className="text-zinc-300">{product.rating}</span>
          </div>

          <div className="text-zinc-300">
            Stock: <span className="text-white">{product.stock}</span>
          </div>
        </div>

        {/* Brand */}
        <div className="mt-2 text-sm text-zinc-400">
          Brand: <span className="text-zinc-200">{product.brand || "N/A"}</span>
        </div>

        {/* Button */}
        {isInCart ? (
          <div className="flex items-center justify-between mt-5 bg-zinc-950 border border-zinc-800 rounded-xl p-1">
            <button
              onClick={()=>decrementQuantity(product.id)}
              className="w-10 h-10 flex items-center justify-center rounded-lg text-xl text-white hover:bg-zinc-800 transition"
            >
              −
            </button>

            <span className="text-white font-semibold text-lg">
              {isInCart.quantity}
            </span>

            <button
              onClick={()=>incrementQuantity(product.id)}
              className="w-10 h-10 flex items-center justify-center rounded-lg text-xl text-white hover:bg-violet-600 transition"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={clickChange}
            className="w-full mt-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-medium transition"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductList;
