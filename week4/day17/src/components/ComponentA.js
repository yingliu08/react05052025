import { counterContext } from "../App";
import { useContext } from "react";

export default function ComponentA() {
  const { count, dispatch } = useContext(counterContext);

  return (
    <div>
      {count}
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </div>
  );
}
