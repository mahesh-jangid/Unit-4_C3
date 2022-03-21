const Comment = require("../models/comment.model");

const express = require("express");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const comment = await Comment.find().lean().exec();
    return res.send(comment);
  } catch (err) {
    console.log(err);
  }
});

router.post("", async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    return res.send(comment);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
