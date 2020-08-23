"use strict";

var db = require('../models');

var index = function index(req, res) {
  db.Player.find({}, function (err, foundPlayer) {
    if (err) console.log('Error in finding player', err); // if Player is not found

    if (!foundPlayer.length) return res.json({
      message: "No player found in the DB"
    });
    res.status(200).json({
      player: foundPlayer
    });
  });
};

var show = function show(req, res) {
  db.Player.findById(req.params.id, function (err, foundPlayer) {
    if (err) console.log('Error in player showing up:', err);
    if (!foundPlayer) return res.json({
      message: 'No player found by that ID in the DB'
    });
    res.json({
      player: foundPlayer
    });
  });
};

var create = function create(req, res) {
  db.Player.create(req.body, function (err, foundPlayer) {
    if (err) console.log('Error in player create', err); // sending new Player to the database

    res.json({
      player: foundPlayer
    });
  });
};

var update = function update(req, res) {
  db.Player.findByIdAndUpdate(req.params.id, req.body, {
    "new": true
  }, function (err, updatedTournament) {
    if (err) console.log('Error in updating player: ', err); // send updated Player as a response

    res.json({
      player: updatedPlayer,
      message: "Update was successfull"
    });
  });
};

var destroy = function destroy(req, res) {
  db.Player.findByIdAndDelete(req.params.id, function (err, deletePlayer) {
    if (err) console.log('Error in deleting Player', err);
    res.json({
      message: 'Player was deleted successfully!'
    });
  });
};

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
};