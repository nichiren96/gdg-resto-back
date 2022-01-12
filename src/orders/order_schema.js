const mongoose = require("mongoose");

// Schema for order
const orderSchema = new mongoose.Schema({});
// Compile model from schema
module.exports = mongoose.model("Order", orderSchema);
