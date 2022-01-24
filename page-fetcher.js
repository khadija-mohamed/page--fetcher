const request = require('request');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

// to make HTTP requests
const fs = require('fs');
// fs module to interact with file system

const pageFetcher = function(url) {
  request `${url}`,
  fs.writeFile(error, response, body); {
    if (error) {
      console.log("Error: ", error);
      return;
    }
    if ('statusCode:', response && response.statusCode) {
      console.log(`There was a ${response} status code` )
    }
    if (body) {
      console.log("Body: ", body)
    }
  }
rl.close();
  };
