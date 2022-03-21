const express = require("express");

const User = require("./models/user.model.js");
const userController = require("./controllers/user.controller");
const bookController = require("./controllers/book.controller");
const commentsController = require("./controllers/comments.controller");
const { body, validationResult } = require("express-validator");
const { register, login } = require("./controllers/auth.controller");
const connect = require("./configs/db");
const app = express();
app.use(express.json());

app.use("/user", userController);
app.use("/book", bookController);
app.use("/comment", commentsController);
app.post("/login", login);
app.post(
  "/register",
  body("firstName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Name cannot be empty")
    .custom(async (len) => {
      if (len < 3 || len > 30) {
        throw new Error(
          "Length should be of atleast min 3 and max 30 characters"
        );
      }
      return true;
    }),
  body("lastName")
    .trim()
    .custom(async (len) => {
      if (len < 3 || len > 30) {
        throw new Error(
          "Length should be of atleast min 3 and max 30 characters"
        );
      }
      return true;
    }),
  body("email")
    .isEmail()
    .withMessage("invalid Email")
    .custom(async (value) => {
      const user = await User.findOne({ email: value });
      if (user) {
        throw new Error("Email is already exist");
      }
      return true;
    }),
  body("age")
    .trim()
    .not()
    .isEmpty()
    .withMessage("age can not be empty")
    .custom(async (len) => {
      if (len < 1 || len > 150) {
        throw new Error("age should be between 1 to 150");
      }
      return true;
    }),
  body("password")
    .not()
    .isEmpty()
    .withMessage("Password is required")
    .isLength({ min: 5 })
    .withMessage("Length should be of atleast 5 characters")
    .custom((value) => {
      const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,15}$/;
      if (!value.match(passw)) {
        throw new Error("Password must be strong");
      }
      return true;
    }),
  register
);

app.listen(5000, async () => {
  try {
    await connect();
  } catch (err) {
    console.log(err);
  }

  console.log("listening on port 5000");
});
