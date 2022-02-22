import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import contactsReducers from './app/app-reducers';

export const store = configureStore({
    reducer: {
        contacts: contactsReducers,
    },
    devTools: process.env.NODE_ENV === 'development',
});

