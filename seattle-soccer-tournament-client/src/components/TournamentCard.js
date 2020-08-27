import React from 'react';

const TournamentCard = (props) => {
    return (
        <div className="TournamentCard">
            <h3>Name: { props.title}</h3>
            <p>Administrator: { props.administrator}</p>
            <p> Start Date: {props.date} </p>
            <p> Location: {props.location} </p>
            <p> {props.timestamps} </p>
        </div>
    );
}

export default TournamentCard;
