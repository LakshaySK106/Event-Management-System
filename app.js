//express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("home", { title: "Event Mangement System" });
});
app.get("/login", (req, res) => {
  res.render("login", { title: "Login" });
});
app.get("/register", (req, res) => {
  res.render("register", { title: "Register" });
});
app.listen(PORT, function (req, res) {
  console.log("Server started on port " + PORT);
});
