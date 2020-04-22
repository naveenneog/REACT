import React from 'react';
import styleCSS from './Logo.css';
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = (props) => {
    return (
        <div className = {styleCSS.Logo}>
            <img src = {burgerLogo} alt ="Burger King" />
        </div>
    )
};

export default logo;
