const dayjs = require("dayjs");

// convert english date YYYY-MM-DD
function formatDate(date) {
  const formattedDate = dayjs(date, "YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD HH:mm:ss");
  return formattedDate;
}

module.exports = formatDate;
