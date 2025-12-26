import { useNode } from '@craftjs/core';
import { useState } from 'react';

interface HowToJoinProps {
    label?: string;
    title?: string;
    description?: string;
    step1Title?: string;
    step1Description?: string;
    step1Image?: string;
    step1Label?: string;
    step2Title?: string;
    step2Description?: string;
    step2Image?: string;
    step2Label?: string;
    step3Title?: string;
    step3Description?: string;
    step3Image?: string;
    step3Label?: string;
    step4Title?: string;
    step4Description?: string;
    step4Image?: string;
    step4Label?: string;
}

export const HowToJoin = ({
    label = "Process",
    title = "How to join a lecture after dark",
    description = "We keep it straightforward. Pick an event, get your ticket, arrive early, and stay for the conversation.",
    step1Title = "Find what calls to you",
    step1Description = "Scan our calendar for topics that matter. History, science, art, politics. Something new every week.",
    step1Image = "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    step1Label = "Browse events",
    step2Title = "Get your ticket",
    step2Description = "Purchase your ticket online. Early bird pricing available for most events.",
    step2Image = "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    step2Label = "Get your ticket",
    step3Title = "Attend the lecture",
    step3Description = "Arrive early, grab a drink, and settle in for an engaging evening of learning.",
    step3Image = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    step3Label = "Attend the lecture",
    step4Title = "Stay and talk",
    step4Description = "After the lecture, stick around to discuss ideas with fellow curious minds.",
    step4Image = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    step4Label = "Stay and talk"
}: HowToJoinProps) => {
    const { connectors: { connect, drag } } = useNode();
    const [activeStep, setActiveStep] = useState(1);

    const steps = [
        { number: 1, title: step1Title, description: step1Description, image: step1Image, label: step1Label },
        { number: 2, title: step2Title, description: step2Description, image: step2Image, label: step2Label },
        { number: 3, title: step3Title, description: step3Description, image: step3Image, label: step3Label },
        { number: 4, title: step4Title, description: step4Description, image: step4Image, label: step4Label },
    ];

    return (
        <section
            ref={(ref: HTMLElement | null) => {
                if (ref) {
                    connect(drag(ref));
                }
            }}
            className="py-20 bg-cream"
        >
            <div className="container">
                {/* Header */}
                <div className="!mb-12">
                    <p className="text-sm uppercase tracking-widest text-midnight/60 !mb-4 font-headline">{label}</p>
                    <h2 className="font-headline text-4xl md:text-5xl text-midnight !mb-6">{title}</h2>
                    <p className="font-serif text-lg text-midnight/80 max-w-2xl">{description}</p>
                </div>

                {/* Process Grid */}
                <div className="grid grid-cols-4 border-2 border-midnight bg-cream overflow-hidden">
                    {steps.map((step, index) => {
                        const isActive = activeStep === step.number;
                        const isLast = index === steps.length - 1;

                        return (
                            <div
                                key={step.number}
                                onClick={() => setActiveStep(step.number)}
                                className={`
                                    ${isActive ? 'col-span-4 md:col-span-1' : 'col-span-1'}
                                    ${!isLast ? 'border-r-2 border-midnight' : ''}
                                    p-8 relative transition-all duration-500 cursor-pointer
                                    ${isActive ? 'min-h-[500px]' : 'min-h-[400px]'}
                                `}
                            >
                                <div className="text-2xl font-headline !mb-6">
                                    {step.number.toString().padStart(2, '0')}
                                </div>

                                {/* Expanded content */}
                                {isActive && (
                                    <div className="animate-fadeIn">
                                        <h3 className="font-headline text-2xl text-midnight !mb-4">{step.title}</h3>
                                        <p className="font-body text-sm text-midnight/70 !mb-6 leading-relaxed">{step.description}</p>

                                        {/* Image */}
                                        <div className="bg-cream-dark/30 aspect-[4/3] flex items-center justify-center !mb-6 overflow-hidden">
                                            <img
                                                src={step.image}
                                                alt={step.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Vertical text - always visible */}
                                <div className={`absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 origin-center whitespace-nowrap ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                                    <span className="text-xs uppercase tracking-widest font-headline text-midnight/60">{step.label}</span>
                                </div>

                                {/* Collapsed state - show vertical text centered */}
                                {!isActive && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="rotate-90 origin-center whitespace-nowrap">
                                            <span className="text-xs uppercase tracking-widest font-headline text-midnight/60">{step.label}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const HowToJoinSettings = () => {
    const {
        actions: { setProp },
        label,
        title,
        description,
        step1Title,
        step1Description,
        step1Image,
        step1Label,
        step2Title,
        step2Description,
        step2Image,
        step2Label,
        step3Title,
        step3Description,
        step3Image,
        step3Label,
        step4Title,
        step4Description,
        step4Image,
        step4Label
    } = useNode((node) => ({
        label: node.data.props.label,
        title: node.data.props.title,
        description: node.data.props.description,
        step1Title: node.data.props.step1Title,
        step1Description: node.data.props.step1Description,
        step1Image: node.data.props.step1Image,
        step1Label: node.data.props.step1Label,
        step2Title: node.data.props.step2Title,
        step2Description: node.data.props.step2Description,
        step2Image: node.data.props.step2Image,
        step2Label: node.data.props.step2Label,
        step3Title: node.data.props.step3Title,
        step3Description: node.data.props.step3Description,
        step3Image: node.data.props.step3Image,
        step3Label: node.data.props.step3Label,
        step4Title: node.data.props.step4Title,
        step4Description: node.data.props.step4Description,
        step4Image: node.data.props.step4Image,
        step4Label: node.data.props.step4Label,
    }));

    const fieldStyle = {
        marginBottom: '14px',
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '6px',
        fontSize: '13px',
        fontWeight: 500,
        color: '#475569',
    };

    const inputStyle = {
        width: '100%',
        padding: '8px 10px',
        fontSize: '14px',
        border: '1px solid #cbd5e1',
        borderRadius: '6px',
        background: '#ffffff',
        color: '#1e293b',
        outline: 'none',
        transition: 'border-color 0.2s',
    };

    return (
        <div>
            <div style={fieldStyle}>
                <label style={labelStyle}>Section Label</label>
                <input
                    type="text"
                    value={label || ''}
                    onChange={(e) => setProp((props: HowToJoinProps) => props.label = e.target.value)}
                    style={inputStyle}
                />
            </div>

            <div style={fieldStyle}>
                <label style={labelStyle}>Title</label>
                <input
                    type="text"
                    value={title || ''}
                    onChange={(e) => setProp((props: HowToJoinProps) => props.title = e.target.value)}
                    style={inputStyle}
                />
            </div>

            <div style={fieldStyle}>
                <label style={labelStyle}>Description</label>
                <textarea
                    value={description || ''}
                    onChange={(e) => setProp((props: HowToJoinProps) => props.description = e.target.value)}
                    style={{...inputStyle, minHeight: '60px'}}
                />
            </div>

            <div style={fieldStyle}>
                <label style={labelStyle}>Step 1 Title</label>
                <input
                    type="text"
                    value={step1Title || ''}
                    onChange={(e) => setProp((props: HowToJoinProps) => props.step1Title = e.target.value)}
                    style={inputStyle}
                />
            </div>

            <div style={fieldStyle}>
                <label style={labelStyle}>Step 1 Description</label>
                <textarea
                    value={step1Description || ''}
                    onChange={(e) => setProp((props: HowToJoinProps) => props.step1Description = e.target.value)}
                    style={{...inputStyle, minHeight: '60px'}}
                />
            </div>

            <div style={fieldStyle}>
                <label style={labelStyle}>Step 1 Image URL</label>
                <input
                    type="text"
                    value={step1Image || ''}
                    onChange={(e) => setProp((props: HowToJoinProps) => props.step1Image = e.target.value)}
                    style={inputStyle}
                />
            </div>

            <div style={fieldStyle}>
                <label style={labelStyle}>Step 1 Label</label>
                <input
                    type="text"
                    value={step1Label || ''}
                    onChange={(e) => setProp((props: HowToJoinProps) => props.step1Label = e.target.value)}
                    style={inputStyle}
                />
            </div>

            <div style={fieldStyle}>
                <label style={labelStyle}>Step 2 Title</label>
                <input
                    type="text"
                    value={step2Title || ''}
                    onChange={(e) => setProp((props: HowToJoinProps) => props.step2Title = e.target.value)}
                    style={inputStyle}
                />
            </div>

            <div style={fieldStyle}>
                <label style={labelStyle}>Step 2 Description</label>
                <textarea
                    value={step2Description || ''}
                    onChange={(e) => setProp((props: HowToJoinProps) => props.step2Description = e.target.value)}
                    style={{...inputStyle, minHeight: '60px'}}
                />
            </div>

            <div style={fieldStyle}>
                <label style={labelStyle}>Step 2 Image URL</label>
                <input
                    type="text"
                    value={step2Image || ''}
                    onChange={(e) => setProp((props: HowToJoinProps) => props.step2Image = e.target.value)}
                    style={inputStyle}
                />
            </div>

            <div style={fieldStyle}>
                <label style={labelStyle}>Step 2 Label</label>
                <input
                    type="text"
                    value={step2Label || ''}
                    onChange={(e) => setProp((props: HowToJoinProps) => props.step2Label = e.target.value)}
                    style={inputStyle}
                />
            </div>

            <div style={fieldStyle}>
                <label style={labelStyle}>Step 3 Title</label>
                <input
                    type="text"
                    value={step3Title || ''}
                    onChange={(e) => setProp((props: HowToJoinProps) => props.step3Title = e.target.value)}
                    style={inputStyle}
                />
            </div>

            <div style={fieldStyle}>
                <label style={labelStyle}>Step 3 Description</label>
                <textarea
                    value={step3Description || ''}
                    onChange={(e) => setProp((props: HowToJoinProps) => props.step3Description = e.target.value)}
                    style={{...inputStyle, minHeight: '60px'}}
                />
            </div>

            <div style={fieldStyle}>
                <label style={labelStyle}>Step 3 Image URL</label>
                <input
                    type="text"
                    value={step3Image || ''}
                    onChange={(e) => setProp((props: HowToJoinProps) => props.step3Image = e.target.value)}
                    style={inputStyle}
                />
            </div>

            <div style={fieldStyle}>
                <label style={labelStyle}>Step 3 Label</label>
                <input
                    type="text"
                    value={step3Label || ''}
                    onChange={(e) => setProp((props: HowToJoinProps) => props.step3Label = e.target.value)}
                    style={inputStyle}
                />
            </div>

            <div style={fieldStyle}>
                <label style={labelStyle}>Step 4 Title</label>
                <input
                    type="text"
                    value={step4Title || ''}
                    onChange={(e) => setProp((props: HowToJoinProps) => props.step4Title = e.target.value)}
                    style={inputStyle}
                />
            </div>

            <div style={fieldStyle}>
                <label style={labelStyle}>Step 4 Description</label>
                <textarea
                    value={step4Description || ''}
                    onChange={(e) => setProp((props: HowToJoinProps) => props.step4Description = e.target.value)}
                    style={{...inputStyle, minHeight: '60px'}}
                />
            </div>

            <div style={fieldStyle}>
                <label style={labelStyle}>Step 4 Image URL</label>
                <input
                    type="text"
                    value={step4Image || ''}
                    onChange={(e) => setProp((props: HowToJoinProps) => props.step4Image = e.target.value)}
                    style={inputStyle}
                />
            </div>

            <div style={fieldStyle}>
                <label style={labelStyle}>Step 4 Label</label>
                <input
                    type="text"
                    value={step4Label || ''}
                    onChange={(e) => setProp((props: HowToJoinProps) => props.step4Label = e.target.value)}
                    style={inputStyle}
                />
            </div>
        </div>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(HowToJoin as any).craft = {
    props: {
        label: "Process",
        title: "How to join a lecture after dark",
        description: "We keep it straightforward. Pick an event, get your ticket, arrive early, and stay for the conversation.",
        step1Title: "Find what calls to you",
        step1Description: "Scan our calendar for topics that matter. History, science, art, politics. Something new every week.",
        step1Image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        step1Label: "Browse events",
        step2Title: "Get your ticket",
        step2Description: "Purchase your ticket online. Early bird pricing available for most events.",
        step2Image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        step2Label: "Get your ticket",
        step3Title: "Attend the lecture",
        step3Description: "Arrive early, grab a drink, and settle in for an engaging evening of learning.",
        step3Image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        step3Label: "Attend the lecture",
        step4Title: "Stay and talk",
        step4Description: "After the lecture, stick around to discuss ideas with fellow curious minds.",
        step4Image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        step4Label: "Stay and talk"
    },
    related: {
        settings: HowToJoinSettings
    }
};

export default HowToJoin;
