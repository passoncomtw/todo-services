const { mockApp } = require("../server.test");
const MOCK_USER = require("../../constants/mockUser");

let Authorization = null;

describe("Test user routes", () => {
  beforeAll(() => {
      return mockApp
        .post("/auth")
        .set("Content-Type", "application/json")
        .send(MOCK_USER)
        .then(response => {
            Authorization = `Bearer ${response.body.token}`;
        });
  });

  it("should get user information success", () => {
    return mockApp
      .get("/users/1")
      .set("Content-Type", "application/json")
      .set("Authorization", Authorization)
      .send()
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.data).not.toBe(undefined);
        expect(response.body.data.id).not.toBe(undefined);
        expect(response.body.data.name).not.toBe(undefined);
        expect(response.body.data.phone).not.toBe(undefined);
        expect(response.body.data.createdAt).not.toBe(undefined);
      });    
  });
});
