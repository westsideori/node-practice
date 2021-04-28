const fs = require("fs");

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = "Ori";
data.planet = "Earth";
data.age = 32;

const newData = JSON.stringify(data);
fs.writeFileSync("1-json.json", newData);
