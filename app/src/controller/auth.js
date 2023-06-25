const userSvc = require("../services/user");
const authSvc = require("../services/auth");

async function login(req, res) {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ message: "Username dan password harus diisi!" });

  const findUser = await userSvc.findUserBy("username", username);
  if (!findUser) return res.sendStatus(401);
  const auth = await authSvc.handleLogin(req.body);
  res.send(auth);
}

module.exports = {
  login,
};
