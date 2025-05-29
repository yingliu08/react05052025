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
import LoginForm from "./day16_pattern/ref/LoginForm.tsx";
import AutoFocusInput from "./day16_pattern/ref/AutoFocusInput.tsx";
import FetchPosts from "./day16_pattern/customHook/fetch/FetchPosts.tsx";
import Debounce from "./day16_pattern/customHook/debounce/Debounce.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
    <Debounce />
    <AutoFocusInput />
    <FetchPosts />
    <LoginForm />
    <RadioGroup />
    <Checkbox />
    <Select />
    <TodoListApp />
  </Provider>
);
