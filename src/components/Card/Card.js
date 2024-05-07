import React from 'react';
import styles from './Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import horizontalSunset from './horizontal-sunset.jpg';
import TextCard from './TextCard';
import ImageCard from './ImageCard';

const data = {
    type: 'text',
    title: "This is a title",
    karma: 354,
    content: "Here's a bunch of text. Wow what content! I'm getting closer to enlightenment just reading this. The author sure is brilliant. He's running out of idea but needs more text - that's a good time to go meta and talk about the process instead. Now this looks like real text, but it's not!",
    poster: 'SwaggerBoi420',
    comments: 54,
    time: "2024-05-06 22:30"
}

const image = {
    type: 'image',
    title: 'This is a title',
    karma: 128,
    image: horizontalSunset,
    poster: 'ZenZambooni',
    comments: 12,
    time: '2024-05-02 20:14'
}



function Card({ value }) {
    console.log('Card ' + value);
    switch (value.type) {
        case 'text':
            return(
                <TextCard value={value} />
            );
        case 'image':
            return (
                <ImageCard value={value} />
            );
    }
}

export default Card;