import React from "react";
import PropTypes from 'prop-types';
import {Contact, Container, ContactContainer, Button} from './ContactsList.styled';

export default function ContactsList ({deleteContact, data}) {
    
    const clickOnDelete = event => {
        deleteContact(event.target.name);
    };

    return (
        <Container>
            {data && data.map(contact => {
                return (
                    <ContactContainer key={contact.key}>
                    <Contact >{contact.name}: {contact.number}</Contact>
                    <Button type="button" name={contact.name} onClick={clickOnDelete}>Delete</Button>
                    </ContactContainer>
                );
            })
            }
        </Container>
    );
};

ContactsList.propTypes = {
    deleteContact: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.shape)
};