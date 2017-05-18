import * as Actions from '../constants/actions';

export interface UserState {
    accessToken: string
    phoneNumber: string
    init: boolean
}

const initialState: UserState = {
    accessToken: '5q2fx38xxn4h7u98gds5780jkj2y35xhlkhbf',
    phoneNumber: '+7 999 495 5555',
    init: false
}

export function user(state = initialState, action): UserState {
    const {type, payload} = action
    switch (action.type) {
        case Actions.PHONE_NUMBER_SENT + '_FULFILLED':
            return {...state,phoneNumber: action.payload};      
        case Actions.CONFIRM_CODE + '_FULFILLED':
            return { ...state, accessToken: action.payload};
        case Actions.EXIT_APP:
            return {
                ...state,
                pincode: '',
                accessToken: '',
                personalData: '',
            };
    default:
      return { ...state }
  }
}