import { createSlice } from '@reduxjs/toolkit';

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        posts: [],
        after: '',
        count: ''
    },
    reducers: {
        setCards: (state, action) => {
            state.posts = action.payload;
        },
        setAfter: (state, action) => {
            state.after = action.payload;
        },
        setCount: (state, action) => {
            state.count += action.payload;
        }
    }
})

export const { setCards, setAfter, setCount } = cardsSlice.actions;
export const getAllCards = (state) => state.cards.posts;
export default cardsSlice.reducer;