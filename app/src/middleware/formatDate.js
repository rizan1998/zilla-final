const dayjs = require("dayjs");

module.exports = (err, req, res, next) => {
  // Mendapatkan tanggal dari body request
  const { date_checkin } = req.body;
  const formattedDate = dayjs(date_checkin, "YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD HH:mm:ss");
  req.body.date_checkin = formattedDate;
  next();
};
