import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

//den xreazetai payload einai optional 
//alla ston reducer apla vazoume to antitheto
//tou current state-hidden.

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload:item
});