import "./App.css";
import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import HookCakeContainer from "./components/HookCakeContainer";
import HookIceCreamContainer from "./components/HookIceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HookCakeContainer />
        <HookIceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
