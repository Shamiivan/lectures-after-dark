import React from 'react';
import Navbar from '../components/Navbar';
import styles from './About.module.css';

const About: React.FC = () => {
    return (
        <div className={styles.pageWrapper}>
            <Navbar />
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>About Us</h1>
                    <p className={styles.subtitle}>Where curiosity meets conversation in the heart of the city.</p>
                </div>
            </header>

            <section className={styles.missionSection}>
                <div className="container">
                    <div className={styles.missionContent}>
                        <div className={styles.missionText}>
                            <h2>Our Mission</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
