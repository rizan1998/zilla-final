const app = require("./app");
const dayjs = require("dayjs");
      const runningOn = dayjs().format('YYYY-MM-DD HH:mm:ss');

app.listen(3000, () => {
  console.log("application listen on http://localhost:3000 ", runningOn);
});
