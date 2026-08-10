import React from "react";
import {
  useAllProduct,
  useProductBtCategory,
} from "../../hooks/useProductsHooks";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";

const ProductsPage = () => {
  let { data, isPending, error, search, setSearch } = useAllProduct();

  let {
    data: productsByCategory,
    setCategory,
    category,
  } = useProductBtCategory();

  if (isPending) {
    return <h1>Products Loading...</h1>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 via-slate-50 to-zinc-200">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-zinc-800">
            Discover Products
          </h1>
          <p className="text-sm text-zinc-500 mt-1">
            Browse, search and filter products.
          </p>
        </div>

        {/* Filter */}
        <div className="mb-6">
          <Filter
            category={category}
            setCategory={setCategory}
            search={search}
            setSearch={setSearch}
          />
        </div>

        {/* Products */}
        <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-zinc-200/60 shadow-lg shadow-zinc-200/50 p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {productsByCategory?.products.length
              ? productsByCategory.products.map((item) => (
                  <ProductCard product={item} key={item.id} />
                ))
              : data?.map((item) => (
                  <ProductCard product={item} key={item.id} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
