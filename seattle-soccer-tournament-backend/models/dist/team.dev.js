"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var teamSchema = new Schema({
  teamName: {
    type: String,
    required: true
  },
  manager: {
    type: String,
    required: true
  },
  captain: {
    type: String,
    required: true
  },
  teamLocation: {
    type: String,
    required: true
  } // add downlong a picture for the team later

}, {
  timestamps: true
});
var Team = mongoose.model('Team', teamSchema);
module.exports = Team;