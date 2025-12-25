
import { useNode, Element } from '@craftjs/core';
import styles from '../pages/Venues.module.css';
import { BarCard } from './BarCard';

// --- BarsHeader ---
interface BarsHeaderProps {
    title?: string;
    subtitle?: string;
}

export const BarsHeader = ({
    title = "Our Bars",
    subtitle = "Great ideas need great atmosphere. We partner with the city's best bars and lounges."
}: BarsHeaderProps) => {
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

const BarsHeaderSettings = () => {
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

(BarsHeader as any).craft = {
    props: { title: "Our Bars", subtitle: "Great ideas need great atmosphere. We partner with the city's best bars and lounges." },
    related: { settings: BarsHeaderSettings }
};

// --- BarsInfo ---
interface BarsInfoProps {
    title?: string;
    text1?: string;
    text2?: string;
    imageUrl?: string;
}

export const BarsInfo = ({
    title = "Information for Hosts",
    text1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    text2 = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
}: BarsInfoProps) => {
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
                            src={imageUrl}
                            alt="Bar interior"
                            style={{ width: '100%', borderRadius: '4px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const BarsInfoSettings = () => {
    const { actions: { setProp }, title, text1, text2, imageUrl } = useNode((node) => ({
        title: node.data.props.title,
        text1: node.data.props.text1,
        text2: node.data.props.text2,
        imageUrl: node.data.props.imageUrl,
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
            <div style={{ marginBottom: '10px' }}>
                <label>Image URL</label>
                <input type="text" value={imageUrl} onChange={e => setProp((p: any) => p.imageUrl = e.target.value)} style={{ width: '100%' }} />
            </div>
        </div>
    );
};

(BarsInfo as any).craft = {
    props: {
        title: "Information for Hosts",
        text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        text2: "Duis aute irure dolor in reprehenderit...",
        imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    related: { settings: BarsInfoSettings }
};

// --- BarsList ---
interface BarsListProps {
    title?: string;
}

export const BarsList = ({
    title = "Partner Bars"
}: BarsListProps) => {
    const { connectors: { connect, drag } } = useNode();
    return (
        <section
            ref={(ref: HTMLElement | null) => { if (ref) connect(drag(ref)); }}
            className={styles.speakersSection}
        >
            <div className="container">
                <h2 className={styles.sectionTitle}>{title}</h2>
                <Element is="div" id="bars-grid" canvas className={styles.speakersGrid}>
                    <BarCard name="The Velvet Lounge" neighborhood="Plateau" imageUrl="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
                    <BarCard name="Library Bar" neighborhood="Downtown" imageUrl="https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
                    <BarCard name="Alchemy & Co." neighborhood="Old Port" imageUrl="https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
                </Element>
            </div>
        </section>
    );
};

const BarsListSettings = () => {
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

(BarsList as any).craft = {
    props: { title: "Partner Bars" },
    related: { settings: BarsListSettings }
};

// --- BarsCTA ---
interface BarsCTAProps {
    title?: string;
    description?: string;
    buttonText?: string;
}

export const BarsCTA = ({
    title = "Bring the conversation to your bar.",
    description = "Transform your venue into a hub of intellectual exchange. Host a Lectures After Dark event.",
    buttonText = "Partner With Us"
}: BarsCTAProps) => {
    const { connectors: { connect, drag } } = useNode();
    return (
        <section
            ref={(ref: HTMLElement | null) => { if (ref) connect(drag(ref)); }}
            className={styles.ctaSection}
        >
            <div className={styles.ctaOverlay}></div>
            <div className={styles.ctaContent}>
                <h2 className={styles.ctaTitle}>{title}</h2>
                <p className={styles.ctaText}>{description}</p>
                <button className="btn btn-primary">{buttonText}</button>
            </div>
        </section>
    );
};

const BarsCTASettings = () => {
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

(BarsCTA as any).craft = {
    props: {
        title: "Bring the conversation to your bar.",
        description: "Transform your venue into a hub of intellectual exchange. Host a Lectures After Dark event.",
        buttonText: "Partner With Us"
    },
    related: { settings: BarsCTASettings }
};
