const file = require("express").Router();

file.get("/", (req, res) => {
  res.json("Files Endpoint!");
});
file.post("/", (req, res) => {
  res.json(Object.keys(req));
});

module.exports = file;
