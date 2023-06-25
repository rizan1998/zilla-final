const bcrypt = require("bcrypt");
const userSvc = require("../services/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function handleLogin(payload) {
  const {username, password} = payload;
  const user = await userSvc.findUserBy("username", username);
  const match = await bcrypt.compare(password, user.password);
  if (match) {
    // JWT authentication
    const accessToken = jwt.sign(
      {
        username: user.username,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {expiresIn: "24h"}
    );
    return {accessToken};
  } else {
    return {message: "unauthorized"};
  }
}

module.exports = {
  handleLogin,
};
