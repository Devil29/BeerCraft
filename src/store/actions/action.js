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

export const addItemToCart = (itemDetails) => {
    return {
        type: ACTION_TYPES.ADD_ITEM_TO_CART,
        itemDetails
    }
}

export const editItemInCart = (itemDetails) => {
    return {
        type: ACTION_TYPES.EDIT_ITEM_IN_CART,
        itemDetails
    }
}

export const removeItemFromCart = (itemId) => {
    return {
        type: ACTION_TYPES.REMOVE_ITEM_FROM_CART,
        itemId
    }
}