import { useNode, Element } from "@craftjs/core";
import { Check } from 'lucide-react';
import styles from '../IdeaSection.module.css';
import { Text } from './Text';
import { Image } from './Image';

export const IdeaSection = () => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <section ref={(ref: any) => connect(drag(ref))} id="about" className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <Element id="title" is={Text} text="The Idea" tagName="h2" />

                        <Element
                            id="desc1"
                            is={Text}
                            text="Lectures After Dark is a growing movement of intellectual social events that combine academic learning settings with the social experience of a bar."
                            tagName="p"
                        />

                        <Element
                            id="desc2"
                            is={Text}
                            text="Our events are designed to be accessible to everyone while still offering deep insights. Curiosity is the only requirement."
                            tagName="p"
                        />

                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <span className={styles.check}><Check size={14} /></span>
                                <Element id="item1" is={Text} text="Fun and Engaging Speakers" tagName="span" />
                            </li>
                            <li className={styles.listItem}>
                                <span className={styles.check}><Check size={14} /></span>
                                <Element id="item2" is={Text} text="Professors and Industry Leaders" tagName="span" />
                            </li>
                            <li className={styles.listItem}>
                                <span className={styles.check}><Check size={14} /></span>
                                <Element id="item3" is={Text} text="Education and Entertainment" tagName="span" />
                            </li>
                        </ul>
                    </div>

                    <div className={styles.imageWrapper}>
                        <Element
                            id="idea-image"
                            is={Image}
                            alt="Cocktails and Conversation"
                            width="100%"
                            height="auto"
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export const IdeaSectionSettings = () => {
    return (
        <div>
            <p>Click on any text to edit it directly.</p>
        </div>
    );
};

IdeaSection.craft = {
    displayName: "Idea Section",
    related: {
        settings: IdeaSectionSettings,
    },
    rules: {
        canDrag: () => true,
    },
};
