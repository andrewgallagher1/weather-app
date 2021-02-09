const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const LocationModel = mongoose.model("Location", LocationSchema);
module.exports = LocationModel;
