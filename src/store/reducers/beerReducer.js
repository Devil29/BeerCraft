import * as ACTION_TYPES from '../actions/action_types'

const initialState = {
    beerList: []
}

const beerReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case ACTION_TYPES.BEER_CALL_SUCCESS:
            return {
                ...state,
                beerList: action.beerList
            }
        case ACTION_TYPES.BEER_CALL_FAILURE:
            return {
                ...state,
                beerList: []
            };

        default:
            return state;
    }
}

export default beerReducer;