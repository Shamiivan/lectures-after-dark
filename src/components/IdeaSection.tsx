import React from 'react';
import styles from './IdeaSection.module.css';
import { Check } from 'lucide-react';

const IdeaSection: React.FC = () => {
    return (
        <section id="about" className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2>What to Expect</h2>
                        <p>
                            We're addressing a gap in adult education and social life. No stuffy lecture halls, no boring powerpoints.
                        </p>
                        <p>
                            Just world-class speakers, your favorite cocktails, and conversations that actually matter. It's where the university library meets the speakeasy.
                        </p>

                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <span className={styles.check}><Check size={14} /></span>
                                45-minute deep dive talks
                            </li>
                            <li className={styles.listItem}>
                                <span className={styles.check}><Check size={14} /></span>
                                Q&A with industry leaders
                            </li>
                            <li className={styles.listItem}>
                                <span className={styles.check}><Check size={14} /></span>
                                Curated cocktail menus
                            </li>
                        </ul>
                    </div>

                    <div className={styles.imageWrapper}>
                        <img
                            src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                            alt="Cocktails and Conversation"
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IdeaSection;
