const User = require("../models/user");

async function create(body) {
  let user = await new User({...body});
  user = await user.save();
  return user;
}

module.exports = {
  create,
};
