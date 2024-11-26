/*
 * Title: Handle Request Response
 * Description: Handle Request and Response
 * Author: Sumit Saha (practice : Shafiqul Islam Sagor)
 * Date: 26/11/2024
 */
// Dependencies
const { StringDecoder } = require("string_decoder");
const url = require("url");
const routes = require("../routes/routes");
const {
  notFoundHandler,
} = require("../handlers/notFoundHandler/notFoundHandler");

//  Module scaffolding

const handler = {};

handler.handleReqRes = (req, res) => {
  // get the url and parse it
  const parseUrl = url.parse(req.url, true);
  const path = parseUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObject = parseUrl.query;
  const headersObject = req.headers;

  const requestProperties = {
    parseUrl,
    path,
    trimmedPath,
    method,
    queryStringObject,
    headersObject,
  };

  const decoder = new StringDecoder("utf-8");
  let realData = "";

  const chosenHandler = routes[trimmedPath]
    ? routes[trimmedPath]
    : notFoundHandler;

  chosenHandler(requestProperties, (statusCode, payload) => {
    statusCode = typeof statusCode === "number" ? statusCode : 500;
    payload = typeof payload === "object" && payload !== null ? payload : {};

    const payloadString = JSON.stringify(payload);

    // return the final response
    res.writeHead(statusCode);
    res.end(payloadString);
  });

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();

    chosenHandler(requestProperties, (statusCode, payload) => {
      statusCode = typeof statusCode === "number" ? statusCode : 500;
      payload = typeof payload === "object" && payload !== null ? payload : {};

      const payloadString = JSON.stringify(payload);

      // return the final response
      res.writeHead(statusCode);
      res.end(payloadString);
    });
    console.log(realData);
    // response Handle
    res.end(realData);
  });
};

module.exports = handler;
