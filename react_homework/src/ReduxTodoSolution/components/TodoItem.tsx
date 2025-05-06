import React from "react";
import { Todo } from "../types/TodoType";
import { useDispatch } from "react-redux";
import {
  deleteTodoAsync,
  toggleTodoAsync,
} from "../redux/reducers/todosReducer";
import { AppDispatch } from "../redux/store";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const { id, text, completed } = todo;

  const dispatch: AppDispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodoAsync(id));
  };
  const handleToggle = () => {
    dispatch(toggleTodoAsync(id, completed));
  };

  return (
    <li>
      <div>Task: {text}</div>
      <div>Completed: {completed ? "Yes" : "No"}</div>
      <button onClick={handleToggle}>Toggle</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}
