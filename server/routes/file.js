const file = require("express").Router();
const multer = require("multer");
const upload = multer({
  dest: __dirname.replace("/routes", "") + "/uploads"
});

file.get("/", (req, res) => {
  res.json("Files Endpoint!");
});
file.post("/", upload.single("file"), (req, res) => {
  res.json(req.file);
});

module.exports = file;
