import { createStore, combineReducers } from "redux";
import todosReducer from "./reducer/todosReducer";

const rootReducer = combineReducers({ todos: todosReducer });
const store = createStore(rootReducer);

export default store;
