import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import {Contact, Container, ContactContainer, Button} from './ContactsList.styled';
import actions from '../../redux/app/app-actions';

export default function ContactsList ({data}) {
    
    const dispatch = useDispatch();

    return (
        <Container>
            {data && data.map(contact => {
                return (
                    <ContactContainer key={contact.key}>
                    <Contact >{contact.name}: {contact.number}</Contact>
                    <Button type="button" name={contact.name} onClick={(event) => dispatch(actions.deleteContact(event.target.name))}>Delete</Button>
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
