import React from 'react';
import styles from "./Footer.module.css"



const Footer = () => {
    return (
        <footer className={styles.footer__container}>
            <p>Hrenean Alin 2020</p>
            <p>API from <a href="https://covid19.mathdro.id" target="_blank" >https://covid19.mathdro.id</a></p>

        </footer>
    );
};

export default Footer;
