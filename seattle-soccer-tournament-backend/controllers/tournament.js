const db = require('../models')

const index = (req, res) => {
  db.Tournament.find({}, (err, foundTournament) => {
    if (err) console.log('Error in finding tournament', err)
    console.log(foundTournament)
    // if tournament is not found
    if(!foundTournament.length) return res.json({
      message: "No tournament found in the DB"
    })

    res.status(200).json({tournament: foundTournament})
})
}

const show = (req, res) => {
  db.Tournament.findById(req.params.id, (err, foundTournament) => {
    if(err) console.log('Error in tournament showing up:', err);

    if(!foundTournament) return res.json({
      message: 'No tournament found by that ID in the DB'
    })

    res.json({ tournament: foundTournament})
  })
}

const create = (req, res) => {
  db.Tournament.create(req.body, (err, saveTournament) => {
    if(err) console.log('Error in tournament create', err)

    // sending new tournament to the database
    res.json({tournament: saveTournament})
  })
}

const update = (req, res) => {
  db.Tournament.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedTournament) => {
    if(err) console.log('Error in updating tournament: ', err)

    // send updated tournament as a response
    res.json({
      tournament: updatedTournament,
      message: "Update was successfull"
    })
  })
}
  const destroy = (req, res) => {
    db.Tournament.findByIdAndDelete(req.params.id, (err, deleteTournament) => {
      if(err) console.log('Error in deleting tournament', err);

      res.json({
        message: 'tournament was deleted successfully!'
      })
    })
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
}