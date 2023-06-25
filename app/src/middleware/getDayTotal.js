function getDayTotal($start, $end) {
  const date1 = new Date($start);
  const date2 = new Date($end);
  const diffInMilliseconds = Math.abs(date2.getTime() - date1.getTime());
  const diffInDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));
  return diffInDays;
}

module.exports = getDayTotal;
