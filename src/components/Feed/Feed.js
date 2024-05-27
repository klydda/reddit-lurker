import React, { useEffect } from 'react';
import Card from '../Card/Card';
import styles from './Feed.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { setCards, addCards, getCards, getAfter, getCount} from '../Card/cardSlice';
import { getAccessToken } from '../Api/apiSlice';

import { getFirstBestPosts, getNextBestPosts } from '../Api/redditBestEndpoint';
import { getPosts } from '../Api/redditGetSubredditPosts';

function Feed() {
    const dispatch = useDispatch();
    const { subreddit } = useParams();
    const currentSubreddit = subreddit ? subreddit : 'best';
    const allCards = useSelector(getCards(currentSubreddit));
    const accessToken = useSelector(getAccessToken);
    const after = useSelector(getAfter(currentSubreddit))
    const count = useSelector(getCount(currentSubreddit));

    
    console.log('Subreddit param: ' + subreddit);

    //useEffect hook that calls getFirstBestPosts to fetch posts from reddit if none are stored in state
    useEffect(() => {
        console.log('effect triggered');
        if(currentSubreddit === 'best') {
            if(allCards.length === 0){
                getFirstBestPosts(accessToken, dispatch, setCards, currentSubreddit);
            }
        } else {
            console.log('Current subreddit is not best, triggered');
            if(allCards.length === 0){
                console.log('Card length is 0, triggered');
                const first = true;
                getPosts(accessToken, dispatch, after, count, setCards, addCards, currentSubreddit, first);
            }
        }

    }, [currentSubreddit]);

    function handleGetNextPosts(){
        if(currentSubreddit === 'best'){
            getNextBestPosts(accessToken, dispatch, after, count, addCards, currentSubreddit);
        } else {
            const first = false;
            getPosts(accessToken, dispatch, after, count, setCards, addCards, currentSubreddit, first);
        }
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
    }

    //Creates aray of Cards populated with format [[key, {value}], [key, {value}]]
    return (
        <div className={styles.container}>
            {filteredCards.map((card, index) => {
                return (
                    <Card key={index} card={card} handleNext={handleGetNextPosts} />
                );
            })}

            <button onClick={handleGetNextPosts} className={styles.loadMore}>+</button>
        </div>
    );
}

export default Feed;