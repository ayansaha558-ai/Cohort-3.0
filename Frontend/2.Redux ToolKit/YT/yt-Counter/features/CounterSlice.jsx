import { createSlice } from "@reduxjs/toolkit";
import React from "react";

export const CounterSlice = createSlice({
  name:"Counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    increaseByAmount: (state, actions) => {
      state.value += actions.payload;
    },
  },
});

export const {increment,decrement,increaseByAmount}=CounterSlice.actions

export default CounterSlice.reducer;
