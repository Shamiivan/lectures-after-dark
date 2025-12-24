
import { useEditor } from '@craftjs/core';
import { Hero } from './Hero';
import { Instagram } from './Instagram';
import { IdeaSection } from './IdeaSection';
import { SpeakersHeader } from './speakers/SpeakersHeader';
import { SpeakersInfo } from './speakers/SpeakersInfo';
import { SpeakersList } from './speakers/SpeakersList';
import { SpeakersCTA } from './speakers/SpeakersCTA';

export const Toolbox = () => {
    const { connectors } = useEditor();

    return (
        <div style={{ padding: '20px', background: '#f5f5f5', borderRight: '1px solid #ddd', width: '250px' }}>
            <h3 style={{ marginBottom: '15px' }}>Components</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                    ref={(ref: HTMLButtonElement | null) => {
                        if (ref) connectors.create(ref, <Hero />);
                    }}
                    style={{ padding: '10px', cursor: 'grab', background: 'white', border: '1px solid #ccc' }}
                >
                    Hero
                </button>
                <button
                    ref={(ref: HTMLButtonElement | null) => {
                        if (ref) connectors.create(ref, <Instagram />);
                    }}
                    style={{ padding: '10px', cursor: 'grab', background: 'white', border: '1px solid #ccc' }}
                >
                    Instagram
                </button>
                <button
                    ref={(ref: HTMLButtonElement | null) => {
                        if (ref) connectors.create(ref, <IdeaSection />);
                    }}
                    style={{ padding: '10px', cursor: 'grab', background: 'white', border: '1px solid #ccc' }}
                >
                    Idea Section
                </button>
            </div>
            <h3 style={{ marginBottom: '15px', marginTop: '20px' }}>Speakers</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                    ref={(ref: HTMLButtonElement | null) => {
                        if (ref) connectors.create(ref, <SpeakersHeader />);
                    }}
                    style={{ padding: '10px', cursor: 'grab', background: 'white', border: '1px solid #ccc' }}
                >
                    Header
                </button>
                <button
                    ref={(ref: HTMLButtonElement | null) => {
                        if (ref) connectors.create(ref, <SpeakersInfo />);
                    }}
                    style={{ padding: '10px', cursor: 'grab', background: 'white', border: '1px solid #ccc' }}
                >
                    Info
                </button>
                <button
                    ref={(ref: HTMLButtonElement | null) => {
                        if (ref) connectors.create(ref, <SpeakersList />);
                    }}
                    style={{ padding: '10px', cursor: 'grab', background: 'white', border: '1px solid #ccc' }}
                >
                    List
                </button>
                <button
                    ref={(ref: HTMLButtonElement | null) => {
                        if (ref) connectors.create(ref, <SpeakersCTA />);
                    }}
                    style={{ padding: '10px', cursor: 'grab', background: 'white', border: '1px solid #ccc' }}
                >
                    CTA
                </button>
            </div>
        </div>
    );
};
