import React from 'react';
import styles from './Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';

function ImageCard({value}){
    console.log('ImageCard ' + value);
    return (
        <div className={styles.container}>
        <div className={styles.karma}>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>{value.karma}</span>
            <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <h2 className={styles.title}>{value.title}</h2>

        <div className={styles.imageContainer}>
            <img src={value.image} className={styles.image}/>
        </div>

        <div className={styles.comments}>
            <FontAwesomeIcon icon={faComment} />    
            <span className={styles.smallSpace}>{value.comments}</span>
        </div>

        <div className={styles.poster}>
            <span>{value.poster} - </span>
            <span>{value.time}</span>
        </div>
        
    </div>
    );
}

export default ImageCard;