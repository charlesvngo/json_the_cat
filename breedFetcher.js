const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback("Error connecting to API. Please check the URL of the API. ");
    }
    if (response.statusCode !== 200) {
      return callback(`URL is not correct. Status code :${response.statusCode}`);
    }
    let parsedBody = JSON.parse(body)[0];
    if (parsedBody === undefined) {
      return callback("Please enter in a valid cat breed. ");
    }
    callback(error, parsedBody.description);
  });
};

module.exports = { fetchBreedDescription };