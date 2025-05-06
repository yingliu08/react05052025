import React, { useEffect } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { TodosState, fetchTodosAsync } from "./redux/reducers/todosReducer";
import { useDispatch } from "react-redux";
import { LoadingState } from "./redux/reducers/loadingReducer";

export default function ReduxTodoSolution() {
  const todos = useSelector<RootState, TodosState>((state) => state.todos);
  const loading = useSelector<RootState, LoadingState>(
    (state) => state.loading
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NewTodo />
      <TodoList todos={todos} />
    </div>
  );
}
