const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    reqiured: true,
  },
  //   user: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "User",
  //     required: true,
  //   },
  body: {
    type: String,
    reqiured: true,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
