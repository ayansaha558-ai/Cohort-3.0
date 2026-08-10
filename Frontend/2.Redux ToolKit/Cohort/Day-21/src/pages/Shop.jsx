import React from "react";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";
import { useProductApi } from "../hooks/productHooks";
import Filters from "../components/Filters";

const Shop = () => {
  const { data, isPending, error, filteredProducts, filterProducts } =
    useProductApi();

  if (error) {
    return (
      <div className="text-red-500 text-center py-10">
        Error loading products.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <Filters filterProducts={filterProducts} />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {isPending
            ? Array.from({ length: 8 }).map((_, index) => (
                <ProductSkeleton key={index} />
              ))
            : filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
