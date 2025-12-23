import React from 'react';
import styles from './UpcomingEvents.module.css';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

const events = [
    {
        id: 1,
        tag: 'Psychology',
        title: "The Psychology of Ambition: Why Some People Win and Most Don't",
        date: 'Jan 22, 2025',
        location: 'Montreal',
        image: 'https://images.unsplash.com/photo-1528720208104-3d9bd03cc9d4?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 2,
        tag: 'Culture',
        title: 'Modern Dating is Negotiating',
        date: 'Jan 29, 2025',
        location: 'Montreal',
        image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 3,
        tag: 'Psychology',
        title: 'How Power Really Works',
        date: 'Feb 05, 2025',
        location: 'Montreal',
        image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
];

const UpcomingEvents: React.FC = () => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const [showLeftButton, setShowLeftButton] = React.useState(false);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            setShowLeftButton(scrollContainerRef.current.scrollLeft > 0);
        }
    };

    React.useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScroll);
            // Check initial state
            checkScroll();
        }
        return () => {
            if (container) {
                container.removeEventListener('scroll', checkScroll);
            }
        };
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400; // Adjust scroll amount as needed
            const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="events" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <div>
                        <h2 className={styles.title}>Upcoming Events</h2>
                        <p className={styles.subtitle}>Curated nights for the curious mind.</p>
                    </div>
                    <a href="#" className={`btn btn-outline ${styles.viewAllBtn}`}>
                        View All Events
                    </a>
                </div>

                <div className={styles.carouselWrapper}>
                    <button
                        onClick={() => scroll('left')}
                        className={`${styles.floatingScrollButton} ${styles.left} ${showLeftButton ? styles.visible : ''}`}
                        aria-label="Scroll left"
                        disabled={!showLeftButton}
                    >
                        <ArrowRight size={24} style={{ transform: 'rotate(180deg)' }} />
                    </button>
                    <div className={styles.scrollContainer} ref={scrollContainerRef}>
                        {events.map((event) => (
                            <div key={event.id} className={styles.card}>
                                <div className={styles.cardImage}>
                                    <img src={event.image} alt={event.title} />
                                </div>
                                <div className={styles.cardContent}>
                                    <span className={styles.tag}>{event.tag}</span>
                                    <h3 className={styles.cardTitle}>{event.title}</h3>
                                    <div className={styles.meta}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                            <Calendar size={14} /> {event.date}
                                        </span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                            <MapPin size={14} /> {event.location}
                                        </span>
                                    </div>
                                    <a href="#" className={styles.link}>
                                        Register <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={() => scroll('right')}
                        className={`${styles.floatingScrollButton} ${styles.right}`}
                        aria-label="Scroll right"
                    >
                        <ArrowRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
