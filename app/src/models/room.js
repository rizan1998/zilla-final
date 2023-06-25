const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const roomSchema = new Schema(
  {
    room_name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    hotel_id: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
  },
  { collection: "rooms" }
);

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
