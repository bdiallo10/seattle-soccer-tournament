const db = require('../models')

module.exports = {
  indexTournament,
  showTournament,
  createTournament,
  updateTournament,
  deleteTournament,
}
// showing all the tournament
function indexTournament(req, res) {
  db.Tournament.find({}, (err, foundTournament) => {
    if(err) console.log('error in finding tournament', err)
  })
    res.status(200).json({tournament: foundTournament})
}

//showing tournament individually
function showTournament(req, res) {
  db.Tournament.findById(req.params.id)
    .populate({ path: 'Teams'})
    .exec((err, foundTournament) => {
      if(err) {
        console.log('error in finding tournament')
      } else {
        res.status(200).json({tournament: foundTournament})
      }
    })
}

function createTournament(req, res) {
  db.Tournament.create(req.body, (err, createdTournament) => {
    res.json({tournament: saveTournament})
  })
}

function updateTournament(req, res) {
  db.Tournament.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateTournament) => {
    res.json({
      tournament: updateTournament,
      message: 'Update was successful'
    })
  })
}

function deleteTournament(req, res) {
  db.Tournament.findByIdAndDelete(req.params.id, (err, deleteTournament) => {
    res.json({
      message: 'tournament was deleted successfully'
    })
  })
}
