
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
                        <img
                            src="https://images.unsplash.com/photo-1597290282695-edc43d0e7129?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFyfGVufDB8fDB8fHww"
                            alt="Engaging speaker at a past event"
                            style={{ width: '100%', borderRadius: '4px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
                        />
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
                    <SpeakerCard name="John Doe" topic="React" image="https://images.unsplash.com/photo-1599566150163-29194d6f4675?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" twitter="https://twitter.com/johndoe" linkedin="https://linkedin.com/in/johndoe" website="https://johndoe.com" />
                    <SpeakerCard name="Jane Doe" topic="Vue" image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" twitter="https://twitter.com/janedoe" linkedin="https://linkedin.com/in/janedoe" website="https://janedoe.com" />
                    <SpeakerCard name="Peter Jones" topic="Angular" image="https://images.unsplash.com/photo-1597290282695-edc43d0e7129?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFyfGVufDB8fDB8fHww" twitter="https://twitter.com/peterjones" linkedin="https://linkedin.com/in/peterjones" website="https://peterjones.com" />
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
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
}

export const SpeakersCTA = ({
    title = "Share Your Voice",
    description = "If you have a topic you're passionate about, we'd love to hear from you.",
    buttonText = "Apply to Speak",
    secondaryButtonText = "Learn More",
    secondaryButtonLink = "/about"
}: SpeakersCTAProps) => {
    const { connectors: { connect, drag } } = useNode();
    return (
        <section
            ref={(ref: HTMLElement | null) => { if (ref) connect(drag(ref)); }}
            className={styles.ctaSection}
            style={{ backgroundImage: `url(/bg.jpeg)` }}
        >
            <div className={styles.ctaOverlay}></div>
            <div className={styles.ctaContent}>
                <Mic size={48} color="var(--amber)" />
                <h2 className={styles.ctaTitle}>{title}</h2>
                <p className={styles.ctaText}>{description}</p>
                <div className={styles.ctaButtons}>
                    <button className="btn btn-primary">{buttonText}</button>
                    <a href={secondaryButtonLink} className="btn btn-secondary">{secondaryButtonText}</a>
                </div>
            </div>
        </section>
    );
};

const SpeakersCTASettings = () => {
    const { actions: { setProp }, title, description, buttonText, secondaryButtonText, secondaryButtonLink } = useNode((node) => ({
        title: node.data.props.title,
        description: node.data.props.description,
        buttonText: node.data.props.buttonText,
        secondaryButtonText: node.data.props.secondaryButtonText,
        secondaryButtonLink: node.data.props.secondaryButtonLink,
    }));
    return (
        <div>
            <div style={{ marginBottom: '10px' }}>
                <label>Title</label>
                <input type="text" value={title} onChange={e => setProp((p: any) => p.title = e.target.value)} style={{ width: '100%' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>Description</label>
                <textarea value={description} onChange={e => setProp((p: any) => p.description = e.target.value)} style={{ width: '100%', minHeight: '80px' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>Button Text</label>
                <input type="text" value={buttonText} onChange={e => setProp((p: any) => p.buttonText = e.target.value)} style={{ width: '100%' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>Secondary Button Text</label>
                <input type="text" value={secondaryButtonText} onChange={e => setProp((p: any) => p.secondaryButtonText = e.target.value)} style={{ width: '100%' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>Secondary Button Link</label>
                <input type="text" value={secondaryButtonLink} onChange={e => setProp((p: any) => p.secondaryButtonLink = e.target.value)} style={{ width: '100%' }} />
            </div>
        </div>
    );
};

(SpeakersCTA as any).craft = {
    props: {
        title: "Share Your Voice",
        description: "Lectures After Dark is a platform for passionate people to share their ideas with a curious audience. We're always looking for new speakers to join our community. If you have a topic you're passionate about, we'd love to hear from you.",
        buttonText: "Apply to Speak",
        secondaryButtonText: "Learn More",
        secondaryButtonLink: "/about"
    },
    related: { settings: SpeakersCTASettings }
};
