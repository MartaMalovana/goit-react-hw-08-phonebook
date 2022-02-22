import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {Contact, Container, ContactContainer, Button} from './ContactsList.styled';
import actions from '../../redux/app/app-actions';

function ContactsList ({deleteContact, data}) {
    
    // const clickOnDelete = event => {
    //     deleteContact(event.target.name);
    // };

    return (
        <Container>
            {data && data.map(contact => {
                return (
                    <ContactContainer key={contact.key}>
                    <Contact >{contact.name}: {contact.number}</Contact>
                    <Button type="button" name={contact.name} onClick={(event) => deleteContact(event.target.name)}>Delete</Button>
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

  
  const mapDispatchToProps = dispatch => ({
        deleteContact: (name) => dispatch(actions.deleteContact(name)),
  });
  

export default connect(null, mapDispatchToProps)(ContactsList);