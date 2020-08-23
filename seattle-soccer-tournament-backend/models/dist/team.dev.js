"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var teamSchema = new Schema({
  name: {
    type: String,
    required: true
  } // add downlong a picture for the team later

}, {
  timestamps: true
});
var Team = mongoose.model('Team', teamSchema);
module.exports = Team;