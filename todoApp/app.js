require("dotenv").config();
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const PORT = 3000;
const { v4: uuid } = require("uuid");
app.use(express.json());
const blackList = new Set(); //use to store logout token/expired token
const usersInfo = [
  {
    id: uuid(),
    username: "john",
    password: "1234",
  },
];

//login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const userInfo = usersInfo.find((user) => {
    return user.username === username && user.password === password;
  });
  if (!userInfo) return res.status(404).json({ message: "login fail" });
  const payload = { id: userInfo.id, username: userInfo.username };
  //create token
  const token = jwt.sign(payload, process.env.ACCESS_TOKEN, {
    expiresIn: "10m",
  });
  res.status(200).json({ message: "login successfully", token });
});
//create new user
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  //check if user already exist
  const exist = usersInfo.find((user) => {
    return user.username === username;
  });
  if (exist) return res.status(400).json({ message: "user already exist" });
  const newUser = { id: uuid(), username, password };
  usersInfo.push(newUser);
  res.status(200).json({ message: "register successfully", data: newUser });
});

//middleware
function verifyToken(req, res, next) {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];
  if (!token) return res.status(401).json({ message: "token missing" });
  if (blackList.has(token)) {
    return res.status(403).json({ message: "logged out" });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) return res.status(401).json({ message: "invalid token" });
    req.user = user;
    next();
  });
}

app.get("/profile", verifyToken, (req, res) => {
  res.status(200).json({ message: "profile", user: req.user });
});

app.post("/logout", verifyToken, (req, res) => {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];
  blackList.add(token);
  res.status(200).json({ message: "log out successfully" });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
