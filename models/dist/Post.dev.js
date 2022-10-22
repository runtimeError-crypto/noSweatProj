"use strict";

var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  creator: {
    type: mongoose.Schema.Types.Opjects,
    ref: "User"
  },
  updatedBy: [{
    type: mongoose.Schema.Types.Opjects,
    ref: "User"
  }]
});
module.exports = mongoose.model("Post", postSchema);