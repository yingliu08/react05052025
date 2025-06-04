import "./App.css";
import ComponentA from "./components/ComponentA";
// import ComponentB from "./components/ComponentB";
import { useReducer, createContext } from "react";

export const counterContext = createContext();
const initalState = 0;

function reducer(count, action) {
  switch (action.type) {
    case "increment":
      return count - 1;
    case "decrement":
      return count + 1;
    default:
      return count;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initalState);
  return (
    <counterContext.Provider value={{ count, dispatch }}>
      <div>
        {" "}
        {count}
        <ComponentA />
        {/* <ComponentB /> */}
      </div>
    </counterContext.Provider>
  );
}

export default App;
