import { useNode } from "@craftjs/core";
import { Check } from 'lucide-react';
import styles from '../IdeaSection.module.css';

export interface IdeaSectionProps {
    title?: string;
    description1?: string;
    description2?: string;
    items?: string[];
    imageUrl?: string;
}

export const IdeaSection = ({
    title = "The Idea",
    description1 = "Lectures After Dark is a growing movement of intellectual social events that combine academic learning settings with the social experience of a bar.",
    description2 = "Our events are designed to be accessible to everyone while still offering deep insights. Curiosity is the only requirement.",
    items = ["Fun and Engaging Speakers", "Professors and Industry Leaders", "Education and Entertainment"],
    imageUrl = "https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
}: IdeaSectionProps) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <section ref={(ref: any) => connect(drag(ref))} id="about" className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <h2>{title}</h2>
                        <p>{description1}</p>
                        <p>{description2}</p>

                        <ul className={styles.list}>
                            {items.map((item, index) => (
                                <li key={index} className={styles.listItem}>
                                    <span className={styles.check}><Check size={14} /></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.imageWrapper}>
                        <img
                            src={imageUrl}
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
    const { actions: { setProp }, title, description1, description2, imageUrl } = useNode((node) => ({
        title: node.data.props.title,
        description1: node.data.props.description1,
        description2: node.data.props.description2,
        imageUrl: node.data.props.imageUrl,
    }));

    return (
        <div>
            <div style={{ marginBottom: "10px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontSize: "12px", color: "#666" }}>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setProp((props: any) => props.title = e.target.value)}
                    style={{ width: "100%", padding: "5px", border: "1px solid #e0e0e0", borderRadius: "4px" }}
                />
            </div>
            <div style={{ marginBottom: "10px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontSize: "12px", color: "#666" }}>Description 1</label>
                <textarea
                    value={description1}
                    onChange={(e) => setProp((props: any) => props.description1 = e.target.value)}
                    style={{ width: "100%", padding: "5px", border: "1px solid #e0e0e0", borderRadius: "4px", minHeight: "60px" }}
                />
            </div>
            <div style={{ marginBottom: "10px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontSize: "12px", color: "#666" }}>Description 2</label>
                <textarea
                    value={description2}
                    onChange={(e) => setProp((props: any) => props.description2 = e.target.value)}
                    style={{ width: "100%", padding: "5px", border: "1px solid #e0e0e0", borderRadius: "4px", minHeight: "60px" }}
                />
            </div>
            <div style={{ marginBottom: "10px" }}>
                <label style={{ display: "block", marginBottom: "5px", fontSize: "12px", color: "#666" }}>Image URL</label>
                <input
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setProp((props: any) => props.imageUrl = e.target.value)}
                    style={{ width: "100%", padding: "5px", border: "1px solid #e0e0e0", borderRadius: "4px" }}
                />
            </div>
            {/* Note: List items editing can be added here later */}
        </div>
    );
};

IdeaSection.craft = {
    displayName: "Idea Section",
    props: {
        title: "The Idea",
        description1: "Lectures After Dark is a growing movement of intellectual social events that combine academic learning settings with the social experience of a bar.",
        description2: "Our events are designed to be accessible to everyone while still offering deep insights. Curiosity is the only requirement.",
        items: ["Fun and Engaging Speakers", "Professors and Industry Leaders", "Education and Entertainment"],
        imageUrl: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    related: {
        settings: IdeaSectionSettings,
    },
    rules: {
        canDrag: () => true,
    },
};
