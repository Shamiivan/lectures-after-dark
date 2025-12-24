import React from 'react';
import { useNode } from '@craftjs/core';
import styles from './Speakers.module.css';

interface Speaker {
    id: number;
    name: string;
    topic: string;
    bio: string;
}

interface SpeakersListProps {
    title?: string;
    speakers?: Speaker[];
}

export const SpeakersList = ({
    title = "Past & Future Speakers",
    speakers = [
        { id: 1, name: "Speaker Name 1", topic: "Topic of Discussion", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { id: 2, name: "Speaker Name 2", topic: "Topic of Discussion", bio: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: 3, name: "Speaker Name 3", topic: "Topic of Discussion", bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." }
    ]
}: SpeakersListProps) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <section
            ref={(ref: HTMLElement | null) => {
                if (ref) {
                    connect(drag(ref));
                }
            }}
            className={styles.speakersSection}
        >
            <div className="container">
                <h2 className={styles.sectionTitle}>{title}</h2>
                <div className={styles.speakersGrid}>
                    {speakers.map((speaker) => (
                        <div key={speaker.id} className={styles.speakerCard}>
                            <h3 className={styles.speakerName}>{speaker.name}</h3>
                            <span className={styles.speakerTopic}>{speaker.topic}</span>
                            <p className={styles.speakerBio}>{speaker.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const SpeakersListSettings = () => {
    const { actions: { setProp }, title } = useNode((node) => ({
        title: node.data.props.title,
    }));

    return (
        <div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Section Title</label>
                <input
                    type="text"
                    value={title || ''}
                    onChange={(e) => setProp((props: SpeakersListProps) => props.title = e.target.value)}
                    style={{ width: '100%', padding: '5px' }}
                />
            </div>
            {/* Note: Editing individual speakers would require a more complex list editor, 
                which is out of scope for this initial implementation but can be added later. */}
            <div style={{ marginBottom: '10px', fontSize: '0.9rem', color: '#666' }}>
                To edit speakers, update the props directly or wait for the List Editor feature.
            </div>
        </div>
    );
};

(SpeakersList as any).craft = {
    props: {
        title: "Past & Future Speakers",
        speakers: [
            { id: 1, name: "Speaker Name 1", topic: "Topic of Discussion", bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
            { id: 2, name: "Speaker Name 2", topic: "Topic of Discussion", bio: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            { id: 3, name: "Speaker Name 3", topic: "Topic of Discussion", bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." }
        ]
    },
    related: {
        settings: SpeakersListSettings
    },
    displayName: "Speakers List"
};
