const express = require('express');
const router = express.Router();
const packageJson = require("../package.json");
/**
 * @typedef VersionResponse
 * @property {[string]} version.required
 *  - eg: 1.0.0
 */

/**
 * Version Router.
 * @group version
 * @route GET /version
 * @returns {VersionResponse.model} 200 - success, return requested data
 * @returns {String} 400 - invalid request params/query/body
 * @returns {String} 404 - required data not found
 * @security none
 * @typedef VersionResponse
 * @property {{integer}} code - response code - eg: 200
 */
router.get('/', function(req, res) {
  res.json({ version: packageJson.version });
});

module.exports = router;
