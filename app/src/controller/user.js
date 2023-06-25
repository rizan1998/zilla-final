const userSvc = require("../services/user");

async function create(req, res) {
  const user = await userSvc.create(req.body);
  res.send(user);
}

module.exports = {
  create,
};
