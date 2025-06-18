const express = require("express");
const router = express.Router();
const { v4: uuid } = require("uuid");

const todos = [{ id: uuid(), task: "buy apple", completed: false }];

router.get("/todos", (req, res) => {
  res.status(200).json({ message: "todo list", data: todos });
});

router.post("/todos", (req, res) => {
  const { task } = req.body;
  const newTodo = { id: uuid(), task, completed: false };
  todos.push(newTodo);
  res.status(201).json({ message: "add todo successfully", data: newTodo });
});

router.put("/todos/:id", (req, res) => {
  const { task } = req.body;
  const todoId = req.params.id;
  //or use find: Returns the first element in the array that matches the condition.
  const index = todos.findIndex((todo) => {
    return todo.id === todoId;
  });
  if (index === -1) {
    return res.status(404).json({ message: "todo not found" });
  }
  todos[index].task = task;
  res
    .status(200)
    .json({ message: "update todo successfully", data: todos[index] });
});

router.delete("/todos/:id", (req, res) => {
  const todoId = req.params.id;
  const index = todos.findIndex((todo) => {
    return todo.id === todoId;
  });
  if (index === -1) {
    return res.status(404).json({ message: "todo not found" });
  }
  const deletedTodo = todos.splice(index, 1);
  res
    .status(200)
    .json({ message: "delete todo successfully", data: deletedTodo });
});

module.exports = router;
