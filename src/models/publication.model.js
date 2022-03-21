const mongoose = require("mongoose");

const publicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    book_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "book",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("publication", publicationSchema);
