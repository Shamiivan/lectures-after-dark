import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <h3>LECTURES AFTER DARK</h3>
                        <p>Intellectual nightlife for the modern mind.</p>
                    </div>

                    <div className={styles.col}>
                        <h4>Events</h4>
                        <ul>
                            <li><a href="#">Upcoming</a></li>
                            <li><a href="#">Past Events</a></li>
                            <li><a href="#">Locations</a></li>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h4>Get Involved</h4>
                        <ul>
                            <li><a href="#">Become a Speaker</a></li>
                            <li><a href="#">Host an Event</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h4>Connect</h4>
                        <ul>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.copyright}>
                    &copy; 2024 Lectures After Dark. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
