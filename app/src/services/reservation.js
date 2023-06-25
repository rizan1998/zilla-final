const Reservation = require("../models/reservation");
const dayjs = require("dayjs");

async function fetch(userId) {
  const data = await Reservation.find({ user_id: userId });
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
  reservation = await reservation.save();
  return reservation;
}

async function update(body, id) {
  await Reservation.findOneAndUpdate(
    { _id: id },
    { ...body },
    {
      replace: true,
    }
  );
  const data = await Reservation.findOne({ _id: id });
  return data;
}

async function pay(id) {
  await Reservation.findOneAndUpdate(
    { _id: id },
    { ...body },
    {
      replace: true,
    }
  );
  const data = await Reservation.findOne({ _id: id });
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
  pay,
  destroy,
};
