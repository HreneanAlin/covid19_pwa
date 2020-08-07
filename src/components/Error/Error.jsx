import React from 'react';
import styles from './Error.module.css'

const Error = () => {
    return (
        <div className={styles.error__container}>
            <h1>Page can't load!</h1>
        </div>
    );
};

export default Error;
