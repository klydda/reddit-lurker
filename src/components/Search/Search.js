import react, { useState } from 'react';
import styles from './Search.module.css';
import { useSelector } from 'react-redux';
import { getAccessToken } from '../Api/apiSlice';
import { getSubredditNames } from '../Api/redditSearchEndpoint';

function Search(){
    const [search, setSearch] = useState();
    const accessToken = useSelector(getAccessToken);

    function handleSearch(event){
        setSearch(event.target.value);
        getSubredditNames(accessToken, search);
    }

    function handleSubmit(event){
        event.preventDefault();
        //Call getsubreddit here
    }
    return(
    <div className={styles.search}>
        <form 
            className={styles.form}
            onSubmit={handleSubmit}>
            <input 
                className={styles.input}
                type='text' 
                autoComplete='off'
                placeholder='Search'
                value={search}
                onChange={handleSearch}
            />
        </form>
    </div>
    )
}

export default Search;