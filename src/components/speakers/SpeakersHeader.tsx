import React from 'react';
import { useNode } from '@craftjs/core';
import styles from './Speakers.module.css';

interface SpeakersHeaderProps {
    title?: string;
    subtitle?: string;
}

export const SpeakersHeader = ({
    title = "Our Speakers",
    subtitle = "The minds behind the conversations."
}: SpeakersHeaderProps) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <header
            ref={(ref: HTMLElement | null) => {
                if (ref) {
                    connect(drag(ref));
                }
            }}
            className={styles.header}
        >
            <div className="container">
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
        </header>
    );
};

const SpeakersHeaderSettings = () => {
    const { actions: { setProp }, title, subtitle } = useNode((node) => ({
        title: node.data.props.title,
        subtitle: node.data.props.subtitle,
    }));

    return (
        <div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Title</label>
                <input
                    type="text"
                    value={title || ''}
                    onChange={(e) => setProp((props: SpeakersHeaderProps) => props.title = e.target.value)}
                    style={{ width: '100%', padding: '5px' }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Subtitle</label>
                <textarea
                    value={subtitle || ''}
                    onChange={(e) => setProp((props: SpeakersHeaderProps) => props.subtitle = e.target.value)}
                    style={{ width: '100%', padding: '5px', minHeight: '60px' }}
                />
            </div>
        </div>
    );
};

(SpeakersHeader as any).craft = {
    props: {
        title: "Our Speakers",
        subtitle: "The minds behind the conversations."
    },
    related: {
        settings: SpeakersHeaderSettings
    },
    displayName: "Speakers Header"
};
