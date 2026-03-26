import styles from '../../pages/Venues.module.css';

interface BarsHeaderProps {
    title?: string;
    subtitle?: string;
}

export const BarsHeader = ({
    title = "Our Bars",
    subtitle = "Great ideas need great atmosphere. We partner with the city's best bars and lounges."
}: BarsHeaderProps) => {
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
