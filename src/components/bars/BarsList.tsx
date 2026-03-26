import { useNode } from '@craftjs/core';
import styles from '../../pages/Venues.module.css';
import { BarCard } from '../BarCard';
import { useVenues } from '../../hooks/useTinaContent';
import { settingsStyles } from '../settings/settingsStyles';

interface BarsListProps {
    title?: string;
}

export const BarsList = ({
    title = "Partner Bars"
}: BarsListProps) => {
    const { connectors: { connect, drag } } = useNode();
    const { venues, loading } = useVenues();

    return (
        <section
            ref={(ref: HTMLElement | null) => { if (ref) connect(drag(ref)); }}
            className={styles.speakersSection}
        >
            <div className="container">
                <h2 className={styles.sectionTitle}>{title}</h2>
                {loading ? (
                    <p style={{ textAlign: 'center', opacity: 0.6 }}>Loading venues...</p>
                ) : venues.length > 0 ? (
                    <div className={styles.speakersGrid}>
                        {venues.map((venue) => (
                            <BarCard
                                key={venue.id}
                                name={venue.name}
                                neighborhood={venue.neighborhood}
                                description={venue.description ?? undefined}
                                imageUrl={venue.imageUrl ?? undefined}
                                mapsLink={venue.mapsLink ?? undefined}
                            />
                        ))}
                    </div>
                ) : (
                    <p style={{ textAlign: 'center', opacity: 0.6 }}>No venues yet. Add venues in the TinaCMS admin.</p>
                )}
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
            <div style={settingsStyles.field}>
                <label style={settingsStyles.label}>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={e => setProp((p: BarsListProps) => p.title = e.target.value)}
                    style={settingsStyles.input}
                />
            </div>
        </div>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(BarsList as any).craft = {
    props: { title: "Partner Bars" },
    related: { settings: BarsListSettings }
};
