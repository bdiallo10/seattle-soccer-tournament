const teamurl =`http://localhost:5000/api/v1`

class TeamModel {
    static all = () => {
        return fetch(`${teamurl}/team`).then(res => res.json())
    }
    static show = (teamId) => {
        return fetch(`${teamurl}/team/${teamId}`).then(res => res.json())
    }
    static create = (teamData) => {
        return fetch(`${teamurl}/team`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(teamData)
        })
            .then(res => res.json())
    }
    static delete = (teamId) => {
        return fetch(`${teamurl}/team/${teamId}`, {
            method: "DELETE",

        })
    }
    static update = (updatedTeam) => {
        let teamId = updatedTeam.teamId
        return fetch(`${teamurl}/team/${teamId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedTeam)
        })
        .then(res => res.json())
    }

}

export default TeamModel