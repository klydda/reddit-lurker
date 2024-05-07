import React from 'react';
import styles from './Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import horizontalSunset from './horizontal-sunset.jpg';

const data = {
    type: 'text',
    title: "This is a title",
    karma: 354,
    content: "Here's a bunch of text. Wow what content! I'm getting closer to enlightenment just reading this. The author sure is brilliant. He's running out of idea but needs more text - that's a good time to go meta and talk about the process instead. Now this looks like real text, but it's not!",
    poster: 'SwaggerBoi420',
    comments: 54,
    time: "2024-05-06 22:30"
}

const image = {
    type: 'image',
    title: 'This is a title',
    karma: 128,
    image: horizontalSunset,
    poster: 'ZenZambooni',
    comments: 12,
    time: '2024-05-02 20:14'
}

function Card() {
    const random = Math.random();
    if (random > 0.5){
        console.log(`Post card, random int: ${random}`);
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
    } else {
        console.log(`Image card, random int: ${random}`);
        return (
            <div className={styles.container}>
            <div className={styles.karma}>
                <FontAwesomeIcon icon={faChevronUp} />
                <span>{image.karma}</span>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <h2 className={styles.title}>{image.title}</h2>

            <div className={styles.imageContainer}>
                <img src={image.image} className={styles.image}/>
            </div>

            <div className={styles.comments}>
                <FontAwesomeIcon icon={faComment} />    
                <span className={styles.smallSpace}>{image.comments}</span>
            </div>

            <div className={styles.poster}>
                <span>{image.poster} - </span>
                <span>{image.time}</span>
            </div>
            
        </div>
        );
    }
}

export default Card;