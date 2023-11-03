const express = require("express");
const morgan = require("morgan");
const path = require("path");
const mongoose = require("mongoose");

const PORT = 3000;

const app = express();
app.use(morgan("dev"));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "/views"))

app.get("/", (req, res) => {
  res.render('index', { title: "Home" });
})

app.listen(PORT);
