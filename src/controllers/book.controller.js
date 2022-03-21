const Book = require("../models/book.model");

const express = require("express");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const book = await Book.find().lean().exec();
    return res.send(book);
  } catch (err) {
    console.log(err);
  }
});

router.post("", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    return res.send(book);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
