/*
 * Title: User Handler
 * Description: Handler to handle user related routes
 * Author:Sumit Saha (practice: Shafiqul Islam Sagor)
 * Date: 27/11/2024
 */

// module scaffolding
const handler = {};

handler.userHandler = function (req, callback) {
  const acceptedMethods = ["get", "post", "put", "delete"];
  if (acceptedMethods.indexOf(req.method) > -1) {
    handler._users[req.method](req, callback);
  } else {
    callback(405, {
      message: "Method not allowed",
      statusCode: 405,
    });
    return;
  }
};

handler._users = {};

handler._users.post = function (req, callback) {};
handler._users.get = function (req, callback) {
  callback(200, {
    message: "this is a get user urla",
  });
};
handler._users.put = function (req, callback) {};
handler._users.delete = function (req, callback) {};

module.exports = handler;
