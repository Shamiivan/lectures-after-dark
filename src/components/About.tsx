
import { useNode } from '@craftjs/core';
import styles from '../pages/About.module.css';

// --- AboutHeader ---
interface AboutHeaderProps {
    title?: string;
    subtitle?: string;
}

export const AboutHeader = ({
    title = "About Us",
    subtitle = "Where curiosity meets conversation in the heart of the city."
}: AboutHeaderProps) => {
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

const AboutHeaderSettings = () => {
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

(AboutHeader as any).craft = {
    props: { title: "About Us", subtitle: "Where curiosity meets conversation in the heart of the city." },
    related: { settings: AboutHeaderSettings }
};

// --- AboutMission ---
interface AboutMissionProps {
    title?: string;
    text1?: string;
    text2?: string;
    text3?: string;
}

export const AboutMission = ({
    title = "Our Mission",
    text1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    text2 = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    text3 = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
}: AboutMissionProps) => {
    const { connectors: { connect, drag } } = useNode();
    return (
        <section
            ref={(ref: HTMLElement | null) => { if (ref) connect(drag(ref)); }}
            className={styles.missionSection}
        >
            <div className="container">
                <div className={styles.missionContent}>
                    <div className={styles.missionText}>
                        <h2>{title}</h2>
                        <p>{text1}</p>
                        <p>{text2}</p>
                        <p>{text3}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const AboutMissionSettings = () => {
    const { actions: { setProp }, title, text1, text2, text3 } = useNode((node) => ({
        title: node.data.props.title,
        text1: node.data.props.text1,
        text2: node.data.props.text2,
        text3: node.data.props.text3,
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
                <label>Text 3</label>
                <textarea value={text3} onChange={e => setProp((p: any) => p.text3 = e.target.value)} style={{ width: '100%', minHeight: '80px' }} />
            </div>
        </div>
    );
};

(AboutMission as any).craft = {
    props: {
        title: "Our Mission",
        text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        text2: "Duis aute irure dolor in reprehenderit...",
        text3: "Sed ut perspiciatis unde omnis iste natus error..."
    },
    related: { settings: AboutMissionSettings }
};
