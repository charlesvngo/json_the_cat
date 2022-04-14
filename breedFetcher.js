const request = require('request');
const breed = process.argv.slice(2)[0];

request(`https://api.thecatapi.com/v1/breeeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log("Error connecting to API. Please check the URL of the API. ");
    return;
  }
  if (response.statusCode !== 200) {
    console.log("Error has occured. Status code :", response.statusCode);
    return;
  }
  let parsedBody = JSON.parse(body)[0];
  if (parsedBody === undefined) {
    console.log("Please enter in a valid cat breed. ");
    return;
  }
  console.log(parsedBody.description);
});

