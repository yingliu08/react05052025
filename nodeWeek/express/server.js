const express = require("express"); //import express module
const app = express(); //call the express function to create app
const userRouter = require("./routes/users");

app.use("/users", userRouter);
app.use(logger);
app.use(express.urlencoded({ extends: true })); //for req.originalUrl
app.use(express.json()); //for req.body

app.set("view engine", "ejs"); //for render
app.get("/", (req, res) => {
  // res.sendStatus(500);
  //res.status(500).send("Hi");
  //res.status(500).json({ message: "error" });
  //res.json({message:"error"})
  // res.download("server.js");
  res.render("index", { text: "world" }); //need index.ejs and install ejs
});

//customize middleware
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}
app.listen(3000);
