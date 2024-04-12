const crypto = require('crypto');

const {SALT_SECRET} = process.env;

const getPaginationQuery = (page, pageSize = 10) => {
  const offset = (page - 1) * 10;
  return { offset, limit: pageSize };
};

const debugLog = msg => console.log(`[debug] ${msg}`);

const sha512 = function(password, salt){
  const hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
  hash.update(password);
  const value = hash.digest('hex');
  return {
      salt:salt,
      passwordHash:value.toString()
  };
};

const saltHashPassword = (userpassword) => {
  const  passwordData = sha512(userpassword, SALT_SECRET);
  return passwordData.passwordHash
}

module.exports.getPaginationQuery = getPaginationQuery;
module.exports.debugLog = debugLog;
module.exports.saltHashPassword = saltHashPassword;
