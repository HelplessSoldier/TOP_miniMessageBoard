const express = require("express");
const morgan = require("morgan");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Message = require("./models/messageSchema");
const options = require("./options");

mongoConnect(options.MONGODB_URL());

const app = express();
app.use(morgan("dev"));
app.use(express.static('public'));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "/views"))

app.get("/", async (req, res) => {
  const messages = await getMessages();
  res.render('index', { title: "Home", messages });
});

app.get("/new-message", (req, res) => {
  res.render('newMessagePage', { title: "New" });
});

app.post("/submit-message", async (req, res) => {
  const newMessage = new Message({
    username: req.body.username,
    message: req.body.message,
    date_added: Date.now()
  });

  try {
    const savedMessage = await newMessage.save();
    console.log('New message saved:', savedMessage);
  } catch (err) {
    console.error(err);
  }
})

app.listen(options.PORT);

async function mongoConnect(url) {
  try {
    await mongoose.connect(url);
    console.log(`Connected to db, url: ${url}`)
  } catch (err) {
    console.error(err);
  }
};

async function getMessages() {
  try {
    const messages = await Message.find()
      .sort({ date_added: -1 })
    return messages;
  } catch (err) {
    console.error(err);
  }
};
