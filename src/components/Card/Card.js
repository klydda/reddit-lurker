import React from 'react';
import TextCard from './TextCard';
import ImageCard from './ImageCard';


function Card({ card }) {
    // Creates and returns the right Card based on the value.type property
    switch (card.type) {
        case 'text':
            return(
                <TextCard card={card} />
            );
        case 'image':
            return (
                <ImageCard card={card} />
            );
    }
}

export default Card;