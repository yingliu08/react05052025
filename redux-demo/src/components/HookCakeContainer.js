import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cakeReducer";
import { useState } from "react";
export default function HookCakeContainer() {
  const numberOfCake = useSelector((state) => state.cake.numberOfCake);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>number of cake - {numberOfCake}</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(number))}>
        Buy {number} of Cake
      </button>
    </div>
  );
}
