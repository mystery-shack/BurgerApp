import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient'

const burger = (props) => {
    let transformedIngredient = Object.keys(props.ingredients).map((igKey) => {
        return ([...Array(props.ingredients[igKey])]
            .map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            })
        )
    }).reduce((prev, curr) => {
        return prev.concat(curr);
            }, []);
    console.log(transformedIngredient);

    transformedIngredient = transformedIngredient.length === 0 ? <p>Please Add ingredients</p> :transformedIngredient
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="burger-top" />
            {transformedIngredient}
            <BurgerIngredient type="burger-bottom" />
        </div>
    )
}

export default burger;