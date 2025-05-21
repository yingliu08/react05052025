import React, { useState } from "react";
export default function TodoListApp() {
  // write your todo list app here
  const [tasks, setTasks] = useState<string[]>([]);
  const [inpuTask, setInputTask] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");

  function addTask() {
    //avoid empty string
    const trimed = inpuTask.trim();
    if (trimed === "") {
      return;
    }
    setTasks([...tasks, trimed]); // add new task into array[]
    setInputTask(""); //clear the input bar
  }
  function handleDeleteTask(index: number) {
    setTasks(tasks.filter((_, i) => i !== index));
  }
  function handleEditTask(index: number) {
    if (editIndex === index) {
      //that means the editindex is not null and we need to do edit
      const updated = [...tasks]; //make a copy of tasks array
      updated[index] = editValue; //update to new task
      setTasks(updated);
      setEditIndex(null);
      setEditValue("");
    } else {
      //assign value to edit
      setEditIndex(index);
      setEditValue(tasks[index]);
    }
  }
  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="add item..."
        value={inpuTask}
        onChange={(e) => setInputTask(e.target.value)}
      />
      <button onClick={addTask}>add</button>
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              {editIndex === index ? (
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
              ) : (
                task
              )}
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
              <button onClick={() => handleEditTask(index)}>
                {editIndex === index ? "Save" : "Edit"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
