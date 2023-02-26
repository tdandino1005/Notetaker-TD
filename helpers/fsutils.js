// Helper functions for reading and writing to the filesystem
const util = require('util');
const fs = require('fs');

const readFromFile = util.promisify(fs.readFile);

// Write data to a file
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

//    Read and append data to a file
const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

// Remove note from file
function removeNote(id, file) {
  return fs.readFile(file, 'utf-8', (err, data) => {
    if (err) console.log('error');
    else {
      const parsedData = JSON.parse(data);
      let result = parsedData.filter((data) => data.id !== id);
      writeToFile(file, result);
    }
  });
}

// Exporting functions
module.exports = { readFromFile, writeToFile, readAndAppend, removeNote };