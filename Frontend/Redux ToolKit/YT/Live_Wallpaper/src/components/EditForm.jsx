import React from "react";
import { Link2, Type, FileText, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { editCollection } from "../redux/features/collectionSlice";

const EditForm = ({ item, setIsEditOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      src: item.src || "",
      title: item.title || "",
      note: item.note || "",
    },
  });

  const dispatch = useDispatch();

  const formSubmit = (data) => {
    dispatch(
      editCollection({
        id: item.id,
        ...data,
      })
    );

    setIsEditOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-sm">

      <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.7)]">

        {/* Top Accent */}
        <div className="h-1 w-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500" />

        <div className="p-6">

          {/* Header */}
          <div className="mb-5 flex items-start justify-between">
            <div>
              <h2 className="text-base font-semibold tracking-tight text-white">
                Edit Collection
              </h2>

              <p className="mt-1 text-xs leading-relaxed text-slate-400">
                Update the details of your saved media.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsEditOpen(false)}
              aria-label="Close"
              className="cursor-pointer rounded-lg p-1 text-slate-500 transition hover:bg-white/5 hover:text-slate-300"
            >
              <X
                className="h-4 w-4"
                strokeWidth={1.75}
              />
            </button>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(formSubmit)}
            className="space-y-4"
          >

            {/* Media URL */}
            <div>
              <label className="mb-1 flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-slate-400">
                <Link2
                  className="h-3 w-3"
                  strokeWidth={2}
                />
                Media URL
              </label>

              <input
                {...register("src", {
                  required: "Media URL is required",
                })}
                type="url"
                placeholder="https://example.com/media"
                className="w-full rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 hover:border-white/20 focus:border-amber-400/60 focus:bg-slate-950 focus:ring-4 focus:ring-amber-400/10"
              />

              {errors.src && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.src.message}
                </p>
              )}
            </div>

            {/* Title */}
            <div>
              <label className="mb-1 flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-slate-400">
                <Type
                  className="h-3 w-3"
                  strokeWidth={2}
                />
                Title
              </label>

              <input
                {...register("title", {
                  required: "Title is required",
                })}
                type="text"
                placeholder="Enter media title"
                className="w-full rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 hover:border-white/20 focus:border-amber-400/60 focus:bg-slate-950 focus:ring-4 focus:ring-amber-400/10"
              />

              {errors.title && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Note */}
            <div>
              <label className="mb-1 flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-slate-400">
                <FileText
                  className="h-3 w-3"
                  strokeWidth={2}
                />
                Personal Note
              </label>

              <textarea
                {...register("note")}
                rows="3"
                placeholder="Write something about this media..."
                className="w-full resize-none rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-sm leading-relaxed text-slate-100 outline-none transition placeholder:text-slate-600 hover:border-white/20 focus:border-amber-400/60 focus:bg-slate-950 focus:ring-4 focus:ring-amber-400/10"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-2 border-t border-white/10 pt-5">

              <button
                type="button"
                onClick={() => setIsEditOpen(false)}
                className="cursor-pointer rounded-lg px-3.5 py-2 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-slate-200"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="cursor-pointer rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-400/20 transition hover:bg-amber-300 active:scale-[0.98]"
              >
                Save Changes
              </button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditForm;