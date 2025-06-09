import { useDispatch } from "react-redux";
import {
  deleteTodoAsync,
  toggleTodoAsync,
} from "../redux/reducer/todosReducer";
import "../App.css";

export default function TodoItems({ todo }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteTodoAsync(todo.id));
  }

  function handleToggle() {
    dispatch(toggleTodoAsync(todo));
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
