import React from 'react';
import TextCard from './cardTypes/TextCard';
import ImageCard from './cardTypes/ImageCard';
import VideoCard from './cardTypes/Videocard';
import GalleryCard from './cardTypes/GalleryCard';
import LinkCard from './cardTypes/LinkCard';


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