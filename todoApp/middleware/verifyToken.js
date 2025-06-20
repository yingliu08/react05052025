const jwt = require("jsonwebtoken");
const { blackList } = require("../services/fakeDb");

function verifyToken(req, res, next) {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];
  if (!token) return res.status(401).json({ message: "token missing" });
  if (blackList.has(token)) {
    return res.status(403).json({ message: "logged out" });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(401).json({ message: "invalid token" });
    req.user = user;
    next();
  });
}

module.exports = verifyToken;
