import React, { useState } from 'react';
import './Player.css'

const Player = (props) => {
    const { fullName, popularName, salary, nationality, age, dateOfBirth, weight, shirtNumber, position, rating, imageURL } = props.player;
    const handleSquad = props.handleSquad;
    const [isConfirm, setIsConfirm] = useState(false);

    return (
        <div className="player">
            <img src={imageURL} alt="" />
            <p className="mt-2">{position}</p>
            <h1>{popularName}</h1>
            <p>${salary}</p>
            <p>{nationality}</p>
            <button className="btn" disabled={isConfirm} onClick={() => {
                handleSquad(props.player)
                setIsConfirm(true)
            }}>{isConfirm ? "in squad" : "Add"}</button>
        </div>
    );
};

export default Player;