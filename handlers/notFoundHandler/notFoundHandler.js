/*
 * Title: notFound Handler
 * Description: notFound handler
 * Author:Sumit Saha (practice: Shafiqul Islam Sagor)
 * Date: 26/11/2024
 */

//  modules scafolding

const handler = {};

handler.notFoundHandler = (req, res) => {
  res(404, {
    message: "Your requested URL was not found",
  });
};

module.exports = handler;
