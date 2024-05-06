const isNull = require('lodash/isNull');
const isEmpty = require('lodash/isEmpty');
const database = require("../database/models");
const { getPaginationQuery } = require("../helpers/utils");

const getTaskResult = async (taskId) => {
  return await database.Task.findOne({
    attributes: ["id", "title", "comment", "createdAt", "updatedAt", "isCompleted", "isDeleted", "completedAt", "deadlineAt"],
    include: [{
      as: 'user',
      model: database.User,
      required: true,
      attributes: [
        'id',
        'name',
        'phone',
      ],
    }],
    where: {
      id: taskId,
    },
  });
}

const getTasksResult = async (query) => {
  const {
    userId,
    isCompleted,
    deadlineAt,
  } = query;
  const whereCondition = {};

  if (!isNull(userId)) whereCondition.user_id = userId;
  if (!isNull(isCompleted)) whereCondition.isCompleted = isCompleted;
  if (!isNull(deadlineAt)) whereCondition.deadlineAt = new Date(deadlineAt);

  return await database.Task.findAndCountAll({
    attributes: ["id", "title", "comment", "createdAt", "updatedAt", "isCompleted", "isDeleted", "completedAt", "deadlineAt"],
    include: [{
      as: 'user',
      model: database.User,
      required: true,
      attributes: [
        'id',
        'name',
        'phone',
      ],
    }],
    where: whereCondition,
  });
}

const createTasksResult = async (userId, body) => {
  const tasksResult = await database.Task.create({
    user_id: userId,
    ...body,
  });

  return await getTaskResult(tasksResult.id);
};

const updateTaskResult = async (taskId, body) => {
  const taskResult = await getTaskResult(taskId);
  if (isEmpty(taskResult)) {
    throw new Error("Task not found");
  }

  if (!isNull(body.title)) {
    taskResult.title = body.title;
  }

  if (!isNull(body.comment)) {
    taskResult.comment = body.comment;
  }

  if (!isNull(body.isCompleted)) {
    taskResult.isCompleted = body.isCompleted;
  }

  if (!isNull(body.deadlineAt)) {
    taskResult.deadlineAt = new Date(body.deadlineAt);
  }

  await taskResult.save();
  return taskResult;
}

const deleteTaskResult = async (taskId, body) => {
  const taskResult = await getTaskResult(taskId);
  if (isEmpty(taskResult)) {
    throw new Error("Task not found");
  }

  await taskResult.destroy();
}

module.exports.getTaskResult = getTaskResult;
module.exports.getTasksResult = getTasksResult;
module.exports.createTasksResult = createTasksResult;
module.exports.updateTaskResult = updateTaskResult;
module.exports.deleteTaskResult = deleteTaskResult;
