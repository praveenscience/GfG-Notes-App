const file = require("express").Router();

file.get("/", (req, res) => {
  res.json("Files Endpoint!");
});

module.exports = file;
