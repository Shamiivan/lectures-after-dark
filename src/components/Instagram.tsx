import React from 'react';
import styles from './Instagram.module.css';

const Instagram: React.FC = () => {
    const images = [
        'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    ];

    return (
        <section className={styles.section}>
            <div className="container">
                <h3 className={styles.title}>Follow us on Instagram</h3>
                <a href="#" className={styles.handle}>@lecturesafterdark</a>

                <div className={styles.grid}>
                    {images.map((src, index) => (
                        <div key={index} className={styles.imageWrapper}>
                            <img src={src} alt={`Instagram post ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Instagram;
