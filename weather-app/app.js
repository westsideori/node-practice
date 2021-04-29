const request = require("postman-request");

const url =
  "http://api.weatherstack.com/current?access_key=aa93bcd3266815cd503c5079e64260e1&query=37.8267,-122.4233&units=f";

request({ url: url, json: true }, (error, response) => {
  console.log(
    `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees. It feels like ${response.body.current.feelslike} degrees out.`
  );
});

const locationUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoib21hcmtvd2l0eiIsImEiOiJja28zMmhmOW8wNnRiMnVvbnd3eHp6MWhuIn0.c_O8Re-tXYLgAK46SSh4eA";

request({ url: locationUrl, json: true }, (error, response) => {
  console.log(
    `Latitude: ${response.body.features[0].center[1]}, Longitude: ${response.body.features[0].center[0]}`
  );
});
