const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: { type: String, required: true}
}, { timestamps: true,
})

UserSchema.methods = {
    checkPassword: function(inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password)
    },
    hashPassword: function(plainTextPassword) {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(plainTextPassword, salt)
    }
}

UserSchema.pre('save', function(next) {
    if(!this.password) {
        next()
    } else {
        this.password = this.hashPassword(this.password)
        next()
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = User