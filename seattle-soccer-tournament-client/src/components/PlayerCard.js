import React from 'react';

const PlayerCard = (props) => {
    return (
        <div className="PlayerCard">
           <h3> Name: {props.playerName} </h3> 
           <p> Age: {props.age} </p>
           <p> Country of Origin: {props.countryOfOrigin} </p>
           <p> Location: {props.playerLocation} </p>
           <p> {props.timestamps} </p>
            {/* <button onClick={this.deleteTeam}>Delete Team</button> */}
        </div>
    );
}

export default PlayerCard;
