import styles from '../../pages/Speakers.module.css';

interface SpeakersHeaderProps {
    title?: string;
    subtitle?: string;
}

export const SpeakersHeader = ({
    title = "Our Speakers",
    subtitle = "The minds behind the conversations."
}: SpeakersHeaderProps) => {
    return (
        <header
            className={styles.header}
        >
            <div className="container">
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
        </header>
    );
};
