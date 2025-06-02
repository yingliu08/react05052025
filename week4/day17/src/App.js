import "./App.css";
import { useReducer, createContext } from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";

export const countContext = createContext();
export const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
};
function reducer(count, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return count + 1;
    case ACTIONS.DECREMENT:
      return count - 1;
    case ACTIONS.RESET:
      return 0;
    default:
      return count;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <countContext.Provider value={{ count, dispatch }}>
      <div className="App">
        <ComponentA />
        <ComponentB />
      </div>
    </countContext.Provider>
  );
}

export default App;
