const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Profiles",
  new mongoose.Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true,minlength:4 },
    profilePic: String,
    occupation: String,
    gender: String,
    email: { type: String, required: true, unique: true },
    country: String,
    city: String,
    token: String,
    status: Number,
    joinedAt: { type: Date, default: Date.now },
    lastLogin: { type: Date, default: Date.now },
  })
);
