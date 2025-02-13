const express = require('express');
const yup = require("yup");
const uuid = require("uuid");
const { responseErrWithMsg, responseOk } = require('../helpers/response');

const router = express.Router();
const { createTasksResult, getTasksResult, updateTaskResult, deleteTaskResult } = require('../services/taskServices');

const getTasksSchema = yup.object().shape({
  userId: yup.number().nullable().default(null),
  isCompleted: yup.boolean().nullable().default(null),
  deadlineAt: yup.date().nullable().default(null),
  page: yup.number().default(1),
  pageSize: yup.number().default(10),
});

const createTaskSchema = yup.object().shape({
  title: yup.string().required("title 不可為空"),
  comment: yup.string().nullable().default(null),
  deadlineAt: yup.date().nullable().default(null),
});

const updateTaskSchema = yup.object().shape({
  title: yup.string().nullable().default(null),
  isCompleted: yup.boolean().nullable().default(null),
  isDeleted: yup.boolean().nullable().default(null),
  comment: yup.string().nullable().default(null),
  deadlineAt: yup.date().nullable().default(null),
});

/**
 * @typedef TasksResponse
 * @property {[string]} title.required - example title name
 */

/**
 * @typedef UpdateTaskRequest
 * @property {string} title
 *   - 任務 Title
 *   - eg: Task Title
 * @property {string} comment
 *   - 任務內容
 *   - eg: 任務內容
 * @property {boolean} isCompleted
 *   - 任務是否完成
 *   - eg: false
 * @property {boolean} isDeleted
 *   - 任務是否刪除
 *   - eg: false
 * @property {string} deadlineAt
 *   - 任務預計完成的時間
 *   - eg: 2023-11-18 01:00:00
 */

/**
 * @typedef CreateTaskRequest
 * @property {string} title.required
 *   - 任務 Title
 *   - eg: Task Title
 * @property {string} comment
 *   - 任務內容
 *   - eg: 任務內容
 * @property {string} deadlineAt
 *   - 任務預計完成的時間
 *   - eg: 2023-11-18 01:00:00
 */

/**
 * @typedef UserRefItem
 * @property {string} id.required
 *   - user id
 *   - eg: 使用者 ID
 * @property {string} phone.required
 *   - user 的電話號碼 
 *   - eg: 0987654321
 * @property {string} name.required
 *   - 使用者的名稱
 *   - eg: testdemo
 */

/**
 * @typedef TaskItem
 * @property {string} id.required
 *   - 任務 ID
 *   - eg: Task ID
 * @property {UserRefItem.model} user.required
 *   - 建立這個任務的使用者資訊
 * @property {string} title.required
 *   - 任務 Title
 *   - eg: Task Title
 * @property {string} comment.required
 *   - 任務內容
 *   - eg: 任務內容
 * @property {string} createdAt.required
 *   - 任務建立的時間
 *   - eg: YYYY-MM-DD HH:mm:ss
 * @property {string} updateAt.required
 *   - 任務編輯的時間
 *   - eg: YYYY-MM-DD HH:mm:ss
 * @property {string} completedAt.required
 *   - 任務完成的時間
 *   - eg: YYYY-MM-DD HH:mm:ss
 * @property {string} deadlineAt.required
 *   - 任務預計完成的時間
 *   - eg: 2023-11-18 01:00:00
 * @property {boolean} isCompleted.required
 *   - 任務是否完成
 *   - eg: false
 * @property {boolean} isDeleted.required
 *   - 任務是否刪除
 *   - eg: false
 */

/**
 * @typedef SingleTaskResponse
 * @property {boolean} success.required
 *   - Request 是否完成
 *   - eg: true
 * @property {TaskItem.model} data.required
 *   - 任務資訊
 */

/**
 * @typedef GetTaskResponse
 * @property {boolean} success.required
 *   - Request 是否完成
 *   - eg: true
 * @property {Array<TaskItem>} items.required
 *   - 任務列表
 */

/**
 * Task Router.
 * @group tasks
 * @route GET /tasks
 * @param {integer} userId.query
 *   - 建立任務的 user Id
 *   - eg: 1
 * @param {string} deadlineAt.query
 *   - 建立任務的 預計結束時間格式為: YYYY-MM-DD HH:mm:ss
 *   - eg: 2023-11-19 18:00:00
 * @param {enum} isCompleted.query
 *   - 任務是否完成
 *   - eg: enums:true,false
 * @returns {GetTaskResponse.model} 200 - success, return requested data
 * @returns {String} 400 - invalid request params/query/body
 * @returns {String} 404 - required data not found
 * @security JWT
 * @typedef SingleTaskResponse
 * @property {{integer}} code - response code - eg: 200
 */
router.get('/', async (req, res) => {
  try {
    const queryObject = await getTasksSchema.validate(req.query)
    const result = await getTasksResult(queryObject);
    responseOk(res, { items: result });
  }catch(error) {
    return responseErrWithMsg(res, error.message);
  }
  
});

/**
 * Task Router.
 * @group tasks
 * @route POST /tasks
 * @param {CreateTaskRequest.model} data.body.required - create task request
 * @returns {SingleTaskResponse.model} 200 - success, return requested data
 * @returns {String} 400 - invalid request params/query/body
 * @returns {String} 404 - required data not found
 * @security JWT
 * @typedef SingleTaskResponse
 * @property {{integer}} code - response code - eg: 200
 */
router.post('/', async (req, res) => {
  try {
    const validationResult = await createTaskSchema.validate(req.body);
    const data = await createTasksResult(req.user.id, validationResult);
    responseOk(res, { data });
  }catch(error) {
    return responseErrWithMsg(res, error.message);
  }
});

/**
 * Task Router.
 * @group tasks
 * @route PUT /tasks/{taskId}
 * @param {string} taskId.path.required - task identity
 * @param {UpdateTaskRequest.model} data.body.required - create task request
 * @returns {SingleTaskResponse.model} 200 - success, return requested data
 * @returns {String} 400 - invalid request params/query/body
 * @returns {String} 404 - required data not found
 * @security JWT
 * @typedef SingleTaskResponse
 * @property {{integer}} code - response code - eg: 200
 */
router.put('/:taskId', async (req, res) => {
  try {
    const { taskId } = req.params;
    const isUUID = uuid.validate(taskId)
    if (!isUUID) throw new Error("Task ID is Not UUIDV4");
    
    const validationResult = await updateTaskSchema.validate(req.body);
    const data = await updateTaskResult(taskId, validationResult);
    responseOk(res, { data });
  }catch(error) {
    return responseErrWithMsg(res, error.message);
  }
});


/**
 * Task Router.
 * @group tasks
 * @route DELETE /tasks/{taskId}
 * @param {string} taskId.path.required - task identity
 * @returns {String} 400 - invalid request params/query/body
 * @returns {String} 404 - required data not found
 * @security JWT
 * @property {{integer}} code - response code - eg: 200
 */
router.delete('/:taskId', async (req, res) => {
  try {
    const { taskId } = req.params;
    const isUUID = uuid.validate(taskId)
    if (!isUUID) throw new Error("Task ID is Not UUIDV4");
  
    await deleteTaskResult(taskId);
    responseOk(res);
  }catch(error) {
    return responseErrWithMsg(res, error.message);
  }
});

module.exports = router;
