require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const PORT = 3000;
app.use(cookieParser());
app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const todosRoutes = require("./routes/todosRoutes");

app.use("/", authRoutes);
app.use("/", todosRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
