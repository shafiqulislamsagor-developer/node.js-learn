/*
 * Title: Sample Handler
 * Description: Sample handler
 * Author:Sumit Saha (practice: Shafiqul Islam Sagor)
 * Date: 26/11/2024
 */

//  modules scafolding

const handler = {};

handler.sampleHandler = (req, res) => {
  res(200, {
    message: "this is a sample handler url",
  });
};

module.exports = handler;
