import { useNode } from '@craftjs/core';

// --- SponsorsHeader ---
interface SponsorsHeaderProps {
    title?: string;
    subtitle?: string;
}

export const SponsorsHeader = ({
    title = "Partner With Lectures After Dark",
    subtitle = "Reach an audience that thinks, drinks, and engages"
}: SponsorsHeaderProps) => {
    const { connectors: { connect, drag } } = useNode();
    return (
        <header
            ref={(ref: HTMLElement | null) => { if (ref) connect(drag(ref)); }}
            className="text-center py-16 px-8 bg-cover bg-center relative flex flex-col items-center justify-center"
            style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)',
                padding: 'clamp(2rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem) clamp(1.5rem, 6vw, 4rem)'
            }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 via-black/50 to-black/70 z-[1]"></div>
            <div className="container mx-auto relative z-[2]">
                <h1 className="text-5xl !text-center text-cream mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: 'clamp(0.75rem, 2vw, 1rem)' }}>{title}</h1>
                <p className="font-serif text-xl !text-center text-cream-dark max-w-2xl !mx-auto" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)' }}>{subtitle}</p>
            </div>
        </header>
    );
};

const SponsorsHeaderSettings = () => {
    const { actions: { setProp }, title, subtitle } = useNode((node) => ({
        title: node.data.props.title,
        subtitle: node.data.props.subtitle,
    }));
    return (
        <div>
            <div className="mb-4">
                <label>Title</label>
                <input type="text" value={title} onChange={e => setProp((p: SponsorsHeaderProps) => p.title = e.target.value)} className="w-full" />
            </div>
            <div className="mb-4">
                <label>Subtitle</label>
                <textarea value={subtitle} onChange={e => setProp((p: SponsorsHeaderProps) => p.subtitle = e.target.value)} className="w-full h-24" />
            </div>
        </div>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(SponsorsHeader as any).craft = {
    props: { title: "Partner With Lectures After Dark", subtitle: "Reach an audience that thinks, drinks, and engages" },
    related: { settings: SponsorsHeaderSettings }
};

// --- SponsorsWhy ---
interface SponsorsWhyProps {
    title?: string;
}


export const SponsorsWhy = ({
    title = "Why Sponsor Us?"
}: SponsorsWhyProps) => {
    const { connectors: { connect, drag } } = useNode();
    return (
        <section
            ref={(ref: HTMLElement | null) => { if (ref) connect(drag(ref)); }}
            className="pt-16 pb-32 bg-white relative overflow-hidden"
        >
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                    <div>
                        {/* Title with gold accent bar */}
                        <div className="flex items-center gap-6 !mb-8">
                            <div className="w-16 h-1 bg-gold"></div>
                            <h2 className="font-headline text-3xl text-midnight md:text-4xl lg:text-5xl">{title}</h2>
                        </div>

                        <p className="font-serif text-base md:text-lg leading-[1.8] text-warm-brown !mb-10">We don't interrupt the experience—we integrate. Sponsors become part of an intellectual movement, not just another logo on a banner. Associate your brand with curiosity, ambition, and meaningful conversation.</p>
                        <p className="font-serif text-base md:text-lg leading-[1.8] text-warm-brown !mb-12">Intellectual social events are filling a gap in adult life. As we expand to new cities and venues, early sponsors position themselves at the forefront of this cultural shift.</p>
                    </div>

                    <div className="relative">
                        <div className="relative p-1 bg-gradient-to-br from-gold/20 to-transparent rounded-lg">
                            <picture>
                                <source srcSet="/idea.webp" type="image/webp" />
                                <img
                                    src="/idea.png"
                                    alt="Cocktails and Conversation"
                                    className="w-full rounded-lg shadow-2xl"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(SponsorsWhy as any).craft = {
    props: { title: "Why Sponsor Us?" },
    related: { settings: () => <div>Static content for now</div> }
};

// --- SponsorsOpportunities ---

import { SponsorCard } from './SponsorCard';
interface SponsorsOpportunitiesProps {
    title?: string;
}

export const SponsorsOpportunities = ({
    title = "Sponsorship Opportunities"
}: SponsorsOpportunitiesProps) => {
    const { connectors: { connect, drag } } = useNode();
    return (
        <section
            ref={(ref: HTMLElement | null) => { if (ref) connect(drag(ref)); }}
            className="py-20 px-8 bg-cream text-midnight"
        >
            <div className="container mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-center !mb-10 text-midnight">{title}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ gridAutoRows: '1fr' }}>
                    <div style={{ display: 'flex' }}>
                        <SponsorCard
                            name="Beverage Partner"
                            tier="Ideal for: Craft breweries, cocktail brands, wine distributors"
                            description="Featured drink at every event. Brand presence on all promotional materials. Social media mentions."
                            image="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&auto=format&fit=crop&q=80"
                        />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <SponsorCard
                            name="Title Sponsor"
                            tier="Ideal for: Publishers, educational platforms, productivity tools"
                            description="Event naming rights. Speaking opportunities or book giveaways. Logo on website, emails, and social content."
                            image="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop&q=80"
                        />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <SponsorCard
                            name="Speaker Series Sponsor"
                            tier="Ideal for: Tech companies, consulting firms"
                            description="Sponsor an entire topic series. Thought leadership positioning. Content collaboration opportunities."
                            image="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=80"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(SponsorsOpportunities as any).craft = {
    props: { title: "Sponsorship Opportunities" },
    related: { settings: () => <div>Static content for now</div> }
};



// --- SponsorsCTA ---
interface SponsorsCTAProps {
    title?: string;
    text?: string;
    buttonText?: string;
    email?: string;
}

export const SponsorsCTA = ({
    title = "Let's Build Something Together",
    text = "We're not just hosting events—we're building a movement. Partner with us to reach an audience that values substance, curiosity, and authentic experiences.",
    buttonText = "Contact Us",
    email = "partnerships@lecturesafterdark.com"
}: SponsorsCTAProps) => {
    const { connectors: { connect, drag } } = useNode();
    return (
        <section
            ref={(ref: HTMLElement | null) => { if (ref) connect(drag(ref)); }}
            className="py-20 px-8 bg-white text-center"
        >
            <div className="container mx-auto max-w-2xl">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-midnight mb-6">{title}</h2>
                <p className="text-base md:text-lg text-warm-brown mb-8">{text}</p>
                <a href={`mailto:${email}`} className="bg-midnight text-cream py-4 px-12 text-lg font-semibold rounded-full transition-transform transform hover:scale-105 inline-block">{buttonText}</a>
            </div>
        </section>
    );
};

const SponsorsCTASettings = () => {
    const { actions: { setProp }, title, text, buttonText, email } = useNode((node) => ({
        title: node.data.props.title,
        text: node.data.props.text,
        buttonText: node.data.props.buttonText,
        email: node.data.props.email,
    }));
    return (
        <div>
            <div className="mb-4">
                <label>Title</label>
                <input type="text" value={title} onChange={e => setProp((p: SponsorsCTAProps) => p.title = e.target.value)} className="w-full" />
            </div>
            <div className="mb-4">
                <label>Text</label>
                <textarea value={text} onChange={e => setProp((p: SponsorsCTAProps) => p.text = e.target.value)} className="w-full h-32" />
            </div>
            <div className="mb-4">
                <label>Button Text</label>
                <input type="text" value={buttonText} onChange={e => setProp((p: SponsorsCTAProps) => p.buttonText = e.target.value)} className="w-full" />
            </div>
            <div className="mb-4">
                <label>Email</label>
                <input type="text" value={email} onChange={e => setProp((p: SponsorsCTAProps) => p.email = e.target.value)} className="w-full" />
            </div>
        </div>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(SponsorsCTA as any).craft = {
    props: {
        title: "Let's Build Something Together",
        text: "We're not just hosting events—we're building a movement...",
        buttonText: "Contact Us",
        email: "partnerships@lecturesafterdark.com"
    },
    related: { settings: SponsorsCTASettings }
};
