import React from 'react';

const TournamentCard = (props) => {
    return (
        <div className="TournamentCard">
            <h3>{ props.title}</h3>
            <p> { props.administrator}</p>
            <p> {props.date} </p>
            <p> {props.location} </p>
            <p> {props.timestamps} </p>
        </div>
    );
}

export default TournamentCard;
