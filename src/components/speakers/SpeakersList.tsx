import { useNode } from '@craftjs/core';
import styles from '../../pages/Speakers.module.css';
import { SpeakerCard } from '../SpeakerCard';
import { useSpeakers } from '../../hooks/useTinaContent';
import { settingsStyles } from '../settings/settingsStyles';

interface SpeakersListProps {
    title?: string;
}

export const SpeakersList = ({
    title = "Past & Future Speakers"
}: SpeakersListProps) => {
    const { connectors: { connect, drag } } = useNode();
    const { speakers, loading } = useSpeakers();

    return (
        <section
            ref={(ref: HTMLElement | null) => { if (ref) connect(drag(ref)); }}
            className={styles.speakersSection}
        >
            <div className="container">
                <h2 className={styles.sectionTitle}>{title}</h2>
                {loading ? (
                    <p style={{ textAlign: 'center', opacity: 0.6 }}>Loading speakers...</p>
                ) : speakers.length > 0 ? (
                    <div className={styles.speakersGrid}>
                        {speakers.map((speaker) => (
                            <SpeakerCard
                                key={speaker.id}
                                name={speaker.name}
                                topic={speaker.topic ?? undefined}
                                bio={speaker.bio ?? undefined}
                                image={speaker.image ?? undefined}
                                twitter={speaker.twitter ?? undefined}
                                linkedin={speaker.linkedin ?? undefined}
                                website={speaker.website ?? undefined}
                            />
                        ))}
                    </div>
                ) : (
                    <p style={{ textAlign: 'center', opacity: 0.6 }}>No speakers yet. Add speakers in the TinaCMS admin.</p>
                )}
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
            <div style={settingsStyles.field}>
                <label style={settingsStyles.label}>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={e => setProp((p: SpeakersListProps) => p.title = e.target.value)}
                    style={settingsStyles.input}
                />
            </div>
        </div>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(SpeakersList as any).craft = {
    props: { title: "Past & Future Speakers" },
    related: { settings: SpeakersListSettings }
};
