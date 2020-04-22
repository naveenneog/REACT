import React from 'react';
import styleClasses from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    //Way of transforming key value pair objects in to an array
    let transformedIngredients = Object.keys(props.ingredients)
    .map( (igkey) => {
        return [...Array(props.ingredients[igkey])].map((_,i) => {
            console.log(igkey);
            return <BurgerIngredient key ={igkey + i} type = {igkey} />
        });
    }).reduce((arr,el) => {
        return (arr.concat(el));
    } ,[])
    console.log(transformedIngredients);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients !</p>;
    }
    return(
        <div className={styleClasses.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;