import React from "react";
import BurgerIngredients from "./Burgeringredients/Burgeringredients";

import './Burger.css'

const Burger = props => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map(
            (_, i) => (
                <BurgerIngredients key={igKey + i} type={igKey}></BurgerIngredients>
            )
        )
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, [])
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    return (
        <div className="Burger">
            <BurgerIngredients type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    );
};

export default Burger;
