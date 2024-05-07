import React from 'react';
import TextCard from './TextCard';
import ImageCard from './ImageCard';


function Card({ value }) {
    console.log('Card ' + value);

    // Creates and returns the right Card based on the value.type property
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