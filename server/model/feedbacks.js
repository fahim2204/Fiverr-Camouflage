const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Feedbacks",
  new mongoose.Schema({
    opinion: Number,
    category: Number,
    feedText: String,
    createdAt: { type: Date, default: Date.now },
    user: mongoose.SchemaTypes.ObjectId
  })
);
