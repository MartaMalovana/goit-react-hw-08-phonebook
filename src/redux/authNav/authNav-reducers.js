import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { register, login, logout, fetchCurrentUser} from "./authNav-operations";

const user = createReducer(null, {
    [register.fulfilled]: (state, {payload}) => payload.user,
    [login.fulfilled]: (state, {payload}) => payload.user,
    [logout.fulfilled]: (state, action) => null,
    [fetchCurrentUser.fulfilled]: (state, {payload}) => payload,
});

const token = createReducer('', {
    [register.fulfilled]: (state, {payload}) => payload.token,
    [register.rejected]: (state, {payload}) => '',
    [login.fulfilled]: (state, {payload}) => payload.token,
    [logout.fulfilled]: (state, action) => '',
});

const isLoggedIn = createReducer(false, {
    // [register.fulfilled]: (state, {payload}) => true,
    [login.fulfilled]: (state, {payload}) => true,
    [login.rejected]: (state, {payload}) => false,
    [register.rejected]: (state, {payload}) => false,
    [logout.fulfilled]: (state, action) => false,
    [fetchCurrentUser.fulfilled]: (state, action) => true,
});

export default combineReducers({
    user,
    token,
    isLoggedIn,
})