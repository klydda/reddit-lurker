import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './Root.module.css';
import pepe from './peeping-pepe.png';
import { Outlet, Link, useNavigate } from 'react-router-dom';

function Root() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleGoToSubreddit(event){
        const name = event.target.innerText;
        const navigateString = `/r/${name}`;
        navigate(navigateString);
    }

    return (
        <>
            <header className={styles.header}>
                <Link to='/' className={styles.logo}>
                        <img src={pepe} className={styles.logoPepe}/>
                        <span className={styles.outerSpan}>Reddit</span> <span className={styles.innerSpan}>Lurker</span>
                </Link>
                
                <div className={styles.search}>
                    <form className={styles.form}>
                        <input 
                            className={styles.input}
                            type='text' 
                            autoComplete='off'
                            placeholder='Search'
                        />
                    </form>
                </div>

                <div className={styles.filter}>
                    <button><Link to="/?filter=image">Images</Link></button>
                    <button><Link to="/?filter=video">Videos</Link></button>
                    <button><Link to="/?filter=text">Text</Link></button> 
                    <button onClick={handleGoToSubreddit}>Space</button>
                    <button onClick={handleGoToSubreddit}>Cats</button>
                </div>

            </header>

            <Outlet />
        </>


    );
}

export default Root;