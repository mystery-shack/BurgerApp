import React from 'react';
import Auxilary from '../../../hoc/Auxilary';
import Button from '../../UI/Button/Button';

const orderSummary =(props) =>{

    const ingredientSummary = Object.keys(props.ingredients);

    let summary = ingredientSummary.map(igkey => {return <li key={igkey}><span style = {{textTransform: 'capitalize'}}>{igkey}: {props.ingredients[igkey]}</span></li>})

    return(
        <Auxilary>

            <h3>Your Order</h3>
            <p>A delicious burger with the following Ingredients: </p>

            <ul>
                {summary}
            </ul>
            <p><strong>{props.TotalPrice}</strong></p>

            <p><strong>DO you want to continue (y/n)</strong></p>

            <Button btnType="Danger" clicked = {props.purchaseCanceled}>Cancel</Button>
            <Button btnType="Success" clicked = {props.purchaseContinue}>Continue</Button>
        </Auxilary>
    )
    

};

export default orderSummary;