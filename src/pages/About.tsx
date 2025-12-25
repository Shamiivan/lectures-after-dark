import React from 'react';
import { Editor, Frame, Element } from '@craftjs/core';
import { AboutHeader, AboutMission, OurVision } from '../components/About';

import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';

const About: React.FC = () => {
    const pageData = useQuery(api.pages.getPage, { slug: "about" });

    if (pageData === undefined) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>;
    }

    return (
        <Editor enabled={false} resolver={{ AboutHeader, AboutMission, OurVision }}>
            <Frame json={pageData?.layout}>
                <Element is="div" canvas>
                    <AboutHeader />
                    <AboutMission />
                    <OurVision />
                </Element>
            </Frame>
        </Editor>
    );
};

export default About;
