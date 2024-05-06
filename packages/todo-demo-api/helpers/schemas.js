const yup = require("yup");

const signinRequestSchema = yup.object({
  phone: yup.string().required("電話不可為空"),
  password: yup.string().matches(/^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/, '密碼必須是 6~20 英數混合').required("密碼不可為空"),
});

const registeRequestSchema = yup.object({
  phone: yup.string().required("電話不可為空"),
  name: yup.string().required("暱稱不可為空"),
  password: yup.string().matches(/^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/, '密碼必須是 6~20 英數混合').required("密碼不可為空"),
});

const updateUserRequestSchema = yup.object({
  name: yup.string(),
  phone: yup.string(),
});

module.exports.signinRequestSchema = signinRequestSchema;
module.exports.registeRequestSchema = registeRequestSchema;
module.exports.updateUserRequestSchema = updateUserRequestSchema;
