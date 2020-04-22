import React from 'react';
import styleClasses from './Backdrop.css';

const backdrop = (props) => {
   return( props.show ? <div onClick = {props.closeFunc} className ={styleClasses.Backdrop}></div> : null)
}

export default backdrop;