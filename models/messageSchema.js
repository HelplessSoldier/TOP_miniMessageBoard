const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const MessageSchema = new Schema({
  username: { type: String, required: true },
  message: { type: String, required: true },
  date_added: { type: Date, required: true }
});

module.exports = mongoose.model("userMessages", MessageSchema);
