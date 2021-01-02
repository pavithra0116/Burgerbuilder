import React from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span> : {props.ingredients[igKey]}
                </li>);
        })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients : </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price : {props.totalPrice.toFixed(2)}$</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='danger' clicked={props.cancelOrderHandler}>CANCEL</Button>
            <Button btnType='success' clicked={props.placeOrderHandler}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;