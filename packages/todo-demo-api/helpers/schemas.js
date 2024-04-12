const yup = require("yup");

const registeRequestSchema = yup.object({
  phone: yup.string().required("電話不可為空"),
  name: yup.string().required("暱稱不可為空"),
  password: yup.string().required("密碼不可為空"),
});

const updateUserRequestSchema = yup.object({
  name: yup.string(),
  phone: yup.string(),
});

module.exports.registeRequestSchema = registeRequestSchema;
module.exports.updateUserRequestSchema = updateUserRequestSchema;
