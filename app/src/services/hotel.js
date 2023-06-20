const Hotel = require("../models/hotel");

async function fetch() {
  const data = await Hotel.find({});
  if (data.length) {
    return data;
  } else {
    return {message: "Data is empty"};
  }
}

async function create(body) {
  let hotel = new Hotel({...body});
  hotel = await hotel.save();
  return hotel;
}

async function getOne(id) {
  const data = await Hotel.findOne({_id: id});
  return data;
}

async function update(id, body) {
  const data = await Hotel.findOneAndUpdate(
    {_id: id},
    {...body},
    {replace: true}
  );

  return data;
}

async function destroy(id) {
  const data = await Hotel.findOneAndDelete({_id: id});
  return data;
}

module.exports = {
  fetch,
  create,
  getOne,
  update,
  destroy,
};
