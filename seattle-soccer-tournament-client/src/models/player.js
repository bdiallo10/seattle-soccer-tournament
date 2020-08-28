const playerurl =`http://localhost:5000/api/v1`

class PlayerModel {
    static all = () => {
        return fetch(`${playerurl}/player`).then(res => res.json())
    }
    static show = (playerId) => {
        return fetch(`${playerurl}/player/${playerId}`).then(res => res.json())
    }
    static create = (playerData) => {
        return fetch(`${playerurl}/player`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(playerData)
        })
            .then(res => res.json())
    }

    static delete = (playerId) => {
        return fetch(`${playerurl}/player/${playerId}`, {
            method: "DELETE",

        })
    }
    static update = (updatedPlayer) => {
        let playerId = updatedPlayer.playerId
        console.log(playerId)
        return fetch(`${playerurl}/player/${playerId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },            
            body: JSON.stringify(updatedPlayer)
        })
        .then(res => res.json())
    }
   
}

export default PlayerModel