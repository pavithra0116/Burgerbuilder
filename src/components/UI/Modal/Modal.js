import React, { Component } from 'react';

import './Modal.scss';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isShow !== this.props.isShow
    }
    render() {
        return <Aux>
            <Backdrop isShow={this.props.isShow} clicked={this.props.closeModal} />
            <div
                className='modal'
                style={{
                    transform: this.props.isShow ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.isShow ? '1' : '0'
                }}>
                {this.props.children}
            </div>
        </Aux>
    }
}

export default Modal;