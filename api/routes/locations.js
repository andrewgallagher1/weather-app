const express = require("express");
const Location = require("../Models/LocationModel");
const path = require("path");
const fs = require("fs");

// @desc one off upload to mongoDB locations and ids for api.
// @access Private

const getLocationData = async () => {
  try {
    let rawdata = fs.readFileSync(path.resolve(__dirname, "../locations.json"));
    let locations = JSON.parse(rawdata);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = getLocationData;
