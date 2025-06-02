import { countContext } from "../App";
import { useContext } from "react";
import { ACTIONS } from "../App";

export default function ComponentB() {
  const { count, dispatch } = useContext(countContext);
  return (
    <div>
      <p>ComponentB: Count- {count}</p>

      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.RESET })}>reset</button>
    </div>
  );
}
