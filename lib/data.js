// dependencies
const fs = require("fs");
const path = require("path");

const lib = {};

//  base directory of the data folder
lib.basedir = path.join(__dirname, "/../.data/");

// write data to file

lib.create = function (dir, file, data, callback) {
  // open file for writing
  fs.open(
    lib.basedir + dir + "/" + file + ".json",
    "wx",
    function (err, fileDescriptor) {
      if (!err && fileDescriptor) {
        // convert data to string
        const stringData = JSON.stringify(data);

        // write data to file and then close it
        fs.writeFile(fileDescriptor, stringData, function (err) {
          if (!err) {
            fs.close(fileDescriptor, function (err) {
              if (!err) {
                callback(false);
              } else {
                callback("Error closing file");
              }
            });
          } else {
            callback("Error writing to new file");
          }
        });
      } else {
        callback("Could not create new file , it may already exists!", err);
      }
    }
  );
};

// read data from file
lib.read = (dir, file, callback) => {
  fs.readFile(`${lib.basedir + dir}/${file}.json`, "utf-8", (err, data) => {
    callback(err, data);
  });
};

lib.update = (dir, file, data, callback) => {
  //  file open for writing
  fs.open(
    `${lib.basedir + dir}/${file}.json`,
    "r+",
    function (err, fileDescriptor) {
      if (!err && fileDescriptor) {
        // convert the data to string
        const stringData = JSON.stringify(data);

        // truncate the file
        fs.ftruncate(fileDescriptor, function (err) {
          if (!err) {
            // write to the file and close it
            fs.writeFile(fileDescriptor, stringData, function (err) {
              if (!err) {
                // close the file
                fs.close(fileDescriptor, function (err) {
                  if (!err) {
                    callback(false);
                  } else {
                    console.log("Error closing file!");
                  }
                });
              } else {
                console.log("Error writing to file!");
              }
            });
          } else {
            console.log("Error truncating file!");
          }
        });
      } else {
        console.log(`error updating file may not exist`);
      }
    }
  );
};

lib.delete = function (dir, file, callback) {
  fs.unlink(`${lib.basedir + dir}/${file}.json`, function (err) {
    if (!err) {
      callback(false);
    } else {
      callback("Error deleting file");
    }
  });
};

module.exports = lib;
