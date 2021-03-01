import React from 'react';
import './Player.css'

const Player = (props) => {
    const { fullName, popularName, salary, nationality, age, dateOfBirth, weight, shirtNumber, position, rating, imageURL } = props.player;
    const handleSquad = props.handleSquad;
    return (
        <div className="player">
            <img src={imageURL} alt="" />
            <p className="mt-2">{position}</p>
            <h1>{popularName}</h1>
            <p>${salary}</p>
            <p>{nationality}</p>
            <button className="btn" onClick={() => handleSquad(props.player)}>add</button>
        </div>
    );
};

export default Player;