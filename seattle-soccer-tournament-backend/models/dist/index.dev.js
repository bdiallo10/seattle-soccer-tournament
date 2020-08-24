"use strict";

var mongoose = require('mongoose'); //mongoose connection string


var uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
var connection = mongoose.connection;
connection.once('open', function () {
  console.log("MongoDB database connection established successfully");
});
module.exports = {
  tournament: require('./tournament'),
  team: require('./team'),
  player: require('./player')
};