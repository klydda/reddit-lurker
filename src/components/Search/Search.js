import react, { useState } from 'react';
import styles from './Search.module.css';

function Search(){
    const [search, setSearch] = useState();

    function handleSearch(event){
        setSearch(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        //Call getsubreddit here
    }
    return(
    <div className={styles.search}>
        <form className={styles.form}>
            <input 
                className={styles.input}
                type='text' 
                autoComplete='off'
                placeholder='Search'
            />
        </form>
    </div>
    )
}

export default Search;