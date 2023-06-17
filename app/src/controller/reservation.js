const reservationSvc = require("../services/reservation");

async function fetch(req, res) {
  const data = await reservationSvc.fetch();
  res.send(data);
}
async function getOne(req, res) {
  const data = await reservationSvc.getOne(req.params.id);
  res.send(data);
}
async function create(req, res) {
  const reservation = await reservationSvc.create(req.body);
  res.send(reservation);
}
async function update(req, res) {
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
  destroy,
};
