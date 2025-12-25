import { useNode } from '@craftjs/core';
import { Card } from './Card';
import styles from './SpeakerCard.module.css';

interface SpeakerCardProps {
    name?: string;
    topic?: string;
    bio?: string;
    image?: string;
}

export const SpeakerCard = ({
    name = "Speaker Name",
    topic = "Topic of Discussion",
    bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image
}: SpeakerCardProps) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <div
            ref={(ref: HTMLDivElement | null) => {
                if (ref) {
                    connect(drag(ref));
                }
            }}
        >
            <Card
                variant="image-top"
                image={image}
                imageHeight="240px"
                padding="medium"
                hoverable={true}
            >
                <h3 className={styles.speakerName}>{name}</h3>
                <span className={styles.speakerTopic}>{topic}</span>
                <p className={styles.speakerBio}>{bio}</p>
            </Card>
        </div>
    );
};

const SpeakerCardSettings = () => {
    const { actions: { setProp }, name, topic, bio, image } = useNode((node) => ({
        name: node.data.props.name,
        topic: node.data.props.topic,
        bio: node.data.props.bio,
        image: node.data.props.image,
    }));

    return (
        <div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Image URL</label>
                <input
                    type="text"
                    value={image || ''}
                    onChange={(e) => setProp((props: SpeakerCardProps) => props.image = e.target.value)}
                    style={{ width: '100%', padding: '5px' }}
                    placeholder="https://example.com/speaker.jpg"
                />
            </div>
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
