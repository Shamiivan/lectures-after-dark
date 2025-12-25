import type { ReactNode } from 'react';
import { useNode } from '@craftjs/core';
import styles from './Card.module.css';

export interface CardProps {
    variant?: 'default' | 'elevated' | 'outlined' | 'image-top';
    image?: string;
    imageHeight?: string;
    padding?: 'none' | 'small' | 'medium' | 'large';
    hoverable?: boolean;
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
}

export const Card = ({
    variant = 'default',
    image,
    imageHeight = '240px',
    padding = 'medium',
    hoverable = true,
    className = '',
    children,
    onClick
}: CardProps) => {
    const { connectors: { connect, drag } } = useNode();

    const cardClasses = [
        styles.card,
        styles[variant],
        styles[`padding-${padding}`],
        hoverable && styles.hoverable,
        className
    ].filter(Boolean).join(' ');

    return (
        <div
            ref={(ref: HTMLDivElement | null) => {
                if (ref) connect(drag(ref));
            }}
            className={cardClasses}
            onClick={onClick}
        >
            {image && (
                <div className={styles.imageWrapper} style={{ height: imageHeight }}>
                    <img src={image} alt="" className={styles.image} />
                </div>
            )}
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

const CardSettings = () => {
    const { actions: { setProp }, variant, image, imageHeight, padding, hoverable } = useNode((node) => ({
        variant: node.data.props.variant,
        image: node.data.props.image,
        imageHeight: node.data.props.imageHeight,
        padding: node.data.props.padding,
        hoverable: node.data.props.hoverable,
    }));

    return (
        <div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Variant</label>
                <select
                    value={variant}
                    onChange={(e) => setProp((props: CardProps) => props.variant = e.target.value as 'default' | 'elevated' | 'outlined' | 'image-top')}
                    style={{ width: '100%', padding: '5px' }}
                >
                    <option value="default">Default</option>
                    <option value="elevated">Elevated</option>
                    <option value="outlined">Outlined</option>
                    <option value="image-top">Image Top</option>
                </select>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Image URL</label>
                <input
                    type="text"
                    value={image || ''}
                    onChange={(e) => setProp((props: CardProps) => props.image = e.target.value)}
                    style={{ width: '100%', padding: '5px' }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Image Height</label>
                <input
                    type="text"
                    value={imageHeight}
                    onChange={(e) => setProp((props: CardProps) => props.imageHeight = e.target.value)}
                    style={{ width: '100%', padding: '5px' }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Padding</label>
                <select
                    value={padding}
                    onChange={(e) => setProp((props: CardProps) => props.padding = e.target.value as 'none' | 'small' | 'medium' | 'large')}
                    style={{ width: '100%', padding: '5px' }}
                >
                    <option value="none">None</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <input
                        type="checkbox"
                        checked={hoverable}
                        onChange={(e) => setProp((props: CardProps) => props.hoverable = e.target.checked)}
                    />
                    Hoverable
                </label>
            </div>
        </div>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(Card as any).craft = {
    props: {
        variant: 'default',
        imageHeight: '240px',
        padding: 'medium',
        hoverable: true,
    },
    related: {
        settings: CardSettings
    }
};
