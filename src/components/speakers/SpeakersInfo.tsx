import React from 'react';
import { useNode } from '@craftjs/core';
import styles from './Speakers.module.css';

interface SpeakersInfoProps {
    heading?: string;
    text1?: string;
    text2?: string;
    imagePlaceholderText?: string;
}

export const SpeakersInfo = ({
    heading = "Information for Speakers",
    text1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    text2 = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imagePlaceholderText = "[Placeholder for an engaging image of a speaker]"
}: SpeakersInfoProps) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <section
            ref={(ref: HTMLElement | null) => {
                if (ref) {
                    connect(drag(ref));
                }
            }}
            className={styles.infoSection}
        >
            <div className="container">
                <div className={styles.infoContent}>
                    <div className={styles.infoText}>
                        <h2>{heading}</h2>
                        <p>{text1}</p>
                        <p>{text2}</p>
                    </div>
                    <div className={styles.infoImage}>
                        <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                            {imagePlaceholderText}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SpeakersInfoSettings = () => {
    const { actions: { setProp }, heading, text1, text2, imagePlaceholderText } = useNode((node) => ({
        heading: node.data.props.heading,
        text1: node.data.props.text1,
        text2: node.data.props.text2,
        imagePlaceholderText: node.data.props.imagePlaceholderText
    }));

    return (
        <div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Heading</label>
                <input
                    type="text"
                    value={heading || ''}
                    onChange={(e) => setProp((props: SpeakersInfoProps) => props.heading = e.target.value)}
                    style={{ width: '100%', padding: '5px' }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Paragraph 1</label>
                <textarea
                    value={text1 || ''}
                    onChange={(e) => setProp((props: SpeakersInfoProps) => props.text1 = e.target.value)}
                    style={{ width: '100%', padding: '5px', minHeight: '80px' }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Paragraph 2</label>
                <textarea
                    value={text2 || ''}
                    onChange={(e) => setProp((props: SpeakersInfoProps) => props.text2 = e.target.value)}
                    style={{ width: '100%', padding: '5px', minHeight: '80px' }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Image Placeholder Text</label>
                <input
                    type="text"
                    value={imagePlaceholderText || ''}
                    onChange={(e) => setProp((props: SpeakersInfoProps) => props.imagePlaceholderText = e.target.value)}
                    style={{ width: '100%', padding: '5px' }}
                />
            </div>
        </div>
    );
};

(SpeakersInfo as any).craft = {
    props: {
        heading: "Information for Speakers",
        text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        text2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        imagePlaceholderText: "[Placeholder for an engaging image of a speaker]"
    },
    related: {
        settings: SpeakersInfoSettings
    },
    displayName: "Speakers Info"
};
