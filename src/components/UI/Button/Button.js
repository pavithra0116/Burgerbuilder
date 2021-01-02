import React from 'react';

import './Button.scss';

const button = (props) => {
    console.log(props);
    // let className = (props.btnType == 'success') ? 'button success' : 'button danger';
    let className = ['button', props.btnType].join(' ');
    return <button className={className}
        onClick={props.clicked}>
        {props.children}
    </button>
};

export default button;