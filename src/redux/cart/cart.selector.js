import { createSelector } from 'reselect';

//first type - input selector - does not use createSelector.
const selectCart = state => state.cart;


//second type - output selector - does use input Selector and CreateSelector to build them seleves.

// first argument is an array of input selectors
// second argument is going to be a function that will return a value we want out of selectors.
export const selectCartItems = createSelector(
    [selectCart],
    // argument each output of input selectors
    cart => cart.cartItems
);

// Total Quantity
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => {
        return cartItems.reduce(
            (accumulateQuantity, carItem) =>
                accumulateQuantity + carItem.quantity,
                0
        )   
    }
)
// Total Price selector.
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => {
        return cartItems.reduce(
            (accumulateCartTotal, cartItem) =>
            accumulateCartTotal + (cartItem.quantity * cartItem.price),
            0
        )
    }
)