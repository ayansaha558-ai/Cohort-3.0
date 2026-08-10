import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import React from "react";
import { getAllProductApi } from "../api/productApis";
import ProductCart from "./ProductCart";
import { useState } from "react";

const Infinite = () => {
  let limit = 10;

  let { data, isPending, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["products"],
      queryFn: ({ pageParam }) => getAllProductApi(limit, pageParam),
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPage) => {
        let loadedData = allPage.length * limit;
        if (loadedData <= lastPage.total) return loadedData;

        return undefined;
      },
    });

  if (isPending) {
    return <h1>Products Loading</h1>;
  }

  console.log(data);

  let allProducts = data.pages.flatMap((val) => val.products);

  return (
    <div className="min-h-screen bg-zinc-100 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>

        <div
          //   style={{ opacity: isPlaceholderData ? 0.3 : 1 }}
          className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {allProducts.map((item) => (
            <ProductCart key={item.id} product={item} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-5 mt-12">
          {hasNextPage && (
            <h3 className="cursor-pointer" onClick={() => fetchNextPage()}>
              {isFetchingNextPage ? "Loading" : "Load More.."}
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Infinite;
