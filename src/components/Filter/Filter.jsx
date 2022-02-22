import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import actions from '../../redux/app/app-actions';

function Filter ({onChange, filter}) {
    
    return (
        <label>
            <h3 id="title-filter">Find contact by name</h3>
            <input
                type="text"
                name="filter"
                id="filter"
                placeholder="Sherlock Holmes"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                autoComplete="off"
                onChange={(event) => onChange(event.target.value)}
                value={filter}
            ></input>
        </label>
    );
}

Filter.propTypes = {
    onChange: PropTypes.func,
    filter: PropTypes.string
};

const mapStateToProps = state => {
    return {
        filter: state.contacts.filter,
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
        onChange: (e) => dispatch(actions.handleChange(e)),
    };
};
  

export default connect(mapStateToProps, mapDispatchToProps)(Filter);