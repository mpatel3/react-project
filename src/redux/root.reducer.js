import { combineReducers } from "redux";
import userReducer from './user/user.reducer';
import cartReducer from './cart/car-item.reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});
