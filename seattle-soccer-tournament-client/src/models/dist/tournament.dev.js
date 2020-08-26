// const url =`http://localhost:3000/api/v1/tournament`
// class TournamentModel {
//     static all = () => {
//         return fetch(`${url}/tournament`).then(res => res.json())
//     }
//     static show = (tournamentId) => {
//         return fetch(`${url}/tournament/${tournamentId}`).then(res => res.json())
//     }
//     static create = (tournamentData) => {
//         return fetch(`${url}/tournament`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(tournamentData)
//         })
//             .then(res => res.json())
//     }
// }
// export default TournamentModel
"use strict";