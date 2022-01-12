const mongoose = require("mongoose");

// Schema for order
const userSchema = new mongoose.Schema({});
// Compile model from schema
module.exports = mongoose.model("User", userSchema);
