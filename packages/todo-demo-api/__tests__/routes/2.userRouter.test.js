const { mockApp } = require("../server.test");
const MOCK_USER = require("../../constants/mockUser");

let Authorization = null;
let mockUserResp = null;
describe("Test user routes", () => {
  beforeAll(() => {
    return mockApp
      .post("/auth")
      .set("Content-Type", "application/json")
      .send(MOCK_USER)
      .then((response) => {
        mockUserResp = response.body;
        Authorization = `Bearer ${response.body.token}`;
      });
  });

  it("should get 0987654321 information success", () => {
    return mockApp
      .get(`/users/${mockUserResp.user.id}`)
      .set("Content-Type", "application/json")
      .set("Authorization", Authorization)
      .send()
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.data).not.toBe(undefined);
        expect(response.body.data.id).toBe(mockUserResp.user.id);
        expect(response.body.data.name).toBe(mockUserResp.user.name);
        expect(response.body.data.phone).toBe(mockUserResp.user.phone);
        expect(response.body.data.createdAt).not.toBe(undefined);
      });
  });

  it("should update 0987654321 information success", () => {
    return mockApp
      .put(`/users/${mockUserResp.user.id}`)
      .set("Content-Type", "application/json")
      .set("Authorization", Authorization)
      .send({ name: "updatename" })
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.data).not.toBe(undefined);
        expect(response.body.data.id).toBe(mockUserResp.user.id);
        expect(response.body.data.name).toBe("updatename");
        expect(response.body.data.phone).toBe(mockUserResp.user.phone);
        expect(response.body.data.createdAt).not.toBe(undefined);
      });
  });
});
