import { useNode } from '@craftjs/core';
import { Card } from './Card';
import styles from './SponsorCard.module.css';
import { ImageUploadField } from './ImageUploadField';

interface SponsorCardProps {
    name?: string;
    tier?: string;
    description?: string;
    image?: string;
}

export const SponsorCard = ({
    name = "Sponsor Name",
    tier = "Sponsorship Tier",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image = "/logo.png",
}: SponsorCardProps) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <div
            ref={(ref: HTMLDivElement | null) => {
                if (ref) {
                    connect(drag(ref));
                }
            }}
            style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
            <Card
                variant="image-top"
                image={image}
                imageHeight="200px"
                padding="medium"
                hoverable={true}
            >
                <h3 className={styles.sponsorName}>{name}</h3>
                <span className={styles.sponsorTier}>{tier}</span>
                <p className={styles.sponsorDescription}>{description}</p>
            </Card>
        </div>
    );
};

const SponsorCardSettings = () => {
    const { actions: { setProp }, name, tier, description, image } = useNode((node) => ({
        name: node.data.props.name,
        tier: node.data.props.tier,
        description: node.data.props.description,
        image: node.data.props.image,
    }));

    return (
        <div>
            <ImageUploadField
                label="Image URL"
                value={image || ''}
                onChange={(newUrl) => setProp((props: SponsorCardProps) => props.image = newUrl)}
            />
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Name</label>
                <input
                    type="text"
                    value={name || ''}
                    onChange={(e) => setProp((props: SponsorCardProps) => props.name = e.target.value)}
                    style={{ width: '100%', padding: '5px' }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Tier</label>
                <input
                    type="text"
                    value={tier || ''}
                    onChange={(e) => setProp((props: SponsorCardProps) => props.tier = e.target.value)}
                    style={{ width: '100%', padding: '5px' }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Description</label>
                <textarea
                    value={description || ''}
                    onChange={(e) => setProp((props: SponsorCardProps) => props.description = e.target.value)}
                    style={{ width: '100%', padding: '5px', minHeight: '100px' }}
                />
            </div>
        </div>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(SponsorCard as any).craft = {
    props: {
        name: "Sponsor Name",
        tier: "Sponsorship Tier",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/logo.png",
    },
    related: {
        settings: SponsorCardSettings
    }
};
