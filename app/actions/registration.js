import * as types from '../constants/actionTypes';
import { sendCode, resendCode, confirmCode, sendSecurityCode, getLocationList, sendUserPersonalData, makeCancelable } from '../services/api.js'

export function sendConfirmationCode(phoneNumber) {
  return {
    type: types.PHONE_NUMBER_SENT,
    payload: sendCode(phoneNumber)
  }
}

export function resendConfirmationCode(phoneNumber) {
  return {
    type: types.CONFIRMATION_CODE_RESEND,
    payload: resendCode(phoneNumber)
  }
}

export function confirmSMSCode(phoneNumber, code) {
  return {
    type: types.CONFIRM_CODE,
    payload: confirmCode(phoneNumber, code)
  }
}

export function cleanErrors() {
  return {
    type: types.CLEAN_ERRORS
  };
}

export function exitApp() {
  return {
    type: types.EXIT_APP
  };
}