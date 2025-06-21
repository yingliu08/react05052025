const { v4: uuid } = require("uuid");
const jwt = require("jsonwebtoken");
const { blackList } = require("../services/fakeDb");
const {
  findUserByUsername,
  findUserByUsernameAndPass,
  createNewUser,
} = require("../repository/userRepo");

// POST /login
async function login(req, res) {
  const { username, password } = req.body;
  try {
    const user = await findUserByUsernameAndPass(username, password);
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
  } catch (err) {
    res.status(500).json({ message: "server error", error: err.message });
  }
}

// POST /register
async function register(req, res) {
  const { username, password } = req.body;
  try {
    const exists = await findUserByUsername(username);
    if (exists) return res.status(400).json({ message: "user already exist" });
    const id = uuid();
    await createNewUser(id, username, password);
    res.status(200).json({ message: "register successfully" });
  } catch (err) {
    res.status(500).json({ message: "server error", error: err.message });
  }
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
