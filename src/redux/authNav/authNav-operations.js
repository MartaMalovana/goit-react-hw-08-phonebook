import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; 

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common['Authorization'] = token;
    },
    unset() {
        axios.defaults.headers.common['Authorization'] = '';
    },
};

export const register = createAsyncThunk('auth/register', async newContact => {
    try {
        const result = await axios.post('/users/signup', newContact);
    token.set(result.data.token);
    alert("Реєстрація пройшла успішно )");
    return result.data;
    } catch (error) {
        alert(error.response.data.message);
    }
});

export const login = createAsyncThunk('auth/login', async loginUser => {
    const result = await axios.post('/users/login', loginUser);
    token.set(result.data.token);
    return result.data;
});

export const logout = createAsyncThunk('auth/logout', async () => {
    await axios.post('/users/logout');
    token.unset();
})

export const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.user.token;
    
    if(persistedToken === null) {
        return;
    }

    token.set(persistedToken);
    const {data} = await axios.get('users/current');
    return data;
})