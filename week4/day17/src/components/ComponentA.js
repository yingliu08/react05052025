import { useContext } from "react";
import { countContext } from "../App";
import { ACTIONS } from "../App";

export default function ComponentA() {
  const { count, dispatch } = useContext(countContext);
  return (
    <div>
      <p> ComponentA count - {count}</p>
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
