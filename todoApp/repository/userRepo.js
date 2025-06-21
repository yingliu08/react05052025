const dbPool = require("../database/connection");

async function findUserByUsername(username) {
  const sql = "SELECT * FROM users WHERE username=?";
  const [result, field] = await dbPool.query(sql, [username]);
  return result[0];
}

async function createNewUser(id, username, passwordAfterHashed) {
  const sql = "INSERT INTO users (id, username, password) VALUES (?, ?, ?)";
  await dbPool.query(sql, [id, username, passwordAfterHashed]);
}

module.exports = {
  findUserByUsername,
  createNewUser,
};
