import { useNode, Element } from "@craftjs/core";
import { Text } from "./Text";
import { Image } from "./Image";
import styles from "./EventCard.module.css";
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

export const EventCard = () => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <div
            ref={(ref: any) => connect(drag(ref))}
            className={styles.card}
        >
            <div className={styles.cardImage}>
                <Element
                    id="event-image"
                    is={Image}
                    alt="Event Image"
                    width="100%"
                    height="100%"
                />
            </div>
            <div className={styles.cardContent}>
                <div className={styles.tag}>
                    <Element
                        id="event-tag"
                        is={Text}
                        text="Category"
                        tagName="span"
                        fontSize="0.75rem"
                        fontFamily="var(--font-headline)"
                        color="var(--gold)"
                        textTransform="uppercase"
                        letterSpacing="0.1em"
                    />
                </div>
                <div className={styles.cardTitle}>
                    <Element
                        id="event-title"
                        is={Text}
                        text="Event Title Goes Here"
                        tagName="h3"
                        fontSize="1.5rem"
                        fontFamily="var(--font-headline)"
                        color="var(--midnight)"
                        lineHeight={1.2}
                    />
                </div>
                <div className={styles.meta}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Calendar size={14} />
                        <Element
                            id="event-date"
                            is={Text}
                            text="Jan 01, 2025"
                            tagName="span"
                            fontSize="0.9rem"
                            fontFamily="var(--font-body)"
                            color="var(--warm-brown)"
                        />
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <MapPin size={14} />
                        <Element
                            id="event-location"
                            is={Text}
                            text="City, Country"
                            tagName="span"
                            fontSize="0.9rem"
                            fontFamily="var(--font-body)"
                            color="var(--warm-brown)"
                        />
                    </span>
                </div>
                <div className={styles.link}>
                    <Element
                        id="event-register"
                        is={Text}
                        text="Register"
                        tagName="span"
                        fontSize="0.9rem"
                        fontWeight={600}
                        color="var(--amber)"
                        textTransform="uppercase"
                        letterSpacing="0.05em"
                    />
                    <ArrowRight size={16} />
                </div>
            </div>
        </div>
    );
};

export const EventCardSettings = () => {
    return <div></div>;
};

EventCard.craft = {
    displayName: "Event Card",
    props: {},
    related: {
        settings: EventCardSettings,
    },
    rules: {
        canDrag: () => true,
    },
};
