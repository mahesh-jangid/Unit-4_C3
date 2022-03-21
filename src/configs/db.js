const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://maheshJ:mahesh9000@cluster0.3yoo8.mongodb.net/Book-system?retryWrites=true&w=majority"
  );
};

module.exports = connect;
