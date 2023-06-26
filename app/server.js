const app = require("./app");
const dayjs = require("dayjs");
const runningOn = dayjs().format("YYYY-MM-DD HH:mm:ss");
require("dotenv").config();

app.listen(3301, () => {
  console.log("application listen on http://localhost:3301 ", runningOn);
});
