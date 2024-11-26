/*
 * Title: Uptime Monitoring Application Version
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Sumit Saha (practice : Shafiqul Islam Sagor)
 * Date: 26/11/2024
 */

// Dependencies🧮

const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
const environmentToExport = require("./helpers/environments");
const data = require("./lib/data");

// app object -module scaffolding

const app = {};

// testing file stystem
//  @TODO🚡 pore muche dibo
data.read("test", "newFile", function (err, data) {
  console.log(err, data);
});

//  configuration
// app.config = {
//   port: 3000,
// };

// create server

app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(environmentToExport.port, () => {
    console.log(`listening on port ${environmentToExport.port}`);
  });
};

// handle request response

app.handleReqRes = handleReqRes;

app.createServer();
