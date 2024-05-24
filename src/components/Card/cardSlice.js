import { createSlice } from '@reduxjs/toolkit';
import horizontalSunset from './horizontal-sunset.jpg';

const cardsSlice = createSlice({
    name: 'cards',
    initialState: [],
    reducers: {
        setCards: (state, action) => {
            return action.payload;
        }
    }
})

export const { setCards } = cardsSlice.actions;
export const getAllCards = (state) => state.cards;
export default cardsSlice.reducer;