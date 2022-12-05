const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Profiles",
  new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    profilePic: String,
    occupation: String,
    gender: String,
    email: String,
    country: String,
    city: String,
    token: String,
    status: Number,
    joinedAt: { type: Date, default: Date.now },
    lastLogin: { type: Date, default: Date.now },
  })
);
