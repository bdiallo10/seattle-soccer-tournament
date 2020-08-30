const db = require('../models')
const bcrypt = require('bcrypt')

//User login in
const login = (req, res) => {
    console.log("hello")
    res.json( {
        email: req.user.email,
        password: req.user.password
    } )
}

// User registration
const register = (req, res) => {
    console.log('register')
    const {name, email, username, password} = req.body

    if(!name || !email || !username || !password) {
        return res.json({
            message: 'Please enter a name, an email and a password'
        })
    }

    //making sure the user doesn't already exist
    db.User.findOne({ email: email }, (err, foundUser) => {
        if(err) return res.json({
        })

        if(foundUser) return res.json({
            message: "An acount with that email already exists"
        })

    const newUser = new db.User({
        name,
        username,
        email,
        password

    })

    newUser.save((err, savedUser) => {
        if(err) res.json(err)
        res.json(savedUser)
    })
})
}

const logout = (req, res) => {
    console.log(req.user)
    if(!req.user) return res.json({
        message: 'No User to log out'
    })

    req.logout()
    res.json({ message: "User logged out"})
}

// const verify = (req, res) => {
//research about what it does
// }

module.exports = {
    login,
    register,
    logout,
    //verify
}