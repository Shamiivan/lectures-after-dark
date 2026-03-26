import styles from '../../pages/About.module.css';

interface OurVisionProps {
    title?: string;
    visionStatement?: string;
    imageUrl?: string;
}

export const OurVision = ({
    title = "Our Vision",
    visionStatement = "We envision a world where everyone has a stage to share their passion and a community to share it with. We want to be the spark that ignites a global movement of curiosity and conversation.",
    imageUrl = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
}: OurVisionProps) => {
    return (
        <section
            className={styles.visionSection}
        >
            <div className="container">
                <div className={styles.visionContent}>
                    <div className={styles.visionImage}>
                        <img src={imageUrl} alt="Our vision" />
                    </div>
                    <div className={styles.visionText}>
                        <h2>{title}</h2>
                        <p>{visionStatement}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
