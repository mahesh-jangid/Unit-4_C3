const Post = require("../models/post.model");

const express = require("express");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const post = await Post.find().limit(10).lean().exec();
    return res.send(post);
  } catch (err) {
    console.log(err);
  }
});

router.post("", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    return res.send(post);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
