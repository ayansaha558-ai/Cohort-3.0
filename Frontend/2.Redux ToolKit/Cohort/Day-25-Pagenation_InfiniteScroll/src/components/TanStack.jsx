import { keepPreviousData, useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllProductApi } from "../api/productApis";
import ProductCart from "./ProductCart";
import { useState } from "react";

const TanStack = () => {
  const [page, setPage] = useState(0);
  let limit = 10;

  let { data, isPending, error, isPlaceholderData } = useQuery({
    queryKey: ["products", page],
    queryFn: () => getAllProductApi(limit, page),
    placeholderData : keepPreviousData,
  });

  if (isPending) {
    return <h1>Products Loading</h1>;
  }
  if (error) {
    return <h1>Something is wrong in Tanstack</h1>;
  }

  let totalPages = Math.ceil(data.total / limit);

  return (
    <div className="min-h-screen bg-zinc-100 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>

        <div
        style={{opacity:isPlaceholderData?0.3:1}} className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data?.products?.map((item) => (
            <ProductCart key={item.id} product={item} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-5 mt-12">
          <button
            disabled={page == 0}
            onClick={() => setPage(page - 1)}
            className="px-6 py-2 rounded-lg bg-zinc-900 text-white font-medium hover:bg-zinc-800 active:scale-95 transition-all duration-200 shadow-md"
          >
            ← Prev
          </button>

          <div className="px-6 py-2 rounded-lg bg-white shadow-md border border-zinc-200 font-semibold text-lg text-zinc-700">
            page {page + 1} of {totalPages}
          </div>

          <button
            disabled={page >= totalPages - 1}
            onClick={() => setPage(page + 1)}
            className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 active:scale-95 transition-all duration-200 shadow-md"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TanStack;
