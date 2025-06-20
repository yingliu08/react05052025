const { v4: uuid } = require("uuid");
const blackList = new Set(); //use to store logout token/expired token

//id, username, password
const usersInfo = [];
//id, userId, task, completed
const todos = [];
module.exports = { blackList, usersInfo, todos };
