import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, API, setTodos } from "../redux/reducer/todosReducer";
import TodoList from "./TodoList";

export default function NewTodo() {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchTodos() {
      const res = await fetch(API);
      const data = await res.json();
      dispatch(setTodos(data));
    }
    fetchTodos();
  }, [dispatch]);

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task: inputText, completed: false }),
    });
    const data = await res.json();
    dispatch(addTodo(data));
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
