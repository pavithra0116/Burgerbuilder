import React from 'react';

import './Logo.scss';
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = (props) => (
    <div className='logo'>
        <img src={burgerLogo} alt='MyBurger' />
    </div>
);

export default logo;