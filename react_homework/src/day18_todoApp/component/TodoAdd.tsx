import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

export default function TodoAdd() {
  const { addTodo } = useContext(TodoContext);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
