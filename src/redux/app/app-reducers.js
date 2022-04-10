import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import actions from './app-actions';
import { filteredContacts, openModal, changeName, changeNumber } from './app-operations';
import { addContact, getUserContacts, deleteContact, changeContact } from "../../redux/authNav/authNav-operations";

const items = createReducer([], {
    [getUserContacts.fulfilled]: (state, {payload}) => payload,
    [addContact.fulfilled]: (state, {payload}) => [...state, payload],
    [deleteContact.fulfilled]: (state, {payload}) => state.filter(el => el.id !== payload),
})

const filter = createReducer('', {
    [actions.handleChange]: (state, action) => {
        return action.payload;
    },
    [filteredContacts.fulfilled]: (state, {payload}) => payload,
});

const loader = createReducer(false, {
// [fetchContacts.pending]: (state, action) => true,
// [fetchContacts.fulfilled]: (state, action) => false,
})

const modalIsOpen = createReducer(false, {
    [openModal.fulfilled]: (state, action) => true,
})

const contactId = createReducer(null, {
    [openModal.fulfilled]: (state, {payload}) => payload.id,
})

const contactName = createReducer(null, {
    [openModal.fulfilled]: (state, {payload}) => payload.name,
    [changeName.fulfilled]: (state, {payload}) => payload,
})

const contactNumber = createReducer(null, {
    [openModal.fulfilled]: (state, {payload}) => payload.number,
    [changeNumber.fulfilled]: (state, {payload}) => payload,
})

export default combineReducers({
    items,
    filter,
    loader,
    modalIsOpen,
    contactId,
    contactName,
    contactNumber,
});