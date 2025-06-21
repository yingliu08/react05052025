require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const PORT = 3000;
app.use(cookieParser());
app.use(express.json());

const userRoutes = require("./routes/userRoutes");
const todoRoutes = require("./routes/todoRoutes");

app.use("/", userRoutes);
app.use("/", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
