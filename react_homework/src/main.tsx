import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./ReduxTodoSolution/redux/store.ts";
import TodoListApp from "./day12_interactivity/TodoListApp/index.tsx";
import Checkbox from "./day12_interactivity/ControlledComponents/Checkbox.tsx";
import Select from "./day12_interactivity/ControlledComponents/Select.tsx";
import RadioGroup from "./day12_interactivity/ControlledComponents/RadioGroup.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
    <RadioGroup />
    <Checkbox />
    <Select />
    <TodoListApp />
  </Provider>
);
