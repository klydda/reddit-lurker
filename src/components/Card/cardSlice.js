import { createSlice } from '@reduxjs/toolkit';
import horizontalSunset from './horizontal-sunset.jpg';

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        1: {
            type: 'text',
            title: "This is a title",
            karma: 354,
            content: "Here's a bunch of text. Wow what content! I'm getting closer to enlightenment just reading this. The author sure is brilliant. He's running out of idea but needs more text - that's a good time to go meta and talk about the process instead. Now this looks like real text, but it's not!",
            poster: 'SwaggerBoi420',
            comments: 54,
            time: "2024-05-06 22:30"
        },
        2: {
            type: 'image',
            title: 'This is a title',
            karma: 128,
            image: horizontalSunset,
            poster: 'ZenZambooni',
            comments: 12,
            time: '2024-05-02 20:14'
        }
    },
    reducers: {

    }
})

export const getAllCards = (state) => state.cards;
export default cardsSlice.reducer;