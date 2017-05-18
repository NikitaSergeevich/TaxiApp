
import { combineReducers, Reducer } from 'redux'


import {user, UserState} from './user'

export interface RootState {
    user: UserState
}

export default combineReducers<RootState>({
    user
})