const db = require('../models')

function indexPlayer(req, res) {
  db.Player.find({}, (err, allPlayer) => {
    res.status(200).json({
      player: foundPlayer
    })
  })
}
// how to really target this player from a tournament, a team 
function showPlayer(req, res) {
  db.Team({'Player': req.params.id})
  .populate({
    path: 'Player',
    match: {_id: req.params.id}
  })
  .exec((err, foundPlayer) => {
    if(err) {
      console.log('error in finding player')
    } else {
      db.Player.findOne({_id: foundTeam.player[0]._id})
        .populate({path: 'Player'})
        .exec((err, foundPlayer) => {
          res.json({
            message: 'Found player'
          })
        })
    }
  })
}

function addPlayer(req, res) {
  db.Player.create(req.body, (err, addedPlayer)=> {
    if(err) {
      res.json ({

        message: 'having trouble creating a player'
      })
    } else {
      db.Team.findById(req.params.id, (err, foundTeam) => {
        foundTeam.player.push(addedPlayer)
        foundTeam.save(err, addedPlayer)
            res.json ({
            message: 'Player was added successfully'
          })
      })
    }
  })
}

function updatePlayer(req, res) {
  db.Team.findOne({ 'Player': req.params.id}, (err, foundTeam) => {
    db.Player.findByIdAndUpdate(req.params.id, req.body, ()=> {
      res.json({
        message: 'Player update was successfull'
      })
    })
  })
}

function deletePlayer(req, res) {
  db.Player.findByIdAndDelete(req.params.id, (err, data) => {
    db.Team.findOne({'Player': req.params.id}, (err, foundTeam))
  })
  let pos = foundTeam.player.indexOf(req.params.id)
  foundTeam.player.splice(pos, 1)
  foundTeam.save()
  res.json({
    message: 'Player was deleted successfully!'
  })
}

module.exports = {
  indexPlayer,
  showPlayer,
  addPlayer,
  updatePlayer,
  deletePlayer,
}