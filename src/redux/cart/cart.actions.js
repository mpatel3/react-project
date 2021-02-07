import cartItemConst from './cart.types';

export const AddItemToCart = item => {
    return {
        type : cartItemConst.addCartItem,
        payload: item
    }
}