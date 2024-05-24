import { createSlice } from '@reduxjs/toolkit';

const apiSlice = createSlice({
    name: 'api',
    initialState: {
        redirected: false
    },
    reducers: {
        setRedirected: (state, action) => {
            state.redirected = action.payload;
        }
    }
});

export const { setRedirected } = apiSlice.actions;
export const getRedirected = (state) => state.api.redirected;

export default apiSlice.reducer;