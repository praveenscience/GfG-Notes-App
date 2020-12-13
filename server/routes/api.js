const app = require("express").Router();

app.get("/", (req, res) => {
  res.json("Welcome to /api!");
});

module.exports = app;
