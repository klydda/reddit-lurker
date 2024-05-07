import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './components/Card/cardSlice.js';

export default configureStore({
    reducer: {
        cards: cardsReducer
    }
});
