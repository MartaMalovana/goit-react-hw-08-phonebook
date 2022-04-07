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
import userReducers from './authNav/authNav-reducers';

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
}

// const persistedReducer = combineReducers();

export const store = configureStore({
    reducer: {
      contacts: contactsReducers,
      user: persistReducer(persistConfig, userReducers),
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
