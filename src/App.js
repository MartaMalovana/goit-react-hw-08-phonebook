import {useEffect} from 'react';
import { useDispatch } from "react-redux";
import ContactsList from './components/ContactsList/ContactsList';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import './App.css';
import {fetchContacts} from './redux/app/app-operations';

export default function App () {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <div className="App">
      
      <h2 id="title-phonebook">Phonebook</h2>
      <ContactForm />
      
      <h2 id='contacts-title'>Contacts</h2>
      <Filter />
      <ContactsList />

    </div>
  );
};

