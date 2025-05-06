import React, { useState } from "react";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { addTodoAsync } from "../redux/reducers/todosReducer";

export default function NewTodo() {
  const [newTodo, setNewTodo] = useState("");
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTodoAsync(newTodo));
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}
