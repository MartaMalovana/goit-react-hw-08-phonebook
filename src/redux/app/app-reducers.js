import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import actions from './app-actions';
import {fetchContacts, addNewContact, deleteContactById, filteredContacts} from './app-operations';

const items = createReducer([], {
    [fetchContacts.fulfilled]: (_, {payload}) => payload,
    [addNewContact.fulfilled]: (state, {payload}) => [...state, payload],
    [deleteContactById.fulfilled]: (state, {payload}) => state.filter(el => el.id !== payload.id),
})

const filter = createReducer('', {
    [actions.handleChange]: (state, action) => {
        return action.payload;
    },
    [filteredContacts.fulfilled]: (state, {payload}) => payload,
});

const loader = createReducer(false, {
[fetchContacts.pending]: (state, action) => true,
[fetchContacts.fulfilled]: (state, action) => false,
})

export default combineReducers({
    items,
    filter,
    loader,
});