const request = require("postman-request");

const url =
  "http://api.weatherstack.com/current?access_key=aa93bcd3266815cd503c5079e64260e1&query=37.8267,-122.4233";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
