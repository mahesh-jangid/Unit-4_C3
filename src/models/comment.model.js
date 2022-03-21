const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema(
  {
    body: { type: Number, unique: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    book_id: { type: mongoose.Schema.Types.ObjectId, ref: "book" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("comment", commentSchema);
