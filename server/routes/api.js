const app = require("express").Router();
const note = require("./note");
const user = require("./user");

app.get("/", (req, res) => {
  res.json("Welcome to /api!");
});

app.get("/seed", (req, res) => {
  const db = req.app.get("db");
  db.schema.hasTable("users").then(exists => {
    if (!exists) {
      db.schema
        .createTable("users", table => {
          table.increments("id").primary();
          table.string("name");
          table.string("pass");
          table.timestamp("born").defaultTo(db.fn.now());
        })
        .then(() => {
          res.status(201).json("Table just born");
        });
    } else {
      res.json("Table already born");
    }
  });
});

app.use("/note", note);
app.use("/user", user);

module.exports = app;
