const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema(
  {
    message: {
      type: String
    },
    sender: {
      type: String
    },
    room: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

let Message = mongoose.model("ChatIn", chatSchema);

module.exports = Message;

