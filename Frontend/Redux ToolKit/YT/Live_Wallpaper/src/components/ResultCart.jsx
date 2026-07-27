import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCollection } from "../redux/features/collectionSlice";

const ResultCart = ({ item }) => {
  const dispatch = useDispatch();

  const collection = useSelector(
    (state) => state.collection.items
  );

  // Check if this item is already saved
  const isAdded = collection.some(
    (collectionItem) => collectionItem.id === item.id
  );

  const addHandler = () => {
    if (isAdded) return;

    dispatch(
      addCollection({
        ...item,
        favorite: false,
        note: "",
        addedAt: Date.now(),
      })
    );
  };

  return (
    <div className="group overflow-hidden rounded-xl border border-gray-800 bg-gray-900 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-gray-700 hover:shadow-xl">

      {/* Media */}
      <div className="relative overflow-hidden rounded-lg">
        {item.type === "video" ? (
          <video
            src={item.src}
            poster={item.thumbnail}
            controls
            className="h-48 w-full rounded-lg object-cover"
          />
        ) : (
          <img
            src={item.thumbnail}
            alt={item.title || "Media"}
            className="h-48 w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}

        {/* Type Badge */}
        <span className="absolute left-2 top-2 rounded-md bg-black/70 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
          {item.type}
        </span>
      </div>

      {/* Title */}
      <h3
        title={item.title}
        className="mt-3 truncate text-sm font-medium text-white"
      >
        {item.title || "Untitled"}
      </h3>

      {/* Add Button */}
      <button
        onClick={addHandler}
        disabled={isAdded}
        className={`mt-3 w-full rounded-lg py-2.5 text-sm font-bold transition-all duration-200 ${
          isAdded
            ? "cursor-not-allowed border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
            : "cursor-pointer bg-amber-400 text-gray-950 hover:bg-amber-300 active:scale-[0.98]"
        }`}
      >
        {isAdded ? "✓ Added to Collection" : "+ Add to Collection"}
      </button>
    </div>
  );
};

export default ResultCart;