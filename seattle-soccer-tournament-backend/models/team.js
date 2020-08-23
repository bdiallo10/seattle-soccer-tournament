const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name: {type: String, required: true}
    // add downlong a picture for the team later
}, { timestamps: true,
})

const Team = mongoose.model('Team', teamSchema);

module.exports = Team