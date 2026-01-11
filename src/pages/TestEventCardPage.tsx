import React from 'react';
import { Editor, Frame, Element } from '@craftjs/core';
import { EventCard } from '../components/EventCard';

const TestEventCardPage: React.FC = () => {
    return (
        <Editor enabled={false} resolver={{ EventCard }}>
            <Frame>
                <Element is="div" canvas className="bg-gray-900 min-h-screen flex items-center justify-center p-8">
                    <EventCard />
                </Element>
            </Frame>
        </Editor>
    );
};

export default TestEventCardPage;
