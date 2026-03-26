import styles from '../../pages/Speakers.module.css';

interface SpeakersInfoProps {
    title?: string;
    text1?: string;
    text2?: string;
}

export const SpeakersInfo = ({
    title = "What you need to know",
    text1 = "Lectures After Dark features speakers from academia, industry, art, technology and everything in-between.",
    text2 = "Each talk triggers conversations and sparks new ideas, from speaker to audience. We want ideas that stick and shape our guests."
}: SpeakersInfoProps) => {
    return (
        <section
            className={styles.infoSection}
        >
            <div className="container">
                <div className={styles.infoContent}>
                    <div className={styles.infoText}>
                        <h2>{title}</h2>
                        <p>{text1}</p>
                        <p>{text2}</p>
                    </div>
                    <div className={styles.infoImage}>
                        <img
                            src="https://images.unsplash.com/photo-1597290282695-edc43d0e7129?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFyfGVufDB8fDB8fHww"
                            alt="Engaging speaker at a past event"
                            style={{ width: '100%', borderRadius: '4px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
