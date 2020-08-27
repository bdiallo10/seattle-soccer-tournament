import React from 'react';



const TeamCard = (props) => {
    return (
        <div className="TeamCard">
            <h3> Team Name: {props.teamName} </h3>
            <p> Team Manager: {props.manager} </p>
            <p> Team Captain: {props.captain} </p>
            <p> Location: {props.teamLocation} </p>
            <p> {props.timestamps } </p>
        </div>
    );
}

export default TeamCard;
