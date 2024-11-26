/*
 * Title: Uptime Monitoring Application Version
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Sumit Saha (practice : Shafiqul Islam Sagor)
 * Date: 26/11/2024
 */

// Dependencies🧮

const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");

// app object -module scaffolding

const app = {};

//  configuration
app.config = {
  port: 3000,
};

// create server

app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening on port ${app.config.port}`);
  });
};

// handle request response

app.handleReqRes = handleReqRes;

app.createServer();
