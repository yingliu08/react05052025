const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(req.query.name);
});

router.get("/new", (req, res) => {
  res.render("users/new", { firstName: "test" });
});

router.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("error");
    res.render("users/new", { firstName: req.body.firstName });
  }
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`get user with id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`update user with id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`delete user with id ${req.params.id}`);
  });

//middleware
const users = [{ name: "john" }, { name: "jane" }];
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});
// router.get("/:id", (req, res) => {
//   res.send(`get user with id ${req.params.id}`);
// });
// router.put("/:id", (req, res) => {
//   res.send(`update user with id ${req.params.id}`);
// });
// router.delete("/:id", (req, res) => {
//   res.send(`delete user with id ${req.params.id}`);
// });

module.exports = router;
