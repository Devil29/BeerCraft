import beerReducer from './beerReducer';

import { combineReducers } from 'redux';
import addressReducer from './addressReducer';

const rootReducer = combineReducers({
    beer: beerReducer,
    address: addressReducer
});

export default rootReducer;