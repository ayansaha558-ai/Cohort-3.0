import React from "react";
import type { Product } from "../types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Image */}
      <div className="relative flex h-64 items-center justify-center bg-zinc-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs font-medium capitalize text-white">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="mb-2 line-clamp-2 text-lg font-semibold text-zinc-900">
          {product.title}
        </h2>

        <p className="mb-4 line-clamp-2 text-sm text-zinc-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mb-4 flex items-center gap-2">
          <span className="text-yellow-500">★</span>
          <span className="font-medium text-zinc-800">
            {product.rating.rate}
          </span>
          <span className="text-sm text-zinc-400">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-zinc-900">
            ${product.price}
          </span>

          <button className="rounded-xl bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 active:scale-95">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;