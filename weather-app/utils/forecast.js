const request = require("postman-request");

const forecast = (lat, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=aa93bcd3266815cd503c5079e64260e1&query=${lat},${long}&units=f`;

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to weather service.");
    } else if (body.error) {
      callback("Unable to find location.");
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees. It feels like ${body.current.feelslike} degrees out.`
      );
    }
  });
};

module.exports = forecast;
