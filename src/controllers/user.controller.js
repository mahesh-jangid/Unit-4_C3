const User = require("../models/user.model");

const express = require("express");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const user = await User.find().lean().exec();
    return res.send(user);
  } catch (err) {
    console.log(err);
  }
});

router.post("", async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.send(user);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:user_id", async (req, res) => {
  try {
    const user = await User.findById(req.params.user_id).lean().exec();
    return res.send(user);
  } catch (err) {
    console.log(err);
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.send(user);
  } catch (err) {
    console.log(err);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findOneAndDelete(req.params.id);
    return res.send(user);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
