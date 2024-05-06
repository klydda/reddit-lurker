import React from 'react';
import styles from './Card.module.css';

function Card() {
    return (
        <div className={styles.container}>
            <h2>This is a title</h2>
            <p>Here's a bunch of text. Wow what content! I'm getting closer to enlightenment just reading this. The author sure is brilliant.</p>
        </div>
    );
}

export default Card;