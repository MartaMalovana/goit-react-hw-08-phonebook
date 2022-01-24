import React, {useState} from "react";

export default function ContactForm ({contactArr, formSubmit}) {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChangeName = event => {
      setName(event.currentTarget.value);

      if(contactArr === []) {
        return;
      }
      
      contactArr.find(contact => contact.name.toLowerCase() === event.currentTarget.value.toLowerCase()) &&
      alert(`${event.currentTarget.value} is already in contacts!`);
      };
     
    const handleChangeNumber = (event) => {
         setNumber(event.currentTarget.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      formSubmit({newName: name, newNumber: number});
      setName('');
      setNumber('');
    }
    
    return (<form onSubmit={handleSubmit}>
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
        <button id="add-name" type="submit">Add contact</button>
      </form>
    );
  
}

