import * as types from '../constants/actionTypes';

export function registrationReducer(state = {
  confirmTimeElapsed: 30000,
  incorrectConfirmationCode: false,
}, action) {
  switch (action.type) {
    case types.CONFIRM_CODE + "_FULLFILLED":
      return {
        ...state, isCorrectConfirmationCode: true
      };
    case types.CONFIRM_CODE + "_REJECTED":
      let incorrectConfirmationCode = false;
      if (action.payload.ErrorCode == 2) {
        incorrectConfirmationCode = true;
      }
      return {
        ...state, incorrectConfirmationCode: incorrectConfirmationCode
      };

    case types.CLEAN_ERRORS:
      return {
        ...state, incorrectConfirmationCode: false
      };

    case types.CONFIRMATION_CODE_RESEND + "_FULLFILLED":
      return {
        ...state
      };
    case types.CONFIRMATION_CODE_RESEND + "_REJECTED":
      return {
        ...state
      };
    default:
      return { ...state }
  }
}