import React from 'react';
import styles from './Root.module.css';
import pepe from './peeping-pepe.png';
import { Outlet, Link } from 'react-router-dom';

function Root() {
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

                <div className={styles.subreddit}>
                    <Link to="r/image">Only Images</Link>
                </div>

            </header>

            <Outlet />
        </>


    );
}

export default Root;