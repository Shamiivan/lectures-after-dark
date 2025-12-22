import React from 'react';
import styles from './CTA.module.css';

const CTA: React.FC = () => {
    return (
        <section id="contact" className={styles.section}>
            <div className="container">
                <div className={styles.content}>
                    <h2 className={styles.title}>Join the Inner Circle</h2>
                    <p className={styles.text}>
                        Get notified about secret locations and upcoming speakers before anyone else.
                    </p>
                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className={styles.input}
                        />
                        <button type="submit" className={styles.button}>
                            Notify Me
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CTA;
