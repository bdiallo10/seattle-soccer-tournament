const express = require('express');
const app = express();

require('dotenv').config();

const routes = require('./routes');
const cors = require('cors');
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport')



const port = process.env.PORT || 5000;

// middleware - JSON parsing
app.use(express.json());

//middle - cors
const corsOptions = {
    origin: ['http://localhost:3000'],
    credentials: true,
    optionsSuccessStatus: 204
}

app.use(cors(corsOptions));

app.use(session({
    store: new MongoStore({url: process.env.ATLAS_URI }),
    secret: 'Ilovesoccer',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

// middleware - passport config
app.use(passport.initialize())
app.use(passport.session())


// const test = (req, res, next) => {
//     console.log("testing")
//     next()
// }

// middleware API routes
app.use('/api/v1/tournament', routes.tournament)
app.use('/api/v1/team', routes.team)
app.use('/api/v1/player', routes.player)
app.use('/api/v1/auth', routes.auth)

app.listen(process.env.PORT || 3000)