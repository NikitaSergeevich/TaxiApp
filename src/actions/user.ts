import * as Actions from '../constants/actions'

export interface Interface {
    confirmCode(accessToken:string): Action
}

export const confirmCode = accessToken => ({type: Actions.CONFIRM_CODE, payload: accessToken})