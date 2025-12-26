
import { useNode } from '@craftjs/core';
import { Check } from 'lucide-react';

interface IdeaSectionProps {
    title?: string;
    description1?: string;
    description2?: string;
}

export const IdeaSection = ({
    title = "The Idea",
    description1 = "Lectures After Dark is a growing movement of intellectual social events that combine academic learning settings with the social experience of a bar.",
    description2 = "Our events are designed to be accessible to everyone while still offering deep insights. Curiosity is the only requirement."
}: IdeaSectionProps) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <section
            ref={(ref: HTMLElement | null) => {
                if (ref) {
                    connect(drag(ref));
                }
            }}
            id="about"
            className="py-32 bg-warm-brown relative overflow-hidden"
        >
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                    <div>
                        {/* Title with gold accent bar */}
                        <div className="flex items-center gap-4 !mb-12">
                            <div className="w-12 h-1 bg-gradient-to-r from-gold to-amber rounded-full max-md:w-8"></div>
                            <h2 className="font-headline text-5xl text-cream md:text-[3.5rem]">{title}</h2>
                        </div>

                        <p className="font-serif text-xl leading-[1.8] text-cream !mb-10">{description1}</p>
                        <p className="font-serif text-xl leading-[1.8] text-cream !mb-12">{description2}</p>

                        {/* Ornamental divider */}
                        <div className="flex items-center gap-3 !mb-12">
                            <div className="h-[2px] w-16 bg-gradient-to-r from-gold/60 to-transparent"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-gold/60"></div>
                            <div className="h-[2px] w-16 bg-gradient-to-l from-gold/60 to-transparent"></div>
                        </div>

                        <ul className="space-y-5">
                            <li className="flex items-center gap-4 font-headline text-base text-cream uppercase tracking-wide">
                                <span className="text-gold flex items-center justify-center w-7 h-7 border-2 border-gold rounded-full bg-gold/10"><Check size={16} /></span>
                                Fun and Engaging Speakers
                            </li>
                            <li className="flex items-center gap-4 font-headline text-base text-cream uppercase tracking-wide">
                                <span className="text-gold flex items-center justify-center w-7 h-7 border-2 border-gold rounded-full bg-gold/10"><Check size={16} /></span>
                                Professors and Industry Leaders
                            </li>
                            <li className="flex items-center gap-4 font-headline text-base text-cream uppercase tracking-wide">
                                <span className="text-gold flex items-center justify-center w-7 h-7 border-2 border-gold rounded-full bg-gold/10"><Check size={16} /></span>
                                Education and Entertainment
                            </li>
                        </ul>
                    </div>

                    <div className="relative">
                        {/* Enhanced image with border and shadow */}
                        <div className="relative p-1 bg-gradient-to-br from-gold via-amber to-gold rounded-lg">
                            <img
                                src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                alt="Cocktails and Conversation"
                                className="w-full rounded-md shadow-[12px_12px_24px_rgba(0,0,0,0.4)] [filter:sepia(0.15)_contrast(1.05)_brightness(0.95)]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const IdeaSectionSettings = () => {
    const { actions: { setProp }, title, description1, description2 } = useNode((node) => ({
        title: node.data.props.title,
        description1: node.data.props.description1,
        description2: node.data.props.description2,
    }));

    return (
        <div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Title</label>
                <input
                    type="text"
                    value={title || ''}
                    onChange={(e) => setProp((props: IdeaSectionProps) => props.title = e.target.value)}
                    style={{ width: '100%', padding: '5px' }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Description 1</label>
                <textarea
                    value={description1 || ''}
                    onChange={(e) => setProp((props: IdeaSectionProps) => props.description1 = e.target.value)}
                    style={{ width: '100%', padding: '5px', minHeight: '80px' }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Description 2</label>
                <textarea
                    value={description2 || ''}
                    onChange={(e) => setProp((props: IdeaSectionProps) => props.description2 = e.target.value)}
                    style={{ width: '100%', padding: '5px', minHeight: '80px' }}
                />
            </div>
        </div>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(IdeaSection as any).craft = {
    props: {
        title: "The Idea",
        description1: "Lectures After Dark is a growing movement of intellectual social events that combine academic learning settings with the social experience of a bar.",
        description2: "Our events are designed to be accessible to everyone while still offering deep insights. Curiosity is the only requirement."
    },
    related: {
        settings: IdeaSectionSettings
    }
};

export default IdeaSection;
