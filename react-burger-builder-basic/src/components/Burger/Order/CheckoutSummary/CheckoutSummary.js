import React from 'react';
import Burger from '../../Burger';
import Button from '../../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
return (
    <div className ={classes.CheckoutSummary} > 

        <h1> Have a best burger in town !</h1>
        <div style = {{width: "100%" , height : "300px" , margin : "auto"}}>
            <Burger ingredients = {props.ingredients}/>
        </div>
        <Button 
            btnType = "Danger" 
            clicked>CANCEL</Button>
        <Button 
            btnType = "Success"
            clicked
             > CONTINUE </Button>
    </div>
)
}

export default  checkoutSummary;