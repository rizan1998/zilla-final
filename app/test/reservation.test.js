const reservationSvc = require("../src/services/reservation");
const reservation = require("../src/models/reservation");
const reservationMock = require("./fixtures/reservation");

jest.mock("../src/models/reservation");

describe("Reservation Service", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const reservationId = 123;

  test("Fetch should return data from Reservation models", async () => {
    reservation.find.mockResolvedValue([reservationMock]);
    const data = await reservationSvc.fetch(reservationId);
    expect(reservation.find).toHaveBeenCalledWith({ user_id: reservationId });
    expect(data).toEqual([reservationMock]);
  });

  test("getOne should return a reservation by id", async () => {
    reservation.findOne.mockResolvedValue(reservationMock);
    const data = await reservationSvc.getOne(reservationId);
    expect(reservation.findOne).toHaveBeenCalledWith({ _id: reservationId });
    expect(data).toEqual(reservationMock);
  });

  test("create should create a new reservation", async () => {
    const requestBody = { room_id: "123", date_checkin: "2023-06-01", date_checkout: "2023-06-03" };
    const saveMock = jest.fn().mockResolvedValue(reservationMock);
    reservation.mockReturnValue({ save: saveMock });
    const result = await reservationSvc.create(requestBody);
    expect(reservation).toHaveBeenCalledWith(requestBody);
    expect(saveMock).toHaveBeenCalled();
    expect(result).toEqual(reservationMock);
  });

  test("update should update a reservation by id", async () => {
    const requestBody = { field1: "value1", field2: "value2" };

    const findOneAndUpdateMock = jest.fn().mockResolvedValue(reservationMock);
    reservation.findOneAndUpdate = findOneAndUpdateMock;

    const findOneMock = jest.fn().mockResolvedValue(reservationMock);
    reservation.findOne = findOneMock;
    const result = await reservationSvc.update(requestBody, reservationId);

    expect(reservation.findOneAndUpdate).toHaveBeenCalledWith({ _id: reservationId }, requestBody, { replace: true });
    expect(reservation.findOne).toHaveBeenCalledWith({ _id: reservationId });
    expect(result).toEqual(reservationMock);
  });

  test("pay should update pay status of a reservation by id", async () => {
    const requestBody = { pay: true };
    const findOneAndUpdateMock = jest.fn().mockResolvedValue(reservationMock);
    reservation.findOneAndUpdate = findOneAndUpdateMock;

    const findOneMock = jest.fn().mockResolvedValue(reservationMock);
    reservation.findOne = findOneMock;
    const result = await reservationSvc.pay(requestBody, reservationId);

    expect(reservation.findOneAndUpdate).toHaveBeenCalledWith({ _id: reservationId }, { pay: true }, { replace: true });
    expect(reservation.findOne).toHaveBeenCalledWith({ _id: reservationId });
    expect(result).toEqual(reservationMock);
  });

  test("destroy should delete a reservation by id", async () => {
    const findOneAndDeleteMock = jest.fn().mockResolvedValue(reservationMock);
    reservation.findOneAndDelete = findOneAndDeleteMock;

    const result = await reservationSvc.destroy(reservationId);

    expect(reservation.findOneAndDelete).toHaveBeenCalledWith({ _id: reservationId });
    expect(result).toEqual(reservationMock);
  });
});
