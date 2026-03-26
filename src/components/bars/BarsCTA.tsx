import styles from '../../pages/Venues.module.css';

interface BarsCTAProps {
    title?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
}

export const BarsCTA = ({
    title = "Bring the conversation to your bar.",
    description = "Transform your venue into a hub of intellectual exchange. Host a Lectures After Dark event.",
    buttonText = "Partner With Us",
    buttonLink = "/"
}: BarsCTAProps) => {
    return (
        <section
            className={styles.ctaSection}
        >
            <div className={styles.ctaOverlay}></div>
            <div className={styles.ctaContent}>
                <h2 className={styles.ctaTitle}>{title}</h2>
                <p className={styles.ctaText}>{description}</p>
                <a target='_blank' href={buttonLink} className="btn btn-primary">{buttonText}</a>
            </div>
        </section>
    );
};
