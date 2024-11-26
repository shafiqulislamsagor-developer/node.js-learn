/*
 * Title: Routes
 * Description: Application routes
 * Author:Sumit Saha (practice: Shafiqul Islam Sagor)
 * Date: 26/11/2024
 */

const { sampleHandler } = require("../handlers/sampleHandlers/sampleHandlers");

const routes = {
  sample: sampleHandler,
};

module.exports = routes;
