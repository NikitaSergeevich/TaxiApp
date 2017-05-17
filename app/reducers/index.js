import {combineReducers} from 'redux';
import * as userReducer from './userReducer';
import * as masterdataReducer from './masterdataReducer';
import * as registrationReducer from './registrationReducer';

export default combineReducers(Object.assign(
  userReducer,
  masterdataReducer,
  registrationReducer,
));
