import React from 'react';
import { Editor, Frame, Element } from '@craftjs/core';
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { CircularProgress, Box } from "@mui/material";

// User Components
import { Text } from '../components/user/Text';
import { Button } from '../components/user/Button';
import { Container } from '../components/user/Container';
import { Card } from '../components/user/Card';

// Legacy Components (for fallback/migration)
import Hero from '../components/Hero';
import UpcomingEvents from '../components/UpcomingEvents';
import WhyWeDoIt from '../components/WhyWeDoIt';
import IdeaSection from '../components/IdeaSection';
import Instagram from '../components/Instagram';
import FAQ from '../components/FAQ';

const Home: React.FC = () => {
    const pageData = useQuery(api.pages.getPage, { slug: "home" });

    if (pageData === undefined) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        );
    }

    // If we have saved content, render it.
    // Otherwise, render the hardcoded components (wrapped in Craft.js for consistency if we want, 
    // but for now let's just render the saved JSON or nothing if empty/null).
    // Actually, to be safe, if no content, we can render the original hardcoded layout 
    // BUT since we want to prove the editor works, let's render the editor content.

    return (
        <div className="home-page">
            <Editor enabled={false} resolver={{ Text, Button, Container, Card }}>
                {pageData?.content ? (
                    <Frame json={pageData.content} />
                ) : (
                    // Fallback to original layout if no saved data (optional, but good for safety)
                    // For this demo, let's just show a message or empty frame if nothing saved.
                    // Or better, let's render the original components as a static fallback.
                    <>
                        <Hero />
                        <UpcomingEvents />
                        <IdeaSection />
                        <WhyWeDoIt />
                        <Instagram />
                        <FAQ />
                    </>
                )}
            </Editor>
        </div>
    );
};

export default Home;
