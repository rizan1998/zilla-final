function generateOrderCode(frontCode) {
  const timestamp = Date.now();
  const randomNum = Math.floor(Math.random() * 1000);

  const orderCode = `${frontCode}${timestamp}${randomNum}`;
  return orderCode;
}

module.exports = generateOrderCode;
