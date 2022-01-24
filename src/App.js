import React, {useState, useEffect} from 'react';
import { nanoid } from 'nanoid';
import ContactsList from './components/ContactsList/ContactsList';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import './App.css';

export default function App () {
  
  const useLocalStorage = (param, defaultValue) => {
    const [state, setState] = useState(() => {
      return JSON.parse(window.localStorage.getItem(param)) ?? defaultValue;
    });

    useEffect(() => {
      window.localStorage.setItem(param, JSON.stringify(state));
    }, [param, state]);

    return [state, setState];
  }

  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filterContacts, setFilter] = useLocalStorage('filterContacts', '');

  const handleChange = event => {
    setFilter(event.currentTarget.value);
   };

  const addContact = ({newName, newNumber}) => {
      setContacts((prev) => [...prev, {name: newName, number: newNumber, key: nanoid()}]);
  };

  const getFilteredContacts = () => {
      if(contacts === []) {
        return;
      } 
      
      if(filterContacts === '') {
        return contacts;
      }
      
      return contacts.filter(contact => 
        contact.name.toLowerCase()
        .includes(filterContacts.toLowerCase()) 
      );
  };
    

  const deleteContact = (name) => {
    const newContacts = contacts.filter(contact => contact.name !== name);
    setContacts(newContacts);
  }

  return (
    <div className="App">
      
      <h2 id="title-phonebook">Phonebook</h2>
      <ContactForm formSubmit={addContact} contactArr={contacts}></ContactForm>
      
      <h2 id='contacts-title'>Contacts</h2>
      <Filter onChange={handleChange} filter={filterContacts}></Filter>
      <ContactsList data={getFilteredContacts()} deleteContact={deleteContact}></ContactsList>

    </div>
  );
};

