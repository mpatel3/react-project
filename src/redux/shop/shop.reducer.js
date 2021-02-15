import { ShopActionTypes } from './shop.types';

const INITIAL_STATE = {
    collections: {},
    isFetching: false,
    errorMessage: ''
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ShopActionTypes.FETCH_SHOPCOLLECTION_START:
            return {
                ...state,
                isFetching: true
            }
        case ShopActionTypes.FETCH_SHOPCOLLECTION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case ShopActionTypes.FETCH_SHOPCOLLECTION_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;