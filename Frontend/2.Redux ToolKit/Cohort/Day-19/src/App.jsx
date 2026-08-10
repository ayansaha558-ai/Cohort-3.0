import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "./app/store";
import { decrement, increment } from "./features/counterSlice";

const App = () => {
  let { count } = useSelector((store) => store.counter);

  let dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default App;
