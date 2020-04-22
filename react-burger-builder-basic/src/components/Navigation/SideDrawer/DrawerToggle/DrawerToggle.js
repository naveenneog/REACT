import React from 'react';
import styleClasses from './DrawerToggle.css';

const drawerToggle = (props) => (
    <div className = {styleClasses.DrawerToggle} onClick ={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;