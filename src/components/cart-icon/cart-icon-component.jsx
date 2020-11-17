import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {toggleCartHidden} from '../../redux/cart/cart.action.js';
import {selectCartItemCount} from '../../redux/cart/cart.selectors.js'
import './cart-icom.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

const CartIcon = ({toggleCartHidden,itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count"> {itemCount} </span>
    </div>
)
const mapStateToProps = createStructuredSelector({
    itemCount : selectCartItemCount
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
