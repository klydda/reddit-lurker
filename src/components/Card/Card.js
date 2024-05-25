import React from 'react';
import TextCard from './TextCard';
import ImageCard from './ImageCard';
import VideoCard from './Videocard';
import GalleryCard from './GalleryCard';
import LinkCard from './LinkCard';


function Card({ card }) {
    console.log(card);

    if(card.selftext && card.post_hint !== 'image' && card.is_galelry === false && card.is_video === false){
        console.log(card.title + ' | Textcard');
        return <TextCard card={card} />;
    }

    if(card.post_hint === 'image'){
        console.log(card.title + ' | Imagecard');
        return <ImageCard card={card} />;
    }

    if (card.post_hint === 'link'){
        console.log(card.title + ' | LinkCard');
        return <LinkCard card={card} />;
    }

    if(card.is_gallery === true){
        console.log(card.title + ' | GalleryCard');
        return <GalleryCard card={card} />;
    }

    if(card.is_video === true){
        console.log(card.title + ' | VideoCard');
        return <VideoCard card={card} />;
    }
}

export default Card;