const isNumber = require("lodash/isNumber");
const isString = require("lodash/isString");
const isBoolean = require("lodash/isBoolean");
const { mockApp } = require("../server.test");
const MOCK_USER = require("../../constants/mockUser");
const { deleteUserResult } = require("../../services/userServices");

let Authorization = null;
let mockUserResp = null;
let mockTaskResp = null;

const mockTask = {
  title: "Task Title",
  comment: "任務內容",
  deadlineAt: "2023-11-18 01:00:00",
};

describe("Test task routes", () => {
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

  afterAll(() => {
    return deleteUserResult(mockUserResp.user.id);
  });

  it("should create task success", () => {
    return mockApp
      .post("/tasks")
      .set("Content-Type", "application/json")
      .set("Authorization", Authorization)
      .send(mockTask)
      .then((response) => {
        expect(response.statusCode).toBe(200);

        expect(isString(response.body.data.id)).toBeTruthy();
        expect(response.body.data.title).toBe(mockTask.title);
        expect(response.body.data.comment).toBe(mockTask.comment);
        expect(response.body.data.isCompleted).toBe(false);
        expect(response.body.data.isDeleted).toBe(false);

        const {user} = response.body.data;
        expect(user.id).toBe(mockUserResp.user.id);
        expect(user.name).toBe(mockUserResp.user.name);
        expect(user.phone).toBe(mockUserResp.user.phone);

        mockTaskResp = response.body.data;
      });
  });

  it("should get tasks success", () => {
    return mockApp
      .get("/tasks")
      .set("Content-Type", "application/json")
      .set("Authorization", Authorization)
      .send()
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(isNumber(response.body.items.count)).toBeTruthy();
        response.body.items.rows.map((item) => {
          expect(isString(itemRow.id)).toBeTruthy();
          expect(isString(itemRow.title)).toBeTruthy();
          expect(isString(itemRow.comment)).toBeTruthy();
          expect(isBoolean(itemRow.isCompleted)).toBeTruthy();
        });
      });
  });
});
