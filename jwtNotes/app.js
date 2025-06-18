require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
const PORT = 5000;
const { v4: uuid } = require("uuid");

const usersInfo = [
  {
    id: uuid(),
    username: "josh",
    birthdate: "08/13/2002",
  },
  {
    id: uuid(),
    username: "kim",
    birthdate: "05/12/2018",
  },
];

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/login", (req, res) => {
  const { username } = req.body;
  const userInfo = usersInfo.find((user) => {
    return user.username === username;
  });
  if (!userInfo) return res.status(404).json({ message: "User doesn't exist" });
  const payload = { id: userInfo.id, username: userInfo.username };
  const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
  res.status(200).json({ message: "found user", token });
});
app.get("/profile", authorizedToken, (req, res) => {
  res.status(200).json({ message: "user info", user: req.user });
});
function authorizedToken(req, res, next) {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.listen(PORT);
