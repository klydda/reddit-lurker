import { createSlice } from '@reduxjs/toolkit';

const apiSlice = createSlice({
    name: 'api',
    initialState: {
        redirected: false,
        code: '',
        accessToken: ''
    },
    reducers: {
        setRedirected: (state, action) => {
            state.redirected = action.payload;
        },
        setCode: (state, action) => {
            state.code = action.payload;
        },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        }
    }
});

export const { setRedirected, setCode, setAccessToken } = apiSlice.actions;
export const getRedirected = (state) => state.api.redirected;
export const getCode = (state) => state.api.code;
export const getAccessToken = (state) => state.api.accessToken;

export default apiSlice.reducer;