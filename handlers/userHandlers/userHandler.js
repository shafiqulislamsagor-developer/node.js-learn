/*
 * Title: User Handler
 * Description: Handler to handle user related routes
 * Author:Sumit Saha (practice: Shafiqul Islam Sagor)
 * Date: 27/11/2024
 */

// module scaffolding
const handler = {};

handler.userHandler = function (req, callback) {
  callback(200, {
    message: "this is a user url",
  });
};

module.exports = handler;
