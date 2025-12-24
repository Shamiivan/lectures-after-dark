import React from 'react';
import { useNode } from '@craftjs/core';
import { Mic } from 'lucide-react';
import styles from './Speakers.module.css';

interface SpeakersCTAProps {
    title?: string;
    description?: string;
    buttonText?: string;
}

export const SpeakersCTA = ({
    title = "Become a Speaker",
    description = "Share your knowledge and passion with our community.",
    buttonText = "Apply Now"
}: SpeakersCTAProps) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <section
            ref={(ref: HTMLElement | null) => {
                if (ref) {
                    connect(drag(ref));
                }
            }}
            className={styles.ctaSection}
        >
            <div className="container">
                <div className={styles.ctaGrid} style={{ gridTemplateColumns: '1fr', maxWidth: '600px', margin: '0 auto' }}>
                    <div className={styles.ctaCard}>
                        <Mic size={48} color="var(--amber)" />
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <button className="btn btn-primary">{buttonText}</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SpeakersCTASettings = () => {
    const { actions: { setProp }, title, description, buttonText } = useNode((node) => ({
        title: node.data.props.title,
        description: node.data.props.description,
        buttonText: node.data.props.buttonText
    }));

    return (
        <div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Title</label>
                <input
                    type="text"
                    value={title || ''}
                    onChange={(e) => setProp((props: SpeakersCTAProps) => props.title = e.target.value)}
                    style={{ width: '100%', padding: '5px' }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Description</label>
                <textarea
                    value={description || ''}
                    onChange={(e) => setProp((props: SpeakersCTAProps) => props.description = e.target.value)}
                    style={{ width: '100%', padding: '5px', minHeight: '60px' }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Button Text</label>
                <input
                    type="text"
                    value={buttonText || ''}
                    onChange={(e) => setProp((props: SpeakersCTAProps) => props.buttonText = e.target.value)}
                    style={{ width: '100%', padding: '5px' }}
                />
            </div>
        </div>
    );
};

(SpeakersCTA as any).craft = {
    props: {
        title: "Become a Speaker",
        description: "Share your knowledge and passion with our community.",
        buttonText: "Apply Now"
    },
    related: {
        settings: SpeakersCTASettings
    },
    displayName: "Speakers CTA"
};
