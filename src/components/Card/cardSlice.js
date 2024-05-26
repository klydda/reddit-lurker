import { createSlice } from '@reduxjs/toolkit';

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        posts: [],
        after: '',
        count: 0
    },
    reducers: {
        setCards: (state, action) => {
            state.posts = action.payload;
        },
        addCards: (state, action) => {
            state.posts.push(...action.payload);
        },
        setAfter: (state, action) => {
            state.after = action.payload;
        },
        setCount: (state, action) => {
            state.count += action.payload;
        }
    }
})

export const { setCards, addCards, setAfter, setCount } = cardsSlice.actions;
export const getAllCards = (state) => state.cards.posts;
export const getAfter = (state) => state.cards.after;
export const getCount = (state) => state.cards.count;
export default cardsSlice.reducer;