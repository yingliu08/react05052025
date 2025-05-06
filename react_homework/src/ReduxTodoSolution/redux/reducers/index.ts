import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  loading: loadingReducer,
});

export default rootReducer;
