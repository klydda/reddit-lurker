import { createSlice } from '@reduxjs/toolkit';

const feedSlice = createSlice({
    name: 'subreddit',
    initialState: '',
    reducers: {
        updateSelectedSubreddit: (state, action) => {
            const { name } = action.payload;
            state.subreddit = name;
        }
    }
});

export const getSubredditSelection = (state) => state.subreddit;
export const { updateSelectedSubreddit } = feedSlice.actions;
export default feedSlice.reducer;