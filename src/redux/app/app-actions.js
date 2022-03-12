import { createAction } from "@reduxjs/toolkit";

const fetchAllContacts = createAction('contacts/fetchContacts');
const handleChange = createAction('contacts/filterContacts');
const addContact = createAction('contacts/addContact');
const deleteContact = createAction('contasts/deleteContact');

export default {fetchAllContacts, handleChange, addContact, deleteContact};