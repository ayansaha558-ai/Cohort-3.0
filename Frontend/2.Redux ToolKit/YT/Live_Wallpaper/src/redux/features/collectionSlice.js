import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const collectionSlice = createSlice({
  name: "collection",

  initialState: {
    items: JSON.parse(localStorage.getItem("collections")) || [],
  },

  reducers: {
    // ADD
    addCollection: (state, action) => {
      const alreadyExists = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (alreadyExists) {
        toast.info("This item is already in your collection.");
        return;
      }

      state.items.push(action.payload);

      localStorage.setItem(
        "collections",
        JSON.stringify(state.items)
      );

      toast.success("Added to your collection.");
    },

    // REMOVE
    removeCollection: (state, action) => {
      const exists = state.items.some(
        (item) => item.id === action.payload
      );

      if (!exists) {
        toast.error("This item could not be found.");
        return;
      }

      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem(
        "collections",
        JSON.stringify(state.items)
      );

      toast.success("Removed from your collection.");
    },

    // CLEAR
    clearCollection: (state) => {
      if (state.items.length === 0) {
        toast.info("Your collection is already empty.");
        return;
      }

      state.items = [];

      localStorage.removeItem("collections");

      toast.success("Your collection has been cleared.");
    },

    // EDIT
    editCollection: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!item) {
        toast.error("Collection item could not be found.");
        return;
      }

      item.title = action.payload.title;
      item.note = action.payload.note;
      item.src = action.payload.src;

      localStorage.setItem(
        "collections",
        JSON.stringify(state.items)
      );

      toast.success("Collection item updated successfully.");
    },
  },
});

export const {
  addCollection,
  removeCollection,
  clearCollection,
  editCollection,
} = collectionSlice.actions;

export default collectionSlice.reducer;