import React from 'react';

import './Backdrop.scss';

const backDrop = (props) => (
    props.isShow ?
        <div
            className='backDrop'
            onClick={props.clicked}>
        </div> : null
);

export default backDrop;