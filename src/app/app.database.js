const mongoose = require("mongoose");
const config = require("./app.config");

console.log("Connecting to database");

mongoose.connect(config.database.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

mongoose.connection.once("open", () => {
  console.log("Mongo database connected successfully");
});

module.exports = mongoose.connection;
