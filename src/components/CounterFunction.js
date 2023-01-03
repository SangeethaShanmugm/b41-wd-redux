import React, { useEffect, useState } from "react";
import { decrement, increment } from "../store/action/CounterAction";
import { store } from "../store/store";
function CounterFunction(props) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    updateState();
    store.subscribe(updateState);
  });

  function updateState() {
    const state = store.getState();
    setCounter(state.counter);
  }

  function onIncrement() {
    store.dispatch(increment());
  }

  function onDecrement() {
    store.dispatch(decrement());
  }

  return (
    <div>
      <div>CounterFunction component</div>
      <div>{counter}</div>
      <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
      </div>
    </div>
  );
}

export default CounterFunction;
