import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Contact, Container, ContactContainer, Button} from './ContactsList.styled';

export default class ContactsList extends Component {
    
    clickOnDelete = event => {
        this.props.delete(event.target.name);
    };

    render () {
        return (
            <Container>
                {this.props.data
                .map(contact => {
                    return (
                        <ContactContainer key={contact.key}>
                        <Contact >{contact.name}: {contact.number}</Contact>
                        <Button type="button" name={contact.name} onClick={this.clickOnDelete}>Delete</Button>
                        </ContactContainer>
                    );
                })
                }
            </Container>
        );
    };
};

ContactsList.propTypes = {
    delete: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.shape)
};