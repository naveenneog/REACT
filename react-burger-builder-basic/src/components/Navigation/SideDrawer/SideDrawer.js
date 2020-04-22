import React from 'react';
import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styleClasses from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) => {
    let attachedClasses = [styleClasses.SideDrawer , styleClasses.Close];
    if(props.open) {
        attachedClasses = [styleClasses.SideDrawer , styleClasses.Open];
    }
    return (
        <Aux>
            <Backdrop  show = {props.open} closeFunc = {props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={styleClasses.Logo}>
                    <Logo />
                </div>
                <nav >
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;