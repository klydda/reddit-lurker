import React from 'react';
import Card from '../Card/Card';
import styles from './Feed.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllCards } from '../Card/cardSlice';

//TODO: Rewrite to use queryparameters to filter instead of subreddit style (those are needed for subreddits)

function Feed() {
    const allCards = useSelector(getAllCards);

    // Get's the current subreddit from the URL and filteres the Cards to only show those whose type matches the string of the subreddit. Defaults to all cards if subreddit is empty.
    const { subreddit } = useParams();
    let filteredCards;

    if (subreddit){
        filteredCards = Object.values(allCards).filter((card) => card.type === subreddit);
    } else {
        filteredCards = allCards;
    }

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