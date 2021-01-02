import React from 'react';

import './SideDrawer.scss'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const sideDrawer = (props) => {
    let className = ['sideDrawer', props.isShowSideDrawer ? 'open' : 'close'].join(' ');
    return (
        <Aux>
            <Backdrop
                isShow={props.isShowSideDrawer}
                clicked={props.sideDrawerCloseHandler} />
            <div className={className}>
                <div className='logo'>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;