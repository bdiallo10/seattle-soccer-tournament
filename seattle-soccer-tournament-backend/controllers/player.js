const db = require('../models')

const index = (req, res) => {
  db.Player.find({}, (err, foundPlayer) => {
    if (err) console.log('Error in finding player', err)

    // if Player is not found
    if(!foundPlayer.length) return res.json({
      message: "No player found in the DB"
    })

    res.status(200).json({player: foundPlayer})
})
}

const show = (req, res) => {
  db.Player.findById(req.params.id, (err, foundPlayer) => {
    console.log(foundPlayer)
    if(err) console.log('Error in player showing up:', err);

    if(!foundPlayer) return res.json({
      message: 'No player found by that ID in the DB'
    })

    res.json({ player: foundPlayer})
  })
}


const create = (req, res) => {
    db.Player.create(req.body, (err, foundPlayer) => {
      if(err) console.log('Error in player create', err)
  
      // sending new Player to the database
      res.json({player: foundPlayer})
    })
}

const update = (req, res) => {
    db.Player.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedPlayer) => {
      if(err) console.log('Error in updating player: ', err)
  
      // send updated Player as a response
      res.json({
          player: updatedPlayer,
          message: "Update was successfull"
      })
    })
}
const destroy = (req, res) => {
    db.Player.findByIdAndDelete(req.params.id, (err, deletePlayer) => {
      if(err) console.log('Error in deleting Player', err);

      res.json({
        message: 'Player was deleted successfully!'
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