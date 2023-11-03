const options = {
  PORT: 3000,
  DB_NAME: "miniMessageBoardDev",
  MONGODB_URL() {
    return `mongodb://127.0.0.1:27017/${this.DB_NAME}`
  }
}

module.exports = options;
