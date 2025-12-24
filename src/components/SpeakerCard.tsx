import { useNode } from '@craftjs/core';
import styles from '../pages/Speakers.module.css';

interface SpeakerCardProps {
    name?: string;
    topic?: string;
    bio?: string;
}

export const SpeakerCard = ({
    name = "Speaker Name",
    topic = "Topic of Discussion",
    bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}: SpeakerCardProps) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <div
            ref={(ref: HTMLDivElement | null) => {
                if (ref) {
                    connect(drag(ref));
                }
            }}
            className={styles.speakerCard}
        >
            <h3 className={styles.speakerName}>{name}</h3>
            <span className={styles.speakerTopic}>{topic}</span>
            <p className={styles.speakerBio}>{bio}</p>
        </div>
    );
};

const SpeakerCardSettings = () => {
    const { actions: { setProp }, name, topic, bio } = useNode((node) => ({
        name: node.data.props.name,
        topic: node.data.props.topic,
        bio: node.data.props.bio,
    }));

    return (
        <div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Name</label>
                <input
                    type="text"
                    value={name || ''}
                    onChange={(e) => setProp((props: SpeakerCardProps) => props.name = e.target.value)}
                    style={{ width: '100%', padding: '5px' }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Topic</label>
                <input
                    type="text"
                    value={topic || ''}
                    onChange={(e) => setProp((props: SpeakerCardProps) => props.topic = e.target.value)}
                    style={{ width: '100%', padding: '5px' }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Bio</label>
                <textarea
                    value={bio || ''}
                    onChange={(e) => setProp((props: SpeakerCardProps) => props.bio = e.target.value)}
                    style={{ width: '100%', padding: '5px', minHeight: '100px' }}
                />
            </div>
        </div>
    );
};

(SpeakerCard as any).craft = {
    props: {
        name: "Speaker Name",
        topic: "Topic of Discussion",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    related: {
        settings: SpeakerCardSettings
    }
};
