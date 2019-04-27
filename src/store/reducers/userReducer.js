import * as ACTION_TYPES from '../actions/action_types'

const initialState = {
    user: null
}

const userReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case ACTION_TYPES.USER_CALL_SUCCESS:
            return {
                ...state,
                user: action.user
            }
        case ACTION_TYPES.USER_CALL_FAILURE:
            return {
                ...state,
                user: null
            };

        default:
            return state;
    }
}

export default userReducer;