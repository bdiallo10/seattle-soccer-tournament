const db = require('../models')

// team indexpage
const index = (req, res) => {
    db.Team.find({}, (err, foundTeam) => {
        if(err) console.log('Error in finding team:', err)

        //if tournament is not found
        if(!foundTeam.lenght) return res.json({
            message: 'No team found in the DB'
        })

        res.status(200).json({ team: foundTeam})
    })
}

// team showpage
const show = (req, res) => {
    db.Team.findById(req.params.id, (err, foundTeam) => {
        if(err) console.log('Error in team showing up', err)

        if(!foundTeam) return res.json({
            message: 'No team found by that ID in the DB'
        })

        res.json({ team: foundTeam })
    })
}
// add new team
const create = (req, res) => {
    db.Team.create(req.body, (err, saveTeam) => {
        if(err) console.log('Error in creating a team', err)

        res.json({ team: saveTeam })
    })
}
// update team
const update = (req, res) => {
    db.Team.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedTeam) => {
        if(err) console.log('Error in updating team:', err)

        res.json({
            team: updatedTeam,
            message: "Update was successfull"
        })
    })
}

// delete team
const destroy = (req, res) => {
    db.Team.findByAndDelete(req.params.id, (err, deleteTeam) => {
        if(err) console.log('Error in deleting team:', err)

        res.json({
            message: 'Team was deleted successfully!'
        })
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}