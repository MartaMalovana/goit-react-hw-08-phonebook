import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import actions from '../../redux/app/app-actions';
import {getFilter} from '../../redux/filter/filter-selectors';

export default function Filter () {
    
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

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
                onChange={(event) => dispatch(actions.handleChange(event.target.value))}
                value={filter}
            ></input>
        </label>
    );
}

Filter.propTypes = {
    onChange: PropTypes.func,
    filter: PropTypes.string
};
