const hotelSvc = require("../../app/src/services/hotel");
const Hotel = require("../src/models/hotel");
const hotelsMock = require("../test/fixtures/hotels");

jest.mock("../src/models/hotel");

describe("Service Hotels Test", () => {
  const hotelId = 123;

  test("Fetch should return data from hotel models", async () => {
    Hotel.find.mockResolvedValue(hotelsMock);
    const data = await hotelSvc.fetch();
    expect(data).toEqual(hotelsMock);
  });

  test("Fetch should return message data is empty", async () => {
    Hotel.find.mockResolvedValue([]);
    const data = await hotelSvc.fetch();
    expect(data).toEqual({ message: "Data is empty" });
  });

  test("Create should create a new hotel and return it", async () => {
    const mockCreatedHotel = { _id: hotelId, ...hotelsMock[0] };
    Hotel.prototype.save.mockResolvedValue(mockCreatedHotel);
    const createdHotel = await hotelSvc.create(hotelsMock[0]);

    expect(Hotel).toHaveBeenCalledWith(hotelsMock[0]);
    expect(createdHotel).toEqual(mockCreatedHotel);
  });

  test("GetOne should retrieve a hotel by id", async () => {
    const mockHotelData = { _id: hotelId, ...hotelsMock[0] };
    Hotel.findOne.mockResolvedValueOnce(mockHotelData);

    const hotel = await hotelSvc.getOne(hotelId);
    expect(Hotel.findOne).toHaveBeenCalledWith({ _id: hotelId });
    expect(hotel).toEqual(mockHotelData);
  });

  test("Update should update a hotel by ID and return the updated data", async () => {
    const mockUpdateData = {
      _id: hotelId,
      name: "Oyo Hotel",
      address: "Cianjur",
    };
    const mockUpdatedData = { _id: hotelId, ...hotelsMock[0] };
    Hotel.findOneAndUpdate.mockResolvedValueOnce(mockUpdatedData);

    const updatedHotel = await hotelSvc.update(hotelId, mockUpdateData);

    expect(Hotel.findOneAndUpdate).toHaveBeenCalledWith(
      {
        _id: hotelId,
      },
      { ...mockUpdateData },
      { replace: true }
    );

    expect(updatedHotel).toEqual(mockUpdatedData);
  });

  test("Destroy should delete a hotel by id and return deleted data", async () => {
    const mockDeletedData = { _id: hotelId, ...hotelsMock[0] };
    Hotel.findOneAndDelete.mockResolvedValueOnce(mockDeletedData);

    const deletedHotel = await hotelSvc.destroy(hotelId);

    expect(Hotel.findOneAndDelete).toHaveBeenCalledWith({ _id: hotelId });
    expect(deletedHotel).toEqual(mockDeletedData);
  });
});
