require("dotenv").config();

const express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  Cors = require("cors"),
  DatabaseConnection = require("./models/dataBaseConnection"),
  Covid19 = require("./models/covid19Model"),
  CovidRouter = require("./routes/covidRoutes"),
  App = express();

// Utilities
App.use(express.urlencoded({ extended: true }));
App.use(express.json());
// App.use(bodyParser.urlencoded({ extended: true }));
// App.use(bodyParser.json());
App.use(Cors());
App.use("/", CovidRouter);

App.listen(process.env.PORT, () => {
  console.log("SERVING YOUR COVID19 APP ON PORT 5000");
});
