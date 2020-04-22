import React from 'react';
import styleCSS from './Button.css';

const button = (props) => {
    return (
    <button className = {[styleCSS.Button , styleCSS[props.btnType]].join(' ')}
    onClick = {props.clicked}>
        {props.children}
    </button>)
}

export default button;