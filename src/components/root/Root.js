import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Root.module.css';
import pepe from './peeping-pepe.png';
import { Outlet, Link, useNavigate } from 'react-router-dom';

import Search from '../Search/Search';

function Root() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleGoToSubreddit(event){
        const name = event.target.innerText;
        const navigateString = `/r/${name}`;
        navigate(navigateString);
    }

    function handleFilterClick(filter){
        const url = new URL(window.location.href);
        url.searchParams.set('filter', filter);
    
        navigate(url.pathname + url.search);
    }

    function goToSub(name){
        console.log('CLICKED ON SUB');
        navigate(`/r/${name}`);
    }

    return (
        <>
            <header className={styles.header}>
                <Link to='/' className={styles.logo}>
                        <img src={pepe} className={styles.logoPepe}/>
                        <span className={styles.outerSpan}>Reddit</span> <span className={styles.innerSpan}>Lurker</span>
                </Link>
                
                <Search goToSub={goToSub} />

                <div className={styles.filter}>
                    <button onClick={() => handleFilterClick('image')} className={styles.filterButton}>Images</button>
                    <button onClick={() => handleFilterClick('video')} className={styles.filterButton}>Videos</button>
                    <button onClick={() => handleFilterClick('text')} className={styles.filterButton}>Text</button> 
                </div>

            </header>

            <Outlet />
        </>


    );
}

export default Root;