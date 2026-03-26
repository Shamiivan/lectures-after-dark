import styles from '../../pages/About.module.css';

interface AboutHeaderProps {
    title?: string;
    subtitle?: string;
}

export const AboutHeader = ({
    title = "About Us",
    subtitle = "Where curiosity meets conversation in the heart of the city."
}: AboutHeaderProps) => {
    return (
        <header
            className={styles.header}
        >
            <div className={styles.headerOverlay}></div>
            <div className="container">
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
        </header>
    );
};
