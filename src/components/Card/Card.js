import React from 'react';
import styles from './Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';

const data = {
    type: 'text',
    title: "This is a title",
    karma: 354,
    content: "Here's a bunch of text. Wow what content! I'm getting closer to enlightenment just reading this. The author sure is brilliant. He's running out of idea but needs more text - that's a good time to go meta and talk about the process instead. Now this looks like real text, but it's not!",
    poster: 'SwaggerBoi420',
    comments: 54,
    time: "2024-05-06 22:30"
}

function Card() {
    return (
        <div className={styles.container}>
            <div className={styles.karma}>
                <FontAwesomeIcon icon={faChevronUp} />
                <span>{data.karma}</span>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <h2 className={styles.title}>{data.title}</h2>

            <div className={styles.content}>
                <p>{data.content}</p>
            </div>

            <div className={styles.comments}>
                <FontAwesomeIcon icon={faComment} />    
                <span className={styles.smallSpace}>{data.comments}</span>
            </div>

            <div className={styles.poster}>
                <span>{data.poster} - </span>
                <span>{data.time}</span>
            </div>
            
        </div>
    );
}

export default Card;