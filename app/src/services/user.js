const User = require("../models/user");
const bcrypt = require("bcrypt");

async function create(body) {
  const password = await bcrypt.hash(body.password, 10);
  let user = await new User({...body, password: password});
  user = await user.save();
  return user;
}

async function findUserBy(field, userIdentityValue) {
  console.log({[field]: userIdentityValue});
  const user = await User.findOne({[field]: userIdentityValue});
  return user;
}

module.exports = {
  create,
  findUserBy,
};
