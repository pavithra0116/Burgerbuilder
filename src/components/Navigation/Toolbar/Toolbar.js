import React from 'react';

import './Toolbar.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className='toolbar'>
        <DrawerToggle sideDrawerToggleHandler={props.sideDrawerToggleHandler} />
        <Logo />
        <nav className='desktopOnly'>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;