import React from 'react';
import { Editor, Frame, Element } from '@craftjs/core';
import { Hero } from '../components/Hero';
import UpcomingEvents from '../components/UpcomingEvents';
import WhyWeDoIt from '../components/WhyWeDoIt';
import { IdeaSection } from '../components/IdeaSection';
import { Instagram } from '../components/Instagram';
import FAQ from '../components/FAQ';

const Home: React.FC = () => {
    return (
        <Editor enabled={false} resolver={{ Hero, Instagram, IdeaSection, UpcomingEvents, WhyWeDoIt, FAQ }}>
            <Frame>
                <Element is="div" canvas>
                    <Hero />
                    <UpcomingEvents />
                    <IdeaSection />
                    <WhyWeDoIt />
                    <Instagram />
                    <FAQ />
                </Element>
            </Frame>
        </Editor>
    );
};

export default Home;
