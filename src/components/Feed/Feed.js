import React from 'react';
import Card from '../Card/Card';
import styles from './Feed.module.css';
import { useSelector } from 'react-redux';
import { getAllCards } from '../Card/cardSlice';


function Feed() {
    const allCards = useSelector(getAllCards);

    //Creates aray of Cards populated with format [[key, {value}], [key, {value}]]
    return (
        <div className={styles.container}>
            {Object.entries(allCards).map(([key, value]) => {
                return (
                    <Card key={key} value={value} />
                );
            })}
        </div>
    );
}

export default Feed;