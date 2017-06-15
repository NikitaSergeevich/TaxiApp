import {combineReducers} from 'redux';
import * as userReducer from './userReducer';
import * as masterdataReducer from './masterdataReducer';
import * as registrationReducer from './registrationReducer';
import * as navReducer from './navReducer';

export default combineReducers(Object.assign(
  userReducer,
  masterdataReducer,
  registrationReducer,
  navReducer,
));
