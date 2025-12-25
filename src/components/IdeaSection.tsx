
import { useNode } from '@craftjs/core';
import styles from './IdeaSection.module.css';
import { Check } from 'lucide-react';

interface IdeaSectionProps {
    title?: string;
    description1?: string;
    description2?: string;
}

export const IdeaSection = ({
    title = "The Idea",
    description1 = "Lectures After Dark is a growing movement of intellectual social events that combine academic learning settings with the social experience of a bar.",
    description2 = "Our events are designed to be accessible to everyone while still offering deep insights. Curiosity is the only requirement."
}: IdeaSectionProps) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <section
            ref={(ref: HTMLElement | null) => {
                if (ref) {
                    connect(drag(ref));
                }
            }}
            id="about"
            className={styles.section}
        >
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2>{title}</h2>
                        <p>{description1}</p>
                        <p>{description2}</p>

                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <span className={styles.check}><Check size={14} /></span>
                                Fun and Engaging Speakers
                            </li>
                            <li className={styles.listItem}>
                                <span className={styles.check}><Check size={14} /></span>
                                Professors and Industry Leaders
                            </li>
                            <li className={styles.listItem}>
                                <span className={styles.check}><Check size={14} /></span>
                                Education and Entertainment
                            </li>
                        </ul>
                    </div>

                    <div className={styles.imageWrapper}>
                        <img
                            src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                            alt="Cocktails and Conversation"
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const IdeaSectionSettings = () => {
    const { actions: { setProp }, title, description1, description2 } = useNode((node) => ({
        title: node.data.props.title,
        description1: node.data.props.description1,
        description2: node.data.props.description2,
    }));

    return (
        <div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Title</label>
                <input
                    type="text"
                    value={title || ''}
                    onChange={(e) => setProp((props: IdeaSectionProps) => props.title = e.target.value)}
                    style={{ width: '100%', padding: '5px' }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Description 1</label>
                <textarea
                    value={description1 || ''}
                    onChange={(e) => setProp((props: IdeaSectionProps) => props.description1 = e.target.value)}
                    style={{ width: '100%', padding: '5px', minHeight: '80px' }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Description 2</label>
                <textarea
                    value={description2 || ''}
                    onChange={(e) => setProp((props: IdeaSectionProps) => props.description2 = e.target.value)}
                    style={{ width: '100%', padding: '5px', minHeight: '80px' }}
                />
            </div>
        </div>
    );
};

(IdeaSection as any).craft = {
    props: {
        title: "The Idea",
        description1: "Lectures After Dark is a growing movement of intellectual social events that combine academic learning settings with the social experience of a bar.",
        description2: "Our events are designed to be accessible to everyone while still offering deep insights. Curiosity is the only requirement."
    },
    related: {
        settings: IdeaSectionSettings
    }
};

export default IdeaSection;
