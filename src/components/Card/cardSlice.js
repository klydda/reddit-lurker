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
            const { name, posts, after, count } = action.payload;
            state[name] = {
                posts,
                after,
                count
            };

        },
        addCards: (state, action) => {
            const { name, posts, after, count } = action.payload;
            state[name].posts.push(...posts);
            state[name].after = after;
            state[name].count += count;
        }
    }
})

export const { setCards, addCards } = cardsSlice.actions;
export const getCards = (currentSubreddit) => (state) => state.cards[currentSubreddit]?.posts || [];
export const getAfter = (currentSubreddit) => (state) => state.cards[currentSubreddit]?.after || '';
export const getCount = (currentSubreddit) => (state) => state.cards[currentSubreddit]?.count || 0;
export default cardsSlice.reducer;