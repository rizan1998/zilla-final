const userSvc = require("../../app/src/services/user");
const User = require("../src/models/user");
const usersMock = require("../test/fixtures/users");

jest.mock("../src/models/user");

describe("User Service Tests", () => {
  const userId = 1;
  test("Create should create a new user and return it", async () => {
    const mockCreatedUser = {_id: userId, ...usersMock[0]};
    User.prototype.save.mockResolvedValue(mockCreatedUser);

    const createdUser = await userSvc.create(usersMock[0]);

    expect(User).toHaveBeenCalledWith(usersMock[0]);
    expect(createdUser).toEqual(mockCreatedUser);
  });
});
