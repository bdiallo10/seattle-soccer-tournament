const db = require('./models')
const teamData = require('./teamData.json')
const playerData = require('./playerData.json')
const tournamentData = require('./tournamentData.json')

db.Team.deleteMany({}, (err, deleteTeam) => {
    db.Team.create(teamData.team, (err, seededTeam) => {
        if(err) console.log(err);

        console.log(teamData.team.lenght, 'team created successfully')

        process.exit()
    })
})

db.Player.deleteMany({}, (err, deletePlayer => {
    db.Player.create(playerData.player, (err, seededPlayer) => {
        if(err) console.log(err);

        console.log(playerData.player.lenght, 'Player created successfully')

        process.exit()
    })
}),

db.tournament.deleteMany({}, (err, deleteTournament => {
    db.tournament.create(tournamentData.tournament, (err, seededTournament) => {
        if(err) console.log(err);

        console.log(tournamentData.tournament.length, 'Tournament created successfully')

        process.exit()
    })
})