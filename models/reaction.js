const mongoose = require("mongoose")

const reaction = new mongoose.Schema({
  type: String,
  user: mongoose.Schema.Types.ObjectId
});

module.exports = reaction;