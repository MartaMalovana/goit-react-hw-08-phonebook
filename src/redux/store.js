import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducers from './app/app-reducers';

const persistConfig = {
    key: 'contacts',
    storage,
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
    contacts: contactsReducers,
}));

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

