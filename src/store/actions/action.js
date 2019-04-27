import * as ACTION_TYPES from './action_types'

export const successBeerCall = (beerList) => {
    console.log("here");
    console.log(beerList);
    return {
        type: ACTION_TYPES.BEER_CALL_SUCCESS,
        beerList
    }
}

export const failureBeerCall = () => {
    return {
        type: ACTION_TYPES.BEER_CALL_FAILURE
    }
}

export const successUserCall = (user) => {
    console.log(user);
    return {
        type: ACTION_TYPES.USER_CALL_SUCCESS,
        user
    }
}

export const failureUserCall = () => {
    return {
        type: ACTION_TYPES.USER_CALL_FAILURE
    }
}