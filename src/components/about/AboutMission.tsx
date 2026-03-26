import styles from '../../pages/About.module.css';

interface AboutMissionProps {
    title?: string;
    missionStatement?: string;
    imageUrl?: string;
}

export const AboutMission = ({
    title = "Our Mission",
    missionStatement = "Our mission is to bring people together to share ideas and stories in a relaxed and inspiring environment. We believe that a good conversation can change the world.",
    imageUrl = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
}: AboutMissionProps) => {
    return (
        <section
            className={styles.missionSection}
        >
            <div className="container">
                <div className={styles.missionContent}>
                    <div className={styles.missionText}>
                        <h2>{title}</h2>
                        <p>{missionStatement}</p>
                    </div>
                    <div className={styles.missionImage}>
                        <img src={imageUrl} alt="Our team" />
                    </div>
                </div>
            </div>
        </section>
    );
};
