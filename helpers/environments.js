/*
 * Title: Environment
 * Description: Handle all environment related things
 * Author: Sumit Saha (practice : Shafiqul Islam Sagor)
 * Date: 26/11/2024
 */

//  Dependencies 🧑

// module scaffolding
const environments = {};

environments.staging = {
  port: 3000,
  envName: "staging",
};

environments.production = {
  port: 5000,
  envName: "production",
};

// determine which environment is to be used

const currentEnvironments = typeof (process.env.NODE_ENV === "string"
  ? process.env.NODE_ENV
  : "staging");

const environmentToExport =
  typeof environments[currentEnvironments] === "object"
    ? environments[currentEnvironments]
    : environments.staging;

module.exports = environmentToExport;
