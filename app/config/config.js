require("dotenv").config();
const mongoUrl = process.env.MONGO_URL;

module.exports = {
  dbUrl: mongoUrl,
};
