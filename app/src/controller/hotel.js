const hotelSvc = require("../services/hotel");

async function fetch(req, res) {
  const data = await hotelSvc.fetch();
  res.send(data);
}

async function create(req, res) {
  const hotel = await hotelSvc.create(req.body);
  res.send(hotel);
}

async function getOne(req, res) {
  const data = await hotelSvc.getOne(req.params.id);
  res.send(data);
}

async function update(req, res) {
  const data = await hotelSvc.update(req.params.id, req.body);
  res.send(data);
}

async function destroy(req, res) {
  const data = await hotelSvc.destroy(req.params.id);
  res.send(data);
}

module.exports = {
  fetch,
  create,
  getOne,
  update,
  destroy,
};
