require("dotenv").config();
const mongoUrl =
  "mongodb+srv://frsnmk:@cluster0.srmsa2d.mongodb.net/?retryWrites=true&w=majority";
module.exports = {
  dbUrl: mongoUrl,
};
