import * as ACTION_TYPES from './action_types'

export const success = (beerList) => {
    console.log("here");
    console.log(beerList);
    return {
        type: ACTION_TYPES.BEER_CALL_SUCCESS,
        beerList
    }
}

export const failure = () => {
    return {
        type: ACTION_TYPES.BEER_CALL_FAILURE
    }
}