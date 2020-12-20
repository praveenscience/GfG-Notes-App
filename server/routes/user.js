const user = require("express").Router();

user.get("/", (req, res) => {
  if (!!req.session.User) {
    res.json(req.session.User);
  } else {
    res.status(401).json({
      Error: true,
      Success: false,
      Message: "Not Logged In!"
    });
  }
});
user.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!Users[username]) {
    req.session.destroy();
    res.status(404).json({
      Error: true,
      Success: false,
      Message: "User not found!"
    });
  } else if (Users[username] && Users[username] !== password) {
    req.session.destroy();
    res.status(403).json({
      Error: true,
      Success: false,
      Message: "Invalid username and password!"
    });
  } else {
    req.session.User = {
      Name: username
    };
    res.json({
      Error: false,
      Success: true,
      Message: {
        Name: username
      }
    });
  }
});
user.post("/register", (req, res) => {
  const db = req.app.get("db");
  const { username, password, fullname } = req.body;
  if (
    !username ||
    !password ||
    !fullname ||
    username.length < 4 ||
    password.length < 4 ||
    fullname.length < 4
  ) {
    res.json("Wrong Input");
  } else {
    db.from("users")
      .where({ username })
      .then(rows => {
        if (rows.length === 0) {
          db("users")
            .insert({ username, password, fullname })
            .then(() => {
              res.json("Created user");
            });
        } else {
          res.json("User already exists");
        }
      });
  }
});
user.post("/logout", (req, res) => {
  req.session.destroy();
  res.status(202).json({
    Error: false,
    Success: true,
    Message: "User successfully logged out."
  });
});

module.exports = user;
