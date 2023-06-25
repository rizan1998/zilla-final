const bcrypt = require("bcrypt");
const userSvc = require("../services/user");

async function handleLogin(payload) {
  const {username, password} = payload;

  const user = await userSvc.findUserBy("username", username);
  console.log(user, "dari funsi findUser by");
  console.log({username, password});
  const match = await bcrypt.compare(password, user.password);
  if (match) {
    // JWT authentication
    return {message: "Berhasil login"};
  } else {
    return {message: "unauthorized"};
  }
}

module.exports = {
  handleLogin,
};
