const db = require('../models')
const { Player } = require('../models')

module.exports = {
    indexTeam,
    showTeam,
    createTeam,
    updateTeam,
    deleteTeam,
  }

// team indexpage
function indexTeam(req, res) {
    db.Team.find({}, (err, foundTeam) => {
    if(err) console.log('error in finding teams')
    })
    res.status(200).json({ team: foundTeam})
}

// team showpage
function showTeam(req, res) {
    db.Tournament({'Teams': req.params.id})
    .populate({
        path: 'Teams',
        match: {_id: req.params.id}
    })
    .exec((err, foundTeam) => {
        if(err) {
            console.log('error in finding team')
        } else {
            db.Team.findOne({_id: foundTournament.teams[0]._id})
                .populate({path: 'Players'})
                .exec((err, foundTeam) => {
                    res.status(200).json({ team: foundTeam})   
                })
        }
    })
}

// add new team
function createTeam(req, res) {
    db.Team.create(req.body, (err, saveTeam) => {
        if(err) console.log('error in creating a team', err)
        db.Tournament.findById(req.body.tournamentId, (err, foundTournament) => {
            foundTournament.team.push(addedteam)
            foundTournament.save()
            res.json({ team: saveTeam})
        })
    })
}


// delete team
function deleteTeam(req, res) {
    db.Tournament.findOne({'Teams': req.params.id}, (err, foundTournament) => {
        let pos = foundTournament.teams.indexOf(req.params.id)
        foundTournament.teams.splice(pos, 1)
        foundTournament.save()
    })
    db.Team.findByIdAndRemove(req.params.id, (err, deleteTeam) => {
        if(err) {
            console.log('error in finding the team')
        } else {
            Player.deleteMany({
                _id: {
                    $in: deleteTeam.player
                }
            })
            res.json({
                message: "Team was successfully deleted"
            })
        }
    })
}

function updateTeam(req, res) {
    db.Team.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updateTeam) => {
        db.Tournament.findOne({ teams: req.params.id }, (err, foundTournament) => {
            let pos = foundTournament.team.indexOf(req.params.id)
            foundTournament.team.splice(pos, 1)
            foundTournament.save((err, saveFoundTournament) => {
                db.Tournament.findById(req.body.tournamentId, (err, newTournament) => {
                    newTournament.team.push(updateTeam)
                    newTournament.save((err, saveNewTournament) => {
                        res.json({
                            message: 'team was updated successfully'
                        })
                    })
                })
            })
        })
    })
}

