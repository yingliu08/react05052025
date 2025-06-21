const { v4: uuid } = require("uuid");
const {
  getUsersTodos,
  createUsersNewTodo,
  updateUsersTodoByTodoId,
  deleteUsersTodoByTodoId,
} = require("../repository/todoRepo");

//GET todos
async function fetchTodos(req, res) {
  try {
    const userId = req.user.id;
    const userTodos = await getUsersTodos(userId);
    if (!userTodos) return res.status(404).json({ message: "todo not found" });
    res.status(200).json({ message: "todo list", data: userTodos });
  } catch (err) {
    res.status(500).json({ message: "server error", error: err.message });
  }
}

//POST add todos
async function addTodos(req, res) {
  try {
    const { task } = req.body;
    const newTodo = {
      todoId: uuid(),
      userId: req.user.id,
      task,
      completed: false,
    };
    await createUsersNewTodo(newTodo);
    res.status(201).json({ message: "todo created" });
  } catch (err) {
    res.status(500).json({ message: "server error", error: err.message });
  }
}

//PATCH update todos
async function updateTodos(req, res) {
  try {
    const userId = req.user.id;
    const todoId = req.params.id;
    const { task, completed } = req.body;
    const success = await updateUsersTodoByTodoId(userId, todoId, {
      task,
      completed,
    });
    if (!success) return res.status(404).json({ message: "todo not found" });

    res.status(200).json({ message: "updated todo" });
  } catch (err) {
    res.status(500).json({ message: "server error", error: err.message });
  }
}

//DELETE delete todos
async function deleteTodos(req, res) {
  try {
    const userId = req.user.id;
    const todoId = req.params.id;
    const success = await deleteUsersTodoByTodoId(userId, todoId);
    if (!success) return res.status(404).json({ message: "todo not found" });

    res.status(200).json({ message: "todo deleted" });
  } catch (err) {
    res.status(500).json({ message: "server error", error: err.message });
  }
}

module.exports = {
  fetchTodos,
  addTodos,
  updateTodos,
  deleteTodos,
};
