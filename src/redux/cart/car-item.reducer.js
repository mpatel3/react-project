import cartItemConst from './cart.types';
import {addShopItemInCart, removeShopItemInCart} from './cart.utils';

const INITIAL_STATE = {
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case cartItemConst.addCartItem:
            return {
                ...state,
                cartItems: addShopItemInCart(state.cartItems, action.payload) 
            }
        case cartItemConst.increaseItemCount: 
            return {
                ...state,
                cartItems: addShopItemInCart(state.cartItems, action.payload) 
            }
        case cartItemConst.decreaseItemCount: 
            return {
                ...state,
                cartItems: removeShopItemInCart(state.cartItems, action.payload) 
            }
        case cartItemConst.clearItemFromCart:
            return {
                ...state, 
                cartItems: state.cartItems.filter(carItem => carItem.id !== action.payload.id)
            }
        case cartItemConst.clearCart: 
            return {
                ...state,
                cartItems: []
            }
        default:
            return state;
    }
}

export default cartReducer;