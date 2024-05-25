import React from 'react';
import styles from './Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import pepeingPepe from '../root/peeping-pepe.png';

function LinkCard({ card }){
    const timestamp = card.created;
    const date = new Date(timestamp * 1000);
    const formatedTimestamp = `${date.getHours()}:${date.getMinutes()} - ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

    let defaultThumbnail = false;

    if (card.thumbnail === 'default'){
        defaultThumbnail = true;
    }

    return (
        <div className={styles.container}>
            <div className={styles.karma}>
                <FontAwesomeIcon icon={faChevronUp} />
                <span>{card.score}</span>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <h2 className={styles.title}>{card.title}</h2>

            <div className={styles.content}>
                <a class={styles.linkPreview} href={card.url}>
                    {defaultThumbnail ? <img src={pepeingPepe} className={styles.linkThumbnail} /> : <img src={card.thumbnail} className={styles.linkThumbnail} />}
                    
                    <div class={styles.linkTextDiv}>
                        <p class={styles.linkTitle}>{card.domain}</p>
                        <p>{card.url}</p>
                    </div>

                </a>

            </div>

            <div className={styles.comments}>
                <FontAwesomeIcon icon={faComment} />    
                <span className={styles.smallSpace}>{card.num_comments}</span>
            </div>

            <div className={styles.poster}>
                <span>Posted by {card.author}</span>
                <span>at {formatedTimestamp}</span>
            </div>
            
        </div>
    );
}

export default LinkCard;