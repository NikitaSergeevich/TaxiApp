import * as types from '../constants/actionTypes';

export function cleanStore() {
  return {
    type: types.CLEAN_STORE
  };
}