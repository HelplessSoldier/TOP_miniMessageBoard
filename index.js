const express = require("express");
const morgan = require("morgan");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Message = require("./models/messageSchema");

const PORT = 3000;
const MONGODB_URL = "mongodb://127.0.0.1:27017/"

mongoConnect(MONGODB_URL);

const app = express();
app.use(morgan("dev"));
app.use(express.static('public'));
app.use(bodyParser.json());
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
  console.log(req.body)
})

app.listen(PORT);

async function mongoConnect(url) {
  try {
    await mongoose.connect(url);
    console.log(`Connected to db, url: ${url}`)
  } catch (err) {
    console.error(err);
  }
}
