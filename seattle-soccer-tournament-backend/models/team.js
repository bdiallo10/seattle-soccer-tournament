const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    teamName: {type: String, required: true},
    manager: {type: String, required: true},
    captain: {type: String, required: true},
    teamLocation: {type: String, required: true},
    players: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Players'
    }]
    // add downlong a picture for the team later
}, { timestamps: true,
})

const Team = mongoose.model('Team', teamSchema);

module.exports = Team