import { useSelector, useDispatch } from "react-redux";
import { buyIcecream } from "../redux/iceCreamReducer";

export default function HookIceCreamContainer() {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>numOfIceCream - {numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIcecream())}>buy iceCream</button>
    </div>
  );
}
