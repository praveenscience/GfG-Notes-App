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
          table.string("username");
          table.string("password");
          table.string("fullname");
          table.timestamp("born").defaultTo(db.fn.now());
        })
        .then(() => {
          db.schema.hasTable("notes").then(exists => {
            if (!exists) {
              db.schema
                .createTable("notes", table => {
                  table.increments("note_id").primary();
                  table.string("title");
                  table.string("desc");
                  table.integer("u_id").unsigned().notNullable();
                  table.foreign("u_id").references("id").inTable("users");
                  table.timestamp("wrote").defaultTo(db.fn.now());
                })
                .then(() => {
                  res
                    .status(201)
                    .json("Users were born and Notes were written");
                });
            } else {
              res.json("Already written");
            }
          });
        });
    } else {
      res.json("Users already born");
    }
  });
});

app.use("/note", note);
app.use("/user", user);

module.exports = app;
