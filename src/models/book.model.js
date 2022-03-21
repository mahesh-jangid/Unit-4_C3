const mongoose = require("mongoose");
const BookSchema = new mongoose.Schema(
  {
    likes: { type: Number, default: 0 },
    coverImage: { type: string, required: true, max: 1 },
    content: { type: string, required: true },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    publication: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("book", BookSchema);
