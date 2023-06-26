const app = require("./app");
const dayjs = require("dayjs");
const runningOn = dayjs().format("YYYY-MM-DD HH:mm:ss");

app.listen(process.env.PORT, () => {
  console.log(
    "application listen on http://localhost:".process.env.PORT,
    runningOn
  );
});
