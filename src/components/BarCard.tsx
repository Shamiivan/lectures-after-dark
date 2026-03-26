import styles from '../pages/Venues.module.css';
import { MapPin } from 'lucide-react';

interface BarCardProps {
    name?: string;
    neighborhood?: string;
    description?: string;
    imageUrl?: string;
    mapsLink?: string;
}

export const BarCard = ({
    name = "Bar Name",
    neighborhood = "Neighborhood",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl = "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    mapsLink = "https://maps.app.goo.gl/sLmJFrbS25dbyEzR7"
}: BarCardProps) => {
    return (
        <div
            className={styles.speakerCard}
        >
            <a target='_blank' href={mapsLink}>
                <div className={styles.imageWrapper}>
                    <img src={imageUrl} alt={name} className={styles.speakerImage} />
                </div>
                <h3 className={styles.speakerName}>{name}</h3>
                <span className={styles.speakerTopic} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPin size={14} /> {neighborhood}
                </span>
                <p className={styles.speakerBio}>{description}</p>
            </a>
        </div>
    );
};
