export const addShopItemInCart = (cartItems, itemToAdd) => {

    // if item exits then just increase the quantity
    // if not create a new item in the cart.
    const isExist = cartItems.find((item) => item.id === itemToAdd.id);
    if(isExist) {
        return cartItems.map(cartItem =>
            cartItem.id === itemToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    // First case if not exist then probably add new item and 
    return [...cartItems, {...itemToAdd, quantity: 1} ];

}

export const removeShopItemInCart = (cartItems, itemToRemove) => {
    const existingItem = cartItems.find(item => item.id ===  itemToRemove.id);

    if(existingItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
    } else {
        return cartItems.map(cartItem =>
            cartItem.id === itemToRemove.id 
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
        )
    }
}