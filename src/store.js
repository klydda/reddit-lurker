import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './components/Card/cardSlice.js';
import feedsReducer from './components/Feed/feedSlice.js';
import apiReducer from './components/Api/apiSlice.js';

export default configureStore({
    reducer: {
        cards: cardsReducer,
        subreddit: feedsReducer,
        api: apiReducer
    }
});
