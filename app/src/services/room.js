const Room = require("../models/room");

async function fetch() {
  const data = await Room.find({});
  if (data.length) {
    return data;
  } else {
    return { message: "data is empty" };
  }
}
async function getOne(id) {
  const data = await Room.findOne({ _id: id });
  return data;
}
async function create(body) {
  let room = new Room({ ...body });
  room = await room.save();
  return room;
}
async function update(body, id) {
  const data = await Room.findOneAndUpdate(
    { _id: id },
    { ...body },
    {
      replace: true,
    }
  );
  return data;
}
async function destroy(id) {
  const data = await Room.findOneAndDelete({ _id: id });
  return data;
}

module.exports = {
  fetch,
  getOne,
  create,
  update,
  destroy,
};
