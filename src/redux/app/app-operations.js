import { createAsyncThunk } from '@reduxjs/toolkit';
import {fetchContactsAPI, addNewContactAPI, deleteContactAPI} from '../../services/contacts-api';
import actions from './app-actions'; 

export const fetchContacts = createAsyncThunk(actions.fetchAllContacts, async () => {
    const contacts = await fetchContactsAPI();
    return contacts;
});

export const addNewContact = createAsyncThunk(actions.addContact, async (contact) => {
    const newContact = await addNewContactAPI(contact);
    return newContact;
});

export const deleteContactById = createAsyncThunk(actions.deleteContact, async (id) => {
    const deletedContact = await deleteContactAPI(id);
    return deletedContact;
})

export const filteredContacts = createAsyncThunk(actions.handleChange, async (filter) => {
    return filter;
})

export const openModal = createAsyncThunk('contacts/openModal', async (contact) => {
    return contact;
})

export const changeName = createAsyncThunk('contacts/changeName', async (name) => {
    return name;
})

export const changeNumber = createAsyncThunk('contacts/changeNumber', async (number) => {
    return number;
})

export const closeModal = createAsyncThunk('contacts/closeModal', async () => {
})
