require("dotenv").config();
const mongoUrl = process.env.mongoUrl;

module.exports = {
  dbUrl: mongoUrl,
};
