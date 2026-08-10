import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 animate-pulse">

      {/* Image Skeleton */}
      <div className="relative h-56 bg-zinc-800/50 p-4">
        <div className="h-full w-full rounded-xl bg-zinc-800" />

        {/* Discount */}
        <div className="absolute left-3 top-3 h-6 w-12 rounded-full bg-zinc-700" />

        {/* Stock */}
        <div className="absolute right-3 top-3 h-6 w-16 rounded-full bg-zinc-700" />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Category + Brand */}
        <div className="mb-3 flex items-center justify-between">
          <div className="h-3 w-16 rounded bg-zinc-700" />
          <div className="h-3 w-14 rounded bg-zinc-700" />
        </div>

        {/* Title */}
        <div className="mb-3 h-5 w-3/4 rounded bg-zinc-700" />

        {/* Description */}
        <div className="mb-4 space-y-2">
          <div className="h-3 w-full rounded bg-zinc-800" />
          <div className="h-3 w-4/5 rounded bg-zinc-800" />
        </div>

        {/* Rating */}
        <div className="mb-4 flex items-center justify-between">
          <div className="h-4 w-24 rounded bg-zinc-700" />
          <div className="h-3 w-12 rounded bg-zinc-700" />
        </div>

        {/* Divider */}
        <div className="mb-4 h-px bg-zinc-800" />

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="h-3 w-10 rounded bg-zinc-700" />
            <div className="h-6 w-20 rounded bg-zinc-700" />
          </div>

          <div className="h-10 w-28 rounded-xl bg-zinc-700" />
        </div>

      </div>
    </div>
  );
};

export default ProductSkeleton;