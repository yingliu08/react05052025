import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, Link, useHistory } from "react-router-dom";
import {
  API,
  toggleTodoAsync,
  deleteTodoAsync,
} from "../redux/reducer/todosReducer";

export default function TodoDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [todo, setTodo] = useState("");

  useEffect(() => {
    async function fetchTodo() {
      const res = await fetch(`${API}/${id}`);
      if (res.ok) {
        const data = await res.json();
        setTodo(data);
      }
    }
    fetchTodo();
  }, [id]);

  function handleDelete() {
    dispatch(deleteTodoAsync(todo.id));
    history.push("/");
  }

  function handleToggle() {
    dispatch(toggleTodoAsync(todo));
    setTodo({ ...todo, completed: !todo.completed });
  }
  if (!todo) return <div>Not Found</div>;

  return (
    <div>
      <Link to="/">Main Page</Link>
      <h2>Todo: {id} Details</h2>
      <p>
        <strong>Task:</strong> {todo.task}
      </p>
      <p>
        <strong>Completed:</strong> {todo.completed ? "Yes" : "No"}
      </p>
      <p>
        <strong>Date:</strong> {todo.date}
      </p>
      <p>
        <strong>Description:</strong> {todo.description}
      </p>
      <button onClick={handleToggle} style={{ marginRight: "10px" }}>
        ToggleCompleted
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
