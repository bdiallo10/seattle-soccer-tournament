"use strict";

var db = require('../models');

var index = function index(req, res) {
  db.Tournament.find({}, function (err, foundTournament) {
    if (err) console.log('Error in finding tournament', err);
    console.log(foundTournament); // if tournament is not found

    if (!foundTournament.length) return res.json({
      message: "No tournament found in the DB"
    });
    res.status(200).json({
      tournament: foundTournament
    });
  });
};

var show = function show(req, res) {
  db.Tournament.findById(req.params.id, function (err, foundTournament) {
    if (err) console.log('Error in tournament showing up:', err);
    if (!foundTournament) return res.json({
      message: 'No tournament found by that ID in the DB'
    });
    res.json({
      tournament: foundTournament
    });
  });
};

var create = function create(req, res) {
  if (req.session.loggedIn) {
    db.Tournament.create(req.body, function (err, saveTournament) {
      if (err) console.log('Error in tournament create', err); // sending new tournament to the database

      res.json({
        tournament: saveTournament
      });
    });
  }
};

var update = function update(req, res) {
  if (req.session.loggedIn) {
    db.Tournament.findByIdAndUpdate(req.params.id, req.body, {
      "new": true
    }, function (err, updatedTournament) {
      if (err) console.log('Error in updating tournament: ', err); // send updated tournament as a response

      res.json({
        tournament: updatedTournament,
        message: "Update was successfull"
      });
    });
  }
};

var destroy = function destroy(req, res) {
  if (req.session.loggedIn) {
    db.Tournament.findByIdAndDelete(req.params.id, function (err, deleteTournament) {
      if (err) console.log('Error in deleting tournament', err);
      res.json({
        message: 'tournament was deleted successfully!'
      });
    });
  }
};

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
};