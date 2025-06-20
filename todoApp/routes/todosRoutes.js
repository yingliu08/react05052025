const express = require("express");
const router = express.Router();
const {
  fetchTodos,
  addTodos,
  updateTodos,
  deleteTodos,
} = require("../controllers/todosController");
const verifyToken = require("../middleware/verifyToken");

router.get("/todos", verifyToken, fetchTodos);
router.post("/todos", verifyToken, addTodos);
router.patch("/todos/:id", verifyToken, updateTodos);
router.delete("/todos/:id", verifyToken, deleteTodos);

module.exports = router;
