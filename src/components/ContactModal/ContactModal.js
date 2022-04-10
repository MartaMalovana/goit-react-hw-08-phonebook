import ReactModal from 'react-modal';
import React from 'react';
import { Button } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { getModalIsOpen } from '../../redux/app/app-selectors';
import { getContactId, getContactName, getContactNumber } from '../../redux/app/app-selectors';
import { changeName, changeNumber, closeModal } from '../../redux/app/app-operations';
import {changeContact} from '../../redux/authNav/authNav-operations';
import { ButtonClose, Input } from './ContactModal.styled';

const customStyles = {
    overlay: {
        backgroundColor: '#d6d2fd',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

ReactModal.setAppElement('#root');

export default function ContactModal () {
    const dispatch = useDispatch();
    const contactName = useSelector(getContactName);
    const contactNumber = useSelector(getContactNumber);
    const contactId = useSelector(getContactId);
    const modalIsOpen = useSelector(getModalIsOpen);

  const handleChangeName = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleChangeNumber = (event) => {
    dispatch(changeNumber(event.target.value));
  };

  const handleSubmit = (e) => {
    dispatch(changeContact({id: contactId, name: contactName, number: contactNumber}));
    e.preventDefault();
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      <ReactModal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
            <ButtonClose>
              <Button variant="text" name="close-modal" type="button" onClick={handleCloseModal} >X</Button>
            </ButtonClose>
            <label> 
            <h3 id="title-name">Name</h3>
            <Input
                type="text"
                name="name"
                id="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                autoComplete="off"
                onChange={handleChangeName}
                value={contactName}
            />
            </label>
            <label>
            <h3 id="title-tel">Phone number</h3>
            <Input
                type="tel"
                name="number"
                id="tel"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                autoComplete="off"
                onChange={handleChangeNumber}
                value={contactNumber}
            />
            </label>
            <Button variant="text" id="add-name" type="submit">Change</Button>
      </form>
      </ReactModal>
    </div>
  );
}

