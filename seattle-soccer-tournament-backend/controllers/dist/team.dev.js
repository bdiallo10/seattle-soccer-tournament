"use strict";

var db = require('../models'); // team indexpage


var index = function index(req, res) {
  db.Team.find({}, function (err, foundTeam) {
    if (err) console.log('Error in finding team:', err);
    console.log(foundTeam); //if team is not found

    if (!foundTeam.length) return res.json({
      message: 'No team found in the DB'
    });
    res.status(200).json({
      team: foundTeam
    });
  });
}; // team showpage


var show = function show(req, res) {
  db.Team.findById(req.params.id, function (err, foundTeam) {
    if (err) console.log('Error in team showing up', err);
    if (!foundTeam) return res.json({
      message: 'No team found by that ID in the DB'
    });
    res.json({
      team: foundTeam
    });
  });
}; // add new team


var create = function create(req, res) {
  db.Team.create(req.body, function (err, saveTeam) {
    if (err) console.log('Error in creating a team', err);
    res.json({
      team: saveTeam
    });
  });
}; // update team


var update = function update(req, res) {
  db.Team.findByIdAndUpdate(req.params.id, req.body, {
    "new": true
  }, function (err, updatedTeam) {
    if (err) console.log('Error in updating team:', err);
    res.json({
      team: updatedTeam,
      message: "Update was successfull"
    });
  });
}; // delete team


var destroy = function destroy(req, res) {
  console.log('this is the params id', req.params.id);
  db.Team.findByIdAndDelete(req.params.id, function (err, deleteTeam) {
    if (err) console.log('Error in deleting team:', err);
    console.log(deleteTeam);
    res.json({
      message: 'Team was deleted successfully!'
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