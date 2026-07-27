import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increaseByAmount,
  increment,
} from "../features/CounterSlice";

const App = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.value);

  const [num, setNum] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-4">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
        <h2 className="text-center text-3xl font-bold text-white">
          Redux Counter
        </h2>

        <div className="my-8 flex justify-center">
          <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-violet-500 bg-zinc-950 text-5xl font-bold text-violet-400">
            {count}
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => dispatch(increment())}
            className="w-full rounded-lg bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-700 active:scale-95"
          >
            Increment
          </button>

          <button
            onClick={() => dispatch(decrement())}
            className="w-full rounded-lg bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700 active:scale-95"
          >
            Decrement
          </button>

          <input
            type="number"
            value={num}
            onChange={(e) => setNum(e.target.value)}
            placeholder="Enter amount..."
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-violet-500"
          />

          <button
            onClick={() => {
              dispatch(increaseByAmount(Number(num)));
            }}
            className="w-full rounded-lg bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700 active:scale-95"
          >
            Increase By Amount
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
