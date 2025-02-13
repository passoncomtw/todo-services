const database = require("../database/models");
const pick = require("lodash/pick");
const isEmpty = require("lodash/isEmpty");

const getUserByUserId = async (userId) => {
  return await database.User.findOne({
    attributes: ["id", "name", "phone", "createdAt"],
    where: {
      id: userId,
    },
  });
};

const updateUserByUserId = async (userId, query) => {
  const user = await getUserByUserId(userId);

  if(query.name) {
    user.name = query.name;
  }

  await user.save();
  return user;
};

const getUserWithPasswordBy = async (phone) => {
  const userResult = await database.User.findOne({
    where: {
      phone,
    },
  });

  return userResult;
};

const parseUserResponse = (userResult) => {
  const userResponse = pick(userResult, [
    "id",
    "phone",
    "name",
    "createAt",
  ]);
  return userResponse;
};

const createUser = async (userData) => {
  const existUser = await database.User.findOne({ where: {phone: userData.phone} });
  if (existUser) throw new Error("使用者已存在");

  const userResult = await database.User.create(
    {
      name: userData.name,
      phone: userData.phone,
      password: userData.password,
    });
  

  return {
    id: userResult.id,
    createdAt: userResult.createdAt,
    ...userData,
  };
};


const deleteUserResult = async (userId) => {
  const userResult = await getUserByUserId(userId);
  if (isEmpty(userResult)) {
    throw new Error("Task not found");
  }

  await userResult.destroy();
}

module.exports.parseUserResponse = parseUserResponse;
module.exports.getUserByUserId = getUserByUserId;
module.exports.getUserWithPasswordBy = getUserWithPasswordBy;
module.exports.updateUserByUserId = updateUserByUserId;
module.exports.createUser = createUser;
module.exports.deleteUserResult = deleteUserResult;
