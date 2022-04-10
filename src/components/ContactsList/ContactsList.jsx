import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {LineWave} from 'react-loader-spinner';
import PropTypes from 'prop-types';
import {Contact, Container, ContactContainer, Button} from './ContactsList.styled';
import {deleteContactById} from '../../redux/app/app-operations';
import {getLoader, getContacts, getFilter} from '../../redux/contactsList/contactsList-selectors';
import { fetchContacts, openModal } from "../../redux/app/app-operations";
import { getUserContacts, deleteContact, changeContact } from "../../redux/authNav/authNav-operations";
import ContactModal from "../ContactModal/ContactModal";

export default function ContactsList () {

    const loader = useSelector(getLoader);
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const contactList = filter 
        ? contacts.filter(el => el.name.toLowerCase().includes(filter.toLowerCase())) 
        : contacts;

    useEffect(() => {
        dispatch(getUserContacts());
    }, [dispatch]);



    return (
        <Container>
            {loader && 
                <LineWave
                    color="black"
                    height={110}
                    width={110}
                    ariaLabel="three-circles-rotating"
                />
            }
            {contacts && contactList.map(contact => {
                return (
                    <ContactContainer key={contact.id}>
                    <Contact >
                        <div>{contact.name}: {contact.number}</div>
                        <Button 
                            type="button" 
                            name={contact.name} 
                            onClick={(event) => dispatch(deleteContact(contact.id))}
                        >
                        Delete
                        </Button>
                        
                        <Button 
                            type="button" 
                            name={contact.name} 
                            onClick={(event) => dispatch(openModal(contact))}
                        >
                        Change
                        </Button>
                    </Contact>
                    </ContactContainer>
                );
            })
            }
            <ContactModal />
        </Container>
    );
};

ContactsList.propTypes = {
    deleteContact: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.shape)
};
