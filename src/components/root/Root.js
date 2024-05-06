import React from 'react';
import styles from './Root.module.css';
import pepe from './peeping-pepe.png';

function Root() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                    <img src={pepe} className={styles.logoPepe}/>
                    <span>Lurker</span>
            </div>
            
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

        </header>

    );
}

export default Root;