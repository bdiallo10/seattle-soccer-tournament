import React from 'react';



const TeamCard = (props) => {
    return (
        <div className="TeamCard">
            <h3> {props.teamName} </h3>
            <p> {props.manager} </p>
            <p> {props.captain} </p>
            <p> {props.teamLocation} </p>
            <p> {props.timestamps } </p>
        </div>
    );
}

export default TeamCard;
