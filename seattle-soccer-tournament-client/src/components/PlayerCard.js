import React from 'react';

const PlayerCard = (props) => {
    return (
        <div className="PlayerCard">
           <h3> {props.playerName} </h3> 
           <p> {props.age} </p>
           <p> {props.countryOfOrigin} </p>
           <p> {props.playerLocation} </p>
           <p> {props.timestamps} </p>
            {/* <button onClick={this.deleteTeam}>Delete Team</button> */}
        </div>
    );
}

export default PlayerCard;
