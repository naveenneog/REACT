import React from 'react';
import styleClasses from './BuildControl.css';

const buildControl = (props) => (
    <div className = {styleClasses.BuildControl}>
        <div className = {styleClasses.Label}>{props.label}</div>
        <button 
            onClick = {props.added} 
            className = {styleClasses.More}>
                More
            </button>
        <button 
            onClick = {props.removed} 
            className = {styleClasses.Less} 
            disabled = {props.disabled}>
                Less
            </button>
    </div>
);

export default buildControl;