import React, { useEffect } from 'react';
import Card from '../Card/Card';
import styles from './Feed.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { setCards, addCards, setAfter, setCount, getAllCards, getAfter, getCount } from '../Card/cardSlice';
import { getAccessToken } from '../Api/apiSlice';

import { getFirstBestPosts, getNextBestPosts } from '../Api/redditBestEndpoint';

function Feed() {
    const dispatch = useDispatch();
    const allCards = useSelector(getAllCards);
    const accessToken = useSelector(getAccessToken);
    const count = useSelector(getCount);
    const after = useSelector(getAfter);

    //useEffect hook that calls getFirstBestPosts to fetch posts from reddit if none are stored in state
    useEffect(() => {
        console.log('effect triggered');
        if(allCards.length === 0){
            getFirstBestPosts(accessToken, dispatch, setCards, setAfter, setCount);
        }
    }, []);

    function handleGetNextPosts(){
        getNextBestPosts(accessToken, dispatch, setAfter, setCount, after, count, addCards);
    }

    // Get's the current filter from the URL and filteres the Cards to only show those whose type matches the string of the filter. Defaults to all cards if filter is empty.
    const [ searchParams ] = useSearchParams();
    const filter = searchParams.get('filter');
    
    let filteredCards;

    if (filter){
        if(filter === 'text'){
            filteredCards = Object.values(allCards).filter((card) => card.post_hint !== 'image' && card.is_gallery !== true && card.is_video !== true && card.post_hint !== 'link');
        } else if (filter === 'image'){
            filteredCards = Object.values(allCards).filter((card) => card.post_hint === 'image');
        } else if (filter === 'video'){
            filteredCards = Object.values(allCards).filter((card) => card.is_video === true);
        }
    } else {
        filteredCards = allCards;
        console.log('allCards: ' + allCards);
        console.log('filteredCards' + filteredCards);
    }

    //Creates aray of Cards populated with format [[key, {value}], [key, {value}]]
    return (
        <div className={styles.container}>
            {filteredCards.map((card, index) => {
                return (
                    <Card key={index} card={card} handleNext={handleGetNextPosts} />
                );
            })}

            <button onClick={handleGetNextPosts}>Load more</button>
        </div>
    );
}

export default Feed;