const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Ori",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Ori",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Ori",
  });
});

app.get("/weather", (req, res) => {
  res.send({ forecast: "Overcast", location: "NYC" });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    message: "Help Article Not Found",
    title: "404",
    name: "Ori",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    message: "404 PAGE NOT FOUND",
    title: "404",
    name: "Ori",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
