const app = require("express").Router();
const note = require("./note");
const user = require("./user");
const file = require("./file");

app.get("/", (req, res) => {
  res.json("Welcome to /api!");
});
app.use("/note", note);
app.use("/user", user);
app.use("/file", file);

module.exports = app;
