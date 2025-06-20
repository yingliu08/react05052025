const { v4: uuid } = require("uuid");
const { todos } = require("../services/fakeDb");

//GET todos
function fetchTodos(req, res) {
  const userId = req.user.id;
  const userTodos = todos.filter((todo) => {
    return todo.userId === userId;
  });
  if (!userTodos) return res.status(404).json({ message: "todo not found" });
  res.status(200).json({ message: "todo list", data: userTodos });
}

//POST add todos
function addTodos(req, res) {
  const { task } = req.body;
  const newTodo = { id: uuid(), userId: req.user.id, task, completed: false };
  todos.push(newTodo);
  res.status(200).json({ message: "todo created" });
}

//PATCH update todos
function updateTodos(req, res) {
  const userId = req.user.id;
  const todoId = req.params.id;
  const { task, completed } = req.body;
  const todo = todos.find((todo) => {
    return todo.id === todoId && todo.userId === userId;
  });
  if (!todo) return res.status(404).json({ message: "todo not found" });
  todo.task = task;
  todo.completed = completed;
  res.status(200).json({ message: "updated todo", data: todo });
}

//DELETE delete todos
function deleteTodos(req, res) {
  const userId = req.user.id;
  const todoId = req.params.id;
  const index = todos.findIndex((todo) => {
    return todo.id === todoId && todo.userId === userId;
  });
  if (index === -1) return res.status(404).json({ message: "todo not found" });

  todos.splice(index, 1);
  res.status(200).json({ message: "todo deleted" });
}

module.exports = {
  fetchTodos,
  addTodos,
  updateTodos,
  deleteTodos,
};
