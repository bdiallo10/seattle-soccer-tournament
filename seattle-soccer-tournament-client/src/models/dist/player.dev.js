// const url =`http://localhost:3000/api/v1/player`
// class PlayerModel {
//     static all = () => {
//         return fetch(`${url}/player`).then(res => res.json())
//     }
//     static show = (playerId) => {
//         return fetch(`${url}/player/${playerId}`).then(res => res.json())
//     }
//     static create = (playerData) => {
//         return fetch(`${url}/player`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(playerData)
//         })
//             .then(res => res.json())
//     }
// }
// export default PlayerModel
"use strict";