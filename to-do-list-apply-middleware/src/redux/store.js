import { createStore, combineReducers, applyMiddleware } from "redux";
import todosReducer from "./reducer/todosReducer";
import { thunk } from "redux-thunk";
const rootReducer = combineReducers({ todos: todosReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
