import TodoAdd from "./component/TodoAdd";
import TodoList from "./component/TodoList";
import { TodoProvider } from "./context/TodoContext";

export default function TodoApp() {
  return (
    <TodoProvider>
      <div>
        <h1>Todo App</h1>
        <TodoAdd />
        <TodoList />
      </div>
    </TodoProvider>
  );
}
