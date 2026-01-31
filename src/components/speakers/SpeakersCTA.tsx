import { useNode } from '@craftjs/core';
import styles from '../../pages/Speakers.module.css';
import { Mic } from 'lucide-react';
import { settingsStyles } from '../settings/settingsStyles';

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
    const { connectors: { connect, drag } } = useNode();
    return (
        <section
            ref={(ref: HTMLElement | null) => { if (ref) connect(drag(ref)); }}
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

const SpeakersCTASettings = () => {
    const { actions: { setProp }, title, description, buttonText, buttonLink } = useNode((node) => ({
        title: node.data.props.title,
        description: node.data.props.description,
        buttonText: node.data.props.buttonText,
        buttonLink: node.data.props.buttonLink,
    }));
    return (
        <div>
            <div style={settingsStyles.field}>
                <label style={settingsStyles.label}>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={e => setProp((p: SpeakersCTAProps) => p.title = e.target.value)}
                    style={settingsStyles.input}
                />
            </div>
            <div style={settingsStyles.field}>
                <label style={settingsStyles.label}>Description</label>
                <textarea
                    value={description}
                    onChange={e => setProp((p: SpeakersCTAProps) => p.description = e.target.value)}
                    style={settingsStyles.textarea}
                />
            </div>
            <div style={settingsStyles.field}>
                <label style={settingsStyles.label}>Button Text</label>
                <input
                    type="text"
                    value={buttonText}
                    onChange={e => setProp((p: SpeakersCTAProps) => p.buttonText = e.target.value)}
                    style={settingsStyles.input}
                />
            </div>
            <div style={settingsStyles.field}>
                <label style={settingsStyles.label}>Button Link</label>
                <input
                    type="text"
                    value={buttonLink}
                    onChange={e => setProp((p: SpeakersCTAProps) => p.buttonLink = e.target.value)}
                    style={settingsStyles.input}
                />
            </div>
        </div>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(SpeakersCTA as any).craft = {
    props: {
        title: "Share Your Voice",
        description: "Lectures After Dark is a platform for passionate people to share their ideas with a curious audience. We're always looking for new speakers to join our community. If you have a topic you're passionate about, we'd love to hear from you.",
        buttonText: "Apply to Speak",
    },
    related: { settings: SpeakersCTASettings }
};
