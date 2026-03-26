import { useEditorAwareNode } from '../hooks/useEditorAwareNode';
import { Card } from './Card';
import styles from './SpeakerCard.module.css';
import { Twitter, Linkedin, Globe } from 'lucide-react';

interface SpeakerCardProps {
    name?: string;
    topic?: string;
    bio?: string;
    image?: string;
    twitter?: string;
    linkedin?: string;
    website?: string;
}

export const SpeakerCard = ({
    name = "Speaker Name",
    topic = "Topic of Discussion",
    bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image = "/logo.png",
    twitter,
    linkedin,
    website,
}: SpeakerCardProps) => {
    const { connectors: { connect, drag } } = useEditorAwareNode();

    return (
        <div
            ref={(ref: HTMLDivElement | null) => {
                if (ref) connect(drag(ref));
            }}
        >
            <Card
                variant="image-top"
                image={image}
                imageHeight="200px"
                padding="medium"
                hoverable={true}
            >
                <h3 className={styles.speakerName}>{name}</h3>
                <span className={styles.speakerTopic}>{topic}</span>
                <p className={styles.speakerBio}>{bio}</p>
                <div className={styles.socialLinks}>
                    {twitter && <a href={twitter} target="_blank" rel="noopener noreferrer"><Twitter size={18} /></a>}
                    {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18} /></a>}
                    {website && <a href={website} target="_blank" rel="noopener noreferrer"><Globe size={18} /></a>}
                </div>
            </Card>
        </div>
    );
};

// Minimal CraftJS config for resolver compatibility (content managed by TinaCMS)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(SpeakerCard as any).craft = {
    props: {
        name: "Speaker Name",
        topic: "Topic of Discussion",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/logo.png",
        twitter: "",
        linkedin: "",
        website: "",
    },
};
