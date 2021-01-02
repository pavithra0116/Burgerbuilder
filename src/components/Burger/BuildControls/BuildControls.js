import React from 'react';

import './BuildControls.scss';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => (
    <div className='buildControls'>
        <p>Currrent Price : <strong>{props.price.toFixed(2) + '$'}</strong></p>
        {controls.map(ctrl => {
            return <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                addIngredientHandler={() => props.addIngredientHandler(ctrl.type)}
                removeIngredientHandler={() => props.removeIngredientHandler(ctrl.type)}
                isdisable={props.disabledInfo[ctrl.type]} />
        })}
        <button
            className='order_btn'
            disabled={!props.isPurchasable}
            onClick={props.orderHandler}>
            ORDER NOW
        </button>
    </div>
)

export default buildControls;