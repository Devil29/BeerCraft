import * as ACTION_TYPES from '../actions/action_types'

const initialState = {
    addressList: []
}

const userReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case ACTION_TYPES.USER_CALL_SUCCESS:
            return {
                ...state,
                addressList: action.addressList
            }
        case ACTION_TYPES.USER_CALL_FAILURE:
            return {
                ...state,
                addressList: []
            };

        default:
            return state;
    }
}

export default userReducer;