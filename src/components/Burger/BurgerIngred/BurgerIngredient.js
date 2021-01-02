import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './BurgerIngredient.scss';

class BurgerIngredient extends Component {

    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread_bottom'):
                ingredient = <div className='bread_bottom'></div>
                break;
            case ('bread_top'):
                ingredient = (
                    <div className='bread_top'>
                        <div className='seeds1'></div>
                        <div className='seeds2'></div>
                    </div>
                )
                break;
            case ('meat'):
                ingredient = <div className='meat'></div>
                break;
            case ('cheese'):
                ingredient = <div className='cheese'></div>
                break;
            case ('salad'):
                ingredient = <div className='salad'></div>
                break;
            case ('bacon'):
                ingredient = <div className='bacon'></div>
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type : PropTypes.string.isRequired
}

export default BurgerIngredient;