import React from 'react';
import styles from '../Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';

function GalleryCard ({ card }){
    const timestamp = card.created;
    const date = new Date(timestamp * 1000);
    const formatedTimestamp = `${date.getHours()}:${date.getMinutes()} - ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

    
    return (
    <div className={styles.container}>
        <div className={styles.karma}>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>{card.score}</span>
            <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <h2 className={styles.title}>{card.title}</h2>

        <div className={styles.imageContainer}>
            <a href={card.url} target='_blank'><img src={card.thumbnail} className={styles.thumbnail}/></a>
        </div>

        <div className={styles.comments}>
            <FontAwesomeIcon icon={faComment} />    
            <span className={styles.smallSpace}>{card.num_comments}</span>
        </div>

        <div className={styles.poster}>
            <span>{card.author}</span>
            <span>{formatedTimestamp}</span>
        </div>
        
    </div>
    );
}

export default GalleryCard;