const Reservation = require("../models/reservation");
const dayjs = require("dayjs");

async function fetch() {
  const data = await Reservation.find({});
  if (data.length) {
    return data;
  } else {
    return { message: "data is empty" };
  }
}
async function getOne(id) {
  const data = await Reservation.findOne({ _id: id });
  return data;
}
async function create(body) {
  let reservation = new Reservation({ ...body });
  let date = dayjs(body.date_checkin).format("YYYY-MM-DD HH:mm:ss");
  reservation.date_checkin = date;
  reservation = await reservation.save();
  return reservation;
}
async function update(body, id) {
  const data = await Reservation.findOneAndUpdate(
    { _id: id },
    { ...body },
    {
      replace: true,
    }
  );
  return data;
}
async function destroy(id) {
  const data = await Reservation.findOneAndDelete({ _id: id });
  return data;
}

module.exports = {
  fetch,
  getOne,
  create,
  update,
  destroy,
};
