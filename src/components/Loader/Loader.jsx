import React from 'react';
import styles from './Loader.module.css'

const Loader = () => {
    return (
        <div className={styles.loader__container}>
            <div className={styles.lds__facebook}>
                <div/>
                <div/>
                <div/>
            </div>
        </div>
    );
};

export default Loader;
