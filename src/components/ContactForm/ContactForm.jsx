import React, {Component} from "react";

export default class ContactForm extends Component {

    state = {
      name: '',
    number: ''
    };

    handleChangeName = event => {
      this.setState ({
        name:  event.currentTarget.value,
       });

      this.props.contactArr.find(contact => contact.name.toLowerCase() === event.currentTarget.value.toLowerCase()) &&
      alert(`${event.currentTarget.value} is already in contacts!`);
     
    };
     
    handleChangeNumber = (event) => {
          this.setState ({
             number:  event.currentTarget.value,
          });
    };

    handleSubmit = (event) => {
      event.preventDefault();
      const {name, number} = this.state;
      this.props.formSubmit({newName: name, newNumber: number});
      this.setState({name: "", number: ""});
    }
    render () {
      const {name, number} = this.state;
        return (<form onSubmit={this.handleSubmit}>
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
                onChange={this.handleChangeName}
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
                onChange={this.handleChangeNumber}
                value={number}
              />
            </label>
            <button id="add-name" type="submit">Add contact</button>
          </form>
        );
    }
}

