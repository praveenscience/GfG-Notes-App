const app = require("express").Router();
const note = require("./note");
const user = require("./user");

app.get("/", (req, res) => {
  res.json("Welcome to /api!");
});
app.use("/note", note);
app.use("/user", user);

module.exports = app;
