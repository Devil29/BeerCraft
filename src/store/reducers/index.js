import beerReducer from './beerReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    beer: beerReducer
});

export default rootReducer;