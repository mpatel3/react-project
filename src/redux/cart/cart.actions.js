import cartItemConst from './cart.types';

export const AddItemToCart = item => {
    return {
        type : cartItemConst.addCartItem,
        payload: item
    }
}

export const increaseItemCount = item => {
    return {
        type: cartItemConst.increaseItemCount,
        payload: item
    }
}

export const decreaseItemCount = item => {
    return {
        type: cartItemConst.decreaseItemCount,
        payload: item
    }
}