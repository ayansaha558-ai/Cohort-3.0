import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",

  initialState: {
    query: JSON.parse(localStorage.getItem("query")) || "",
    activeTab: "photos",
    results: [],
    loading: false,
    error: null,
  },

  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },

    setActiveTabs(state, action) {
      state.activeTab = action.payload;
    },

    setResults(state, action) {
      state.loading = false;
      state.results = action.payload;
    },

    setLoading(state) {
      state.loading = true;
      state.error = null;
    },

    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },

    setClearResults(state) {
      state.results = [];
    },
  },
});

export const {
  setActiveTabs,
  setError,
  setLoading,
  setQuery,
  setResults,
  setClearResults,
} = searchSlice.actions;

export default searchSlice.reducer;
