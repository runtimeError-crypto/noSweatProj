const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.Opjects, ref: "User" },
  updatedBy: [{ type: mongoose.Schema.Types.Opjects, ref: "User" }],
});

module.exports = mongoose.model("Post", postSchema);
