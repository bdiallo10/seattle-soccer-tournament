const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const tournamentSchema = new Schema({
    title: {type: String, required: true},
    administrator: {type: String, required: true},
    date: {type: String, required: true},
    location: {type: String, required: true}
    // add download a picture later
}, {
    timestamps: true,
})

const tournament = mongoose.model('tournament', tournamentSchema)

module.exports = tournament;