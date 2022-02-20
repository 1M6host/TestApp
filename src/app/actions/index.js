import * as types from './types'
export const login = data => ({ type: types.CONST_KEY.LOGIN, data });
export const logout = data => ({ type: types.CONST_KEY.LOGOUT, data });
