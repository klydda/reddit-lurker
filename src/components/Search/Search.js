import react, { useState } from 'react';
import styles from './Search.module.css';
import { useSelector } from 'react-redux';
import { getAccessToken } from '../Api/apiSlice';
import { getSubredditNames } from '../Api/redditSearchEndpoint';

function Search({goToSub}){
    const [search, setSearch] = useState('');
    const [subreddits, setSubreddits] = useState([]);
    const accessToken = useSelector(getAccessToken);

    function handleSearch(event) {
        const query = event.target.value;
        setSearch(query);

        if (query.trim() !== '') {
            getSubredditNames(accessToken, query)
                .then(data => {
                    console.log(data); // Log the fetched data
                    let extractedData = [];
                    data.subreddits.forEach((el) => {
                        extractedData.push(el);
                    });
                    setSubreddits(extractedData); // Set the fetched data to the state
                })
                .catch(error => {
                    console.error('Error fetching subreddits:', error);
                });
        } else {
            setSubreddits([]); // Clear subreddits if search query is empty
        }
    }

    console.log('subreddits: ' + subreddits);

    function handleSubmit(event){
        event.preventDefault();
        console.log('SUBMIT: ' + search);
        goToSub(search);
    }
    return(
    <div className={styles.search}>
        <form 
            className={styles.form}
            id='searchForm'
            onSubmit={handleSubmit}>
            <input 
                className={styles.input}
                type='text' 
                autoComplete='off'
                placeholder='Search'
                value={search}
                onChange={handleSearch}
                list='subreddits'
            />

            <button 
                classname={styles.formSubmit}
                type='submit'
                form='searchForm'
                value='Submit'>Go
            </button>

            <datalist id='subreddits'>
                {subreddits.length !== 0 ? 
                    subreddits.map((sub) => {
                        return <option value={sub.name}></option>
                     }) 
                     : 
                     null
                }
            </datalist>

        </form>
    </div>
    )
}

export default Search;