const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
const todosRouter = require("./routes/todos");
app.use(todosRouter);

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(port, () => {
  console.log(`listening on port  ${port}`);
});
