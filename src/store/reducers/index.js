import beerReducer from './beerReducer';

import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    beer: beerReducer,
    user: userReducer
});

export default rootReducer;