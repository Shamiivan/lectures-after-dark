
import { useEditor } from '@craftjs/core';
import { Hero } from './Hero';
import { Instagram } from './Instagram';
import { IdeaSection } from './IdeaSection';
import { HowToJoin } from './HowToJoin';

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
                <button
                    ref={(ref: HTMLButtonElement | null) => {
                        if (ref) connectors.create(ref, <HowToJoin />);
                    }}
                    style={{ padding: '10px', cursor: 'grab', background: 'white', border: '1px solid #ccc' }}
                >
                    How To Join
                </button>
            </div>
        </div>
    );
};
