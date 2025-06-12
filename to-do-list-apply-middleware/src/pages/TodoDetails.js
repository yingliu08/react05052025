import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, Link, useHistory } from "react-router-dom";
import {
  API,
  toggleTodoAsync,
  deleteTodoAsync,
  updateTodoAsync,
} from "../redux/reducer/todosReducer";

export default function TodoDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [todo, setTodo] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState({
    task: "",
    description: "",
    date: "",
    completed: false,
  });

  useEffect(() => {
    async function fetchTodo() {
      const res = await fetch(`${API}/${id}`);
      if (res.ok) {
        const data = await res.json();
        setTodo(data);
        setEditedTodo(data);
      }
    }
    fetchTodo();
  }, [id]);

  const handleDelete = () => {
    dispatch(deleteTodoAsync(todo.id));
    history.push("/");
  };

  const handleToggle = () => {
    dispatch(toggleTodoAsync(todo));
    setTodo({ ...todo, completed: !todo.completed });
    setEditedTodo({ ...editedTodo, completed: !todo.completed });
  };

  const handleUpdate = () => {
    dispatch(updateTodoAsync(todo.id, editedTodo));
    setEditMode(false);
  };
  if (!todo) return <div>Loading...</div>;

  return (
    <div>
      <h2>Todo: {id} Details</h2>

      <p>
        <strong>Task:</strong>
        {editMode ? (
          <input
            value={editedTodo.task}
            onChange={(e) =>
              setEditedTodo({ ...editedTodo, task: e.target.value })
            }
          />
        ) : (
          todo.task
        )}
      </p>

      <p>
        <strong>Completed:</strong> {todo.completed ? "Yes" : "No"}
        <button onClick={handleToggle} style={{ marginLeft: "10px" }}>
          ToggleCompleted
        </button>
      </p>

      <p>
        <strong>Date:</strong>{" "}
        {editMode ? (
          <input
            type="string"
            value={editedTodo.date}
            onChange={(e) =>
              setEditedTodo({ ...editedTodo, date: e.target.value })
            }
          />
        ) : (
          todo.date
        )}
      </p>

      <p>
        <strong>Description:</strong>{" "}
        {editMode ? (
          <textarea
            value={editedTodo.description}
            onChange={(e) =>
              setEditedTodo({ ...editedTodo, description: e.target.value })
            }
          />
        ) : (
          todo.description
        )}
      </p>

      <Link to="/">
        <button style={{ marginRight: "10px" }}>Go Back</button>
      </Link>
      <button onClick={handleDelete} style={{ marginRight: "10px" }}>
        Delete
      </button>
      {editMode ? (
        <button onClick={handleUpdate}>Save</button>
      ) : (
        <button onClick={() => setEditMode(true)}>Edit</button>
      )}
    </div>
  );
}
