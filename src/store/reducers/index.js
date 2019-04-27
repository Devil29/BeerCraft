import beerReducer from './beerReducer';

import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    beer: beerReducer,
    address: userReducer
});

export default rootReducer;