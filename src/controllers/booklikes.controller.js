const Book = require("../models/book.model");
const Booklikes = require("../models/booklikes.model");
const express = require("express");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const book = await Book.find().lean().exec();
  } catch (err) {
    console.log(err);
  }
});

router.post("", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    let booklikes = await Booklikes.findById(req.body.book_id).lean().exec();
    let count = 0;
    if (booklikes.likes === true) {
      return false;
    } else {
      count++;
    }
    return res.send(book);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
