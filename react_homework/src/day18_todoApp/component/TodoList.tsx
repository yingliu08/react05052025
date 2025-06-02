import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

export default function TodoList() {
  const { todos, deleteTodo, updateTodo } = useContext(TodoContext);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  return (
    <ul>
      {todos.map((todo: any) => (
        <li key={todo.id}>
          {editingId === todo.id ? (
            <>
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button
                onClick={() => {
                  if (editText.trim()) {
                    updateTodo({ id: todo.id, text: editText });
                    setEditingId(null);
                  }
                }}
              >
                Save
              </button>
            </>
          ) : (
            <>
              {todo.text}
              <button
                onClick={() => {
                  setEditingId(todo.id);
                  setEditText(todo.text);
                }}
              >
                Edit
              </button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
