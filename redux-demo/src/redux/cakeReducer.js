const initialState = {
  numberOfCake: 10,
};

// Action Type
const BUY_CAKE = "BUY_CAKE";

// Action Creator
export const buyCake = (number = 1) => ({
  type: BUY_CAKE,
  payload: number,
});

// Reducer
export default function cakeReducer(state = initialState, action) {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCake: state.numberOfCake - action.payload,
      };
    default:
      return state;
  }
}
