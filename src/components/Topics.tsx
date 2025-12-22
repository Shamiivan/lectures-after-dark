import React from 'react';
import styles from './Topics.module.css';
import { Brain, Landmark, Cpu } from 'lucide-react';

const Topics: React.FC = () => {
    return (
        <section id="topics" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Topics & Minds</h2>
                    <p className={styles.subtitle}>What we talk about when the lights go down.</p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.icon}>
                            <Brain size={48} strokeWidth={1} />
                        </div>
                        <h3 className={styles.cardTitle}>Psychology</h3>
                        <p className={styles.cardText}>
                            Understanding the human mind, behavior, and the hidden forces that drive us. From cognitive biases to social dynamics.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.icon}>
                            <Landmark size={48} strokeWidth={1} />
                        </div>
                        <h3 className={styles.cardTitle}>History & Power</h3>
                        <p className={styles.cardText}>
                            Lessons from the past applied to modern strategy and leadership. Analyzing the rise and fall of empires and ideologies.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.icon}>
                            <Cpu size={48} strokeWidth={1} />
                        </div>
                        <h3 className={styles.cardTitle}>Future Tech</h3>
                        <p className={styles.cardText}>
                            AI, biotech, and how our species will evolve in the next century. The intersection of technology and ethics.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Topics;
