
import { useNode } from '@craftjs/core';
import styles from './Instagram.module.css';

interface InstagramProps {
    title?: string;
    handle?: string;
}

export const Instagram = ({
    title = "Follow us on Instagram",
    handle = "@lecturesafterdark"
}: InstagramProps) => {
    const { connectors: { connect, drag } } = useNode();

    const images = [
        'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    ];

    return (
        <section
            ref={(ref: HTMLElement | null) => {
                if (ref) {
                    connect(drag(ref));
                }
            }}
            className={styles.section}
        >
            <div className="container">
                <h3 className={styles.title}>{title}</h3>
                <a href="#" className={styles.handle}>{handle}</a>

                <div className={styles.grid}>
                    {images.map((src, index) => (
                        <div key={index} className={styles.imageWrapper}>
                            <img src={src} alt={`Instagram post ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const InstagramSettings = () => {
    const { actions: { setProp }, title, handle } = useNode((node) => ({
        title: node.data.props.title,
        handle: node.data.props.handle,
    }));

    return (
        <div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Title</label>
                <input
                    type="text"
                    value={title || ''}
                    onChange={(e) => setProp((props: InstagramProps) => props.title = e.target.value)}
                    style={{ width: '100%', padding: '5px' }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Handle</label>
                <input
                    type="text"
                    value={handle || ''}
                    onChange={(e) => setProp((props: InstagramProps) => props.handle = e.target.value)}
                    style={{ width: '100%', padding: '5px' }}
                />
            </div>
        </div>
    );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(Instagram as any).craft = {
    props: {
        title: "Follow us on Instagram",
        handle: "@lecturesafterdark"
    },
    related: {
        settings: InstagramSettings
    }
};

export default Instagram;
