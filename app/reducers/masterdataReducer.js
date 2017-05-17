import * as types from '../constants/actionTypes';

export function masterdataReducer(state = {
}, action) {
    switch (action.type) {
        case types.EXIT_APP:
            return {
                ...state,
            };
            break;
        default:
            return { ...state }
    }
}
