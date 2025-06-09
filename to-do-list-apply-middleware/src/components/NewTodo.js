import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodoAsync, fetchTodos } from "../redux/reducer/todosReducer";
import TodoList from "./TodoList";

export default function NewTodo() {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTodoAsync(inputText));
    setInputText("");
  }

  return (
    <div className="todoContainer">
      <h2>To Do List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter task..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button>Add</button>
      </form>
      <TodoList />
    </div>
  );
}
