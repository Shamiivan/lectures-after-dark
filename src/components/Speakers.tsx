
import { useNode, Element } from '@craftjs/core';
import styles from '../pages/Speakers.module.css';
import { Mic } from 'lucide-react';
import { SpeakerCard } from './SpeakerCard';

// --- SpeakersHeader ---
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
            ref={(ref: HTMLElement | null) => { if (ref) connect(drag(ref)); }}
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
                <label>Title</label>
                <input type="text" value={title} onChange={e => setProp((p: any) => p.title = e.target.value)} style={{ width: '100%' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>Subtitle</label>
                <input type="text" value={subtitle} onChange={e => setProp((p: any) => p.subtitle = e.target.value)} style={{ width: '100%' }} />
            </div>
        </div>
    );
};

(SpeakersHeader as any).craft = {
    props: { title: "Our Speakers", subtitle: "The minds behind the conversations." },
    related: { settings: SpeakersHeaderSettings }
};

// --- SpeakersInfo ---
interface SpeakersInfoProps {
    title?: string;
    text1?: string;
    text2?: string;
}

export const SpeakersInfo = ({
    title = "Information for Speakers",
    text1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    text2 = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}: SpeakersInfoProps) => {
    const { connectors: { connect, drag } } = useNode();
    return (
        <section
            ref={(ref: HTMLElement | null) => { if (ref) connect(drag(ref)); }}
            className={styles.infoSection}
        >
            <div className="container">
                <div className={styles.infoContent}>
                    <div className={styles.infoText}>
                        <h2>{title}</h2>
                        <p>{text1}</p>
                        <p>{text2}</p>
                    </div>
                    <div className={styles.infoImage}>
                        <img src="/idea.jpeg" alt="Engaging speaker at a past event" className={styles.infoImage} />
                    </div>
                </div>
            </div>
        </section>
    );
};

const SpeakersInfoSettings = () => {
    const { actions: { setProp }, title, text1, text2 } = useNode((node) => ({
        title: node.data.props.title,
        text1: node.data.props.text1,
        text2: node.data.props.text2,
    }));
    return (
        <div>
            <div style={{ marginBottom: '10px' }}>
                <label>Title</label>
                <input type="text" value={title} onChange={e => setProp((p: any) => p.title = e.target.value)} style={{ width: '100%' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>Text 1</label>
                <textarea value={text1} onChange={e => setProp((p: any) => p.text1 = e.target.value)} style={{ width: '100%', minHeight: '80px' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>Text 2</label>
                <textarea value={text2} onChange={e => setProp((p: any) => p.text2 = e.target.value)} style={{ width: '100%', minHeight: '80px' }} />
            </div>
        </div>
    );
};

(SpeakersInfo as any).craft = {
    props: {
        title: "Information for Speakers",
        text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        text2: "Duis aute irure dolor in reprehenderit...",
    },
    related: { settings: SpeakersInfoSettings }
};

// --- SpeakersList ---
interface SpeakersListProps {
    title?: string;
}

export const SpeakersList = ({
    title = "Past & Future Speakers"
}: SpeakersListProps) => {
    const { connectors: { connect, drag } } = useNode();
    return (
        <section
            ref={(ref: HTMLElement | null) => { if (ref) connect(drag(ref)); }}
            className={styles.speakersSection}
        >
            <div className="container">
                <h2 className={styles.sectionTitle}>{title}</h2>
                <Element is="div" id="speakers-grid" canvas className={styles.speakersGrid}>
                    <SpeakerCard name="Speaker Name 1" />
                    <SpeakerCard name="Speaker Name 2" />
                    <SpeakerCard name="Speaker Name 3" />
                </Element>
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
                <label>Title</label>
                <input type="text" value={title} onChange={e => setProp((p: any) => p.title = e.target.value)} style={{ width: '100%' }} />
            </div>
        </div>
    );
};

(SpeakersList as any).craft = {
    props: { title: "Past & Future Speakers" },
    related: { settings: SpeakersListSettings }
};

// --- SpeakersCTA ---
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
            ref={(ref: HTMLElement | null) => { if (ref) connect(drag(ref)); }}
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
        buttonText: node.data.props.buttonText,
    }));
    return (
        <div>
            <div style={{ marginBottom: '10px' }}>
                <label>Title</label>
                <input type="text" value={title} onChange={e => setProp((p: any) => p.title = e.target.value)} style={{ width: '100%' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>Description</label>
                <input type="text" value={description} onChange={e => setProp((p: any) => p.description = e.target.value)} style={{ width: '100%' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>Button Text</label>
                <input type="text" value={buttonText} onChange={e => setProp((p: any) => p.buttonText = e.target.value)} style={{ width: '100%' }} />
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
    related: { settings: SpeakersCTASettings }
};
