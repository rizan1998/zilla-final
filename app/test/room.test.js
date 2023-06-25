const roomSvc = require("../src/services/room");
const room = require("../src/models/room");
const roomMock = require("./fixtures/room");

jest.mock("../src/models/room");

describe("Room Service", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const roomId = 123;

  test("fetch should return all rooms", async () => {
    const findMock = jest.fn().mockResolvedValue([roomMock]);
    room.find = findMock;

    const result = await roomSvc.fetch();

    expect(room.find).toHaveBeenCalledWith({});
    expect(result).toEqual([roomMock]);
  });

  test("fetch should return empty message if no rooms found", async () => {
    const findMock = jest.fn().mockResolvedValue([]);
    room.find = findMock;

    const result = await roomSvc.fetch();

    expect(room.find).toHaveBeenCalledWith({});
    expect(result).toEqual({ message: "data is empty" });
  });

  test("getOne should return a room by id", async () => {
    const findOneMock = jest.fn().mockResolvedValue(roomMock);
    room.findOne = findOneMock;

    const result = await roomSvc.getOne(roomId);

    expect(room.findOne).toHaveBeenCalledWith({ _id: roomId });
    expect(result).toEqual(roomMock);
  });

  test("create should create a new room", async () => {
    const requestBody = { field1: "value1", field2: "value2" };

    const saveMock = jest.fn().mockResolvedValue(roomMock);
    room.prototype.save = saveMock;

    const result = await roomSvc.create(requestBody);

    expect(room).toHaveBeenCalledWith(requestBody);
    expect(room.prototype.save).toHaveBeenCalled();
    expect(result).toEqual(roomMock);
  });

  test("update should update a room by id", async () => {
    const requestBody = { field1: "value1", field2: "value2" };

    const findOneAndUpdateMock = jest.fn().mockResolvedValue(roomMock);
    room.findOneAndUpdate = findOneAndUpdateMock;

    const result = await roomSvc.update(requestBody, roomId);

    expect(room.findOneAndUpdate).toHaveBeenCalledWith({ _id: roomId }, requestBody, { replace: true });
    expect(result).toEqual(roomMock);
  });

  test("destroy should delete a room by id", async () => {
    const findOneAndDeleteMock = jest.fn().mockResolvedValue(roomMock);
    room.findOneAndDelete = findOneAndDeleteMock;

    const result = await roomSvc.destroy(roomId);

    expect(room.findOneAndDelete).toHaveBeenCalledWith({ _id: roomId });
    expect(result).toEqual(roomMock);
  });
});
