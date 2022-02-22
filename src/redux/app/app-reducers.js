import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';
import actions from './app-actions';

const items = createReducer([], {
    [actions.addContact]: (state, action) => {
        console.log(state);
        return [...state, {name: action.payload.newName, number: action.payload.newNumber, key: nanoid()}]
    },
    
    [actions.deleteContact]: (state, action) => [...state.filter(contact => contact.name !== action.payload)],
})

const filter= createReducer('', {
    [actions.handleChange]: (state, action) => {
        return action.payload;
    },
});

export default combineReducers({
    items,
    filter,
}
)