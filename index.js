const express = require("express");
const morgan = require("morgan");
const path = require("path");
const mongoose = require("mongoose");

const PORT = 3000;

const app = express();
app.use(morgan("dev"));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "/views"))

app.get("/", (req, res) => {
  res.render('index', { title: "Home" });
})

app.get("/new-message", (req, res) => {
  res.render('newMessagePage', { title: "New" });
})

app.post("/submit-message", (req, res) => {
  console.log('message submit attempted');
  const userName = req.body['user-name'];
  const message = req.body.message;
  console.log(`username: ${userName}`);
  console.log(`message: ${message}`)

})

app.listen(PORT);
