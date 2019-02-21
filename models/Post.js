const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  texto: { type: String, required: true },
  likes: { type: Number, default: 0, required: true }
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
