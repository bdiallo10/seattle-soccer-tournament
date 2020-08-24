"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var tournamentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  administrator: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  } // add download a picture later

}, {
  timestamps: true
});
var tournament = mongoose.model('tournament', tournamentSchema);
module.exports = tournament;