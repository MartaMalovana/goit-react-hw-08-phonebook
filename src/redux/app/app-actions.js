import { createAction } from "@reduxjs/toolkit";


const handleChange = createAction('app/filterContacts');

const addContact = createAction('contacts/addContact');
// const getFilteredContacts = createAction('contacts/filterContacts');

const deleteContact = createAction('contasts/deleteContact');

export default {handleChange, addContact, deleteContact};