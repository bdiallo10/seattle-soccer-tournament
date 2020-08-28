const tournamenturl =`http://localhost:5000/api/v1`

class TournamentModel {
    static all = () => {
        return fetch(`${tournamenturl}/tournament`).then(res => res.json())
    }
    static show = (tournamentId) => {
        return fetch(`${tournamenturl}/tournament/${tournamentId}`).then(res => res.json())
    }
    static create = (tournamentData) => {
        return fetch(`${tournamenturl}/tournament`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tournamentData)
        })
            .then(res => res.json())
    }
    static delete = (tournamentId) => {
        return fetch(`${tournamenturl}/tournament/${tournamentId}`, {
            method: "DELETE",

        })
    }
    static update = (updatedTournament) => {
        let tournamentId = updatedTournament.tournamentId
        return fetch(`${tournamenturl}/tournament/${tournamentId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedTournament)
        })
        .then(res => res.json())
    }
    
    //Delete button, I must grap the ID of the specific tournament 
}

export default TournamentModel