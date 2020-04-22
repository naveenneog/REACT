import React from 'react';
import './UserOutput.css'

const userOutput = (props) =>{
    return (
        <div className = "UserOutput">
            <p>User name is {props.name}</p>
            <p>Herzlich Willkommen</p>
            <p> Auf wiedersehen </p>
        </div>
    
    );
};

export default userOutput;