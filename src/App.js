import React, {Component} from 'react';
import { nanoid } from 'nanoid';
import ContactsList from './components/ContactsList/ContactsList';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import './App.css';

export default class App extends Component {
  state = {
    contacts: [],
    filter: ""
  };
  
  handleChange = event => {
    this.setState ({
     filter:  event.currentTarget.value,
    });
   };

  addContact = ({newName, newNumber}) => {
        this.setState(prev => {
          return {contacts: [...prev.contacts, {name: newName, number: newNumber, key: nanoid()}]
          };
        });
  };

  getFilteredContacts = () => {
    return this.state.contacts.filter(contact => 
      contact.name.toLowerCase()
      .includes(this.state.filter.toLowerCase())
    );
  }

  deleteContact = (name) => {
    this.setState(prev => {
      const newContacts = prev.contacts.filter(contact => contact.name !== name);
      return {contacts: newContacts};
    });
  }

  componentDidMount () {
   if(localStorage.getItem('contacts')) {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    this.setState({contacts: savedContacts});
   };
  };

  componentDidUpdate (prevProps, prevState) {
    if(prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  render () {
    const filteredContacts = this.getFilteredContacts();
    return (
      <div className="App">
        
        <h2 id="title-phonebook">Phonebook</h2>
        <ContactForm formSubmit={this.addContact} contactArr={this.state.contacts}></ContactForm>
        
        <h2 id='contacts-title'>Contacts</h2>
        <Filter onChange={this.handleChange} filter={this.state.filter}></Filter>
        <ContactsList data={filteredContacts} delete={this.deleteContact}></ContactsList>

      </div>
    );
  };
};

