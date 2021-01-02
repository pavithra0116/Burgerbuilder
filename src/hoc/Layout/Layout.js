import React, { Component } from 'react';

import './Layout.scss';
import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        isShowSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({ isShowSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { isShowSideDrawer: !prevState.isShowSideDrawer }
        });
    }

    render() {
        return <Aux>
            <Toolbar sideDrawerToggleHandler={this.sideDrawerToggleHandler} />
            <SideDrawer
                isShowSideDrawer={this.state.isShowSideDrawer}
                sideDrawerCloseHandler={this.sideDrawerCloseHandler} />
            <div> Toolbar, SideDrawer, Backdrop</ div>
            <main className='content'>
                {this.props.children}
            </main>
        </Aux>
    }
}

export default Layout;