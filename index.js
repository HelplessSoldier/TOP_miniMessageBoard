const express = require("express");
const morgan = require("morgan");
const path = require("path");
const mongoose = require("mongoose");

const PORT = 3000;

const app = express();
app.use(morgan("dev"));
app.use(express.static('public'));
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
  console.log(`name: ${req.body.name}`);
  console.log(`message: ${req.body.message}`);
})

app.listen(PORT);
