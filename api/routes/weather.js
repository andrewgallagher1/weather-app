const express = require("express");
const axios = require("axios");
const Location = require("../Models/LocationModel");

const OPEN_WEATHER_KEY = "e1c9fb6d82bf3b74a62a875668b1d8d3";

var router = express.Router();
//@route GET api/weather
//@desc returns the default weather for sydney
//@access private
router.get("/", async (req, res, next) => {
  try {
    // [Sydney, Melbourne, Perth, Adelaide, Canberra, Brisbane, Darwin, Hobart]
    const ids = [
      "2147714",
      "7839805",
      "2063523",
      "2078025",
      "2172517",
      "2174003",
      "7839402",
      "7839672",
    ];

    const response_results = [];

    for (const id of ids) {
      const uri = encodeURI(
        `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=${OPEN_WEATHER_KEY}`
      );

      const openWeatherResponse = await axios(uri);
      response_results.push(openWeatherResponse);
    }

    const weather_results = [];
    for (const result of response_results) {
      console.log(result.data);
      var curr_name = result.data.name;
      var desc = result.data.weather[0].description;
      var stats = result.data.main;

      var curr_weather = {
        name: curr_name,
        desc: desc,
        stats: stats,
      };

      weather_results.push(curr_weather);
    }
    return res.status(200).json(weather_results);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;

// @route GET api/location/:location
// @desc gets weather data for location searched by user
// @access private
//router.get("/:location");
