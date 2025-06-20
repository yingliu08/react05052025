const { v4: uuid } = require("uuid");
const jwt = require("jsonwebtoken");
const { usersInfo, blackList } = require("../services/fakeDb");

// POST /login
function login(req, res) {
  const { username, password } = req.body;
  const user = usersInfo.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) return res.status(404).json({ message: "login fail" });

  const payload = { id: user.id, username: user.username };
  const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "10m",
  });
  //store token into cookie
  res.cookie("token", token, {
    httpOnly: true,
  });
  res.status(200).json({ message: "login successfully" });
}

// POST /register
function register(req, res) {
  const { username, password } = req.body;
  const exists = usersInfo.find((u) => u.username === username);
  if (exists) return res.status(400).json({ message: "user already exist" });

  const newUser = { id: uuid(), username, password };
  usersInfo.push(newUser);
  res.status(200).json({ message: "register successfully", data: newUser });
}

// GET /profile
function profile(req, res) {
  res.status(200).json({ message: "profile", user: req.user });
}

// POST /logout
function logout(req, res) {
  const token = req.cookies.token;
  blackList.add(token);
  res.clearCookie("token");
  res.status(200).json({ message: "log out successfully" });
}

module.exports = {
  login,
  register,
  profile,
  logout,
};
