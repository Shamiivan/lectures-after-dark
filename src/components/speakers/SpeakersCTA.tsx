import styles from '../../pages/Speakers.module.css';
import { Mic } from 'lucide-react';

interface SpeakersCTAProps {
    title?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
}

export const SpeakersCTA = ({
    title = "Share Your Voice",
    description = "If you have a topic you're passionate about, we'd love to hear from you.",
    buttonText = "Apply to Speak",
    buttonLink = "/"
}: SpeakersCTAProps) => {
    return (
        <section
            className={styles.ctaSection}
            style={{ backgroundImage: `url(/bg.jpeg)` }}
        >
            <div className={styles.ctaOverlay}></div>
            <div className={styles.ctaContent}>
                <Mic size={48} color="var(--amber)" />
                <h2 className={styles.ctaTitle}>{title}</h2>
                <p className={styles.ctaText}>{description}</p>
                <div className={styles.ctaButtons}>
                    <a target='_blank' href={buttonLink} className="btn btn-primary">{buttonText}</a>
                </div>
            </div>
        </section>
    );
};
