import React from 'react';
import Card from '../Card/Card';
import styles from './Feed.module.css';


function Feed() {
    return (
        <div className={styles.container}>
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default Feed;