import React from 'react';
import styles from './Venues.module.css';
import { MapPin } from 'lucide-react';

const Venues: React.FC = () => {
    return (
        <div className={styles.pageWrapper}>
            {/* Header Section */}
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>Our Bars</h1>
                    <p className={styles.subtitle}>
                        Great ideas need great atmosphere. We partner with the city's best bars and lounges.
                    </p>
                </div>
            </header>

            {/* Info Section */}
            <section className={styles.infoSection}>
                <div className="container">
                    <div className={styles.infoContent}>
                        <div className={styles.infoText}>
                            <h2>Information for Hosts</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className={styles.infoImage}>
                            <img
                                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                alt="Bar interior"
                                style={{ width: '100%', borderRadius: '4px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Venues List */}
            <section className={styles.speakersSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Partner Bars</h2>
                    <div className={styles.speakersGrid}>
                        {/* Dummy Venues */}
                        {[
                            { id: 1, name: "The Velvet Lounge", neighborhood: "Plateau", img: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
                            { id: 2, name: "Library Bar", neighborhood: "Downtown", img: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
                            { id: 3, name: "Alchemy & Co.", neighborhood: "Old Port", img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
                        ].map((venue) => (
                            <div key={venue.id} className={styles.speakerCard}>
                                <div className={styles.imageWrapper}>
                                    <img src={venue.img} alt={venue.name} className={styles.speakerImage} />
                                </div>
                                <h3 className={styles.speakerName}>{venue.name}</h3>
                                <span className={styles.speakerTopic} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <MapPin size={14} /> {venue.neighborhood}
                                </span>
                                <p className={styles.speakerBio}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaOverlay}></div>
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>Bring the conversation to your bar.</h2>
                    <p className={styles.ctaText}>
                        Transform your venue into a hub of intellectual exchange. Host a Lectures After Dark event.
                    </p>
                    <button className="btn btn-primary">Partner With Us</button>
                </div>
            </section>
        </div>
    );
};

export default Venues;
