const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const api = require("./routes/api");
const app = express();
const port = 3100;

app.use(express.json());
app.use(morgan("dev"));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
);

app.get("/", (req, res) => {
  res.json("Welcome to API Server!");
});
app.use("/api", api);

app.listen(port, () => {
  console.log(`Server started in port ${port}!`);
});
