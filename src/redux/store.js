import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from 'redux-persist';
import contactsReducers from './app/app-reducers';

const persistedReducer = combineReducers({
    contacts: contactsReducers,
});

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

// export const persistor = persistStore(store);
