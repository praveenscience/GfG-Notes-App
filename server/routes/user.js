const user = require("express").Router();

// Dummy list of users for now.
const Users = {
  Praveen: "Hello123",
  Bhooshan: "dark456",
  Rishav: "ris2000",
  Shivam: "password",
  Rajan: "rks12345",
  Isabel: "coolcats123",
  Shashi: "akcd@123"
};

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
  const { username, password } = req.body;
  if (!Users[username]) {
    Users[username] = password;
    res.status(201).json({
      Error: false,
      Success: true,
      Message: "Created user " + username + "."
    });
  } else {
    res.status(409).json({
      Error: true,
      Success: false,
      Message: "User " + username + " already exists."
    });
  }
});

module.exports = user;
