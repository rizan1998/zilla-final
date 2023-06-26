const reservationSvc = require("../services/reservation");
const roomSvc = require("../services/room");

// middelware
const generateCode = require("../middleware/generateCode");
const getDayTotal = require("../middleware/getDayTotal");
const formatDate = require("../middleware/formatDate");

async function fetch(req, res) {
  const user_id = req.params.user_id;
  const data = await reservationSvc.fetch(user_id);
  res.send(data);
}

async function getOne(req, res) {
  const data = await reservationSvc.getOne(req.params.id);
  res.send(data);
}

async function create(req, res) {
  const room_id = req.body.room_id;
  const date_checkin = req.body.date_checkin;
  const date_checkout = req.body.date_checkout;

  const room = await roomSvc.getOne(room_id);
  if (room) {
    const price = room.price;
    const totalDay = getDayTotal(date_checkin, date_checkout);
    const totalPrice = price * totalDay;

    req.body.reservation_code = generateCode("RSV");
    req.body.total_price = totalPrice;
    req.body.date_checkin = formatDate(date_checkin);
    req.body.date_checkout = formatDate(date_checkout);
    req.body.user_id = req.userId;
    const reservation = await reservationSvc.create(req.body);
    res.send(reservation);
  }
}

async function update(req, res) {
  const room_id = req.body.room_id;
  const date_checkin = req.body.date_checkin;
  const date_checkout = req.body.date_checkout;

  const room = await roomSvc.getOne(room_id);
  if (room) {
    const price = room.price;
    const totalDay = getDayTotal(date_checkin, date_checkout);
    const totalPrice = price * totalDay;

    req.body.total_price = totalPrice;
    req.body.date_checkin = formatDate(date_checkin);
    req.body.date_checkout = formatDate(date_checkout);

    const data = await reservationSvc.update(req.body, req.params.id);
    res.send(data);
  }
}

async function pay(req, res) {
  req.body.pay = true;
  const data = await reservationSvc.update(req.body, req.params.id);
  res.send(data);
}

async function destroy(req, res) {
  const data = await reservationSvc.destroy(req.params.id);
  res.send(data);
}

module.exports = {
  fetch,
  getOne,
  create,
  update,
  pay,
  destroy,
};
