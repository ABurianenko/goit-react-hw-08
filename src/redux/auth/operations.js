import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

axios.defaults.baseURL = 'https://connections-api.goit.global';

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkApi) => {
        try {
            const response = await axios.post('/users/signup', credentials);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message)
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkApi) => {
        try {
            const response = await axios.post('/users/login', credentials);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (e) {
            toast.error(e.response?.data?.message || "Account not found. Check your email/password or create a new account.");
            return thunkApi.rejectWithValue(e.message || "Login failed. Please, register your account");
        }
    }
);

export const logOut = createAsyncThunk('auth/logout',
    async (_, thunkApi) => {
        try {
            await axios.post('/users/logout');
            clearAuthHeader();
        } catch (e) {
            return thunkApi.rejectWithValue(e.message)
        }
    }
);

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkApi) => {
        const state = thunkApi.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkApi.rejectWithValue('Unable to fetch user');
        }

        try {
            setAuthHeader(persistedToken);
            const response = await axios.get('/users/current');
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message)
        }
    }
);