import * as types from '../constants/actionTypes';
import { REHYDRATE } from 'redux-persist/constants'

export function userReducer(state = {
  accessToken: '',
  phoneNumber: '',
  init: false,
}, action) {
  switch (action.type) {
    case REHYDRATE:
      return { ...state, ...action.payload.userReducer, init: true }
    case types.PHONE_NUMBER_SENT + '_FULFILLED':
      return {
        ...state,
        phoneNumber: action.payload
      };      
    case types.CONFIRM_CODE + '_FULFILLED':
      return {
        ...state,
        accessToken: action.payload
      };
    case types.EXIT_APP:
      return {
        ...state,
        pincode: '',
        accessToken: '',
        personalData: '',
      };
      break;
    default:
      return { ...state }
  }
}