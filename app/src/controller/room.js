const roomSvc = require("../services/room");

async function fetch(req, res) {
  const data = await roomSvc.fetch();
  res.send(data);
}
async function getOne(req, res) {
  const data = await roomSvc.getOne(req.params.id);
  res.send(data);
}
async function create(req, res) {
  const room = await roomSvc.create(req.body);
  res.send(room);
}
async function update(req, res) {
  const data = await roomSvc.update(req.body, req.params.id);
  res.send(data);
}
async function destroy(req, res) {
  const data = await roomSvc.destroy(req.params.id);
  res.send(data);
}

module.exports = {
  fetch,
  getOne,
  create,
  update,
  destroy,
};
