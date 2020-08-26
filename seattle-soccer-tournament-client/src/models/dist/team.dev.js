// const url =`http://localhost:3000/api/v1/team`
// class TeamModel {
//     static all = () => {
//         return fetch(`${url}/team`).then(res => res.json())
//     }
//     static show = (teamId) => {
//         return fetch(`${url}/team/${teamId}`).then(res => res.json())
//     }
//     static create = (teamData) => {
//         return fetch(`${url}/team`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(teamData)
//         })
//             .then(res => res.json())
//     }
// }
// export default TeamModel
"use strict";