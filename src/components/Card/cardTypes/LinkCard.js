import React from 'react';
import styles from '../Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import pepeingPepe from '../../root/peeping-pepe.png';

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

            <a href={'https://reddit.com' + card.permalink} target='_blank'><h2 className={styles.title}>{card.title}</h2></a>

            <div className={styles.content}>
                <a className={styles.linkPreview} href={card.url}>
                    {defaultThumbnail ? <img src={pepeingPepe} className={styles.linkThumbnail} /> : <img src={card.thumbnail} className={styles.linkThumbnail} />}
                    
                    <div className={styles.linkTextDiv}>
                        <p className={styles.linkTitle}>{card.domain}</p>
                        <p>{card.url}</p>
                    </div>

                </a>

            </div>

            <div className={styles.comments}>
                <FontAwesomeIcon icon={faComment} />    
            <a href={'https://reddit.com' + card.permalink} target='_blank'><span className={styles.smallSpace}>{card.num_comments}</span></a>
            </div>

        <div className={styles.poster}>
            <span>{card.subreddit_name_prefixed}</span>
            <span>|</span>
            <span>u/{card.author}</span>
            <span>|</span>
            <span>{formatedTimestamp}</span>
        </div>
            
        </div>
    );
}

export default LinkCard;