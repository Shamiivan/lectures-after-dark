import React from 'react';
import styles from './Speakers.module.css';
import { Mic } from 'lucide-react';

const Speakers: React.FC = () => {
    return (
        <div className={styles.pageWrapper}>
            {/* Header Section */}
            {/* Header Section */}
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>Our Speakers</h1>
                    <p className={styles.subtitle}>
                        The minds behind the conversations.
                    </p>
                </div>
            </header>

            {/* Info Section */}
            <section className={styles.infoSection}>
                <div className="container">
                    <div className={styles.infoContent}>
                        <div className={styles.infoText}>
                            <h2>Information for Speakers</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className={styles.infoImage}>
                            {/* Placeholder for an image if needed, or just text for now as per "add lorem ipsum" */}
                            <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                                [Placeholder for an engaging image of a speaker]
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Past/Future Speaker List */}
            <section className={styles.speakersSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Past & Future Speakers</h2>
                    <div className={styles.speakersGrid}>
                        {/* Dummy Speakers */}
                        {[1, 2, 3].map((i) => (
                            <div key={i} className={styles.speakerCard}>
                                <h3 className={styles.speakerName}>Speaker Name {i}</h3>
                                <span className={styles.speakerTopic}>Topic of Discussion</span>
                                <p className={styles.speakerBio}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTAs */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <div className={styles.ctaGrid} style={{ gridTemplateColumns: '1fr', maxWidth: '600px', margin: '0 auto' }}>
                        <div className={styles.ctaCard}>
                            <Mic size={48} color="var(--amber)" />
                            <h3>Become a Speaker</h3>
                            <p>
                                Share your knowledge and passion with our community.
                            </p>
                            <button className="btn btn-primary">Apply Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Speakers;
