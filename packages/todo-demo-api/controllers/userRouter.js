const express = require('express');
const router = express.Router();
const yup = require("yup");
const { responseErrWithMsg } = require('../helpers/response');
const { createUser, getUserByUserId, updateUserByUserId } = require('../services/userServices');
const { registeRequestSchema, updateUserRequestSchema } = require('../helpers/schemas');

/**
 * @typedef SingleUser
 * @property {string} id.required
 *   - user Id
 *   - eg: 1
 * @property {string} phone.required
 *   - user phone
 *   - eg: 0987654321
 * @property {string} name.required
 *   - name
 *   - eg: Tony
 * @property {string} createdAt.required
 *   - user 建立時間
 *   - eg: 2023-11-17T07:54:10.450Z
 */

/**
 * @typedef UserResponse
 * @property {boolean} success.required
 *   - 是否成功
 *   - eg: true
 * @property {SingleUser.model} data.required
 *   - 使用者資訊
 */

/**
 * @typedef UpdateUserRequest
 * @property {string} name.required
 *   - name
 *   - eg: Tony
 */

/**
 * @typedef RegisteUserRequest
 * @property {string} phone.required
 *   - phone
 *   - eg: 0987654321
 * @property {string} name.required
 *   - name
 *   - eg: testdemo001
 * @property {string} password.required
 *   - 使用者密碼 6 ~ 20 個英數組合
 *   - eg: a12345678
 */

/**
 * get user information
 * @group users
 * @route GET /users/{userId}
 * @param {number} userId.path.required - user identity number
 * @returns {UserResponse.model} 200 - success, return requested data
 * @returns {String} 400 - invalid request params/query/body
 * @returns {String} 404 - required data not found
 * @returns {Error} 500 - unexpected error
 * @security JWT
 * @property {{integer}} code - response code - eg: 200
 */
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await getUserByUserId(userId);

    res.json({ success: true, data: result });
  } catch(error) {
    return responseErrWithMsg(res, error.message);
  }
});

/**
 * update user information
 * @group users
 * @route PUT /users/{userId}
 * @param {number} userId.path.required - user identity number
 * @param {UpdateUserRequest.model} data.body.required - the new point
 * @returns {{}} 200 - success, return requested data
 * @returns {String} 400 - invalid request params/query/body
 * @returns {String} 404 - required data not found
 * @returns {Error} 500 - unexpected error
 * @security JWT
 * @property {{integer}} code - response code - eg: 200
 */
router.put('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const validation = await updateUserRequestSchema.validate(req.body);
    const result = await updateUserByUserId(userId, validation);

    res.json({ success: true, data: result });
  } catch(error) {
    return responseErrWithMsg(res, error.message);
  }
});

/**
 * 新增使用者
 * @group users
 * @route POST /users
 * @param {RegisteUserRequest.model} data.body.required - 後台新增使用者用
 * @returns {{}} 200 - success, return requested data
 * @returns {String} 400 - invalid request params/query/body
 * @returns {String} 404 - required data not found
 * @returns {Error} 500 - unexpected error
 * @security none
 * @property {{integer}} code - response code - eg: 200
 */
router.post('/', async (req, res) => {
  try {
    await registeRequestSchema.validate(req.body);

    const result = await createUser(req.body);

    res.json({ success: true, data: result });
  } catch(error) {
    return responseErrWithMsg(res, error.message);
  }
});

module.exports = router;
