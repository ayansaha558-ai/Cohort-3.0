import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="group relative w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-2xl hover:shadow-black/30">

      {/* Image Section */}
      <div className="relative h-56 overflow-hidden bg-zinc-800/50 p-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />

        {/* Discount */}
        <span className="absolute left-3 top-3 rounded-full bg-violet-500 px-2.5 py-1 text-xs font-semibold text-white shadow-lg">
          -{product.discountPercentage.toFixed(0)}%
        </span>

        {/* Stock */}
        <span className="absolute right-3 top-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400 backdrop-blur-md">
          {product.availabilityStatus}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Category + Brand */}
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wider text-violet-400">
            {product.category}
          </span>

          <span className="text-xs text-zinc-500">
            {product.brand}
          </span>
        </div>

        {/* Title */}
        <h2 className="mb-2 truncate text-lg font-semibold text-zinc-100 transition-colors duration-300 group-hover:text-violet-400">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mb-4 line-clamp-2 min-h-10 text-sm leading-5 text-zinc-500">
          {product.description}
        </p>

        {/* Rating + Reviews */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4 text-yellow-400"
            >
              <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.47L12 17.32l-5.8 3.05 1.11-6.47-4.7-4.58 6.49-.94L12 2.5z" />
            </svg>

            <span className="text-sm font-semibold text-zinc-200">
              {product.rating}
            </span>

            <span className="text-xs text-zinc-500">
              ({product.reviews.length} reviews)
            </span>
          </div>

          <span className="text-xs text-zinc-500">
            {product.stock} left
          </span>
        </div>

        {/* Divider */}
        <div className="mb-4 h-px bg-zinc-800" />

        {/* Price + Cart */}
        <div className="flex items-center justify-between gap-4">

          <div>
            <p className="text-xs text-zinc-500">Price</p>

            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-white">
                ${product.price}
              </span>

              <span className="text-xs text-zinc-500">
                incl. taxes
              </span>
            </div>
          </div>

          {/* Add to Cart - UI only */}
          <button
            type="button"
            className="flex cursor-pointer items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/20 active:translate-y-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 2.25l1.5 1.5m0 0L6.75 15h10.5l3-8.25H5.25M8.25 20.25a.75.75 0 100-1.5.75.75 0 000 1.5zm9 0a.75.75 0 100-1.5.75.75 0 000 1.5z"
              />
            </svg>

            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;