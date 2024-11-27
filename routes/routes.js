/*
 * Title: Routes
 * Description: Application routes
 * Author:Sumit Saha (practice: Shafiqul Islam Sagor)
 * Date: 26/11/2024
 */

const { sampleHandler } = require("../handlers/sampleHandlers/sampleHandlers");
const { userHandler } = require("../handlers/userHandlers/userHandler");

const routes = {
  sample: sampleHandler,
  user: userHandler,
};

module.exports = routes;
