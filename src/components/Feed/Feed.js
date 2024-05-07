import React from 'react';
import Card from '../Card/Card';
import styles from './Feed.module.css';
import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { getAllCards } from '../Card/cardSlice';

//TODO: Rewrite to use queryparameters to filter instead of subreddit style (those are needed for subreddits)

function Feed() {
    const allCards = useSelector(getAllCards);

    // Get's the current filter from the URL and filteres the Cards to only show those whose type matches the string of the subreddit. Defaults to all cards if subreddit is empty.
    const [ searchParams ] = useSearchParams();
    const filter = searchParams.get('filter');
    
    let filteredCards;

    if (filter){
        filteredCards = Object.values(allCards).filter((card) => card.type === filter);
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