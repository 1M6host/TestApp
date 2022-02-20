import { createReducer } from "@reduxjs/toolkit";
import { fbLogoutManager } from "../../Constants/LoginManager";
import { clearAll, setData } from "../../Constants/Utls";
import * as types from '../actions/types';

export const Reducer = createReducer({}, {
    [types.CONST_KEY.LOGIN](state, action) {
        console.log("Reducer: ", action);
        setData("loginCreds", action.data)
        return ({ ...state, loginCredentials: action.data });
    },
    [types.CONST_KEY.LOGOUT](state, action) {
        console.log("Reducer : ", action);
        fbLogoutManager()
        clearAll("loginCreds")
        return (null);
    },
})
