import { combineReducers } from "redux";
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // I want to use localStorage as a default storage.
import userReducer from './user/user.reducer';
import cartReducer from './cart/car-item.reducer';
import menuReducer from './menu/menu.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    menu: menuReducer,
});

export default persistReducer(persistConfig, rootReducer);