import beerReducer from './beerReducer';

import { combineReducers } from 'redux';
import userReducer from './userReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    beer: beerReducer,
    user: userReducer,
    cart: cartReducer
});

export default rootReducer;