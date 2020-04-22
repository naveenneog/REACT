import React from 'react';
import styleCSS from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => {
   return (
   <header className = {styleCSS.Toolbar}>
        <DrawerToggle clicked ={props.drawerToggleClicked}/>
       <div className = {styleCSS.Logo}> 
       <Logo/>
           </div> 
        <nav className = {styleCSS.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
   );
}

export default toolbar;