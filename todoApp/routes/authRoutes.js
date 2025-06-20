const express = require("express");
const router = express.Router();
const {
  login,
  register,
  profile,
  logout,
} = require("../controllers/authController");

const verifyToken = require("../middleware/verifyToken");

router.post("/login", login);
router.post("/register", register);
router.get("/profile", verifyToken, profile);
router.post("/logout", verifyToken, logout);

module.exports = router;
