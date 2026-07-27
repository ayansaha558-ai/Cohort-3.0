import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeCollection } from "../redux/features/collectionSlice";
import EditForm from "./EditForm";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();

  const [isEditOpen, setIsEditOpen] = useState(false);

  const removeHandler = () => {
    dispatch(removeCollection(item.id));
  };

  return (
    <>
      <div className="group overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 p-3 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-gray-700 hover:shadow-2xl">

        {/* Media */}
        <div className="relative overflow-hidden rounded-xl bg-gray-950">

          {item.type === "video" ? (
            <video
              src={item.src}
              poster={item.thumbnail}
              controls
              className="h-52 w-full object-cover"
            />
          ) : (
            <img
              src={item.src}
              alt={item.title || "Media"}
              className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}

          {/* Type Badge */}
          <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
            {item.type}
          </span>
        </div>

        {/* Content */}
        <div className="px-1 pt-4">

          {/* Title */}
          <h3
            title={item.title}
            className="truncate text-base font-semibold text-white"
          >
            {item.title || "Untitled"}
          </h3>

          {/* Note */}
          <p
            title={item.note}
            className="mt-1 truncate text-xs text-gray-500"
          >
            {item.note || "No note added"}
          </p>

          {/* Buttons */}
          <div className="mt-4 flex gap-2">

            <button
              onClick={() => setIsEditOpen(true)}
              className="flex-1 cursor-pointer rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-bold text-gray-950 transition-all duration-200 hover:bg-amber-300 active:scale-[0.98]"
            >
              Edit
            </button>

            <button
              onClick={removeHandler}
              className="flex-1 cursor-pointer rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm font-semibold text-red-400 transition-all duration-200 hover:border-red-500/50 hover:bg-red-500 hover:text-white active:scale-[0.98]"
            >
              Remove
            </button>

          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditOpen && (
        <EditForm
          item={item}
          setIsEditOpen={setIsEditOpen}
        />
      )}
    </>
  );
};

export default CollectionCard;