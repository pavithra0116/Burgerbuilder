import React from 'react';

import './BuildControl.scss'

const buildControl = (props) => (
    <div className='buildControl'>
        <div className='label'>{props.label}</div>
        <button
            className='less'
            onClick={props.removeIngredientHandler}
            disabled={props.isdisable}>
            Less
        </button>
        <button
            className='more'
            onClick={props.addIngredientHandler}>
            More
        </button>
    </div>
);

export default buildControl;