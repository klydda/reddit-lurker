import React, { useState, useRef, useEffect }from 'react';
import styles from '../Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';

function ImageCard({ card }){
    const timestamp = card.created;
    const date = new Date(timestamp * 1000);
    const formatedTimestamp = `${date.getHours()}:${date.getMinutes()} - ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    const imageWidth = card.preview.images[0].source.width;
    const imageHeight = card.preview.images[0].source.height;
    const ratio = imageHeight / imageWidth;
    const initialWidth = 800 / ratio;
    let broaderThanHigh;

    const divRef = useRef(null);  // Create a ref object for the div
    const imageRef = useRef(null);  // Create a ref object for the image
    const [imgWidth, setImgWidth] = useState(0);

    if (imageWidth > imageHeight){
        broaderThanHigh = true;
    } 

    function getWidth(){
        if ((divRef.current.offsetWidth * ratio) + 1 < 800){
            const width = divRef.current.offsetWidth;
            return width;
        } else {
            const width = 800 / ratio;
            return width;
        }
    }

        
    useEffect(() => {
        if (divRef.current) {
            if(broaderThanHigh){
                setImgWidth(divRef.current.offsetWidth);
            } else {
                setImgWidth(initialWidth);
            }
        }

        // Optional: Handle window resize
        const handleResize = () => {
            if (divRef.current) {

                if(!broaderThanHigh){       //Handle tall images
                    const width = getWidth();
                    setImgWidth(width);
                } else {            //Handle wide images
                    const width = divRef.current.offsetWidth;
                    setImgWidth(width);
                }
                
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);  // Empty dependency array ensures this effect runs only once after initial render

    // useEffect(() => {
    //     if (!broaderThanHigh) {
    //         if((divWidth * ratio) + 1 < 800){
    //             console.log('TRIGGER!!!!');
    //             imageRef.current.style.width = `${divWidth}px`;  // Set the image width based on the div width
    //         }
    //     }
    // }, [divWidth]);  // Update the image width whenever divWidth changes


    return (
    <div className={styles.container} >
        <div className={styles.karma}>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>{card.score}</span>
            <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <h2 className={styles.title}>{card.title}</h2>

        <div ref={divRef} className={broaderThanHigh ? styles.imageContainerBroad : styles.imageContainerHigh}>
            <img ref={imageRef} src={card.url} className={broaderThanHigh ? styles.dimensionBroad: styles.dimensionHigh} style={{width: imgWidth}}/>
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

export default ImageCard;