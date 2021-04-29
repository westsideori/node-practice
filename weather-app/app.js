const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

const locale = process.argv[2];

if (!locale) {
  console.log("Please provide a location.");
} else {
  geocode(locale, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecastData);
    });
  });
}
