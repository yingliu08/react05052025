const dbPool = require("../database/connection");

async function getUsersTodos(userId) {
  const sql = "SELECT * FROM todos WHERE userId = ?";
  const [rows, fields] = await dbPool.query(sql, [userId]);
  return rows;
}

async function createUsersNewTodo(todo) {
  const { todoId, userId, task, completed } = todo;
  const sql =
    "INSERT INTO todos (id, userId, task, completed) values (?,?,?,?)";
  await dbPool.query(sql, [todoId, userId, task, completed]);
}

async function updateUsersTodoByTodoId(userId, todoId, updates) {
  const { task, completed } = updates;
  const sql =
    "UPDATE todos SET task= ?, completed = ? WHERE id=? AND userId = ?";
  const [result] = await dbPool.query(sql, [task, completed, todoId, userId]);
  return result.affectedRows > 0;
}

async function deleteUsersTodoByTodoId(userId, todoId) {
  const sql = "DELETE FROM todos WHERE id=? AND userId = ?";
  const [result] = await dbPool.query(sql, [todoId, userId]);
  return result.affectedRows > 0;
}

module.exports = {
  getUsersTodos,
  createUsersNewTodo,
  updateUsersTodoByTodoId,
  deleteUsersTodoByTodoId,
};
