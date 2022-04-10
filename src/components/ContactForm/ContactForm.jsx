import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "@mui/material";
import { addContact } from "../../redux/authNav/authNav-operations";
import {getContactArr} from '../../redux/contactForm/contactForm-selectors';

export default function ContactForm () {

    const contactArr = useSelector(getContactArr);
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChangeName = event => {
      setName(event.currentTarget.value);

      if(contactArr === []) {
        return;
      }
    };
     
    const handleChangeNumber = (event) => {
         setNumber(event.currentTarget.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      if(contactArr.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
        toast(`Ім'я '${name}' вже існує!`);
        return;
      }
        dispatch(addContact({name: name, number: number}));
        setName('');
        setNumber('');
    }
    
    return (
      <>
      <form onSubmit={handleSubmit}>
        <h2 id="title-phonebook">PHONEBOOK</h2>
        <label> 
          <h3 id="title-name">Name</h3>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Sherlock Holmes"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            autoComplete="off"
            onChange={handleChangeName}
            value={name}
          >
          </input>
        </label>
        <label>
          <h3 id="title-tel">Phone number</h3>
          <input
            type="tel"
            name="number"
            id="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="095-555-55-55"
            required
            autoComplete="off"
            onChange={handleChangeNumber}
            value={number}
          />
        </label>
        <Button variant="text" id="add-name" type="submit" >Add contact</Button>
        <ToastContainer />
      </form>
      </>
    );
  
}
