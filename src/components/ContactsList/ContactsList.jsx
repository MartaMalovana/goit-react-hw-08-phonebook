import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {LineWave} from 'react-loader-spinner';
import PropTypes from 'prop-types';
import {Contact, Container, ContactContainer, Button} from './ContactsList.styled';
import {deleteContactById} from '../../redux/app/app-operations';
import {getLoader} from '../../redux/contactsList/contactsList-selectors';

export default function ContactsList ({data}) {
    const loader = useSelector(getLoader);
    const dispatch = useDispatch();

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
            {data && data.map(contact => {
                return (
                    <ContactContainer key={contact.id}>
                    <Contact >
                        <div>{contact.name}: {contact.phone}</div>
                        <Button 
                            type="button" 
                            name={contact.name} 
                            onClick={(event) => dispatch(deleteContactById(contact.id))}
                        >
                        Delete
                        </Button>
                    </Contact>
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
