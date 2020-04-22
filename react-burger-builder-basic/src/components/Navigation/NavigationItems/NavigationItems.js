import React from 'react';
import styleCSS from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
//Passing active as it as cause we can pass boolean like that :: active ={false}
const navigationItems = () => (
    <ul className = {styleCSS.NavigationItems}> 
      <NavigationItem link = "/" active > Burger Builder </NavigationItem> 
      <NavigationItem link = "/" > Checkout </NavigationItem>
    </ul>

);

export default navigationItems;