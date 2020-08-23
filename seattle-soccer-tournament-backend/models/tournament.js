const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const tournamentSchema = new Schema({
    name: {type: String, required: true, unique: true},
    // add download a picture later
}, {
    timestamps: true,
})

const tournament = mongoose.model('tournament', tournamentSchema)

module.exports = tournament;