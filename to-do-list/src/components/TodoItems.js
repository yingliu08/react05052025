import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, API } from "../redux/reducer/todosReducer";
import "../App.css";

export default function TodoItems({ todo }) {
  const dispatch = useDispatch();

  async function handleDelete() {
    await fetch(`${API}/${todo.id}`, {
      method: "DELETE",
    });
    dispatch(deleteTodo(todo.id));
  }
  async function handleToggle() {
    await fetch(`${API}/${todo.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !todo.completed }),
    });
    dispatch(toggleTodo(todo.id));
  }
  return (
    <div className="todoItem">
      <div className="todoLeft">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
        />
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.task}
        </span>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
