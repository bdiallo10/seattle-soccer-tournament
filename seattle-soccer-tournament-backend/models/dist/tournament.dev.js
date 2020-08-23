"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var tournamentSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  } // add download a picture later

}, {
  timestamps: true
});
var tournament = mongoose.model('tournament', tournamentSchema);
module.exports = tournament;