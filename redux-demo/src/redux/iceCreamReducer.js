const initalState = {
  numOfIceCream: 20,
};

const BUY_ICECREAM = "BUY_ICECREAM";

export const buyIcecream = () => ({
  type: BUY_ICECREAM,
});

export default function iceCreamReducer(state = initalState, action) {
  switch (action.type) {
    case "BUY_ICECREAM":
      return { ...state, numOfIceCream: state.numOfIceCream - 1 };
    default:
      return state;
  }
}
