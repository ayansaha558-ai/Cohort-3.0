// CollectionPage.jsx

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-950 px-6 py-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 border-b border-gray-800 pb-6 sm:flex-row sm:items-end sm:justify-between">

          {/* Heading */}
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              Your Library
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-white">
              My Collection
            </h1>

            <p className="mt-2 text-sm text-gray-400">
              Photos, videos and GIFs you've saved.
            </p>
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-3">

            {/* Count */}
            <div className="rounded-lg border border-gray-700 bg-gray-900 px-4 py-2.5 text-sm text-gray-400">
              <span className="font-bold text-white">
                {collection.length}
              </span>{" "}
              {collection.length === 1 ? "item" : "items"}
            </div>

            {/* Clear Button */}
            {collection.length > 0 && (
              <button
                onClick={() => dispatch(clearCollection())}
                className="cursor-pointer rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm font-semibold text-red-400 transition-all duration-200 hover:border-red-500/50 hover:bg-red-500 hover:text-white"
              >
                Clear Collection
              </button>
            )}
          </div>
        </div>

        {/* Collection */}
        {collection.length === 0 ? (

          /* Empty State */
          <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-800 bg-gray-900/40 px-6 text-center">

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-gray-700 bg-gray-800 text-3xl">
              📭
            </div>

            <h2 className="text-xl font-semibold text-white">
              Your collection is empty
            </h2>

            <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
              Search for photos, videos or GIFs and add your favorites
              to see them here.
            </p>
          </div>
        ) : (

          /* Grid */
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {collection.map((item) => (
              <CollectionCard
                key={`${item.type}-${item.id}`}
                item={item}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionPage;