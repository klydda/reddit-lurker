import React from 'react';
import Card from '../Card/Card';
import styles from './Feed.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllCards } from '../Card/cardSlice';


function Feed() {
    const allCards = useSelector(getAllCards);

    // Get's the current subreddit from the URL and filteres the Cards to only show those whose type matches the string of the subreddit
    
    const { subreddit } = useParams();
    const filteredCards = Object.values(allCards).filter((card) => card.type === subreddit);


    console.log(filteredCards);

    //Creates aray of Cards populated with format [[key, {value}], [key, {value}]]
    return (
        <div className={styles.container}>
            {Object.entries(filteredCards).map(([key, value]) => {
                return (
                    <Card key={key} value={value} />
                );
            })}
        </div>
    );
}

export default Feed;