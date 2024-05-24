import React, { useEffect } from 'react';
import Card from '../Card/Card';
import styles from './Feed.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { setCards, getAllCards } from '../Card/cardSlice';
import { getAccessToken } from '../Api/apiSlice';

import { getBestPosts } from '../Api/redditBestEndpoint';


function Feed() {
    const dispatch = useDispatch();
    const allCards = useSelector(getAllCards);
    const accessToken = useSelector(getAccessToken);

    useEffect(() => {
        if(allCards.length === 0){
            getBestPosts(accessToken, dispatch, setCards);
        }
    }, [allCards]);



    // Get's the current filter from the URL and filteres the Cards to only show those whose type matches the string of the filter. Defaults to all cards if filter is empty.
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
            {filteredCards.map((card, index) => {
                return (
                    <Card key={index} card={card} />
                );
            })}
        </div>
    );
}

export default Feed;