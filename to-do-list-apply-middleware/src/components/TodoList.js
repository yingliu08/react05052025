import TodoItems from "./TodoItems";
import { useSelector } from "react-redux";
export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      {todos.map((todo) => {
        return <TodoItems key={todo.id} todo={todo} />;
      })}
    </div>
  );
}
