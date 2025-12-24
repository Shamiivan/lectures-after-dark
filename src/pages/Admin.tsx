import React from 'react';
import { useParams } from 'react-router-dom';
import { Editor, Frame, Element } from '@craftjs/core';
import { Hero } from '../components/Hero';
import { Instagram } from '../components/Instagram';
import { IdeaSection } from '../components/IdeaSection';
import { SpeakersHeader } from '../components/speakers/SpeakersHeader';
import { SpeakersInfo } from '../components/speakers/SpeakersInfo';
import { SpeakersList } from '../components/speakers/SpeakersList';
import { SpeakersCTA } from '../components/speakers/SpeakersCTA';
import { SettingsPanel } from '../components/SettingsPanel';

import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { Topbar } from '../components/Topbar';

const Admin: React.FC = () => {

    const { slug } = useParams<{ slug: string }>();
    const pageSlug = slug || "home";
    const pageData = useQuery(api.pages.getPage, { slug: pageSlug });
    console.log('Admin Render:', { pageSlug, pageData, Hero, Instagram, IdeaSection });

    if (pageData === undefined) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading Editor...</div>;
    }

    console.log('Components Check:', { Hero, Instagram, IdeaSection });

    // Parse layout data from database
    const layoutData = pageData?.layout
        ? (typeof pageData.layout === 'string' ? JSON.parse(pageData.layout) : pageData.layout)
        : undefined;

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <Editor resolver={{ Hero, Instagram, IdeaSection, SpeakersHeader, SpeakersInfo, SpeakersList, SpeakersCTA }}>
                <Topbar />
                <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                    <div style={{ flex: 1, overflow: 'auto', padding: '20px', background: '#e0e0e0' }}>
                        <div style={{ background: 'white', minHeight: '100%', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                            <Frame json={layoutData}>
                                <Element is="div" style={{ padding: '20px', minHeight: '800px' }} canvas>
                                    {pageSlug === 'home' ? (
                                        <>
                                            <Hero />
                                            <IdeaSection />
                                            <Instagram />
                                        </>
                                    ) : pageSlug === 'speakers' ? (
                                        <>
                                            <SpeakersHeader />
                                            <SpeakersInfo />
                                            <SpeakersList />
                                            <SpeakersCTA />
                                        </>
                                    ) : (
                                        <div style={{ padding: '20px', textAlign: 'center', color: '#888' }}>
                                            <h2>New Page</h2>
                                            <p>Drag components here to start building.</p>
                                        </div>
                                    )}
                                </Element>
                            </Frame>
                        </div>
                    </div>
                    <SettingsPanel />
                </div>
            </Editor>
        </div>
    );
};

export default Admin;
