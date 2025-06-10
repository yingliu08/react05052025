import { useHistory } from "react-router-dom";
import "../App.css";

export default function TodoItems({ todo }) {
  const history = useHistory();

  function handleTodoClick() {
    history.push(`/todos/${todo.id}`);
  }

  return (
    <div className="todoItem" onClick={handleTodoClick}>
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.task}
      </span>
    </div>
  );
}
