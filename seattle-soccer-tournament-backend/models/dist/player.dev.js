"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var playerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  countryOfOrigin: {
    type: String,
    required: true
  } // add download a picture for the player later

}, {
  timestamps: true
});
var Player = mongoose.model('Player', playerSchema);
module.exports = Player;