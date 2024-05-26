import React, {useEffect, useState, useRef } from 'react';
import styles from '../Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';

function VideoCard({ card }){
    const timestamp = card.created;
    const date = new Date(timestamp * 1000);
    const formatedTimestamp = `${date.getHours()}:${date.getMinutes()} - ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

    const divRef = useRef(null);  // Create a ref object for the div
    const videoRef = useRef(null);  // Create a ref object for the video
    const [divWidth, setDivWidth] = useState(0);  // State to store the div width

    const videoHeight = card.media.reddit_video.height;
    const videoWidth = card.media.reddit_video.width;
    let broaderThanHigh;

    if (videoWidth > videoHeight) {
        broaderThanHigh = true;
    }

    
    useEffect(() => {
        if (divRef.current) {
            setDivWidth(divRef.current.offsetWidth);  // Set the width of the div in state
        }

        // Optional: Handle window resize
        const handleResize = () => {
            if (divRef.current) {
                setDivWidth(divRef.current.offsetWidth);  // Update the width on resize
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);  // Empty dependency array ensures this effect runs only once after initial render

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.style.width = `${divWidth}px`;  // Set the video width based on the div width
        }
    }, [divWidth]);  // Update the video width whenever divWidth changes

    
    return (
    <div className={styles.container}>
        <div className={styles.karma}>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>{card.score}</span>
            <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <h2 className={styles.title}>{card.title}</h2>

        <div ref={divRef} className={styles.imageContainer}>
            <video ref={videoRef} className={broaderThanHigh ? '' : styles.dimensionHigh} controls loop>
                <source src={card.secure_media.reddit_video.fallback_url}/>
            </video>
        </div>

        <div className={styles.comments}>
            <FontAwesomeIcon icon={faComment} />    
            <span className={styles.smallSpace}>{card.num_comments}</span>
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

export default VideoCard;