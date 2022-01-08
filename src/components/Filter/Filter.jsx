import React, {Component} from "react";
import PropTypes from 'prop-types';

export default class Filter extends Component {
    render () {
        const {onChange, filter} = this.props;
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
                    onChange={onChange}
                    value={filter}
                ></input>
            </label>
        );
    }
}

Filter.propTypes = {
    onChange: PropTypes.func,
    filter: PropTypes.string
};