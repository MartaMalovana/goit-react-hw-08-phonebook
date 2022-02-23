import { createAction } from "@reduxjs/toolkit";

const handleChange = createAction('contacts/filterContacts');
const addContact = createAction('contacts/addContact');
const deleteContact = createAction('contasts/deleteContact');

export default {handleChange, addContact, deleteContact};