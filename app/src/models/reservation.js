const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reservationSchema = new Schema(
  {
    reservation_code: {
      type: String,
      required: true,
    },
    total_price: {
      type: Number,
      required: true,
    },
    date_checkin: {
      type: Date,
      required: true,
    },
    hotel_id: {
      type: Number,
      required: true,
    },
    room_id: {
      type: String,
      required: true,
    },
  },
  { collection: "reservations" }
);

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
